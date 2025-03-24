import {
  FunctionComponent,
  useState,
  useMemo,
  type CSSProperties,
  useCallback,
} from 'react';
import DrawerMenus from './DrawerMenus';
import PortalDrawer from './PortalDrawer';

export type NavbarType = {
  className?: string;
  coursesColor?: CSSProperties['color'];
  competetionsColor?: CSSProperties['color'];
  aboutUsColor?: CSSProperties['color'];
  quizzesColor?: CSSProperties['color'];
  onLogoClick: () => void;
  onCoursesClick: () => void;
  onQuizzesClick: () => void;
  onCompetetionsClick: () => void;
  onAboutUsClick: () => void;
};

const Navbar: FunctionComponent<NavbarType> = ({
  className = '',
  coursesColor,
  competetionsColor,
  aboutUsColor,
  quizzesColor,
  onLogoClick,
  onCoursesClick,
  onQuizzesClick,
  onCompetetionsClick,
  onAboutUsClick,
}) => {
  const [isDrawerMenusOpen, setDrawerMenusOpen] = useState(false);

  // Memoized styles
  const coursesStyle: CSSProperties = useMemo(
    () => ({
      color: coursesColor,
    }),
    [coursesColor]
  );

  const competetionsStyle: CSSProperties = useMemo(
    () => ({
      color: competetionsColor,
    }),
    [competetionsColor]
  );

  const aboutUsStyle: CSSProperties = useMemo(
    () => ({
      color: aboutUsColor,
    }),
    [aboutUsColor]
  );

  const quizzesStyle: CSSProperties = useMemo(
    () => ({
      color: quizzesColor,
    }),
    [quizzesColor]
  );

  // Drawer handlers
  const openDrawerMenus = useCallback(() => {
    setDrawerMenusOpen(true);
  }, []);

  const closeDrawerMenus = useCallback(() => {
    setDrawerMenusOpen(false);
  }, []);

  return (
    <>
      <div
        className={`self-stretch h-[77px] bg-nero flex flex-row items-center justify-center py-[22px] px-20 box-border fixed top-0 left-0 right-0 z-[99] sm:gap-[10px] sm:pl-5 sm:pr-5 sm:box-border ${className}`}
      >
        <div className="w-[1240px] bg-nero flex flex-row items-center justify-between">
          <button
            className="cursor-pointer [border:none] p-2.5 bg-[transparent] flex flex-row items-center justify-center gap-2"
            onClick={onLogoClick}
          >
            <img 
              src="https://www.codesklab.com/codesk-logo.jpeg" 
              alt="CoDeskLab Logo" 
              className="h-10 w-auto rounded-md"
              width="40" 
              height="40"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = 'https://placehold.co/40x40?text=CoDeskLab';
              }}
            />
            <div
              className="relative text-2xl sm:text-xl tracking-[-0.01em] leading-[20px] font-semibold font-inter text-dodger-blue text-left"
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
                  className="relative text-sm leading-[150%] font-body-large-600 text-black text-left"
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
                  className="relative text-sm leading-[150%] font-body-large-600 text-black text-left"
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
                  className="relative text-sm leading-[150%] font-body-large-600 text-black text-left"
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
                  className="relative text-sm leading-[150%] font-body-large-600 text-black text-left"
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
