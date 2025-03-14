import { Document, Page, pdfjs } from "react-pdf";
import { useState } from "react";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFViewer = ({ pdfUrl }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-md text-white">
      <Document
        file={pdfUrl}
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
      >
        <Page pageNumber={pageNumber} className="shadow-lg" />
      </Document>
      <div className="mt-4 flex justify-center gap-4">
        <button
          onClick={() => setPageNumber((prev) => Math.max(prev - 1, 1))}
          className="bg-yellow-500 px-3 py-1 rounded"
        >
          Prev
        </button>
        <p>Page {pageNumber} of {numPages}</p>
        <button
          onClick={() => setPageNumber((prev) => Math.min(prev + 1, numPages))}
          className="bg-yellow-500 px-3 py-1 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PDFViewer;
