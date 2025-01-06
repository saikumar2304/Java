import express from 'express';
import cors from 'cors';
import { exec } from 'child_process';
import { writeFile, mkdir } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Create a directory for temporary files
const tempDir = join(__dirname, 'temp');

// Ensure temp directory exists
if (!existsSync(tempDir)) {
  await mkdir(tempDir, { recursive: true });
}

app.post('/compile', async (req, res) => {
  const { code } = req.body;
  const filename = 'Main.java';
  const filepath = join(tempDir, filename);
  
  try {
    // Write code to file
    await writeFile(filepath, code);
    
    // Compile and run in a single promise
    const result = await new Promise((resolve) => {
      // Compile - wrap filepath in quotes to handle spaces
      exec(`javac "${filepath}"`, (compileError, compileStdout, compileStderr) => {
        if (compileError) {
          resolve({ error: compileStderr });
          return;
        }
        
        // Run - cd to temp directory first to avoid path issues
        exec(`cd "${tempDir}" && java Main`, (runError, runStdout, runStderr) => {
          if (runError) {
            resolve({ error: runStderr });
            return;
          }
          resolve({ output: runStdout });
        });
      });
    });

    res.json(result);
  } catch (error) {
    console.error('Error:', error);
    res.json({ error: 'Error processing code: ' + error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Temp directory: ${tempDir}`);
});