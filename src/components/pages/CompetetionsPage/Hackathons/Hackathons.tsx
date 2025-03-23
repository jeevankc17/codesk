import { FunctionComponent, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../../common/Navbar';
import Footer from '../../../common/Footer';
import CodewarTabs from '../../../common/CodewarTabs';
import { Hackathon } from '../../../../types/competitions';

const HACKATHONS_DATA: Hackathon[] = [
  {
    id: 1,
    title: "Nepal CodeWars 2024 Kid's Hackathon",
    hostedBy: "CoDesk Innovations",
    teamSize: 3,
    label: "Advanced",
    theme: "No Restrictions",
    status: "open",
    image: "/iconpng1@2x.png"
  },
  {
    id: 2,
    title: "Young Innovators Hackathon 2024",
    hostedBy: "Tech Kids Nepal",
    teamSize: 4,
    label: "Intermediate",
    theme: "Education Technology",
    status: "upcoming",
    image: "/iconpng2@2x.png"
  },
  {
    id: 3,
    title: "Junior Developers Meetup 2024",
    hostedBy: "Code Academy Nepal",
    teamSize: 2,
    label: "Beginner",
    theme: "Game Development",
    status: "completed",
    image: "/iconpng3@2x.png"
  }
];

const Hackathons: FunctionComponent = () => {
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

  const onLabelupcomingContainerClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='upcomingContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: 'start' });
    }
  }, []);

  const onApplyNowButtonClick = useCallback(() => {
    navigate('/commingsoonpage');
  }, [navigate]);

  const onCompletedContainerClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='completedContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: 'start' });
    }
  }, []);

  const renderHackathonsByStatus = (status: 'open' | 'upcoming' | 'completed') => {
    const hackathons = HACKATHONS_DATA.filter(h => h.status === status);
    
    return hackathons.map(hackathon => (
      <div key={hackathon.id} className="self-stretch bg-nero flex flex-row flex-wrap items-center justify-between p-[15px] text-center text-2xl text-aqua-deep font-body-large-600">
        <div className="flex-1 flex flex-row items-center justify-between md:flex-col">
          <img
            className="w-[186px] rounded h-[127px] overflow-hidden shrink-0 object-cover"
            alt={hackathon.title}
            src={hackathon.image}
          />
          <div className="flex-1 flex flex-col items-center justify-center gap-[10px] md:flex-[unset] md:self-stretch">
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-row items-start justify-start">
                <div className="flex-1 relative leading-[150%] font-semibold sm:text-xl">
                  {hackathon.title}
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[10px] text-right text-md text-chateau-green">
                <div className="flex-1 relative leading-[150%]">Hosted by:</div>
                <div className="flex-1 relative leading-[150%] text-left">
                  {hackathon.hostedBy}
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start text-right text-sm text-black1">
              <div className="self-stretch flex flex-row items-center justify-start">
                <div className="flex-1 relative leading-[120%] font-semibold">
                  Team Size:
                </div>
                <div className="flex-1 relative leading-[120%] font-semibold text-left">
                  {hackathon.teamSize}
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start">
                <div className="flex-1 relative leading-[120%] font-semibold">
                  Label:
                </div>
                <div className="flex-1 relative leading-[120%] font-semibold text-left">
                  {hackathon.label}
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start">
                <div className="flex-1 relative leading-[120%] font-semibold">
                  Theme:
                </div>
                <div className="flex-1 flex flex-row flex-wrap items-center justify-start text-left text-xs">
                  <div className="rounded-lg bg-dim-green flex flex-col items-start justify-start p-[5px]">
                    <div className="relative leading-[130%]">{hackathon.theme}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Action button based on status */}
        <button
          className={`cursor-pointer py-[9px] px-5 w-[230px] rounded box-border h-12 flex flex-row items-center justify-center border-[1px] border-solid md:w-full ${
            status === 'open'
              ? 'bg-aqua-deep text-nero border-nero'
              : status === 'upcoming'
              ? 'bg-chateau-green text-nero border-nero'
              : 'bg-nero text-aqua-deep border-aqua-deep'
          }`}
          onClick={onApplyNowButtonClick}
        >
          <div className="relative text-lg leading-[150%] font-semibold font-body-large-600 text-center inline-block max-h-[58px]">
            {status === 'open'
              ? 'Apply Now'
              : status === 'upcoming'
              ? 'Remind Me'
              : 'View Projects'}
          </div>
        </button>
      </div>
    ));
  };

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
            hackathonsTabBackgroundColor="#0063B0"
            projectsTabBackgroundColor="#fff"
          />
        </div>
      </div>
      <div className="h-[120px]"></div> {/* Spacer for fixed header */}
      <div className="self-stretch rounded-mini bg-footer-header flex flex-row items-center justify-between py-0 px-[15px] z-[2] lg:flex-col md:flex-col sm:pl-[5px] sm:pr-[5px] sm:box-border">
        <div className="flex-1 flex flex-col items-center justify-center p-[15px] gap-[34px] lg:order-[2] lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch">
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch relative leading-[120%] font-semibold text-3xl md:text-xl sm:text-lg">
              Our Hackathons
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start text-sm">
            <div className="self-stretch relative leading-[150%] text-md">
              These are organized coding events where kids can participate
              individually or in teams to work on coding challenges or projects
              within a specified time frame, usually ranging from a few hours to
              a few days. Hackathons foster creativity, collaboration, and
              problem-solving skills among kids while they develop projects
              using coding languages and tools.
            </div>
          </div>
          <button
            className="cursor-pointer py-[9px] px-5 bg-tomato self-stretch rounded box-border h-[38px] flex flex-row items-center justify-center border-[1px] border-solid border-nero"
            autoFocus={true}
            onClick={onScrollBannerButtonClick}
          >
            <div className="relative tracking-[-0.01em] leading-[20px] capitalize font-semibold font-inter text-nero text-center inline-block max-h-[58px] text-3xl md:text-xl sm:text-lg">
              View a Hackathons
            </div>
          </button>
        </div>
        <img
          className="flex-1 relative max-w-full overflow-hidden h-[500px] object-cover lg:order-[1] lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch sm:h-[300px]"
          alt=""
          src="/image-531@2x.png"
        />
      </div>
      <div className="self-stretch flex flex-row items-start justify-center gap-[20px] relative z-[1] lg:flex-col md:flex-col min-h-screen overflow-visible">
        <div className="w-[900px] flex flex-col items-start justify-start z-[1] lg:self-stretch lg:w-auto md:w-full sticky top-[77] h-fit">
          <div className="self-stretch flex flex-row items-center justify-center p-2.5 z-[2]">
            <div className="flex-1 relative leading-[120%] font-semibold sm:text-3xl">
              {`All coding competitions & hackathons`}
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start p-5 gap-[16px] z-[0] text-left text-xl font-segoe-ui">
            <div className="self-stretch flex flex-col items-center justify-center pt-[50px] px-0 pb-0 gap-[16px] text-aqua-deep">
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch relative leading-[30px] font-semibold">
                  Open
                </div>
              </div>
              {renderHackathonsByStatus('open')}
            </div>
            <div
              className="self-stretch flex flex-col items-start justify-start pt-[50px] px-0 pb-0 gap-[16px]"
              data-scroll-to="upcomingContainer"
            >
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch relative leading-[30px] font-semibold">
                  Upcoming
                </div>
              </div>
              {renderHackathonsByStatus('upcoming')}
            </div>
            <div
              className="self-stretch flex flex-col items-start justify-start pt-[50px] px-0 pb-0 gap-[16px]"
              data-scroll-to="completedContainer"
            >
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch relative leading-[30px] font-semibold">
                  Completed
                </div>
              </div>
              {renderHackathonsByStatus('completed')}
            </div>
          </div>
        </div>
        <div className="self-stretch flex-1 flex flex-row items-start justify-center z-[0] text-2xl md:hidden">
          <div className="w-[350px] rounded-3xs bg-nero flex flex-col items-center justify-start p-2.5 box-border gap-[15px] fixed top-[142px] right-5 z-[0]">
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

export default Hackathons;
