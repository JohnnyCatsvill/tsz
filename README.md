[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Migrations

```bash
# craete new migration
$ npx typeorm migration:generate -n <name>

# convert ts migration to js code
$ npm run start

# apply migration to db
$ npm run typeorm migration:run
```

## Docker
```bash
# craete new docker container pack
$ docker compose up
```

## License

Nest is [MIT licensed](LICENSE).
