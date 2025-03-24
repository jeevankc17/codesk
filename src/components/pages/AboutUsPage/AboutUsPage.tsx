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
          aboutUsColor="#FF5A43"
          quizzesColor="#000"
        />
        
        <header className="self-stretch rounded-[20px] bg-footer-header h-[500px] flex flex-row items-center justify-between py-0 px-[10px] box-border gap-[5px] z-[1] text-left text-4xl text-nero font-inter lg:flex-col lg:h-auto md:flex-col md:gap-[5px] md:p-2.5 md:box-border sm:gap-[5px] sm:p-[5px] sm:h-auto sm:min-h-[550px] sm:box-border">
          <div className="w-[775px] flex flex-col items-start justify-start p-[10px] box-border gap-[10px] lg:order-[2] lg:w-full md:w-full sm:w-full sm:items-center">
            <div className="self-stretch flex flex-col items-start justify-start sm:items-center">
              <div className="self-stretch relative leading-[120%] font-semibold text-3xl md:text-xl sm:text-lg sm:text-center">
                {`Building the Nepal's number 1 & most loved coding school for kids & teenagers`}
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start text-base sm:items-center">
              <div className="self-stretch relative leading-[150%] text-md sm:text-center">
                CoDesk started with a dream to inspire school kids to fall in love with coding and to empower every child to build anything they can imagine
              </div>
            </div>
          </div>
          <div className="flex-1 h-full flex items-center justify-center">
            <img
              className="w-full h-full object-cover object-center"
              alt=""
              src="/image-53@2x.png"
            />
          </div>
        </header>
        
        <div className="max-w-[1240px] w-full flex flex-col items-center justify-center gap-[40px] z-[1] sm:gap-[20px]">
          <div className="self-stretch flex flex-col items-center justify-center py-4 px-3">
            <div className="self-stretch flex flex-row items-center justify-center">
              <div className="flex-1 relative leading-[120%] font-semibold text-3xl sm:text-2xl">
                Our Roadmap
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[40px] sm:gap-[20px] sm:px-2">
            {/* Modify the next line to adjust title font sizes consistently */}
            {[
              { date: "April 2022", title: "Conceptualization", src: "/reason5svg.svg" },
              { date: "October 2022", title: "Team Formation", src: "/partnersvg.svg" },
              { date: "January 2023", title: "Product Development Kickoff", src: "/devsvg.svg" },
              { date: "July 2023", title: "Beta Testing", src: "/partnersvg.svg" },
              { date: "October 2023", title: "User Feedback and Iteration", src: "/oct2020svg.svg" },
              { date: "April 2024", title: "Official Launch", src: "/clip-path-group2.svg" },
              { date: "July 2024", title: "User Acquisition and Onboarding", src: "/childhoodwonderpng1@2x.png" },
              { date: "January 2025", title: "Expansion and Partnerships", src: "/sep2021svg.svg" },
              { date: "April 2025", title: "Continuous Improvement and Innovation", src: "/childhoodwonderpng1@2x.png" },
              { date: "April 2026", title: "Scaling Operations", src: "/happysvg.svg" }
            ].map(({ date, title, src }, index) => (
              <div key={index} className="self-stretch bg-nero flex flex-row items-center justify-between lg:flex-col md:flex-col sm:gap-[20px]">
                {index % 2 === 0 ? (
                  <>
                    <div className="flex-1 bg-nero flex flex-row items-center justify-center p-2.5 lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch">
                      <img
                        className="w-[300px] relative h-[300px] overflow-hidden shrink-0"
                        alt=""
                        src={src}
                      />
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-center py-0 px-[70px] lg:flex-[unset] lg:self-stretch md:pl-2.5 md:pr-2.5 md:box-border sm:px-2">
                      <div className="self-stretch flex flex-col items-start justify-start w-full">
                        <div className="self-stretch flex flex-col items-start justify-start">
                          <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5">
                            <div className="h-[38px] flex-1 relative leading-[37.5px] font-semibold text-xl inline-block">
                              {title}
                            </div>
                          </div>
                          <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5 text-md">
                            <div className="flex-1 relative leading-[150%] text-black font-medium">
                              {date}
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch bg-nero flex flex-row items-center justify-center py-2.5 px-[30px] text-md">
                          <div className="flex-1 relative leading-[150%] text-black">
                            {title === "Conceptualization" && "Identified the need for CoDeskLab to streamline after-school program management and conducted market research for validation."}
                            {title === "Team Formation" && "Assembled a dedicated team passionate about education technology to develop CoDeskLab."}
                            {title === "Product Development Kickoff" && "Initiated development on CoDeskLab, focusing on core features and utilizing agile methodologies."}
                            {title === "Beta Testing" && "Launched a beta version of CoDeskLab, gathering feedback from users for iterative improvements."}
                            {title === "User Feedback and Iteration" && "Incorporated user feedback to enhance the CoDeskLab software, prioritizing user experience and functionality."}
                            {title === "Official Launch" && "Launched CoDeskLab officially, leveraging feedback from beta testing to ensure a robust product."}
                            {title === "User Acquisition and Onboarding" && "Executed targeted marketing campaigns to acquire new users and provided comprehensive onboarding support."}
                            {title === "Expansion and Partnerships" && "Explored opportunities for expansion and formed strategic partnerships to increase adoption."}
                            {title === "Continuous Improvement and Innovation" && "Committed to ongoing product development and innovation, staying ahead of the competition."}
                            {title === "Scaling Operations" && "Scaled operations and infrastructure to meet the increasing demand for CoDeskLab software, ensuring sustainability."}
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex-1 flex flex-col items-center justify-center py-0 px-[70px] lg:order-[2] lg:flex-[unset] lg:self-stretch md:pl-2.5 md:pr-2.5 md:box-border sm:px-2">
                      <div className="self-stretch flex flex-col items-start justify-start w-full">
                        <div className="self-stretch flex flex-col items-start justify-start">
                          <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5">
                            <div className="h-[38px] flex-1 relative leading-[37.5px] font-semibold text-xl inline-block">
                              {title}
                            </div>
                          </div>
                          <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5 text-md">
                            <div className="flex-1 relative leading-[150%] text-black font-medium">
                              {date}
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch bg-nero flex flex-row items-center justify-center py-2.5 px-[30px] text-md">
                          <div className="flex-1 relative leading-[150%] text-black">
                            {/* Same content as in the previous block */}
                            {title === "Conceptualization" && "Identified the need for CoDeskLab to streamline after-school program management and conducted market research for validation."}
                            {title === "Team Formation" && "Assembled a dedicated team passionate about education technology to develop CoDeskLab."}
                            {title === "Product Development Kickoff" && "Initiated development on CoDeskLab, focusing on core features and utilizing agile methodologies."}
                            {title === "Beta Testing" && "Launched a beta version of CoDeskLab, gathering feedback from users for iterative improvements."}
                            {title === "User Feedback and Iteration" && "Incorporated user feedback to enhance the CoDeskLab software, prioritizing user experience and functionality."}
                            {title === "Official Launch" && "Launched CoDeskLab officially, leveraging feedback from beta testing to ensure a robust product."}
                            {title === "User Acquisition and Onboarding" && "Executed targeted marketing campaigns to acquire new users and provided comprehensive onboarding support."}
                            {title === "Expansion and Partnerships" && "Explored opportunities for expansion and formed strategic partnerships to increase adoption."}
                            {title === "Continuous Improvement and Innovation" && "Committed to ongoing product development and innovation, staying ahead of the competition."}
                            {title === "Scaling Operations" && "Scaled operations and infrastructure to meet the increasing demand for CoDeskLab software, ensuring sustainability."}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 bg-nero flex flex-row items-center justify-center p-2.5 lg:order-[1] lg:flex-[unset] lg:self-stretch md:order-[1] md:flex-[unset] md:self-stretch">
                      <img
                        className="w-[300px] relative h-[300px] overflow-hidden shrink-0"
                        alt=""
                        src={src}
                      />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUsPage;