# pmp-hub

**pmp-hub streamlines the development process with pre-made development to production pipelines**

1. [Installation](#installation)
2. [Commands](#commands)
3. [Contributing a pmp](#contributing-a-pmp)
4. [Issues](#issues)

## Installation

https://www.npmjs.com/package/pmp-hub
Run ```npm install -g pmp-hub``` to install the pmp-hub CLI globally.

## Commands

All pmps can be found at https://github.com/shortxmas/pmp-hub/tree/main/pmps

```pmp pull <pmp name>``` pulls pmp files into the current working directory.

```pmp select``` will list out all available pmps and will pull the pmp you selected into the current working directory.


## Contributing a pmp

Make a pull request with your pmp in the ./pmps directory in https://github.com/shortxmas/pmp-hub/pulls.

Name the pmp folder with what your pmp does. For example ```django-docker-githubactions-awsec2```.

For any files in the pipeline thats use sensitive information like credentials, store them with environment variables and create a readme documenting what your pmp does and any environment variables that are neeeded.

For the pmp read me, please use the following format.
```
# GitHub Actions Push Docker Image to AWS ECR

1. [Contents](#contents)
2. [Secrects/Variables Used](#secrectsvariables-used)
3. [How to Use](#how-to-use)

## Contents

What does this pmp do and what does it contain.

## Secrects/Variables Used

**In GitHub repository actions secrets:**
- REPOSITORY_SECRET1
- REPOSITORY_SECRET2

**Environment Variables**
- ENVIRONMENT_VARIABLE1
- ENVIRONMENT_VARIABLE2

## How to Use

1. Step 1
2. Step 2
3. Step 3....
```

## Issues

**pmp-hub is currently in its early stages and may not work fully. Please make issues for any errors encountered at https://github.com/shortxmas/pmp-hub/issues**