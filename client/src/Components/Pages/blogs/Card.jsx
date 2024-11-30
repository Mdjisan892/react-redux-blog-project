/* eslint-disable react/prop-types */
import { Link, useOutletContext } from "react-router-dom";

function Card({ blog }) {
  const isDarkMode = useOutletContext();

  const { author, authorPic, title, published_date, image, content, tags, id } = blog;

  return (
    <div className={`block rounded w-full md:flex mb-10 p-2 -my-3 ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
      <Link to={`/blogs/${id}`}>
        <div
          className="h-48 w-48 flex-none bg-center text-center overflow-hidden opacity-75"
          style={{ backgroundImage: `url(${image})` }}
          title={title}
        ></div>
      </Link>
      <div
        className={`rounded px-4 flex flex-col justify-between leading-normal ${
          isDarkMode ? "text-gray-300 bg-gray-800" : "text-gray-700 bg-white"
        }`}
      >
        <div>
          <div
            className={`mt-3 md:mt-0 font-bold text-md mb-2 ${
              isDarkMode ? "text-gray-100" : "text-gray-700"
            }`}
          >
            {title}
          </div>
          <p
            className={`text-base line-clamp-2 ${
              isDarkMode ? "text-gray-400" : "text-gray-700"
            }`}
          >
            {content}{" "}
            <Link
              to={`/blogs/${id}`}
              className={`text-sm underline ${
                isDarkMode ? "text-blue-400" : "text-blue-500"
              }`}
            >
              Show more
            </Link>
          </p>
          <p
            className={`text-sm italic py-1 ${
              isDarkMode ? "text-gray-400" : "text-gray-700"
            }`}
          >
            Tags:{" "}
            {tags.map((tag, ind) => (
              <span
                key={ind}
                className={`mx-1 underline ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {tag}
              </span>
            ))}
          </p>
        </div>
        <div className="flex mt-3">
          <img
            className="h-10 w-10 rounded-full mr-2 object-cover"
            alt="author"
            src={`${authorPic}`}
          />
          <div className="space-x-1.5">
            <p
              className={`font-semibold text-sm capitalize ${
                isDarkMode ? "text-gray-100" : "text-gray-700"
              }`}
            >
              {author}
            </p>
            <p
              className={`text-xs ${
                isDarkMode ? "text-gray-500" : "text-gray-600"
              }`}
            >
              {published_date}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
