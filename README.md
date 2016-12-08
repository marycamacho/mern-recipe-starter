# mern-recipe-starter
Personal web app starter with mongo, node+express, react, redux and several other react libraries.

This is intended for me to use to kickstart MERN projects with webpack as the primary processing tool.

URGENT TODO: Remove login with oauth.io

Instructions:

1. Ensure mongo server is installed locally.
2. Create local directory or git repo with read me and clone to local.
3. If this repo is cloned on local - just copy all files to the new repo locally with exception of readme and nodemodules.
4. Edit the mongo-connection.js file with correct URL
5. Update packages.json with correct name, license, version, repo, issues URL, etc.
6. Ensure Mongod is running, run Mongo on Windows 
7. Run NPM i to install all dependencies
8. Run NPM start
9. Create Domain/App in SendGrid and update config as necessary - again... eventually should use own credentials.
10. Push/create in master


Notes:

* Eventually want to have this include a git command for pulling without creating a repo so that it can be used to locally to push and create a new master app repo.
* The dev directory is a working dir that's contains the compiled code for running locally. There is a structure in the webpack for a dist directory that would contain the same compiled code (probably minified) for running in a test or production environment.
* Test directory is a framework for unit testing the componenets in a headless way. New tests can be added.



Create Notes:

* Packages.json
* setup for npm install
* include start and prestart scripts
* ensure mongo node driver is in packages or instructures
* ensure file structure and sample files included have app work with router
* ensure has login 
* include ignore file and config



