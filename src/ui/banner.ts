import chalk from "chalk";
import boxen from "boxen";
import figlet from "figlet"

export function printBanner(){
    const title = figlet.textSync("Matrix-cli" , {font: "standard"});
    const panel = boxen(
        chalk.cyan("Learn the Agent SDK\n") +
          chalk.dim("Full Production Ready"),
        { padding: 1, borderColor: "cyan" }
      );

      console.log(title);
      console.log(panel);
}