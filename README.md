# RAD NodeJS
A starting point for containerized Node.js 6.9 applications.  Based on RAD Container:  https://github.com/frog/rad-container

# Getting Started
To begin developing your Node.js application, you must have the latest version of Docker installed on your system.  If you are using an older version of Docker, please uninstall it and use the appropriate installer from the docker website.

https://docs.docker.com/engine/installation/

Once Docker is installed on your machine, follow the steps below to begin developing your application.  This is intended for local development, and will map your project root directory into the container and auto restart the application when changes are made.

1.  Navigate to your project root directory and copy the contents of this repository to that location.
2.  Create a copy of `make_env.dist` and rename it to `make_env`.  Update with your project specific information.
3.  `make build`
4.  `make shell`
5.  `npm install`
6.  `npm start`

# Success
1.  If successful, you will see "Application running on port: 3000" in your console.
2.  In a web browser, navigate to 'http://localhost:3000' and you will see "Hello world!".

# Environment Variables
You may pass additional environment variables to your container by including them in your `make_env` file.  Follow these steps to add new environment variables.  If you have an existing container that is running, you must rebuild and restart it for changes to `make_env` to take effect.

1.  Add your environment variables to your `make_env` file inside the DOCKER_ENV declaration.  Remember, the last line does not get a trailing slash.
2.  Build (or rebuild) your container using `make build`.
3.  Start (or restart) your container using `make start` or `make shell`.

# Commands for Local Development
The following commands are intended to make working with Docker faster and easier on your local machine.

- `build` Builds your container from the instructions in your Dockerfile.
- `push` Pushes your continer image to the Docker Hub repository specified in your make_env file.
- `shell` Starts your continer and automatically logs into it via SSH.
- `run`  Runs the container with stdout.
- `start` Runs the container in daemon mode - it will run in the background and you can attach to it at any time.
- `restart` Starts a stopped container.
- `stop` Stops the running container.
- `rm` Removes your container.
- `release` Builds your container image and then pushes it to the Docker Hub repository specified in your make_env file.
- `init` An initialization command intended for seeding an application.  Blank by default.