<p style="text-align: center;">
  <img alt="logo" src="https://raw.githubusercontent.com/alvaroassmus/indicinaUrl/master/docs/assets/indicina.png" width="200">
</p>
<div style="text-align: center; width: 100%;"> 
  <h1>Indicina URL lab</h1>
</div>

## About The Indicina URL Project

The assignment is to implement a URL shortening service using your programming language of choice (NodeJS is preferred).

In this README file you will find an overview of how I distributed the different layers and the functionalities requested for the lab.

You will also find the deployment instructions and artifacts list and description.

Welcome to Indicina Url Lab.

**Eng Alvaro Assmus Nassar**<br/>
**alvaro.assmus@bairesdev.com**

## ARCHITECTURE

The solution you will find in this lab is developed based in TDD and Components, to ensure all the code is 100% secure, it will be coded in layers in only one server. This server will be developed in node using the following libraries:

  * <a target="_blank" href="https://www.npmjs.com/package/mocha">Mocha</a> (testing)
  * <a target="_blank" href="https://www.npmjs.com/package/express">Express</a> (rest api)
  * <a target="_blank" href="https://www.npmjs.com/package/typescript">Typescript</a> (typescript language)
  * <a target="_blank" href="https://www.npmjs.com/package/nodemon">Nodemon</a> (real time refresh)

Developed using MVC pattern to easily identify the different layers. You can check the architecture overview in the diagram 1 and the detail architecture distribution in the diagram 2.

<img alt="Diagram 1" src="https://raw.githubusercontent.com/alvaroassmus/indicinaUrl/master/docs/assets/Diagram1.png" width="300"/>
<br/>
<br/>
<img alt="Diagram 2" src="https://raw.githubusercontent.com/alvaroassmus/indicinaUrl/master/docs/assets/Diagram2.png" width="300"/>

## MODULES

The project is separated in modules. In each module you will find 3 principal files with the module name before its responsability:
- routes (Ex. InidinaUrlRoutes.ts): contains the routes provided by the module.
- controller (Ex. InidinaUrlController.ts): contains the logic for each route.
- model (Ex. InidinaUrlModel.ts): contains the model for each controller.

This way if the project grows, the developer will add modules and in each module its routes, controllers and models. 

### INDICINA URL MODULE LAYERS

  * **ROUTES**

    This layer contains the REST API for the project, they are located in the <a href="https://github.com/alvaroassmus/indicinaUrl/blob/master/src/modules/indicinaUrl/indicinaUrlRoutes.ts" target="_blank">indicinaUrlRoutes.ts</a> file. 
    You can read each REST API method documentation in the following list:
      - [/encode/url](https://github.com/alvaroassmus/indicinaUrl/blob/master/docs/rest/encode.md)
      - [/decode/shortUrl](https://github.com/alvaroassmus/indicinaUrl/blob/master/docs/rest/decode.md)
      - [/statistic/shortUrl](https://github.com/alvaroassmus/indicinaUrl/blob/master/docs/rest/statistic.md)
      - [/root/shortUrl](https://github.com/alvaroassmus/indicinaUrl/blob/master/docs/rest/root.md)

  * **CONTROLLER**

    The logic layer located in the <a href="https://github.com/alvaroassmus/indicinaUrl/blob/master/src/modules/indicinaUrl/indicinaUrlController.ts" target="_blank">indicinaUrlController.ts</a>. This file contains the functions to encode, decode and calculate the statistics of the URLs.  

  * **MODEL**

    The data layer located in the <a href="https://github.com/alvaroassmus/indicinaUrl/blob/master/src/modules/indicinaUrl/indicinaUrlModel.ts" target="_blank">indicinaUrlModel.ts</a> contains:
      - <a href="https://github.com/alvaroassmus/indicinaUrl/blob/master/src/modules/indicinaUrl/indicinaUrl.ts" target="_blank">indicinaUrl.ts</a>: Used to transport an url from layer to layer.
      - Array< indicinaUrl >: An array that contains the memory persistence of the lab with all the URLs.
      
## Software requirements

- NPM
- REST TESTER (Ex. postman)
- BROWSER

## Deploying in localhost

To deploy the project you must follow the next steps:

1. Have the software requirements installed :P and, the computer must have access to the internet.
2. Clone or download the project: https://github.com/alvaroassmus/indicinaUrl.git
3. Go to project folder and run `npm install`.
4. Go to project folder and run `npm run start`.
5. Open your REST TESTER (software requirement).
6. Use each of the API REST as defined in their docs.
7. Enjoy.

## Unit and Feature Testing

After you deploy the project you can test the REST API with the following command:

`npm run test`

IMPORTANT: remember to have the server UP ;)

## About the developer

Alvaro Assmus Nassar (me) - fullstack software engineer with more than 14 years of experience developing software, also a dad and a musician. I love life and learning. 
