/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import { useOutletContext } from "react-router-dom";

function OuthorData({ onAuthoreImage, onOtherData, onData }) {
  const isDarkMode = useOutletContext();
  
  const authoreInputFileRef = useRef(null);
  const [dragOver, setDragOver] = useState(false);
  const [updatedotherBlog, setUpdatedOtherBlogUser] = useState({
    authoreImage: onData.authoreImage,
    authoreName: onData.authoreName,
    publishedDate: onData.publishedDate,
    category: onData.category,
    readingTime: onData.readingTime,
    tags: onData.tags,
  });
  const { authoreImage, authoreName, publishedDate, category, readingTime, tags } = updatedotherBlog;

  const handleInputChange = (key, value) => {
    setUpdatedOtherBlogUser((prevState) => ({
      ...prevState,
      [key]: value,
    }));
    onOtherData(authoreName, publishedDate, category, tags, readingTime);
  };

  const handleAuthorDragStart = (e) => {
    e.preventDefault();
  };
  const handleAuthorDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
  };
  const handleAuthorImageDrop = (e) => {
    e.preventDefault();

    const authoreImageFile = e.dataTransfer.files[0];
    if (authoreImageFile && authoreImageFile.type.startsWith("image/")) {
      const fileUrl = URL.createObjectURL(authoreImageFile);
      handleInputChange("authoreImage", fileUrl);
      onAuthoreImage(fileUrl);
    }
    setDragOver(false);
  };
  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const fileUrl = URL.createObjectURL(file);
      handleInputChange("authoreImage", fileUrl);
      onAuthoreImage(fileUrl);
    }
  };
  const handleAuthorDragLeave = () => setDragOver(false);

  return (
    <div className={`flex flex-col sm:flex-row gap-6 ${isDarkMode ? "bg-gray-800 text-gray-300" : "bg-white text-gray-800"}`}>
      {/* Form Section */}
      <div className={`flex-1 space-y-1 sm:w-1/2 ${isDarkMode ? "border-gray-600" : "border-gray-300"}`}>
        {/* Author Name */}
        <div>
          <h3 className={`text-lg font-semibold mb-1 ${isDarkMode ? "text-gray-300" : "text-gray-800"}`}>Author Name:</h3>
          <input
            type="text"
            placeholder="Enter author name"
            value={authoreName}
            onChange={(e) => {
              handleInputChange("authoreName", e.target.value);
            }}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${isDarkMode ? "border-gray-600 bg-gray-700 text-gray-300" : "border-gray-300 bg-white text-gray-800"}`}
            required
          />
        </div>

        {/* Category */}
        <div>
          <h3 className={`text-lg font-semibold mb-1 ${isDarkMode ? "text-gray-300" : "text-gray-800"}`}>Category:</h3>
          <select
            value={category}
            onChange={(e) => {
              handleInputChange("category", e.target.value);
            }}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${isDarkMode ? "border-gray-600 bg-gray-700 text-gray-300" : "border-gray-300 bg-white text-gray-800"}`}
            required
          >
            <option value="AI">AI</option>
            <option value="Startups">Startups</option>
            <option value="Apps">Apps</option>
            <option value="Tech">Tech</option>
          </select>
        </div>

        {/* Tags */}
        <div>
          <h3 className={`text-lg font-semibold mb-1 ${isDarkMode ? "text-gray-300" : "text-gray-800"}`}>Tags:</h3>
          <div className={`grid grid-cols-2 md:gap-x-5 w-full px-4 py-2 border rounded-lg ${isDarkMode ? "border-gray-600 bg-gray-700" : "border-gray-300 bg-white"}`}>
            {["AI", "Apps", "Tech", "Startups"].map((tag) => {
              return (
                <div key={tag} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id={tag}
                    value={tag}
                    checked={tags.includes(tag)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        handleInputChange("tags", [...tags, tag]);
                      } else {
                        handleInputChange(
                          "tags",
                          tags.filter((t) => t != tag)
                        );
                      }
                    }}
                    className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
                    required
                  />
                  <label
                    htmlFor={tag}
                    className={`font-medium cursor-pointer ${isDarkMode ? "text-gray-400" : "text-gray-700"}`}
                  >
                    {tag}
                  </label>
                </div>
              );
            })}
          </div>
        </div>

        {/* Reading Time */}
        <div>
          <h3 className={`text-lg font-semibold mb-1 ${isDarkMode ? "text-gray-300" : "text-gray-800"}`}>Reading Time:</h3>
          <input
            type="number"
            value={readingTime}
            onChange={(e) => {
              handleInputChange("readingTime", e.target.value);
            }}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${isDarkMode ? "border-gray-600 bg-gray-700 text-gray-300" : "border-gray-300 bg-white text-gray-800"}`}
            placeholder="0 min"
            required
          />
        </div>
        
        {/* Published Date */}
        <div>
          <h3 className={`text-lg font-semibold mb-1 ${isDarkMode ? "text-gray-300" : "text-gray-800"}`}>Published Date</h3>
          <input
            className={`px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full ${isDarkMode ? "border-gray-600 bg-gray-700 text-gray-300" : "border-gray-300 bg-white text-gray-800"}`}
            type="date"
            value={publishedDate}
            onChange={(e) => {
              handleInputChange("publishedDate", e.target.value);
            }}
            required
          />
        </div>
      </div>

      {/* Drag and Drop Section */}
      <h1 className={`-mr-14 ${isDarkMode ? "text-gray-300" : "text-gray-800"}`}>Authore Image :</h1>
      <div
        className={`flex justify-center flex-col items-center w-[60%] sm:w-[50%] sm:h-[70%] aspect-square max-w-sm mx-auto mt-14 mb-10 border-2 border-dashed shadow-lg hover:border-blue-500 transition-all duration-300 ease-in-out text-center rounded-full overflow-hidden ${isDarkMode ? "border-gray-600 bg-gray-800" : "border-gray-400 bg-white"}`}
        onDragStart={handleAuthorDragStart}
        onDragOver={handleAuthorDragOver}
        onDrop={handleAuthorImageDrop}
        onDragLeave={handleAuthorDragLeave}
      >
        {onData.authoreImage ? (
          <img
            src={authoreImage}
            alt="authore-Image"
            className="object-center rounded-full aspect-square "
          />
        ) : (
          <>
            {dragOver && <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>Drop here</p>}
            <button
              onClick={() => authoreInputFileRef.current.click()}
              className={`text-gray-600 bg-gray-100 hover:bg-gray-300 p-2 rounded-lg transition duration-300 ease-in-out ${isDarkMode ? "bg-gray-700 text-gray-300" : "bg-gray-100 text-gray-600"}`}
            >
              <input
                type="file"
                ref={authoreInputFileRef}
                onChange={handleFileSelect}
                hidden
                required
              />
              Browse File
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default OuthorData;
