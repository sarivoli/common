const fs = require('fs');
const path = require('path');

const PRODUCTS_DIR = path.join(__dirname, '../products');
const ROOT_README = path.join(__dirname, '../README.md');
const REPO_URL = 'https://github.com/sarivoli/common/tree/main/products'; // Adjust if branch differs
const RAW_URL_BASE = 'https://raw.githubusercontent.com/sarivoli/common/main/products';

if (!fs.existsSync(PRODUCTS_DIR)) {
    console.error('Products directory not found.');
    process.exit(1);
}

const products = fs.readdirSync(PRODUCTS_DIR).filter(f => fs.statSync(path.join(PRODUCTS_DIR, f)).isDirectory());

let readmeContent = `# Arivoli's Tools & Extensions collection

Welcome to the central repository for my browser extensions, VS Code extensions, and tools.
This repository is automatically updated with the latest releases, privacy policies, and documentation for each tool.

## 🚀 Projects

`;

// Generate Grid or List
// Using HTML table for better layout control in Markdown, or simple list
readmeContent += `<table width="100%">\n`;

let idx = 0;
products.forEach(product => {
    const productPath = path.join(PRODUCTS_DIR, product);
    const versionPath = path.join(productPath, 'VERSION');
    const readmePath = path.join(productPath, 'README.md');
    const userGuidePath = path.join(productPath, 'USER_GUIDE.md');
    const assetsDir = path.join(productPath, 'assets');
    
    let version = '0.0.0';
    if (fs.existsSync(versionPath)) {
        version = fs.readFileSync(versionPath, 'utf8').trim();
    }

    // Attempt to find logo
    let logoUrl = '';
    if (fs.existsSync(assetsDir)) {
        const files = fs.readdirSync(assetsDir);
        const logoFile = files.find(f => f.toLowerCase().includes('logo') || f.toLowerCase().includes('icon'));
        if (logoFile) {
            logoUrl = `${RAW_URL_BASE}/${product}/assets/${logoFile}`;
        }
    }

    // Extract Description (First Paragraph after title)
    let description = 'No description available.';
    let displayTitle = product;
    if (fs.existsSync(readmePath)) {
        const content = fs.readFileSync(readmePath, 'utf8').split('\n');
        // Simple heuristic: First line with '#' is title. First line after that not empty is desc.
        let titleFound = false;
        for (let line of content) {
            line = line.trim();
            if (line.startsWith('# ') && !titleFound) {
                displayTitle = line.replace('#', '').trim();
                titleFound = true;
                continue;
            }
            if (titleFound && line.length > 5 && !line.startsWith('<') && !line.startsWith('![')) {
                // description = line; // Take one line
                break;
            }
        }
    }

    // Fallback title formatting if still folder name
    if (displayTitle === product) {
        displayTitle = product.charAt(0).toUpperCase() + product.slice(1);
    }

    if (idx % 2 === 0) {
        readmeContent += `  <tr>\n`;
    }

    const toolUrl = `${REPO_URL}/${product}`;
    
    readmeContent += `    <td width="50%" valign="top">\n`;
    readmeContent += `      <h3 align="center"><a href="${toolUrl}">${displayTitle}</a></h3>\n`;
    if (logoUrl) {
        readmeContent += `      <div align="center"><a href="${toolUrl}"><img src="${logoUrl}" width="100" style="border-radius:10px" /></a></div>\n`;
    }
    readmeContent += `      <p align="center">\n`;
    readmeContent += `        <b>Version:</b> \`${version}\` <br/>\n`;
    readmeContent += `        <a href="${toolUrl}">📄 Documentation</a>`;
    
    if (fs.existsSync(userGuidePath)) {
        readmeContent += ` | <a href="${toolUrl}/USER_GUIDE.md">📘 User Guide</a>`;
    }

    readmeContent += ` | <a href="${toolUrl}/PRIVACY.md">🔒 Privacy Policy</a>\n`;
    readmeContent += `      </p>\n`;
    readmeContent += `    </td>\n`;

    if (idx % 2 === 1) {
        readmeContent += `  </tr>\n`;
    }
    idx++;
});

if (idx % 2 !== 0) {
    readmeContent += `    <td></td>\n  </tr>\n`;
}

readmeContent += `</table>\n\n`;

readmeContent += `## 📜 Workflow & Updates

This repository works as a public facade. The source code for each tool is maintained in private repositories.
Updates are pushed here automatically upon new releases.
\n`;

fs.writeFileSync(ROOT_README, readmeContent);
console.log('Root README updated successfully.');
