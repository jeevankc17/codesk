import { FunctionComponent, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../common/Navbar';
import Footer from '../../common/Footer';

const BlogPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLogoClick = useCallback(() => {
    navigate('/');
  }, [navigate]);

  const onCoursesClick = useCallback(() => {
    navigate('/coursepage');
  }, [navigate]);

  const onQuizzesClick = useCallback(() => {
    navigate('/quizpage');
  }, [navigate]);

  const onCompetetionsClick = useCallback(() => {
    navigate('/competetionspage');
  }, [navigate]);

  const onAboutUsClick = useCallback(() => {
    navigate('/aboutuspage');
  }, [navigate]);

  const onScrollBannerButtonClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='blogsContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
  }, []);

  const navbarProps = {
    logoColor: '#1f95f2',
    onLogoClick,
    onCoursesClick,
    onQuizzesClick,
    onCompetetionsClick,
    onAboutUsClick,
    coursesColor: '#000',
    competetionsColor: '#000',
    aboutUsColor: '#000',
    quizzesColor: '#000'
  };

  return (
    <div className="w-full relative bg-nero flex flex-col items-center justify-start p-5 box-border gap-[40px] text-left text-4xl text-nero font-body-large-600 sm:p-2">
      {/* Fixed navbar */}
      <div className="fixed top-0 left-0 right-0 z-[100] bg-nero">
        <div className="px-5 sm:px-2">
          <Navbar {...navbarProps} />
        </div>
      </div>
      <div className="h-[77px]"></div>

      {/* Banner section */}
      <div className="max-w-[1240px] w-full rounded-mini bg-footer-header flex flex-row items-center justify-between py-8 px-[30px] z-[2] lg:flex-col md:flex-col sm:px-3 sm:py-4">
        <div className="flex-1 flex flex-col items-center justify-center p-[15px] gap-[34px] lg:order-[2] lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch sm:p-3 sm:gap-4">
          <div className="self-stretch flex flex-col items-start justify-start sm:items-center">
            <div className="self-stretch relative leading-[120%] font-semibold text-3xl md:text-xl sm:text-lg sm:text-center">
              Coding Blogs for Kids
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start text-base sm:items-center">
            <div className="self-stretch relative leading-[150%] text-md sm:text-sm sm:text-center">
              Fun way to learn coding for kids reading blogs
            </div>
          </div>
          <button
            className="cursor-pointer py-[9px] px-5 bg-tomato self-stretch rounded box-border h-[38px] flex flex-row items-center justify-center border-[1px] border-solid border-nero sm:h-[35px]"
            autoFocus={true}
            onClick={onScrollBannerButtonClick}
          >
            <div className="relative text-lg leading-[150%] font-semibold font-body-large-600 text-nero text-center inline-block max-h-[58px] sm:text-base">
              View A Blog
            </div>
          </button>
        </div>
        <img
          className="flex-1 relative max-w-full overflow-hidden h-[500px] object-cover lg:order-[1] lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch sm:h-[200px] sm:w-full"
          alt=""
          src="/image-56@2x.png"
        />
      </div>

      {/* Blogs section */}
      <div className="max-w-[1240px] w-full bg-nero flex flex-col items-center justify-center gap-[30px] relative z-[1] text-center text-13xl text-black1 sm:gap-[20px]">
        <div className="self-stretch bg-nero flex flex-col items-center justify-center py-4 px-3 gap-[5px]">
          <div className="self-stretch flex flex-row items-center justify-center">
            <div className="flex-1 relative leading-[120%] font-semibold sm:text-2xl">
              Coding blogs for kids
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-center text-sm">
            <div className="flex-1 relative leading-[150%] text-black sm:text-sm sm:text-center">
              Great collection of fun and interactive coding blogs for kids to
              assess and acquire computer science knowledge.
            </div>
          </div>
        </div>

        {/* Blog cards */}
        <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[20px] p-5 text-left text-2xl sm:p-2">
          <div className="w-[350px] rounded-lg bg-nero flex flex-col items-center justify-start p-2.5 box-border gap-[15px] sm:w-full">
            <img
              className="self-stretch relative max-w-full overflow-hidden h-[213px] shrink-0 object-cover rounded-lg sm:h-[180px]"
              alt=""
              src="/image81@2x.png"
            />
            <div className="self-stretch bg-nero box-border overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[5px] gap-[15px] min-h-[52.5px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[2px]">
                <div className="self-stretch bg-nero overflow-hidden flex flex-row items-center justify-center">
                  <div className="flex-1 relative leading-[150%] font-semibold sm:text-xl">
                    How to build a face recognizer with Scratch coding?
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[2px] text-base">
                  <div className="w-[84px] relative leading-[150%] text-black sm:text-sm">{`Written By: `}</div>
                  <div className="flex-1 relative leading-[150%] text-black sm:text-sm">
                    CoDesk Innovations
                  </div>
                </div>
              </div>
              <div className="w-80 relative text-base leading-[150%] text-black [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical] max-w-[320px] sm:text-sm">
                Over the last few years, facial recognition technology has grown
                in popularity. Face detection in psychology refers to the act of
                identifying and focusing on faces in a scene.
              </div>
              <button
                className="cursor-pointer py-[9px] px-5 bg-aqua-deep self-stretch rounded flex flex-row items-center justify-center border-[1px] border-solid border-nero sm:h-[35px]"
                autoFocus={true}
              >
                <div className="relative text-lg tracking-[-0.01em] leading-[20px] capitalize font-semibold font-inter text-nero text-center inline-block max-h-[58px] sm:text-base">
                  read more
                </div>
              </button>
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
