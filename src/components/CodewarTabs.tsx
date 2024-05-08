import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type CodewarTabsType = {
  /** Style props */
  hackathonsTabBackgroundColor?: CSSProperties["backgroundColor"];
  hackathonsTextColor?: CSSProperties["color"];
  organizersTabBackgroundColor?: CSSProperties["backgroundColor"];
  buildersTabBackgroundColor?: CSSProperties["backgroundColor"];
  buildersTextColor?: CSSProperties["color"];
  organizersTextColor?: CSSProperties["color"];
  projectsTextColor?: CSSProperties["color"];
  projectsTabBackgroundColor?: CSSProperties["backgroundColor"];

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
  hackathonsTextColor,
  organizersTabBackgroundColor,
  buildersTabBackgroundColor,
  buildersTextColor,
  organizersTextColor,
  projectsTextColor,
  projectsTabBackgroundColor,
}) => {
  const hackathonsTabStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: hackathonsTabBackgroundColor,
    };
  }, [hackathonsTabBackgroundColor]);

  const hackathonsTextStyle: CSSProperties = useMemo(() => {
    return {
      color: hackathonsTextColor,
    };
  }, [hackathonsTextColor]);

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

  const buildersTextStyle: CSSProperties = useMemo(() => {
    return {
      color: buildersTextColor,
    };
  }, [buildersTextColor]);

  const organizersTextStyle: CSSProperties = useMemo(() => {
    return {
      color: organizersTextColor,
    };
  }, [organizersTextColor]);

  const projectsTextStyle: CSSProperties = useMemo(() => {
    return {
      color: projectsTextColor,
    };
  }, [projectsTextColor]);

  const projectsTabStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: projectsTabBackgroundColor,
    };
  }, [projectsTabBackgroundColor]);

  return (
    <div className="self-stretch rounded-lg bg-aliceblue-100 flex flex-row flex-wrap items-start justify-center z-[4] text-center text-lg text-aqua-deep font-body-large-600">
      <button
        className="cursor-pointer py-[9px] px-5 bg-nero rounded box-border h-[45px] flex flex-row items-center justify-center border-[1px] border-solid border-aqua-deep"
        autoFocus={true}
        onClick={onHackathonsTabClick}
        style={hackathonsTabStyle}
      >
        <div
          className="relative text-lg leading-[150%] font-semibold font-body-large-600 text-aqua-deep text-center inline-block max-h-[58px]"
          style={hackathonsTextStyle}
        >
          Hackathons
        </div>
      </button>
      <button
        className="cursor-pointer py-[9px] px-5 bg-nero rounded box-border h-[45px] flex flex-row items-center justify-center border-[1px] border-solid border-aqua-deep"
        autoFocus={true}
        onClick={onProjectsTabClick}
        style={projectsTabStyle}
      >
        <div
          className="relative text-lg leading-[150%] font-semibold font-body-large-600 text-aqua-deep text-center inline-block max-h-[58px]"
          style={projectsTextStyle}
        >
          Projects
        </div>
      </button>
      <button
        className="cursor-pointer py-[9px] px-5 bg-nero rounded box-border h-[45px] flex flex-row items-center justify-center border-[1px] border-solid border-aqua-deep"
        autoFocus={true}
        onClick={onBuildersTabClick}
        style={buildersTabStyle}
      >
        <div
          className="relative text-lg leading-[150%] font-semibold font-body-large-600 text-aqua-deep text-center inline-block max-h-[58px]"
          style={buildersTextStyle}
        >
          Builders
        </div>
      </button>
      <div
        className="rounded bg-nero box-border h-[45px] flex flex-row items-center justify-center py-[9px] px-5 cursor-pointer border-[1px] border-solid border-aqua-deep"
        onClick={onOrganizersTabContainerClick}
        style={organizersTabStyle}
      >
        <div
          className="relative leading-[150%] font-semibold inline-block max-h-[58px]"
          style={organizersTextStyle}
        >
          Organizers
        </div>
      </div>
    </div>
  );
};

export default CodewarTabs;
