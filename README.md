# Getting Started

### After cloning for the first time

Install all dependencies:

```
npm install
```

Make sure PSQL is running and make a database called 'fsg'

Seed the database:

```
gulp seed
```

### Get the server running

Start the server and watch for server changes:

```
npm start
```

Rebuild and watch for changes:

```
gulp
```

### Hidden Variables

Fill out the `secret_example.json` file with valid information and rename to secret.json
