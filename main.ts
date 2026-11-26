// The One-Line Exit — a program that writes one funny one-line
// resignation letter to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "I resign from the zoo: the penguins have unionized and, frankly, they negotiated a better contract than I ever did.";

// The gate only accepts 1-140 characters of non-whitespace UTF-8 text;
// refuse to write an entry that would fail it instead of failing silently.
if ([...entry].length < 1 || [...entry].length > 140 || entry.trim().length === 0) {
  throw new Error(`Entry is ${[...entry].length} chars; the gate requires 1-140.`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
console.log(`Wrote entry (${[...entry].length} chars) to ${join(outDir, "entry.txt")}`);
