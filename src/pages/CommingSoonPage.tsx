import { FunctionComponent, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import DrawerMenus from "../components/DrawerMenus";
import PortalDrawer from "../components/PortalDrawer";
import Footer from "../components/Footer";

const CommingSoonPage: FunctionComponent = () => {
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

  const onHomeButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <>
      <div className="w-full relative bg-nero flex flex-col items-center justify-start p-5 box-border gap-[20px] text-left text-lg text-primary-500 font-body-large-600 sm:pl-[5px] sm:pr-[5px] sm:box-border">
        <div className="self-stretch h-[77px] flex flex-row items-start justify-start z-[2]">
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
        <div className="self-stretch bg-nero flex flex-row items-center justify-between py-0 px-[15px] z-[1] md:flex-col sm:pl-[5px] sm:pr-[5px] sm:box-border">
          <div className="flex-1 flex flex-col items-start justify-start gap-[40px] md:flex-[unset] md:self-stretch">
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
              <div className="self-stretch relative leading-[150%] font-semibold">
                COMING SOON
              </div>
              <div className="self-stretch relative text-29xl leading-[120%] font-semibold text-gray-900 sm:text-13xl">
                There is no record on our Database currently, we are going to
                launch our feature very soon. Stay tune
              </div>
            </div>
            <button
              className="cursor-pointer py-[9px] px-5 bg-aqua-deep rounded flex flex-row items-center justify-center border-[1px] border-solid border-nero"
              onClick={onHomeButtonClick}
            >
              <div className="relative text-lg leading-[150%] font-semibold font-body-large-600 text-nero text-center inline-block max-h-[58px]">
                Go Back To Home
              </div>
            </button>
          </div>
          <div className="w-[579px] flex flex-row items-center justify-center">
            <img
              className="w-[579px] relative h-[604px] object-cover"
              alt=""
              src="/image7@2x.png"
            />
          </div>
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

export default CommingSoonPage;
