# Eatme Co Back End code
This is Back End server for my Front End application [Eatme Co](https://github.com/zidaneNS/Eatme-co_food-delivery) using ExpressJs with Typescript

## Getting Started
* Before you run this server you must install some application and depedencies
1. Install [NodeJS](https://nodejs.org)-version 20 or latest to support ```.env``` file and the ```--watch``` flag. You don't need to install ```dotenv``` and ```nodemon``` package.
2. Install Typescript compiler and tsx module
```
npm install -g typescript
npm install -g tsx
```
3. This server using  MongoDB as it's database so you can create ```.env``` file contains your database uri with the format
```
DB_URI=https://your_uri
```
4. Install all depedencies needed
```
npm installl
```
6. Run the server
```
npm start
//wait till "db connected" appeared
```
7. This set up still need some optimization so sometimes it will stuck Restarting server. In this case you can just restart the server using ```CTRL+C``` and ```npm start``` again till the server can run properly
