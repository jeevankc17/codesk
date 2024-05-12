import { FunctionComponent, useState, useCallback } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Icon,
  Typography,
} from "@mui/material";
import DoneModal from "../components/DoneModal";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HomePage: FunctionComponent = () => {
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

  const onViewCourseButtonClick = useCallback(() => {
    navigate("/coursepage");
  }, [navigate]);

  const onTryAFreeClassButtonClick = useCallback(() => {
    navigate("/commingsoonpage");
  }, [navigate]);

  const onViewCourseButton1Click = useCallback(() => {
    navigate("/coursepage");
  }, [navigate]);

  const onTryAFreeClassButton1Click = useCallback(() => {
    navigate("/commingsoonpage");
  }, [navigate]);

  const onViewCourseButton2Click = useCallback(() => {
    navigate("/coursepage");
  }, [navigate]);

  const onTryAFreeClassButton2Click = useCallback(() => {
    navigate("/commingsoonpage");
  }, [navigate]);

  const onShowAllCoursesClick = useCallback(() => {
    navigate("/coursepage");
  }, [navigate]);

  const onKnowPricingButtonClick = useCallback(() => {
    navigate("/commingsoonpage");
  }, [navigate]);

  const onApplyNowButtonClick = useCallback(() => {
    navigate("/commingsoonpage");
  }, [navigate]);

  const onShowCompetetionsButtonClick = useCallback(() => {
    navigate("/competetionspage");
  }, [navigate]);

  const onShowVideosButtonClick = useCallback(() => {
    navigate("/commingsoonpage");
  }, [navigate]);

  const onShowReviewsButtonClick = useCallback(() => {
    navigate("/reviewpage");
  }, [navigate]);

  const onShowDashboardsButtonClick = useCallback(() => {
    navigate("/commingsoonpage");
  }, [navigate]);

  const onViewProjectButtonClick = useCallback(() => {
    window.open("https://scratch.mit.edu/projects/839019799/");
  }, []);

  const onViewProjectButton1Click = useCallback(() => {
    window.open("https://scratch.mit.edu/projects/2232652/");
  }, []);

  const onViewProjectButton2Click = useCallback(() => {
    window.open("https://scratch.mit.edu/projects/16853582/");
  }, []);

  const onSeeMoreProjectsButtonClick = useCallback(() => {
    navigate("/projectpage");
  }, [navigate]);

  const onMeetOurTeamButtonClick = useCallback(() => {
    navigate("/aboutuspage");
  }, [navigate]);

  const onKnowMoreCodeskButtonClick = useCallback(() => {
    navigate("/aboutuspage");
  }, [navigate]);

  const onAskYOurDoubtButtonClick = useCallback(() => {
    window.location.href = "mailto:jkc5186@gmail.com";
  }, []);

  const openDoneModalPopup = useCallback(() => {
    setDoneModalPopupOpen(true);
  }, []);

  const closeDoneModalPopup = useCallback(() => {
    setDoneModalPopupOpen(false);
  }, []);

  const onSupportUsButtonClick = useCallback(() => {
    window.location.href = "mailto:jkc5186@gmail.com?subject=For support ";
  }, []);

  return (
    <>
      <div className="w-full relative bg-nero flex flex-col items-center justify-center p-5 box-border gap-[20px] text-center text-17xl text-black font-body-xl-600 sm:gap-[5px] sm:pl-[5px] sm:pr-[5px] sm:box-border">
        <Navbar
          logoColor="#FF5A43"
          onLogoClick={onLogoClick}
          onCoursesClick={onCoursesClick}
          onQuizzesClick={onQuizzesClick}
          onCompetetionsClick={onCompetetionsClick}
          onAboutUsClick={onAboutUsClick}
        />
        <header className="self-stretch rounded-mini bg-footer-header flex flex-row items-center justify-between py-0 px-[15px] z-[17] text-left text-29xl text-nero font-inter lg:flex-col md:flex-col md:gap-[10px] md:p-2.5 md:box-border sm:gap-[5px] sm:p-[5px] sm:box-border">
          <div className="flex-1 flex flex-col items-start justify-start p-[15px] gap-[15px] lg:order-[2] lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch">
            <div className="self-stretch flex flex-col items-start justify-start font-body-xl-600">
              <div className="self-stretch relative leading-[120%] font-semibold sm:text-13xl">
                Coding classes for kids and teenagers of Nepal
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[15px] text-5xl">
              <div className="self-stretch w-[107px] flex flex-col items-start justify-start">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="relative tracking-[-0.01em] leading-[32px] font-semibold">
                    1200+
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[26.7px] pl-0 text-base font-body-xl-600">
                  <div className="self-stretch relative leading-[24px]">
                    Students
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start">
                <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[34.3px] pl-0">
                  <div className="relative tracking-[-0.01em] leading-[32px] font-semibold">
                    5+
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start relative text-base font-body-xl-600">
                  <div className="relative leading-[24px] z-[0]">Districts</div>
                  <div className="w-6 absolute !m-[0] bottom-[0px] left-[0px] box-border h-px z-[1] border-b-[1px] border-solid border-silver" />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[5px] text-lg">
              <div className="self-stretch flex flex-row items-center justify-center">
                <img
                  className="w-8 relative h-8 overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/phonecall@2x.png"
                />
              </div>
              <div className="flex-1 flex flex-row items-start justify-start">
                <div className="flex-1 relative leading-[24px] font-semibold">{`Call us at 9868296800 for help & questions.`}</div>
              </div>
            </div>
          </div>
          <img
            className="flex-1 relative max-w-full overflow-hidden h-[516.2px] object-cover lg:order-[1] lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch sm:h-[300px]"
            alt=""
            src="/image-5@2x.png"
          />
        </header>
        <section className="self-stretch bg-nero flex flex-col items-center justify-start p-5 gap-[20px] z-[16] text-center text-17xl text-aqua-deep font-body-xl-600 sm:pl-0 sm:pr-0 sm:box-border">
          <div className="self-stretch flex flex-col items-center justify-center h-auto">
            <div className="self-stretch relative leading-[120%] font-semibold inline-block sm:text-9xl">
              <span>Learn coding</span>
              <span className="text-black">{` from the `}</span>
              <span>top Nepali IT instructors</span>
              <span className="text-black">
                . Our hand-picked instructors ensure the best learning
                experience.
              </span>
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-center justify-center py-[25px] px-[5px] gap-[15px] text-left text-5xl text-footer-header lg:flex-row lg:flex-wrap md:gap-[5px] md:pl-[5px] md:pr-[5px] md:box-border sm:flex-row sm:flex-wrap sm:gap-[5px] sm:pl-0 sm:pr-0 sm:box-border">
            <div className="h-[150px] w-[200px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded bg-nero flex flex-col items-center justify-center p-[5px] box-border gap-[5px] lg:w-[200px] md:w-[150px] sm:w-[150px]">
              <div className="self-stretch flex flex-row items-end justify-start gap-[14px]">
                <img
                  className="w-[50px] relative h-[50px] overflow-hidden shrink-0"
                  alt=""
                  src="/appstorelogo.svg"
                />
                <div className="flex-1 flex flex-row items-end justify-start">
                  <div className="flex-1 relative leading-[150%] font-semibold">
                    15+
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start text-center text-base text-black">
                <div className="flex-1 relative leading-[120%] font-semibold">
                  Coding stacks
                </div>
              </div>
            </div>
            <div className="w-[200px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded bg-nero h-[150px] flex flex-col items-center justify-center p-[5px] box-border gap-[5px] md:w-[150px] sm:w-[150px]">
              <div className="self-stretch flex flex-row items-end justify-start gap-[14px]">
                <img
                  className="w-[50px] relative h-[50px] overflow-hidden shrink-0"
                  alt=""
                  src="/applelogo.svg"
                />
                <div className="flex-1 flex flex-row items-end justify-start">
                  <div className="flex-1 relative leading-[150%] font-semibold">
                    5+
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start text-center text-base text-black">
                <div className="flex-1 relative leading-[120%] font-semibold">
                  Disruptive Technology
                </div>
              </div>
            </div>
            <div className="w-[200px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded bg-nero h-[150px] flex flex-col items-center justify-center p-[5px] box-border gap-[5px] md:w-[150px] sm:w-[150px]">
              <div className="self-stretch flex flex-row items-end justify-start gap-[14px]">
                <img
                  className="w-[50px] relative h-[50px] overflow-hidden shrink-0"
                  alt=""
                  src="/personsimplerun.svg"
                />
                <div className="flex-1 flex flex-row items-end justify-start">
                  <div className="flex-1 relative leading-[150%] font-semibold">
                    100+
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start text-center text-base text-black">
                <div className="flex-1 relative leading-[120%] font-semibold">
                  Empowering Youth
                </div>
              </div>
            </div>
            <div className="w-[200px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded bg-nero h-[150px] flex flex-col items-center justify-center p-[5px] box-border gap-[5px] md:w-[150px] sm:w-[150px]">
              <div className="self-stretch flex flex-row items-end justify-start gap-[14px]">
                <img
                  className="w-[50px] relative h-[50px] overflow-hidden shrink-0"
                  alt=""
                  src="/cassettetape.svg"
                />
                <div className="flex-1 flex flex-row items-end justify-start">
                  <div className="flex-1 relative leading-[150%] font-semibold">
                    50+
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start text-center text-base text-black">
                <div className="flex-1 relative leading-[120%] font-semibold">
                  Hands On Resources
                </div>
              </div>
            </div>
            <div className="w-[200px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded bg-nero h-[150px] flex flex-col items-center justify-center p-[5px] box-border gap-[5px] md:w-[150px] sm:w-[150px]">
              <div className="self-stretch flex flex-row items-end justify-start gap-[14px]">
                <img
                  className="w-[50px] relative h-[50px] overflow-hidden shrink-0"
                  alt=""
                  src="/androidlogo.svg"
                />
                <div className="flex-1 flex flex-row items-end justify-start">
                  <div className="flex-1 relative leading-[150%] font-semibold sm:text-lg">
                    100+
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start text-center text-base text-black">
                <div className="flex-1 relative leading-[120%] font-semibold">
                  Hackathons Event
                </div>
              </div>
            </div>
            <div className="w-[200px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded bg-nero h-[150px] flex flex-col items-center justify-center p-[5px] box-border gap-[5px] md:w-[150px] sm:w-[150px]">
              <div className="self-stretch flex flex-row items-end justify-start gap-[14px]">
                <img
                  className="w-[50px] relative h-[50px] overflow-hidden shrink-0"
                  alt=""
                  src="/desktoptower.svg"
                />
                <div className="flex-1 flex flex-row items-end justify-start">
                  <div className="flex-1 relative leading-[150%] font-semibold sm:text-lg">
                    Robust
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start text-center text-base text-black">
                <div className="flex-1 relative leading-[120%] font-semibold">{`Virtual & Physical Classes`}</div>
              </div>
            </div>
          </div>
        </section>
        <section className="self-stretch bg-nero flex flex-col items-center justify-center p-5 gap-[20px] z-[15] text-center text-17xl text-black font-body-xl-600 sm:pl-[5px] sm:pr-[05px] sm:box-border">
          <div className="self-stretch flex flex-col items-center justify-center">
            <div className="self-stretch relative leading-[120%] font-semibold whitespace-pre-wrap sm:text-9xl">
              With CoDesk, your child’s future is on safe hands!
            </div>
          </div>
          <div className="self-stretch bg-nero flex flex-row flex-wrap items-center justify-center gap-[10px] text-xl">
            <div className="w-[300px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded bg-nero h-[340px] flex flex-col items-center justify-center p-[15px] box-border gap-[15px]">
              <img
                className="w-[100px] relative h-[100px] overflow-hidden shrink-0"
                alt=""
                src="/baseballhelmet.svg"
              />
              <div className="self-stretch flex flex-row items-center justify-center">
                <div className="flex-1 relative leading-[150%] font-semibold">
                  Future Proof Curriculum
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start text-sm">
                <div className="flex-1 relative leading-[150%]">
                  Explore the Ever-Evolving World of Programming with Our
                  Up-to-the-Minute Curriculum. We insure latest Coding Trends
                  and Technologies.
                </div>
              </div>
            </div>
            <div className="w-[300px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded bg-nero h-[340px] flex flex-col items-center justify-center p-[15px] box-border gap-[15px]">
              <img
                className="w-[100px] relative h-[100px] overflow-hidden shrink-0"
                alt=""
                src="/question2.svg"
              />
              <div className="self-stretch flex flex-row items-center justify-center">
                <div className="flex-1 relative leading-[150%] font-semibold">
                  Regular Doubt Session
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start text-sm">
                <div className="flex-1 relative leading-[150%]">
                  After every module, solve all your queries in this
                  personalized session. The toughest problems addressed -
                  concepts revised and doubts cleared!
                </div>
              </div>
            </div>
            <div className="w-[300px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded bg-nero h-[340px] flex flex-col items-center justify-center p-[15px] box-border gap-[15px]">
              <img
                className="w-[100px] relative h-[100px] overflow-hidden shrink-0"
                alt=""
                src="/lifebuoy1.svg"
              />
              <div className="self-stretch flex flex-row items-center justify-center">
                <div className="flex-1 relative leading-[150%] font-semibold whitespace-pre-wrap">
                  Thrilling Competitions
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start text-sm">
                <div className="flex-1 relative leading-[150%] whitespace-pre-wrap">
                  Regular competitions are conducted to encourage students to
                  showcase their skills and develop their ideas.
                </div>
              </div>
            </div>
            <div className="w-[300px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded bg-nero h-[340px] flex flex-col items-center justify-center p-[15px] box-border gap-[15px]">
              <img
                className="w-[100px] relative h-[100px] overflow-hidden shrink-0"
                alt=""
                src="/applepodcastslogo.svg"
              />
              <div className="self-stretch flex flex-row items-center justify-center">
                <div className="flex-1 relative leading-[150%] font-semibold">{`Projects & Quizzes after every class`}</div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start text-sm">
                <div className="flex-1 relative leading-[150%] whitespace-pre-wrap">
                  Quizzes and projects are fun and help us remember important
                  facts. These well-targeted and tailor-made quizzes will boost
                  self-esteem and confidence among kids.
                </div>
              </div>
            </div>
            <div className="w-[300px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded bg-nero h-[340px] flex flex-col items-center justify-center p-[15px] box-border gap-[15px]">
              <img
                className="w-[100px] relative h-[100px] overflow-hidden shrink-0"
                alt=""
                src="/wechatlogo1.svg"
              />
              <div className="self-stretch flex flex-row items-center justify-center">
                <div className="flex-1 relative leading-[150%] font-semibold whitespace-pre-wrap">
                  Personalized Classes
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start text-sm">
                <div className="flex-1 relative leading-[150%] whitespace-pre-wrap">
                  {" "}
                  Understand concepts faster with personal attention from
                  teachers. Learn coding from highly qualified teachers trained
                  to make learning effective and impactful.
                </div>
              </div>
            </div>
            <div className="w-[300px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded bg-nero h-[340px] flex flex-col items-center justify-center p-[15px] box-border gap-[15px]">
              <img
                className="w-[81.3px] relative h-[81.3px]"
                alt=""
                src="/vector1.svg"
              />
              <div className="self-stretch flex flex-row items-center justify-center">
                <div className="flex-1 relative leading-[150%] font-semibold whitespace-pre-wrap">
                  Lifetime Access to Resources
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start text-sm">
                <div className="flex-1 relative leading-[150%] whitespace-pre-wrap">{`Forgot what was taught in the last  class? No worries. Watch the  recorded class video anytime to  refresh your memory. Get lifetime access to our  exclusive learning content `}</div>
              </div>
            </div>
            <div className="w-[300px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded bg-nero h-[340px] flex flex-col items-center justify-center p-[15px] box-border gap-[15px]">
              <img
                className="w-[100px] relative h-[100px] overflow-hidden shrink-0"
                alt=""
                src="/chalkboardteacher2.svg"
              />
              <div className="self-stretch flex flex-row items-center justify-center">
                <div className="flex-1 relative leading-[150%] font-semibold whitespace-pre-wrap">
                  Gamified learning dashboard for kids and instrutors
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start text-sm">
                <div className="flex-1 relative leading-[150%] whitespace-pre-wrap">{`For class management &  progress tracking  For Easy rescheduling of  classes and session notes  For Course and instructor  information`}</div>
              </div>
            </div>
            <div className="w-[300px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded bg-nero h-[340px] flex flex-col items-center justify-start p-[15px] box-border gap-[15px]">
              <img
                className="w-[100px] relative h-[100px] overflow-hidden shrink-0"
                alt=""
                src="/appwindow.svg"
              />
              <div className="self-stretch flex flex-row items-start justify-start">
                <div className="flex-1 relative leading-[150%] font-semibold whitespace-pre-wrap">
                  Classes runs on hybrid model
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start text-sm">
                <div className="flex-1 relative leading-[150%]">
                  Our class runs on both physical and virtual model ensuring
                  that our students can learn from anywhere at anytime
                </div>
              </div>
            </div>
            <div className="w-[300px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded bg-nero h-[340px] flex flex-col items-center justify-center p-[15px] box-border gap-[15px]">
              <img
                className="w-[100px] relative h-[100px] overflow-hidden shrink-0"
                alt=""
                src="/student.svg"
              />
              <div className="self-stretch flex flex-row items-center justify-center">
                <div className="flex-1 relative leading-[150%] font-semibold whitespace-pre-wrap">
                  Community of Young Coders
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start text-sm">
                <div className="flex-1 relative leading-[150%] whitespace-pre-wrap">
                  {" "}
                  Get access to our community of students to collaborate, share
                  projects, and solve real-world problems together
                </div>
              </div>
            </div>
            <div className="w-[300px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded bg-nero h-[340px] flex flex-col items-center justify-center p-[15px] box-border gap-[15px]">
              <img
                className="w-[100px] relative h-[100px] overflow-hidden shrink-0"
                alt=""
                src="/arrowsincardinal.svg"
              />
              <div className="self-stretch flex flex-row items-center justify-center">
                <div className="flex-1 relative leading-[150%] font-semibold">
                  Gamified Learning
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start text-sm">
                <div className="flex-1 relative leading-[150%] whitespace-pre-wrap">
                  CoDesK makes learning fun with gamification. Students can take
                  quizzes or complete projects to earn points, badges, and
                  rewards.
                </div>
              </div>
            </div>
            <div className="w-[300px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded bg-nero h-[340px] flex flex-col items-center justify-center p-[15px] box-border gap-[15px]">
              <img
                className="w-[100px] relative h-[100px] overflow-hidden shrink-0"
                alt=""
                src="/articlemedium.svg"
              />
              <div className="self-stretch flex flex-row items-center justify-center">
                <div className="flex-1 relative leading-[150%] font-semibold">{`Receive monthly progress reports & attend PTMs`}</div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start text-sm">
                <div className="flex-1 relative leading-[150%] whitespace-pre-wrap">
                  Great opportunity for parents and teachers to open two way
                  communication and to share insights and information for the
                  holistic development of a child.
                </div>
              </div>
            </div>
            <div className="w-[300px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded bg-nero h-[340px] flex flex-col items-center justify-center p-[15px] box-border gap-[15px]">
              <img
                className="w-[100px] relative h-[100px]"
                alt=""
                src="/vector2.svg"
              />
              <div className="self-stretch flex flex-row items-center justify-center">
                <div className="flex-1 relative leading-[150%] font-semibold">
                  Learning Certificates
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start text-sm">
                <div className="flex-1 relative leading-[150%] whitespace-pre-wrap">
                  {" "}
                  Show the world what you can do with a certificate for every
                  amazing skill you master.
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="self-stretch bg-nero flex flex-col items-center justify-center p-5 gap-[20px] z-[14] text-center text-17xl text-black font-body-xl-600 sm:pl-[5px] sm:pr-[5px] sm:box-border">
          <div className="self-stretch flex flex-col items-center justify-center">
            <div className="self-stretch relative leading-[120%] font-semibold sm:text-9xl">
              Choose a coding course that excites childs
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-center justify-center p-[15px] gap-[15px] text-left text-sm sm:pl-[5px] sm:pr-[5px] sm:box-border">
            <div className="w-[350px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-lg bg-nero flex flex-col items-start justify-start p-2.5 box-border relative gap-[15px]">
              <img
                className="self-stretch relative max-w-full overflow-hidden h-[213px] shrink-0 object-cover z-[0]"
                alt=""
                src="/image@2x.png"
              />
              <div className="self-stretch bg-nero flex flex-col items-start justify-start gap-[5px] z-[1]">
                <div className="self-stretch flex flex-col items-center justify-start pt-0 px-0 pb-[0.5px] text-5xl">
                  <div className="w-full relative leading-[150%] font-semibold inline-block max-w-[344px]">
                    Specialized Coding
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start text-base">
                  <div className="self-stretch relative leading-[150%]">
                    A perfect course for kids who want to use coding to solve
                    real-world problems and create a better future.
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[5px]">
                  <div className="flex-1 flex flex-col items-start justify-start">
                    <div className="self-stretch relative leading-[120%] font-semibold">
                      Ages 8-18
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start">
                    <div className="self-stretch relative leading-[120%] font-semibold">
                      50 Lessons
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start">
                    <div className="self-stretch relative leading-[120%] font-semibold">
                      100+ Activities
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-center justify-center pt-0 px-0 pb-2 text-center text-dodger-blue">
                  <div className="w-full relative leading-[150%] inline-block max-w-[384px]">
                    Don't let your child miss out to unlock their potential.
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-nero flex flex-col items-center justify-start gap-[15px] z-[2]">
                <button
                  className="cursor-pointer py-[9px] px-5 bg-nero self-stretch rounded box-border h-[41px] flex flex-row items-center justify-center border-[1px] border-solid border-aqua-deep"
                  autoFocus={true}
                  onClick={onViewCourseButtonClick}
                >
                  <div className="flex-1 relative text-lg tracking-[-0.01em] leading-[20px] capitalize font-semibold font-inter text-aqua-deep text-center inline-block max-h-[58px]">
                    view course
                  </div>
                </button>
                <button
                  className="cursor-pointer py-[9px] px-5 bg-aqua-deep self-stretch rounded flex flex-row items-center justify-center border-[1px] border-solid border-nero"
                  onClick={onTryAFreeClassButtonClick}
                >
                  <div className="flex-1 relative text-lg tracking-[-0.01em] leading-[20px] capitalize font-semibold font-inter text-nero text-center inline-block max-h-[58px]">
                    Try a free class
                  </div>
                </button>
              </div>
              <img
                className="w-[100px] !m-[0] absolute top-[10px] left-[10px] h-[25px] overflow-hidden shrink-0 object-cover z-[3]"
                alt=""
                src="/bestsellingpng@2x.png"
              />
            </div>
            <div className="w-[350px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-lg bg-nero flex flex-col items-start justify-start p-2.5 box-border relative gap-[15px]">
              <img
                className="self-stretch relative max-w-full overflow-hidden h-[213px] shrink-0 object-cover z-[0]"
                alt=""
                src="/image11@2x.png"
              />
              <div className="self-stretch bg-nero flex flex-col items-start justify-start gap-[5px] z-[1]">
                <div className="self-stretch flex flex-col items-center justify-start pt-0 px-0 pb-[0.5px] text-5xl">
                  <div className="w-full relative leading-[150%] font-semibold inline-block max-w-[344px]">
                    All In One Coding
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start text-base">
                  <div className="self-stretch relative leading-[150%]">
                    A course for those who want to master the art of coding and
                    create a better future through code.
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[5px]">
                  <div className="flex-1 flex flex-col items-start justify-start">
                    <div className="self-stretch relative leading-[120%] font-semibold">
                      Ages 8-18
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start">
                    <div className="self-stretch relative leading-[120%] font-semibold">
                      50+ Lessons
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start">
                    <div className="self-stretch relative leading-[120%] font-semibold">
                      100+ Activities
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-center justify-center pt-0 px-0 pb-2 text-center text-dodger-blue">
                  <div className="w-full relative leading-[150%] inline-block max-w-[384px]">
                    Don't let your child miss out to unlock their potential.
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-nero flex flex-col items-center justify-start gap-[15px] z-[2]">
                <button
                  className="cursor-pointer py-[9px] px-5 bg-nero self-stretch rounded box-border h-[41px] flex flex-row items-center justify-center border-[1px] border-solid border-aqua-deep"
                  autoFocus={true}
                  onClick={onViewCourseButton1Click}
                >
                  <div className="flex-1 relative text-lg tracking-[-0.01em] leading-[20px] capitalize font-semibold font-inter text-aqua-deep text-center inline-block max-h-[58px]">
                    view course
                  </div>
                </button>
                <button
                  className="cursor-pointer py-[9px] px-5 bg-aqua-deep self-stretch rounded flex flex-row items-center justify-center border-[1px] border-solid border-nero"
                  onClick={onTryAFreeClassButton1Click}
                >
                  <div className="flex-1 relative text-lg tracking-[-0.01em] leading-[20px] capitalize font-semibold font-inter text-nero text-center inline-block max-h-[58px]">
                    Try a free class
                  </div>
                </button>
              </div>
              <img
                className="w-[100px] !m-[0] absolute top-[10px] left-[10px] h-[25px] overflow-hidden shrink-0 object-cover z-[3]"
                alt=""
                src="/bestsellingpng@2x.png"
              />
            </div>
            <div className="w-[350px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-lg bg-nero flex flex-col items-start justify-start p-2.5 box-border relative gap-[15px]">
              <img
                className="self-stretch relative max-w-full overflow-hidden h-[213px] shrink-0 object-cover z-[0]"
                alt=""
                src="/image2@2x.png"
              />
              <div className="self-stretch bg-nero flex flex-col items-start justify-start gap-[5px] z-[1]">
                <div className="self-stretch flex flex-col items-center justify-start pt-0 px-0 pb-[0.5px] text-5xl">
                  <div className="w-full relative leading-[150%] font-semibold inline-block max-w-[344px]">
                    Coding Workshops
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start text-base">
                  <div className="self-stretch relative leading-[150%]">
                    A perfect course for kids who want to test drive to coding
                    road.
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[5px]">
                  <div className="flex-1 flex flex-col items-start justify-start">
                    <div className="self-stretch relative leading-[120%] font-semibold">
                      Ages 8-18
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start">
                    <div className="self-stretch relative leading-[120%] font-semibold">
                      15+ Lessons
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start">
                    <div className="self-stretch relative leading-[120%] font-semibold">
                      30+ Activities
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-center justify-center pt-0 px-0 pb-2 text-center text-dodger-blue">
                  <div className="w-full relative leading-[150%] inline-block max-w-[384px]">
                    Don't let your child miss out to unlock their potential.
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-nero flex flex-col items-center justify-start gap-[15px] z-[2]">
                <button
                  className="cursor-pointer py-[9px] px-5 bg-nero self-stretch rounded box-border h-[41px] flex flex-row items-center justify-center border-[1px] border-solid border-aqua-deep"
                  autoFocus={true}
                  onClick={onViewCourseButton2Click}
                >
                  <div className="flex-1 relative text-lg tracking-[-0.01em] leading-[20px] capitalize font-semibold font-inter text-aqua-deep text-center inline-block max-h-[58px]">
                    view course
                  </div>
                </button>
                <button
                  className="cursor-pointer py-[9px] px-5 bg-aqua-deep self-stretch rounded flex flex-row items-center justify-center border-[1px] border-solid border-nero"
                  onClick={onTryAFreeClassButton2Click}
                >
                  <div className="flex-1 relative text-lg tracking-[-0.01em] leading-[20px] capitalize font-semibold font-inter text-nero text-center inline-block max-h-[58px]">
                    Try a free class
                  </div>
                </button>
              </div>
              <img
                className="w-[100px] !m-[0] absolute top-[10px] left-[10px] h-[25px] overflow-hidden shrink-0 object-cover z-[3]"
                alt=""
                src="/bestsellingpng@2x.png"
              />
            </div>
          </div>
          <section className="self-stretch bg-nero flex flex-row flex-wrap items-start justify-center p-[15px]">
            <button
              className="cursor-pointer py-[9px] px-5 bg-nero rounded box-border h-[41px] flex flex-row items-center justify-center border-[1px] border-solid border-aqua-deep"
              onClick={onShowAllCoursesClick}
            >
              <div className="relative text-lg leading-[150%] font-semibold font-body-xl-600 text-aqua-deep text-center inline-block max-h-[58px]">
                Show All Courses
              </div>
            </button>
          </section>
        </section>
        <div className="self-stretch bg-nero flex flex-col items-center justify-center p-5 gap-[20px] z-[13]">
          <div className="self-stretch flex flex-col items-center justify-center">
            <div className="self-stretch relative leading-[120%] font-semibold sm:text-9xl">
              Flexible pricing with personalized classes
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-center justify-center py-[25px] px-2.5 gap-[15px] text-left text-base md:flex-row md:flex-wrap sm:pt-5 sm:pb-5 sm:box-border">
            <div className="w-[300px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-lg bg-nero overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[10px]">
              <div className="self-stretch rounded-t-md rounded-b-none bg-aqua-deep flex flex-col items-start justify-center pt-[25px] px-[25px] pb-[5px] relative border-[1px] border-solid border-black">
                <div className="self-stretch flex flex-row items-start justify-center z-[0]">
                  <div className="flex-1 relative leading-[120%] font-semibold">
                    8 classes / month
                  </div>
                </div>
                <img
                  className="w-[100px] !m-[0] absolute top-[0px] left-[0px] h-[25px] overflow-hidden shrink-0 object-cover z-[1]"
                  alt=""
                  src="/bestsellingpng3@2x.png"
                />
              </div>
              <div className="self-stretch bg-nero flex flex-col items-start justify-start py-2.5 px-5 gap-[5px] text-sm">
                <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                    alt=""
                    src="/svg4.svg"
                  />
                  <div className="flex-1 flex flex-row items-center justify-start">
                    <div className="flex-1 relative leading-[150%]">
                      2 classes per week
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                    alt=""
                    src="/svg4.svg"
                  />
                  <div className="flex-1 flex flex-row items-center justify-start">
                    <div className="flex-1 relative leading-[150%]">
                      12+ fun and engaging activities
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                    alt=""
                    src="/svg.svg"
                  />
                  <div className="flex-1 flex flex-row items-center justify-start">
                    <div className="flex-1 relative leading-[150%]">
                      Access to complete coding module
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                    alt=""
                    src="/svg4.svg"
                  />
                  <div className="flex-1 flex flex-row items-center justify-start">
                    <div className="flex-1 relative leading-[150%]">
                      Expert-designed, project-based curriculum paired with
                      hands-on activities and projects
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                    alt=""
                    src="/svg.svg"
                  />
                  <div className="flex-1 flex flex-row items-center justify-start">
                    <div className="flex-1 relative leading-[150%]">
                      Progress Tracking - Parent Teacher Meet
                    </div>
                  </div>
                </div>
                <div className="w-[229px] hidden flex-row items-center justify-start gap-[10px]">
                  <img
                    className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                    alt=""
                    src="/svg.svg"
                  />
                  <div className="flex-1 flex flex-row items-center justify-start">
                    <div className="flex-1 relative leading-[150%]">
                      Unlimited doubt sessions, available 24*7
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[300px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-lg bg-nero overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[10px]">
              <div className="self-stretch rounded-t-md rounded-b-none bg-aqua-deep flex flex-col items-start justify-center pt-[25px] px-[25px] pb-[5px] relative border-[1px] border-solid border-black">
                <div className="self-stretch flex flex-row items-start justify-center z-[0]">
                  <div className="flex-1 relative leading-[120%] font-semibold">
                    4 classes / month
                  </div>
                </div>
                <img
                  className="w-[100px] !m-[0] absolute top-[0px] left-[0px] h-[25px] overflow-hidden shrink-0 object-cover hidden z-[1]"
                  alt=""
                  src="/bestsellingpng4@2x.png"
                />
              </div>
              <div className="self-stretch bg-nero flex flex-col items-start justify-start py-2.5 px-5 gap-[5px] text-sm">
                <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                    alt=""
                    src="/svg4.svg"
                  />
                  <div className="flex-1 flex flex-row items-center justify-start">
                    <div className="flex-1 relative leading-[150%]">
                      1 classes per week
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                    alt=""
                    src="/svg4.svg"
                  />
                  <div className="flex-1 flex flex-row items-center justify-start">
                    <div className="flex-1 relative leading-[150%]">
                      8+ fun and engaging activities
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                    alt=""
                    src="/svg.svg"
                  />
                  <div className="flex-1 flex flex-row items-center justify-start">
                    <div className="flex-1 relative leading-[150%]">
                      Access to complete coding module
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                    alt=""
                    src="/svg4.svg"
                  />
                  <div className="flex-1 flex flex-row items-center justify-start">
                    <div className="flex-1 relative leading-[150%]">
                      Expert-designed, project-based curriculum paired with
                      hands-on activities and projects
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                    alt=""
                    src="/svg.svg"
                  />
                  <div className="flex-1 flex flex-row items-center justify-start">
                    <div className="flex-1 relative leading-[150%]">
                      Progress Tracking - Parent Teacher Meet
                    </div>
                  </div>
                </div>
                <div className="w-[229px] hidden flex-row items-center justify-start gap-[10px]">
                  <img
                    className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                    alt=""
                    src="/svg.svg"
                  />
                  <div className="flex-1 flex flex-row items-center justify-start">
                    <div className="flex-1 relative leading-[150%]">
                      Unlimited doubt sessions, available 24*7
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="self-stretch bg-nero flex flex-row flex-wrap items-start justify-center p-[15px]">
            <button
              className="cursor-pointer py-[9px] px-5 bg-nero rounded box-border h-[41px] flex flex-row items-center justify-center border-[1px] border-solid border-aqua-deep"
              autoFocus={true}
              onClick={onKnowPricingButtonClick}
            >
              <div className="relative text-lg leading-[150%] font-semibold font-body-xl-600 text-aqua-deep text-center inline-block max-h-[58px]">
                Know Pricing
              </div>
            </button>
          </section>
        </div>
        <div className="self-stretch bg-nero flex flex-col items-center justify-start p-5 gap-[20px] z-[12]">
          <div className="self-stretch flex flex-col items-center justify-start gap-[24px]">
            <div className="self-stretch flex flex-col items-center justify-start">
              <div className="self-stretch relative leading-[120%] font-semibold sm:text-9xl">
                Learn, compete, and win certificates in coding competitions
              </div>
            </div>
            <div className="self-stretch flex flex-col items-center justify-start pt-0 px-[16.2px] pb-[0.5px] text-sm text-dimgray">
              <div className="self-stretch relative leading-[150%]">
                <p className="m-0">
                  Our coding competitions and hackathons are a great way to put
                  your coding skills to
                </p>
                <p className="m-0">
                  test and to learn and grow while competing with the best minds
                </p>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-start text-5xl text-aqua-deep">
            <div className="self-stretch bg-nero flex flex-row flex-wrap items-center justify-between p-[15px]">
              <div className="flex-1 flex flex-row items-center justify-between sm:flex-col">
                <img
                  className="w-[186px] rounded h-[127px] overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/iconpng@2x.png"
                />
                <div className="flex-1 flex flex-col items-center justify-center gap-[10px] sm:flex-[unset] sm:self-stretch">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch flex flex-row items-start justify-start">
                      <div className="flex-1 relative leading-[150%] font-semibold sm:text-xl">
                        Nepal CodeWars 2024 Kid’s Hackathon
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start gap-[10px] text-right text-base text-chateau-green">
                      <div className="flex-1 relative leading-[150%]">
                        Hosted by:
                      </div>
                      <div className="flex-1 relative leading-[150%] text-left">
                        CoDesk Innovations
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start text-right text-sm text-black">
                    <div className="self-stretch flex flex-row items-center justify-start">
                      <div className="flex-1 relative leading-[120%] font-semibold">
                        Team Size:
                      </div>
                      <div className="flex-1 relative leading-[120%] font-semibold text-left">
                        {" "}
                        3
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-start">
                      <div className="flex-1 relative leading-[120%] font-semibold">{`Label: `}</div>
                      <div className="flex-1 relative leading-[120%] font-semibold text-left">
                        {" "}
                        Advanced
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-start">
                      <div className="flex-1 relative leading-[120%] font-semibold">
                        Theme:
                      </div>
                      <div className="flex-1 flex flex-row flex-wrap items-center justify-start text-left text-xs">
                        <div className="rounded-lg bg-dim-green flex flex-col items-start justify-start p-[5px]">
                          <div className="relative leading-[130%]">
                            No Restrictions
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="cursor-pointer py-[9px] px-5 bg-aqua-deep w-[230px] rounded box-border h-12 flex flex-row items-center justify-center border-[1px] border-solid border-nero"
                onClick={onApplyNowButtonClick}
              >
                <div className="relative text-lg leading-[150%] font-semibold font-body-xl-600 text-nero text-center inline-block max-h-[58px]">
                  Apply Now
                </div>
              </button>
            </div>
          </div>
          <section className="self-stretch bg-nero flex flex-row flex-wrap items-start justify-center p-[15px]">
            <button
              className="cursor-pointer py-[9px] px-5 bg-nero rounded box-border h-[41px] flex flex-row items-center justify-center border-[1px] border-solid border-aqua-deep"
              autoFocus={true}
              onClick={onShowCompetetionsButtonClick}
            >
              <div className="relative text-lg leading-[150%] font-semibold font-body-xl-600 text-aqua-deep text-center inline-block max-h-[58px]">
                Show Competetions
              </div>
            </button>
          </section>
        </div>
        <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] bg-nero flex flex-col items-start justify-start p-5 gap-[20px] z-[11] text-13xl">
          <div className="self-stretch flex flex-col items-center justify-start">
            <div className="self-stretch relative leading-[120%] font-semibold">
              Why children should learn to code?
            </div>
          </div>
          <div className="self-stretch bg-nero flex flex-row flex-wrap items-center justify-center p-[15px] gap-[15px] text-base md:flex-row md:flex-wrap">
            <div className="w-[350px] rounded-3xs bg-nero flex flex-col items-center justify-center p-5 box-border">
              <img
                className="w-[250px] relative h-[250px] overflow-hidden shrink-0 object-cover"
                alt=""
                src="/reason1png7@2x.png"
              />
              <div className="self-stretch bg-nero flex flex-col items-center justify-center">
                <div className="self-stretch flex flex-col items-center justify-center py-4 px-0">
                  <div className="self-stretch relative leading-[120%] font-semibold">
                    Develop key skills
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-center justify-center">
                  <div className="w-full relative leading-[150%] inline-block max-w-[448px]">
                    Learning to code helps improve a child's logical thinking
                    and problem-solving skills by 70%, also enabling them to
                    perform better at school.
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[350px] rounded-3xs bg-nero flex flex-col items-center justify-center p-5 box-border">
              <img
                className="w-[250px] relative h-[250px] overflow-hidden shrink-0 object-cover"
                alt=""
                src="/reason1png8@2x.png"
              />
              <div className="self-stretch bg-nero flex flex-col items-center justify-center">
                <div className="self-stretch flex flex-col items-center justify-center py-4 px-0">
                  <div className="self-stretch relative leading-[120%] font-semibold">
                    Prepare for the future
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-center justify-center">
                  <div className="w-full relative leading-[150%] inline-block max-w-[448px]">
                    Children need to learn coding and develop digital skills if
                    they want to be successful in the technology-driven job
                    market of the future.
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[350px] rounded-3xs bg-nero flex flex-col items-center justify-center p-5 box-border">
              <img
                className="w-[250px] relative h-[250px] overflow-hidden shrink-0 object-cover"
                alt=""
                src="/reason1png6@2x.png"
              />
              <div className="self-stretch bg-nero flex flex-col items-center justify-center">
                <div className="self-stretch flex flex-col items-center justify-center py-4 px-0">
                  <div className="self-stretch relative leading-[120%] font-semibold">
                    Learn through coding
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-center justify-center">
                  <div className="w-full relative leading-[150%] inline-block max-w-[448px]">
                    Our STEM-focused curriculum makes coding a learning aid and
                    helps kids develop a deeper understanding of the subjects
                    they study at school.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch bg-lavenderblush flex flex-col items-center justify-start p-5 gap-[20px] z-[10]">
          <div className="self-stretch flex flex-row items-center justify-start">
            <div className="flex-1 relative leading-[120%] font-semibold sm:text-9xl">
              Watch video to know more about CoDeskLab
            </div>
          </div>
          <iframe
            className="self-stretch h-[700px] flex flex-col items-center justify-start object-contain sm:h-[200px]"
            src={`https://www.youtube.com/embed/ucCntlvrPsY?rel=0&mute=1`}
            frameBorder="0"
            allowFullScreen
          />
          <section className="self-stretch bg-nero flex flex-row flex-wrap items-start justify-center p-[15px]">
            <button
              className="cursor-pointer py-[9px] px-5 bg-nero rounded box-border h-[41px] flex flex-row items-center justify-center border-[1px] border-solid border-aqua-deep"
              autoFocus={true}
              onClick={onShowVideosButtonClick}
            >
              <div className="relative text-lg leading-[150%] font-semibold font-body-xl-600 text-aqua-deep text-center inline-block max-h-[58px]">
                Show Videos
              </div>
            </button>
          </section>
        </div>
        <div className="self-stretch bg-nero flex flex-col items-start justify-start p-5 gap-[20px] z-[9]">
          <div className="self-stretch flex flex-row items-center justify-center">
            <div className="flex-1 relative leading-[120%] font-semibold sm:text-9xl">
              <span>{`Student’s & parent’s testimonials `}</span>
              <span className="text-aqua-deep">“why they ❤️ CoDeskLab”</span>
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-center justify-center p-[15px] gap-[20px] text-left text-lg md:flex-row md:flex-wrap sm:flex-row sm:flex-wrap sm:pl-[5px] sm:pr-[5px] sm:box-border">
            <div className="w-[350px] shadow-[0px_1px_3px_rgba(0,_0,_0,_0.1)] rounded bg-nero flex flex-col items-start justify-start p-[15px] box-border gap-[15px] sm:pl-[5px] sm:pr-[5px] sm:box-border">
              <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[30px]">
                <div className="flex flex-row items-start justify-start">
                  <img
                    className="w-[100px] relative rounded-100xl h-[100px] object-cover"
                    alt=""
                    src="/image13@2x.png"
                  />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[5px]">
                  <div className="self-stretch flex flex-row items-center justify-start">
                    <div className="flex-1 relative leading-[150%] font-semibold">
                      Nisha
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start text-base">
                    <div className="flex-1 relative leading-[150%]">
                      CoDesk Student
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start text-center text-base">
                <div className="flex-1 relative leading-[150%]">
                  I love learning with CoDesk. It's always fun and the teacher
                  is nice and kind.
                </div>
              </div>
            </div>
            <div className="w-[350px] shadow-[0px_1px_3px_rgba(0,_0,_0,_0.1)] rounded bg-nero flex flex-col items-start justify-start p-[15px] box-border gap-[15px] sm:pl-[5px] sm:pr-[5px] sm:box-border">
              <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[30px]">
                <div className="flex flex-row items-start justify-start">
                  <img
                    className="w-[100px] relative rounded-100xl h-[100px] object-cover"
                    alt=""
                    src="/image14@2x.png"
                  />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[5px]">
                  <div className="self-stretch flex flex-row items-center justify-start">
                    <div className="flex-1 relative leading-[150%] font-semibold">
                      Peter
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start text-base">
                    <div className="flex-1 relative leading-[150%]">
                      CoDesk Student
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start text-center text-base">
                <div className="flex-1 relative leading-[150%]">
                  Iam doing great with codesk. Iam building games and play.
                </div>
              </div>
            </div>
            <div className="w-[350px] shadow-[0px_1px_3px_rgba(0,_0,_0,_0.1)] rounded bg-nero flex flex-col items-start justify-start p-[15px] box-border gap-[15px] sm:pl-[5px] sm:pr-[5px] sm:box-border">
              <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[30px]">
                <div className="flex flex-row items-start justify-start">
                  <img
                    className="w-[100px] relative rounded-100xl h-[100px] object-cover"
                    alt=""
                    src="/image15@2x.png"
                  />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[5px]">
                  <div className="self-stretch flex flex-row items-center justify-start">
                    <div className="flex-1 relative leading-[150%] font-semibold">
                      Rishav
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start text-base">
                    <div className="flex-1 relative leading-[150%]">
                      CoDesk Student
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start text-center text-base">
                <div className="flex-1 relative leading-[150%]">
                  I now have two apps published on the Google Play Store. I'm
                  glad to be learning coding.
                </div>
              </div>
            </div>
            <div className="w-[350px] shadow-[0px_1px_3px_rgba(0,_0,_0,_0.1)] rounded bg-nero flex flex-col items-start justify-start p-[15px] box-border gap-[15px] sm:pl-[5px] sm:pr-[5px] sm:box-border">
              <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[30px]">
                <div className="flex flex-row items-start justify-start">
                  <img
                    className="w-[100px] relative rounded-100xl h-[100px] object-cover"
                    alt=""
                    src="/image16@2x.png"
                  />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[5px]">
                  <div className="self-stretch flex flex-row items-center justify-start">
                    <div className="flex-1 relative leading-[150%] font-semibold">
                      Roshni
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start text-base">
                    <div className="flex-1 relative leading-[150%]">
                      CoDesk Student
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start text-center text-base">
                <div className="flex-1 relative leading-[150%]">
                  CoDesk's well-structured courses have made coding fun for my
                  son. They're the best and the quickest.
                </div>
              </div>
            </div>
            <div className="w-[350px] shadow-[0px_1px_3px_rgba(0,_0,_0,_0.1)] rounded bg-nero flex flex-col items-start justify-start p-[15px] box-border gap-[15px] sm:pl-[5px] sm:pr-[5px] sm:box-border">
              <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[30px]">
                <div className="flex flex-row items-start justify-start">
                  <img
                    className="w-[100px] relative rounded-100xl h-[100px] object-cover"
                    alt=""
                    src="/image17@2x.png"
                  />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[5px]">
                  <div className="self-stretch flex flex-row items-center justify-start">
                    <div className="flex-1 relative leading-[150%] font-semibold">
                      Surya
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start text-base">
                    <div className="flex-1 relative leading-[150%]">
                      CoDesk Student
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start text-center text-base">
                <div className="flex-1 relative leading-[150%]">
                  My son is now an expert in web development, all thanks to the
                  excellent teachers on CoDesk.
                </div>
              </div>
            </div>
            <div className="w-[350px] shadow-[0px_1px_3px_rgba(0,_0,_0,_0.1)] rounded bg-nero flex flex-col items-start justify-start p-[15px] box-border gap-[15px] sm:pl-[5px] sm:pr-[5px] sm:box-border">
              <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[30px]">
                <div className="flex flex-row items-start justify-start">
                  <img
                    className="w-[100px] relative rounded-100xl h-[100px] object-cover"
                    alt=""
                    src="/image18@2x.png"
                  />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[5px]">
                  <div className="self-stretch flex flex-row items-center justify-start">
                    <div className="flex-1 relative leading-[150%] font-semibold">
                      Preeti
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start text-base">
                    <div className="flex-1 relative leading-[150%]">
                      CoDesk Student
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start text-center text-base">
                <div className="flex-1 relative leading-[150%]">
                  My son particularly enjoys CoDesk's curriculum that offers
                  interesting exercises and projects such as Minecraft, Star
                  Wars and Captain America.
                </div>
              </div>
            </div>
          </div>
          <section className="self-stretch bg-nero flex flex-row flex-wrap items-start justify-center p-[15px]">
            <button
              className="cursor-pointer py-[9px] px-5 bg-nero rounded box-border h-[41px] flex flex-row items-center justify-center border-[1px] border-solid border-aqua-deep"
              onClick={onShowReviewsButtonClick}
            >
              <div className="relative text-lg leading-[150%] font-semibold font-body-xl-600 text-aqua-deep text-center inline-block max-h-[58px]">
                Show reviews
              </div>
            </button>
          </section>
        </div>
        <div className="self-stretch bg-nero flex flex-row flex-wrap items-center justify-center p-[15px] gap-[0px_15px] z-[8] text-left text-aqua-deep md:flex-col md:gap-[15px] md:p-[15px] md:box-border sm:gap-[5px] sm:p-[5px] sm:box-border">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover md:flex-[unset] md:self-stretch"
            alt=""
            src="/dashboarddemopng@2x.png"
          />
          <div className="flex-1 flex flex-col items-start justify-center p-[15px] gap-[15px] md:flex-[unset] md:self-stretch">
            <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[0.5px]">
              <div className="self-stretch relative leading-[120%] font-semibold sm:text-9xl">
                <span>Intuitive learning dashboard</span>
                <span className="text-black"> for kids and parents</span>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[10px] text-sm text-black">
              <div className="self-stretch relative leading-[150%]">{`Class management & progress tracking`}</div>
              <div className="self-stretch relative leading-[150%]">
                Assignments and task
              </div>
              <div className="self-stretch relative leading-[150%]">
                Session notes
              </div>
              <div className="self-stretch relative leading-[150%]">
                Certificates of completion
              </div>
              <div className="self-stretch relative leading-[150%]">
                Course and instructor information
              </div>
              <div className="self-stretch relative leading-[150%]">
                Access to coding competitions, quizzes, resources and much more.
              </div>
            </div>
            <button
              className="cursor-pointer pt-[18.5px] px-[65px] pb-[19px] bg-aqua-deep self-stretch rounded flex flex-row items-center justify-center border-[1px] border-solid border-nero"
              onClick={onShowDashboardsButtonClick}
            >
              <div className="relative text-lg tracking-[-0.01em] leading-[20px] capitalize font-semibold font-inter text-nero text-center inline-block max-h-[58px]">
                Show Dashboards
              </div>
            </button>
          </div>
        </div>
        <section className="self-stretch bg-nero flex flex-col items-center justify-start p-5 gap-[20px] z-[7] text-center text-17xl text-black font-body-xl-600 sm:pl-[5px] sm:pr-[5px] sm:box-border">
          <div className="self-stretch flex flex-col items-center justify-start pt-0 px-0 pb-[0.5px]">
            <div className="self-stretch relative leading-[120%] font-semibold sm:text-9xl">
              See amazing projects created by our students
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[10px] text-left text-5xl md:flex-row md:flex-wrap sm:flex-row sm:flex-wrap">
            <div className="w-[350px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-lg bg-nero flex flex-col items-start justify-start p-2.5 box-border relative gap-[25px]">
              <img
                className="self-stretch relative max-w-full overflow-hidden h-[213px] shrink-0 object-cover z-[0]"
                alt=""
                src="/image@2x.png"
              />
              <div className="self-stretch flex flex-col items-start justify-start gap-[5px] z-[1]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[2px]">
                  <div className="self-stretch flex flex-row flex-wrap items-center justify-between">
                    <div className="flex-1 flex flex-col items-start justify-start">
                      <div className="self-stretch relative leading-[150%] font-semibold">
                        Nisha KC
                      </div>
                    </div>
                    <div className="w-[110px] flex flex-row items-center justify-end text-right text-base">
                      <div className="flex-1 flex flex-col items-end justify-center py-0 pr-[5px] pl-0">
                        <div className="w-[65px] relative leading-[150%] flex items-center">{`Grade: `}</div>
                      </div>
                      <div className="w-10 flex flex-col items-start justify-center py-0 pr-[5px] pl-0 box-border text-left text-wwwcodingalcom-mine-shaft">
                        <div className="self-stretch relative leading-[150%]">
                          8
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[220.3px] pl-0 text-base">
                    <div className="relative leading-[150%] inline-block max-w-[373.3299865722656px]">
                      Website development
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start text-sm">
                    <div className="relative leading-[120%] font-semibold inline-block max-w-[373.3299865722656px]">
                      Premier league
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-center">
                  <button
                    className="cursor-pointer py-[9px] px-5 bg-aqua-deep rounded flex flex-row items-center justify-center border-[1px] border-solid border-nero"
                    onClick={onViewProjectButtonClick}
                  >
                    <div className="relative text-lg leading-[150%] font-semibold font-body-xl-600 text-nero text-center inline-block max-h-[58px]">
                      View Project
                    </div>
                  </button>
                </div>
              </div>
              <img
                className="w-[100px] absolute !m-[0] top-[150px] left-[10px] rounded-100xl h-[100px] object-cover z-[2]"
                alt=""
                src="/rectangle-2@2x.png"
              />
            </div>
            <div className="w-[350px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-lg bg-nero flex flex-col items-start justify-start p-2.5 box-border relative gap-[25px]">
              <img
                className="self-stretch relative max-w-full overflow-hidden h-[213px] shrink-0 object-cover z-[0]"
                alt=""
                src="/image@2x.png"
              />
              <div className="self-stretch flex flex-col items-start justify-start gap-[5px] z-[1]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[2px]">
                  <div className="self-stretch flex flex-row flex-wrap items-center justify-between">
                    <div className="flex-1 flex flex-col items-start justify-start">
                      <div className="self-stretch relative leading-[150%] font-semibold">
                        Aayush Shrestha
                      </div>
                    </div>
                    <div className="w-[110px] flex flex-row items-center justify-end text-right text-base">
                      <div className="flex-1 flex flex-col items-end justify-center py-0 pr-[5px] pl-0">
                        <div className="w-[65px] relative leading-[150%] flex items-center">{`Grade: `}</div>
                      </div>
                      <div className="w-10 flex flex-col items-start justify-center py-0 pr-[5px] pl-0 box-border text-left text-wwwcodingalcom-mine-shaft">
                        <div className="self-stretch relative leading-[150%]">
                          9
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[220.3px] pl-0 text-base">
                    <div className="relative leading-[150%] inline-block max-w-[373.3299865722656px]">
                      Game Development
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start text-sm">
                    <div className="relative leading-[120%] font-semibold inline-block max-w-[373.3299865722656px]">
                      Mine Craft
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-center">
                  <button
                    className="cursor-pointer py-[9px] px-5 bg-aqua-deep rounded flex flex-row items-center justify-center border-[1px] border-solid border-nero"
                    onClick={onViewProjectButton1Click}
                  >
                    <div className="relative text-lg leading-[150%] font-semibold font-body-xl-600 text-nero text-center inline-block max-h-[58px]">
                      View Project
                    </div>
                  </button>
                </div>
              </div>
              <img
                className="w-[100px] absolute !m-[0] top-[150px] left-[10px] rounded-100xl h-[100px] object-cover z-[2]"
                alt=""
                src="/rectangle-2@2x.png"
              />
            </div>
            <div className="w-[350px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-lg bg-nero flex flex-col items-start justify-start p-2.5 box-border relative gap-[25px]">
              <img
                className="self-stretch relative max-w-full overflow-hidden h-[213px] shrink-0 object-cover z-[0]"
                alt=""
                src="/image@2x.png"
              />
              <div className="self-stretch flex flex-col items-start justify-start gap-[5px] z-[1]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[2px]">
                  <div className="self-stretch flex flex-row flex-wrap items-center justify-between">
                    <div className="flex-1 flex flex-col items-start justify-start">
                      <div className="self-stretch relative leading-[150%] font-semibold">
                        Aayush Shrestha
                      </div>
                    </div>
                    <div className="w-[110px] flex flex-row items-center justify-end text-right text-base">
                      <div className="flex-1 flex flex-col items-end justify-center py-0 pr-[5px] pl-0">
                        <div className="w-[65px] relative leading-[150%] flex items-center">{`Grade: `}</div>
                      </div>
                      <div className="w-10 flex flex-col items-start justify-center py-0 pr-[5px] pl-0 box-border text-left text-wwwcodingalcom-mine-shaft">
                        <div className="self-stretch relative leading-[150%]">
                          10
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[220.3px] pl-0 text-base">
                    <div className="relative leading-[150%] inline-block max-w-[373.3299865722656px]">
                      Game Development
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start text-sm">
                    <div className="relative leading-[120%] font-semibold inline-block max-w-[373.3299865722656px]">
                      Car Race
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-center">
                  <button
                    className="cursor-pointer py-[9px] px-5 bg-aqua-deep rounded flex flex-row items-center justify-center border-[1px] border-solid border-nero"
                    onClick={onViewProjectButton2Click}
                  >
                    <div className="relative text-lg leading-[150%] font-semibold font-body-xl-600 text-nero text-center inline-block max-h-[58px]">
                      View Project
                    </div>
                  </button>
                </div>
              </div>
              <img
                className="w-[100px] absolute !m-[0] top-[150px] left-[10px] rounded-100xl h-[100px] object-cover z-[2]"
                alt=""
                src="/rectangle-2@2x.png"
              />
            </div>
          </div>
          <section className="self-stretch bg-nero flex flex-row flex-wrap items-start justify-center p-[15px]">
            <button
              className="cursor-pointer py-[9px] px-5 bg-nero rounded box-border h-[41px] flex flex-row items-center justify-center border-[1px] border-solid border-aqua-deep"
              autoFocus={true}
              onClick={onSeeMoreProjectsButtonClick}
            >
              <div className="relative text-lg leading-[150%] font-semibold font-body-xl-600 text-aqua-deep text-center inline-block max-h-[58px]">
                See more projects
              </div>
            </button>
          </section>
        </section>
        <div className="w-[1400px] bg-nero hidden flex-col items-start justify-start p-5 box-border gap-[20px] z-[6] sm:pl-[5px] sm:pr-[5px] sm:box-border">
          <div className="self-stretch flex flex-row items-center justify-center gap-[13px]">
            <div className="w-9 h-[131px] overflow-hidden shrink-0 flex flex-col items-end justify-center">
              <img
                className="self-stretch relative max-w-full overflow-hidden h-[29.2px] shrink-0"
                alt=""
                src="/vector4.svg"
              />
            </div>
            <div className="flex-1 relative leading-[120%] font-semibold">
              It's our love and passion for coding that drives us to teach
              coding
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-center justify-center p-[15px] gap-[15px] text-base md:flex-row md:flex-wrap sm:pl-[5px] sm:pr-[5px] sm:box-border">
            <div className="w-[300px] shadow-[0px_25px_50px_-12px_rgba(0,_0,_0,_0.25)] rounded-lg bg-nero overflow-hidden shrink-0 flex flex-col items-center justify-center py-[50px] px-[15px] box-border gap-[15px]">
              <div className="self-stretch flex flex-col items-center justify-start">
                <div className="self-stretch relative leading-[120%] font-semibold whitespace-pre-wrap">{`“Teaching coding to kids is a huge responsibility and we want to take that”  `}</div>
              </div>
              <div className="w-full overflow-hidden flex flex-col items-center justify-center py-0 px-[42px] box-border max-w-[384px]">
                <img
                  className="w-[146px] relative rounded-61xl-5 h-[154px] object-cover"
                  alt=""
                  src="/rectangle-1@2x.png"
                />
              </div>
              <div className="self-stretch flex flex-col items-center justify-center gap-[2px]">
                <div className="self-stretch flex flex-col items-center justify-start text-5xl">
                  <div className="self-stretch relative leading-[150%] font-semibold">
                    Sandeep Neupane
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-center justify-start">
                  <div className="self-stretch relative leading-[150%]">{`Co-Founder & CEO, CoDesk`}</div>
                </div>
                <div className="self-stretch flex flex-col items-center justify-start">
                  <div className="self-stretch relative leading-[150%]">
                    IOE TU Dharan
                  </div>
                </div>
                <div className="w-[270px] h-[76px] hidden flex-col items-center justify-start min-h-[72px] text-wwwcodingalcom-mine-shaft">
                  <div className="w-[270px] relative leading-[120%] font-semibold hidden">{`Former Co-founder and CTO `}</div>
                </div>
              </div>
              <img
                className="w-8 relative h-8 overflow-hidden shrink-0 hidden"
                alt=""
                src="/arrowbendrightdown.svg"
              />
            </div>
            <div className="w-[300px] shadow-[0px_25px_50px_-12px_rgba(0,_0,_0,_0.25)] rounded-lg bg-nero overflow-hidden shrink-0 flex flex-col items-center justify-center py-[50px] px-[15px] box-border gap-[15px]">
              <div className="self-stretch flex flex-col items-center justify-start">
                <div className="self-stretch relative leading-[120%] font-semibold">
                  "Empowering young minds with coding skills is a profound
                  responsibility we eagerly embrace."
                </div>
              </div>
              <div className="w-full overflow-hidden flex flex-col items-center justify-center py-0 px-[42px] box-border max-w-[384px]">
                <img
                  className="w-[146px] relative rounded-61xl-5 h-[154px] object-cover"
                  alt=""
                  src="/rectangle-1@2x.png"
                />
              </div>
              <div className="self-stretch flex flex-col items-center justify-center gap-[2px]">
                <div className="self-stretch flex flex-col items-center justify-start text-5xl">
                  <div className="self-stretch relative leading-[150%] font-semibold">
                    Jeevan KC
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-center justify-start">
                  <div className="self-stretch relative leading-[150%]">{`Co-Founder & CTO, CoDesk`}</div>
                </div>
                <div className="self-stretch flex flex-col items-center justify-start">
                  <div className="self-stretch relative leading-[150%]">
                    IOE TU Dharan
                  </div>
                </div>
                <div className="w-[270px] hidden flex-col items-center justify-start min-h-[72px] text-wwwcodingalcom-mine-shaft">
                  <div className="self-stretch relative leading-[120%] font-semibold">{`Former Co-founder and CTO `}</div>
                </div>
              </div>
              <img
                className="w-8 relative h-8 overflow-hidden shrink-0 hidden"
                alt=""
                src="/arrowbendrightdown.svg"
              />
            </div>
            <div className="w-[300px] shadow-[0px_25px_50px_-12px_rgba(0,_0,_0,_0.25)] rounded-lg bg-nero overflow-hidden shrink-0 flex flex-col items-center justify-center py-[50px] px-[15px] box-border gap-[15px]">
              <div className="self-stretch flex flex-col items-center justify-start">
                <div className="self-stretch relative leading-[120%] font-semibold">
                  "Guiding children through the world of coding is a weighty
                  task we're committed to shouldering."
                </div>
              </div>
              <div className="w-full overflow-hidden flex flex-col items-center justify-center py-0 px-[42px] box-border max-w-[384px]">
                <img
                  className="w-[146px] relative rounded-61xl-5 h-[154px] object-cover"
                  alt=""
                  src="/rectangle-1@2x.png"
                />
              </div>
              <div className="self-stretch flex flex-col items-center justify-center gap-[2px]">
                <div className="self-stretch flex flex-col items-center justify-start text-5xl">
                  <div className="self-stretch relative leading-[150%] font-semibold">
                    Abin KC
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-center justify-start">
                  <div className="self-stretch relative leading-[150%]">{`Co-Founder & Marketing Leads, CoDesk`}</div>
                </div>
                <div className="self-stretch flex flex-col items-center justify-start">
                  <div className="self-stretch relative leading-[150%]">
                    IOE TU Dharan
                  </div>
                </div>
                <div className="w-[270px] hidden flex-col items-center justify-start min-h-[72px] text-wwwcodingalcom-mine-shaft">
                  <div className="self-stretch relative leading-[120%] font-semibold">{`Former Co-founder and CTO `}</div>
                </div>
              </div>
              <img
                className="w-8 relative h-8 overflow-hidden shrink-0 hidden"
                alt=""
                src="/arrowbendrightdown.svg"
              />
            </div>
          </div>
          <section className="self-stretch bg-nero flex flex-row flex-wrap items-start justify-center p-[15px]">
            <button
              className="cursor-pointer py-[9px] px-5 bg-nero rounded box-border h-[41px] flex flex-row items-center justify-center border-[1px] border-solid border-aqua-deep"
              onClick={onMeetOurTeamButtonClick}
            >
              <div className="relative text-lg leading-[150%] font-semibold font-body-xl-600 text-aqua-deep text-center inline-block max-h-[58px]">
                Meet our team
              </div>
            </button>
          </section>
        </div>
        <div className="self-stretch bg-nero flex flex-col items-center justify-start p-5 gap-[20px] z-[5] sm:pl-[5px] sm:pr-[5px] sm:box-border">
          <div className="self-stretch flex flex-col items-center justify-start pt-0 px-0 pb-[0.5px]">
            <div className="self-stretch relative leading-[120%] font-semibold sm:text-9xl">{`Most loved & trusted platform for kids to learn coding`}</div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-center justify-center p-[15px] gap-[15px] text-left text-base md:flex-row md:flex-wrap sm:pl-[5px] sm:pr-[5px] sm:box-border">
            <div className="w-[200px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded bg-nero flex flex-col items-start justify-start p-[15px] box-border gap-[15px] sm:w-[300px]">
              <img
                className="w-[50px] relative h-[50px] overflow-hidden shrink-0"
                alt=""
                src="/arrowssplit.svg"
              />
              <div className="self-stretch flex flex-row items-start justify-start">
                <div className="flex-1 relative leading-[120%] font-semibold">
                  Classes runs on hybrid model
                </div>
              </div>
            </div>
            <div className="w-[200px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded bg-nero flex flex-col items-start justify-start p-[15px] box-border gap-[15px] sm:w-[300px]">
              <img
                className="w-[50px] relative h-[50px] overflow-hidden shrink-0"
                alt=""
                src="/bathtub.svg"
              />
              <div className="self-stretch flex flex-row items-start justify-start">
                <div className="flex-1 relative leading-[120%] font-semibold">
                  Lifetime support and access to all the study resources
                </div>
              </div>
            </div>
            <div className="w-[200px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded bg-nero flex flex-col items-start justify-start p-[15px] box-border gap-[15px] sm:w-[300px]">
              <img
                className="w-[50px] relative h-[50px] overflow-hidden shrink-0"
                alt=""
                src="/batteryverticalfull.svg"
              />
              <div className="self-stretch flex flex-row items-start justify-start">
                <div className="flex-1 relative leading-[120%] font-semibold">{`All level of Coding courses `}</div>
              </div>
            </div>
            <div className="w-[200px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded bg-nero flex flex-col items-start justify-start p-[15px] box-border gap-[15px] sm:w-[300px]">
              <img
                className="w-[50px] relative h-[50px] overflow-hidden shrink-0"
                alt=""
                src="/presentationchart.svg"
              />
              <div className="self-stretch flex flex-row items-start justify-start">
                <div className="flex-1 relative leading-[120%] font-semibold">
                  Dashboard to track learning milestones and progress
                </div>
              </div>
            </div>
            <div className="w-[200px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded bg-nero flex flex-col items-start justify-start p-[15px] box-border gap-[15px] sm:w-[300px]">
              <img
                className="w-[50px] relative h-[50px] overflow-hidden shrink-0"
                alt=""
                src="/columnsplusright.svg"
              />
              <div className="self-stretch flex flex-row items-start justify-start">
                <div className="flex-1 relative leading-[120%] font-semibold">
                  Guided course journey for student
                </div>
              </div>
            </div>
          </div>
          <section className="self-stretch bg-nero flex flex-row flex-wrap items-start justify-center p-[15px]">
            <button
              className="cursor-pointer py-[9px] px-5 bg-nero rounded box-border h-[41px] flex flex-row items-center justify-center border-[1px] border-solid border-aqua-deep"
              autoFocus={true}
              onClick={onKnowMoreCodeskButtonClick}
            >
              <div className="relative text-lg leading-[150%] font-semibold font-body-xl-600 text-aqua-deep text-center inline-block max-h-[58px]">
                Know more CoDesk
              </div>
            </button>
          </section>
        </div>
        <div className="self-stretch bg-nero flex flex-col items-center justify-start p-5 box-border gap-[20px] min-w-[370px] z-[4] sm:pl-[5px] sm:pr-[5px] sm:box-border">
          <div className="self-stretch flex flex-row items-center justify-start">
            <div className="flex-1 relative leading-[120%] font-semibold sm:text-9xl">
              Frequently asked questions
            </div>
          </div>
          <Accordion className="self-stretch">
            <AccordionSummary expandIcon={<Icon>expand_more</Icon>}>
              <Typography>What is Codesklab?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Codesklab is an interactive online platform designed to teach
                kids coding in a fun and engaging way. It offers a variety of
                coding courses tailored for different age groups and skill
                levels.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="self-stretch">
            <AccordionSummary expandIcon={<Icon>expand_more</Icon>}>
              <Typography>Why should kids learn to code?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Coding for kids helps improve their logical thinking, critical
                thinking, problem-solving skills, creativity, mathematics and
                writing skills and also gives them valuable skills in life and
                at the workplace. Coding provides a competitive advantage when
                applying to colleges, internships, and jobs. In addition, basic
                programming knowledge can change how kids interact daily with
                the technologies they use. It’s a basic literacy–one we can’t
                afford to overlook.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="self-stretch">
            <AccordionSummary expandIcon={<Icon>expand_more</Icon>}>
              <Typography>{`My child is a beginner, is previous coding experience required? `}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Our coding courses for kids have been developed so that a
                complete beginner can follow along without any trouble. With
                technology increasingly prevalent across so many industries,
                even basic coding knowledge can help kids regardless of the
                career they ultimately decide to pursue.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="self-stretch">
            <AccordionSummary expandIcon={<Icon>expand_more</Icon>}>
              <Typography>Who is Codesklab for?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Codesklab is primarily designed for kids aged 6-16 who are
                interested in learning coding. However, it can be beneficial for
                anyone looking to start their coding journey regardless of age.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="self-stretch">
            <AccordionSummary expandIcon={<Icon>expand_more</Icon>}>
              <Typography>
                Do I need any prior coding experience to use Codesklab?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                No prior coding experience is necessary. Codesklab provides
                courses suitable for beginners as well as those with some coding
                background. The platform is designed to accommodate learners at
                various skill levels.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="self-stretch">
            <AccordionSummary expandIcon={<Icon>expand_more</Icon>}>
              <Typography>How are the courses structured?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Courses on Codesklab are divided into modules and lessons, each
                focusing on specific coding concepts or projects. The curriculum
                is carefully designed to ensure a smooth learning progression,
                with interactive activities and challenges to reinforce
                learning.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="self-stretch">
            <AccordionSummary expandIcon={<Icon>expand_more</Icon>}>
              <Typography>
                Are there any parental controls or monitoring features?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Codesklab provides parental controls and monitoring features,
                allowing parents to track their child's progress, set learning
                goals, and monitor their activity on the platform. Parents can
                also receive regular updates and reports on their child's
                performance.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="self-stretch">
            <AccordionSummary expandIcon={<Icon>expand_more</Icon>}>
              <Typography>
                Is there technical support available for users?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Yes, Codesklab provides technical support to assist users with
                any issues they may encounter while using the platform. Users
                can reach out to the support team via email or through the
                online help center.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <section className="self-stretch bg-nero flex flex-row flex-wrap items-start justify-center p-[15px]">
            <button
              className="cursor-pointer py-[9px] px-5 bg-aqua-deep rounded flex flex-row items-center justify-center border-[1px] border-solid border-nero"
              autoFocus={true}
              onClick={onAskYOurDoubtButtonClick}
            >
              <div className="relative text-lg leading-[150%] font-semibold font-body-xl-600 text-nero text-center inline-block max-h-[58px]">
                Ask your doubt?
              </div>
            </button>
          </section>
        </div>
        <div className="self-stretch bg-nero flex flex-row items-center justify-center p-5 z-[3] md:flex-col sm:pl-[5px] sm:pr-[5px] sm:box-border">
          <div className="flex-1 bg-nero flex flex-col items-start justify-start p-5 gap-[40px] md:flex-[unset] md:self-stretch sm:pl-[5px] sm:pr-[5px] sm:box-border">
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-col items-center justify-start pt-0 px-2.5 pb-3">
                <div className="self-stretch relative leading-[120%] font-semibold sm:text-9xl">
                  You are in safe hands at CoDeskLab
                </div>
              </div>
              <div className="self-stretch h-[35px] flex flex-row items-center justify-center p-2.5 box-border text-sm">
                <div className="flex-1 relative leading-[150%] font-medium">
                  Like thousands of other parents who have enrolled their kids
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start text-base">
              <div className="self-stretch flex flex-col items-center justify-center">
                <div className="self-stretch relative leading-[150%]">
                  At CoDeskLab, we are passionate about our stakeholder. If at
                  any point, you feel that you wish to discontinue using
                  CoDeskLab, please email us at billing@codesklab.com and we
                  will immediately process your refund for the remaining
                  lessons/classes, no questions asked.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch bg-nero flex flex-col items-center justify-center gap-[30px] z-[2]">
          <div className="self-stretch bg-nero flex flex-col items-center justify-center py-0 px-[5px] gap-[5px]">
            <div className="self-stretch flex flex-row items-center justify-center p-2.5">
              <div className="flex-1 relative leading-[120%] font-semibold sm:text-9xl">
                Contact Us
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-center p-2.5 text-base">
              <div className="flex-1 relative leading-[150%]">
                Feel free to reach out to us
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-center justify-center p-5">
            <form className="m-0 w-[550px] shadow-[0px_0px_24px_rgba(0,_0,_0,_0.03)] rounded-xl bg-nero box-border flex flex-col items-start justify-start py-7 px-[30px] gap-[17px] border-[1px] border-solid border-nero md:w-[350px]">
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch relative text-lg leading-[150%] font-semibold font-body-xl-600 text-nero1 text-left">
                  Fill in your details to and reach out to us!
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
              </div>
              <button
                className="cursor-pointer py-[9px] px-5 bg-aqua-deep rounded flex flex-row items-center justify-center border-[1px] border-solid border-nero"
                onClick={openDoneModalPopup}
              >
                <div className="relative text-lg leading-[150%] font-semibold font-body-xl-600 text-nero text-center inline-block max-h-[58px]">
                  Subimt
                </div>
              </button>
            </form>
          </div>
        </div>
        <div className="self-stretch bg-nero flex flex-col items-center justify-start p-5 gap-[20px] z-[1] sm:pl-[5px] sm:pr-[5px] sm:box-border">
          <div className="self-stretch flex flex-col items-center justify-start pt-0 px-0 pb-[0.5px]">
            <div className="self-stretch relative leading-[120%] font-semibold sm:text-9xl">
              Special thanks to
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[20px] text-xs text-dimgray md:flex-row md:flex-wrap">
            <div className="w-[368px] h-[212px] flex flex-col items-start justify-start pt-0 px-0 pb-3.5 box-border gap-[8px] min-w-[350px]">
              <div className="self-stretch flex flex-col items-center justify-start py-0 pr-[114px] pl-[113.9px]">
                <div className="w-[305px] relative leading-[130%] flex items-center justify-center">
                  Backed by
                </div>
              </div>
              <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[10px]">
                <img
                  className="w-[150px] relative h-[150px] object-cover"
                  alt=""
                  src="/random-symboles-3@2x.png"
                />
                <img
                  className="w-[150px] relative h-[150px] object-cover"
                  alt=""
                  src="/random-symboles-1@2x.png"
                />
              </div>
            </div>
            <div className="w-[368px] h-[212px] flex flex-col items-start justify-start pt-0 px-0 pb-3.5 box-border gap-[8px] min-w-[350px]">
              <div className="self-stretch flex flex-col items-center justify-start py-0 pr-[114px] pl-[113.9px]">
                <div className="w-[309px] relative leading-[130%] flex items-center justify-center">{`Built by `}</div>
              </div>
              <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[10px]">
                <img
                  className="w-[150px] relative h-[108px] object-cover"
                  alt=""
                  src="/standard-collection-25@2x.png"
                />
                <img
                  className="w-[150px] relative h-[150px] object-cover"
                  alt=""
                  src="/standard-collection-24@2x.png"
                />
              </div>
            </div>
            <div className="w-[368px] h-[212px] flex flex-col items-center justify-center pt-0 px-0 pb-3.5 box-border gap-[8px] min-w-[350px]">
              <div className="self-stretch flex flex-col items-center justify-start py-0 pr-[114px] pl-[113.9px]">
                <div className="w-[305px] relative leading-[130%] flex items-center justify-center">
                  Supported by
                </div>
              </div>
              <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[10px]">
                <img
                  className="w-[150px] relative h-[150px] object-cover"
                  alt=""
                  src="/standard-collection-18@2x.png"
                />
                <img
                  className="w-[150px] relative h-[150px]"
                  alt=""
                  src="/standard-collection-17.svg"
                />
              </div>
            </div>
          </div>
          <section className="self-stretch bg-nero flex flex-row flex-wrap items-start justify-center p-[15px]">
            <button
              className="cursor-pointer py-[9px] px-5 bg-aqua-deep rounded flex flex-row items-center justify-center border-[1px] border-solid border-nero"
              autoFocus={true}
              onClick={onSupportUsButtonClick}
            >
              <div className="relative text-lg leading-[150%] font-semibold font-body-xl-600 text-nero text-center inline-block max-h-[58px]">
                support us
              </div>
            </button>
          </section>
        </div>
        <Footer />
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

export default HomePage;
