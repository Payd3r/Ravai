#!/usr/bin/env node

/**
 * Script per ottimizzare le immagini del progetto
 * Converte automaticamente in formati moderni (WebP, AVIF) e riduce le dimensioni
 */

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const INPUT_DIRS = [
  'public/cardCover',
  'public/carouselMockup'
];

const OUTPUT_FORMATS = ['webp', 'avif'];
const JPEG_QUALITY = 85;
const PNG_QUALITY = 90;
const WEBP_QUALITY = 80;
const AVIF_QUALITY = 75;

console.log('🖼️  Iniziando ottimizzazione immagini...\n');

// Verifica se ImageMagick o sharp-cli sono installati
function checkDependencies() {
  try {
    execSync('magick -version', { stdio: 'pipe' });
    console.log('✅ ImageMagick trovato');
    return 'imagemagick';
  } catch {
    try {
      execSync('npx sharp-cli --version', { stdio: 'pipe' });
      console.log('✅ sharp-cli trovato');
      return 'sharp';
    } catch {
      console.error('❌ Errore: Installa ImageMagick o sharp-cli per ottimizzare le immagini');
      console.log('Per ImageMagick: https://imagemagick.org/script/download.php');
      console.log('Per sharp-cli: npm install -g sharp-cli');
      process.exit(1);
    }
  }
}

// Ottimizza un'immagine usando ImageMagick
function optimizeWithImageMagick(inputPath, outputPath, format, quality) {
  const ext = path.extname(inputPath).toLowerCase();
  let cmd;

  if (format === 'webp') {
    cmd = `magick "${inputPath}" -quality ${quality} "${outputPath}"`;
  } else if (format === 'avif') {
    cmd = `magick "${inputPath}" -quality ${quality} "${outputPath}"`;
  } else {
    // Ottimizzazione originale
    if (ext === '.jpg' || ext === '.jpeg') {
      cmd = `magick "${inputPath}" -quality ${quality} -strip "${outputPath}"`;
    } else if (ext === '.png') {
      cmd = `magick "${inputPath}" -quality ${quality} -strip "${outputPath}"`;
    }
  }

  if (cmd) {
    try {
      execSync(cmd, { stdio: 'pipe' });
      return true;
    } catch (error) {
      console.error(`❌ Errore nell'ottimizzazione di ${inputPath}:`, error.message);
      return false;
    }
  }
  return false;
}

// Ottimizza un'immagine usando sharp-cli
function optimizeWithSharp(inputPath, outputPath, format, quality) {
  let cmd;

  if (format === 'webp') {
    cmd = `npx sharp-cli --input "${inputPath}" --output "${outputPath}" --format webp --quality ${quality}`;
  } else if (format === 'avif') {
    cmd = `npx sharp-cli --input "${inputPath}" --output "${outputPath}" --format avif --quality ${quality}`;
  } else {
    // Ottimizzazione originale
    const ext = path.extname(inputPath).toLowerCase();
    if (ext === '.jpg' || ext === '.jpeg') {
      cmd = `npx sharp-cli --input "${inputPath}" --output "${outputPath}" --format jpeg --quality ${quality}`;
    } else if (ext === '.png') {
      cmd = `npx sharp-cli --input "${inputPath}" --output "${outputPath}" --format png --quality ${quality}`;
    }
  }

  if (cmd) {
    try {
      execSync(cmd, { stdio: 'pipe' });
      return true;
    } catch (error) {
      console.error(`❌ Errore nell'ottimizzazione di ${inputPath}:`, error.message);
      return false;
    }
  }
  return false;
}

// Funzione principale di ottimizzazione
function optimizeImage(filePath, tool) {
  const ext = path.extname(filePath).toLowerCase();
  const baseName = path.basename(filePath, ext);
  const dir = path.dirname(filePath);

  if (!['.jpg', '.jpeg', '.png'].includes(ext)) {
    return;
  }

  console.log(`🔄 Ottimizzando: ${path.relative('.', filePath)}`);

  let optimized = false;

  // Ottimizza il file originale
  const originalQuality = ext === '.png' ? PNG_QUALITY : JPEG_QUALITY;
  const tempPath = path.join(dir, `${baseName}_optimized${ext}`);
  
  const optimizeFunc = tool === 'imagemagick' ? optimizeWithImageMagick : optimizeWithSharp;
  
  if (optimizeFunc(filePath, tempPath, null, originalQuality)) {
    // Sostituisci solo se il file è più piccolo
    const originalSize = fs.statSync(filePath).size;
    const optimizedSize = fs.statSync(tempPath).size;
    
    if (optimizedSize < originalSize) {
      fs.renameSync(tempPath, filePath);
      const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
      console.log(`  ✅ Ottimizzato: -${savings}% (${(originalSize/1024).toFixed(1)}KB → ${(optimizedSize/1024).toFixed(1)}KB)`);
      optimized = true;
    } else {
      fs.unlinkSync(tempPath);
      console.log(`  ℹ️  Già ottimizzato`);
    }
  }

  // Genera formati moderni
  for (const format of OUTPUT_FORMATS) {
    const outputPath = path.join(dir, `${baseName}.${format}`);
    const quality = format === 'webp' ? WEBP_QUALITY : AVIF_QUALITY;
    
    if (!fs.existsSync(outputPath)) {
      if (optimizeFunc(filePath, outputPath, format, quality)) {
        const originalSize = fs.statSync(filePath).size;
        const newSize = fs.statSync(outputPath).size;
        const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);
        console.log(`  ✅ Creato ${format.toUpperCase()}: -${savings}% (${(newSize/1024).toFixed(1)}KB)`);
        optimized = true;
      }
    } else {
      console.log(`  ℹ️  ${format.toUpperCase()} già esistente`);
    }
  }

  if (!optimized) {
    console.log(`  ℹ️  Nessuna ottimizzazione necessaria`);
  }
}

// Elabora ricorsivamente una directory
function processDirectory(dirPath, tool) {
  if (!fs.existsSync(dirPath)) {
    console.log(`⚠️  Directory non trovata: ${dirPath}`);
    return;
  }

  const files = fs.readdirSync(dirPath);
  
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      processDirectory(filePath, tool);
    } else {
      optimizeImage(filePath, tool);
    }
  }
}

// Script principale
function main() {
  const tool = checkDependencies();
  console.log('');

  let totalProcessed = 0;
  
  for (const dir of INPUT_DIRS) {
    if (fs.existsSync(dir)) {
      console.log(`📁 Elaborando directory: ${dir}`);
      const filesBefore = countFiles(dir);
      processDirectory(dir, tool);
      const filesAfter = countFiles(dir);
      totalProcessed += filesBefore;
      console.log(`✅ Completato: ${dir} (${filesBefore} → ${filesAfter} file)\n`);
    } else {
      console.log(`⚠️  Directory saltata (non esiste): ${dir}\n`);
    }
  }

  console.log(`🎉 Ottimizzazione completata! Elaborati ${totalProcessed} file.`);
  console.log(`💡 Suggerimento: Aggiorna il tuo server web per servire automaticamente i formati WebP/AVIF quando supportati.`);
}

// Conta i file immagine in una directory
function countFiles(dirPath) {
  let count = 0;
  
  function countRecursive(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        countRecursive(filePath);
      } else {
        const ext = path.extname(file).toLowerCase();
        if (['.jpg', '.jpeg', '.png'].includes(ext)) {
          count++;
        }
      }
    }
  }
  
  countRecursive(dirPath);
  return count;
}

// Esegui lo script
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}
