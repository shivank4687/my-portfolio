import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const downloadAsPDF=(content_id:string,output_file:string)=> {
  const resume = document.getElementById(content_id);

  if (resume) {
    html2canvas(resume).then(canvas => {
      const imgData = canvas.toDataURL('image/png');

      const imgWidthPx = canvas.width;
      const imgHeightPx = canvas.height;
      
       // Convert pixels to mm (1 px = 0.264583 mm)
       const pdfWidth = 210; // A4 width in mm
       const pdfHeight = (imgHeightPx * pdfWidth) / imgWidthPx;
       const pdf = new jsPDF('p', 'mm', [pdfWidth, pdfHeight]);

      // const imgData = canvas.toDataURL('image/png');
      // const pdf = new jsPDF('p', 'mm', 'a4');

      // const imgProps = pdf.getImageProperties(imgData);
      // const pdfWidth = pdf.internal.pageSize.getWidth();
      // const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(output_file+'.pdf');
    });
  }
}
