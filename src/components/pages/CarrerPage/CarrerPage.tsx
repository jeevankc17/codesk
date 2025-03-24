import { FunctionComponent, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../common/Navbar';
import Footer from '../../common/Footer';

const CarrerPage: FunctionComponent = () => {
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

  const onScrollBannerButtonClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='quizzesContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="w-full relative bg-nero flex flex-col items-center justify-start p-5 box-border gap-[20px] text-center text-13xl text-black1 font-body-large-600 sm:pl-[5px] sm:pr-[5px] sm:box-border">
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
      <header className="self-stretch rounded-[20px] bg-footer-header h-[500px] flex flex-row items-center justify-between py-0 px-[10px] box-border gap-[5px] z-[1] text-left text-4xl text-nero font-inter lg:flex-col lg:h-auto md:flex-col md:gap-[5px] md:p-2.5 md:box-border sm:gap-[5px] sm:p-[5px] sm:h-auto sm:min-h-[550px] sm:box-border">
        <div className="w-[775px] flex flex-col items-start justify-center h-full p-[10px] box-border gap-[10px] lg:order-[2] lg:w-full md:w-full sm:w-full sm:items-center">
          <div className="self-stretch flex flex-col items-start justify-start gap-[15px] sm:items-center">
            <div className="self-stretch relative leading-[120%] font-semibold text-3xl md:text-xl sm:text-lg sm:text-center">
              Join Our Team
            </div>
            <div className="self-stretch relative leading-[150%] text-md sm:text-sm sm:text-center">
              Be part of Nepal's fastest growing EdTech company
            </div>
            <button
              className="cursor-pointer py-[9px] px-5 bg-tomato self-stretch rounded flex flex-row items-center justify-center border-[1px] border-solid border-nero sm:h-[35px]"
              onClick={() => navigate('/commingsoonpage')}
            >
              <div className="relative text-lg leading-[150%] font-semibold font-body-large-600 text-nero text-center inline-block max-h-[58px] sm:text-base">
                View Openings
              </div>
            </button>
          </div>
        </div>
        <div className="flex-1 h-full flex items-center justify-center">
          <img
            className="w-full h-full object-cover object-center"
            alt=""
            src="/image-59@2x.png"
          />
        </div>
      </header>
      <section className="self-stretch bg-nero flex flex-col items-center justify-start p-5 gap-[20px] z-[7] text-center text-17xl text-black1 font-body-large-600 sm:pl-[5px] sm:pr-[5px] sm:box-border">
        <div className="self-stretch flex flex-col items-center justify-center pt-0 px-0 pb-[0.5px]">
          <div className="self-stretch h-[86px] relative leading-[120%] font-semibold inline-block sm:text-9xl">
            Become a teacher in CoDesk doesn't mean you will end up your coding
            journey
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-center justify-center py-[25px] px-2.5 gap-[15px] text-left text-5xl text-aqua-deep lg:flex-row lg:flex-wrap">
          <div className="w-[200px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded bg-nero h-[200px] flex flex-col items-center justify-center p-[5px] box-border gap-[5px] sm:w-[300px]">
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
            <div className="self-stretch flex flex-row items-start justify-start text-center text-lg text-black1">
              <div className="flex-1 relative leading-[150%] font-semibold">
                Teach whatever age group you prefer
              </div>
            </div>
          </div>
          <div className="w-[200px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded bg-nero h-[200px] flex flex-col items-center justify-center p-[5px] box-border gap-[5px] sm:w-[300px]">
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
            <div className="self-stretch flex flex-row items-start justify-start text-center text-lg text-black1">
              <div className="flex-1 relative leading-[150%] font-semibold">
                Teach whatever stack you want
              </div>
            </div>
          </div>
          <div className="w-[200px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded bg-nero h-[200px] flex flex-col items-center justify-center p-[5px] box-border gap-[5px] sm:w-[300px]">
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
            <div className="self-stretch flex flex-row items-start justify-start text-center text-lg text-black1">
              <div className="flex-1 relative leading-[150%] font-semibold">
                Teach on your own preferable language
              </div>
            </div>
          </div>
          <div className="w-[200px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded bg-nero h-[200px] flex flex-col items-center justify-center p-[5px] box-border gap-[5px] sm:w-[300px]">
            <div className="self-stretch flex flex-row items-end justify-start gap-[14px]">
              <img
                className="w-[50px] relative h-[50px] overflow-hidden shrink-0"
                alt=""
                src="/cassettetape1.svg"
              />
              <div className="flex-1 flex flex-row items-end justify-start">
                <div className="flex-1 relative leading-[150%] font-semibold">
                  50+
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start text-center text-lg text-black1">
              <div className="flex-1 relative leading-[150%] font-semibold">
                Hands On teaching Resources
              </div>
            </div>
          </div>
          <div className="w-[200px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded bg-nero h-[200px] flex flex-col items-center justify-center p-[5px] box-border gap-[5px] sm:w-[300px]">
            <div className="self-stretch flex flex-row items-end justify-start gap-[14px]">
              <img
                className="w-[50px] relative h-[50px] overflow-hidden shrink-0"
                alt=""
                src="/androidlogo.svg"
              />
              <div className="flex-1 flex flex-row items-end justify-start">
                <div className="flex-1 relative leading-[150%] font-semibold">
                  Hybrid Teaching
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start text-center text-lg text-black1">
              <div className="flex-1 relative leading-[150%] font-semibold">
                Teach physically as well as virutally
              </div>
            </div>
          </div>
          <div className="w-[200px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded bg-nero h-[200px] flex flex-col items-center justify-center p-[5px] box-border gap-[5px] sm:w-[300px]">
            <div className="self-stretch flex flex-row items-end justify-start gap-[14px]">
              <img
                className="w-[50px] relative h-[50px] overflow-hidden shrink-0"
                alt=""
                src="/desktoptower.svg"
              />
              <div className="flex-1 flex flex-row items-end justify-start">
                <div className="flex-1 relative leading-[150%] font-semibold">
                  Great earnings
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start text-center text-lg text-black1">
              <div className="flex-1 relative leading-[150%] font-semibold">
                Earn from teaching as well as building
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="self-stretch bg-nero flex flex-col items-center justify-center z-[6]">
        <div className="self-stretch bg-nero flex flex-col items-start justify-start p-[15px] gap-[40px]">
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
                  <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5">
                    <div className="flex-1 relative leading-[120%] font-semibold sm:text-5xl">
                      Make your passion pay
                    </div>
                  </div>
                  <div className="w-[525px] bg-nero hidden flex-row items-center justify-center p-2.5 box-border text-base text-darkslategray-100">
                    <div className="flex-1 relative leading-[22px] font-medium">
                      1
                    </div>
                  </div>
                </div>
                <div className="self-stretch bg-nero flex flex-row items-center justify-center py-2.5 px-[30px] text-lg">
                  <div className="flex-1 relative leading-[150%]">
                    If you are passionate about coding, teaching kids to code is
                    a great way to increase your while doing what you love.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch bg-nero flex flex-row items-center justify-between lg:flex-col md:flex-col">
            <div className="flex-1 flex flex-col items-center justify-center py-0 px-[70px] lg:order-[2] lg:flex-[unset] lg:self-stretch md:pl-2.5 md:pr-2.5 md:box-border md:order-[2] md:flex-[unset] md:self-stretch">
              <div className="self-stretch flex flex-col items-start justify-start w-full">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5">
                    <div className="flex-1 relative leading-[120%] font-semibold sm:text-5xl">
                      Make An Impact
                    </div>
                  </div>
                </div>
                <div className="self-stretch bg-nero flex flex-row items-center justify-center py-2.5 px-[30px] text-lg">
                  <div className="flex-1 relative leading-[150%]">
                    Coding is the skill of the future. By teaching kids to code,
                    you will empower them to be successful and create a better
                    future.
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
                src="/reason1svg2@2x.png"
              />
            </div>
            <div className="flex-1 flex flex-col items-center justify-center py-0 px-[70px] lg:flex-[unset] lg:self-stretch md:pl-2.5 md:pr-2.5 md:box-border md:flex-[unset] md:self-stretch">
              <div className="self-stretch flex flex-col items-start justify-start w-full">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5">
                    <div className="flex-1 relative leading-[120%] font-semibold sm:text-5xl">
                      Building Lifelong Relationships
                    </div>
                  </div>
                </div>
                <div className="self-stretch bg-nero flex flex-row items-center justify-center py-2.5 px-[30px] text-lg">
                  <div className="flex-1 relative leading-[150%]">
                    As a teacher, you will touch the lives of hundreds of
                    children across the world and build lifelong relationships
                    with students and their families.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] bg-nero flex flex-col items-center justify-center p-5 gap-[20px] z-[5] sm:pl-[5px] sm:pr-[5px] sm:box-border">
        <div className="self-stretch flex flex-col items-center justify-start">
          <div className="self-stretch relative leading-[120%] font-semibold">
            Unmatched earnings and growth
          </div>
        </div>
        <div className="self-stretch bg-nero flex flex-row flex-wrap items-center justify-center p-[15px] gap-[15px] text-5xl md:flex-row md:flex-wrap">
          <div className="shadow-[0px_10px_15px_-3px_rgba(0,_0,_0,_0.1),_0px_4px_6px_-2px_rgba(0,_0,_0,_0.05)] rounded-13xl bg-nero overflow-hidden flex flex-col items-center justify-start p-5 gap-[20px]">
            <img
              className="w-[100px] relative h-[88.2px] overflow-hidden shrink-0"
              alt=""
              src="/freecoursesvg.svg"
            />
            <div className="w-[317.3px] flex flex-col items-center justify-start">
              <div className="self-stretch relative leading-[150%] font-semibold">
                Get paid per class
              </div>
            </div>
            <div className="w-[317.3px] flex flex-col items-center justify-start text-base">
              <div className="self-stretch relative leading-[150%]">
                As a teacher, you will get paid for every one-hour class you
                successfully complete. The more classes you teach, the more you
                earn.
              </div>
            </div>
          </div>
          <div className="shadow-[0px_10px_15px_-3px_rgba(0,_0,_0,_0.1),_0px_4px_6px_-2px_rgba(0,_0,_0,_0.05)] rounded-13xl bg-nero overflow-hidden flex flex-col items-center justify-start p-5 gap-[20px]">
            <img
              className="w-[93.3px] relative h-[100px] overflow-hidden shrink-0"
              alt=""
              src="/moneybackguaranteesvg.svg"
            />
            <div className="w-[317.3px] flex flex-col items-center justify-start">
              <div className="self-stretch relative leading-[150%] font-semibold">
                Attractive incentives
              </div>
            </div>
            <div className="w-[317.3px] flex flex-col items-center justify-start text-base">
              <div className="self-stretch relative leading-[150%]">
                We offer lots of opportunities to increase your income through
                various incentives, referral program, and mentorships.
              </div>
            </div>
          </div>
          <div className="shadow-[0px_10px_15px_-3px_rgba(0,_0,_0,_0.1),_0px_4px_6px_-2px_rgba(0,_0,_0,_0.05)] rounded-13xl bg-nero overflow-hidden flex flex-col items-center justify-start p-5 gap-[20px]">
            <img
              className="w-[100px] relative h-[100px] overflow-hidden shrink-0"
              alt=""
              src="/customizedlearningsvg.svg"
            />
            <div className="w-[317.3px] flex flex-col items-center justify-start">
              <div className="self-stretch relative leading-[150%] font-semibold">
                Career growth plan
              </div>
            </div>
            <div className="w-[317.3px] flex flex-col items-center justify-start text-base">
              <div className="self-stretch relative leading-[150%]">
                Gain experience and grow as a teacher as well as developer along
                with a clearly defined career progression path with great
                rewards for performance and leadership.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] bg-nero flex flex-col items-center justify-center p-5 gap-[20px] z-[4] text-17xl sm:pl-[5px] sm:pr-[5px] sm:box-border">
        <div className="self-stretch flex flex-col items-center justify-start">
          <div className="self-stretch h-[43px] relative leading-[120%] font-semibold inline-block sm:text-9xl">
            All the support you need
          </div>
        </div>
        <img
          className="self-stretch relative max-w-full overflow-hidden h-[333.3px] shrink-0 object-cover"
          alt=""
          src="/happytoshowlaptoppng@2x.png"
        />
        <div className="self-stretch bg-nero flex flex-row flex-wrap items-center justify-center p-[15px] gap-[15px] text-5xl md:flex-row md:flex-wrap">
          <div className="shadow-[0px_10px_15px_-3px_rgba(0,_0,_0,_0.1),_0px_4px_6px_-2px_rgba(0,_0,_0,_0.05)] rounded-13xl bg-nero overflow-hidden flex flex-col items-center justify-start p-5 gap-[20px]">
            <img
              className="w-[100px] relative h-[88.2px] overflow-hidden shrink-0"
              alt=""
              src="/freecoursesvg.svg"
            />
            <div className="w-[317.3px] flex flex-col items-center justify-start">
              <div className="self-stretch relative leading-[150%] font-semibold">
                Our long term vision through system
              </div>
            </div>
            <div className="w-[317.3px] flex flex-col items-center justify-start text-base">
              <div className="self-stretch relative leading-[150%]">
                Our platform enables an immersive teaching and learning
                experience with in-built video. The platform makes teaching easy
                with all teaching aids, lesson plans, schedules at your
                fingertips.
              </div>
            </div>
          </div>
          <div className="shadow-[0px_10px_15px_-3px_rgba(0,_0,_0,_0.1),_0px_4px_6px_-2px_rgba(0,_0,_0,_0.05)] rounded-13xl bg-nero overflow-hidden flex flex-col items-center justify-start p-5 gap-[20px]">
            <img
              className="w-[100px] relative h-[100px] overflow-hidden shrink-0"
              alt=""
              src="/customizedlearningsvg.svg"
            />
            <div className="w-[317.3px] flex flex-col items-center justify-start">
              <div className="self-stretch relative leading-[150%] font-semibold">
                Unique curriculum and lesson plans
              </div>
            </div>
            <div className="w-[317.3px] flex flex-col items-center justify-start text-base">
              <div className="self-stretch relative leading-[150%]">
                Our curriculum makes teaching code fun for students and teachers
                alike. We will also give you in-depth lesson plans to guide the
                child's code-learning journey.
              </div>
            </div>
          </div>
          <div className="shadow-[0px_10px_15px_-3px_rgba(0,_0,_0,_0.1),_0px_4px_6px_-2px_rgba(0,_0,_0,_0.05)] rounded-13xl bg-nero overflow-hidden flex flex-col items-center justify-start p-5 gap-[20px]">
            <img
              className="w-[93.3px] relative h-[100px] overflow-hidden shrink-0"
              alt=""
              src="/moneybackguaranteesvg.svg"
            />
            <div className="w-[317.3px] flex flex-col items-center justify-start">
              <div className="self-stretch relative leading-[150%] font-semibold">
                Training and certification
              </div>
            </div>
            <div className="w-[317.3px] flex flex-col items-center justify-start text-base">
              <div className="self-stretch relative leading-[150%]">
                All our teachers undergo extensive training on procedures and
                curriculum to make sure we meet the highest standards and help
                you grow as a teacher.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] bg-nero flex flex-col items-center justify-center p-5 gap-[20px] z-[3] text-17xl sm:pl-[5px] sm:pr-[5px] sm:box-border">
        <div className="self-stretch flex flex-col items-center justify-start">
          <div className="self-stretch h-[43px] relative leading-[120%] font-semibold inline-block sm:text-9xl">
            All the support you need
          </div>
        </div>
        <img
          className="self-stretch relative max-w-full overflow-hidden h-[333.3px] shrink-0 object-cover"
          alt=""
          src="/becomeateacherpng@2x.png"
        />
        <div className="self-stretch bg-nero flex flex-col items-center justify-center gap-[30px] relative">
          <div className="self-stretch bg-nero flex flex-col items-center justify-center py-0 px-[5px] gap-[5px]">
            <div className="self-stretch flex flex-row items-center justify-center p-2.5">
              <div className="flex-1 relative leading-[120%] font-semibold sm:text-9xl">
                5 steps to becoming a teacher
              </div>
            </div>
            <div className="self-stretch h-[41px]" />
          </div>
          <div className="self-stretch bg-nero flex flex-col items-start justify-start p-[15px] gap-[40px] text-left text-lg text-aqua-deep">
            <div className="self-stretch bg-nero flex flex-row items-center justify-between lg:flex-col md:flex-col">
              <div className="flex-1 bg-nero flex flex-row items-center justify-end p-2.5 lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch">
                <img
                  className="w-48 relative h-48 overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/submityourapplicationpng@2x.png"
                />
              </div>
              <div className="flex-1 flex flex-col items-start justify-center py-8 px-0 lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch relative leading-[30px] font-semibold">
                      Step 1
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start text-2xl text-black1">
                    <div className="self-stretch relative leading-[45px] font-semibold">
                      Submit your application
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start text-lg text-black1">
                  <div className="self-stretch relative leading-[150%]">
                    Sign up as a teacher, verify your phone number, and provide
                    some basic information about yourself.
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch bg-nero flex flex-row items-center justify-between lg:flex-col md:flex-col">
              <div className="flex-1 flex flex-col items-start justify-center py-8 px-0 lg:order-[2] lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch relative leading-[30px] font-semibold">
                      Step 2
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start text-2xlext-black1">
                    <div className="self-stretch relative leading-[45px] font-semibold">
                      Share a demo video
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start text-lg text-black1">
                  <div className="self-stretch relative leading-[150%]">
                    Upload a short 2 to 5 minute video of yourself explaining a
                    concept, subject or topic of your choice. This is your
                    chance to show off your skills. So make the most of it.
                  </div>
                </div>
              </div>
              <div className="flex-1 bg-nero flex flex-row items-center justify-start p-2.5 lg:order-[1] lg:flex-[unset] lg:self-stretch md:order-[1] md:flex-[unset] md:self-stretch">
                <img
                  className="w-48 relative h-48 overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/shareademovideopng@2x.png"
                />
              </div>
            </div>
            <div className="self-stretch bg-nero flex flex-row items-center justify-between lg:flex-col md:flex-col">
              <div className="flex-1 bg-nero flex flex-row items-center justify-end p-2.5 lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch">
                <img
                  className="w-48 relative h-48 overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/taketechnicalassessmentpng@2x.png"
                />
              </div>
              <div className="flex-1 flex flex-col items-start justify-center py-8 px-0 lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch relative leading-[30px] font-semibold">
                      Step 3
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start text-2xl text-black1">
                    <div className="self-stretch relative leading-[45px] font-semibold">
                      Take technical assessment
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start text-lg text-black1">
                  <div className="self-stretch relative leading-[150%]">
                    We will give you a small test to complete. This will help us
                    assess your technical knowledge and skill level.
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch bg-nero flex flex-row items-center justify-between lg:flex-col md:flex-col">
              <div className="flex-1 flex flex-col items-start justify-center py-8 px-0 lg:order-[2] lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch relative leading-[30px] font-semibold">
                      Step 4
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start text-2xl text-black1">
                    <div className="self-stretch relative leading-[45px] font-semibold">
                      Do an interview
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start text-lg text-black1">
                  <div className="self-stretch relative leading-[150%]">
                    If your skill and qualifications meet our expectations,
                    you'll hear from us to set up a round of interviews.
                  </div>
                </div>
              </div>
              <div className="flex-1 bg-nero flex flex-row items-center justify-start p-2.5 lg:order-[1] lg:flex-[unset] lg:self-stretch md:order-[1] md:flex-[unset] md:self-stretch">
                <img
                  className="w-[200px] relative h-40 overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/doaninterviewpng@2x.png"
                />
              </div>
            </div>
            <div className="self-stretch bg-nero flex flex-row items-center justify-between lg:flex-col md:flex-col">
              <div className="flex-1 bg-nero flex flex-row items-center justify-end p-2.5 lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch">
                <img
                  className="w-48 relative h-[280px] overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/gethiredpng@2x.png"
                />
              </div>
              <div className="flex-1 flex flex-col items-start justify-center py-8 px-0 lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch relative leading-[30px] font-semibold">
                      Step 5
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start text-2xl text-black1">
                    <div className="self-stretch relative leading-[45px] font-semibold">
                      Get hired!
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start text-lg text-black1">
                  <div className="self-stretch relative leading-[150%]">
                    If all goes well, you will be informed about our decision to
                    hire you as a teacher, and you'll be teaching kids to code
                    in no time!
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute left-[0] top-[-70px]"
            data-scroll-to="quizzesContainer"
          />
        </div>
        <section className="self-stretch bg-nero flex flex-row flex-wrap items-start justify-center p-[15px]">
          <button
            className="cursor-pointer py-[9px] px-5 bg-aqua-deep rounded flex flex-row items-center justify-center border-[1px] border-solid border-nero"
            autoFocus={true}
          >
            <div className="relative text-lg leading-[150%] font-semibold font-body-large-600 text-nero text-center inline-block max-h-[58px]">
              Become A Teacher
            </div>
          </button>
        </section>
      </div>
      <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] bg-nero flex flex-col items-start justify-start p-5 gap-[20px] z-[2] sm:pl-[5px] sm:pr-[5px] sm:box-border">
        <div className="self-stretch flex flex-col items-center justify-start">
          <div className="self-stretch relative leading-[120%] font-semibold sm:text-9xl">
            Eligibility criteria for teachers
          </div>
        </div>
        <div className="self-stretch bg-nero flex flex-row flex-wrap items-center justify-center p-[15px] gap-[15px] text-5xl md:flex-row md:flex-wrap">
          <div className="shadow-[0px_10px_15px_-3px_rgba(0,_0,_0,_0.1),_0px_4px_6px_-2px_rgba(0,_0,_0,_0.05)] rounded-13xl bg-nero overflow-hidden flex flex-col items-center justify-start p-5 gap-[20px]">
            <img
              className="w-[100px] relative h-[88.2px] overflow-hidden shrink-0"
              alt=""
              src="/freecoursesvg.svg"
            />
            <div className="w-[317.3px] flex flex-col items-center justify-start py-0 px-[31.5px] box-border">
              <div className="self-stretch relative leading-[150%] font-semibold">
                Recent graduates
              </div>
            </div>
            <div className="w-[317.3px] flex flex-col items-center justify-start text-base">
              <div className="self-stretch relative leading-[150%]">
                Freshers with a technical degree are always welcome. We offer
                training and certification to launch your career as a coding
                teacher.
              </div>
            </div>
          </div>
          <div className="shadow-[0px_10px_15px_-3px_rgba(0,_0,_0,_0.1),_0px_4px_6px_-2px_rgba(0,_0,_0,_0.05)] rounded-13xl bg-nero overflow-hidden flex flex-col items-center justify-start p-5 gap-[20px]">
            <img
              className="w-[100px] relative h-[100px] overflow-hidden shrink-0"
              alt=""
              src="/customizedlearningsvg1.svg"
            />
            <div className="w-[317.3px] flex flex-col items-center justify-start py-0 px-[31.5px] box-border">
              <div className="self-stretch relative leading-[150%] font-semibold">
                Teaching experience
              </div>
            </div>
            <div className="w-[317.3px] flex flex-col items-center justify-start text-base">
              <div className="self-stretch relative leading-[150%]">
                Teaching experience and especially experience teaching coding
                will increase your chances of successfully becoming a teacher.
              </div>
            </div>
          </div>
          <div className="shadow-[0px_10px_15px_-3px_rgba(0,_0,_0,_0.1),_0px_4px_6px_-2px_rgba(0,_0,_0,_0.05)] rounded-13xl bg-nero overflow-hidden flex flex-col items-center justify-start p-5 gap-[20px]">
            <img
              className="w-[93.3px] relative h-[100px] overflow-hidden shrink-0"
              alt=""
              src="/moneybackguaranteesvg.svg"
            />
            <div className="w-[317.3px] flex flex-col items-center justify-start py-0 px-[31.5px] box-border">
              <div className="self-stretch relative leading-[150%] font-semibold">
                Coding experience
              </div>
            </div>
            <div className="w-[317.3px] flex flex-col items-center justify-start text-base">
              <div className="self-stretch relative leading-[150%]">
                Hands-on coding experience in a professional setting will also
                be an added advantage as long as you meet the other basic
                requirements.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] bg-nero flex flex-col items-start justify-start p-5 gap-[20px] z-[1] sm:pl-[5px] sm:pr-[5px] sm:box-border">
        <div className="self-stretch flex flex-col items-center justify-start">
          <div className="self-stretch relative leading-[120%] font-semibold sm:text-9xl">
            Why children should learn to code?
          </div>
        </div>
        <div className="self-stretch bg-nero flex flex-row flex-wrap items-center justify-center p-[15px] gap-[15px] text-base md:flex-row md:flex-wrap">
          <div className="w-[350px] rounded-3xs bg-nero flex flex-col items-center justify-center p-5 box-border">
            <img
              className="w-[250px] relative h-[250px] overflow-hidden shrink-0 object-cover"
              alt=""
              src="/reason1png31@2x.png"
            />
            <div className="self-stretch bg-nero flex flex-col items-center justify-center">
              <div className="self-stretch flex flex-col items-center justify-center py-4 px-0">
                <div className="self-stretch relative leading-[120%] font-semibold">
                  Develop key skills
                </div>
              </div>
              <div className="self-stretch flex flex-col items-center justify-center">
                <div className="w-full relative leading-[150%] inline-block max-w-[448px]">
                  Learning to code helps improve a child's logical thinking and
                  problem-solving skills by 70%, also enabling them to perform
                  better at school.
                </div>
              </div>
            </div>
          </div>
          <div className="w-[350px] rounded-3xs bg-nero flex flex-col items-center justify-center p-5 box-border">
            <img
              className="w-[250px] relative h-[250px] overflow-hidden shrink-0 object-cover"
              alt=""
              src="/reason1png4@2x.png"
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
                  they want to be successful in the technology-driven job market
                  of the future.
                </div>
              </div>
            </div>
          </div>
          <div className="w-[350px] rounded-3xs bg-nero flex flex-col items-center justify-center p-5 box-border">
            <img
              className="w-[250px] relative h-[250px] overflow-hidden shrink-0 object-cover"
              alt=""
              src="/reason1png5@2x.png"
            />
            <div className="self-stretch bg-nero flex flex-col items-center justify-center">
              <div className="self-stretch flex flex-col items-center justify-center py-4 px-0">
                <div className="self-stretch relative leading-[120%] font-semibold">
                  Eligibility criteria for teachers
                </div>
              </div>
              <div className="self-stretch flex flex-col items-center justify-center">
                <div className="w-full relative leading-[150%] inline-block max-w-[448px]">
                  Our STEM-focused curriculum makes coding a learning aid and
                  helps kids develop a deeper understanding of the subjects they
                  study at school.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CarrerPage;
