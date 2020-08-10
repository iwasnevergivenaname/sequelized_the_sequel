const db = require("./models");

db.user.findOrCreate({
  where: {firstName: "boi"},
  defaults: {
    lastName: "boi",
    age: 26,
    email: "lilmarilyn666@gmail.com"
  }
})
.then(([user, created]) => {
  console.log(created);
  console.log(user.get());
})