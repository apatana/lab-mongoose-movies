const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity")

const celebrities = [
    {
    name : "Robert de Niro",
    occupation: "Actor",
    catchPhrase: "Michael, your father loves you.",
    },
    {
    name : "Meryl Streep",
    occupation: "Actor",
    catchPhrase: "Please bore someone else with your questions...",
    },
    {
    name : "Jim Carrey",
    occupation: "Comedian",
    catchPhrase: "I'm the top banana in a world full of monkeys.",
    }
];

    mongoose
    .connect("mongodb://localhost/celebrities", {
      useNewUrlParser: true,
    })
    .then((self) => {
        Celebrity.create(celebrities)
        .then((dbResponse) => {
          console.log(dbResponse);
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });