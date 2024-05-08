import { FunctionComponent, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import DrawerMenus from "../components/DrawerMenus";
import PortalDrawer from "../components/PortalDrawer";
import Footer from "../components/Footer";

const BlogPage: FunctionComponent = () => {
  const navigate = useNavigate();
  const [isDrawerMenusOpen, setDrawerMenusOpen] = useState(false);

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

  const openDrawerMenus = useCallback(() => {
    setDrawerMenusOpen(true);
  }, []);

  const closeDrawerMenus = useCallback(() => {
    setDrawerMenusOpen(false);
  }, []);

  const onScrollBannerButtonClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='blogsContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <div className="w-full relative bg-nero flex flex-col items-center justify-start p-5 box-border gap-[20px] text-left text-29xl text-nero font-body-large-600 sm:pl-[5px] sm:pr-[5px] sm:box-border">
        <div className="self-stretch h-[77px] flex flex-row items-start justify-start z-[3]">
          <header className="self-stretch w-full rounded bg-nero flex flex-row items-center justify-center py-[22px] px-20 box-border sticky top-[0] [background:white] lg:pl-10 lg:pr-10 lg:box-border md:pl-6 md:pr-6 md:box-border">
            <div className="flex-1 flex flex-row items-center justify-between">
              <button
                className="cursor-pointer [border:none] p-2.5 bg-[transparent] flex flex-row items-center justify-center"
                onClick={onLogoClick}
              >
                <div className="relative text-13xl tracking-[-0.01em] leading-[40px] font-semibold font-inter text-dodger-blue text-left">
                  CoDeskLab
                </div>
              </button>
              <div className="flex flex-row items-center justify-end gap-[36px] sm:flex">
                <div className="bg-nero flex flex-row items-center justify-end gap-[30px] md:hidden">
                  <button
                    className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-end"
                    onClick={onCoursesClick}
                  >
                    <div className="relative text-sm leading-[150%] font-body-large-600 text-black1 text-left">
                      Courses
                    </div>
                  </button>
                  <button
                    className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-end"
                    onClick={onQuizzesClick}
                  >
                    <div className="relative text-sm leading-[150%] font-body-large-600 text-black1 text-left">
                      Quizzes
                    </div>
                  </button>
                  <button
                    className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-end"
                    onClick={onCompetetionsClick}
                  >
                    <div className="relative text-sm leading-[150%] font-body-large-600 text-black1 text-left">
                      Competetions
                    </div>
                  </button>
                  <button
                    className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-end"
                    onClick={onAboutUsClick}
                  >
                    <div className="relative text-sm leading-[150%] font-body-large-600 text-black1 text-left">
                      About Us
                    </div>
                  </button>
                </div>
                <button
                  className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-center"
                  onClick={openDrawerMenus}
                >
                  <div className="w-8 relative h-8 overflow-hidden shrink-0">
                    <img
                      className="absolute top-[6px] left-[2.1px] max-h-full w-[19.8px]"
                      alt=""
                      src="/vector-1.svg"
                    />
                    <img
                      className="absolute top-[12px] left-[2.1px] max-h-full w-[19.8px]"
                      alt=""
                      src="/vector-1.svg"
                    />
                    <img
                      className="absolute top-[18px] left-[2.1px] max-h-full w-[19.8px]"
                      alt=""
                      src="/vector-1.svg"
                    />
                  </div>
                </button>
              </div>
            </div>
          </header>
        </div>
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
                  Over the last few years, facial recognition technology has
                  grown in popularity. Face detection in psychology refers to
                  the act of identifying and focusing on faces in a scene.
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
      {isDrawerMenusOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Left"
          onOutsideClick={closeDrawerMenus}
        >
          <DrawerMenus onClose={closeDrawerMenus} />
        </PortalDrawer>
      )}
    </>
  );
};

export default BlogPage;
