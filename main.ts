// The Painfully Honest Out-of-Office — make.fun program/v1 entry.
// Writes one single-sentence out-of-office auto-reply to /output/entry.txt.
// Deterministic: fixed text, no network, no clock, no randomness.
const fs = require("node:fs");
const path = require("node:path");

const LINE =
  "Thank you for writing \u2014 I\u2019m away resting after months of midnight emails, and my inbox is hundreds deep, so yours waits until I\u2019m back, when I\u2019ll read it properly instead of skimming it half-asleep.";

const outDir = "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), LINE, "utf8");
