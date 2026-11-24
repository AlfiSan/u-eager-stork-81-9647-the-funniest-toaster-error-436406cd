import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The toaster's error line: a deadpan appliance refusing a bagel.
// 72 characters, inside the 1-120 gate; written as one plain line.
const message =
  "ERROR 503: Bagel detected in slot 2. This is a bread-only establishment.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), message, "utf8");
