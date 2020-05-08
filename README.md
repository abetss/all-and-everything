# All and Everything Guide

I'm using node v10.15.3. If you have problem with installation, install the latest node with nvm
https://github.com/nvm-sh/nvm

## Backend

### Setup
You need an .env file with ENGINE_API_KEY, HEROKU_API_KE and HEROKU_POSTGRES_ID

### Deploy
Run `yarn deploy` from **server** directory.
After going to the deployment url, make sure the graphql playground hits the `/dev/graphql` end point and not the `/graphql`

### Run
From **server** directory:
Run `yarn` to install packages
Run `yarn start` from the beelzebub-web server direction


### Graphql
After running the server on your local you can see it http://localhost:4000/graphql

## Frontend
From **web** directory:
Run `yarn` to install packages
Run `yarn start` from the beelzebub-web web direction

## Package management

#### To add a package

yarn workspace <workspace-name> add <package1> <package2> ... (potentially with --dev)
yarn workspace beelzebub-server add typescript nodemon ts-node

#### To remove a package

yarn workspace <workspace-name> remove <package1> <package2> --save
