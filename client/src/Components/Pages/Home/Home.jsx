import { useOutletContext } from "react-router-dom";
import PostCards from "../blogs/PostCard";
import Banner from "./Banner";
import Category from "./Category";

function Home() {
  const isDarkMode = useOutletContext()

  return (
    <div>
      <main className={`mt-10 p-2 rounded-sm ${isDarkMode ? "bg-gray-900" : ""}`}>
        <Banner />

        <div className="block lg:flex lg:space-x-2 lg:p-0 mt-10 mb-10">
          {/* Post Sidebar */}
          <PostCards />

          {/* right sidebar */}
          <Category />
        </div>
      </main>
    </div>
  );
}

export default Home;
