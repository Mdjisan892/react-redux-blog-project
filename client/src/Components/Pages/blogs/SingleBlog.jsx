import { AiOutlineArrowRight, AiOutlineHeart } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { useOutletContext, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchSingleBlog } from "../../../redux/featurs/singleBlog/singleBlogSlice";
import PopularBlogs from "./PopularBlogs";

function SingleBlog() {
  const isDarkMode = useOutletContext()

  const { id } = useParams();
  const dispatch = useDispatch();
  const { blog } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(fetchSingleBlog(id));
    window.scrollTo(0, 0);
  }, [dispatch, id]);

  const { title, author, authorPic, category, content, image, published_date } =
    blog;

  return (
    <section key={id} className={` mb-10 ${isDarkMode ? "text-gray-400 bg-gray-800" : ""}`}>
      <img
        src={image}
        alt=""
        className="object-cover h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500 sm:float-left w-full sm:w-[50%] sm:m-5"
      />
      <div className="p-6 space-y-2 lg:col-span-5 ">
        <h3 className="text-2xl font-semibold sm:text-4xl ">{title}</h3>
        <span className="text-xs dark:text-gray-600">{published_date}</span>
        <div>
          <p>
            {content}
            <br /> <br />
          </p>
        </div>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          blanditiis tempora perferendis optio eveniet a fuga cum ipsam, aperiam
          vitae quasi nisi corporis adipisci molestiae facere qui, culpa
          distinctio quisquam voluptatum illum veniam, voluptate fugit unde
          voluptas? Fugiat quidem maxime neque fugit ea! Rem soluta optio eos
          vel? Perferendis maxime, iure molestias totam, autem voluptatum nulla
          ad provident quam labore sint earum rem unde quis aspernatur possimus
          pariatur assumenda magnam eligendi quos, consectetur facere
          consequatur tempora aut. Architecto beatae unde repellat accusantium
          velit optio earum pariatur porro. Impedit molestiae officia ex nemo
          officiis aut, facilis, nesciunt recusandae repudiandae repellendus
          corrupti sequi mollitia. Eaque corporis nisi repudiandae voluptas eius
          soluta repellat consequatur praesentium vero, ad nulla, aliquid vel
          illum sint facere quibusdam necessitatibus laudantium voluptate
          architecto fuga omnis. Doloremque vero adipisci maiores, consequuntur,
          eveniet dignissimos reiciendis ad totam nemo iste tempora aliquam
          itaque quo beatae numquam doloribus recusandae iusto modi perferendis
          ipsum a fugiat quam harum dicta. Et atque pariatur, error quam fuga
          earum adipisci. Sequi quo voluptatem amet ullam optio? Quam,
          dignissimos quidem? Culpa necessitatibus, hic a cumque, molestias
          dicta nisi autem consequatur beatae tenetur laudantium eveniet quas
          consequuntur, repudiandae incidunt atque amet assumenda aut. Quae
          magnam tempore optio temporibus!
        </p>
      </div>

      <div className="p-4 border-t border-b md:border md:rounded sm:w-[30rem] mx-auto">
        <div className="flex py-2">
          <img
            src={authorPic}
            className="h-10 w-10 rounded-full mr-2 object-cover "
            alt="Author"
          />
          <div>
            <p className={`font-semibold  text-sm ${isDarkMode ? "text-gray-400" : "text-gray-700"}`}>{author}</p>
            <p className={`font-semibold  text-sm ${isDarkMode ? "text-gray-600" : "text-gray-700"}`}> Editor </p>
          </div>
        </div>
        <p className={`py-3 ${isDarkMode ? "text-gray-400" : "text-gray-700"}`}>
          Mike writes about technology Yourself required no at thoughts delicate
          landlord it be. Branched dashwood do is whatever it.
        </p>
        <button className="px-2 py-1 text-gray-100 bg-green-700 flex w-full items-center justify-center rounded">
          Follow
          <AiOutlineHeart className="ml-2" />
        </button>
        <div className="flex flex-wrap items-center justify-between mt-4 gap-4">
          <div className="flex items-center space-x-2">
            <BiCommentDetail className={`text-lg ${isDarkMode ? "text-gray-400" : "text-gray-700"}`} />
            <span className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-700"}`}>15 comments</span>
          </div>
          <div className="flex items-center space-x-2">
            <AiOutlineHeart className="text-red-500 text-lg" />
            <span className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-700"}`}>120 likes</span>
          </div>
          <div className="flex items-center space-x-2">
            <a
              href="/"
              className="text-green-700 inline-flex items-center justify-center text-sm font-medium"
            >
              Back to Blogs
              <AiOutlineArrowRight className="ml-1 text-base" />
            </a>
          </div>
        </div>
      </div>

      <PopularBlogs tags={category} currentBlogId={id} />
    </section>
  );
}

export default SingleBlog;