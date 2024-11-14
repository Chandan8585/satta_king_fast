
import fs from 'fs';
import path from 'path';
import '../src/api/SattaFiles/latest-result.txt';
export async function handler(req, res) {
  try {
    const filePath = path.join(process.cwd(), 'public', '../src/api/SattaFiles/result-ty.txt');
    const content = fs.readFileSync(filePath, 'utf8');
    res.status(200).json({ content });
  } catch (error) {
    res.status(500).json({ error: 'Error reading file' });
  }
}
