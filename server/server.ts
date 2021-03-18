import * as express from "express";
import * as path from "path";
// import * as _ from "lodash";
import { Question } from "../@types/Question";

const questions: Question[] = [{
  title: "How to log in?",
  content: "How do I log in",
  answerCount: 2
},{
  title:"Is it smart to invest in commodities?",
  content:"My bank has recently offered a new....",
  answerCount: 1
}]

const port: string | number = process.env.port || 1337;

const app = express();


app.get("/questions", (_req, res)=>{
  res.json(questions);
})

app.get("/main.js", (_req, res)=>{
  res.sendFile(path.resolve(__dirname, "..", "client", "client.js"))
})

app.get("/new", (req, res) => {
  const question : Question = {
    title: req.query.title as string,
    content: req.query.content as string
  };

  questions.push(question);
  res.json({
    status: "OK",
    questions   
  })
});

app.listen(port);
app.use(express.static("public"));

console.log("Listening on port " + port );