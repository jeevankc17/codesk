import { FunctionComponent, useState, useCallback } from "react";
import DoneModal from "../components/DoneModal";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const PartnershipPage: FunctionComponent = () => {
  const [isDoneModalPopupOpen, setDoneModalPopupOpen] = useState(false);
  const navigate = useNavigate();

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

  const onScrollBannerButtonClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='contactUsContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const openDoneModalPopup = useCallback(() => {
    setDoneModalPopupOpen(true);
  }, []);

  const closeDoneModalPopup = useCallback(() => {
    setDoneModalPopupOpen(false);
  }, []);

  return (
    <>
      <div className="w-full relative bg-nero flex flex-col items-center justify-start p-5 box-border gap-[20px] text-center text-29xl text-black font-body-xl-600 sm:pl-[5px] sm:pr-[5px] sm:box-border">
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
        <div className="self-stretch rounded-mini bg-footer-header flex flex-row items-center justify-start py-0 px-[15px] gap-[15px] z-[3] text-left text-nero lg:flex-col md:flex-col sm:pl-[5px] sm:pr-[5px] sm:box-border">
          <div className="flex-1 flex flex-col items-center justify-center p-[15px] gap-[34px] lg:order-[2] lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch">
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="self-stretch relative leading-[120%] font-semibold sm:text-13xl">
                CoDesk - School Partnerships
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start text-base">
              <div className="self-stretch relative leading-[150%]">
                We welcome schools to partner with us and introduce coding to
                students through fun activities.
              </div>
            </div>
            <button
              className="cursor-pointer py-[9px] px-5 bg-tomato self-stretch rounded box-border h-[38px] flex flex-row items-center justify-center border-[1px] border-solid border-nero"
              autoFocus={true}
              onClick={onScrollBannerButtonClick}
            >
              <div className="relative text-lg leading-[150%] font-semibold font-body-xl-600 text-nero text-center inline-block max-h-[58px]">
                View Contact Us Form
              </div>
            </button>
          </div>
          <img
            className="h-[500px] flex-1 relative max-w-full overflow-hidden object-contain lg:order-[1] lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch sm:h-[300px]"
            alt=""
            src="/image-551@2x.png"
          />
        </div>
        <div className="self-stretch bg-nero flex flex-col items-center justify-center gap-[30px] z-[2] text-17xl">
          <div className="self-stretch bg-nero flex flex-col items-center justify-center py-0 px-[5px] gap-[5px]">
            <div className="self-stretch flex flex-row items-center justify-center p-2.5">
              <div className="flex-1 relative leading-[120%] font-semibold">
                Benefits Of Partnering With Us
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-center p-2.5 text-sm">
              <div className="flex-1 relative leading-[150%]">
                Make your school stand out by partnering with Nepal's #1 coding
                platform for school kids
              </div>
            </div>
          </div>
          <div className="self-stretch bg-nero flex flex-col items-start justify-start p-[15px] gap-[40px] text-left sm:pl-[5px] sm:pr-[5px] sm:box-border">
            <div className="self-stretch bg-nero flex flex-row items-center justify-between lg:flex-col md:flex-col">
              <div className="flex-1 bg-nero flex flex-row items-center justify-center p-2.5 lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch">
                <img
                  className="w-[380px] relative h-[325px] overflow-hidden shrink-0"
                  alt=""
                  src="/reason5svg1.svg"
                />
              </div>
              <div className="flex-1 flex flex-col items-center justify-center py-0 px-[70px] lg:flex-[unset] lg:self-stretch md:pl-2.5 md:pr-2.5 md:box-border md:flex-[unset] md:self-stretch">
                <div className="self-stretch flex flex-col items-start justify-start w-full">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch relative leading-[120%] font-semibold">
                      For School
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-center justify-center gap-[9px] text-lg text-aqua-deep">
                    <div className="self-stretch flex flex-row items-start justify-center gap-[5px] text-black">
                      <img
                        className="w-8 relative h-8 overflow-hidden shrink-0"
                        alt=""
                        src="/fire.svg"
                      />
                      <div className="flex-1 relative leading-[150%] font-semibold">
                        <span>{`Customised `}</span>
                        <span className="text-aqua-deep">
                          Coding Curriculum designed
                        </span>
                        <span> for each school.</span>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-center gap-[5px]">
                      <img
                        className="w-8 relative h-8 overflow-hidden shrink-0"
                        alt=""
                        src="/fire.svg"
                      />
                      <div className="flex-1 relative leading-[150%] font-semibold">
                        <span>
                          Computer science graduate teachers from CoDesk
                        </span>
                        <span className="text-black">
                          {" "}
                          with vast industry and academic experience available.
                        </span>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-center gap-[5px]">
                      <img
                        className="w-8 relative h-8 overflow-hidden shrink-0"
                        alt=""
                        src="/fire.svg"
                      />
                      <div className="flex-1 relative leading-[150%] font-semibold">
                        <span>Master dashboard</span>
                        <span className="text-black">
                          {" "}
                          to track the performance of students and school
                          teachers.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch bg-nero flex flex-row items-center justify-between lg:flex-col md:flex-col">
              <div className="flex-1 flex flex-col items-center justify-center py-0 px-[70px] lg:order-[2] lg:flex-[unset] lg:self-stretch md:pl-2.5 md:pr-2.5 md:box-border md:flex-[unset] md:self-stretch">
                <div className="self-stretch flex flex-col items-start justify-start w-full">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch relative leading-[120%] font-semibold">
                      For Teachers
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-center justify-center gap-[9px] text-lg text-aqua-deep">
                    <div className="self-stretch flex flex-row items-start justify-center gap-[5px]">
                      <img
                        className="w-8 relative h-8 overflow-hidden shrink-0"
                        alt=""
                        src="/fire.svg"
                      />
                      <div className="flex-1 relative leading-[150%] font-semibold">
                        <span>Training</span>
                        <span className="text-black">{` provided to school teachers by `}</span>
                        <span>{`CoDesk Knowledge Experts `}</span>
                        <span className="text-black">
                          on curriculum, platforms, and programming languages
                          suitable for all grade groups.
                        </span>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-center gap-[5px]">
                      <img
                        className="w-8 relative h-8 overflow-hidden shrink-0"
                        alt=""
                        src="/fire.svg"
                      />
                      <div className="flex-1 relative leading-[30px] font-semibold">
                        <span>Custom dashboard</span>
                        <span className="text-black">
                          {" "}
                          to track and review the performance of each student
                        </span>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-center gap-[5px]">
                      <img
                        className="w-8 relative h-8 overflow-hidden shrink-0"
                        alt=""
                        src="/fire.svg"
                      />
                      <div className="flex-1 relative leading-[150%] font-semibold">
                        <span>Speakership / Advocate</span>
                        <span className="text-black">
                          {" "}
                          opportunity at CoDesk Events.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 bg-nero flex flex-row items-center justify-center p-2.5 lg:order-[1] lg:flex-[unset] lg:self-stretch md:order-[1] md:flex-[unset] md:self-stretch">
                <img
                  className="w-[380px] relative h-[348px] overflow-hidden shrink-0"
                  alt=""
                  src="/reason2svg.svg"
                />
              </div>
            </div>
            <div className="self-stretch bg-nero flex flex-row items-center justify-between lg:flex-col md:flex-col">
              <div className="flex-1 bg-nero flex flex-row items-center justify-center p-2.5 lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch">
                <img
                  className="w-[380px] relative h-[350px] overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/reason1svg@2x.png"
                />
              </div>
              <div className="flex-1 flex flex-col items-center justify-center py-0 px-[70px] lg:flex-[unset] lg:self-stretch md:pl-2.5 md:pr-2.5 md:box-border md:flex-[unset] md:self-stretch">
                <div className="self-stretch flex flex-col items-start justify-start w-full">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch relative leading-[120%] font-semibold">
                      For Students
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-center justify-center gap-[9px] text-lg">
                    <div className="self-stretch flex flex-row items-center justify-center gap-[5px] text-aqua-deep">
                      <img
                        className="w-8 relative h-8 overflow-hidden shrink-0"
                        alt=""
                        src="/fire.svg"
                      />
                      <div className="flex-1 relative leading-[150%] font-semibold">
                        <span>Lifetime access</span>
                        <span className="text-black">{` to a personal dashboard with `}</span>
                        <span>lessons, projects, coding quizzes,</span>
                        <span className="text-black">{` and `}</span>
                        <span>certificates</span>
                        <span className="text-black">.</span>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                      <img
                        className="w-8 relative h-8 overflow-hidden shrink-0"
                        alt=""
                        src="/fire.svg"
                      />
                      <div className="flex-1 relative leading-[30px] font-semibold">
                        Regular Parent-Teacher Meetings and doubt sessions.
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                      <img
                        className="w-8 relative h-8 overflow-hidden shrink-0"
                        alt=""
                        src="/fire.svg"
                      />
                      <div className="flex-1 relative leading-[150%] font-semibold">
                        <span>{`Free participation in `}</span>
                        <span className="text-aqua-deep">{`National and Global coding competitions and hackathons, `}</span>
                        <span>hosted with CoDesk.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch bg-nero flex flex-col items-center justify-center gap-[30px] relative z-[1] text-[34.6px] font-segoe-ui">
          <div className="self-stretch bg-nero flex flex-col items-center justify-center py-0 px-[5px] gap-[5px]">
            <div className="self-stretch flex flex-row items-center justify-center p-2.5">
              <b className="flex-1 relative [text-decoration:underline] leading-[45px]">
                Contact Us
              </b>
            </div>
            <div className="self-stretch flex flex-row items-center justify-center p-2.5 text-[15.9px]">
              <div className="flex-1 relative leading-[24px]">
                Feel free to reach out to us
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-center justify-center p-5">
            <form className="m-0 w-[550px] shadow-[0px_0px_24px_rgba(0,_0,_0,_0.03)] rounded-xl bg-nero box-border flex flex-col items-start justify-start py-7 px-[30px] gap-[17px] border-[1px] border-solid border-whitesmoke-200 md:w-[350px]">
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch relative text-lg leading-[150%] font-semibold font-body-xl-600 text-slategray text-left">
                  Fill in your details to join the party!
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
                <input
                  className="[outline:none] font-body-xl-600 text-base bg-[transparent] self-stretch rounded flex flex-col items-start justify-start py-4 px-3 text-gray1-300 border-[1px] border-solid border-gray1-400"
                  placeholder="Your name"
                  type="text"
                />
                <input
                  className="[outline:none] font-body-xl-600 text-base bg-[transparent] self-stretch rounded flex flex-col items-start justify-start py-4 px-3 text-gray1-300 border-[1px] border-solid border-gray1-400"
                  placeholder="Email address"
                  type="text"
                />
                <input
                  className="[outline:none] font-body-xl-600 text-base bg-[transparent] self-stretch rounded flex flex-col items-start justify-start py-4 px-3 text-gray1-300 border-[1px] border-solid border-gray1-400"
                  placeholder="Phone Number"
                  type="text"
                />
                <input
                  className="[outline:none] font-body-xl-600 text-base bg-[transparent] self-stretch rounded flex flex-col items-start justify-start py-4 px-3 text-gray1-300 border-[1px] border-solid border-gray1-400"
                  placeholder="School Name"
                  type="text"
                />
                <textarea
                  className="bg-[transparent] font-body-xl-600 text-base [outline:none] self-stretch rounded flex flex-col items-start justify-start py-4 px-3 text-gray1-300 border-[1px] border-solid border-gray1-400"
                  placeholder="Leave Message"
                />
              </div>
              <button
                className="cursor-pointer py-[9px] px-5 bg-tomato rounded flex flex-row items-center justify-center border-[1px] border-solid border-nero"
                onClick={openDoneModalPopup}
              >
                <div className="relative text-lg leading-[150%] font-semibold font-body-xl-600 text-nero text-center inline-block max-h-[58px]">
                  Subimt
                </div>
              </button>
            </form>
          </div>
          <div
            className="absolute left-[0] top-[-70px]"
            data-scroll-to="contactUsContainer"
          />
        </div>
        <div className="self-stretch flex flex-col items-center justify-start z-[0] text-13xl">
          <img
            className="self-stretch relative max-w-full overflow-hidden h-[108px] shrink-0 object-cover"
            alt=""
            src="/subscribe-section-background@2x.png"
          />
          <div className="self-stretch bg-footer-header flex flex-col items-center justify-start py-2.5 px-5 gap-[44px] lg:flex-col">
            <div className="self-stretch flex flex-col items-start justify-start gap-[14px] !mb-[40px]">
              <div className="self-stretch flex flex-row items-start justify-start">
                <div className="h-[38px] flex-1 relative leading-[120%] font-semibold inline-block sm:text-left">
                  CoDesk
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start text-lg text-nero">
                <div className="h-[81px] flex-1 relative leading-[150%] inline-block md:text-left sm:text-left">
                  The CoDesk is on a mission to inspire school kids in Nepal to
                  fall in love with coding. Coding is proven to develop
                  creativity, logical thinking, and problem-solving skills in
                  kids. It's an essential skill for the future, with more than
                  60% of all jobs in STEM-related fields requiring knowledge of
                  code. Kids who start learning to code at a young age are
                  guaranteed to become leaders, creators, and entrepreneurs of
                  the future.
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-center gap-[5px] text-right text-base text-nero lg:flex-row md:flex-col sm:flex-col">
              <div className="flex-1 flex flex-col items-start justify-start gap-[10px] md:flex-[unset] md:self-stretch sm:!mb-[40px] sm:flex-[unset] sm:self-stretch">
                <div className="self-stretch flex flex-row items-start justify-start text-xl">
                  <div className="flex-1 relative leading-[150%] font-semibold sm:text-left">
                    Company
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start">
                  <a
                    className="[text-decoration:none] h-6 flex-1 relative leading-[150%] text-[inherit] inline-block sm:text-left"
                    href="https://cooked-throne-941.notion.site/CoDesk-Lab-15c6b9d282bc4ab2a8dfa1e307665e3c"
                    target="_blank"
                  >
                    Documentation
                  </a>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start">
                  <a
                    className="[text-decoration:none] flex-1 relative leading-[150%] text-[inherit] sm:text-left"
                    href="https://cooked-throne-941.notion.site/CoDesk-Lab-15c6b9d282bc4ab2a8dfa1e307665e3c"
                    target="_blank"
                  >
                    Change Log
                  </a>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start">
                  <a
                    className="[text-decoration:none] flex-1 relative leading-[150%] text-[inherit] sm:text-left"
                    href="https://cooked-throne-941.notion.site/CoDesk-Lab-15c6b9d282bc4ab2a8dfa1e307665e3c"
                    target="_blank"
                  >
                    Privacy
                  </a>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start">
                  <a
                    className="[text-decoration:none] flex-1 relative leading-[150%] text-[inherit] sm:text-left"
                    href="https://cooked-throne-941.notion.site/CoDesk-Lab-15c6b9d282bc4ab2a8dfa1e307665e3c"
                    target="_blank"
                  >
                    Terms
                  </a>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[10px] text-center md:flex-[unset] md:self-stretch sm:!mb-[40px] sm:flex-[unset] sm:self-stretch">
                <div className="self-stretch flex flex-row items-start justify-start text-xl">
                  <div className="flex-1 relative leading-[150%] font-semibold sm:text-left">
                    Community
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start">
                  <a
                    className="[text-decoration:none] flex-1 relative leading-[150%] text-[inherit] sm:text-left"
                    href="https://cooked-throne-941.notion.site/CoDesk-Lab-15c6b9d282bc4ab2a8dfa1e307665e3c"
                    target="_blank"
                  >
                    Join Us On Discord
                  </a>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start">
                  <a
                    className="[text-decoration:none] flex-1 relative leading-[150%] text-[inherit] sm:text-left"
                    href="https://cooked-throne-941.notion.site/CoDesk-Lab-15c6b9d282bc4ab2a8dfa1e307665e3c"
                    target="_blank"
                  >
                    Explore A Hackathon
                  </a>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start">
                  <a
                    className="[text-decoration:none] flex-1 relative leading-[150%] text-[inherit] sm:text-left"
                    href="https://cooked-throne-941.notion.site/CoDesk-Lab-15c6b9d282bc4ab2a8dfa1e307665e3c"
                    target="_blank"
                  >
                    Code Of Conduct
                  </a>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start">
                  <a
                    className="[text-decoration:none] flex-1 relative leading-[150%] text-[inherit] sm:text-left"
                    href="https://cooked-throne-941.notion.site/CoDesk-Lab-15c6b9d282bc4ab2a8dfa1e307665e3c"
                    target="_blank"
                  >
                    Brand Assets
                  </a>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[10px] text-left md:flex-[unset] md:self-stretch sm:flex-[unset] sm:self-stretch">
                <div className="self-stretch flex flex-row items-start justify-start text-xl">
                  <div className="flex-1 relative leading-[150%] font-semibold">
                    Support
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start">
                  <a
                    className="[text-decoration:none] flex-1 relative leading-[150%] text-[inherit]"
                    href="https://cooked-throne-941.notion.site/CoDesk-Lab-15c6b9d282bc4ab2a8dfa1e307665e3c"
                    target="_blank"
                  >
                    Help
                  </a>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start">
                  <a
                    className="[text-decoration:none] flex-1 relative leading-[150%] text-[inherit]"
                    href="https://cooked-throne-941.notion.site/CoDesk-Lab-15c6b9d282bc4ab2a8dfa1e307665e3c"
                    target="_blank"
                  >
                    Refund Policy
                  </a>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start">
                  <a
                    className="[text-decoration:none] flex-1 relative leading-[150%] text-[inherit]"
                    href="https://cooked-throne-941.notion.site/CoDesk-Lab-15c6b9d282bc4ab2a8dfa1e307665e3c"
                    target="_blank"
                  >
                    Status
                  </a>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start">
                  <a
                    className="[text-decoration:none] flex-1 relative leading-[150%] text-[inherit]"
                    href="https://cooked-throne-941.notion.site/CoDesk-Lab-15c6b9d282bc4ab2a8dfa1e307665e3c"
                    target="_blank"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isDoneModalPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeDoneModalPopup}
        >
          <DoneModal onClose={closeDoneModalPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default PartnershipPage;
