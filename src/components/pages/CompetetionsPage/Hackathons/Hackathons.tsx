import { FunctionComponent, useCallback, useState, useEffect } from 'react';
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
    image: "/hackathon-icons/coding-competition.svg"
  },
  {
    id: 2,
    title: "Code For Future 2024",
    hostedBy: "Tech Nepal",
    teamSize: 4,
    label: "Beginner",
    theme: "Education",
    status: "open",
    image: "/iconpng2@2x.png"
  },
  {
    id: 3,
    title: "Young Innovators Hackathon 2024",
    hostedBy: "Tech Kids Nepal",
    teamSize: 4,
    label: "Intermediate",
    theme: "Education Technology",
    status: "upcoming",
    image: "/iconpng3@2x.png"
  },
  {
    id: 4,
    title: "KidsCode Challenge 2024",
    hostedBy: "Code Academy Nepal",
    teamSize: 2,
    label: "Beginner",
    theme: "Game Development",
    status: "upcoming",
    image: "/iconpng4@2x.png"
  },
  {
    id: 5,
    title: "Junior Developers Meetup 2024",
    hostedBy: "Code Academy Nepal",
    teamSize: 2,
    label: "Beginner",
    theme: "Game Development",
    status: "completed",
    image: "/iconpng5@2x.png"
  },
  {
    id: 6,
    title: "Kids Innovation Challenge",
    hostedBy: "Tech Hub Nepal",
    teamSize: 3,
    label: "Advanced",
    theme: "AI/ML",
    status: "completed",
    image: "/iconpng6@2x.png"
  },
  {
    id: 7,
    title: "Web3 Kids Hackathon",
    hostedBy: "Blockchain Nepal",
    teamSize: 4,
    label: "Advanced",
    theme: "Blockchain",
    status: "open",
    image: "/hackathon-icons/blockchain.svg"
  },
  {
    id: 8,
    title: "AI for Kids",
    hostedBy: "Tech Academy",
    teamSize: 3,
    label: "Intermediate",
    theme: "Artificial Intelligence",
    status: "open",
    image: "/hackathon-icons/ai-robot.svg"
  },
  {
    id: 9,
    title: "Mobile App Challenge",
    hostedBy: "App Developers Nepal",
    teamSize: 4,
    label: "Intermediate",
    theme: "Mobile Development",
    status: "upcoming",
    image: "/hackathon-icons/mobile-dev.svg"
  },
  {
    id: 10,
    title: "Game Development Sprint",
    hostedBy: "Game Dev Nepal",
    teamSize: 3,
    label: "Beginner",
    theme: "Game Development",
    status: "upcoming",
    image: "/hackathon-icons/game-dev.svg"
  },
  {
    id: 11,
    title: "IoT Innovation Challenge",
    hostedBy: "IoT Nepal",
    teamSize: 4,
    label: "Advanced",
    theme: "Internet of Things",
    status: "completed",
    image: "/hackathon-icons/iot.svg"
  },
  {
    id: 12,
    title: "Data Science for Kids",
    hostedBy: "Data Nepal",
    teamSize: 3,
    label: "Intermediate",
    theme: "Data Science",
    status: "completed",
    image: "/hackathon-icons/data-science.svg"
  }
];

// Add this type for status tabs
type HackathonStatus = 'open' | 'upcoming' | 'completed';

const Hackathons: FunctionComponent = () => {
  const navigate = useNavigate();
  // Add state for active status
  const [activeStatus, setActiveStatus] = useState<HackathonStatus>('open');
  // Add this for scroll handling
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const bannerElement = document.getElementById('hackathon-banner');
      if (bannerElement) {
        const bannerBottom = bannerElement.getBoundingClientRect().bottom;
        // Set isScrolled to false when banner is visible
        setIsScrolled(bannerBottom < 142); // 142px is header height
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const renderHackathonSection = (status: HackathonStatus, title: string) => {
    const hackathons = HACKATHONS_DATA.filter(h => h.status === status).slice(0, 10);
    
    return (
      <div className="self-stretch flex flex-col items-start justify-start mt-3 gap-[16px]">
        <div className="self-stretch relative leading-[30px] font-semibold">
          {title}
        </div>
        <div className="grid grid-cols-1 gap-4 w-full">
          {hackathons.map(hackathon => (
            <div 
              key={hackathon.id} 
              className="bg-nero rounded-lg shadow-sm border border-gray-100/10 hover:shadow-md transition-shadow duration-300 overflow-hidden w-full"
            >
              <div className="flex flex-row flex-wrap items-center justify-between p-[15px] sm:p-3 text-center text-2xl text-aqua-deep font-body-large-600 w-full">
                <div className="flex-1 flex flex-row items-center justify-between gap-6 md:flex-col sm:gap-3">
                  <img
                    className="w-[186px] rounded-lg h-[127px] overflow-hidden shrink-0 object-cover shadow-sm md:w-full sm:h-[100px]"
                    alt={hackathon.title}
                    src={hackathon.image}
                  />
                  <div className="flex-1 flex flex-col items-start justify-center gap-[10px] md:flex-[unset] md:self-stretch sm:gap-2">
                    <div className="self-stretch flex flex-col items-start justify-start gap-2 sm:gap-1">
                      <div className="self-stretch flex flex-row items-start justify-start">
                        <div className="flex-1 relative leading-[150%] font-semibold sm:text-lg">
                          {hackathon.title}
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start gap-[10px] text-right text-md text-chateau-green sm:text-sm">
                        <div className="flex-1 relative leading-[150%]">Hosted by:</div>
                        <div className="flex-1 relative leading-[150%] text-left">
                          {hackathon.hostedBy}
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start text-right text-sm text-black1 gap-2 sm:text-xs sm:gap-1">
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
                          <div className="rounded-lg bg-dim-green/10 flex flex-col items-start justify-start p-[5px]">
                            <div className="relative leading-[130%]">{hackathon.theme}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className={`cursor-pointer py-[9px] px-5 w-[230px] rounded-lg box-border h-12 flex flex-row items-center justify-center border-[1px] border-solid md:w-full sm:py-2 sm:h-10 sm:text-sm ${
                    status === 'open'
                      ? 'bg-aqua-deep text-nero border-nero'
                      : status === 'upcoming'
                      ? 'bg-chateau-green text-nero border-nero'
                      : 'bg-nero text-aqua-deep border-aqua-deep'
                  }`}
                  onClick={onApplyNowButtonClick}
                >
                  <div className="relative text-lg leading-[150%] font-semibold font-body-large-600 text-center inline-block max-h-[58px] sm:text-sm">
                    {status === 'open'
                      ? 'Apply Now'
                      : status === 'upcoming'
                      ? 'Remind Me'
                      : 'View Projects'}
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full relative bg-nero flex flex-col items-start justify-center p-5 box-border gap-[20px] text-left text-4xl text-nero font-body-large-600 sm:py-[30px] sm:px-2 sm:box-border overflow-x-hidden">
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
            buildersTabBackgroundColor="#fff"
            hackathonsTabBackgroundColor="#0063B0"
            projectsTabBackgroundColor="#fff"
          />
        </div>
      </div>
      <div className="h-[120px]"></div>

      <div 
        id="hackathon-banner"
        className="self-stretch rounded-mini bg-footer-header flex flex-row items-center justify-between py-0 px-[15px] z-[99] lg:flex-col md:flex-col sm:pl-[5px] sm:pr-[5px] sm:box-border"
      >
        <div className="flex-1 flex flex-col items-center justify-center p-[15px] gap-[34px] lg:order-[2] lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch">
          <div className="self-stretch flex flex-col items-center justify-start">
            <div className="self-stretch relative leading-[120%] font-semibold text-3xl md:text-xl sm:text-lg text-center">
              Our Hackathons
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-start text-sm">
            <div className="self-stretch relative leading-[150%] text-md text-center">
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

      <div 
        id="status-tabs"
        className={`transition-all duration-300 w-full ${
          isScrolled 
            ? 'fixed top-[142px] left-0 right-0 z-[99]' 
            : 'relative'
        }`}
      >
        <div className="max-w-[1240px] mx-auto px-2">
          <div className="w-full max-w-[900px] bg-nero py-2.5 rounded-lg shadow-sm overflow-x-hidden">
            <div className="flex flex-row items-center gap-3 sm:gap-2 pl-2">
              <button
                className={`text-base font-semibold transition-colors relative px-5 py-[9px] rounded sm:px-3 sm:py-2 sm:text-sm ${
                  activeStatus === 'open'
                    ? 'bg-aqua-deep text-white'
                    : 'text-gray-600 hover:text-aqua-deep border border-aqua-deep'
                }`}
                onClick={() => setActiveStatus('open')}
              >
                Ongoing
              </button>
              <button
                className={`text-base font-semibold transition-colors relative px-5 py-[9px] rounded sm:px-3 sm:py-2 sm:text-sm ${
                  activeStatus === 'upcoming'
                    ? 'bg-aqua-deep text-white'
                    : 'text-gray-600 hover:text-aqua-deep border border-aqua-deep'
                }`}
                onClick={() => setActiveStatus('upcoming')}
              >
                Upcoming
              </button>
              <button
                className={`text-base font-semibold transition-colors relative px-5 py-[9px] rounded sm:px-3 sm:py-2 sm:text-sm ${
                  activeStatus === 'completed'
                    ? 'bg-aqua-deep text-white'
                    : 'text-gray-600 hover:text-aqua-deep border border-aqua-deep'
                }`}
                onClick={() => setActiveStatus('completed')}
              >
                Completed
              </button>
            </div>
          </div>
        </div>
      </div>

      {isScrolled && <div className="h-[56px]"></div>}

      <div className="self-stretch flex flex-row items-start justify-center gap-[20px] relative z-[0] lg:flex-col md:flex-col mt-[5px] w-full overflow-x-hidden">
        <div className="w-full max-w-[900px] flex flex-col items-start justify-start z-[1]">
          <div className="self-stretch flex flex-col items-start justify-start p-2 gap-[10px] z-[0] text-left text-xl font-segoe-ui">
            {activeStatus === 'open' && renderHackathonSection('open', 'Open Hackathons')}
            {activeStatus === 'upcoming' && renderHackathonSection('upcoming', 'Upcoming Hackathons')}
            {activeStatus === 'completed' && renderHackathonSection('completed', 'Completed Hackathons')}
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
      </div>
      <Footer />
    </div>
  );
};

export default Hackathons;