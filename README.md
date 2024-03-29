# Meteor Apollo Accounts

A implementation of Meteor Accounts only in GraphQL with Apollo.

This package uses the Meteor Accounts methods in GraphQL, it's compatible with the accounts you have saved in your database and you may use apollo-accounts and Meteor's DPP accounts at the same time.

> Project sponsored by [Orion Hosting](https://orion.hosting/?utm_source=github-apollo-accounts) - Hosting for Meteor

## Installing

## Install on Meteor server

```sh
meteor add nicolaslopezj:apollo-accounts
yarn add graphql-loader
```

Initialize the package.

```js
import {makeExecutableSchema} from 'graphql-tools'
import {loadSchema, getSchema} from 'graphql-loader'
import {initAccounts} from 'meteor/nicolaslopezj:apollo-accounts'
import typeDefs from './schema'
import resolvers from './resolvers'

// Load all accounts related resolvers and type definitions into graphql-loader
initAccounts({
  loginWithFacebook: false,
  loginWithGoogle: false,
  loginWithLinkedIn: false,
  loginWithPassword: true
})

// Load all your resolvers and type definitions into graphql-loader
loadSchema({typeDefs, resolvers})

// Gets all the resolvers and type definitions loaded in graphql-loader
const schema = getSchema()
const executableSchema = makeExecutableSchema(schema)
```


## Install on your apollo app

May or may not be the same app.

```sh
npm install meteor-apollo-accounts
```

### Examples

- [janikvonrotz/meteor-apollo-accounts-example](https://github.com/janikvonrotz/meteor-apollo-accounts-example): Meteor client and server side.
- [orionsoft/server-boilerplate](https://github.com/orionsoft/server-boilerplate): Large Meteor server side only starter app.

### Tutorials
- [Using Meteor With Apollo and React](https://blog.orionsoft.io/using-meteor-accounts-with-apollo-and-react-df3c89b46b17#.znozw2zbd)

### Example Usage

```js
import React, { Component } from 'react';
import Accounts from 'meteor-apollo-accounts';
import client from './ApolloClient'; // instance of apollo-client

Accounts.initWithClient(client); //do this only once

Accounts.onLogin(() => {
  console.log(Accounts.userId());
});

export default class Login extends Component {
  constructor() {
    this.state = {
      username: '',
      password: ''
    };
    this.login = this.login.bind(this);
    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onPwdChange = this.onPwdChange.bind(this);
  }

  login(e) {
    const { username, password } = this.state;
    e.preventDefault();
    Accounts.loginWithPassword({ username, password })
      .catch(function(err) {
        console.log("Error logging in", err);
      });
  }

  onUsernameChange(event) {
    this.setState({username: event.target.value});
  }

  onPwdChange(event) {
    this.setState({password: event.target.value});
  }

  render() {
    const { username, password } = this.state;
    return (
      <div>
        <form>
          <div className="form-group">
            <input type="text" value={username} onChange={this.onUsernameChange} placeholder="Username" />
            <input type="password" value={password} onChange={this.onPasswordChage} placeholder="Password" />
          </div>
          <button type="submit" onClick={this.login}>Login</button>
        </form>
      </div>
    )
  }
}

```

### Methods

Meteor accounts methods, client side only. All methods are promises.

#### initWithClient

Initialize the accounts system with an instance of Apollo Client. You only need to do this once in your app, typically upon startup.

```js
import ApolloClient from 'apollo-client';
import Accounts from 'meteor-apollo-accounts';

const client = new ApolloClient();

Accounts.initWithClient(client);
```

- ```client```: Your instance of Apollo Client


#### loginWithPassword

Log the user in with a password.

```js
Accounts.loginWithPassword({username, email, password, plainPassword})
```

- ```username```: Optional. The user's username.

- ```email```: Optional. The user's email.

- ```password```: The user's password. The library will hash the string before it sends it to the server.


#### logout

Log the user out.

```js
Accounts.logout()
```

#### onLogin

Register a function to be called when a user logged in

```js
Accounts.onLogin(() => {
  console.log('Current User: ', Accounts.userId())
  ...
  // Fetch data, change routes, etc
})
```

#### onLoginFailure

Register a function to be called when a login attempt is failed

```js
Accounts.onLoginFailure(() => {
  console.log('Login Failed')
  ...
  // Set route to login page, reset store, etc
})
```

#### onLogout

Register a function to be called when a user logs out

```js
Accounts.onLogout(() => {
  console.log('User Logged Out')
  ...
  // Set route to login page, reset store, etc
})
```

#### loggingIn

Returns true if a login method (such as Accounts.loginWithPassword, Accounts.loginWithFacebook, or Accounts.createUser) is currently in progress.
```js
console.log('Currently logging in? : ', Accounts.loggingIn())
```

#### userId

Returns the id of the logged in user.

```js
console.log('The user id is:', Accounts.userId())
```

#### changePassword

Change the current user's password. Must be logged in.

```js
Accounts.changePassword({oldPassword, newPassword})
```

- `oldPassword`: The user's current password. This is not sent in plain text over the wire.

- `newPassword`: A new password for the user. This is not sent in plain text over the wire.


#### createUser

Create a new user.

```js
Accounts.createUser({username, email, password, profile})
```

- `username`: A unique name for this user.

- `email`: The user's email address.

- `password`: The user's password. This is not sent in plain text over the wire.

- `profile`: The profile object based on the ```UserProfileInput``` input type.


#### verifyEmail

Marks the user's email address as verified. Logs the user in afterwards.

```js
Accounts.verifyEmail({token})
```

- ```token```: The token retrieved from the verification URL.

#### forgotPassword

Request a forgot password email.

```js
Accounts.forgotPassword({email})
```

- ```email```: The email address to send a password reset link.

#### resetPassword

Reset the password for a user using a token received in email. Logs the user in afterwards.

```js
Accounts.resetPassword({newPassword, token})
```

- ```newPassword```: A new password for the user. This is not sent in plain text over the wire.

- ```token```: The token retrieved from the reset password URL.

#### loginWithFacebook

Logins the user with a facebook accessToken

```js
Accounts.loginWithFacebook({accessToken})
```

- ```accessToken```: A Facebook accessToken. It's recommended to use
https://github.com/keppelen/react-facebook-login to fetch the accessToken.

#### loginWithGoogle

Logins the user with a google accessToken

```js
Accounts.loginWithGoogle({accessToken})
```

- ```accessToken```: A Google accessToken. It's recommended to use
https://github.com/anthonyjgrove/react-google-login to fetch the accessToken.


### React-Native usage

```js

//First you'll need to import the Storage library that you'll use to store the user details (userId, tokens...),
// AsyncStorage is highly recommended.

import {
  ...
  AsyncStorage
} from 'react-native';


import Accounts, { USER_ID_KEY, TOKEN_KEY, TOKEN_EXPIRES_KEY } from 'meteor-apollo-accounts';
import client from './ApolloClient'; // Your instance of apollo client

// Then you'll have to define a TokenStore for your user data using setTokenStore.
// This should be done before calling Accounts.initWithClient:
Accounts.setTokenStore({
  async set({ userId, token, tokenExpires }) {
    return AsyncStorage.multiSet([
      [USER_ID_KEY, userId],
      [TOKEN_KEY, token],
      [TOKEN_EXPIRES_KEY, tokenExpires.toString()]
    ]);
  },
  async get() {
    const stores = await AsyncStorage.multiGet([
      USER_ID_KEY,
      TOKEN_KEY,
      TOKEN_EXPIRES_KEY
    ]);

    const userId = stores[0][1];
    const token = stores[1][1];
    const tokenExpires = stores[2][1];

    return { userId, token, tokenExpires };
  },
  async remove() {
    return AsyncStorage.multiRemove([
      USER_ID_KEY,
      TOKEN_KEY,
      TOKEN_EXPIRES_KEY
    ]);
  }
});

// Make sure to initialize before calling anything else in Accounts:
Accounts.initWithClient(client);


// Finally, you'll be able to use asynchronously any method from the library :

Accounts.onLogin(() => {
  console.log(Accounts.userId());
});

async login (event) {
  event.preventDefault();

  try {
    const id = await Accounts.loginWithPassword({ "email", "password" })
  } catch (error) {
    console.log("Error logging in: ", error);
  }
}

```



## Contributors

- [@nicolaslopezj](https://github.com/nicolaslopezj)
- [@janikvonrotz](https://github.com/janikvonrotz)
- [@dbrrt](https://github.com/dbrrt)
- [@hammadj](https://github.com/hammadj)
