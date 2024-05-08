import { FunctionComponent, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import DrawerMenus from "../components/DrawerMenus";
import PortalDrawer from "../components/PortalDrawer";
import CodewarTabs from "../components/CodewarTabs";
import Footer from "../components/Footer";

const OrganizersCompetetionsPage: FunctionComponent = () => {
  const navigate = useNavigate();
  const [isDrawerMenusOpen, setDrawerMenusOpen] = useState(false);

  const onHackathonsTabClick = useCallback(() => {
    navigate("/hackathonscompetetionspage");
  }, [navigate]);

  const onProjectsTabClick = useCallback(() => {
    navigate("/projectscompetetionspage");
  }, [navigate]);

  const onBuildersTabClick = useCallback(() => {
    navigate("/builderscompetetionspage");
  }, [navigate]);

  const onOrganizersTabContainerClick = useCallback(() => {
    navigate("/organizerscompetetionspage");
  }, [navigate]);

  const onLogoClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onCoursesClick = useCallback(() => {
    navigate("/coursepage");
  }, [navigate]);

  const onQuizzesClick = useCallback(() => {
    navigate("/quizpage");
  }, [navigate]);

  const onCompetetionsClick = useCallback(() => {
    navigate("/competetionspage");
  }, [navigate]);

  const onAboutUsClick = useCallback(() => {
    navigate("/aboutuspage");
  }, [navigate]);

  const openDrawerMenus = useCallback(() => {
    setDrawerMenusOpen(true);
  }, []);

  const closeDrawerMenus = useCallback(() => {
    setDrawerMenusOpen(false);
  }, []);

  const onScrollBannerButtonClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='codewarTabsContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onTakeAQuizNowButtonClick = useCallback(() => {
    navigate("/quizpage");
  }, [navigate]);

  return (
    <>
      <div className="w-full relative bg-nero flex flex-col items-start justify-center p-5 box-border gap-[20px] text-left text-29xl text-nero font-body-large-600 sm:py-[30px] sm:px-[5px] sm:box-border">
        <div className="self-stretch h-[77px] flex flex-row items-start justify-start z-[4]">
          <header className="self-stretch w-full rounded bg-nero flex flex-row items-center justify-center py-[22px] px-20 box-border sticky top-[0] [background:white] lg:pl-10 lg:pr-10 lg:box-border md:pl-6 md:pr-6 md:box-border">
            <div className="flex-1 flex flex-row items-center justify-between">
              <button
                className="cursor-pointer [border:none] p-2.5 bg-[transparent] flex flex-row items-center justify-center"
                onClick={onLogoClick}
              >
                <div className="relative text-13xl tracking-[-0.01em] leading-[40px] font-semibold font-inter text-dodger-blue text-left">
                  CoDeskLab
                </div>
              </button>
              <div className="flex flex-row items-center justify-end gap-[36px] sm:flex">
                <div className="bg-nero flex flex-row items-center justify-end gap-[30px] md:hidden">
                  <button
                    className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-end"
                    onClick={onCoursesClick}
                  >
                    <div className="relative text-sm leading-[150%] font-body-large-600 text-black1 text-left">
                      Courses
                    </div>
                  </button>
                  <button
                    className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-end"
                    onClick={onQuizzesClick}
                  >
                    <div className="relative text-sm leading-[150%] font-body-large-600 text-black1 text-left">
                      Quizzes
                    </div>
                  </button>
                  <button
                    className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-end"
                    onClick={onCompetetionsClick}
                  >
                    <div className="relative text-sm leading-[150%] font-body-large-600 text-black1 text-left">
                      Competetions
                    </div>
                  </button>
                  <button
                    className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-end"
                    onClick={onAboutUsClick}
                  >
                    <div className="relative text-sm leading-[150%] font-body-large-600 text-black1 text-left">
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
          </header>
        </div>
        <div className="self-stretch rounded-mini bg-footer-header flex flex-row items-center justify-between py-0 px-[15px] z-[3] lg:flex-col md:flex-col sm:pl-[5px] sm:pr-[5px] sm:box-border">
          <div className="flex-1 flex flex-col items-center justify-center p-[15px] gap-[34px] lg:order-[2] lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch">
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="self-stretch relative leading-[120%] font-semibold sm:text-21xl">
                Our Organizers
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start text-base">
              <div className="self-stretch relative leading-[150%]">
                Organizations are entities such as schools, coding clubs,
                non-profits, or companies that organize hackathons, provide
                coding resources, or support the coding community for kids. They
                may host hackathons on the platform, offer coding workshops or
                courses, and provide opportunities for kids to engage with
                coding education and technology initiatives.
              </div>
            </div>
            <button
              className="cursor-pointer py-[9px] px-5 bg-tomato self-stretch rounded box-border h-[38px] flex flex-row items-center justify-center border-[1px] border-solid border-nero"
              autoFocus={true}
              onClick={onScrollBannerButtonClick}
            >
              <div className="relative text-lg tracking-[-0.01em] leading-[20px] capitalize font-semibold font-inter text-nero text-center inline-block max-h-[58px]">
                View a Organizers
              </div>
            </button>
          </div>
          <img
            className="flex-1 relative max-w-full overflow-hidden h-[500px] object-cover lg:order-[1] lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch"
            alt=""
            src="/image-53@2x.png"
          />
        </div>
        <CodewarTabs
          onHackathonsTabClick={onHackathonsTabClick}
          onProjectsTabClick={onProjectsTabClick}
          onBuildersTabClick={onBuildersTabClick}
          onOrganizersTabContainerClick={onOrganizersTabContainerClick}
          hackathonsTabBackgroundColor="#fff"
          hackathonsTextColor="#ff5a43"
          organizersTabBackgroundColor="4AAF50"
          buildersTabBackgroundColor="#fff"
          buildersTextColor="#ff5a43"
          organizersTextColor="FFFFFF"
          projectsTextColor="#ff5a43"
          projectsTabBackgroundColor="#fff"
        />
        <div className="self-stretch flex flex-row items-start justify-center gap-[20px] z-[1] text-base text-black1 font-inter lg:flex-col md:flex-col">
          <div className="w-[1000px] flex flex-col items-start justify-start gap-[20px] z-[1] lg:self-stretch lg:w-auto md:w-full">
            <div className="self-stretch flex flex-row items-center justify-center p-2.5 z-[2] text-center text-15xl-6">
              <b className="flex-1 relative leading-[42px]">
                All organizers who organizes the hackathons and helps to shape
                the future of childs
              </b>
            </div>
            <div className="self-stretch rounded-2xl bg-whitesmoke-100 flex flex-row flex-wrap items-center justify-start py-0 px-10 gap-[0px_16px] z-[1] text-darkslategray-200 font-body-large-600 border-[2px] border-solid border-whitesmoke-300">
              <div className="w-[168px] h-8 flex flex-col items-center justify-center">
                <div className="self-stretch relative leading-[150%]">
                  Sort organizers by
                </div>
              </div>
              <button
                className="cursor-pointer py-[9px] px-5 bg-dim-green flex-1 rounded flex flex-row items-center justify-center border-[1px] border-solid border-black1 md:w-full"
                autoFocus={true}
              >
                <div className="flex-1 relative text-lg leading-[150%] font-body-large-600 text-black1 text-center inline-block max-h-[58px]">
                  Most Hackathons Organized
                </div>
              </button>
            </div>
            <div className="self-stretch bg-nero flex flex-row flex-wrap items-center justify-start z-[0] text-darkgray font-nunito-sans">
              <div className="rounded-tl-lg rounded-tr-none rounded-br-none rounded-bl-lg bg-whitesmoke-300 flex flex-row items-start justify-start p-4">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <b className="relative leading-[24px]">#</b>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start text-5xl">
                  <div className="relative leading-[28px] font-extrabold">
                    1
                  </div>
                </div>
              </div>
              <div className="flex-1 rounded bg-nero flex flex-row flex-wrap items-center justify-start gap-[10px] text-5xl text-darkslategray-200 font-space-mono">
                <div className="flex-1 rounded-2xl bg-nero flex flex-row items-center justify-start gap-[10px] text-black1 font-body-large-600">
                  <img
                    className="w-[100px] rounded h-[100px] overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/iconpng1@2x.png"
                  />
                  <div className="flex-1 relative leading-[150%] font-semibold">
                    CoDesk Innovations
                  </div>
                </div>
                <div className="w-[200px] rounded-2xl bg-nero flex flex-row items-center justify-start p-2 box-border gap-[5px]">
                  <div className="rounded-xl bg-footer-header flex flex-row items-start justify-start p-5">
                    <img className="w-6 relative h-6" alt="" src="/svg1.svg" />
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start">
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <b className="self-stretch relative tracking-[-0.12px] leading-[28px]">
                        10
                      </b>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start text-xs text-darkgray font-body-large-600">
                      <div className="self-stretch relative leading-[130%]">
                        hackathons
                      </div>
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
                        250
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
                        1500$
                      </b>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start text-xs text-darkgray font-body-large-600">
                      <div className="self-stretch relative leading-[130%]">
                        Prize worth
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex-1 flex flex-row items-start justify-center z-[0] text-5xl font-body-large-600 lg:w-full lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch">
            <div className="w-[350px] rounded-3xs bg-nero flex flex-col items-center justify-start p-2.5 box-border gap-[15px] sticky top-[77] lg:flex md:flex">
              <div className="self-stretch relative leading-[150%] font-semibold text-transparent !bg-clip-text [background:linear-gradient(16.28deg,_#c53232,_#7c36dd)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">{`Play while you learn & win amazing prizes`}</div>
              <img
                className="self-stretch relative max-w-full overflow-hidden h-[213px] shrink-0 object-cover"
                alt=""
                src="/image@2x.png"
              />
              <div className="self-stretch bg-nero box-border overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[5px] min-h-[52.5px] text-base border-[1px] border-solid border-nero">
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
                  onClick={onTakeAQuizNowButtonClick}
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

export default OrganizersCompetetionsPage;
