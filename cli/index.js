#! /usr/bin/env node
const packageJson = require("./package.json");
const yargs = require("yargs");
const { selectPmp, pullPmp } = require("./src/github");

let commandArray = [];

yargs.command({
  command: "pull <pmp>",
  describe: "Pull down a pmp",
  builder: {
    pmp: {
      describe: "pmp name",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    pullPmp(argv.pmp);
  },
});
commandArray.push({
  command: "pull",
  arguments: "<pmp>",
});

yargs.command({
  command: "select",
  describe: "Select pmp from list of all pmps",
  handler() {
    selectPmp();
  },
});
commandArray.push({
  command: "select",
  arguments: "",
});

const logExistingCommands = () => {
  let counter = 1;
  console.log("Existing commands:");
  commandArray.forEach((command) => {
    if (command.arguments != "") {
      console.log(`${counter}:${command.command} ${command.arguments}`);
    } else {
      console.log(`${counter}:${command.command}`);
    }
    counter++;
  });
};

yargs.command("*", false, () => {
  console.error("Error: Command not found!");
  logExistingCommands();
  yargs.showHelp();
});

yargs.help("h").alias("h", "help");

yargs.version(packageJson.version);

yargs.parse();
