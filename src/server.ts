import express from "express";
import { createHandler } from "graphql-http/lib/use/express";
import dotenv from "dotenv";
import { ruruHTML } from "ruru/server";

import schema from "./schema/schema";
import connectDB from "./config/db";

dotenv.config();

const port = process.env.PORT || 4000;

const app = express();

connectDB();

app.use(express.json());

app.all("/ql", createHandler({ schema }));

if (process.env.NODE_ENV === "development") {
  app.get("/", (_req, res) => {
    res.type("html");
    res.end(ruruHTML({ endpoint: "/ql" }));
  });
}

app.listen(port);
console.log(`Running a GraphQL API server at http://localhost:${port}`);
