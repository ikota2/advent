import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get component name and type from command line
const [, , componentName, componentType = 'javascript'] = process.argv;

if (!componentName) {
	console.error('❌ Please provide a component name');
	console.log('Usage: npm run create:component ComponentName [javascript|css]');
	process.exit(1);
}

// Use PascalCase for folder names too
const folderName = componentName; // Keep PascalCase

// Convert PascalCase to kebab-case ONLY for CSS file name
const kebabCaseCss = componentName
	.replace(/([a-z0-9])([A-Z])/g, '$1-$2')
	.toLowerCase();

// Define paths
const basePath = path.join(__dirname, '..', 'src', 'features', componentType);
const componentPath = path.join(basePath, folderName);

// Create component directory
if (!fs.existsSync(componentPath)) {
	fs.mkdirSync(componentPath, { recursive: true });
	console.log(`📁 Created directory: ${componentPath}`);
} else {
	console.error(`❌ Component ${folderName} already exists!`);
	process.exit(1);
}

// Component template (PascalCase component name)
const componentTemplate = `import React from 'react';
import styles from './${kebabCaseCss}.module.css';

export const ${componentName} = () => {
  return (
    <React.Fragment>
      hello ${componentName}
    </React.Fragment>
  );
};
`;

const cssTemplate = ``;

const indexTemplate = `export { ${componentName} } from './${componentName}';
`;

const files = [
	{ name: `${componentName}.jsx`, content: componentTemplate },
	{ name: `${kebabCaseCss}.module.css`, content: cssTemplate },
	{ name: 'index.js', content: indexTemplate },
];

files.forEach((file) => {
	const filePath = path.join(componentPath, file.name);
	fs.writeFileSync(filePath, file.content);
	console.log(`✅ Created: ${file.name}`);
});

// Update the main export file
const barrelExportPath = path.join(basePath, 'index.js');
let barrelContent = '';

if (fs.existsSync(barrelExportPath)) {
	barrelContent = fs.readFileSync(barrelExportPath, 'utf8');
}

const exportLine = `export { ${componentName} } from './${folderName}';`;

if (!barrelContent.includes(exportLine)) {
	barrelContent += `${exportLine}\n`;
	fs.writeFileSync(barrelExportPath, barrelContent);
	console.log(`✅ Updated: features/${componentType}/index.js`);
}

console.log(`🎉 Component ${componentName} created successfully!`);
console.log(`📍 Location: src/features/${componentType}/${folderName}/`);
