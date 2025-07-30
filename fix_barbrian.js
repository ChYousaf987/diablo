// Script to fix all instances of 'barbrian' to 'barbarian' in the codebase
const fs = require('fs');
const path = require('path');

// Function to recursively find all .js files in a directory
function findJsFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      findJsFiles(filePath, fileList);
    } else if (path.extname(file) === '.js') {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Function to fix 'barbrian' to 'barbarian' in a file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Replace all instances of 'barbrian' with 'barbarian'
    content = content.replace(/barbrian/g, 'barbarian');
    
    // Only write to the file if changes were made
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing file ${filePath}:`, error);
    return false;
  }
}

// Main function
function main() {
  const rootDir = path.resolve(__dirname, 'src');
  const jsFiles = findJsFiles(rootDir);
  
  console.log(`Found ${jsFiles.length} JavaScript files to check.`);
  
  let fixedCount = 0;
  
  jsFiles.forEach(file => {
    if (fixFile(file)) {
      fixedCount++;
    }
  });
  
  console.log(`Fixed 'barbrian' to 'barbarian' in ${fixedCount} files.`);
}

main();