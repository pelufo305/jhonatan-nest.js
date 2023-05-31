# Jhonatan Gonzalez
## Description

This API is developed with SOLID patterns and clean architecture, such as screaming , hexagonal architecture and onion architecture.

![](https://fullstackroyhome.files.wordpress.com/2019/03/cleanarchitecture.jpg)

## Layers

-   Dependency - the dependency direction is from the outside in. meaning that
    the Entities layer is independent and the Frameworks layer depend on all the
    other layers.

-   Entities - contains all the business entities that construct our
    application.

-   Use Cases - This is where we centralize our logic. Each use case
    orchestrates all of the logic for a specific business use case.

-   Controllers and Presenters - Our controller, presenters, and gateways are
    intermediate layers. You can think of them as an entry and exit gates to the
    use cases .

-   Frameworks - This layer has all the specific implementations. The database,
    the web frameworks, error handling etc.  



## Technologies
* NestJS
* Docker
* Mongo
* Mongoose


## DB
the structure of the documents can be looked up in:
* \jhonatan-nest.js\db

## Algorithm

A document called menus was used, it has an array of ingredients, this is the one that is queried through the endpoint using the following query:

```
this._repository.find({ ingredients : { $all : preference.preferences }}).exec();
```
this is to filter my menu preferences and tell me which restaurants match those ingredients. 


## Getting Started
### Dependencies
* mongoDb - you need to provide a valid mongDb connection string.
add a new environment variable named CLEAN_NEST_MONGO_CONNECTION_STRING
```
export CLEAN_NEST_MONGO_CONNECTION_STRING='valid mongoDB connection string' 
```
## NOTE: 
If you don't have a direct connection to mongo, I'll pass you a mongo cluster I have for testing. 

```
mongodb+srv://jhonatansgonzalez93:vwswmcwHY9pJtVB7@cluster0.fnxha5g.mongodb.net/prueba?retryWrites=true&w=majority
```

### Installing
```
npm install
```
### Executing program

```
npm start
```
## Endpoint
### URL
```
http://localhost:3000/api/v1/restaurant/getByPreference
```

### Body
```
{
    "preferences": ["ingrediente1","ingrediente2"]
}
```
### Response
```
[
    {
        "menu": {
            "_id": "64769975d1a941c9798a1e05",
            "restaurant": "64769949d1a941c9798a1e03",
            "ingredients": [
                "ingrediente1",
                "ingrediente2",
                "ingrediente3",
                "ingrediente4"
            ],
            "title": "Pasta 1"
        },
        "restaurant": {
            "_id": "64769949d1a941c9798a1e03",
            "type": "Italiano",
            "speciality": "Pasta",
            "title": "Restaurante1"
        }
    }
]
```
## Authors
Jhonatan Stiven Gonzalez
## Version History
* 1.0

