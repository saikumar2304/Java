const express = require('express');
const { exec } = require('child_process');
const fs = require('fs').promises;
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const TEMP_DIR = path.join(__dirname, 'temp');

// Ensure temp directory exists
if (!fs.existsSync(TEMP_DIR)) {
  fs.mkdirSync(TEMP_DIR, { recursive: true });
}

app.post('/compile', async (req, res) => {
  const { code } = req.body;
  const timestamp = Date.now();
  const fileName = `Main${timestamp}.java`;
  const filePath = path.join(TEMP_DIR, fileName);
  
  try {
    // Write code to file
    await fs.writeFile(filePath, code);
    
    // Compile and run with timeout
    exec(
      `cd ${TEMP_DIR} && javac ${fileName} && java Main${timestamp}`,
      { timeout: 5000 }, // 5 second timeout
      async (error, stdout, stderr) => {
        // Clean up
        try {
          await fs.unlink(filePath);
          await fs.unlink(path.join(TEMP_DIR, `Main${timestamp}.class`));
        } catch (e) {
          console.error('Cleanup error:', e);
        }

        if (error) {
          res.json({ error: stderr || error.message });
        } else {
          res.json({ output: stdout });
        }
      }
    );
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});