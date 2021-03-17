import * as express from "express";
import * as path from "path";
// import * as _ from "lodash";
import { Question } from "../@types/Question";

const qusestions: Question[] = [{
  title: "How to log in?",
  content: "How do I log in",
  answerCount: 2
}]

const port: string | number = process.env.port || 1337;

const app = express();

app.listen(port);
app.use(express.static("public"));

console.log("Listening on port " + port );

app.get("/questions", (_req, res)=>{
  res.json(qusestions);
})

app.get("/main.js", (_req, res)=>{
  res.sendFile(path.resolve(__dirname, "..", "client", "client.js"))
})