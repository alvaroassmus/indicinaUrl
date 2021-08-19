// @ts-ignore
let express = require("express");
let app = express();
let indicinaUrlRoutes = require('./modules/indicinaUrl/indicinaUrlRoutes.ts');

app.use('/', indicinaUrlRoutes);

app.listen(3000);