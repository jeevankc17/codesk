import {
  FunctionComponent,
  useState,
  useCallback,
  type CSSProperties,
} from "react";
import { useNavigate } from "react-router-dom";
import DrawerMenus from "./DrawerMenus";
import PortalDrawer from "./PortalDrawer";

export type NavbarType = {
  /** Style props */
  coDeskLabColor?: CSSProperties["color"];
  competetionsColor?: CSSProperties["color"];
  coursesColor?: CSSProperties["color"];
  aboutUsColor?: CSSProperties["color"];
  quizzesColor?: CSSProperties["color"];

  /** Action props */
  onLogoClick?: () => void;
  onCoursesClick?: () => void;
  onQuizzesClick?: () => void;
  onCompetetionsClick?: () => void;
  onAboutUsClick?: () => void;
};

const Navbar: FunctionComponent<NavbarType> = ({
  coDeskLabColor,
  onLogoClick,
  onCoursesClick,
  onQuizzesClick,
  onCompetetionsClick,
  onAboutUsClick,
  competetionsColor,
  coursesColor,
  aboutUsColor,
  quizzesColor,
}) => {
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

  return (
    <>
      <div className="self-stretch h-[77px] bg-nero flex flex-row items-center justify-center py-[22px] px-20 box-border sticky top-[0] z-[18] sm:gap-[10px] sm:pl-5 sm:pr-5 sm:box-border">
        <div className="w-[1240px] bg-nero flex flex-row items-center justify-between">
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
                <div className="relative text-sm leading-[150%] font-body-xl-600 text-black1 text-left">
                  Courses
                </div>
              </button>
              <button
                className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-end"
                onClick={onQuizzesClick}
              >
                <div className="relative text-sm leading-[150%] font-body-xl-600 text-black1 text-left">
                  Quizzes
                </div>
              </button>
              <button
                className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-end"
                onClick={onCompetetionsClick}
              >
                <div className="relative text-sm leading-[150%] font-body-xl-600 text-black1 text-left">
                  Competetions
                </div>
              </button>
              <button
                className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-end"
                onClick={onAboutUsClick}
              >
                <div className="relative text-sm leading-[150%] font-body-xl-600 text-black1 text-left">
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

export default Navbar;
