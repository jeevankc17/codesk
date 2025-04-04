import { FunctionComponent, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../../common/Navbar';
import Footer from '../../../common/Footer';
import CodewarTabs from '../../../common/CodewarTabs';
import { Builder } from '../../../../types/competitions';

const BUILDERS_DATA: Builder[] = [
  {
    id: 1,
    name: "Nisha KC",
    avatar: "/image22@2x.png",
    hackathonsAttended: 128,
    projectsCompleted: 32,
    prizesWon: 6
  },
  {
    id: 2,
    name: "Aarav Sharma",
    avatar: "/image23@2x.png",
    hackathonsAttended: 98,
    projectsCompleted: 25,
    prizesWon: 4
  },
  {
    id: 3,
    name: "Priya Patel",
    avatar: "/image24@2x.png",
    hackathonsAttended: 85,
    projectsCompleted: 20,
    prizesWon: 3
  }
];

const Builders: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLogoClick = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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

  return (
    <div className="w-full relative bg-nero flex flex-col items-start justify-center p-5 box-border gap-[20px] text-left text-4xl text-nero font-body-large-600 sm:py-[30px] sm:px-[5px] sm:box-border">
      <div className="fixed top-0 left-0 right-0 z-[100] bg-nero">
        <div className="px-5">
          <Navbar
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
            buildersTabBackgroundColor="#0063B0"
            hackathonsTabBackgroundColor="#fff"
            projectsTabBackgroundColor="#fff"
          />
        </div>
      </div>
      <div className="h-[120px]"></div>
      <div className="self-stretch rounded-mini bg-footer-header flex flex-row items-center justify-between py-0 px-[15px] z-[2] lg:flex-col md:flex-col sm:pl-[5px] sm:pr-[5px] sm:box-border">
        <div className="flex-1 flex flex-col items-center justify-center p-[15px] gap-[34px] lg:order-[2] lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch">
          <div className="self-stretch flex flex-col items-center justify-start">
            <div className="self-stretch relative leading-[120%] font-semibold text-3xl md:text-xl sm:text-lg text-center">
              Our Builders
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-start text-md">
            <div className="self-stretch relative leading-[150%] text-center">
              Builders are the young coders or participants who engage in
              creating projects either during hackathons or independently. They
              use their coding skills and creativity to build innovative
              solutions to real-world problems or to express their ideas through
              technology. Builders can collaborate with others, explore coding
              resources, and showcase their projects to the community.
            </div>
          </div>
          <button
            className="cursor-pointer py-[9px] px-5 bg-tomato self-stretch rounded box-border h-[38px] flex flex-row items-center justify-center border-[1px] border-solid border-nero"
            autoFocus={true}
            onClick={onScrollBannerButtonClick}
          >
            <div className="relative text-lg tracking-[-0.01em] leading-[20px] capitalize font-semibold font-inter text-nero text-center inline-block max-h-[58px]">
              View a Builders
            </div>
          </button>
        </div>
        <img
          className="flex-1 relative max-w-full overflow-hidden h-[500px] object-cover lg:order-[1] lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch sm:h-[300px]"
          alt=""
          src="/image-531@2x.png"
        />
      </div>
      <div className="self-stretch flex flex-row items-start justify-center gap-[20px] relative z-[1] text-md text-black1 lg:flex-col md:flex-col min-h-screen overflow-visible">
        <div className="w-[1000px] flex flex-col items-start justify-start gap-[20px] z-[1] lg:self-stretch lg:w-auto md:w-full sticky top-[77] h-fit">
          <div className="self-stretch flex flex-row items-center justify-center p-2.5 z-[2] text-center text-sm">
            <div className="flex-1 relative leading-[120%] font-semibold sm:text-3xl">
              All Builders who take part in hackathons and build the projects.
            </div>
          </div>
          <div className="self-stretch rounded-2xl bg-whitesmoke-100 flex flex-row flex-wrap items-center justify-start py-0 px-[50px] gap-[0px_16px] z-[1] text-darkslategray-200 border-[2px] border-solid border-whitesmoke-300 sm:pl-0 sm:pr-0 sm:box-border">
            <div className="w-[143px] h-8 flex flex-col items-center justify-center">
              <div className="relative leading-[150%]">Sort builders by</div>
            </div>
            <button
              className="cursor-pointer py-[9px] px-5 bg-dim-green flex-1 rounded flex flex-row items-center justify-center border-[1px] border-solid border-black1 md:w-full sm:pl-0 sm:pr-0 sm:box-border"
              autoFocus={true}
            >
              <div className="flex-1 relative text-lg leading-[150%] font-body-large-600 text-black1 text-center inline-block max-h-[58px] sm:text-xs">
                Most Hackathons Attended
              </div>
            </button>
          </div>
          <div className="self-stretch bg-nero flex flex-col gap-[20px]">
            {BUILDERS_DATA.map((builder, index) => (
              <div key={builder.id} className="self-stretch bg-nero flex flex-row flex-wrap items-center justify-start z-[0] text-darkgray font-nunito-sans">
                <div className="rounded-tl-lg rounded-tr-none rounded-br-none rounded-bl-lg bg-whitesmoke-300 flex flex-row items-start justify-start p-4">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <b className="relative leading-[24px]">#</b>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start text-2xl">
                    <div className="relative leading-[28px] font-extrabold">{index + 1}</div>
                  </div>
                </div>
                <div className="flex-1 rounded bg-nero flex flex-row flex-wrap items-center justify-start gap-[10px] text-2xl text-darkslategray-200 font-space-mono">
                  <div className="flex-1 rounded-2xl bg-nero flex flex-row items-center justify-start gap-[10px] text-black1 font-body-large-600">
                    <img
                      className="w-[100px] relative rounded-100xl h-[100px] object-cover"
                      alt={builder.name}
                      src={builder.avatar}
                    />
                    <div className="flex-1 relative leading-[150%] font-semibold">
                      {builder.name}
                    </div>
                  </div>
                  <div className="w-[200px] rounded-2xl bg-nero flex flex-row items-center justify-start p-2 box-border gap-[5px]">
                    <div className="rounded-xl bg-footer-header flex flex-row items-start justify-start p-5">
                      <img className="w-6 relative h-6" alt="" src="/svg1.svg" />
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start">
                      <b className="self-stretch relative tracking-[-0.12px] leading-[28px]">
                        {builder.hackathonsAttended}
                      </b>
                      <div className="self-stretch relative leading-[130%] text-xs">
                        hackathons
                      </div>
                    </div>
                  </div>
                  <div className="w-[200px] rounded-2xl bg-nero flex flex-row items-center justify-start p-2 box-border gap-[5px]">
                    <div className="rounded-xl bg-chateau-green flex flex-row items-start justify-start p-5">
                      <img className="w-6 relative h-6" alt="" src="/svg2.svg" />
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start">
                      <div className="self-stretch flex flex-col items-start justify-start">
                        <b className="self-stretch relative tracking-[-0.12px] leading-[28px]">
                          {builder.projectsCompleted}
                        </b>
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start text-xs text-darkgray font-body-large-600">
                        <div className="self-stretch relative leading-[130%]">
                          Projects
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[200px] rounded-2xl bg-nero flex flex-row items-center justify-start p-2 box-border gap-[5px]">
                    <div className="rounded-xl bg-aqua-deep flex flex-row items-start justify-start p-5">
                      <img className="w-6 relative h-6" alt="" src="/svg3.svg" />
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start">
                      <div className="self-stretch flex flex-col items-start justify-start">
                        <b className="self-stretch relative tracking-[-0.12px] leading-[28px]">
                          {builder.prizesWon}
                        </b>
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start text-xs text-darkgray font-body-large-600">
                        <div className="self-stretch relative leading-[130%]">
                          Prizes
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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

export default Builders;