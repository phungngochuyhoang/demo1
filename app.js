const express = require("express");

const app = express();

const client_router = require("./Routers/Client_router");

app.set("view engine", "pug");

app.use(express.static("Public"));

app.use("/", client_router);


app.listen(3000);