import { FunctionComponent, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../common/Navbar';
import Footer from '../../common/Footer';
import DoneModal from '../../common/DoneModal';
import PortalPopup from '../../common/PortalPopup';

const PartnershipPage: FunctionComponent = () => {
  const [isDoneModalPopupOpen, setDoneModalPopupOpen] = useState(false);
  const navigate = useNavigate();

  const openDoneModalPopup = useCallback(() => {
    setDoneModalPopupOpen(true);
  }, []);

  const closeDoneModalPopup = useCallback(() => {
    setDoneModalPopupOpen(false);
  }, []);

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
      "[data-scroll-to='contactUsContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
  }, []);

  return (
    <>
      <div className="w-full relative bg-nero flex flex-col items-center justify-center p-5 box-border gap-[20px] text-center text-4xl text-black1 font-body-large-600 sm:gap-[5px] sm:pl-[5px] sm:pr-[5px] sm:box-border">
        <div className="h-[50px] w-full"></div>
        
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
        
        <div className="self-stretch rounded-[20px] bg-footer-header h-[500px] flex flex-row items-center justify-between py-0 px-[10px] box-border gap-[5px] z-[1] text-left lg:flex-col lg:h-auto md:flex-col md:gap-[5px] md:p-2.5 md:box-border sm:gap-[5px] sm:p-[5px] sm:h-auto sm:min-h-[550px] sm:box-border">
          <div className="w-[775px] flex flex-col items-start justify-center h-full p-[10px] box-border gap-[10px] lg:order-[2] lg:w-full md:w-full sm:w-full sm:items-center">
            <div className="self-stretch flex flex-col items-start justify-start gap-[15px] sm:items-center">
              <div className="self-stretch relative leading-[120%] font-semibold text-3xl md:text-xl sm:text-lg sm:text-center text-nero">
                Partner With Us
              </div>
              <div className="self-stretch relative leading-[150%] text-md sm:text-sm sm:text-center text-nero">
                Make your school stand out by partnering with Nepal's #1 coding platform for school kids
              </div>
            </div>
          </div>
          <div className="flex-1 h-full flex items-center justify-center">
            <img
              className="w-full h-full object-cover object-center"
              alt=""
              src="/image-511@2x.png"
            />
          </div>
        </div>
        
        <div className="self-stretch bg-nero flex flex-col items-center justify-center gap-[30px] z-[2] text-4xl\">
          <div className="self-stretch bg-nero flex flex-col items-center justify-center py-0 px-[5px] gap-[5px]">
            <div className="self-stretch flex flex-row items-center justify-center p-2.5">
              <div className="flex-1 relative leading-[120%] font-semibold sm:text-3xl">
                Benefits Of Partnering With Us
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-center p-2.5 text-sm sm:text-sm">
              <div className="flex-1 relative leading-[150%] sm:text-sm">
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
                    <div className="self-stretch relative leading-[120%] font-semibold sm:text-lg">
                      For School
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-center justify-center gap-[9px] text-lg text-aqua-deep">
                    <div className="self-stretch flex flex-row items-start justify-center gap-[5px] text-black1">
                      <img
                        className="w-8 relative h-8 overflow-hidden shrink-0"
                        alt=""
                        src="/fire.svg"
                      />
                      <div className="flex-1 relative leading-[150%] font-semibold sm:text-sm">
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
                      <div className="flex-1 relative leading-[150%] font-semibold sm:text-sm">
                        <span>
                          Computer science graduate teachers from CoDesk
                        </span>
                        <span className="text-black1">
                          {' '}
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
                      <div className="flex-1 relative leading-[150%] font-semibold sm:text-sm">
                        <span>Master dashboard</span>
                        <span className="text-black1">
                          {' '}
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
                    <div className="self-stretch relative leading-[120%] font-semibold sm:text-lg">
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
                      <div className="flex-1 relative leading-[150%] font-semibold sm:text-sm">
                        <span>Training</span>
                        <span className="text-black1">{` provided to school teachers by `}</span>
                        <span>{`CoDesk Knowledge Experts `}</span>
                        <span className="text-black1">
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
                      <div className="flex-1 relative leading-[30px] font-semibold sm:text-sm">
                        <span>Custom dashboard</span>
                        <span className="text-black1">
                          {' '}
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
                      <div className="flex-1 relative leading-[150%] font-semibold sm:text-sm">
                        <span>Speakership / Advocate</span>
                        <span className="text-black1">
                          {' '}
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
                    <div className="self-stretch relative leading-[120%] font-semibold sm:text-lg">
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
                      <div className="flex-1 relative leading-[150%] font-semibold sm:text-sm">
                        <span>Lifetime access</span>
                        <span className="text-black1">{` to a personal dashboard with `}</span>
                        <span>lessons, projects, coding quizzes,</span>
                        <span className="text-black1">{` and `}</span>
                        <span>certificates</span>
                        <span className="text-black1">.</span>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                      <img
                        className="w-8 relative h-8 overflow-hidden shrink-0"
                        alt=""
                        src="/fire.svg"
                      />
                      <div className="flex-1 relative leading-[30px] font-semibold sm:text-sm">
                        Regular Parent-Teacher Meetings and doubt sessions.
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                      <img
                        className="w-8 relative h-8 overflow-hidden shrink-0"
                        alt=""
                        src="/fire.svg"
                      />
                      <div className="flex-1 relative leading-[150%] font-semibold sm:text-sm">
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
                <div className="self-stretch relative text-lg leading-[150%] font-semibold font-body-large-600 text-slategray text-left sm:text-sm">
                  Fill in your details to join the party!
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch rounded flex flex-col items-start justify-start py-0 px-3 border-[1px] border-solid border-other-outlined-border">
                    <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-4 px-0 gap-[8px]">
                      <div className="hidden flex-row items-start justify-start gap-[8px]">
                        <div className="flex flex-col items-start justify-start">
                          <div className="rounded-2xl bg-grey-grey-300 flex flex-row items-center justify-start p-1">
                            <div className="w-6 rounded-45xl bg-grey-grey-400 h-6 overflow-hidden shrink-0 hidden flex-row items-center justify-center">
                              <div className="self-stretch flex-1 relative text-xs tracking-[0.4px] leading-[166%] font-components-chip text-grey-grey-700 text-center flex items-center justify-center">
                                F
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start py-[3px] px-1.5">
                              <div className="relative text-sm tracking-[0.16px] leading-[18px] font-components-chip text-text-primary text-left">
                                Chip
                              </div>
                            </div>
                            <img
                              className="w-6 relative h-6 overflow-hidden shrink-0"
                              alt=""
                              src="/cancel.svg"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start">
                          <div className="rounded-2xl bg-grey-grey-300 flex flex-row items-center justify-start p-1">
                            <div className="w-6 rounded-45xl bg-grey-grey-400 h-6 overflow-hidden shrink-0 hidden flex-row items-center justify-center">
                              <div className="self-stretch flex-1 relative text-xs tracking-[0.4px] leading-[166%] font-components-chip text-grey-grey-700 text-center flex items-center justify-center">
                                F
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start py-[3px] px-1.5">
                              <div className="relative text-sm tracking-[0.16px] leading-[18px] font-components-chip text-text-primary text-left">
                                Chip
                              </div>
                            </div>
                            <img
                              className="w-6 relative h-6 overflow-hidden shrink-0"
                              alt=""
                              src="/cancel.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <input
                        className="[border:none] [outline:none] font-body-large-600 text-md bg-[transparent] flex-1 relative leading-[150%] text-text-secondary text-left sm:text-base"
                        placeholder="Your name"
                        type="text"
                      />
                      <div className="w-7 relative h-7 hidden">
                        <div className="absolute top-[0px] left-[0px] flex flex-col items-center justify-start">
                          <div className="rounded-29xl flex flex-row items-center justify-start p-1">
                            <img
                              className="w-5 relative h-5 overflow-hidden shrink-0"
                              alt=""
                              src="/close.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start">
                        <img
                          className="w-6 relative h-6 overflow-hidden shrink-0"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch rounded flex flex-col items-start justify-start py-0 px-3 border-[1px] border-solid border-other-outlined-border">
                    <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-4 px-0 gap-[8px]">
                      <div className="hidden flex-row items-start justify-start gap-[8px]">
                        <div className="flex flex-col items-start justify-start">
                          <div className="rounded-2xl bg-grey-grey-300 flex flex-row items-center justify-start p-1">
                            <div className="w-6 rounded-45xl bg-grey-grey-400 h-6 overflow-hidden shrink-0 hidden flex-row items-center justify-center">
                              <div className="self-stretch flex-1 relative text-xs tracking-[0.4px] leading-[166%] font-components-chip text-grey-grey-700 text-center flex items-center justify-center">
                                F
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start py-[3px] px-1.5">
                              <div className="relative text-sm tracking-[0.16px] leading-[18px] font-components-chip text-text-primary text-left">
                                Chip
                              </div>
                            </div>
                            <img
                              className="w-6 relative h-6 overflow-hidden shrink-0"
                              alt=""
                              src="/cancel.svg"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start">
                          <div className="rounded-2xl bg-grey-grey-300 flex flex-row items-center justify-start p-1">
                            <div className="w-6 rounded-45xl bg-grey-grey-400 h-6 overflow-hidden shrink-0 hidden flex-row items-center justify-center">
                              <div className="self-stretch flex-1 relative text-xs tracking-[0.4px] leading-[166%] font-components-chip text-grey-grey-700 text-center flex items-center justify-center">
                                F
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start py-[3px] px-1.5">
                              <div className="relative text-sm tracking-[0.16px] leading-[18px] font-components-chip text-text-primary text-left">
                                Chip
                              </div>
                            </div>
                            <img
                              className="w-6 relative h-6 overflow-hidden shrink-0"
                              alt=""
                              src="/cancel.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <input
                        className="[border:none] [outline:none] font-body-large-600 text-md bg-[transparent] flex-1 relative leading-[150%] text-text-secondary text-left sm:text-base"
                        placeholder="Email address"
                        type="text"
                      />
                      <div className="w-7 relative h-7 hidden">
                        <div className="absolute top-[0px] left-[0px] flex flex-col items-center justify-start">
                          <div className="rounded-29xl flex flex-row items-center justify-start p-1">
                            <img
                              className="w-5 relative h-5 overflow-hidden shrink-0"
                              alt=""
                              src="/close.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start">
                        <img
                          className="w-6 relative h-6 overflow-hidden shrink-0"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch rounded flex flex-col items-start justify-start py-0 px-3 border-[1px] border-solid border-other-outlined-border">
                    <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-4 px-0 gap-[8px]">
                      <div className="hidden flex-row items-start justify-start gap-[8px]">
                        <div className="flex flex-col items-start justify-start">
                          <div className="rounded-2xl bg-grey-grey-300 flex flex-row items-center justify-start p-1">
                            <div className="w-6 rounded-45xl bg-grey-grey-400 h-6 overflow-hidden shrink-0 hidden flex-row items-center justify-center">
                              <div className="self-stretch flex-1 relative text-xs tracking-[0.4px] leading-[166%] font-components-chip text-grey-grey-700 text-center flex items-center justify-center">
                                F
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start py-[3px] px-1.5">
                              <div className="relative text-sm tracking-[0.16px] leading-[18px] font-components-chip text-text-primary text-left">
                                Chip
                              </div>
                            </div>
                            <img
                              className="w-6 relative h-6 overflow-hidden shrink-0"
                              alt=""
                              src="/cancel.svg"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start">
                          <div className="rounded-2xl bg-grey-grey-300 flex flex-row items-center justify-start p-1">
                            <div className="w-6 rounded-45xl bg-grey-grey-400 h-6 overflow-hidden shrink-0 hidden flex-row items-center justify-center">
                              <div className="self-stretch flex-1 relative text-xs tracking-[0.4px] leading-[166%] font-components-chip text-grey-grey-700 text-center flex items-center justify-center">
                                F
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start py-[3px] px-1.5">
                              <div className="relative text-sm tracking-[0.16px] leading-[18px] font-components-chip text-text-primary text-left">
                                Chip
                              </div>
                            </div>
                            <img
                              className="w-6 relative h-6 overflow-hidden shrink-0"
                              alt=""
                              src="/cancel.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <input
                        className="[border:none] [outline:none] font-body-large-600 text-md bg-[transparent] flex-1 relative leading-[150%] text-text-secondary text-left sm:text-base"
                        placeholder="Phone Number"
                        type="text"
                      />
                      <div className="w-7 relative h-7 hidden">
                        <div className="absolute top-[0px] left-[0px] flex flex-col items-center justify-start">
                          <div className="rounded-29xl flex flex-row items-center justify-start p-1">
                            <img
                              className="w-5 relative h-5 overflow-hidden shrink-0"
                              alt=""
                              src="/close.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start">
                        <img
                          className="w-6 relative h-6 overflow-hidden shrink-0"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch rounded flex flex-col items-start justify-start py-0 px-3 border-[1px] border-solid border-other-outlined-border">
                    <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-4 px-0 gap-[8px]">
                      <div className="hidden flex-row items-start justify-start gap-[8px]">
                        <div className="flex flex-col items-start justify-start">
                          <div className="rounded-2xl bg-grey-grey-300 flex flex-row items-center justify-start p-1">
                            <div className="w-6 rounded-45xl bg-grey-grey-400 h-6 overflow-hidden shrink-0 hidden flex-row items-center justify-center">
                              <div className="self-stretch flex-1 relative text-xs tracking-[0.4px] leading-[166%] font-components-chip text-grey-grey-700 text-center flex items-center justify-center">
                                F
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start py-[3px] px-1.5">
                              <div className="relative text-sm tracking-[0.16px] leading-[18px] font-components-chip text-text-primary text-left">
                                Chip
                              </div>
                            </div>
                            <img
                              className="w-6 relative h-6 overflow-hidden shrink-0"
                              alt=""
                              src="/cancel.svg"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start">
                          <div className="rounded-2xl bg-grey-grey-300 flex flex-row items-center justify-start p-1">
                            <div className="w-6 rounded-45xl bg-grey-grey-400 h-6 overflow-hidden shrink-0 hidden flex-row items-center justify-center">
                              <div className="self-stretch flex-1 relative text-xs tracking-[0.4px] leading-[166%] font-components-chip text-grey-grey-700 text-center flex items-center justify-center">
                                F
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start py-[3px] px-1.5">
                              <div className="relative text-sm tracking-[0.16px] leading-[18px] font-components-chip text-text-primary text-left">
                                Chip
                              </div>
                            </div>
                            <img
                              className="w-6 relative h-6 overflow-hidden shrink-0"
                              alt=""
                              src="/cancel.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <input
                        className="[border:none] [outline:none] font-body-large-600 text-md bg-[transparent] flex-1 relative leading-[150%] text-text-secondary text-left sm:text-base"
                        placeholder="School Name"
                        type="text"
                      />
                      <div className="w-7 relative h-7 hidden">
                        <div className="absolute top-[0px] left-[0px] flex flex-col items-center justify-start">
                          <div className="rounded-29xl flex flex-row items-center justify-start p-1">
                            <img
                              className="w-5 relative h-5 overflow-hidden shrink-0"
                              alt=""
                              src="/close.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start">
                        <img
                          className="w-6 relative h-6 overflow-hidden shrink-0"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <textarea
                  className="bg-[transparent] font-body-large-600 text-md [outline:none] self-stretch rounded flex flex-col items-start justify-start py-4 px-3 text-text-secondary border-[1px] border-solid border-other-outlined-border sm:text-sm"
                  placeholder="Leave Message"
                />
              </div>
              <button
                className="cursor-pointer py-[9px] px-5 bg-tomato rounded flex flex-row items-center justify-center border-[1px] border-solid border-nero"
                onClick={openDoneModalPopup}
              >
                <div className="relative text-lg leading-[150%] font-semibold sm:text-base">
                  Submit
                </div>
              </button>
            </form>
          </div>
          <div
            className="absolute left-[0] top-[-70px]"
            data-scroll-to="contactUsContainer"
          />
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

export default PartnershipPage;
