const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to convert CRLF to LF
function convertCRLFtoLF(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const newContent = content.replace(/\r\n/g, '\n');
    
    if (content !== newContent) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Fixed line endings in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing file ${filePath}:`, error);
  }
}

// Get all JavaScript and JSX files
const files = glob.sync('src/**/*.{js,jsx}', { ignore: ['node_modules/**', '.next/**', 'build/**'] });

// Process each file
files.forEach(convertCRLFtoLF);

console.log('Line ending conversion complete!');
