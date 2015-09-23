Savvy
===========

### Technology stack
###### Database
* Mongodb for a document based backend database.

###### Server
* Nodejs as a backend server.
* Expressjs as a wrapper on HTTP for nodejs to process.
* Mongoose as a wrapper for Mongodb native client.

###### Frontend
* AngularJS for frontend modularity and one page app.

###### Testing
* Jasmine tests run through karma on the frontend.
* Mocha tests runon the backend.
* Protractor and Selinium based tests for end to end testing.

### Getting started
1. Install Node.js (We currently use 0.12.7 due package change in yeoman)
  1. Use nvm installer [follow this link](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-with-nvm-node-version-manager-on-a-vps) 
2. Run the following commands in the terminal
  1. ```node -v```
  2. ```npm -v```
  3. Make sure both the above commands were valid and printed out node and npm versions.
3. Set user account as owner of the /usr/local
  ```sudo chown -R $USER /usr/local```
4. Install MongoDB (We use 2.4.1 so find the specific installer or install the specific verison through homebrew. DO NOT USE 1.)
  1. Use Homebrew ```brew install mongodb```
  2. Or, use Installer http://www.mongodb.org/downloads
  3. Or, install specific version using homebrew-versions, e.g. ```brew install Mongodb24``` (at writing, 2.4.11)
  4. Start mongo by running ```mkdir ~/mongo``` ```mkdir ~/mongo/db``` ```mongod --dbpath ~/mongo/db/```
5. Git and checkout app
  1. Install and configure Git https://help.github.com/articles/set-up-git
  2. cd <Github-directory> (e.g ```cd Documents/Github```)
  3. ```git clone https://github.com/savvytoronto/savvy.git```
6. Run the following commands in cloned directory 
```npm install -g bower``` 
```npm install```
```bower install```
7. [Install grunt](http://gruntjs.com/getting-started) in app directory 

### Build
Build system uses grunt. Run the following command to build
```grunt build```

### Test
1. To run all tests
  ```grunt test```

### Run the server
To run the server simply use
```grunt serve```

### Commiting code

##### Commit message template
There is a git-commit-template  that should be used with each commit.
```git config --global commit.template /path/to/git-commit-template.txt```
If you want to use different commit tempates for different projects then you must configure them individually for each project.
```
cd <path-to-app>
git config commit.template git-commit-template.txt
```
##### Commit code
1. ```git checkout master```
2. ```git pull origin master```
3. ```git checkout -b my-branch```
4. ```git add file1```
5. ```git add file2```
6. ```git commit ```
7. ```git push origin my-branch```
8. Go to https://github.com/savvytoronto/savvy and do a pull request.
9. Get code review comments
10. Your change will be merged when reviewed.

##### Making changes to an existing commit
1. ```git add file1```
2. ```git commit --amend```
3. Change commit message if you like.
4. ```git push -f origin my-branch``` 
( NEVER FORCE PUSH TO MASTER )
5. Go to pull request on https://github.com/savvytoronto/savvy and make sure changes are uploaded.

##### Rebase code from the Master branch
1. ```git checkout master```
2. ```git pull```
3. ```git checkout my-branch```
4. ```git rebase master```
If there is no conflict:
5. ```git push origin my-branch```
Otherwise:
5. Fix conflicts
6. ```git add <resolved files>```
7. ```git rebase --continue```

### Gotchas
1. Mongod has given some folks a /data/db
  ```
  ERROR: dbpath (/data/db/) does not exist.
   Create this directory or give existing directory in --dbpath.
   See http://dochub.mongodb.org/core/startingandstoppingmongo
  ```
  To resolve this issue before running ```grunt serve``` run the following command to start mongo
  ```mongod --dbpath /usr/local/var/mongodb```

To run mongo manually run
``` mongod --dbpath ~/mongo/db/ ```

### Editor Settings
######Sublime
* View > Indetations > Convert indentation to spaces

### Style guide

Most of the style is followed from https://github.com/rwaldron/idiomatic.js with a small modification.

* We used cramped braces

```
if (condition) {
}
function(a, b, c){
  
}
```
instead of
```
if ( condition ) {
}
```

This goes for all parathesis like for, while etc...

