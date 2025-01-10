import express from 'express';
import cors from 'cors';
import { exec } from 'child_process';
import fs from 'fs/promises';
import path from 'path';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/execute', async (req, res) => {
  const { code, input } = req.body;
  
  try {
    // Create a temporary directory for the Java files
    const tempDir = path.join(process.cwd(), 'temp');
    await fs.mkdir(tempDir, { recursive: true });
    
    // Write the code to a Java file
    const javaFile = path.join(tempDir, 'Main.java');
    await fs.writeFile(javaFile, code);
    
    // Compile the Java code
    await new Promise((resolve, reject) => {
      exec(`javac "${javaFile}"`, (error, stdout, stderr) => {
        if (error) {
          reject(new Error(stderr));
        } else {
          resolve(stdout);
        }
      });
    });
    
    // Execute the compiled code
    const output = await new Promise((resolve, reject) => {
      exec(`cd "${tempDir}" && java Main`, { input }, (error, stdout, stderr) => {
        if (error) {
          reject(new Error(stderr));
        } else {
          resolve(stdout);
        }
      });
    });
    
    // Clean up
    await fs.rm(tempDir, { recursive: true, force: true });
    
    // Always return a string output
    res.json({ output: output || '' });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: error.message, output: '' });
  }
});

app.post('/api/check-structure', (req, res) => {
  const { code, testCase } = req.body;
  
  // Check if code contains the expected structure
  const containsStructure = code.includes(testCase.expectedOutput);
  
  res.json({
    passed: containsStructure,
    message: containsStructure ? 'Structure check passed' : 'Structure check failed'
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});