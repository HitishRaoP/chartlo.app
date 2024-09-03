import generatePDF from 'react-to-pdf';

const getTargetElement = () => document.getElementById('content-id');

export const Download = () => {
  return (
    <div>
      <button onClick={() => generatePDF(getTargetElement)}>
        Generate PDF
      </button>
      <div id="content-id">Content to be generated to PDF</div>
    </div>
  );
};
