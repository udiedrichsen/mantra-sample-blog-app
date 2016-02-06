## Difference to the REAL Mantra
- Routing and Navigation is inside the "main" client folder (wires everything together)
- All module server code must be initialized in the "main" server/main.js
- Modules are in the folder modules
- All module code must initialized thought the app code
- Each module can have a client,libs and server folder
- The client module folder can have multiple parts (Blog posts and comment)
- For each collection we have now one javascript file. For use of schema. See org repo issue number 31
- Add material-ui npm package
- Removed wallaby.js because it causes a problem with material-ui

Everything else is the same. Main change is decoupling the routing and Navigation
to the App and having the module concept also for the server.

### Next steps
- Add material-ui accounting
- add graphql

## A Sample Blog App Written in Mantra

This is a sample blog app written in [Mantra](https://github.com/kadirahq/mantra) covering core features of it.

### Setting Up

* Clone this repo
* Do `npm install` to install dependencies
* Make sure you've installed Meteor locally

### Running The App

Simply start your app with `meteor -p 5005`.
Then you can access the app on <http://localhost:5005>

### Running Tests

In this app, every part of the client side is fully tested using the familiar tools like Mocha, Chai and Sinon.

Run tests with:

```
npm test
```

**See package.json for more information about testing setup.**
