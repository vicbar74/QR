function openPDF(pdfPath) {

    const link = document.createElement('a');

    link.href = pdfPath;

    link.target = '_self';

    link.click();

}