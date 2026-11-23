import fs from "node:fs";
import path from "node:path";

const LINE = "My wireless earbuds announce \"BATTERY LOW\" at full volume directly into my eardrum every ninety seconds until the warning itself finishes killing them.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
const dst = path.join(outDir, "entry.txt");
if (LINE.length < 1 || LINE.length > 200) throw new Error(`Length out of bounds: ${LINE.length}`);
fs.writeFileSync(dst, LINE, "utf8");
fs.chmodSync(dst, 0o644);
