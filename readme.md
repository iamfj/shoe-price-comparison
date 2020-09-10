# Shoe Price Comparison
This project is part of a task to be solved for an application process. More information about this task can be found 
[here](./docs/task.md).

# Development Environment
Even though it was not required I built my development environment with Docker and Docker Compose. For me it is easier 
to build an identical development environment on different systems.

## System requirements
The developer system needs some programs before you can start the development:
 - [ ] [Docker](https://docs.docker.com/get-docker/)
 - [ ] [Docker-Compose](https://docs.docker.com/compose/)

## Getting started
In the following steps, I will explain how to prepare your development system and start the application for development.

### Preparing the environment
To prepare the local system a local copy of the `.env` file must be created first. This new file is called `.env.local`, 
and is automatically ignored by Git. In this file we define the default configuration of our application.

For example, you can edit the file as follows:
```dotenv
###> database/mysql ###
MYSQL_DATABASE=shoeDatabase
MYSQL_USER=shoeApplicationUser
MYSQL_PASSWORD=sup3rS3cr3t
MYSQL_ROOT_PASSWORD=r00tp4ss
###< database/mysql ###

###> symfony/framework-bundle ###
APP_ENV=dev
APP_SECRET=1h2u5g19z531zt1938
###< symfony/framework-bundle ###

###> doctrine/doctrine-bundle ###
DATABASE_URL=mysql://shoeApplicationUser:sup3rS3cr3t@database:3306/shoeDatabase
###< doctrine/doctrine-bundle ###
```

### Start developing
When your development system is ready you can start the application stack. To do this you only need to execute the 
following command: 
```shell script
docker-compose -f docker/docker-compose.yml up
```

The stack can also be executed to run in the background. Then the following command must be executed:
```shell script
docker-compose -f docker/docker-compose.yml up -d
```

To quit the complete stack the following command must be executed:
```shell script
docker-compose -f docker/docker-compose.yml down
```

You do not need to worry about the data. The data is stored persistently on your system in Docker Volumes. If you want 
to delete this data when you shut down the stack you can use the following command:
```shell script
docker-compose -f docker/docker-compose.yml down -v
```

### Start using
Once the stack is started you can use the application at [localhost](http://localhost/).
