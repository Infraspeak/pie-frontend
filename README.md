# Quality Frontend

## Description
Main page for Infraspeak Pie. Allows uploading a package.json or composer.json file and list all issues for all dependencies.

## Project Setup
### Build Docker
```
docker build -t infraspeak-pie/quality_frontend -f Dockerfile .
```

## Project Run
### Run Docker
```
docker run --rm --network infraspeak-pie -p 8090:80 infraspeak-pie/quality_frontend
```

### Compiles and minifies for production
```
npm run build
```

### Run your end-to-end tests
```
npm run test:e2e
```