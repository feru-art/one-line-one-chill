// One Line, One Chill — u-azazex-one-line-one-chill-6d4d5488
// Entry program (program/v1): writes a single line of horror to /output/entry.txt.
// Winner of the local V1–V5 race (4/4 games, 2.9/4.0): a photo the narrator
// never took, shot from inside the bedroom — the last three words land the blow.
import { dirname } from "node:path";
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY_LINE =
  "My phone has a photo of me asleep, taken from the foot of my bed at 3:12 a.m., and I live alone.";

const OUTPUT_PATH = "/output/entry.txt";

function entryIsValid(line: string): boolean {
  // The sealed gate: UTF-8 text, 1-200 characters, one line, not only whitespace.
  const charCount = [...line].length;
  if (charCount < 1 || charCount > 200) return false;
  if (line.trim().length === 0) return false;
  if (line.includes("\n") || line.includes("\r")) return false;
  return true;
}

function main(): void {
  if (!entryIsValid(ENTRY_LINE)) {
    throw new Error(
      "entry line does not satisfy the gate (1-200 characters, single line)",
    );
  }
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, ENTRY_LINE, "utf8");
}

main();
