import {
  FunctionComponent,
  useMemo,
  type CSSProperties,
  useCallback,
  useState,
  useEffect,
} from 'react';
import { useNavigate } from 'react-router-dom';

export type CodewarTabsType = {
  className?: string;

  /** Style props */
  organizersTabBackgroundColor?: CSSProperties['backgroundColor'];
  buildersTabBackgroundColor?: CSSProperties['backgroundColor'];
  hackathonsTabBackgroundColor?: CSSProperties['backgroundColor'];
  projectsTabBackgroundColor?: CSSProperties['backgroundColor'];

  /** Action props */
  onHackathonsTabClick?: () => void;
  onProjectsTabClick?: () => void;
  onBuildersTabClick?: () => void;
  onOrganizersTabClick?: () => void;
};

const CodewarTabs: FunctionComponent<CodewarTabsType> = ({
  className = '',
  organizersTabBackgroundColor,
  onHackathonsTabClick,
  onProjectsTabClick,
  onBuildersTabClick,
  onOrganizersTabClick,
  buildersTabBackgroundColor,
  hackathonsTabBackgroundColor,
  projectsTabBackgroundColor,
}) => {
  const organizersTabStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: organizersTabBackgroundColor,
    };
  }, [organizersTabBackgroundColor]);

  const buildersTabStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: buildersTabBackgroundColor,
    };
  }, [buildersTabBackgroundColor]);

  const hackathonsTabStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: hackathonsTabBackgroundColor,
    };
  }, [hackathonsTabBackgroundColor]);

  const projectsTabStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: projectsTabBackgroundColor,
    };
  }, [projectsTabBackgroundColor]);

  const navigate = useNavigate();

  // Add state to track scroll position
  const [isSticky, setIsSticky] = useState(false);

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      const navbarHeight = 77; // Height of navbar
      setIsSticky(window.scrollY > navbarHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`self-stretch h-[65px] rounded-lg bg-footer-header flex flex-row flex-wrap items-start justify-center py-2.5 px-0 box-border gap-[5px] transition-all duration-300 ${
        isSticky 
          ? 'fixed top-0 left-0 right-0 z-[99]' 
          : 'relative'
      } text-center text-lg text-aqua-deep font-body-large-600 sm:pl-0 sm:pr-0 sm:box-border ${className}`}
    >
      <div className="w-full max-w-[1240px] mx-auto flex flex-row flex-wrap items-start justify-center gap-[5px]">
        <button
          className="cursor-pointer py-[9px] px-5 bg-nero w-[130px] rounded box-border h-[45px] flex flex-row items-center justify-center border-[1px] border-solid border-aqua-deep md:w-20 md:pl-2.5 md:pr-2.5 md:box-border sm:w-20"
          autoFocus={true}
          onClick={onHackathonsTabClick}
          style={hackathonsTabStyle}
        >
          <div className="relative text-lg leading-[150%] font-semibold font-body-large-600 text-aqua-deep text-center inline-block max-h-[58px] md:text-xs sm:text-xs">
            Hackathons
          </div>
        </button>
        <button
          className="cursor-pointer py-[9px] px-5 bg-nero w-[130px] rounded box-border h-[45px] flex flex-row items-center justify-center border-[1px] border-solid border-aqua-deep md:w-20 md:pl-2.5 md:pr-2.5 md:box-border sm:w-20"
          autoFocus={true}
          onClick={onProjectsTabClick}
          style={projectsTabStyle}
        >
          <div className="relative text-lg leading-[150%] font-semibold font-body-large-600 text-aqua-deep text-center inline-block max-h-[58px] md:text-xs sm:text-xs">
            Projects
          </div>
        </button>
        <button
          className="cursor-pointer py-[9px] px-5 bg-nero w-[130px] rounded box-border h-[45px] flex flex-row items-center justify-center border-[1px] border-solid border-aqua-deep md:w-20 md:pl-2.5 md:pr-2.5 md:box-border sm:w-20"
          autoFocus={true}
          onClick={onBuildersTabClick}
          style={buildersTabStyle}
        >
          <div className="relative text-lg leading-[150%] font-semibold font-body-large-600 text-aqua-deep text-center inline-block max-h-[58px] md:text-xs sm:text-xs">
            Builders
          </div>
        </button>
        <div
          className="w-[130px] rounded bg-nero box-border h-[45px] flex flex-row items-center justify-center py-[9px] px-5 cursor-pointer border-[1px] border-solid border-aqua-deep md:w-20 md:pl-2.5 md:pr-2.5 md:box-border sm:w-20"
          onClick={onOrganizersTabClick}
          style={organizersTabStyle}
        >
          <div className="relative leading-[150%] font-semibold inline-block max-h-[58px] md:text-xs sm:text-xs">
            Organizers
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodewarTabs;
