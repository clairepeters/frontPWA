# Pwa

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.4.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Server

Run `node server.js` in the correct directory to start the server. The server needs to be in a directory outside of the project. It is only in here to keep it all together. 

## MSSQL Database

this application uses a microsoft SQL database backend to pull mock data and demonstrate how a REST API and a database would connect to angular. 

To create the same database used by the REST API: instal MSSQL and Microsoft SQL Server management studio. Then run the HPE-PWA-Script to create the database. Beware of referential integrity constraints when entering data (make sure category Id's, Doc Id's and user Id's are in their respective tables before adding a document and a bookmark)

!!!!ALSO MAKE SURE YOU HAVE A USER ID OF 12345678 BECAUSE THIS IS HARDCODED INTO THE API SINCE THERE IS NO LOGIN FEATURE!!!!
. 
## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
