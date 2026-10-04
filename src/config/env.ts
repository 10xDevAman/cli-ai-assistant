import chalk from "chalk";
import "dotenv/config";
import { execa } from "execa";

export function requireApiKey(): string {
  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) {
    throw new Error(
      "Missing ANTHROPIC_API_KEY. Copy .env.example to .env and add your key."
    );
  }
  return key;
}
