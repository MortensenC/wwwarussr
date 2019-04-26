// Dependencies
import express from "express";
import path from "path";
import bodyParser from "body-parser";
import cors from "cors";

import api from "./api";
import serverRender from './serverRender';

// Express app
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use("/api", api);

// Public static
app.use(express.static(
  // path.resolve(__dirname, '..', 'build'),
  path.resolve(__dirname, "../build")
));

app.use(serverRender()); // everything else goes to the server render 

// Listening
app.listen(port, error => {
  if (error) {
    return console.log('something bad happened', error);
  }

  console.log("listening on " + port + "...");
});
