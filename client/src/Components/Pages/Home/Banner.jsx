import { useOutletContext } from "react-router-dom";

const Banner = () => {
  const isDarkMode = useOutletContext();

  return (
    <div className="flex flex-col md:flex-row md:space-x-2 px-1 lg:p-0">
      {/* Main Banner */}
      <a
        className="mb-4 md:mb-0 w-full md:w-2/3 relative rounded inline-block"
        style={{ height: "25em" }}
        href="#"
      >
        <div
          className="absolute left-0 bottom-0 w-full h-full z-10"
          style={{
            backgroundImage: isDarkMode
              ? "linear-gradient(180deg,transparent,rgba(0,0,0,.9))"
              : "linear-gradient(180deg,transparent,rgba(0,0,0,.7))",
          }}
        ></div>
        <img
          src="/Neutritions.jpg"
          className="absolute left-0 top-0 w-full h-full rounded z-0 object-cover"
          alt="First Example"
        />
        <div className="p-4 absolute bottom-0 left-0 z-20">
          <span
            className={`px-4 py-1 ${
              isDarkMode ? "bg-gray-800" : "bg-black"
            } text-gray-200 inline-flex items-center justify-center mb-2`}
          >
            Nutrition
          </span>
          <h2
            className={`md:text-2xl text-xl font-semibold leading-tight ${
              isDarkMode ? "text-gray-200" : "text-gray-100"
            }`}
          >
            Pellentesque a consectetur velit, ac molestie ipsum. Donec sodales,
            massa et auctor.
          </h2>
          <div className="flex mt-3">
            <img
              src="https://randomuser.me/api/portraits/men/97.jpg"
              className="h-10 w-10 rounded-full mr-2 object-cover"
              alt="Author"
            />
            <div>
              <p
                className={`font-semibold text-sm ${
                  isDarkMode ? "text-gray-300" : "text-gray-200"
                }`}
              >
                Mike Sullivan
              </p>
              <p
                className={`font-semibold text-xs ${
                  isDarkMode ? "text-gray-500" : "text-gray-400"
                }`}
              >
                14 Aug
              </p>
            </div>
          </div>
        </div>
      </a>

      {/* Secondary Banner */}
      <a
        className="w-full md:w-1/3 relative rounded"
        href="#"
        style={{ height: "25em" }}
      >
        <div
          className="absolute left-0 top-0 w-full h-full z-10"
          style={{
            backgroundImage: isDarkMode
              ? "linear-gradient(180deg,transparent,rgba(0,0,0,.9))"
              : "linear-gradient(180deg,transparent,rgba(0,0,0,.7))",
          }}
        ></div>
        <img
          src="/fruits.jpg"
          className="absolute left-0 top-0 w-full h-full rounded z-0 object-cover"
          alt="Second Example"
        />
        <div className="p-4 absolute bottom-0 left-0 z-20">
          <span
            className={`px-4 py-1 ${
              isDarkMode ? "bg-gray-800" : "bg-black"
            } text-gray-200 inline-flex items-center justify-center mb-2`}
          >
            Science
          </span>
          <h2
            className={`text-xl font-semibold leading-tight ${
              isDarkMode ? "text-gray-200" : "text-gray-100"
            }`}
          >
            Fruits are tasty, nutritious, and versatile—perfect for healthy!
          </h2>
          <div className="flex mt-3">
            <img
              src="https://randomuser.me/api/portraits/women/81.jpg"
              className="h-10 w-10 rounded-full mr-2 object-cover"
              alt="Author"
            />
            <div>
              <p
                className={`font-semibold text-sm ${
                  isDarkMode ? "text-gray-300" : "text-gray-200"
                }`}
              >
                Chrishell Staus
              </p>
              <p
                className={`font-semibold text-xs ${
                  isDarkMode ? "text-gray-500" : "text-gray-400"
                }`}
              >
                15 Aug
              </p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Banner;
