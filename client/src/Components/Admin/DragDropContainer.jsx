/* eslint-disable react/prop-types */
import { useState , useRef } from "react";
import { useOutletContext } from "react-router-dom";

function DragDropContainer({ onImageDrop }) {
  const isDarkMode = useOutletContext()
  
  const blogInputFileRef = useRef(null)
  const [blogImage, setBlogImage] = useState(null);
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDragStart = (e) => e.preventDefault();
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };
  const handleDrop = (e) => {
    e.preventDefault();

    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      const fileURl = URL.createObjectURL(file)
      setBlogImage(fileURl);
      onImageDrop(fileURl);
    }
    setIsDragOver(false)
  };
  const handleFileChange = (e) =>{
   const file = e.target.files[0] ;
   if(file && file.type.startsWith("/image")){
    const fileUrl = URL.createObjectURL(file);
    setBlogImage(fileUrl)
    onImageDrop(fileUrl)
   }
  }
  const handleDragLeave = () => {
    setIsDragOver(false);
  };
  return (
    <>
      <h3 className="text-lg font-semibold mb-2 -mt-3 flex justify-between">
        <p>Drag and Drop :</p>
        <button
          className="relative bg-blue-500 text-white px-2 rounded hover:bg-blue-600 transition duration-300 ease-in-out "
          onClick={() => blogInputFileRef.current.click()}
        >
          <input 
            type="file" 
            onChange={handleFileChange} 
            ref={blogInputFileRef} 
            hidden 
            required
          />
          Brous File
        </button>
      </h3>
      <div
        className={`w-full max-w-md mx-auto mt-5 p-6 border-2 border-dashed rounded-lg shadow-lg hover:border-blue-500 transition-all duration-300 ease-in-out flex flex-col items-center justify-center text-center ${isDarkMode ?"border-gray-500" :"border-gray-400"}`}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onDragLeave={handleDragLeave}
      >
        {blogImage ? (
          <img src={blogImage} alt="blog-Image" />
        ) : (
          <div className={`w-full h-40  rounded-lg flex items-center justify-center ${isDarkMode ?"bg-gray-700" :"bg-gray-100"}`}>
            {isDragOver ? (
              <span className="text-gray-400 text-sm">Drop Image</span>
            ) : (
              <span className="text-gray-400 text-sm"> Drag an Image</span>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default DragDropContainer;