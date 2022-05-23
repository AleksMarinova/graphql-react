const express = require("express");
const app = express();
const PORT = 6969;
const { graphqlHTTP } = require("express-graphql");
const cors = require("cors");
const userData = require("./MOCK_DATA.json")
const graphql = require("graphql");
const schema = require("./Schemas");

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
