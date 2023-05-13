# andrdc's Chess Board

## Development
- node v18.15.0
- npm v9.5.0
- docker v23.0.6
### Install dependencies
```sh
npm install
```
### Run the application
```sh
npm run dev
```
### Run unit tests
```sh
npm run test
```
### Build the application
```sh
npm run build
```
### Dockerfile
```sh
docker build -t chessboard .
docker run -p 3000:5173 chessboard 
```