/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import { useOutletContext } from "react-router-dom";

function BlogImage({ onImageDrop, onData }) {
  const isDarkMode = useOutletContext(); // Assuming this provides the current dark mode state
  
  const blogInputFileRef = useRef(null);
  const [blogImage, setBlogImage] = useState(onData.blogImage);
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
      const fileURL = URL.createObjectURL(file);
      setBlogImage(fileURL);
      onImageDrop(fileURL);
    }
    setIsDragOver(false);
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image")) {
      const fileURL = URL.createObjectURL(file);
      setBlogImage(fileURL);
      onImageDrop(fileURL);
    }
  };
  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  return (
    <>
      <h3
        className={`text-lg font-semibold mb-2 -mt-3 flex justify-between ${
          isDarkMode ? "text-gray-300" : "text-gray-800"
        }`}
      >
        <p>Drag and Drop :</p>
        <button
          className={`relative px-2 rounded transition duration-300 ease-in-out ${
            isDarkMode
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
          onClick={() => blogInputFileRef.current.click()}
        >
          <input
            type="file"
            onChange={handleFileChange}
            ref={blogInputFileRef}
            hidden
            required
          />
          Browse File
        </button>
      </h3>
      <div
        className={`w-full max-w-md mx-auto mt-5 p-6 border-2 border-dashed rounded-lg shadow-lg transition-all duration-300 ease-in-out flex flex-col items-center justify-center text-center ${
          isDarkMode
            ? "border-gray-600 bg-gray-800 hover:border-blue-500"
            : "border-gray-400 bg-white hover:border-blue-500"
        }`}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onDragLeave={handleDragLeave}
      >
        {blogImage ? (
          <img
            src={blogImage}
            alt="blog-Image"
            className="w-full h-full rounded-lg"
          />
        ) : (
          <div
            className={`w-full h-40 rounded-lg flex items-center justify-center ${
              isDragOver ? "bg-gray-200" : "bg-gray-100"
            }`}
          >
            {isDragOver ? (
              <span
                className={`text-sm ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Drop Image
              </span>
            ) : (
              <span
                className={`text-sm ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Drag an Image
              </span>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default BlogImage;