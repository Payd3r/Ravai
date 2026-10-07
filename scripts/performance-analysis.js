#!/usr/bin/env node

/**
 * Script per analizzare le prestazioni del bundle e suggerire ottimizzazioni
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = 'dist';
const MAX_CHUNK_SIZE = 500 * 1024; // 500KB
const MAX_INITIAL_BUNDLE = 1024 * 1024; // 1MB

console.log('📊 Analizzando le prestazioni del bundle...\n');

// Analizza i file nella directory dist
function analyzeBundle() {
  if (!fs.existsSync(DIST_DIR)) {
    console.error('❌ Directory dist non trovata. Esegui prima `npm run build`');
    process.exit(1);
  }

  const stats = {
    total: 0,
    js: { size: 0, count: 0, files: [] },
    css: { size: 0, count: 0, files: [] },
    images: { size: 0, count: 0, files: [] },
    other: { size: 0, count: 0, files: [] }
  };

  function analyzeDirectory(dir, relativePath = '') {
    const files = fs.readdirSync(dir);

    for (const file of files) {
      const filePath = path.join(dir, file);
      const relativeFilePath = path.join(relativePath, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        analyzeDirectory(filePath, relativeFilePath);
      } else {
        const size = stat.size;
        const ext = path.extname(file).toLowerCase();
        
        stats.total += size;

        if (['.js', '.mjs'].includes(ext)) {
          stats.js.size += size;
          stats.js.count++;
          stats.js.files.push({ path: relativeFilePath, size });
        } else if (ext === '.css') {
          stats.css.size += size;
          stats.css.count++;
          stats.css.files.push({ path: relativeFilePath, size });
        } else if (['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp', '.avif'].includes(ext)) {
          stats.images.size += size;
          stats.images.count++;
          stats.images.files.push({ path: relativeFilePath, size });
        } else {
          stats.other.size += size;
          stats.other.count++;
          stats.other.files.push({ path: relativeFilePath, size });
        }
      }
    }
  }

  analyzeDirectory(DIST_DIR);
  return stats;
}

// Formatta la dimensione in formato human-readable
function formatSize(bytes) {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
}

// Analizza le prestazioni e fornisce suggerimenti
function analyzePerformance(stats) {
  console.log('📈 Risultati dell\'analisi:\n');

  // Riepilogo generale
  console.log(`🎯 Dimensione totale del bundle: ${formatSize(stats.total)}`);
  console.log(`📦 File JavaScript: ${stats.js.count} (${formatSize(stats.js.size)})`);
  console.log(`🎨 File CSS: ${stats.css.count} (${formatSize(stats.css.size)})`);
  console.log(`🖼️  Immagini: ${stats.images.count} (${formatSize(stats.images.size)})`);
  console.log(`📄 Altri file: ${stats.other.count} (${formatSize(stats.other.size)})\n`);

  // Analizza i chunk JS
  console.log('🔍 Analisi dettagliata JavaScript:');
  const jsFiles = stats.js.files.sort((a, b) => b.size - a.size);
  
  let hasLargeChunks = false;
  for (const file of jsFiles) {
    const sizeStr = formatSize(file.size);
    let status = '✅';
    
    if (file.size > MAX_CHUNK_SIZE) {
      status = '⚠️ ';
      hasLargeChunks = true;
    }
    
    console.log(`  ${status} ${file.path}: ${sizeStr}`);
  }

  if (hasLargeChunks) {
    console.log('\n💡 Suggerimenti per ottimizzare i chunk JavaScript:');
    console.log('   • Considera di splitare ulteriormente i chunk grandi');
    console.log('   • Verifica se ci sono dipendenze pesanti che possono essere lazy-loaded');
    console.log('   • Controlla se il tree-shaking sta funzionando correttamente');
  }

  // Analizza le immagini
  console.log('\n🖼️  Analisi delle immagini:');
  const imageFiles = stats.images.files.sort((a, b) => b.size - a.size);
  
  let hasLargeImages = false;
  for (const file of imageFiles.slice(0, 10)) { // Mostra solo le prime 10
    const sizeStr = formatSize(file.size);
    let status = '✅';
    
    if (file.size > 100 * 1024) { // > 100KB
      status = '⚠️ ';
      hasLargeImages = true;
    }
    
    console.log(`  ${status} ${file.path}: ${sizeStr}`);
  }

  if (hasLargeImages) {
    console.log('\n💡 Suggerimenti per ottimizzare le immagini:');
    console.log('   • Comprimi le immagini grandi con npm run optimize:images');
    console.log('   • Considera l\'uso di formati moderni (WebP, AVIF)');
    console.log('   • Implementa il lazy loading per immagini non critiche');
  }

  // Controllo bundle iniziale
  const initialBundle = jsFiles.find(f => f.path.includes('index')) || jsFiles[0];
  if (initialBundle && initialBundle.size > MAX_INITIAL_BUNDLE) {
    console.log('\n⚠️  Il bundle iniziale è molto grande!');
    console.log(`   Bundle principale: ${formatSize(initialBundle.size)}`);
    console.log('\n💡 Suggerimenti:');
    console.log('   • Implementa il code splitting più aggressivo');
    console.log('   • Sposta componenti non critici al lazy loading');
    console.log('   • Controlla le dipendenze importate nel bundle principale');
  }

  // Score delle prestazioni
  let score = 100;
  
  if (stats.total > 2 * 1024 * 1024) score -= 20; // > 2MB
  if (hasLargeChunks) score -= 15;
  if (hasLargeImages) score -= 15;
  if (initialBundle && initialBundle.size > MAX_INITIAL_BUNDLE) score -= 25;
  if (stats.js.size > stats.total * 0.7) score -= 10; // JS > 70% del bundle

  console.log(`\n🏆 Score prestazioni: ${Math.max(0, score)}/100`);
  
  if (score >= 90) {
    console.log('🎉 Eccellente! Il bundle è ben ottimizzato.');
  } else if (score >= 70) {
    console.log('👍 Buono, ma ci sono margini di miglioramento.');
  } else if (score >= 50) {
    console.log('⚠️  Mediocre, considera le ottimizzazioni suggerite.');
  } else {
    console.log('❌ Il bundle necessita di ottimizzazioni significative.');
  }

  return score;
}

// Genera il report delle prestazioni
function generateReport(stats, score) {
  const report = {
    timestamp: new Date().toISOString(),
    totalSize: stats.total,
    score: score,
    breakdown: {
      javascript: { size: stats.js.size, count: stats.js.count },
      css: { size: stats.css.size, count: stats.css.count },
      images: { size: stats.images.size, count: stats.images.count },
      other: { size: stats.other.size, count: stats.other.count }
    },
    largestFiles: [
      ...stats.js.files,
      ...stats.css.files,
      ...stats.images.files
    ].sort((a, b) => b.size - a.size).slice(0, 10)
  };

  const reportPath = 'performance-report.json';
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  console.log(`\n📋 Report salvato in ${reportPath}`);
}

// Confronta con report precedente
function compareWithPrevious(currentStats) {
  const reportPath = 'performance-report.json';
  
  if (fs.existsSync(reportPath)) {
    try {
      const previousReport = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
      const sizeDiff = currentStats.total - previousReport.totalSize;
      const scoreDiff = currentStats.score - previousReport.score;

      console.log('\n📊 Confronto con il build precedente:');
      
      if (sizeDiff !== 0) {
        const diffStr = formatSize(Math.abs(sizeDiff));
        const sign = sizeDiff > 0 ? '+' : '-';
        const emoji = sizeDiff > 0 ? '📈' : '📉';
        console.log(`   ${emoji} Dimensione: ${sign}${diffStr}`);
      }
      
      if (scoreDiff !== 0) {
        const sign = scoreDiff > 0 ? '+' : '';
        const emoji = scoreDiff > 0 ? '📈' : '📉';
        console.log(`   ${emoji} Score: ${sign}${scoreDiff} punti`);
      }
    } catch (error) {
      console.log('⚠️  Impossibile leggere il report precedente');
    }
  }
}

// Script principale
function main() {
  try {
    const stats = analyzeBundle();
    const score = analyzePerformance(stats);
    
    const statsWithScore = { ...stats, score };
    compareWithPrevious(statsWithScore);
    generateReport(stats, score);
    
    console.log('\n✨ Analisi completata!');
    
    // Exit code basato sul score
    if (score < 50) {
      process.exit(1);
    }
  } catch (error) {
    console.error('❌ Errore durante l\'analisi:', error.message);
    process.exit(1);
  }
}

// Esegui lo script
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}
