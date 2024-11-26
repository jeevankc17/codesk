import { FunctionComponent, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../common/Navbar';
import Footer from '../../common/Footer';

const AboutUsPage: FunctionComponent = () => {
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

  return (
    <div className="w-full relative bg-nero flex flex-col items-center justify-start p-5 box-border gap-[20px] text-center text-sm text-aqua-deep font-body-large-600 sm:pl-[5px] sm:pr-[5px] sm:box-border">
      <Navbar
        logoColor="#1f95f2"
        onLogoClick={onLogoClick}
        onCoursesClick={onCoursesClick}
        onQuizzesClick={onQuizzesClick}
        onCompetetionsClick={onCompetetionsClick}
        onAboutUsClick={onAboutUsClick}
        coursesColor="#000"
        competetionsColor="#000"
        aboutUsColor="#FF5A43"
        quizzesColor="#000"
      />
      <div className="self-stretch rounded-mini bg-footer-header flex flex-row items-center justify-between py-0 px-[15px] z-[5] text-left text-4xl text-nero lg:flex-col md:flex-col sm:pl-[5px] sm:pr-[5px] sm:box-border">
        <div className="flex-1 flex flex-col items-center justify-center p-[15px] gap-[34px] lg:order-[2] lg:flex-[unset] lg:self-stretch md:order-[2] md:flex-[unset] md:self-stretch">
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch relative leading-[120%] font-semibold sm:text-sm">{`Building the Nepal’s number 1 & most loved coding school for kids & teenagers`}</div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start text-md">
            <div className="self-stretch relative leading-[150%]">
              <p className="m-0">
                CoDesk started with a dream to inspire school kids
              </p>
              <p className="m-0">
                to fall in love with coding and to empower every
              </p>
              <p className="m-0">child to build anything they can imagine</p>
            </div>
          </div>
        </div>
        <img
          className="flex-1 relative max-w-full overflow-hidden h-[500px] object-cover lg:order-[1] lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch sm:h-[300px]"
          alt=""
          src="/image-53@2x.png"
        />
      </div>
      <div className="w-[1380px] bg-nero hidden flex-col items-center justify-center gap-[15px] z-[4] text-black1 font-inter">
        <div className="self-stretch bg-nero flex flex-col items-center justify-center py-0 px-[5px] gap-[5px]">
          <div className="self-stretch flex flex-row items-center justify-center p-2.5">
            <div className="flex-1 relative tracking-[-0.01em] leading-[40px] font-semibold">
              Our Leadership Team
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-center p-2.5 text-xl text-dimgray font-body-large-600">
            <div className="flex-1 relative leading-[32px]">
              With over 30 years of combined experience, we have got a
              well-seasoned team at the helm.
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-center justify-center p-[15px] gap-[15px] text-md font-body-large-600 md:flex-row md:flex-wrap">
          <div className="w-[300px] shadow-[0px_25px_50px_-12px_rgba(0,_0,_0,_0.25)] rounded-lg bg-nero overflow-hidden shrink-0 flex flex-col items-center justify-center py-[50px] px-[15px] box-border gap-[15px]">
            <div className="self-stretch flex flex-col items-center justify-start">
              <div className="self-stretch relative leading-[120%] font-semibold whitespace-pre-wrap">{`“Teaching coding to kids is a huge responsibility and we want to take that”  `}</div>
            </div>
            <div className="w-full overflow-hidden flex flex-col items-center justify-center py-0 px-[42px] box-border max-w-[384px]">
              <img
                className="w-[146px] relative rounded-61xl-5 h-[154px] object-cover"
                alt=""
                src="/rectangle-12@2x.png"
              />
            </div>
            <div className="self-stretch flex flex-col items-center justify-center gap-[2px]">
              <div className="self-stretch flex flex-col items-center justify-start text-2xl">
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
                src="/rectangle-111@2x.png"
              />
            </div>
            <div className="self-stretch flex flex-col items-center justify-center gap-[2px]">
              <div className="self-stretch flex flex-col items-center justify-start text-2xl">
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
                "Guiding children through the world of coding is a weighty task
                we're committed to shouldering."
              </div>
            </div>
            <div className="w-full overflow-hidden flex flex-col items-center justify-center py-0 px-[42px] box-border max-w-[384px]">
              <img
                className="w-[146px] relative rounded-61xl-5 h-[154px] object-cover"
                alt=""
                src="/rectangle-12@2x.png"
              />
            </div>
            <div className="self-stretch flex flex-col items-center justify-center gap-[2px]">
              <div className="self-stretch flex flex-col items-center justify-start text-2xl">
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
      </div>
      <div className="self-stretch bg-nero flex flex-col items-center justify-center py-0 px-[5px] gap-[5px] z-[3] font-inter">
        <div className="self-stretch flex flex-row items-center justify-center p-2.5">
          <div className="flex-1 relative tracking-[-0.01em] leading-[40px] font-semibold text-3xl md:text-xl sm:text-lg">
            All thanks to our Ambassadors
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-center text-xl text-black1 font-body-large-600">
          <div className="flex-1 relative leading-[32px]">{`Our teachers and curriculum-designers are the flag-bearers of our approach to revolutionize the education system making it unique, immersive and holistic for the kids, sparking curiosity and thirst for learning & doing. They constantly strive to bring out the genius in every kid. The curriculum is conceptualized and designed by the best minds from top tier institutes around the globe. All hail to them!`}</div>
        </div>
      </div>
      <div className="self-stretch bg-nero flex flex-col items-center justify-center gap-[15px] z-[2]">
        <div className="self-stretch bg-nero flex flex-col items-center justify-center py-0 px-[5px]">
          <div className="self-stretch flex flex-row items-center justify-center p-2.5">
            <div className="flex-1 relative leading-[120%] font-semibold text-3xl md:text-xl sm:text-lg">
              Our Core Belief
            </div>
          </div>
        </div>
        <div className="self-stretch bg-nero flex flex-col items-start justify-start p-[15px] gap-[40px] text-3xl text-black1">
          <div className="self-stretch bg-nero flex flex-row items-start justify-start gap-[40px] lg:flex-col md:flex-col">
            <div className="flex-1 bg-nero flex flex-row items-center justify-center gap-[20px] w-full lg:flex-[unset] lg:self-stretch md:flex-col md:flex-[unset] md:self-stretch">
              <div className="overflow-hidden flex flex-row items-start justify-center relative object-contain sm:flex-col">
                <div className="w-[224.8px] overflow-hidden shrink-0 flex flex-col items-start justify-start max-w-[224.8px] z-[0]">
                  <div className="w-[224.8px] h-[179.8px] overflow-hidden shrink-0 flex flex-col items-center justify-center">
                    <div className="w-[224.8px] relative h-[179.8px] overflow-hidden shrink-0" />
                  </div>
                </div>
                <img
                  className="w-[224.8px] absolute !m-[0] top-[0.5px] left-[0px] h-[179.8px] overflow-hidden shrink-0 object-cover z-[1]"
                  alt=""
                  src="/empoweringchildrenpng@2x.png"
                />
              </div>
              <div className="flex-1 flex flex-col items-start justify-start w-full md:flex-[unset] md:self-stretch">
                <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5">
                  <div className="h-[34px] flex-1 relative leading-[120%] font-semibold inline-block sm:text-2xl">
                    Empowering Children
                  </div>
                </div>
                <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5 text-md">
                  <div className="flex-1 relative leading-[150%] ">
                    The future is digital and we believe providing children with
                    the knowledge of coding will safeguard their future.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 bg-nero flex flex-row items-center justify-center gap-[20px] w-full lg:w-full lg:flex-[unset] lg:self-stretch md:flex-col md:flex-[unset] md:self-stretch">
              <div className="overflow-hidden flex flex-row items-start justify-center relative object-contain sm:flex-col">
                <div className="w-[224.8px] overflow-hidden shrink-0 flex flex-col items-start justify-start max-w-[224.8px] z-[0]">
                  <div className="w-[224.8px] h-[179.8px] overflow-hidden shrink-0 flex flex-col items-center justify-center">
                    <div className="w-[224.8px] relative h-[179.8px] overflow-hidden shrink-0" />
                  </div>
                </div>
                <img
                  className="w-[224.8px] absolute !m-[0] top-[0.5px] left-[-0.2px] h-[179.8px] overflow-hidden shrink-0 object-cover z-[1]"
                  alt=""
                  src="/inquisitivenesspng@2x.png"
                />
              </div>
              <div className="flex-1 flex flex-col items-start justify-start w-full md:flex-[unset] md:self-stretch">
                <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5">
                  <div className="h-[34px] flex-1 relative leading-[120%] font-semibold inline-block sm:text-2xl">
                    Discovering Why?
                  </div>
                </div>
                <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5 text-md">
                  <div className="flex-1 relative leading-[150%]">
                    We encourage children to ask as many questions as possible.
                    We believe a curious mind will do wonders.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch bg-nero flex flex-row items-start justify-start gap-[40px] lg:flex-col md:flex-col">
            <div className="flex-1 bg-nero flex flex-row items-center justify-center gap-[20px] w-full lg:flex-[unset] lg:self-stretch md:flex-col md:flex-[unset] md:self-stretch">
              <div className="overflow-hidden flex flex-row items-start justify-center relative object-contain sm:flex-col">
                <div className="w-[224.8px] overflow-hidden shrink-0 flex flex-col items-start justify-start max-w-[224.8px] z-[0]">
                  <div className="w-[224.8px] h-[179.8px] overflow-hidden shrink-0 flex flex-col items-center justify-center">
                    <div className="w-[224.8px] relative h-[179.8px] overflow-hidden shrink-0" />
                  </div>
                </div>
                <img
                  className="w-[224.8px] absolute !m-[0] top-[0.8px] left-[-0.2px] h-[179.8px] overflow-hidden shrink-0 object-cover z-[1]"
                  alt=""
                  src="/childhoodwonderpng@2x.png"
                />
              </div>
              <div className="flex-1 flex flex-col items-start justify-start w-full md:flex-[unset] md:self-stretch">
                <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5">
                  <div className="h-[34px] flex-1 relative leading-[120%] font-semibold inline-block sm:text-2xl">
                    The wonder of childhood
                  </div>
                </div>
                <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5 text-sm">
                  <div className="flex-1 relative leading-[150%]">
                    We believe that childhood is a wonderful age where valuable
                    thoughts are shaped and through our curriculum we try to
                    inculcate learnings through a fun way.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 bg-nero flex flex-row items-center justify-center gap-[20px] w-full lg:w-full lg:flex-[unset] lg:self-stretch md:flex-col md:flex-[unset] md:self-stretch">
              <div className="overflow-hidden flex flex-row items-start justify-center relative object-contain sm:flex-col">
                <div className="w-[224.8px] overflow-hidden shrink-0 flex flex-col items-start justify-start max-w-[224.8px] z-[0]">
                  <div className="w-[224.8px] h-[179.8px] overflow-hidden shrink-0 flex flex-col items-center justify-center">
                    <div className="w-[224.8px] relative h-[179.8px] overflow-hidden shrink-0" />
                  </div>
                </div>
                <div className="!m-[0] absolute top-[0.8px] left-[-0.5px] overflow-hidden flex flex-row items-start justify-center max-w-[224.8px] z-[1]">
                  <div className="flex-1 overflow-hidden flex flex-col items-start justify-start max-w-[224.8px] z-[0]">
                    <div className="w-[224.8px] h-[179.8px] overflow-hidden shrink-0 flex flex-col items-center justify-center">
                      <div className="w-[224.8px] relative h-[179.8px] overflow-hidden shrink-0" />
                    </div>
                  </div>
                  <img
                    className="w-[224.8px] absolute !m-[0] top-[0px] left-[0px] h-[179.8px] overflow-hidden shrink-0 object-cover z-[1]"
                    alt=""
                    src="/codingpng@2x.png"
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start w-full md:flex-[unset] md:self-stretch">
                <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5">
                  <div className="h-[34px] flex-1 relative leading-[120%] font-semibold inline-block sm:text-2xl">
                    Coding should be fun
                  </div>
                </div>
                <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5 text-md">
                  <div className="flex-1 relative leading-[150%]">
                    We want to make learning computer science a fun activity
                    children look forward to. We are constantly working to make
                    our sessions and activities as interactive and entertaining
                    for the kids as possible.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-nero flex flex-col items-center justify-center gap-[15px] z-[1]">
        <div className="self-stretch bg-nero flex flex-col items-center justify-center py-0 px-[5px]">
          <div className="self-stretch flex flex-row items-center justify-center p-2.5">
            <div className="flex-1 relative leading-[120%] font-semibold sm:text-3xl">
              Our Roadmap
            </div>
          </div>
        </div>
        <div className="self-stretch bg-nero flex flex-col items-start justify-start p-[15px] gap-[40px] text-3xl text-black1 font-inter">
          <div className="self-stretch bg-nero flex flex-row items-center justify-between lg:flex-col md:flex-col">
            <div className="flex-1 bg-nero flex flex-row items-center justify-center p-2.5 lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch">
              <img
                className="w-[300px] relative h-[325px] overflow-hidden shrink-0"
                alt=""
                src="/reason5svg.svg"
              />
            </div>
            <div className="flex-1 flex flex-col items-center justify-center py-0 px-[70px] lg:flex-[unset] lg:self-stretch md:pl-2.5 md:pr-2.5 md:box-border md:flex-[unset] md:self-stretch">
              <div className="self-stretch flex flex-col items-start justify-start w-full">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5">
                    <div className="h-10 flex-1 relative tracking-[-0.01em] leading-[40px] font-semibold inline-block">
                      Conceptualization
                    </div>
                  </div>
                  <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5 text-md font-body-large-600">
                    <div className="flex-1 relative leading-[150%] font-medium">
                      (April 2022)
                    </div>
                  </div>
                </div>
                <div className="self-stretch bg-nero flex flex-row items-center justify-center py-2.5 px-[30px] text-md font-body-large-600">
                  <div className="flex-1 relative leading-[150%]">
                    Identified the need for CoDeskLab to streamline after-school
                    program management and conducted market research for
                    validation.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch bg-nero flex flex-row items-center justify-between font-body-large-600 lg:flex-col md:flex-col">
            <div className="flex-1 flex flex-col items-center justify-center py-0 px-[70px] lg:order-[2] lg:flex-[unset] lg:self-stretch md:pl-2.5 md:pr-2.5 md:box-border md:order-[2] md:flex-[unset] md:self-stretch">
              <div className="self-stretch flex flex-col items-start justify-start w-full">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5">
                    <div className="h-[38px] flex-1 relative leading-[37.5px] font-semibold inline-block">
                      Team Formation
                    </div>
                  </div>
                  <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5 text-md">
                    <div className="flex-1 relative leading-[150%] font-medium">
                      (October 2022)
                    </div>
                  </div>
                </div>
                <div className="self-stretch bg-nero flex flex-row items-center justify-center py-2.5 px-[30px] text-md">
                  <div className="flex-1 relative leading-[150%]">
                    Assembled a dedicated team passionate about education
                    technology to develop CoDeskLab.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 bg-nero flex flex-row items-center justify-center p-2.5 lg:order-[1] lg:flex-[unset] lg:self-stretch md:order-[1] md:flex-[unset] md:self-stretch">
              <img
                className="w-[300px] relative h-[300px] overflow-hidden shrink-0"
                alt=""
                src="/partnersvg.svg"
              />
            </div>
          </div>
          <div className="self-stretch bg-nero flex flex-row items-center justify-between lg:flex-col md:flex-col">
            <div className="flex-1 bg-nero flex flex-row items-center justify-center p-2.5 lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch">
              <img
                className="w-[300px] relative h-[300px] overflow-hidden shrink-0"
                alt=""
                src="/devsvg.svg"
              />
            </div>
            <div className="flex-1 flex flex-col items-center justify-center py-0 px-[70px] lg:flex-[unset] lg:self-stretch md:pl-2.5 md:pr-2.5 md:box-border md:flex-[unset] md:self-stretch">
              <div className="self-stretch flex flex-col items-start justify-start w-full">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5">
                    <div className="h-10 flex-1 relative tracking-[-0.01em] leading-[40px] font-semibold inline-block">
                      Product Development Kickoff
                    </div>
                  </div>
                  <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5 text-md font-body-large-600">
                    <div className="flex-1 relative leading-[150%] font-medium">
                      (January 2023)
                    </div>
                  </div>
                </div>
                <div className="self-stretch bg-nero flex flex-row items-center justify-center py-2.5 px-[30px] text-md font-body-large-600">
                  <div className="flex-1 relative leading-[150%]">
                    Initiated development on CoDeskLab, focusing on core
                    features and utilizing agile methodologies.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch bg-nero flex flex-row items-center justify-between font-body-large-600 lg:flex-col md:flex-col">
            <div className="flex-1 flex flex-col items-center justify-center py-0 px-[50px] lg:order-[2] lg:flex-[unset] lg:self-stretch md:order-[2] md:flex-[unset] md:self-stretch">
              <div className="self-stretch flex flex-col items-start justify-start w-full">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5">
                    <div className="h-[38px] flex-1 relative leading-[37.5px] font-semibold inline-block">
                      Beta Testing
                    </div>
                  </div>
                  <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5 text-md">
                    <div className="flex-1 relative leading-[150%] font-medium">
                      (July 2023)
                    </div>
                  </div>
                </div>
                <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5 text-md">
                  <div className="flex-1 relative leading-[150%]">
                    Launched a beta version of CoDeskLab, gathering feedback
                    from users for iterative improvements.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 bg-nero flex flex-row items-center justify-center p-2.5 lg:order-[1] lg:flex-[unset] lg:self-stretch md:order-[1] md:flex-[unset] md:self-stretch">
              <img
                className="w-[300px] relative h-[300px] overflow-hidden shrink-0"
                alt=""
                src="/partnersvg.svg"
              />
            </div>
          </div>
          <div className="self-stretch bg-nero flex flex-row items-center justify-between lg:flex-col md:flex-col">
            <div className="flex-1 bg-nero flex flex-row items-center justify-center p-2.5 lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch">
              <img
                className="w-[300px] relative h-[300px] overflow-hidden shrink-0"
                alt=""
                src="/oct2020svg.svg"
              />
            </div>
            <div className="flex-1 flex flex-col items-center justify-center py-0 px-[70px] lg:flex-[unset] lg:self-stretch md:pl-2.5 md:pr-2.5 md:box-border md:flex-[unset] md:self-stretch">
              <div className="self-stretch flex flex-col items-start justify-start w-full">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5">
                    <div className="h-10 flex-1 relative tracking-[-0.01em] leading-[40px] font-semibold inline-block">
                      User Feedback and Iteration
                    </div>
                  </div>
                  <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5 text-md font-body-large-600">
                    <div className="flex-1 relative leading-[150%] font-medium">
                      (October 2023)
                    </div>
                  </div>
                </div>
                <div className="self-stretch bg-nero flex flex-row items-center justify-center py-2.5 px-[30px] text-md font-body-large-600">
                  <div className="flex-1 relative leading-[150%]">
                    Incorporated user feedback to enhance the CoDeskLab
                    software, prioritizing user experience and functionality.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch bg-nero flex flex-row items-center justify-between font-body-large-600 lg:flex-col md:flex-col">
            <div className="flex-1 flex flex-col items-center justify-center py-0 px-[50px] lg:order-[2] lg:flex-[unset] lg:self-stretch md:order-[2] md:flex-[unset] md:self-stretch">
              <div className="self-stretch flex flex-col items-start justify-start w-full">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5">
                    <div className="h-[38px] flex-1 relative leading-[37.5px] font-semibold inline-block">
                      Official Launch
                    </div>
                  </div>
                  <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5 text-md">
                    <div className="flex-1 relative leading-[150%] font-medium">
                      (April 2024)
                    </div>
                  </div>
                </div>
                <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5 text-md">
                  <div className="flex-1 relative leading-[150%]">
                    Launched CoDeskLab officially, leveraging feedback from beta
                    testing to ensure a robust product.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 bg-nero flex flex-row items-center justify-center p-2.5 lg:order-[1] lg:flex-[unset] lg:self-stretch md:order-[1] md:flex-[unset] md:self-stretch">
              <div className="w-[300px] h-[300px] overflow-hidden shrink-0 flex flex-row items-start justify-start">
                <img
                  className="w-[300px] relative h-[300px]"
                  alt=""
                  src="/clip-path-group2.svg"
                />
              </div>
            </div>
          </div>
          <div className="self-stretch bg-nero flex flex-row items-center justify-between lg:flex-col md:flex-col">
            <div className="flex-1 bg-nero flex flex-row items-center justify-center p-2.5 lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch">
              <img
                className="w-[300px] h-[300px] overflow-hidden shrink-0 object-cover"
                alt=""
                src="/childhoodwonderpng1@2x.png"
              />
            </div>
            <div className="flex-1 flex flex-col items-center justify-center py-0 px-[70px] lg:flex-[unset] lg:self-stretch md:pl-2.5 md:pr-2.5 md:box-border md:flex-[unset] md:self-stretch">
              <div className="self-stretch flex flex-col items-start justify-start w-full">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5">
                    <div className="h-10 flex-1 relative tracking-[-0.01em] leading-[40px] font-semibold inline-block">
                      User Acquisition and Onboarding
                    </div>
                  </div>
                  <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5 text-md font-body-large-600">
                    <div className="flex-1 relative leading-[150%] font-medium">
                      (July 2024)
                    </div>
                  </div>
                </div>
                <div className="self-stretch bg-nero flex flex-row items-center justify-center py-2.5 px-[30px] text-md font-body-large-600">
                  <div className="flex-1 relative leading-[150%]">
                    Executed targeted marketing campaigns to acquire new users
                    and provided comprehensive onboarding support.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch bg-nero flex flex-row items-center justify-between font-body-large-600 lg:flex-col md:flex-col">
            <div className="flex-1 flex flex-col items-center justify-center py-0 px-[50px] lg:order-[2] lg:flex-[unset] lg:self-stretch md:order-[2] md:flex-[unset] md:self-stretch">
              <div className="self-stretch flex flex-col items-start justify-start w-full">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5">
                    <div className="h-[38px] flex-1 relative leading-[37.5px] font-semibold inline-block">
                      Expansion and Partnerships
                    </div>
                  </div>
                  <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5 text-md">
                    <div className="flex-1 relative leading-[22px] font-medium">
                      (January 2025)
                    </div>
                  </div>
                </div>
                <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5 text-md">
                  <div className="flex-1 relative leading-[150%]">
                    Explored opportunities for expansion and formed strategic
                    partnerships to increase adoption.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 bg-nero flex flex-row items-center justify-center p-2.5 lg:order-[1] lg:flex-[unset] lg:self-stretch md:order-[1] md:flex-[unset] md:self-stretch">
              <div className="w-[300px] h-[300px] overflow-hidden shrink-0 flex flex-col items-start justify-start">
                <div className="w-[300px] h-[324.8px] overflow-hidden shrink-0 flex flex-col items-center justify-center">
                  <img
                    className="w-[300px] relative h-[324.8px] overflow-hidden shrink-0"
                    alt=""
                    src="/sep2021svg.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch bg-nero flex flex-row items-center justify-between lg:flex-col md:flex-col">
            <div className="flex-1 bg-nero flex flex-row items-center justify-center p-2.5 lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch">
              <img
                className="w-[300px] h-[300px] overflow-hidden shrink-0 object-cover"
                alt=""
                src="/childhoodwonderpng1@2x.png"
              />
            </div>
            <div className="flex-1 flex flex-col items-center justify-center py-0 px-[70px] lg:flex-[unset] lg:self-stretch md:pl-2.5 md:pr-2.5 md:box-border md:flex-[unset] md:self-stretch">
              <div className="self-stretch flex flex-col items-start justify-start w-full">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5">
                    <div className="h-20 flex-1 relative tracking-[-0.01em] leading-[40px] font-semibold inline-block">
                      Continuous Improvement and Innovation
                    </div>
                  </div>
                  <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5 text-md font-body-large-600">
                    <div className="flex-1 relative leading-[150%] font-medium">
                      (April 2025)
                    </div>
                  </div>
                </div>
                <div className="self-stretch bg-nero flex flex-row items-center justify-center py-2.5 px-[30px] text-md font-body-large-600">
                  <div className="flex-1 relative leading-[150%]">
                    Committed to ongoing product development and innovation,
                    staying ahead of the competition.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch bg-nero flex flex-row items-center justify-between font-body-large-600 lg:flex-col md:flex-col">
            <div className="flex-1 flex flex-col items-center justify-center py-0 px-[50px] lg:order-[2] lg:flex-[unset] lg:self-stretch md:order-[2] md:flex-[unset] md:self-stretch">
              <div className="self-stretch flex flex-col items-start justify-start w-full">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5">
                    <div className="h-[38px] flex-1 relative leading-[37.5px] font-semibold inline-block">
                      Scaling Operations
                    </div>
                  </div>
                  <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5 text-md">
                    <div className="flex-1 relative leading-[22px] font-medium">
                      (April 2026)
                    </div>
                  </div>
                </div>
                <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5 text-md">
                  <div className="flex-1 relative leading-[150%]">
                    Scaled operations and infrastructure to meet the increasing
                    demand for CoDeskLab software, ensuring sustainability.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 bg-nero flex flex-row items-center justify-center p-2.5 lg:order-[1] lg:flex-[unset] lg:self-stretch md:order-[1] md:flex-[unset] md:self-stretch">
              <img
                className="w-[300px] relative h-[300px] overflow-hidden shrink-0"
                alt=""
                src="/happysvg.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUsPage;
