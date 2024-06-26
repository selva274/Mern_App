const express = require("express");
const app = express();
const PORT =process.env.PORT|| 3001;
const { graphqlHTTP } = require("express-graphql");
 const schema = require("./index");
const cors = require("cors");

app.use(cors());

app.use(express.json());
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

if(process.env.NODE_ENV==='production'){
  app.use(express.static('client/build'));
}

app.listen(PORT, () => {
  console.log("Server running "+PORT);
});
