# RAD NodeJS

A starting point for containerized Node.js applications.  Based on RAD Container:  https://github.com/frog/rad-container

# Getting Started
To begin developing your Node.js application, you must have the latest version of Docker installed on your system.  If you are using an older version of Docker, please uninstall it and use the appropriate installer from the docker website.

https://docs.docker.com/engine/installation/

Once Docker is installed on your machine, follow the steps below to begin developing your application.  This is intended for local development, and will map your project root directory into the container and auto restart the applicaiton when changes are made.

1.  In a console, navigate to your project root directory.
2.  Copy the contents of this repository to your project root directory.
3.  'make build'
4.  'make shell'
5.  'npm install'
6.  'npm start'

# Success
1.  If successful, you will see "Application running on port: 3000" in your console.
2.  In a web browser, navigate to 'http://localhost:3000' and you will see "Hello world!".