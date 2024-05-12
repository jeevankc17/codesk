import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CoursePage: FunctionComponent = () => {
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
      "[data-scroll-to='comboCourseContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onCardscourseContainerClick = useCallback(() => {
    //TODO: link
  }, []);

  const onViewCurriculumButtonClick = useCallback(() => {
    navigate("/curriculumbycoursepage");
  }, [navigate]);

  const onCardscourseContainer1Click = useCallback(() => {
    //TODO: link
  }, []);

  const onViewCurriculumButton1Click = useCallback(() => {
    navigate("/curriculumbycoursepage");
  }, [navigate]);

  const onCardscourseContainer2Click = useCallback(() => {
    //TODO: link
  }, []);

  const onViewCurriculumButton2Click = useCallback(() => {
    navigate("/curriculumbycoursepage");
  }, [navigate]);

  const onCardscourseContainer3Click = useCallback(() => {
    //TODO: link
  }, []);

  const onViewCurriculumButton3Click = useCallback(() => {
    navigate("/curriculumbycoursepage");
  }, [navigate]);

  const onCardscourseContainer4Click = useCallback(() => {
    //TODO: link
  }, []);

  const onViewCurriculumButton4Click = useCallback(() => {
    navigate("/curriculumbycoursepage");
  }, [navigate]);

  const onCardscourseContainer5Click = useCallback(() => {
    //TODO: link
  }, []);

  const onViewCurriculumButton5Click = useCallback(() => {
    navigate("/curriculumbycoursepage");
  }, [navigate]);

  const onButtonscurriculumClick = useCallback(() => {
    //TODO: button link
  }, []);

  const onDownloadButtonClick = useCallback(() => {
    navigate("/commingsoonpage");
  }, [navigate]);

  const onButtonscurriculumClick1 = useCallback(() => {
    //TODO: button link
  }, []);

  const onDownloadButton1Click = useCallback(() => {
    navigate("/commingsoonpage");
  }, [navigate]);

  const onButtonscurriculumClick2 = useCallback(() => {
    //TODO: button link
  }, []);

  const onDownloadButton2Click = useCallback(() => {
    navigate("/commingsoonpage");
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

  return (
    <div className="w-full relative bg-nero flex flex-col items-center justify-start p-5 box-border gap-[20px] text-center text-17xl text-black font-body-medium-400 sm:pl-[5px] sm:pr-[5px] sm:box-border">
      <Navbar
        logoColor="#1f95f2"
        onLogoClick={onLogoClick}
        onCoursesClick={onCoursesClick}
        onQuizzesClick={onQuizzesClick}
        onCompetetionsClick={onCompetetionsClick}
        onAboutUsClick={onAboutUsClick}
        coursesColor="#FF5A43"
        competetionsColor="#000"
        aboutUsColor="#000"
        quizzesColor="#000"
      />
      <div className="self-stretch rounded-mini bg-footer-header flex flex-row items-center justify-between py-0 px-[15px] z-[4] text-left text-29xl text-nero lg:flex-col md:flex-col sm:pl-[5px] sm:pr-[5px] sm:box-border">
        <div className="flex-1 flex flex-col items-center justify-center p-[15px] gap-[34px] lg:order-[2] lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch">
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch relative leading-[120%] font-semibold sm:text-13xl">
              All Coding Courses
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start text-base">
            <div className="self-stretch relative leading-[150%]">
              Pick from a wide range of online coding courses for kids and set
              your children on the path of success
            </div>
          </div>
          <button
            className="cursor-pointer py-[9px] px-5 bg-tomato self-stretch rounded box-border h-[38px] flex flex-row items-center justify-center border-[1px] border-solid border-nero"
            autoFocus={true}
            onClick={onScrollBannerButtonClick}
          >
            <div className="relative text-lg tracking-[-0.01em] leading-[20px] capitalize font-semibold font-inter text-nero text-center inline-block max-h-[58px]">
              View a Courses
            </div>
          </button>
        </div>
        <img
          className="flex-1 relative max-w-full overflow-hidden h-[500px] object-cover lg:order-[1] lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch sm:h-[300px]"
          alt=""
          src="/image-51@2x.png"
        />
      </div>
      <div className="self-stretch bg-nero flex flex-col items-center justify-center gap-[50px] relative z-[3]">
        <div className="self-stretch bg-nero flex flex-col items-center justify-center py-0 px-[5px] gap-[5px]">
          <div className="self-stretch flex flex-row items-center justify-center p-2.5">
            <div className="flex-1 relative leading-[120%] font-semibold sm:text-9xl">
              Specialized coding courses
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-center p-2.5 text-sm">
            <div className="flex-1 relative leading-[150%]">
              Learn only what you want to learn with coding courses focused on
              app development, website building, game development, data science,
              or more
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-center justify-center p-5 gap-[50px] text-left text-base">
          <div
            className="w-[350px] rounded-lg bg-nero flex flex-col items-start justify-start p-2.5 box-border gap-[10px] cursor-pointer"
            onClick={onCardscourseContainerClick}
          >
            <div className="self-stretch relative rounded-t-md rounded-b-none bg-nero h-[99px] text-darkslateblue">
              <img
                className="absolute top-[-38px] right-[-34px] w-[227px] h-[123px] overflow-hidden object-cover"
                alt=""
                src="/scratchprogrammingpng@2x.png"
              />
              <div className="absolute top-[37px] left-[-3px] rounded-8xs bg-nero h-[37px] flex flex-row items-center justify-center p-2.5 box-border">
                <div className="relative leading-[150%]">Foundation</div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start text-5xl text-dodger-blue">
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch bg-nero flex flex-row items-center justify-center">
                  <div className="flex-1 relative leading-[150%] font-semibold">
                    Scratch Programming
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-nero flex flex-col items-center justify-center gap-[5px] text-sm text-black">
                <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                  <img
                    className="w-8 relative h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/fire1.svg"
                  />
                  <div className="flex-1 relative tracking-[-0.01em] leading-[22px] whitespace-pre-wrap">
                    Understanding fundamental programming concepts through
                    visual coding.
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                  <img
                    className="w-8 relative h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/fire2.svg"
                  />
                  <div className="flex-1 relative tracking-[-0.01em] leading-[22px] whitespace-pre-wrap">
                    Learning to create interactive stories, games, and
                    animations.
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                  <img
                    className="w-8 relative h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/fire3.svg"
                  />
                  <div className="flex-1 relative tracking-[-0.01em] leading-[22px] whitespace-pre-wrap">
                    Exploring computational thinking and problem-solving skills.
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[5px] text-sm">
              <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="w-6 relative h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/chalkboardteacher.svg"
                />
                <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                  <div className="flex-1 relative leading-[120%] font-semibold">
                    Grade 3 and above
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="w-6 relative h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/book--undefined--glyph-undefined.svg"
                />
                <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                  <div className="flex-1 relative leading-[120%] font-semibold">{`6 Modules, 36 Lessons & 50 classes`}</div>
                </div>
              </div>
              <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="w-6 relative h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/microsoftwordlogo.svg"
                />
                <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                  <div className="flex-1 relative leading-[120%] font-semibold">{`Study Materials `}</div>
                </div>
              </div>
              <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="w-6 relative h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/question.svg"
                />
                <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                  <div className="flex-1 relative leading-[120%] font-semibold">{`Worksheets & Quizzes`}</div>
                </div>
              </div>
              <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="w-6 relative h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/celltower.svg"
                />
                <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                  <div className="flex-1 relative leading-[120%] font-semibold">
                    100+ fun activities and projects
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
              <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                <img className="w-6 relative h-6" alt="" src="/vector.svg" />
                <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                  <div className="flex-1 relative leading-[150%]">
                    Scratch Programming Certificate
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                <img className="w-6 relative h-6" alt="" src="/vector.svg" />
                <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                  <div className="flex-1 relative leading-[150%]">
                    Lifetime access to course content
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                <img className="w-6 relative h-6" alt="" src="/vector.svg" />
                <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                  <div className="flex-1 relative leading-[150%]">
                    Exclusive access to competitions
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                <img className="w-6 relative h-6" alt="" src="/vector.svg" />
                <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                  <div className="flex-1 relative leading-[150%]">
                    Scholarships for top performers
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch bg-nero flex flex-col items-center justify-start">
              <button
                className="cursor-pointer py-[9px] px-5 bg-nero self-stretch rounded flex flex-row items-center justify-center border-[1px] border-solid border-aqua-deep"
                onClick={onViewCurriculumButtonClick}
              >
                <div className="relative text-lg leading-[150%] font-semibold font-body-medium-400 text-aqua-deep text-center inline-block max-h-[58px]">
                  View Curriculum
                </div>
              </button>
            </div>
          </div>
          <div
            className="w-[350px] rounded-lg bg-nero flex flex-col items-start justify-start p-2.5 box-border gap-[10px] cursor-pointer"
            onClick={onCardscourseContainer1Click}
          >
            <div className="self-stretch relative rounded-t-md rounded-b-none bg-nero h-[99px] text-darkslateblue">
              <img
                className="absolute top-[-38px] right-[-34px] w-[227px] h-[123px] overflow-hidden object-cover"
                alt=""
                src="/scratchprogrammingpng@2x.png"
              />
              <div className="absolute top-[37px] left-[-3px] rounded-8xs bg-nero h-[37px] flex flex-row items-center justify-center p-2.5 box-border">
                <div className="relative leading-[150%]">Game Development</div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start text-5xl text-dodger-blue">
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch bg-nero flex flex-row items-center justify-center">
                  <div className="flex-1 relative leading-[150%] font-semibold">
                    Robolox Programming
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-nero flex flex-col items-center justify-center gap-[5px] text-sm text-black">
                <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                  <img
                    className="w-8 relative h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/fire1.svg"
                  />
                  <div className="flex-1 relative tracking-[-0.01em] leading-[22px] whitespace-pre-wrap">
                    Mastering the tools and features of Roblox Studio for
                    building immersive game environments.
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                  <img
                    className="w-8 relative h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/fire2.svg"
                  />
                  <div className="flex-1 relative tracking-[-0.01em] leading-[22px] whitespace-pre-wrap">
                    Learning Lua programming language to create interactive game
                    mechanics and functionalities.
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                  <img
                    className="w-8 relative h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/fire3.svg"
                  />
                  <div className="flex-1 relative tracking-[-0.01em] leading-[22px] whitespace-pre-wrap">
                    Understanding the fundamentals of game design to create
                    engaging gameplay experiences.
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[5px] text-sm">
              <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="w-6 relative h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/chalkboardteacher.svg"
                />
                <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                  <div className="flex-1 relative leading-[120%] font-semibold">
                    Grade 7 and above
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="w-6 relative h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/book--undefined--glyph-undefined.svg"
                />
                <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                  <div className="flex-1 relative leading-[120%] font-semibold">{`6 Modules, 36 Lessons & 50 classes`}</div>
                </div>
              </div>
              <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="w-6 relative h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/microsoftwordlogo.svg"
                />
                <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                  <div className="flex-1 relative leading-[120%] font-semibold">{`Study Materials `}</div>
                </div>
              </div>
              <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="w-6 relative h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/question.svg"
                />
                <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                  <div className="flex-1 relative leading-[120%] font-semibold">{`Worksheets & Quizzes`}</div>
                </div>
              </div>
              <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="w-6 relative h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/celltower.svg"
                />
                <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                  <div className="flex-1 relative leading-[120%] font-semibold">
                    100+ fun activities and projects
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
              <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                <img className="w-6 relative h-6" alt="" src="/vector.svg" />
                <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                  <div className="flex-1 relative leading-[150%]">
                    Scratch Programming Certificate
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                <img className="w-6 relative h-6" alt="" src="/vector.svg" />
                <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                  <div className="flex-1 relative leading-[150%]">
                    Lifetime access to course content
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                <img className="w-6 relative h-6" alt="" src="/vector.svg" />
                <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                  <div className="flex-1 relative leading-[150%]">
                    Exclusive access to competitions
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                <img className="w-6 relative h-6" alt="" src="/vector.svg" />
                <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                  <div className="flex-1 relative leading-[150%]">
                    Scholarships for top performers
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch bg-nero flex flex-col items-center justify-start">
              <button
                className="cursor-pointer py-[9px] px-5 bg-nero self-stretch rounded flex flex-row items-center justify-center border-[1px] border-solid border-aqua-deep"
                onClick={onViewCurriculumButton1Click}
              >
                <div className="relative text-lg leading-[150%] font-semibold font-body-medium-400 text-aqua-deep text-center inline-block max-h-[58px]">
                  View Curriculum
                </div>
              </button>
            </div>
          </div>
          <div
            className="w-[350px] rounded-lg bg-nero flex flex-col items-start justify-start p-2.5 box-border gap-[10px] cursor-pointer"
            onClick={onCardscourseContainer2Click}
          >
            <div className="self-stretch relative rounded-t-md rounded-b-none bg-nero h-[99px] text-darkslateblue">
              <img
                className="absolute top-[-38px] right-[-34px] w-[227px] h-[123px] overflow-hidden object-cover"
                alt=""
                src="/scratchprogrammingpng@2x.png"
              />
              <div className="absolute top-[37px] left-[-3px] rounded-8xs bg-nero h-[37px] flex flex-row items-center justify-center p-2.5 box-border">
                <div className="relative leading-[150%]">App Development</div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start text-5xl text-dodger-blue">
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch bg-nero flex flex-row items-center justify-center">
                  <div className="flex-1 relative leading-[150%] font-semibold">
                    Thunkable Programming
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-nero flex flex-col items-center justify-center gap-[5px] text-sm text-black">
                <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                  <img
                    className="w-8 relative h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/fire1.svg"
                  />
                  <div className="flex-1 relative tracking-[-0.01em] leading-[22px] whitespace-pre-wrap">
                    Building mobile apps without traditional coding using a
                    visual programming interface.
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                  <img
                    className="w-8 relative h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/fire2.svg"
                  />
                  <div className="flex-1 relative tracking-[-0.01em] leading-[22px] whitespace-pre-wrap">
                    Integrating various features such as sensors, APIs, and
                    databases into app development.
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                  <img
                    className="w-8 relative h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/fire3.svg"
                  />
                  <div className="flex-1 relative tracking-[-0.01em] leading-[22px] whitespace-pre-wrap">
                    Understanding the app development lifecycle from design to
                    deployment.
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[5px] text-sm">
              <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="w-6 relative h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/chalkboardteacher.svg"
                />
                <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                  <div className="flex-1 relative leading-[120%] font-semibold">
                    Grade 7 and above
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="w-6 relative h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/book--undefined--glyph-undefined.svg"
                />
                <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                  <div className="flex-1 relative leading-[120%] font-semibold">{`6 Modules, 36 Lessons & 50 classes`}</div>
                </div>
              </div>
              <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="w-6 relative h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/microsoftwordlogo.svg"
                />
                <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                  <div className="flex-1 relative leading-[120%] font-semibold">{`Study Materials `}</div>
                </div>
              </div>
              <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="w-6 relative h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/question.svg"
                />
                <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                  <div className="flex-1 relative leading-[120%] font-semibold">{`Worksheets & Quizzes`}</div>
                </div>
              </div>
              <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="w-6 relative h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/celltower.svg"
                />
                <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                  <div className="flex-1 relative leading-[120%] font-semibold">
                    100+ fun activities and projects
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
              <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                <img className="w-6 relative h-6" alt="" src="/vector.svg" />
                <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                  <div className="flex-1 relative leading-[150%]">
                    Scratch Programming Certificate
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                <img className="w-6 relative h-6" alt="" src="/vector.svg" />
                <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                  <div className="flex-1 relative leading-[150%]">
                    Lifetime access to course content
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                <img className="w-6 relative h-6" alt="" src="/vector.svg" />
                <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                  <div className="flex-1 relative leading-[150%]">
                    Exclusive access to competitions
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                <img className="w-6 relative h-6" alt="" src="/vector.svg" />
                <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                  <div className="flex-1 relative leading-[150%]">
                    Scholarships for top performers
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch bg-nero flex flex-col items-center justify-start">
              <button
                className="cursor-pointer py-[9px] px-5 bg-nero self-stretch rounded flex flex-row items-center justify-center border-[1px] border-solid border-aqua-deep"
                onClick={onViewCurriculumButton2Click}
              >
                <div className="relative text-lg leading-[150%] font-semibold font-body-medium-400 text-aqua-deep text-center inline-block max-h-[58px]">
                  View Curriculum
                </div>
              </button>
            </div>
          </div>
          <div
            className="w-[350px] rounded-lg bg-nero flex flex-col items-start justify-start p-2.5 box-border gap-[10px] cursor-pointer"
            onClick={onCardscourseContainer3Click}
          >
            <div className="self-stretch relative rounded-t-md rounded-b-none bg-nero h-[99px] text-darkslateblue">
              <img
                className="absolute top-[-38px] right-[-34px] w-[227px] h-[123px] overflow-hidden object-cover"
                alt=""
                src="/scratchprogrammingpng@2x.png"
              />
              <div className="absolute top-[37px] left-[-3px] rounded-8xs bg-nero h-[37px] flex flex-row items-center justify-center p-2.5 box-border">
                <div className="relative leading-[150%]">{`IOT & Robotics`}</div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start text-5xl text-dodger-blue">
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch bg-nero flex flex-row items-center justify-center">
                  <div className="flex-1 relative leading-[150%] font-semibold">
                    IOT Based Scratch
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-nero flex flex-col items-center justify-center gap-[5px] text-sm text-black">
                <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                  <img
                    className="w-8 relative h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/fire1.svg"
                  />
                  <div className="flex-1 relative tracking-[-0.01em] leading-[22px] whitespace-pre-wrap">
                    Learning about smart devices and how they interact with the
                    internet to perform various tasks.
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                  <img
                    className="w-8 relative h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/fire2.svg"
                  />
                  <div className="flex-1 relative tracking-[-0.01em] leading-[22px] whitespace-pre-wrap">
                    Understanding the role of sensors in collecting data and
                    actuators in performing actions in IoT systems.
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                  <img
                    className="w-8 relative h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/fire3.svg"
                  />
                  <div className="flex-1 relative tracking-[-0.01em] leading-[22px] whitespace-pre-wrap">
                    Introducing simple programming concepts through visual
                    programming languages suitable for kids.
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[5px] text-sm">
              <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="w-6 relative h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/chalkboardteacher.svg"
                />
                <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                  <div className="flex-1 relative leading-[120%] font-semibold">
                    Grade 7 and above
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="w-6 relative h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/book--undefined--glyph-undefined.svg"
                />
                <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                  <div className="flex-1 relative leading-[120%] font-semibold">{`6 Modules, 36 Lessons & 50 classes`}</div>
                </div>
              </div>
              <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="w-6 relative h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/microsoftwordlogo.svg"
                />
                <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                  <div className="flex-1 relative leading-[120%] font-semibold">{`Study Materials `}</div>
                </div>
              </div>
              <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="w-6 relative h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/question.svg"
                />
                <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                  <div className="flex-1 relative leading-[120%] font-semibold">{`Worksheets & Quizzes`}</div>
                </div>
              </div>
              <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="w-6 relative h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/celltower.svg"
                />
                <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                  <div className="flex-1 relative leading-[120%] font-semibold">
                    100+ fun activities and projects
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
              <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                <img className="w-6 relative h-6" alt="" src="/vector.svg" />
                <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                  <div className="flex-1 relative leading-[150%]">
                    Scratch Programming Certificate
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                <img className="w-6 relative h-6" alt="" src="/vector.svg" />
                <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                  <div className="flex-1 relative leading-[150%]">
                    Lifetime access to course content
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                <img className="w-6 relative h-6" alt="" src="/vector.svg" />
                <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                  <div className="flex-1 relative leading-[150%]">
                    Exclusive access to competitions
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                <img className="w-6 relative h-6" alt="" src="/vector.svg" />
                <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                  <div className="flex-1 relative leading-[150%]">
                    Scholarships for top performers
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch bg-nero flex flex-col items-center justify-start">
              <button
                className="cursor-pointer py-[9px] px-5 bg-nero self-stretch rounded flex flex-row items-center justify-center border-[1px] border-solid border-aqua-deep"
                onClick={onViewCurriculumButton3Click}
              >
                <div className="relative text-lg leading-[150%] font-semibold font-body-medium-400 text-aqua-deep text-center inline-block max-h-[58px]">
                  View Curriculum
                </div>
              </button>
            </div>
          </div>
          <div
            className="w-[350px] rounded-lg bg-nero flex flex-col items-start justify-start p-2.5 box-border gap-[10px] cursor-pointer"
            onClick={onCardscourseContainer4Click}
          >
            <div className="self-stretch relative rounded-t-md rounded-b-none bg-nero h-[99px] text-darkslateblue">
              <img
                className="absolute top-[-38px] right-[-34px] w-[227px] h-[123px] overflow-hidden object-cover"
                alt=""
                src="/scratchprogrammingpng@2x.png"
              />
              <div className="absolute top-[37px] left-[-3px] rounded-8xs bg-nero h-[37px] flex flex-row items-center justify-center p-2.5 box-border">
                <div className="relative leading-[150%]">
                  Artificial Intelligence
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start text-5xl text-dodger-blue">
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch bg-nero flex flex-row items-center justify-center">
                  <div className="flex-1 relative leading-[150%] font-semibold">
                    Python Programming
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-nero flex flex-col items-center justify-center gap-[5px] text-sm text-black">
                <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                  <img
                    className="w-8 relative h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/fire1.svg"
                  />
                  <div className="flex-1 relative tracking-[-0.01em] leading-[22px] whitespace-pre-wrap">
                    {" "}
                    Introduction to Python programming language syntax and
                    concepts.
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                  <img
                    className="w-8 relative h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/fire2.svg"
                  />
                  <div className="flex-1 relative tracking-[-0.01em] leading-[22px] whitespace-pre-wrap">
                    Understanding data types, variables, loops, and
                    conditionals. Learning to solve problems and automate tasks
                    using Python scripts.
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                  <img
                    className="w-8 relative h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/fire3.svg"
                  />
                  <div className="flex-1 relative tracking-[-0.01em] leading-[22px] whitespace-pre-wrap">
                    Understanding how to work on data sets using Bussiness
                    Intelligence tools and machine learning models for different
                    purposes
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[5px] text-sm">
              <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="w-6 relative h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/chalkboardteacher.svg"
                />
                <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                  <div className="flex-1 relative leading-[120%] font-semibold">
                    Grade 7 and above
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="w-6 relative h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/book--undefined--glyph-undefined.svg"
                />
                <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                  <div className="flex-1 relative leading-[120%] font-semibold">{`6 Modules, 36 Lessons & 50 classes`}</div>
                </div>
              </div>
              <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="w-6 relative h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/microsoftwordlogo.svg"
                />
                <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                  <div className="flex-1 relative leading-[120%] font-semibold">{`Study Materials `}</div>
                </div>
              </div>
              <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="w-6 relative h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/question.svg"
                />
                <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                  <div className="flex-1 relative leading-[120%] font-semibold">{`Worksheets & Quizzes`}</div>
                </div>
              </div>
              <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="w-6 relative h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/celltower.svg"
                />
                <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                  <div className="flex-1 relative leading-[120%] font-semibold">
                    100+ fun activities and projects
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
              <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                <img className="w-6 relative h-6" alt="" src="/vector.svg" />
                <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                  <div className="flex-1 relative leading-[150%]">
                    Scratch Programming Certificate
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                <img className="w-6 relative h-6" alt="" src="/vector.svg" />
                <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                  <div className="flex-1 relative leading-[150%]">
                    Lifetime access to course content
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                <img className="w-6 relative h-6" alt="" src="/vector.svg" />
                <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                  <div className="flex-1 relative leading-[150%]">
                    Exclusive access to competitions
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                <img className="w-6 relative h-6" alt="" src="/vector.svg" />
                <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                  <div className="flex-1 relative leading-[150%]">
                    Scholarships for top performers
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch bg-nero flex flex-col items-center justify-start">
              <button
                className="cursor-pointer py-[9px] px-5 bg-nero self-stretch rounded flex flex-row items-center justify-center border-[1px] border-solid border-aqua-deep"
                onClick={onViewCurriculumButton4Click}
              >
                <div className="relative text-lg leading-[150%] font-semibold font-body-medium-400 text-aqua-deep text-center inline-block max-h-[58px]">
                  View Curriculum
                </div>
              </button>
            </div>
          </div>
          <div
            className="w-[350px] rounded-lg bg-nero flex flex-col items-start justify-start p-2.5 box-border gap-[10px] cursor-pointer"
            onClick={onCardscourseContainer5Click}
          >
            <div className="self-stretch relative rounded-t-md rounded-b-none bg-nero h-[99px] text-darkslateblue">
              <img
                className="absolute top-[-38px] right-[-34px] w-[227px] h-[123px] overflow-hidden object-cover"
                alt=""
                src="/scratchprogrammingpng@2x.png"
              />
              <div className="absolute top-[37px] left-[-3px] rounded-8xs bg-nero h-[37px] flex flex-row items-center justify-center p-2.5 box-border">
                <div className="relative leading-[150%]">Web Development</div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start text-5xl text-dodger-blue">
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch bg-nero flex flex-row items-center justify-center">
                  <div className="flex-1 relative leading-[150%] font-semibold">
                    Web Development
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-nero flex flex-col items-center justify-center gap-[5px] text-sm text-black">
                <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                  <img
                    className="w-8 relative h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/fire1.svg"
                  />
                  <div className="flex-1 relative tracking-[-0.01em] leading-[22px] whitespace-pre-wrap">
                    Understanding of UI/UX principles using Figma then HTML,
                    CSS, and JavaScript for creating interactive web pages.
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                  <img
                    className="w-8 relative h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/fire2.svg"
                  />
                  <div className="flex-1 relative tracking-[-0.01em] leading-[22px] whitespace-pre-wrap">
                    {" "}
                    Learning about responsive design and cross-browser
                    compatibility.
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                  <img
                    className="w-8 relative h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/fire3.svg"
                  />
                  <div className="flex-1 relative tracking-[-0.01em] leading-[22px] whitespace-pre-wrap">
                    Exploring different web development frameworks and libraries
                    for enhanced functionality in client-side, server-side and
                    database.
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[5px] text-sm">
              <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="w-6 relative h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/chalkboardteacher.svg"
                />
                <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                  <div className="flex-1 relative leading-[120%] font-semibold">
                    Grade 7 and above
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="w-6 relative h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/book--undefined--glyph-undefined.svg"
                />
                <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                  <div className="flex-1 relative leading-[120%] font-semibold">{`6 Modules, 36 Lessons & 50 classes`}</div>
                </div>
              </div>
              <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="w-6 relative h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/microsoftwordlogo.svg"
                />
                <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                  <div className="flex-1 relative leading-[120%] font-semibold">{`Study Materials `}</div>
                </div>
              </div>
              <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="w-6 relative h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/question.svg"
                />
                <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                  <div className="flex-1 relative leading-[120%] font-semibold">{`Worksheets & Quizzes`}</div>
                </div>
              </div>
              <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="w-6 relative h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/celltower.svg"
                />
                <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                  <div className="flex-1 relative leading-[120%] font-semibold">
                    100+ fun activities and projects
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
              <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                <img className="w-6 relative h-6" alt="" src="/vector.svg" />
                <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                  <div className="flex-1 relative leading-[150%]">
                    Scratch Programming Certificate
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                <img className="w-6 relative h-6" alt="" src="/vector.svg" />
                <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                  <div className="flex-1 relative leading-[150%]">
                    Lifetime access to course content
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                <img className="w-6 relative h-6" alt="" src="/vector.svg" />
                <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                  <div className="flex-1 relative leading-[150%]">
                    Exclusive access to competitions
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                <img className="w-6 relative h-6" alt="" src="/vector.svg" />
                <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                  <div className="flex-1 relative leading-[150%]">
                    Scholarships for top performers
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch bg-nero flex flex-col items-center justify-start">
              <button
                className="cursor-pointer py-[9px] px-5 bg-nero self-stretch rounded flex flex-row items-center justify-center border-[1px] border-solid border-aqua-deep"
                onClick={onViewCurriculumButton5Click}
              >
                <div className="relative text-lg leading-[150%] font-semibold font-body-medium-400 text-aqua-deep text-center inline-block max-h-[58px]">
                  View Curriculum
                </div>
              </button>
            </div>
          </div>
        </div>
        <div
          className="absolute left-[0] top-[-70px]"
          data-scroll-to="comboCourseContainer"
        />
      </div>
      <div className="self-stretch bg-nero flex flex-col items-center justify-center gap-[50px] z-[2] sm:pl-[5px] sm:pr-[5px] sm:box-border">
        <div className="self-stretch bg-nero flex flex-col items-center justify-center gap-[5px]">
          <div className="self-stretch flex flex-row items-center justify-center p-2.5">
            <div className="flex-1 relative leading-[120%] font-semibold sm:text-9xl">
              All-in-one generalized coding courses
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-center p-2.5 text-sm">
            <div className="flex-1 relative leading-[150%]">
              Learn to create apps, websites, games and more in our extensive
              online coding courses for kids who want to be real all-rounders
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-center justify-center p-5 gap-[50px] text-base font-inter sm:pl-[5px] sm:pr-[5px] sm:box-border">
          <div className="w-[350px] shadow-[0px_10px_15px_-3px_rgba(0,_0,_0,_0.1),_0px_4px_6px_-2px_rgba(0,_0,_0,_0.05)] rounded bg-nero overflow-hidden shrink-0 flex flex-col items-start justify-start p-2.5 box-border gap-[10px]">
            <div className="self-stretch bg-nero flex flex-col items-start justify-start gap-[5px]">
              <div className="self-stretch flex flex-col items-center justify-start py-0 px-[95px] text-5xl text-purple-heart">
                <div className="w-full relative tracking-[-0.01em] leading-[32px] font-semibold inline-block max-w-[358px]">
                  Level 1
                </div>
              </div>
              <div className="self-stretch flex flex-col items-center justify-start py-0 px-[50px]">
                <div className="self-stretch relative leading-[22px] font-semibold">
                  Introduction to Basic Programming Concepts
                </div>
              </div>
              <div className="self-stretch flex flex-col items-center justify-center min-h-[63px] font-body-medium-400">
                <div className="w-full relative leading-[150%] inline-block max-w-[358px]">
                  A perfect course for kids who want to test drive to coding
                  road.
                </div>
              </div>
              <div className="self-stretch h-[42px] flex flex-col items-center justify-center text-sm-8 font-segoe-ui">
                <div className="self-stretch flex flex-col items-center justify-start">
                  <div className="relative leading-[21px] font-semibold">
                    100+ Activities | 100+ Quizzes
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-center text-sm-6">
                  <div className="relative leading-[21px] font-semibold">
                    Duration: 12 months
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch bg-nero flex flex-col items-center justify-center p-[5px] gap-[5px] text-left text-sm text-blues font-body-medium-400">
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="w-8 relative h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/archive.svg"
                  />
                  <div className="flex-1 relative leading-[150%]">{`Module 1 & 2 of all specialized courses`}</div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="w-8 relative h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/chats1.svg"
                  />
                  <div className="flex-1 relative leading-[150%]">
                    Learn live with expert Computer Science teacher
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="w-8 relative h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/cardholder.svg"
                  />
                  <div className="flex-1 relative leading-[150%]">{`50+ robust physical & online classes`}</div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="w-8 relative h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/campfire.svg"
                  />
                  <div className="flex-1 relative leading-[150%]">{`100+ fun activities, quizzes & projects`}</div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="w-8 relative h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/airplay.svg"
                  />
                  <div className="flex-1 relative leading-[150%]">
                    Stem.org accredited certificate
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="w-8 relative h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/bookmarkssimple.svg"
                  />
                  <div className="flex-1 relative leading-[150%]">
                    Experience of coding competetions
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="w-8 relative h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/lifebuoy.svg"
                  />
                  <div className="flex-1 relative leading-[150%]">
                    Lifetime access to course content
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="w-8 relative h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/videoconference.svg"
                  />
                  <div className="flex-1 relative leading-[150%]">
                    Live 1:1 class with Coding Instructor
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="w-8 relative h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/computertower.svg"
                  />
                  <div className="flex-1 relative leading-[150%]">
                    Receive monthly progress reports
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-nero flex flex-col items-center justify-center p-[5px] gap-[5px] text-darkslategray-100">
                <div className="w-[310px] hidden flex-col items-center justify-center gap-[9px]">
                  <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                    <img
                      className="w-6 relative h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/icon.svg"
                    />
                    <div className="flex-1 relative tracking-[-0.01em] leading-[22px]">
                      Sequencing and Algorithms:
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                    <img
                      className="w-6 relative h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/icon.svg"
                    />
                    <div className="flex-1 relative tracking-[-0.01em] leading-[22px]">
                      Block-Based Programming (Using Scratch or Blockly):
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                    <img
                      className="w-6 relative h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/icon.svg"
                    />
                    <div className="flex-1 relative tracking-[-0.01em] leading-[22px]">
                      Problem Solving:
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                    <img
                      className="w-6 relative h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/icon.svg"
                    />
                    <div className="flex-1 relative tracking-[-0.01em] leading-[22px]">
                      Creative Projects (Incorporating Scratch):
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                    <img
                      className="w-6 relative h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/icon.svg"
                    />
                    <div className="flex-1 relative tracking-[-0.01em] leading-[22px]">
                      Creative Projects (Incorporating Scratch):
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                    <img
                      className="w-6 relative h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/icon.svg"
                    />
                    <div className="flex-1 relative tracking-[-0.01em] leading-[22px]">
                      Creative Projects (Incorporating Scratch):
                    </div>
                  </div>
                </div>
                <div className="self-stretch bg-nero flex flex-col items-center justify-center gap-[9px] text-black">
                  <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                    <img
                      className="w-6 relative h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/trophy.svg"
                    />
                    <div className="flex-1 relative leading-[150%]">
                      Level 1 CoDesk developer certificate
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                    <img
                      className="w-6 relative h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/trophy.svg"
                    />
                    <div className="flex-1 relative leading-[150%]">
                      Lifetime community access
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                    <img
                      className="w-6 relative h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/trophy.svg"
                    />
                    <div className="flex-1 relative leading-[150%]">
                      Study materials and resources toolkit
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                    <img
                      className="w-6 relative h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/trophy.svg"
                    />
                    <div className="flex-1 relative leading-[150%]">
                      Exclusive access to competitions
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                    <img
                      className="w-6 relative h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/trophy.svg"
                    />
                    <div className="flex-1 relative leading-[150%]">
                      Scholarships for top three performers in our low coding
                      program
                    </div>
                  </div>
                </div>
                <div
                  className="w-[310px] h-[45px] hidden cursor-pointer"
                  onClick={onButtonscurriculumClick}
                />
              </div>
              <button
                className="cursor-pointer py-[9px] px-5 bg-nero self-stretch rounded flex flex-row items-center justify-center gap-[5px] border-[1px] border-solid border-aqua-deep"
                onClick={onDownloadButtonClick}
              >
                <div className="relative text-lg leading-[150%] font-semibold font-body-medium-400 text-aqua-deep text-center inline-block max-h-[58px]">{`Download Curriculum `}</div>
                <img className="w-5 relative h-5" alt="" src="/frame.svg" />
              </button>
            </div>
          </div>
          <div className="w-[350px] shadow-[0px_10px_15px_-3px_rgba(0,_0,_0,_0.1),_0px_4px_6px_-2px_rgba(0,_0,_0,_0.05)] rounded bg-nero overflow-hidden shrink-0 flex flex-col items-start justify-start p-2.5 box-border gap-[10px]">
            <div className="self-stretch bg-nero flex flex-col items-start justify-start gap-[5px]">
              <div className="self-stretch flex flex-col items-center justify-start py-0 px-[95px] text-5xl text-purple-heart">
                <div className="w-full relative tracking-[-0.01em] leading-[32px] font-semibold inline-block max-w-[358px]">
                  Level 2
                </div>
              </div>
              <div className="self-stretch flex flex-col items-center justify-start py-0 px-[50px]">
                <div className="self-stretch relative leading-[22px] font-semibold">
                  Intermidiate Programming Concepts
                </div>
              </div>
              <div className="self-stretch flex flex-col items-center justify-center min-h-[63px] font-body-medium-400">
                <div className="w-full relative leading-[150%] inline-block max-w-[358px]">
                  A course for those who want to master the art of coding and
                  create a better future through code.
                </div>
              </div>
              <div className="self-stretch h-[42px] flex flex-col items-center justify-center text-sm-8 font-segoe-ui">
                <div className="self-stretch flex flex-col items-center justify-start">
                  <div className="relative leading-[21px] font-semibold">
                    100+ Activities | 100+ Quizzes
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-center text-sm-6">
                  <div className="relative leading-[21px] font-semibold">
                    Duration: 12 months
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch bg-nero flex flex-col items-center justify-center p-[5px] gap-[5px] text-left text-sm text-blues font-body-medium-400">
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="w-8 relative h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/archive.svg"
                  />
                  <div className="flex-1 relative leading-[150%]">{`Module 3 & 4 of all specialized courses`}</div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="w-8 relative h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/chats1.svg"
                  />
                  <div className="flex-1 relative leading-[150%]">
                    Learn live with expert Computer Science teacher
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="w-8 relative h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/cardholder.svg"
                  />
                  <div className="flex-1 relative leading-[150%]">{`50+ robust physical & online classes`}</div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="w-8 relative h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/campfire.svg"
                  />
                  <div className="flex-1 relative leading-[150%]">{`100+ fun activities, quizzes & projects`}</div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="w-8 relative h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/airplay.svg"
                  />
                  <div className="flex-1 relative leading-[150%]">
                    Stem.org accredited certificate
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="w-8 relative h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/bookmarkssimple.svg"
                  />
                  <div className="flex-1 relative leading-[150%]">
                    Experience of coding competetions
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="w-8 relative h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/lifebuoy.svg"
                  />
                  <div className="flex-1 relative leading-[150%]">
                    Lifetime access to course content
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="w-8 relative h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/videoconference.svg"
                  />
                  <div className="flex-1 relative leading-[150%]">
                    Live 1:1 class with Coding Instructor
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="w-8 relative h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/computertower.svg"
                  />
                  <div className="flex-1 relative leading-[150%]">
                    Receive monthly progress reports
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-nero flex flex-col items-center justify-center p-[5px] gap-[5px] text-darkslategray-100">
                <div className="w-[310px] hidden flex-col items-center justify-center gap-[9px]">
                  <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                    <img
                      className="w-6 relative h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/icon.svg"
                    />
                    <div className="flex-1 relative tracking-[-0.01em] leading-[22px]">
                      Sequencing and Algorithms:
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                    <img
                      className="w-6 relative h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/icon.svg"
                    />
                    <div className="flex-1 relative tracking-[-0.01em] leading-[22px]">
                      Block-Based Programming (Using Scratch or Blockly):
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                    <img
                      className="w-6 relative h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/icon.svg"
                    />
                    <div className="flex-1 relative tracking-[-0.01em] leading-[22px]">
                      Problem Solving:
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                    <img
                      className="w-6 relative h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/icon.svg"
                    />
                    <div className="flex-1 relative tracking-[-0.01em] leading-[22px]">
                      Creative Projects (Incorporating Scratch):
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                    <img
                      className="w-6 relative h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/icon.svg"
                    />
                    <div className="flex-1 relative tracking-[-0.01em] leading-[22px]">
                      Creative Projects (Incorporating Scratch):
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                    <img
                      className="w-6 relative h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/icon.svg"
                    />
                    <div className="flex-1 relative tracking-[-0.01em] leading-[22px]">
                      Creative Projects (Incorporating Scratch):
                    </div>
                  </div>
                </div>
                <div className="self-stretch bg-nero flex flex-col items-center justify-center gap-[9px] text-black">
                  <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                    <img
                      className="w-6 relative h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/trophy.svg"
                    />
                    <div className="flex-1 relative leading-[150%]">
                      Level 2 CODesk developer certificate
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                    <img
                      className="w-6 relative h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/trophy.svg"
                    />
                    <div className="flex-1 relative leading-[150%]">
                      Lifetime community access
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                    <img
                      className="w-6 relative h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/trophy.svg"
                    />
                    <div className="flex-1 relative leading-[150%]">
                      Study materials and resources toolkit
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                    <img
                      className="w-6 relative h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/trophy.svg"
                    />
                    <div className="flex-1 relative leading-[150%]">
                      Exclusive access to competitions
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                    <img
                      className="w-6 relative h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/trophy.svg"
                    />
                    <div className="flex-1 relative leading-[150%]">
                      Scholarships for top three performers in our low coding
                      program
                    </div>
                  </div>
                </div>
                <div
                  className="w-[310px] h-[45px] hidden cursor-pointer"
                  onClick={onButtonscurriculumClick1}
                />
              </div>
              <button
                className="cursor-pointer py-[9px] px-5 bg-nero self-stretch rounded flex flex-row items-center justify-center gap-[5px] border-[1px] border-solid border-aqua-deep"
                onClick={onDownloadButton1Click}
              >
                <div className="relative text-lg leading-[150%] font-semibold font-body-medium-400 text-aqua-deep text-center inline-block max-h-[58px]">{`Download Curriculum `}</div>
                <img className="w-5 relative h-5" alt="" src="/frame.svg" />
              </button>
            </div>
          </div>
          <div className="w-[350px] shadow-[0px_10px_15px_-3px_rgba(0,_0,_0,_0.1),_0px_4px_6px_-2px_rgba(0,_0,_0,_0.05)] rounded bg-nero overflow-hidden shrink-0 flex flex-col items-start justify-start p-2.5 box-border gap-[10px]">
            <div className="self-stretch bg-nero flex flex-col items-start justify-start gap-[5px]">
              <div className="self-stretch flex flex-col items-center justify-start py-0 px-[95px] text-5xl text-purple-heart">
                <div className="w-full relative tracking-[-0.01em] leading-[32px] font-semibold inline-block max-w-[358px]">
                  Level 3
                </div>
              </div>
              <div className="self-stretch flex flex-col items-center justify-start py-0 px-[50px]">
                <div className="self-stretch relative leading-[22px] font-semibold">
                  Advanced Programming Concepts
                </div>
              </div>
              <div className="self-stretch flex flex-col items-center justify-center min-h-[63px] font-body-medium-400">
                <div className="w-full relative leading-[150%] inline-block max-w-[358px]">
                  A perfect course for kids who want to use coding to solve
                  real-world problems and create a better future.
                </div>
              </div>
              <div className="self-stretch h-[42px] flex flex-col items-center justify-center text-sm-8 font-segoe-ui">
                <div className="self-stretch flex flex-col items-center justify-start">
                  <div className="relative leading-[21px] font-semibold">
                    100+ Activities | 100+ Quizzes
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-center text-sm-6">
                  <div className="relative leading-[21px] font-semibold">
                    Duration: 12 months
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch bg-nero flex flex-col items-center justify-center p-[5px] gap-[5px] text-left text-sm text-blues font-body-medium-400">
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="w-8 relative h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/archive.svg"
                  />
                  <div className="flex-1 relative leading-[150%]">{`Module 5 & 6 of all specialized courses`}</div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="w-8 relative h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/chats1.svg"
                  />
                  <div className="flex-1 relative leading-[150%]">
                    Learn live with expert Computer Science teacher
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="w-8 relative h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/cardholder.svg"
                  />
                  <div className="flex-1 relative leading-[150%]">{`50+ robust physical & online classes`}</div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="w-8 relative h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/campfire.svg"
                  />
                  <div className="flex-1 relative leading-[150%]">{`100+ fun activities, quizzes & projects`}</div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="w-8 relative h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/airplay.svg"
                  />
                  <div className="flex-1 relative leading-[150%]">
                    Stem.org accredited certificate
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="w-8 relative h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/bookmarkssimple.svg"
                  />
                  <div className="flex-1 relative leading-[150%]">
                    Experience of coding competetions
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="w-8 relative h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/lifebuoy.svg"
                  />
                  <div className="flex-1 relative leading-[150%]">
                    Lifetime access to course content
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="w-8 relative h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/videoconference.svg"
                  />
                  <div className="flex-1 relative leading-[150%]">
                    Live 1:1 class with Coding Instructor
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="w-8 relative h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/computertower.svg"
                  />
                  <div className="flex-1 relative leading-[150%]">
                    Receive monthly progress reports
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-nero flex flex-col items-center justify-center p-[5px] gap-[5px] text-darkslategray-100">
                <div className="w-[310px] hidden flex-col items-center justify-center gap-[9px]">
                  <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                    <img
                      className="w-6 relative h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/icon.svg"
                    />
                    <div className="flex-1 relative tracking-[-0.01em] leading-[22px]">
                      Sequencing and Algorithms:
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                    <img
                      className="w-6 relative h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/icon.svg"
                    />
                    <div className="flex-1 relative tracking-[-0.01em] leading-[22px]">
                      Block-Based Programming (Using Scratch or Blockly):
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                    <img
                      className="w-6 relative h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/icon.svg"
                    />
                    <div className="flex-1 relative tracking-[-0.01em] leading-[22px]">
                      Problem Solving:
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                    <img
                      className="w-6 relative h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/icon.svg"
                    />
                    <div className="flex-1 relative tracking-[-0.01em] leading-[22px]">
                      Creative Projects (Incorporating Scratch):
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                    <img
                      className="w-6 relative h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/icon.svg"
                    />
                    <div className="flex-1 relative tracking-[-0.01em] leading-[22px]">
                      Creative Projects (Incorporating Scratch):
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                    <img
                      className="w-6 relative h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/icon.svg"
                    />
                    <div className="flex-1 relative tracking-[-0.01em] leading-[22px]">
                      Creative Projects (Incorporating Scratch):
                    </div>
                  </div>
                </div>
                <div className="self-stretch bg-nero flex flex-col items-center justify-center gap-[9px] text-black">
                  <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                    <img
                      className="w-6 relative h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/trophy.svg"
                    />
                    <div className="flex-1 relative leading-[150%]">
                      Level 3 CoDesk developer certificate
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                    <img
                      className="w-6 relative h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/trophy.svg"
                    />
                    <div className="flex-1 relative leading-[150%]">
                      Lifetime community access
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                    <img
                      className="w-6 relative h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/trophy.svg"
                    />
                    <div className="flex-1 relative leading-[150%]">
                      Study materials and resources toolkit
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                    <img
                      className="w-6 relative h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/trophy.svg"
                    />
                    <div className="flex-1 relative leading-[150%]">
                      Exclusive access to competitions
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                    <img
                      className="w-6 relative h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/trophy.svg"
                    />
                    <div className="flex-1 relative leading-[150%]">
                      Scholarships for top three performers in our low coding
                      program
                    </div>
                  </div>
                </div>
                <div
                  className="w-[310px] h-[45px] hidden cursor-pointer"
                  onClick={onButtonscurriculumClick2}
                />
              </div>
              <button
                className="cursor-pointer py-[9px] px-5 bg-nero self-stretch rounded flex flex-row items-center justify-center gap-[5px] border-[1px] border-solid border-aqua-deep"
                onClick={onDownloadButton2Click}
              >
                <div className="relative text-lg leading-[150%] font-semibold font-body-medium-400 text-aqua-deep text-center inline-block max-h-[58px]">{`Download Curriculum `}</div>
                <img className="w-5 relative h-5" alt="" src="/frame.svg" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <section className="self-stretch bg-nero flex flex-col items-center justify-center p-5 gap-[20px] z-[1] text-center text-17xl text-black font-body-medium-400 sm:pl-[5px] sm:pr-[5px] sm:box-border">
        <div className="self-stretch flex flex-col items-center justify-center pt-0 px-0 pb-[0.5px]">
          <div className="self-stretch relative leading-[120%] font-semibold sm:text-9xl">
            Coding Workshops
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-center justify-center p-[15px] gap-[15px] text-left text-sm sm:pl-[5px] sm:pr-[5px] sm:box-border">
          <div className="w-[350px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-lg bg-nero flex flex-col items-start justify-start p-2.5 box-border relative gap-[15px]">
            <img
              className="self-stretch relative max-w-full overflow-hidden h-[213px] shrink-0 object-cover z-[0]"
              alt=""
              src="/image31@2x.png"
            />
            <div className="self-stretch bg-nero flex flex-col items-start justify-start gap-[5px] z-[1]">
              <div className="self-stretch flex flex-col items-center justify-start pt-0 px-0 pb-[0.5px] text-5xl">
                <div className="w-full relative leading-[150%] font-semibold inline-block max-w-[344px]">
                  Single Day Codeshops
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
                    5+ Lessons
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="self-stretch relative leading-[120%] font-semibold">
                    10+ Activities
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
              src="/bestsellingpng11@2x.png"
            />
          </div>
          <div className="w-[350px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-lg bg-nero flex flex-col items-start justify-start p-2.5 box-border relative gap-[15px]">
            <img
              className="self-stretch relative max-w-full overflow-hidden h-[213px] shrink-0 object-cover z-[0]"
              alt=""
              src="/image4@2x.png"
            />
            <div className="self-stretch bg-nero flex flex-col items-start justify-start gap-[5px] z-[1]">
              <div className="self-stretch flex flex-col items-center justify-start pt-0 px-0 pb-[0.5px] text-5xl">
                <div className="w-full relative leading-[150%] font-semibold inline-block max-w-[344px]">
                  Multi Day codeshops
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
                    10+ Lessons
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="self-stretch relative leading-[120%] font-semibold">
                    15+ Activities
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-center justify-center pt-0 px-0 pb-2 text-center text-dodger-blue">
                <div className="w-full relative leading-[150%] inline-block max-w-[384px]">{`Don't let your child miss out to unlock their potential. `}</div>
              </div>
            </div>
            <div className="self-stretch bg-nero flex flex-col items-center justify-start gap-[15px] z-[2]">
              <button
                className="cursor-pointer py-[9px] px-5 bg-nero self-stretch rounded box-border h-[41px] flex flex-row items-center justify-center border-[1px] border-solid border-aqua-deep"
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
              src="/bestsellingpng11@2x.png"
            />
          </div>
          <div className="w-[350px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-lg bg-nero flex flex-col items-start justify-start p-2.5 box-border relative gap-[15px]">
            <img
              className="self-stretch relative max-w-full overflow-hidden h-[213px] shrink-0 object-cover z-[0]"
              alt=""
              src="/image5@2x.png"
            />
            <div className="self-stretch bg-nero flex flex-col items-start justify-start gap-[5px] z-[1]">
              <div className="self-stretch flex flex-col items-center justify-start pt-0 px-0 pb-[0.5px] text-5xl">
                <div className="w-full relative leading-[150%] font-semibold inline-block max-w-[344px]">
                  Week Long Codeshops
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
                    15+ Lessons
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="self-stretch relative leading-[120%] font-semibold">
                    20+ Activities
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
              src="/bestsellingpng11@2x.png"
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CoursePage;
