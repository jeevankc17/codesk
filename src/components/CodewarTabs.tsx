import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type CodewarTabsType = {
  /** Style props */
  hackathonsTabBackgroundColor?: CSSProperties["backgroundColor"];
  buildersTabBackgroundColor?: CSSProperties["backgroundColor"];
  projectsTabBackgroundColor?: CSSProperties["backgroundColor"];
  organizersTabBackgroundColor?: CSSProperties["backgroundColor"];

  /** Action props */
  onHackathonsTabClick?: () => void;
  onProjectsTabClick?: () => void;
  onBuildersTabClick?: () => void;
  onOrganizersTabContainerClick?: () => void;
};

const CodewarTabs: FunctionComponent<CodewarTabsType> = ({
  onHackathonsTabClick,
  onProjectsTabClick,
  onBuildersTabClick,
  onOrganizersTabContainerClick,
  hackathonsTabBackgroundColor,
  buildersTabBackgroundColor,
  projectsTabBackgroundColor,
  organizersTabBackgroundColor,
}) => {
  const hackathonsTabStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: hackathonsTabBackgroundColor,
    };
  }, [hackathonsTabBackgroundColor]);

  const buildersTabStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: buildersTabBackgroundColor,
    };
  }, [buildersTabBackgroundColor]);

  const projectsTabStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: projectsTabBackgroundColor,
    };
  }, [projectsTabBackgroundColor]);

  const organizersTabStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: organizersTabBackgroundColor,
    };
  }, [organizersTabBackgroundColor]);

  return (
    <div className="self-stretch h-[65px] rounded-lg bg-footer-header flex flex-row flex-wrap items-start justify-center py-2.5 px-0 box-border gap-[5px] sticky top-[77] z-[5] text-center text-lg text-aqua-deep font-body-medium-400 sm:pl-0 sm:pr-0 sm:box-border">
      <button
        className="cursor-pointer py-[9px] px-5 bg-nero self-stretch w-[130px] rounded box-border flex flex-row items-center justify-center border-[1px] border-solid border-aqua-deep md:w-20 md:pl-2.5 md:pr-2.5 md:box-border sm:w-20"
        autoFocus={true}
        onClick={onHackathonsTabClick}
        style={hackathonsTabStyle}
      >
        <div className="relative text-lg leading-[150%] font-semibold font-body-medium-400 text-aqua-deep text-center inline-block max-h-[58px] md:text-xs sm:text-xs">
          Hackathons
        </div>
      </button>
      <button
        className="cursor-pointer py-[9px] px-5 bg-nero self-stretch w-[130px] rounded box-border flex flex-row items-center justify-center border-[1px] border-solid border-aqua-deep md:w-20 md:pl-2.5 md:pr-2.5 md:box-border sm:w-20"
        autoFocus={true}
        onClick={onProjectsTabClick}
        style={projectsTabStyle}
      >
        <div className="relative text-lg leading-[150%] font-semibold font-body-medium-400 text-aqua-deep text-center inline-block max-h-[58px] md:text-xs sm:text-xs">
          Projects
        </div>
      </button>
      <button
        className="cursor-pointer py-[9px] px-5 bg-nero self-stretch w-[130px] rounded box-border flex flex-row items-center justify-center border-[1px] border-solid border-aqua-deep md:w-20 md:pl-2.5 md:pr-2.5 md:box-border sm:w-20"
        autoFocus={true}
        onClick={onBuildersTabClick}
        style={buildersTabStyle}
      >
        <div className="relative text-lg leading-[150%] font-semibold font-body-medium-400 text-aqua-deep text-center inline-block max-h-[58px] md:text-xs sm:text-xs">
          Builders
        </div>
      </button>
      <div
        className="self-stretch w-[130px] rounded bg-nero box-border flex flex-row items-center justify-center py-[9px] px-5 cursor-pointer border-[1px] border-solid border-aqua-deep md:w-20 md:pl-2.5 md:pr-2.5 md:box-border sm:w-20"
        onClick={onOrganizersTabContainerClick}
        style={organizersTabStyle}
      >
        <div className="relative leading-[150%] font-semibold inline-block max-h-[58px] md:text-xs sm:text-xs">
          Organizers
        </div>
      </div>
    </div>
  );
};

export default CodewarTabs;
