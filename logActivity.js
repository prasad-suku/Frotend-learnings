const fs = require("fs");
const path = require("path");
const emiter = require("events");

const authentication = new emiter();

const pathfile = path.join(__dirname, "history.txt");

authentication.on("login", (user) => {
  console.log(`successfully login ${user.name} `);

  authentication.emit("welcomemes", user);
});

authentication.on("welcomemes", (user) => {
  console.log(`welcome ${user.email} , you explore the web  ${user.name} `);

  authentication.emit("logactivity", user);
});

authentication.on("logactivity", (user) => {
  const log = `name : ${user.name}, email:${
    user.email
  } ,LoGin time : ${new Date().toLocaleTimeString()}\n\n\n`;

  fs.appendFileSync(pathfile, log, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log("sucucess fully added file");
    }
  });
});

const user = { name: "arun ", age: 23, email: "arunkumar@gmail.com" };
const user1 = { name: "raju ", age: 21, email: "rajuraju@gmail.com" };

// authentication.emit("login", user);
authentication.emit("login", user);
