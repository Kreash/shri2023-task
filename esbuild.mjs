import * as esbuild from 'esbuild';
import fs from 'fs';

function readFile(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

await esbuild.build({
  entryPoints: ['src/scripts/main.jsx', 'src/styles/style.css', 'src/styles/fonts.css'],
  bundle: true,
  minify: true,
  loader: { '.png': 'file', '.svg': 'file', '.woff2': 'file' },
  outdir: '/dist/shri2023-task',
});



const indexHtml = await readFile('src/index.html');
fs.writeFileSync('dist/index.html', indexHtml);
