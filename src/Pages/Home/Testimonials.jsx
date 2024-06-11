import data from "../../data/index.json";

export default function Testimonial(){

} const downloadFile = () => {
  const element = document.createElement('a');
  element.href = jsonData.filePath;
  element.download = jsonData.fileName;
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
};

  return (
    <div style={{ textAlign: 'center' }} >
      
      <h1 style={{ textAlign: 'center' }}>Download Resume File</h1>
      <br /><br />
      <button
        style={{
          textAlign: 'center',
          padding: '20px 20px',
          fontSize: '20px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
           
        }}
        onClick={downloadFile}
      >
        Download {jsonData.fileName}
      </button>
    </div>
  );
