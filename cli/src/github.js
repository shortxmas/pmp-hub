// src/github.js

var shell = require("shelljs");
const inquirer = require("inquirer");

const pullPmp = async (pmp) => {
  const exists = await pmpExists(pmp);
  if (exists === true) {
    cloneGithubSubdirectory("https://github.com/shortxmas/pmp-hub", pmp);
  } else {
    console.log("That pmp does not exist.");
  }
};

const pmpExists = async (pmp) => {
  let ret = false;
  const response = await fetch(
    "https://api.github.com/repos/shortxmas/pmp-hub/contents/pmps"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const jsonData = await response.json();
  jsonData.forEach((pmpData) => {
    if (pmpData.name === pmp) {
      ret = true;
    }
  });
  return ret;
};

const selectPmp = async () => {
  console.log("\nFetching list of pmps.....\n");
  let pmpData = [];
  try {
    const response = await fetch(
      "https://api.github.com/repos/shortxmas/pmp-hub/contents/pmps"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const jsonData = await response.json();

    let index = 0;

    jsonData.forEach((pmp) => {
      pmpData.push(pmp.name);
      console.log(index + 1 + " - " + pmp.name);
      index++;
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  } finally {
    while (true) {
      console.log(
        "\nPlease enter the ID associated with the pmp you want to use or enter 0 to exit."
      );
      await getIdInput();

      if (id === 0) {
        process.exit(0);
      } else {
        if (pmpData[id - 1] !== undefined) {
          break;
        } else {
          console.log("The ID you entered doesn't match any existing pmp");
        }
      }
    }

    cloneGithubSubdirectory(
      "https://github.com/shortxmas/pmp-hub",
      pmpData[id - 1]
    );
  }
};

function cloneGithubSubdirectory(repoUrl, subdirectory) {
  try {
    shell.exec(`git clone --depth 1 ${repoUrl} temp_dir`);
    shell.cp("-R", `temp_dir/pmps/${subdirectory}/*`, ".");
    console.log(`Successfully cloned ${subdirectory} from ${repoUrl}`);
  } catch (error) {
    console.error("Error:", error.message);
  } finally {
    shell.rm("-rf", "temp_dir");
  }
}

const getIdInput = async () => {
  const input = await inquirer.prompt({
    name: "pmpID",
    type: "number",
    message: "Enter pmp ID : ",
  });
  id = input.pmpID;
};

module.exports = {
  pullPmp,
  selectPmp,
};
