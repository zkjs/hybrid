#An Express & React.js JWT Auth demo

## Server
build with express, mongodb, jwt
#### How to use
make sure mongdb is installed

```
	> git clone https://github.com/zkjs/hybrid.git
	> cd server
	> npm install
	> mongod
	> npm run dev
	> open http://localhost:3000
```

#### API List
  
1. /signin : `POST` {email, password} : return {token}
2. /signup : `POST` {email, password} : return {token}
3. / : `GET` {Headers:{Authorization: token}} : return {message}

You can use the Chrome Extension [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop) to test api request
 
 
## Client
build with react.js , redux, webpack, babel 

#### How to use
```
	> git clone https://github.com/zkjs/hybrid.git
	> cd client
	> npm install
	> npm start
	> open http://localhost:8080
```