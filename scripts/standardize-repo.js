const fs = require('fs');
const path = require('path');

const PRODUCTS_DIR = path.join(__dirname, '../products');
const GENERIC_PRIVACY = `# Privacy Policy

This privacy policy applies to the software associated with this repository.

## Data Collection
We do not collect any personal data.

## Contact
For questions, please open an issue in this repository.
`;

if (!fs.existsSync(PRODUCTS_DIR)) {
    console.error(`Products directory not found: ${PRODUCTS_DIR}`);
    process.exit(1);
}

const products = fs.readdirSync(PRODUCTS_DIR).filter(f => fs.statSync(path.join(PRODUCTS_DIR, f)).isDirectory());

products.forEach(product => {
    const productPath = path.join(PRODUCTS_DIR, product);
    console.log(`Processing ${product}...`);

    // 1. Ensure VERSION file
    const versionPath = path.join(productPath, 'VERSION');
    const readmePath = path.join(productPath, 'README.md');
    
    if (!fs.existsSync(versionPath)) {
        let version = '0.0.1';
        if (fs.existsSync(readmePath)) {
            const readmeContent = fs.readFileSync(readmePath, 'utf8');
            // Try to find version patterns: "**Version:** 0.2.34" or similar
            const versionMatch = readmeContent.match(/Version:.*?(\d+\.\d+\.\d+)/i) || 
                                 readmeContent.match(/v(\d+\.\d+\.\d+)/i) ||
                                 readmeContent.match(/version.*?(\d+\.\d+\.\d+)/i);
            
            if (versionMatch && versionMatch[1]) {
                version = versionMatch[1];
                console.log(`  Found version ${version} in README.`);
            } else {
                console.log(`  Version not found in README, defaulting to ${version}.`);
            }
        }
        fs.writeFileSync(versionPath, version.trim());
        console.log(`  Created VERSION file.`);
    }

    // 2. Ensure PRIVACY.md
    const privacyPath = path.join(productPath, 'PRIVACY.md');
    // Check for variations
    const existingPrivacy = fs.readdirSync(productPath).find(f => f.match(/privacy/i));
    if (existingPrivacy) {
        // Rename if needed to standard PRIVACY.md? 
        if (existingPrivacy !== 'PRIVACY.md') {
             // Optional: rename or just skip. Let's just skip if something similar exists.
             console.log(`  Found existing privacy file: ${existingPrivacy}`);
        }
    } else {
        fs.writeFileSync(privacyPath, GENERIC_PRIVACY);
        console.log(`  Created PRIVACY.md file.`);
    }

    // 3. Ensure assets folder (Already handled mostly, just double check)
    const assetsPath = path.join(productPath, 'assets');
    if (!fs.existsSync(assetsPath)) {
        fs.mkdirSync(assetsPath);
        console.log(`  Created assets directory.`);
    }
});

console.log('Standardization complete.');
