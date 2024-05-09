import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const BlogPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLogoClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onCoursesClick = useCallback(() => {
    navigate("/coursepage");
  }, [navigate]);

  const onQuizzesClick = useCallback(() => {
    navigate("/quizpage");
  }, [navigate]);

  const onCompetetionsClick = useCallback(() => {
    navigate("/competetionspage");
  }, [navigate]);

  const onAboutUsClick = useCallback(() => {
    navigate("/aboutuspage");
  }, [navigate]);

  const onScrollBannerButtonClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='blogsContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="w-full relative bg-nero flex flex-col items-center justify-start p-5 box-border gap-[20px] text-left text-29xl text-nero font-body-large-600 sm:pl-[5px] sm:pr-[5px] sm:box-border">
      <Navbar
        coDeskLabColor="#1f95f2"
        onLogoClick={onLogoClick}
        onCoursesClick={onCoursesClick}
        onQuizzesClick={onQuizzesClick}
        onCompetetionsClick={onCompetetionsClick}
        onAboutUsClick={onAboutUsClick}
        competetionsColor="#000"
        coursesColor="#000"
        aboutUsColor="#000"
        quizzesColor="#000"
      />
      <div className="self-stretch rounded-mini bg-footer-header flex flex-row items-center justify-start py-0 px-[15px] gap-[15px] z-[2] lg:flex-col md:flex-col sm:pl-[5px] sm:pr-[5px] sm:box-border">
        <div className="flex-1 flex flex-col items-center justify-center p-[15px] gap-[34px] lg:order-[2] lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch">
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch relative leading-[120%] font-semibold sm:text-21xl">
              Coding Blogs for Kids
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start text-base">
            <div className="self-stretch relative leading-[150%]">
              Fun way to learn coding for kids reading blogs
            </div>
          </div>
          <button
            className="cursor-pointer py-[9px] px-5 bg-tomato self-stretch rounded box-border h-[38px] flex flex-row items-center justify-center border-[1px] border-solid border-nero"
            autoFocus={true}
            onClick={onScrollBannerButtonClick}
          >
            <div className="relative text-lg leading-[150%] font-semibold font-body-large-600 text-nero text-center inline-block max-h-[58px]">
              View A Blog
            </div>
          </button>
        </div>
        <img
          className="flex-1 relative max-w-full overflow-hidden h-[500px] object-cover lg:order-[1] lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch"
          alt=""
          src="/image-56@2x.png"
        />
      </div>
      <div className="self-stretch bg-nero flex flex-col items-center justify-center gap-[30px] relative z-[1] text-center text-17xl text-black1">
        <div className="self-stretch bg-nero flex flex-col items-center justify-center py-0 px-[5px] gap-[5px]">
          <div className="self-stretch flex flex-row items-center justify-center p-2.5">
            <div className="flex-1 relative leading-[120%] font-semibold">
              Coding blogs for kids
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-center p-2.5 text-sm">
            <div className="flex-1 relative leading-[150%]">
              Great collection of fun and interactive coding blogs for kids to
              assess and acquire computer science knowledge.
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-center justify-center p-5 text-left text-sm sm:pl-[5px] sm:pr-[5px] sm:box-border">
          <div className="w-[350px] rounded-lg bg-nero flex flex-col items-center justify-start p-2.5 box-border gap-[15px]">
            <img
              className="self-stretch relative max-w-full overflow-hidden h-[213px] shrink-0 object-cover"
              alt=""
              src="/image8@2x.png"
            />
            <div className="self-stretch bg-nero box-border overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[5px] gap-[15px] min-h-[52.5px] border-[1px] border-solid border-nero">
              <div className="self-stretch flex flex-col items-start justify-start gap-[2px] text-5xl">
                <div className="self-stretch bg-nero overflow-hidden flex flex-row items-center justify-center border-[1px] border-solid border-nero">
                  <div className="flex-1 relative leading-[150%] font-semibold">
                    How to build a face recognizer with Scratch coding?
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-center gap-[2px] text-base">
                  <div className="w-[84px] relative leading-[150%] whitespace-pre-wrap flex items-center shrink-0">{`Written By:  `}</div>
                  <div className="flex-1 relative leading-[150%]">
                    CoDesk Innovations
                  </div>
                </div>
              </div>
              <div className="w-80 relative leading-[150%] font-medium [display:-webkit-inline-box] items-center overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical] max-w-[320px]">
                Over the last few years, facial recognition technology has grown
                in popularity. Face detection in psychology refers to the act of
                identifying and focusing on faces in a scene.
              </div>
              <button
                className="cursor-pointer py-[9px] px-5 bg-aqua-deep self-stretch rounded flex flex-row items-center justify-center border-[1px] border-solid border-nero"
                autoFocus={true}
              >
                <div className="relative text-lg tracking-[-0.01em] leading-[20px] capitalize font-semibold font-inter text-nero text-center inline-block max-h-[58px]">
                  read more
                </div>
              </button>
              <div className="w-80 relative tracking-[-0.01em] leading-[20px] font-semibold font-inter text-gray1-200 hidden max-w-[320px]" />
            </div>
          </div>
        </div>
        <div
          className="absolute left-[0] top-[-70px]"
          data-scroll-to="blogsContainer"
        />
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
