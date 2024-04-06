import { useEffect, useState } from "react";
import Layout from "../components/layout";
import instance from "../axios/config";
import { useNavigate } from "react-router-dom";
import TitlePage from "../components/page-title";
import Blog from "../components/blogs/blog";
import LoadingSpinner from "../components/loading/spinner";
import Pagination from "../components/pagination";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1)
  const [lastPage, setLastPage] = useState(1)
  const navigate = useNavigate();

  const fetchData = async () => {
    setLoading(true);
    try {
      const { data } = await instance.get(`blogs?page=${page}`, {
        method: "get",
      });
      setLastPage(data.blogs.last_page)
      setBlogs(data.blogs.data);
      setLoading(false);
    } catch (e) {
      console.log(e);
      // navigate('/')
    } 
  };

  useEffect(() => {
    fetchData();
    window.scrollTo(0,0)
  }, []);

  return (
    <Layout>
      <div className="lg:max-w-[1000px] md:max-w-[760px] max-w-full px-10 md:px-0 xl:max-w-container mx-auto">
        {loading === true ? (
          <LoadingSpinner />
        ) : (
          <div className="py-10">
            <TitlePage title="Tin tức" classes="font-semibold pb-5" />
            <div className="grid lg:grid-cols-3 gap-10 grid-cols-2">
              {blogs.map((item, index) => {
                return <Blog blog={item} key={index} />;
              })}
            </div>
            {lastPage > 1 && <Pagination currentPage={page} lastPage={lastPage}/>}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Blogs;
