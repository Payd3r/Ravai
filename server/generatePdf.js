import PDFDocument from 'pdfkit';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Colori palette sito (slate)
const COLORS = {
  primary: '#334155',
  secondary: '#475569',
  muted: '#64748b',
  light: '#94a3b8',
  border: '#e2e8f0',
  bg: '#f8fafc',
  white: '#ffffff'
};

const PAGE = {
  width: 595.28,
  height: 841.89,
  margin: 50,
  footerHeight: 45,
  minSpaceForSection: 80
};

/**
 * Trova il percorso del logo (funziona in dev e Docker)
 */
function getLogoPath() {
  const candidates = [
    path.join(process.cwd(), 'public', 'logo.png'),
    path.join(process.cwd(), '..', 'public', 'logo.png'),
    path.join(__dirname, 'public', 'logo.png'),
    path.join(__dirname, '..', 'public', 'logo.png'),
    path.join('/app', 'public', 'logo.png') // Docker explicit
  ];
  for (const p of candidates) {
    try {
      if (fs.existsSync(p)) return p;
    } catch (_) { }
  }
  return null;
}

/**
 * Disegna un box con sfondo e bordo
 */
function drawBox(doc, x, y, w, h, options = {}) {
  const { radius = 6, fill = COLORS.bg, stroke = COLORS.border } = options;
  doc.roundedRect(x, y, w, h, radius).fillAndStroke(fill, stroke);
}

/**
 * Disegna l'header su ogni pagina
 */
function drawHeader(doc, isFirstPage, pageWidth) {
  const headerHeight = isFirstPage ? 110 : 55;
  doc.rect(0, 0, pageWidth, headerHeight).fill(COLORS.primary);

  const logoPath = getLogoPath();
  if (isFirstPage) {
    if (logoPath) {
      try {
        // Disegna il logo a destra (prima dei testi per sicurezza)
        // Posizionato verso l'alto a destra con un po' più di respiro
        doc.image(logoPath, pageWidth - PAGE.margin - 60, 25, { fit: [60, 60] });
      } catch (e) {
        console.error('Logo draw error:', e);
      }
    }

    // Titolo e sottotitoli a sinistra
    doc.fillColor(COLORS.white).fontSize(22).font('Helvetica-Bold')
      .text('RAVAI', PAGE.margin, 25);
    doc.fillColor('rgba(255,255,255,0.9)').fontSize(10).font('Helvetica')
      .text('Siti web che portano clienti', PAGE.margin, 52);
    doc.fillColor('rgba(255,255,255,0.7)').fontSize(9)
      .text('info@ravai.it • +39 334 758 3173 • Como, Italia', PAGE.margin, 68);
  } else {
    doc.fillColor(COLORS.white).fontSize(16).font('Helvetica-Bold')
      .text('RAVAI', PAGE.margin, 18);
    doc.fillColor('rgba(255,255,255,0.8)').fontSize(9)
      .text('Preventivo - Pagina seguente', PAGE.margin, 38);
  }
  return headerHeight;
}

/**
 * Disegna il footer su ogni pagina
 */
function drawFooter(doc, pageWidth, contentWidth) {
  const footerY = PAGE.height - PAGE.footerHeight;
  doc.moveTo(PAGE.margin, footerY - 8).lineTo(PAGE.margin + contentWidth, footerY - 8)
    .strokeColor(COLORS.border).lineWidth(0.5).stroke();
  doc.fillColor(COLORS.light).fontSize(8)
    .text('RAVAI • Siti web che portano clienti • info@ravai.it', PAGE.margin, footerY + 2, {
      width: contentWidth,
      align: 'center'
    });
}

/**
 * Genera un PDF professionale e completo con il preventivo
 */
export function generateQuotePdf(config, packageName, categoryLabel, extrasList, total, packageFeatures, email) {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({ margin: 0, size: 'A4' });
    const chunks = [];

    doc.on('data', (chunk) => chunks.push(chunk));
    doc.on('end', () => resolve(Buffer.concat(chunks)));
    doc.on('error', reject);

    const pageWidth = doc.page.width;
    const contentWidth = pageWidth - PAGE.margin * 2;
    const maxContentY = PAGE.height - PAGE.footerHeight;

    let y = drawHeader(doc, true, pageWidth) + 25; // Diminuito margin sopra box preventivo
    let isFirstPage = true;

    // Helper: vai a nuova pagina se necessario
    const checkSpace = (required) => {
      if (y + required > maxContentY) {
        drawFooter(doc, pageWidth, contentWidth);
        doc.addPage();
        isFirstPage = false;
        y = drawHeader(doc, false, pageWidth) + 25;
      }
    };

    // ========== BOX PREVENTIVO E DATA ==========
    checkSpace(60);
    const dateStr = new Date().toLocaleDateString('it-IT', { day: '2-digit', month: 'long', year: 'numeric' });
    drawBox(doc, PAGE.margin, y, contentWidth, 52, { fill: COLORS.bg });
    doc.fillColor(COLORS.primary).fontSize(12).font('Helvetica-Bold')
      .text('PREVENTIVO', PAGE.margin + 20, y + 12);
    doc.fillColor(COLORS.muted).fontSize(10).font('Helvetica')
      .text(`Generato il ${dateStr}`, PAGE.margin + 20, y + 30);
    doc.fillColor(COLORS.light).fontSize(9)
      .text('Validità: 30 giorni', PAGE.margin + contentWidth - 100, y + 18);
    y += 60;

    // ========== BOX DESTINATARIO ==========
    checkSpace(95);
    drawBox(doc, PAGE.margin, y, contentWidth, 88, { fill: COLORS.bg });
    doc.fillColor(COLORS.muted).fontSize(10).font('Helvetica')
      .text('Destinatario', PAGE.margin + 20, y + 12);
    doc.fillColor(COLORS.primary).fontSize(18).font('Helvetica-Bold')
      .text(config.customerName, PAGE.margin + 20, y + 28);
    doc.fillColor(COLORS.secondary).fontSize(11)
      .text(categoryLabel, PAGE.margin + 20, y + 52);
    if (email) {
      doc.fillColor(COLORS.muted).fontSize(10)
        .text(email, PAGE.margin + 20, y + 70);
    }
    y += 95;

    // ========== PACCHETTO SELEZIONATO ==========
    y += 30; // mt-5 (titolo pacchetto)
    checkSpace(95);
    doc.fillColor(COLORS.primary).fontSize(14).font('Helvetica-Bold')
      .text('Pacchetto selezionato', PAGE.margin, y);
    y += 22;

    drawBox(doc, PAGE.margin, y, contentWidth, 52, { fill: COLORS.bg });
    doc.fillColor(COLORS.primary).fontSize(15).font('Helvetica-Bold')
      .text(packageName, PAGE.margin + 20, y + 14);
    doc.fillColor(COLORS.secondary).fontSize(13).font('Helvetica-Bold')
      .text(`€${extrasList.packagePrice}`, PAGE.margin + contentWidth - 90, y + 14);
    y += 60;

    // ========== COSA INCLUDE ==========
    if (packageFeatures && packageFeatures.length > 0) {
      const featuresHeight = packageFeatures.length * 20 + 50;
      y += 18; // mt-3
      checkSpace(featuresHeight);

      doc.fillColor(COLORS.primary).fontSize(12).font('Helvetica-Bold')
        .text('Cosa include', PAGE.margin, y);
      y += 20;

      drawBox(doc, PAGE.margin, y, contentWidth, packageFeatures.length * 20 + 28, { fill: COLORS.bg });
      packageFeatures.forEach((feature, i) => {
        const fy = y + 12 + i * 20;
        doc.fillColor('#16a34a').fontSize(10)
          .text('✓', PAGE.margin + 22, fy);
        doc.fillColor(COLORS.secondary).fontSize(10).font('Helvetica')
          .text(feature, PAGE.margin + 40, fy, { width: contentWidth - 55 });
      });
      y += packageFeatures.length * 20 + 35;
    }

    // ========== SERVIZI EXTRA ==========
    if (extrasList.items && extrasList.items.length > 0) {
      const tableHeight = extrasList.items.length * 26 + 45;
      y += 18; // mt-3
      checkSpace(tableHeight + 30);

      doc.fillColor(COLORS.primary).fontSize(12).font('Helvetica-Bold')
        .text('Servizi extra', PAGE.margin, y);
      y += 20;

      drawBox(doc, PAGE.margin, y, contentWidth, tableHeight, { fill: COLORS.bg });
      doc.fillColor(COLORS.muted).fontSize(9).font('Helvetica-Bold')
        .text('Servizio', PAGE.margin + 20, y + 12);
      doc.text('Prezzo', PAGE.margin + contentWidth - 75, y + 12);
      doc.moveTo(PAGE.margin + 20, y + 34).lineTo(PAGE.margin + contentWidth - 20, y + 34)
        .strokeColor(COLORS.border).lineWidth(0.5).stroke();

      extrasList.items.forEach((item, i) => {
        const rowY = y + 42 + i * 26;
        doc.fillColor(COLORS.secondary).fontSize(10).font('Helvetica')
          .text(item.name, PAGE.margin + 20, rowY, { width: contentWidth - 115 });
        const priceStr = item.priceText ? item.priceText : (item.price > 0 ? `€${item.price}` : 'Da accordare');
        doc.fillColor(COLORS.primary).fontSize(10).font('Helvetica-Bold')
          .text(priceStr, PAGE.margin + contentWidth - 85, rowY);
      });
      y += tableHeight + 22;
    }

    // ========== TOTALE ==========
    checkSpace(95);
    doc.moveTo(PAGE.margin, y).lineTo(PAGE.margin + contentWidth, y)
      .strokeColor(COLORS.border).lineWidth(1).stroke();
    y += 22;

    drawBox(doc, PAGE.margin, y, contentWidth, 52, { fill: COLORS.primary });
    doc.fillColor(COLORS.white).fontSize(16).font('Helvetica-Bold')
      .text('Importo totale', PAGE.margin + 20, y + 12);
    doc.fillColor(COLORS.white).fontSize(22).font('Helvetica-Bold')
      .text(`€${total}`, PAGE.margin + contentWidth - 95, y + 8);
    doc.fillColor('rgba(255,255,255,0.8)').fontSize(9)
      .text('IVA inclusa', PAGE.margin + contentWidth - 95, y + 34);
    y += 60;

    // ========== PROSSIMI PASSI ==========
    y += 18; // mt-3
    checkSpace(75);
    doc.x = PAGE.margin;
    doc.y = y;
    doc.fillColor(COLORS.primary).fontSize(11).font('Helvetica-Bold')
      .text('Prossimi passi');
    doc.fillColor(COLORS.secondary).fontSize(10).font('Helvetica')
      .text('Per confermare o richiedere modifiche, contattaci. Siamo a disposizione per una call conoscitiva gratuita.', { width: contentWidth });
    y = doc.y + 20;

    // ========== CONTATTI ==========
    checkSpace(55);
    drawBox(doc, PAGE.margin, y, contentWidth, 42, { fill: COLORS.bg });
    doc.fillColor(COLORS.primary).fontSize(10).font('Helvetica-Bold')
      .text('Contatti', PAGE.margin + 20, y + 10);
    doc.fillColor(COLORS.secondary).fontSize(9)
      .text('info@ravai.it  •  +39 334 758 3173  •  Como, Italia  •  ravai.it', PAGE.margin + 20, y + 26);
    y += 50;

    // ========== NOTE LEGALI ==========
    checkSpace(35);
    doc.fillColor(COLORS.light).fontSize(8).font('Helvetica')
      .text('Preventivo a titolo informativo. Accettazione tramite conferma scritta. Privacy Policy e Termini e Condizioni: ravai.it', PAGE.margin, y, { width: contentWidth });

    // ========== FOOTER ULTIMA PAGINA ==========
    drawFooter(doc, pageWidth, contentWidth);

    doc.end();
  });
}
