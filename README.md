This is a basic list with CRUD functionality built with nodejs on the back end and React on the front. Auth0 is used for user authentication and material-ui for styling.

Requirements:
- Docker with docker-compose

To run:
- Clone repo
- set up firebase project and place resulting serviceAccountKey.json in /api/middleware/firebase
- In the docker-compose.yml fill in the 'SOURCE' environment variable
- In /client/Dockerfile fill in the environment vaiables
- From command line run: 'docker-compose up -d' (remove '-d' to be able to see logs)
