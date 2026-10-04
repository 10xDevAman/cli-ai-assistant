import { Command } from "commander";
import { printBanner } from "./ui/banner.js";

export function createCli(){
    const program= new Command()
    .name("cursor-cli")
    .description("Learn the Claude Agent SDK through a Cursor-like CLI")
    .version("0.0.1");

    program
    .command("hello")
    .description("Print a greeting message")
    .action(()=>{
        console.log(`Hello World`);
    })

    program
    .command("banner")
    .description("Show the welcome banner")
    .action(() => {
        printBanner();
    });

    program.action(()=>{
        program.help();
    });
    return program;
}