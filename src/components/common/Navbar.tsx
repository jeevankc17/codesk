import {
  FunctionComponent,
  useMemo,
  useState,
  type CSSProperties,
} from 'react';

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
  const [dropdownOpen, setDropdownOpen] = useState(false);

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

  return (
    <>
      <div
        className={`self-stretch h-[77px] bg-nero flex flex-row items-center justify-center py-[22px] px-20 box-border fixed top-0 left-0 right-0 z-[99] sm:gap-[10px] sm:pl-5 sm:pr-5 sm:box-border ${className}`}
      >
        <div className="w-[1240px] bg-nero flex flex-row items-center justify-between sm:w-full">
          <div className="flex flex-row items-center gap-2">
            <button
              className="cursor-pointer [border:none] p-2.5 bg-[transparent] flex flex-row items-center justify-center gap-2"
              onClick={onLogoClick}
            >
              <img 
                src="/codesk-logo.jpeg" 
                alt="CodeskInnovations Logo" 
                className="h-10 w-auto rounded-md"
                width="40" 
                height="40"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = 'https://placehold.co/40x40?text=CodeskInnovations';
                }}
              />
              <div
                className="relative text-2xl sm:text-xl tracking-[-0.01em] leading-[20px] font-semibold font-inter text-dodger-blue text-left"
              >
                CodeskInnovations
              </div>
            </button>
            
            {/* Hamburger Menu Button - visible only on small screens */}
            <button
              className="hidden md:flex cursor-pointer p-2 bg-transparent border-none items-center justify-center"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {dropdownOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          
          {/* Dropdown Menu - visible only on small screens when open */}
          {dropdownOpen && (
            <div className="hidden md:flex absolute top-[77px] left-5 bg-nero shadow-lg rounded-lg p-4 flex-col gap-3 z-[100]">
              <button
                className="cursor-pointer [border:none] p-2 bg-[transparent] flex flex-row items-center justify-start w-full"
                onClick={() => { setDropdownOpen(false); onCoursesClick(); }}
              >
                <div className="relative text-sm leading-[150%] font-body-large-600 text-black text-left" style={coursesStyle}>
                  Courses
                </div>
              </button>
              <button
                className="cursor-pointer [border:none] p-2 bg-[transparent] flex flex-row items-center justify-start w-full"
                onClick={() => { setDropdownOpen(false); onQuizzesClick(); }}
              >
                <div className="relative text-sm leading-[150%] font-body-large-600 text-black text-left" style={quizzesStyle}>
                  Quizzes
                </div>
              </button>
              <button
                className="cursor-pointer [border:none] p-2 bg-[transparent] flex flex-row items-center justify-start w-full"
                onClick={() => { setDropdownOpen(false); onCompetetionsClick(); }}
              >
                <div className="relative text-sm leading-[150%] font-body-large-600 text-black text-left" style={competetionsStyle}>
                  Competetions
                </div>
              </button>
              <button
                className="cursor-pointer [border:none] p-2 bg-[transparent] flex flex-row items-center justify-start w-full"
                onClick={() => { setDropdownOpen(false); onAboutUsClick(); }}
              >
                <div className="relative text-sm leading-[150%] font-body-large-600 text-black text-left" style={aboutUsStyle}>
                  About Us
                </div>
              </button>
            </div>
          )}
          
          {/* Regular Navigation - visible on larger screens */}
          <div className="flex flex-row items-center justify-end gap-[36px] md:hidden">
            <div className="bg-nero flex flex-row items-center justify-end gap-[30px]">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
