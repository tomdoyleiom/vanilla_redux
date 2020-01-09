# vanilla_redux
A vanilla ES6 application that uses redux for state management
Was required to do some investigation work into using redux with ES6 javascript.
This project was created for proof of concept and to allow experimenting and templating

## Getting Started

1. clone the repository `git clone https://github.com/tomdoyleiom/vanilla_redux.git vanilla_redux`
2. `cd vanilla_redux && code .` will open the project in vscode
3. from the console (ctr + ') run `npm install` which will install the required packages
4. once the packages have installed run `npm run dev` from the console which will:
   - build the application (in the future this will include sass and minification, but for now just adds bundle.js to build)
   - it will serve the build directory (so that it can be tested, default url: http://localhost:5000)
   - it will serve the json rest api for making fetch requests (default url: http://localhost:3000)
 
## Available scripts
a number of npm scripts have been provided to make it easier to work with this application.

### npm run test
tests the application using jes.
will output the result of testing to the console

### npm run test:watch
same as the above test script, but adds the --watchAll flag so that jest listens for file changes and runs when there are changes

### npm run build
builds the application using webpack

### npm run build:watch
same as the above build script, but adds the --watch flag so that webpack listens for file changes and runs where there are changes

### npm run api
hosts the `db.json` file as a rest API running locally.
can be used to test data calls.
