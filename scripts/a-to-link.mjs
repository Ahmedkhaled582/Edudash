import { readFileSync, writeFileSync, readdirSync, statSync } from "fs";
import { join, extname, dirname } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..", "src");

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (extname(p) === ".tsx") out.push(p);
  }
  return out;
}

function ensureLinkImport(content) {
  if (!content.includes("<Link")) return content;
  if (/import\s+Link\s+from\s+["']next\/link["']/.test(content)) return content;
  const m = content.match(/^(\/\*[\s\S]*?\*\/\s*)+/);
  const pos = m ? m[0].length : 0;
  return content.slice(0, pos) + `import Link from "next/link";\n` + content.slice(pos);
}

for (const file of walk(root)) {
  let s = readFileSync(file, "utf8");
  if (!s.includes("<a") && !s.includes("</a>")) continue;
  s = s.replace(/<a(\s)/gi, "<Link$1");
  s = s.replace(/<a>/gi, "<Link>");
  s = s.replace(/<\/a>/gi, "</Link>");
  s = ensureLinkImport(s);
  writeFileSync(file, s, "utf8");
  console.log("updated:", file);
}

console.log("a-to-link: done");
