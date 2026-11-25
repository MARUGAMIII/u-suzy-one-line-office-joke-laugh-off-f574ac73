// One-Line Office Joke Laugh-Off — entry program.
//
// Writes one original one-line office joke to /output/entry.txt.
// Runs on Node 22 with no dependencies, no network and no input:
// the grader runs it twice in a sandbox and gates the file
// (UTF-8, 1-200 characters, not only whitespace, one line).

import { mkdirSync, writeFileSync } from "node:fs";

// The joke, kept as a single line with no trailing newline so the
// file holds exactly one line of text.
const JOKE =
  "I asked for a raise and got a standing desk instead \u2014 technically, I'm standing up for myself now.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
