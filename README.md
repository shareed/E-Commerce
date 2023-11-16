# MERN E-Commerce
## BackEnd
1. Add package.json
    - `npm init`
2. Add Folders for 
    - `config`
        - used to create database connections
    - `controller`
        - the model will be connected to the controller
        - functionality such as create read update and delete
    - `middlewares`
        - for OAuth and Error
    - `models`
        - schemas
    - `routes`
        - post and get routes
    - Add `index.js` file to root
        - where the server is created
3. Install `npm install express mongoose bcrypt body-parser dotenv`
    - `express`
    - `mongoose`
    - `bcrypt`
    - `body-parser`
    - `dotenv`
4. Create Server
    - `index.js`
5. Create `.env` file in root
    - `routes ---> .env`
    - add Port `PORT=5000`
6. Install nodemon and Add scripts to package.json file
    - `npm install nodemon --save-dev`
    - **Scripts:** 
        - `"start": "node index.js",`
        - `"server": "nodemon index.js"`
    
    Run `npm run server`
## FrontEnd
### Herbal Nutrients

- React App with Redux Toolkit
    - `npx create-react-app herbal-nutrients --template redux`
- React Icons
- React Router Dom
- Boothstrap 5