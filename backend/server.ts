import express from 'express';
import cors from 'cors';
import { exec } from 'child_process';
import fs from 'fs/promises';
import path from 'path';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/compile', async (req, res) => {
  const { code } = req.body;
  const filename = 'Main.java';
  
  try {
    // Write code to file
    await fs.writeFile(filename, code);
    
    // Compile
    exec(`javac ${filename}`, async (error, stdout, stderr) => {
      if (error) {
        return res.json({ error: stderr });
      }
      
      // Run
      exec('java Main', (error, stdout, stderr) => {
        if (error) {
          return res.json({ error: stderr });
        }
        res.json({ output: stdout });
      });
    });
  } catch (error) {
    res.json({ error: 'Error processing code' });
  }
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
}); 