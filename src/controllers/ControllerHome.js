import fs from "fs/promises";
import path from "path";
import { marked } from "marked";

export const getHome = async (req, res) => {
  try {
    
    const readmePath = path.join(process.cwd(), "README.md");
    const data = await fs.readFile(readmePath, "utf-8");
    const html = marked.parse(data);

    res.send(`
      <html>
        <head>
          <title>API Documentation</title>
          <style>
            body { font-family: sans-serif; margin: 2rem; }
            pre { background-color: #f4f4f4; padding: 1rem; overflow: auto; }
            code { background-color: #eee; padding: 0.2rem 0.4rem; }
            a { color: #0366d6; text-decoration: none; }
          </style>
        </head>
        <body>
          ${html}
        </body>
      </html>
    `);
  } catch (error) {
    res.status(500).send("No se pudo cargar el README.");
  }
};
