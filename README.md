# beelzebub

## Deploy
Run `yarn deploy` from the server direction.
After going to the deployment url, make sure the graphql playground hits the `/dev/graphql` end point and not the `/graphql`

## Run

Run `yarn` from the root directory
Run `yarn start` from the beelzebub-web server direction
Run `yarn start` from the beelzebub-web web direction

I'm using node v10.15.3. If you have problem with installation, install the latest node with nvm
https://github.com/nvm-sh/nvm

## Package management

#### To add a package

yarn workspace <workspace-name> add <package1> <package2> ... (potentially with --dev)
yarn workspace beelzebub-server add typescript nodemon ts-node

#### To remove a package

yarn workspace <workspace-name> remove <package1> <package2> --save
