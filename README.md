<p align="center">
  <img src="https://i.giphy.com/media/ES4Vcv8zWfIt2/source.gif" onerror="this.onerror=null;this.src='https://i.giphy.com/ES4Vcv8zWfIt2.gif';" alt="">
</p>

## About
Applications for cats searching:

<em>All three applications are separate not connected to each other applications</em>

<ul>
<li>Graphql: http://localhost:5001/graphql</li>
<li>REST API: http://localhost:5001/cat-api</li>
<li>React frontend: http://localhost:5001/frontend-app</li>
</ul>

## Backend application
>Both Graphql and REST API
- Adding a new cat
- List all cats
- Get a cat with id
- Delete a cat
- Search for a cat by name
- Paginate and sort cat list

## Frontend application
🐈 [theCatApi](https://thecatapi.com/) service used as api
- Display all the fetched cat breeds
- Searching on the front-end by breed name
- Pagination
- Material UI, Redux

## Getting started

- Add MONGODB_URI to .env
```shell
cp .env.sample .env
```
- Install dependencies:
```
yarn install
```
- Build Frontend:
```
yarn build
```
- start application:
```
yarn start
```
> start dev frontend environment: http://localhost:3000/frontend-app
```
yarn dev
```
