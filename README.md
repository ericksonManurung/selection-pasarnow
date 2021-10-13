# Selection for Pasarnow (Back-End-Developer)

## INSTALL PACKAGE
* bcryptjs
* express
* dotenv
* jsonwebtoken
* mongoDB
* nodemon

## Base URL for server development
http://localhost:3001/

## End Points
* POST/user/regis
* POST/user/login
* GET/todo
* POST/todo
* PUT/todo/:id
* PATCH/todo/:id
* DELETE/todo/:id

## Set Up Local
After clone repository<br/>
open viscode or another text editor and then open terminal<br/>
enter to folder selection-pasarnow type <i>"cd selection-pasarnow"</i><br/>
install all dependecies type <i>"npm i"</i><br/>
next you can run the server, type <i>"npm run dev"</i>(make sure you already install mongoDB into your PC or laptop)<br/>


## REGISTER USER
* URL
```url
/user/regis
```
* Method:
```method
POST
```
* URL Params
```params
None
```
* Data Body
    ```data
    Required:
    {
        name: req.body.name,
        dob: req.body.dob,
        gender: req.body.gender,
        email: req.body.email,
        password: req.body.password
    }
    ```
* Success Response:
    Code: 201
    ```res
    Content:
    {
        "success": true,
        "message": "success register.."
    }
    ```
* Error Response:
    Code : 400
    ```err
    Content:
    {
        "errorMessage": [
            "Validation error: Email can not be null",
            "Validation error: Password can not be null",
        ]
    }
    ```
    - OR
    Code: 500
    ```or
    Content:
    {
        "errorMessage": "Internal Server Error"
    }
    ```


## LOGIN USER
* URL
```url
/user/login
```
* Method:
```method
POST
```
* URL Params
```params
None
```
* Data Body
    Required:
    ```data
    {
        "email": req.body.email,
        "password": req.body.password
    }
    ```
* Success Response:
    Code: 200
    ```res
    Content:
    {
        "success": true,
        "message": "success login.."
        "token": "<access token>"
    }
    ```
* Error Response:
    Code : 400
    ```err
    Content:
    {
        "errorMessage": [
            "Validation error: Email can not be null",
            "Validation error: Password can not be null"
        ]
    }
    ```
    - OR
    Code: 500
    ```or
    Content:
    {
        "errorMessage": "Internal Server Error"
    }
    ```


## GET TODO
* URL
```url
/todo
```
* Method:
```method
GET
```
* URL Params
```params
None
```
* Data Body
```data
None
```
* Success Response:
    Code: 200
    ```response
    Content:
    {
        "success": true,
        "data": [
            {
            "_id": "6166dc071c6008428d290001",
            "UserId": "6166dbb21c6008428d290000",
            "title": "olahraga",
            "description": "Melakukan senam kebugaran",
            "status": "pending"
            },
            {
            "_id": "6166de89154930b59785815b",
            "UserId": "6166dbb21c6008428d290000",
            "title": "liburan",
            "description": "liburan ke bali bersama getas",
            "status": "done"
            }
        ]
    }
    ```
* Error Response:
    Code: 500
    ```err
    Content
    {
        "errorMessage": "Internal Server Error"
    }
    ```
    

## POST TODO
* URL
```url
/todo
```
* Method:
```url
POST
```
* URL Params
```params
None
```
* Data Body
    Required:
    ```data
    {
        "title": req.body.title,
        "description": req.body.description
    }
    ```
* Success Response:
    Code: 201
    ```response
    Content:
    {
        "success": true,
        "message": "success add todo"
    }
    ```
* Error Response:
    Code : 400
    ```errResponse
    Content:
    {
        "success": false,
        "errorMessage": [
            "Validation error: title can not be null",
            "Validation error: descriptio can not be null"
        ]
    }
    ```
    OR
    Code: 500
    ```or
    Content:
    {
        "errorMessage": "Internal Server Error"
    }
    ```


## UPDATE TODO
* URL
```url
/todo/:id
```
* Method:
```method
PUT
```
* URL Params
```params
:id
```
* Data Body
    ```data
    Required: 
    {
        "title": req.body.title,
        "description": req.body.description
    }
    ```
* Success Response:
    Code: 200
    ```res
    Content:
    {
        "success": true,
        "message": "success update todo"
    }
    ```
    - OR
    Code: 404
    ```err
    Content:
    {
        "errorMessage": "Data not found"
    }
    ```
* Error Response:
    Code: 500
    Content:
    {
        "errorMessage": "Internal Server Error"
    }
    ```


## PATCH TODO
* URL
```url
/todo/:id
```
* Method:
```method
PATCH
```
* URL Params
```params
:id
```
* Data Body
    ```data
    none
    ```
* Success Response:
    Code: 200
    ```res
    Content:
    {
        "success": true,
        "message": "status todo update to done"
    }
    ```
    - OR
    Code: 404
    ```err
    Content:
    {
        "errorMessage": "Data not found"
    }
    ```
* Error Response:
    Code: 500
    Content:
    {
        "errorMessage": "Internal Server Error"
    }
    ```


# DELETE TODO
* URL
```url
/todo/:id
```
* Method:
```delete
DELETE
```
* URL Params
```params
:id
```
* Data body
```data
None
```
* Success Response:
    Code: 200
    Content:
    {
        "success": true,
        "message": "success delete todo"
    }
    ```
    - OR
    Code: 404
    ```err
    Content
    {
        "errorMessage": "Data not found"
    }
    ```
* Error Response:
    Code: 500
    ```err
    Content:
    {
        "errorMessage": "Internal Server Error"
    }
    ```