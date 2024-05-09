import {
  FunctionComponent,
  useState,
  useMemo,
  type CSSProperties,
  useCallback,
} from "react";
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
  const coDeskLabStyle: CSSProperties = useMemo(() => {
    return {
      color: coDeskLabColor,
    };
  }, [coDeskLabColor]);

  const competetionsStyle: CSSProperties = useMemo(() => {
    return {
      color: competetionsColor,
    };
  }, [competetionsColor]);

  const coursesStyle: CSSProperties = useMemo(() => {
    return {
      color: coursesColor,
    };
  }, [coursesColor]);

  const aboutUsStyle: CSSProperties = useMemo(() => {
    return {
      color: aboutUsColor,
    };
  }, [aboutUsColor]);

  const quizzesStyle: CSSProperties = useMemo(() => {
    return {
      color: quizzesColor,
    };
  }, [quizzesColor]);

  const [isDrawerMenusOpen, setDrawerMenusOpen] = useState(false);

  const openDrawerMenus = useCallback(() => {
    setDrawerMenusOpen(true);
  }, []);

  const closeDrawerMenus = useCallback(() => {
    setDrawerMenusOpen(false);
  }, []);

  return (
    <>
      <div className="self-stretch h-[77px] flex flex-row items-start justify-start z-[18]">
        <header className="self-stretch w-full rounded bg-nero flex flex-row items-center justify-center py-[22px] px-20 box-border sticky top-[0] [background:white] lg:pl-10 lg:pr-10 lg:box-border md:pl-6 md:pr-6 md:box-border">
          <div className="flex-1 flex flex-row items-center justify-between">
            <button
              className="cursor-pointer [border:none] p-2.5 bg-[transparent] flex flex-row items-center justify-center"
              onClick={onLogoClick}
            >
              <div
                className="relative text-13xl tracking-[-0.01em] leading-[40px] font-semibold font-inter text-dodger-blue text-left"
                style={coDeskLabStyle}
              >
                CoDeskLab
              </div>
            </button>
            <div className="flex flex-row items-center justify-end gap-[36px] sm:flex">
              <div className="bg-nero flex flex-row items-center justify-end gap-[30px] md:hidden">
                <button
                  className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-end"
                  onClick={onCoursesClick}
                >
                  <div
                    className="relative text-sm leading-[150%] font-body-large-600 text-black1 text-left"
                    style={coursesStyle}
                  >
                    Courses
                  </div>
                </button>
                <button
                  className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-end"
                  onClick={onQuizzesClick}
                >
                  <div
                    className="relative text-sm leading-[150%] font-body-large-600 text-black1 text-left"
                    style={quizzesStyle}
                  >
                    Quizzes
                  </div>
                </button>
                <button
                  className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-end"
                  onClick={onCompetetionsClick}
                >
                  <div
                    className="relative text-sm leading-[150%] font-body-large-600 text-black1 text-left"
                    style={competetionsStyle}
                  >
                    Competetions
                  </div>
                </button>
                <button
                  className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-end"
                  onClick={onAboutUsClick}
                >
                  <div
                    className="relative text-sm leading-[150%] font-body-large-600 text-black1 text-left"
                    style={aboutUsStyle}
                  >
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
