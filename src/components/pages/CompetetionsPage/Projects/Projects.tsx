import { FunctionComponent, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../../common/Navbar';
import Footer from '../../../common/Footer';
import CodewarTabs from '../../../common/CodewarTabs';
import { Project } from '../../../../types/competitions';

const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    title: "Minecraft Platformer",
    description: "In this Minecraft platformer built by kids in a hackathon, players navigate through a series of challenging obstacles, jumping across gaps, dodging traps, and collecting power-ups to reach the end goal.",
    image: "/image-15@2x.png",
    buildBy: "Team XYZ",
    buildAt: "Hackathon XYZ",
    technologies: ["Scratch", "IOT"]
  },
  {
    id: 2,
    title: "Smart Garden Monitor",
    description: "An IoT project that helps monitor plant health and automates watering based on soil moisture levels. Built using Arduino and basic programming concepts.",
    image: "/image-16@2x.png",
    buildBy: "Green Coders",
    buildAt: "EcoTech Hackathon",
    technologies: ["Arduino", "Python"]
  },
  // Add more projects...
];

const Projects: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLogoClick = useCallback(() => {
    navigate('/');
  }, [navigate]);

  const onCoursesClick = useCallback(() => {
    navigate('/coursepage');
  }, [navigate]);

  const onQuizzesClick = useCallback(() => {
    navigate('/quizpage');
  }, [navigate]);

  const onCompetetionsClick = useCallback(() => {
    navigate('/competetionspage');
  }, [navigate]);

  const onAboutUsClick = useCallback(() => {
    navigate('/aboutuspage');
  }, [navigate]);

  const onHackathonsTabClick = useCallback(() => {
    navigate('/competetions/hackathons');
  }, [navigate]);

  const onProjectsTabClick = useCallback(() => {
    navigate('/competetions/projects');
  }, [navigate]);

  const onBuildersTabClick = useCallback(() => {
    navigate('/competetions/builders');
  }, [navigate]);

  const onOrganizersTabClick = useCallback(() => {
    navigate('/competetions/organizers');
  }, [navigate]);

  const onScrollBannerButtonClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='bodyContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
  }, []);

  const onViewProjectButtonClick = useCallback(() => {
    navigate('/commingsoonpage');
  }, [navigate]);

  return (
    <div className="w-full relative bg-nero flex flex-col items-start justify-center p-5 box-border gap-[20px] text-left text-4xl text-nero font-body-large-600 sm:py-[30px] sm:px-[5px] sm:box-border">
      <div className="fixed top-0 left-0 right-0 z-[100] bg-nero">
        <div className="px-5">
          <Navbar
            logoColor="#1f95f2"
            onLogoClick={onLogoClick}
            onCoursesClick={onCoursesClick}
            onQuizzesClick={onQuizzesClick}
            onCompetetionsClick={onCompetetionsClick}
            onAboutUsClick={onAboutUsClick}
            coursesColor="#000"
            competetionsColor="#000"
            aboutUsColor="#000"
            quizzesColor="#000"
          />
          <CodewarTabs
            organizersTabBackgroundColor="#fff"
            onHackathonsTabClick={onHackathonsTabClick}
            onProjectsTabClick={onProjectsTabClick}
            onBuildersTabClick={onBuildersTabClick}
            onOrganizersTabClick={onOrganizersTabClick}
            buildersTabBackgroundColor="#fff"
            hackathonsTabBackgroundColor="#fff"
            projectsTabBackgroundColor="#0063B0"
          />
        </div>
      </div>
      <div className="h-[77px]"></div>
      <div className="self-stretch rounded-mini bg-footer-header flex flex-row items-center justify-between py-0 px-[15px] z-[2] lg:flex-col md:flex-col sm:pl-[5px] sm:pr-[5px] sm:box-border">
        <div className="flex-1 flex flex-col items-center justify-center p-[15px] gap-[34px] lg:order-[2] lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch">
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch relative leading-[120%] font-semibold sm:text-sm">
              Our Projects
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start text-md">
            <div className="self-stretch relative leading-[150%]">
              Projects refer to the coding creations or solutions developed by
              kids during hackathons or independently on the platform. These
              could range from software applications and games to websites and
              mobile apps. Kids can showcase their projects, share their code,
              and receive feedback from peers and mentors on the platform.
            </div>
          </div>
          <button
            className="cursor-pointer py-[9px] px-5 bg-tomato self-stretch rounded box-border h-[38px] flex flex-row items-center justify-center border-[1px] border-solid border-nero"
            autoFocus={true}
            onClick={onScrollBannerButtonClick}
          >
            <div className="relative text-lg tracking-[-0.01em] leading-[20px] capitalize font-semibold font-inter text-nero text-center inline-block max-h-[58px]">
              View a Projects
            </div>
          </button>
        </div>
        <img
          className="flex-1 relative max-w-full overflow-hidden h-[500px] object-cover lg:order-[1] lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch sm:h-[300px]"
          alt=""
          src="/image-531@2x.png"
        />
      </div>
      <div className="self-stretch flex flex-row items-start justify-center gap-[20px] relative z-[1] text-center text-sm text-black1 lg:flex-col md:flex-col min-h-screen overflow-visible">
        <div className="w-[1000px] flex flex-col items-start justify-start gap-[20px] z-[1] lg:self-stretch lg:w-auto md:w-full sticky top-[77] h-fit">
          <div className="self-stretch flex flex-row items-center justify-center p-2.5 z-[2]">
            <div className="flex-1 relative leading-[120%] font-semibold sm:text-3xl">
              All projects build by builders and submitted to the hackathons
              hosted by organizers
            </div>
          </div>
          <div className="self-stretch rounded-2xl bg-whitesmoke-100 flex flex-row flex-wrap items-center justify-start py-0 px-[50px] gap-[0px_16px] z-[1] text-left text-md text-darkslategray-200 border-[2px] border-solid border-whitesmoke-300 sm:pl-0 sm:pr-0 sm:box-border">
            <div className="w-[143px] h-8 flex flex-col items-center justify-center">
              <div className="relative leading-[150%]">Sort projects by</div>
            </div>
            <button
              className="cursor-pointer py-[9px] px-5 bg-dim-green flex-1 rounded flex flex-row items-center justify-center border-[1px] border-solid border-black1 md:w-full sm:pl-0 sm:pr-0 sm:box-border"
              autoFocus={true}
            >
              <div className="flex-1 relative text-lg leading-[150%] font-body-large-600 text-black1 text-center inline-block max-h-[58px] sm:text-xs">
                Most viewed
              </div>
            </button>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[20px]">
            {PROJECTS_DATA.map(project => (
              <div key={project.id} className="w-[350px] bg-nero flex flex-col items-center justify-center p-[15px] box-border gap-[10px]">
                <div className="self-stretch flex flex-col items-center justify-start gap-[2px] md:flex-col">
                  <img
                    className="w-[169.3px] relative rounded h-[127px] object-cover"
                    alt={project.title}
                    src={project.image}
                  />
                  <div className="self-stretch flex flex-col items-center justify-center gap-[10px]">
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
                        <div className="self-stretch relative leading-[150%] font-semibold">
                          {project.title}
                        </div>
                        <summary className="self-stretch relative text-xs leading-[130%] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">
                          {project.description}
                        </summary>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start text-sm text-chateau-green">
                        <div className="flex-1 flex flex-col items-start justify-start">
                          <div className="self-stretch relative leading-[150%]">
                            Build by:
                          </div>
                          <div className="self-stretch relative leading-[120%] font-semibold">
                            {project.buildBy}
                          </div>
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-start">
                          <div className="self-stretch relative leading-[150%]">
                            Build at:
                          </div>
                          <div className="self-stretch relative leading-[120%] font-semibold">
                            {project.buildAt}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[10px]">
                      {project.technologies.map(tech => (
                        <div key={tech} className="rounded-lg bg-cornflowerblue flex flex-col items-start justify-start p-[5px]">
                          <div className="relative leading-[130%]">{tech}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <button
                  className="cursor-pointer py-[9px] px-5 bg-chateau-green w-[230px] rounded"
                  onClick={onViewProjectButtonClick}
                >
                  <div className="relative text-lg leading-[150%] font-semibold">
                    View Project
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="self-stretch flex-1 flex flex-row items-start justify-center z-[0] text-2xl md:hidden">
          <div className="w-[350px] rounded-3xs bg-nero flex flex-col items-center justify-start p-2.5 box-border gap-[15px] fixed top-[142px] right-5">
            <div className="self-stretch relative leading-[150%] font-semibold text-transparent !bg-clip-text [background:linear-gradient(16.28deg,_#c53232,_#7c36dd)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              {`Play while you learn & win amazing prizes`}
            </div>
            <img
              className="self-stretch relative max-w-full overflow-hidden h-[213px] shrink-0 object-cover"
              alt=""
              src="/image32@2x.png"
            />
            <div className="self-stretch bg-nero box-border overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[5px] min-h-[52.5px] text-md border-[1px] border-solid border-nero">
              <div className="w-full relative leading-[150%] inline-block max-w-[320px]">
                Real-time Leaderboard
              </div>
              <div className="w-full relative leading-[150%] inline-block max-w-[320px]">
                Weekly Winner Awards
              </div>
              <div className="w-full relative leading-[150%] inline-block max-w-[320px]">
                Championships
              </div>
              <button
                className="cursor-pointer py-[9px] px-5 bg-tomato self-stretch rounded flex flex-row items-center justify-center border-[1px] border-solid border-nero"
                autoFocus={true}
                onClick={onQuizzesClick}
              >
                <div className="relative text-lg tracking-[-0.01em] leading-[20px] capitalize font-semibold font-inter text-nero text-center inline-block max-h-[58px]">
                  Take a quiz now
                </div>
              </button>
            </div>
          </div>
        </div>
        <div
          className="absolute left-[0] top-[-140px]"
          data-scroll-to="bodyContainer"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
