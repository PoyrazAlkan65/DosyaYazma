const fs = require('fs');
const path = require('path');

// Ortam değişkenlerini formatla
const envVars = Object.entries(process.env)
  .map(([key, value]) => `${key}=${value}`)
  .join('\n');

// Yazılacak dosya yolu
const outputPath = path.join(__dirname, 'env_output.txt');

// Dosyaya yaz
fs.writeFile(outputPath, envVars, (err) => {
  if (err) {
    console.error('Dosya yazılamadı:', err);
  } else {
    console.log(`Ortam değişkenleri "${outputPath}" dosyasına yazıldı.`);
  }
});
