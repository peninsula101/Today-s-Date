const xp = require("express");
const app = xp();

app.get("/", (request, response) => {
  let nowDate = new Date();
  response.send(
    `${nowDate.getDate()}-${nowDate.getMonth() + 1}-${nowDate.getFullYear()}`
  );
});

app.listen(3000);

module.exports = app;
