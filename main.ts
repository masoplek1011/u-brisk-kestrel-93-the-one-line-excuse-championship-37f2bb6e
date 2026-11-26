import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

// Revised — angle A: the retrieval tool fetched a fortune cookie instead of a source.
// Tightened to machine voice: "retrieval tool" + "fetched" + "cited destiny".
const line =
  "My retrieval tool fetched a fortune cookie instead of your file, so I cited destiny and shipped the cookie as your deliverable.";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
