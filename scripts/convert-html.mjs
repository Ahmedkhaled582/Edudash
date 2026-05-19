import {
  readFileSync,
  writeFileSync,
  mkdirSync,
  readdirSync,
  existsSync,
} from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const indexPath = join(root, "index.html");

/** @param {string} html */
function htmlToTsx(html) {
  let s = html.replace(/\r\n/g, "\n");
  s = s.replace(/<!--[\s\S]*?-->/g, "");

  s = s.replace(/src="assets\//g, 'src="/assets/');
  s = s.replace(/href="assets\//g, 'href="/assets/');

  s = s.replace(/href="([^"]+\.html)"/gi, (_, href) => {
    if (/^https?:/i.test(href)) return `href="${href}"`;
    const base = href.replace(/\.html$/i, "").replace(/^\.\//, "");
    const path = base === "index" ? "/" : `/${base}`;
    return `href="${path}"`;
  });

  s = s.replace(/\bclass="/g, 'className="');
  s = s.replace(/\bclass='/g, "className='");
  s = s.replace(/\bfor="/g, 'htmlFor="');
  s = s.replace(/\bfor='/g, "htmlFor='");

  const attrFixes = [
    [/tabindex="/gi, 'tabIndex="'],
    [/colspan="/gi, 'colSpan="'],
    [/rowspan="/gi, 'rowSpan="'],
    [/cellspacing="/gi, 'cellSpacing="'],
    [/cellpadding="/gi, 'cellPadding="'],
    [/readonly(="|')/gi, "readOnly$1"],
    [/autofocus(="|')/gi, "autoFocus$1"],
    [/maxlength="/gi, 'maxLength="'],
    [/minlength="/gi, 'minLength="'],
    [/crossorigin="/gi, 'crossOrigin="'],
    [/datetime="/gi, 'dateTime="'],
    [/novalidate(="|')/gi, "noValidate$1"],
    [/formnovalidate(="|')/gi, "formNoValidate$1"],
    [/autocomplete="/gi, 'autoComplete="'],
    [/contenteditable(="|')/gi, "contentEditable$1"],
    [/spellcheck(="|')/gi, "spellCheck$1"],
    [/frameborder="/gi, 'frameBorder="'],
    [/stroke-width="/gi, 'strokeWidth="'],
    [/stroke-linecap="/gi, 'strokeLinecap="'],
    [/stroke-linejoin="/gi, 'strokeLinejoin="'],
    [/stroke-dasharray="/gi, 'strokeDasharray="'],
    [/stroke-dashoffset="/gi, 'strokeDashoffset="'],
    [/stroke-miterlimit="/gi, 'strokeMiterlimit="'],
    [/fill-rule="/gi, 'fillRule="'],
    [/clip-path="/gi, 'clipPath="'],
    [/fill-opacity="/gi, 'fillOpacity="'],
    [/stroke-opacity="/gi, 'strokeOpacity="'],
    [/stop-color="/gi, 'stopColor="'],
    [/stop-opacity="/gi, 'stopOpacity="'],
    [/font-family="/gi, 'fontFamily="'],
    [/font-size="/gi, 'fontSize="'],
    [/font-weight="/gi, 'fontWeight="'],
    [/text-anchor="/gi, 'textAnchor="'],
    [/dominant-baseline="/gi, 'dominantBaseline="'],
    [/alignment-baseline="/gi, 'alignmentBaseline="'],
    [/underline-position="/gi, 'underlinePosition="'],
    [/underline-thickness="/gi, 'underlineThickness="'],
    [/xlink:href="/gi, 'xlinkHref="'],
  ];
  for (const [re, rep] of attrFixes) s = s.replace(re, rep);

  s = s.replace(/\btabIndex="(-?\d+)"/g, (_, n) => `tabIndex={${n}}`);

  s = s.replace(/\breadOnly="[^"]*"/gi, "readOnly");
  s = s.replace(/\breadOnly='[^']*'/gi, "readOnly");
  s = s.replace(/\bdisabled="disabled"/gi, "disabled");
  s = s.replace(/\bdisabled='disabled'/gi, "disabled");

  s = s.replace(/\brows="(\d+)"/g, (_, n) => `rows={${n}}`);
  s = s.replace(/\bcols="(\d+)"/g, (_, n) => `cols={${n}}`);

  s = s.replace(/\sselected=""/gi, " selected");
  s = s.replace(/\sselected=''/gi, " selected");
  s = s.replace(/\sdisabled=""/gi, " disabled");
  s = s.replace(/\sdisabled=''/gi, " disabled");

  s = s.replace(/\bchecked=""/g, "defaultChecked");
  s = s.replace(/\bchecked=''/g, "defaultChecked");
  s = s.replace(/\bchecked="checked"/gi, "defaultChecked");

  function styleAttrToJsx(styleStr) {
    const parts = styleStr.split(";").filter(Boolean);
    const obj = {};
    for (const p of parts) {
      const idx = p.indexOf(":");
      if (idx === -1) continue;
      const key = p.slice(0, idx).trim();
      const val = p.slice(idx + 1).trim();
      if (!key) continue;
      const camel = key.replace(/-([a-z])/gi, (_, c) => c.toUpperCase());
      obj[camel] = val;
    }
    const inner = Object.entries(obj)
      .map(([k, v]) => `${k}: ${JSON.stringify(v)}`)
      .join(", ");
    return `style={{${inner}}}`;
  }

  s = s.replace(/style="([^"]*)"/g, (_, styleStr) => styleAttrToJsx(styleStr));
  s = s.replace(/style='([^']*)'/g, (_, styleStr) => styleAttrToJsx(styleStr));

  const voidTags = [
    "img",
    "input",
    "br",
    "hr",
    "area",
    "base",
    "col",
    "embed",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr",
  ];
  for (const tag of voidTags) {
    const re = new RegExp(`<${tag}([^>]*?)(?<!/)>`, "gi");
    s = s.replace(re, `<${tag}$1 />`);
  }

  s = s.replace(/<a(\s)/gi, "<Link$1");
  s = s.replace(/<a>/gi, "<Link>");
  s = s.replace(/<\/a>/gi, "</Link>");

  s = s.replace(/->/g, "\u2192");
  return s;
}

function linkImportIfNeeded(processedHtml) {
  return processedHtml.includes("<Link") ? 'import Link from "next/link";\n\n' : "";
}

/** @param {string} html */
function extractInlineScripts(html) {
  let i = html.indexOf('src="assets/js/app.js"');
  if (i === -1) i = html.indexOf("assets/js/app.js");
  if (i === -1) return [];
  const close = html.indexOf(">", i);
  const rest = html.slice(close + 1);
  const scripts = [];
  const re = /<script(?![^>]*\ssrc=)[^>]*>([\s\S]*?)<\/script>/gi;
  let m;
  while ((m = re.exec(rest)) !== null) {
    const body = m[1].trim();
    if (body) scripts.push(body);
  }
  return scripts;
}

/** @param {string} html */
function extractModals(html) {
  const mainEnd = html.indexOf("</main>");
  const jq = html.search(/<!--\s*jQuery library/i);
  if (mainEnd === -1 || jq === -1 || jq < mainEnd) return "";
  return html.slice(mainEnd + "</main>".length, jq).trim();
}

/** @param {string} html */
function extractDashboardBody(html) {
  const m = html.match(
    /<div class="dashboard-main-body">\s*([\s\S]*?)\s*<footer class="d-footer">/i
  );
  if (!m) return "";
  let inner = m[1].trim();
  // Outer HTML closes dashboard-main-body before <footer>; layout already wraps children in that div.
  inner = inner.replace(/<\/div>\s*$/i, "").trim();
  return inner;
}

/** @param {string} html */
function extractAuthInner(html) {
  const start = html.search(/<div class="d-lg-flex bg-white"/i);
  if (start === -1) return "";
  const jq = html.indexOf("<!-- jQuery library", start);
  if (jq === -1) return html.slice(start).trim();
  return html.slice(start, jq).trim();
}

function ensureDir(p) {
  mkdirSync(p, { recursive: true });
}

function write(p, content) {
  ensureDir(dirname(p));
  writeFileSync(p, content, "utf8");
}

function componentWrap(name, inner) {
  const linkImport = linkImportIfNeeded(inner);
  return `/* eslint-disable @next/next/no-img-element */
/* Auto-generated from static HTML — preserve class names for theme/CSS */
${linkImport}export default function ${name}() {
  return (
    <>
${inner.split("\n").map((l) => "      " + l).join("\n")}
    </>
  );
}
`;
}

function main() {
  if (!existsSync(indexPath)) {
    console.error("index.html not found at project root");
    process.exit(1);
  }
  const indexHtml = readFileSync(indexPath, "utf8");

  const themeStart = indexHtml.indexOf(
    "<!-- Theme Customization Structure Start -->"
  );
  const themeEnd = indexHtml.indexOf(
    "<!-- Theme Customization Structure End -->"
  );
  const themeBlock =
    themeStart !== -1 && themeEnd !== -1
      ? indexHtml.slice(
          themeStart + "<!-- Theme Customization Structure Start -->".length,
          themeEnd
        )
      : "";

  const overlayMatch = indexHtml.match(
    /<div class="overlay bg-black bg-opacity-50[^"]*"[^>]*>\s*<\/div>/i
  );
  const mobileOverlay = overlayMatch ? overlayMatch[0] : "";

  const asideStart = indexHtml.indexOf('<aside class="sidebar">');
  const asideEnd = indexHtml.indexOf("</aside>", asideStart);
  const sidebar =
    asideStart !== -1 && asideEnd !== -1
      ? indexHtml.slice(asideStart, asideEnd + "</aside>".length)
      : "";

  const mainOpen = indexHtml.indexOf('<main class="dashboard-main">');
  const bodyDiv = indexHtml.indexOf('<div class="dashboard-main-body">', mainOpen);
  const navStart = indexHtml.indexOf('<div class="navbar-header', mainOpen);
  const navbar =
    mainOpen !== -1 && bodyDiv !== -1 && navStart !== -1 && navStart < bodyDiv
      ? indexHtml.slice(navStart, bodyDiv).trim()
      : "";

  const footM = indexHtml.match(
    /<footer class="d-footer">[\s\S]*?<\/footer>/i
  );
  const footer = footM ? footM[0] : "";

  const srcComp = join(root, "src", "components");
  ensureDir(srcComp);

  write(
    join(srcComp, "ThemeCustomization.tsx"),
    componentWrap("ThemeCustomization", htmlToTsx(themeBlock.trim()))
  );
  write(
    join(srcComp, "MobileOverlay.tsx"),
    componentWrap("MobileOverlay", htmlToTsx(mobileOverlay))
  );
  write(join(srcComp, "Sidebar.tsx"), componentWrap("Sidebar", htmlToTsx(sidebar)));
  write(
    join(srcComp, "DashboardNavbar.tsx"),
    componentWrap("DashboardNavbar", htmlToTsx(navbar))
  );
  write(
    join(srcComp, "DashboardFooter.tsx"),
    componentWrap("DashboardFooter", htmlToTsx(footer))
  );

  const appDir = join(root, "src", "app");
  ensureDir(appDir);

  write(
    join(appDir, "layout.tsx"),
    `import type { Metadata } from "next";
import type { ReactNode } from "react";
import LegacyScripts from "@/components/LegacyScripts";
import "@/types/iconify";

export const metadata: Metadata = {
  title: "Edudash - School, College & LMS Admin Dashboard",
  description:
    "Modern Education Admin Dashboard for schools, colleges, universities, and eLearning platforms.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" href="/assets/images/favicon.png" sizes="16x16" />
        <link rel="stylesheet" href="/assets/css/remixicon.css" />
        <link rel="stylesheet" href="/assets/css/lib/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/lib/apexcharts.css" />
        <link rel="stylesheet" href="/assets/css/lib/dataTables.min.css" />
        <link rel="stylesheet" href="/assets/css/lib/flatpickr.min.css" />
        <link rel="stylesheet" href="/assets/css/lib/full-calendar.css" />
        <link rel="stylesheet" href="/assets/css/lib/calendar.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
      </head>
      <body suppressHydrationWarning>
        {children}
        <LegacyScripts />
      </body>
    </html>
  );
}
`
  );

  write(
    join(appDir, "(dashboard)", "layout.tsx"),
    `import type { ReactNode } from "react";
import ThemeCustomization from "@/components/ThemeCustomization";
import MobileOverlay from "@/components/MobileOverlay";
import Sidebar from "@/components/Sidebar";
import DashboardNavbar from "@/components/DashboardNavbar";
import DashboardFooter from "@/components/DashboardFooter";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <ThemeCustomization />
      <MobileOverlay />
      <Sidebar />
      <main className="dashboard-main">
        <DashboardNavbar />
        <div className="dashboard-main-body">{children}</div>
        <DashboardFooter />
      </main>
    </>
  );
}
`
  );

  const htmlFiles = readdirSync(root).filter((f) => f.endsWith(".html"));

  for (const file of htmlFiles) {
    const base = file.replace(/\.html$/i, "");
    const full = readFileSync(join(root, file), "utf8");

    if (base === "login" || base === "register") {
      const inner = extractAuthInner(full);
      const tsx = htmlToTsx(inner);
      const scripts = extractInlineScripts(full);
      const safeScripts = scripts
        .join("\n\n")
        .replace(/<\/script>/gi, "<\\/script>");
      const scriptPart =
        scripts.length > 0
          ? `import Script from "next/script";

const __inline = ${JSON.stringify(safeScripts)};

`
          : "";
      const scriptEl =
        scripts.length > 0
          ? `      <Script
        id="auth-${base}-scripts"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: __inline }}
      />`
          : "";

      const page = `${scriptPart}import Link from "next/link";
import ThemeCustomization from "@/components/ThemeCustomization";
import MobileOverlay from "@/components/MobileOverlay";

export default function ${base === "login" ? "Login" : "Register"}Page() {
  return (
    <>
      <ThemeCustomization />
      <MobileOverlay />
${tsx.split("\n").map((l) => "      " + l).join("\n")}
${scriptEl}
    </>
  );
}
`;
      ensureDir(join(appDir, base));
      write(join(appDir, base, "page.tsx"), page);
      continue;
    }

    const inner = extractDashboardBody(full);
    if (!inner) {
      console.warn("skip (no dashboard body):", file);
      continue;
    }
    const modals = extractModals(full);
    const scripts = extractInlineScripts(full);

    const innerTsx = htmlToTsx(inner);
    const modalsTsx = modals ? htmlToTsx(modals) : "";

    const scriptImport =
      scripts.length > 0 ? `import Script from "next/script";\n` : "";
    const safeInline = scripts
      .join("\n\n")
      .replace(/<\/script>/gi, "<\\/script>");
    const scriptConst =
      scripts.length > 0
        ? `const __inlineScripts = ${JSON.stringify(safeInline)};\n\n`
        : "";
    const scriptJsx =
      scripts.length > 0
        ? `      <Script
        id="page-${base}-inline"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: __inlineScripts }}
      />`
        : "";

    const compName =
      base
        .split(/[^a-zA-Z0-9]+/)
        .filter(Boolean)
        .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
        .join("") + "Page";

    const pageContent = `/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
${scriptImport}${scriptConst}export default function ${compName}() {
  return (
    <>
${innerTsx.split("\n").map((l) => "      " + l).join("\n")}
${modalsTsx ? modalsTsx.split("\n").map((l) => "      " + l).join("\n") : ""}
${scriptJsx}
    </>
  );
}
`;

    if (base === "index") {
      ensureDir(join(appDir, "(dashboard)"));
      write(join(appDir, "(dashboard)", "page.tsx"), pageContent);
    } else {
      ensureDir(join(appDir, "(dashboard)", base));
      write(join(appDir, "(dashboard)", base, "page.tsx"), pageContent);
    }
  }

  console.log("convert-html: wrote shared components +", htmlFiles.length, "routes");
}

main();
