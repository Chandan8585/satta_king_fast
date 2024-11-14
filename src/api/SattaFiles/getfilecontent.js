import fs from 'fs';
import path from 'path';

export function getFileContent(filename) {
  const filePath = path.join(process.cwd(), 'src/api', filename);
  let content = '';

  try {
    content = fs.readFileSync(filePath, 'utf-8');
  } catch (error) {
    console.error('Error reading file:', error);
  }

  return content;
}
