import express from "express";
import fs from "fs";
import path from "path";
import React from "react";

import { renderToString } from "../lib/server";
import { App } from "./App";

const app = express();

app.get(/\.(js|map)$/, express.static(path.resolve(__dirname, "../build")));

app.use("*", (req, res) => {
  let indexHTML = fs.readFileSync(
    path.resolve(__dirname, "../build/index.html"),
    {
      encoding: "utf8",
    }
  );

  const serverHelper = {
    getRequestHeader(key) {
      const value = req.headers[key];

      return Array.isArray(value) ? value[0] : value;
    },
  };

  let appHTML = renderToString(<App />, serverHelper);

  indexHTML = indexHTML.replace(
    '<div id="app"></div>',
    `<div id="app">${appHTML}</div>`
  );

  res.contentType("text/html");
  res.status(200);

  return res.send(indexHTML);
});

app.listen("9000", () => {
  console.log("Example started at http://localhost:9000");
});
