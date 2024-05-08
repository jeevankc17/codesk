import { FunctionComponent, useCallback } from "react";

export type ProjectCardType = {
  coverImage?: string;
  nameStudent?: string;
  courseName?: string;
  projectName?: string;
  projectId?: string;
  profileImage?: string;
  grade?: string;
};

const ProjectCard: FunctionComponent<ProjectCardType> = ({
  coverImage,
  nameStudent,
  courseName,
  projectName,
  projectId,
  profileImage,
  grade,
}) => {
  const onViewProjectButtonClick = useCallback(() => {
    window.open("https://scratch.mit.edu/projects/2232652/");
  }, []);

  return (
    <div className="w-[350px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-lg bg-nero flex flex-col items-start justify-start p-2.5 box-border relative gap-[25px] text-left text-5xl text-black1 font-body-large-600">
      <img
        className="self-stretch relative max-w-full overflow-hidden h-[213px] shrink-0 object-cover z-[0]"
        alt=""
        src={coverImage}
      />
      <div className="self-stretch flex flex-col items-start justify-start gap-[5px] z-[1]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[2px]">
          <div className="self-stretch flex flex-row flex-wrap items-center justify-between">
            <div className="flex-1 flex flex-col items-start justify-start">
              <div className="self-stretch relative leading-[150%] font-semibold">
                {nameStudent}
              </div>
            </div>
            <div className="w-[110px] flex flex-row items-center justify-end text-right text-base">
              <div className="flex-1 flex flex-col items-end justify-center py-0 pr-[5px] pl-0">
                <div className="w-[65px] relative leading-[150%] flex items-center">{`Grade: `}</div>
              </div>
              <div className="w-10 flex flex-col items-start justify-center py-0 pr-[5px] pl-0 box-border text-left text-wwwcodingalcom-mine-shaft">
                <div className="self-stretch relative leading-[150%]">
                  {grade}
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[220.3px] pl-0 text-base">
            <div className="relative leading-[150%] inline-block max-w-[373.3299865722656px]">
              {courseName}
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start text-sm">
            <div className="relative leading-[120%] font-semibold inline-block max-w-[373.3299865722656px]">
              {projectName}
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-center">
          <button
            className="cursor-pointer py-[9px] px-5 bg-aqua-deep rounded flex flex-row items-center justify-center border-[1px] border-solid border-nero"
            onClick={onViewProjectButtonClick}
            id={projectId}
          >
            <div className="relative text-lg leading-[150%] font-semibold font-body-large-600 text-nero text-center inline-block max-h-[58px]">
              View Project
            </div>
          </button>
        </div>
      </div>
      <img
        className="w-[100px] absolute !m-[0] top-[150px] left-[10px] rounded-100xl h-[100px] object-cover z-[2]"
        alt=""
        src={profileImage}
      />
    </div>
  );
};

export default ProjectCard;
