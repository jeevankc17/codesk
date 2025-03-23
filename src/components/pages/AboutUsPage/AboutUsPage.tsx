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
    <div className="w-full relative bg-nero flex flex-col items-center justify-start p-5 box-border gap-[20px] text-center text-sm text-aqua-deep font-body-large-600 sm:p-2">
      <div className="fixed top-0 left-0 right-0 z-[100] bg-nero">
        <div className="px-5 sm:px-2">
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
        </div>
      </div>
      <div className="h-[77px]"></div>

      <div className="max-w-[1240px] w-full rounded-mini bg-footer-header flex flex-row items-center justify-between py-8 px-[30px] z-[5] text-left text-4xl text-nero lg:flex-col md:flex-col sm:px-3 sm:py-4">
        <div className="flex-1 flex flex-col items-center justify-center p-[15px] gap-[34px] lg:order-[2] lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch sm:p-3 sm:gap-4">
          <div className="self-stretch flex flex-col items-start justify-start sm:items-center">
            <div className="self-stretch relative leading-[120%] font-semibold sm:text-xl sm:text-center">
              {`Building the Nepal's number 1 & most loved coding school for kids & teenagers`}
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start text-md sm:text-sm sm:items-center">
            <div className="self-stretch relative leading-[150%] sm:text-center">
              <p className="m-0">CoDesk started with a dream to inspire school kids to fall in love with coding and to empower every child to build anything they can imagine</p>
            </div>
          </div>
        </div>
        <img
          className="flex-1 relative max-w-full overflow-hidden h-[500px] object-cover lg:order-[1] lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch sm:h-[200px] sm:w-full"
          alt=""
          src="/image-53@2x.png"
        />
      </div>
      
      <div className="max-w-[1240px] w-full flex flex-col items-center justify-center gap-[40px] z-[1] sm:gap-[20px]">
        <div className="self-stretch flex flex-col items-center justify-center py-4 px-3">
          <div className="self-stretch flex flex-row items-center justify-center">
            <div className="flex-1 relative leading-[120%] font-semibold text-3xl sm:text-2xl">
              Our Roadmap
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[40px] sm:gap-[20px] sm:px-2">
          <div className="self-stretch bg-nero flex flex-row items-center justify-between lg:flex-col md:flex-col sm:gap-[15px]">
            <div className="flex-1 flex flex-col items-center justify-center py-0 px-[50px] lg:order-[2] lg:flex-[unset] lg:self-stretch md:pl-2.5 md:pr-2.5 md:box-border sm:px-3">
              <div className="self-stretch flex flex-col items-start justify-start w-full sm:items-center">
                <div className="self-stretch flex flex-col items-start justify-start sm:items-center">
                  <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5">
                    <div className="flex-1 relative leading-[37.5px] font-semibold text-2xl sm:text-lg sm:leading-[28px] sm:text-center">
                      Conceptualization
                    </div>
                  </div>
                  <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5 text-md">
                    <div className="flex-1 relative leading-[150%] text-black sm:text-sm sm:text-center">
                      (April 2022)
                    </div>
                  </div>
                </div>
                <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5 text-md">
                  <div className="flex-1 relative leading-[150%] text-black sm:text-sm sm:text-center">
                    Identified the need for CoDeskLab to streamline after-school
                    program management and conducted market research for
                    validation.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 bg-nero flex flex-row items-center justify-center p-2.5 lg:order-[1] lg:flex-[unset] lg:self-stretch md:order-[1] md:flex-[unset] md:self-stretch sm:p-0">
              <img
                className="w-[300px] relative h-[300px] overflow-hidden shrink-0 sm:w-full sm:h-[200px]"
                alt=""
                src="/reason5svg.svg"
              />
            </div>
          </div>
          <div className="self-stretch bg-nero flex flex-row items-center justify-between font-body-large-600 lg:flex-col md:flex-col sm:gap-[20px]">
            <div className="flex-1 flex flex-col items-center justify-center py-0 px-[70px] lg:order-[2] lg:flex-[unset] lg:self-stretch md:pl-2.5 md:pr-2.5 md:box-border sm:px-2">
              <div className="self-stretch flex flex-col items-start justify-start w-full">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5">
                    <div className="h-[38px] flex-1 relative leading-[37.5px] font-semibold inline-block">
                      Team Formation
                    </div>
                  </div>
                  <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5 text-md">
                    <div className="flex-1 relative leading-[150%] text-black sm:text-sm sm:text-center">
                      (October 2022)
                    </div>
                  </div>
                </div>
                <div className="self-stretch bg-nero flex flex-row items-center justify-center py-2.5 px-[30px] text-md">
                  <div className="flex-1 relative leading-[150%] text-black sm:text-sm sm:text-center">
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
          <div className="self-stretch bg-nero flex flex-row items-center justify-between lg:flex-col md:flex-col sm:gap-[20px]">
            <div className="flex-1 bg-nero flex flex-row items-center justify-center p-2.5 lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch">
              <img
                className="w-[300px] relative h-[300px] overflow-hidden shrink-0"
                alt=""
                src="/devsvg.svg"
              />
            </div>
            <div className="flex-1 flex flex-col items-center justify-center py-0 px-[70px] lg:flex-[unset] lg:self-stretch md:pl-2.5 md:pr-2.5 md:box-border sm:px-2">
              <div className="self-stretch flex flex-col items-start justify-start w-full">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5">
                    <div className="h-10 flex-1 relative tracking-[-0.01em] leading-[40px] font-semibold inline-block">
                      Product Development Kickoff
                    </div>
                  </div>
                  <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5 text-md font-body-large-600">
                    <div className="flex-1 relative leading-[150%] text-black font-medium">
                      (January 2023)
                    </div>
                  </div>
                </div>
                <div className="self-stretch bg-nero flex flex-row items-center justify-center py-2.5 px-[30px] text-md font-body-large-600">
                  <div className="flex-1 relative leading-[150%] text-black">
                    Initiated development on CoDeskLab, focusing on core
                    features and utilizing agile methodologies.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch bg-nero flex flex-row items-center justify-between font-body-large-600 lg:flex-col md:flex-col sm:gap-[20px]">
            <div className="flex-1 flex flex-col items-center justify-center py-0 px-[50px] lg:order-[2] lg:flex-[unset] lg:self-stretch md:pl-2.5 md:pr-2.5 md:box-border sm:px-2">
              <div className="self-stretch flex flex-col items-start justify-start w-full">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5">
                    <div className="h-[38px] flex-1 relative leading-[37.5px] font-semibold inline-block">
                      Beta Testing
                    </div>
                  </div>
                  <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5 text-md">
                    <div className="flex-1 relative leading-[150%] text-black font-medium">
                      (July 2023)
                    </div>
                  </div>
                </div>
                <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5 text-md">
                  <div className="flex-1 relative leading-[150%] text-black">
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
          <div className="self-stretch bg-nero flex flex-row items-center justify-between lg:flex-col md:flex-col sm:gap-[20px]">
            <div className="flex-1 bg-nero flex flex-row items-center justify-center p-2.5 lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch">
              <img
                className="w-[300px] relative h-[300px] overflow-hidden shrink-0"
                alt=""
                src="/oct2020svg.svg"
              />
            </div>
            <div className="flex-1 flex flex-col items-center justify-center py-0 px-[70px] lg:flex-[unset] lg:self-stretch md:pl-2.5 md:pr-2.5 md:box-border sm:px-2">
              <div className="self-stretch flex flex-col items-start justify-start w-full">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5">
                    <div className="h-10 flex-1 relative tracking-[-0.01em] leading-[40px] font-semibold inline-block">
                      User Feedback and Iteration
                    </div>
                  </div>
                  <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5 text-md font-body-large-600">
                    <div className="flex-1 relative leading-[150%] text-black font-medium">
                      (October 2023)
                    </div>
                  </div>
                </div>
                <div className="self-stretch bg-nero flex flex-row items-center justify-center py-2.5 px-[30px] text-md font-body-large-600">
                  <div className="flex-1 relative leading-[150%] text-black">
                    Incorporated user feedback to enhance the CoDeskLab
                    software, prioritizing user experience and functionality.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch bg-nero flex flex-row items-center justify-between font-body-large-600 lg:flex-col md:flex-col sm:gap-[20px]">
            <div className="flex-1 flex flex-col items-center justify-center py-0 px-[50px] lg:order-[2] lg:flex-[unset] lg:self-stretch md:pl-2.5 md:pr-2.5 md:box-border sm:px-2">
              <div className="self-stretch flex flex-col items-start justify-start w-full">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5">
                    <div className="h-[38px] flex-1 relative leading-[37.5px] font-semibold inline-block">
                      Official Launch
                    </div>
                  </div>
                  <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5 text-md">
                    <div className="flex-1 relative leading-[150%] text-black font-medium">
                      (April 2024)
                    </div>
                  </div>
                </div>
                <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5 text-md">
                  <div className="flex-1 relative leading-[150%] text-black">
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
          <div className="self-stretch bg-nero flex flex-row items-center justify-between lg:flex-col md:flex-col sm:gap-[20px]">
            <div className="flex-1 bg-nero flex flex-row items-center justify-center p-2.5 lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch">
              <img
                className="w-[300px] h-[300px] overflow-hidden shrink-0 object-cover"
                alt=""
                src="/childhoodwonderpng1@2x.png"
              />
            </div>
            <div className="flex-1 flex flex-col items-center justify-center py-0 px-[70px] lg:flex-[unset] lg:self-stretch md:pl-2.5 md:pr-2.5 md:box-border sm:px-2">
              <div className="self-stretch flex flex-col items-start justify-start w-full">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5">
                    <div className="h-20 flex-1 relative tracking-[-0.01em] leading-[40px] font-semibold inline-block">
                      User Acquisition and Onboarding
                    </div>
                  </div>
                  <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5 text-md font-body-large-600">
                    <div className="flex-1 relative leading-[150%] text-black font-medium">
                      (July 2024)
                    </div>
                  </div>
                </div>
                <div className="self-stretch bg-nero flex flex-row items-center justify-center py-2.5 px-[30px] text-md font-body-large-600">
                  <div className="flex-1 relative leading-[150%] text-black">
                    Executed targeted marketing campaigns to acquire new users
                    and provided comprehensive onboarding support.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch bg-nero flex flex-row items-center justify-between lg:flex-col md:flex-col sm:gap-[20px]">
            <div className="flex-1 flex flex-col items-center justify-center py-0 px-[50px] lg:order-[2] lg:flex-[unset] lg:self-stretch md:pl-2.5 md:pr-2.5 md:box-border sm:px-2">
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
                  <div className="flex-1 relative leading-[150%] text-black">
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
          <div className="self-stretch bg-nero flex flex-row items-center justify-between lg:flex-col md:flex-col sm:gap-[20px]">
            <div className="flex-1 bg-nero flex flex-row items-center justify-center p-2.5 lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch">
              <img
                className="w-[300px] h-[300px] overflow-hidden shrink-0 object-cover"
                alt=""
                src="/childhoodwonderpng1@2x.png"
              />
            </div>
            <div className="flex-1 flex flex-col items-center justify-center py-0 px-[70px] lg:flex-[unset] lg:self-stretch md:pl-2.5 md:pr-2.5 md:box-border sm:px-2">
              <div className="self-stretch flex flex-col items-start justify-start w-full">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5">
                    <div className="h-20 flex-1 relative tracking-[-0.01em] leading-[40px] font-semibold inline-block">
                      Continuous Improvement and Innovation
                    </div>
                  </div>
                  <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5 text-md font-body-large-600">
                    <div className="flex-1 relative leading-[150%] text-black font-medium">
                      (April 2025)
                    </div>
                  </div>
                </div>
                <div className="self-stretch bg-nero flex flex-row items-center justify-center py-2.5 px-[30px] text-md font-body-large-600">
                  <div className="flex-1 relative leading-[150%] text-black">
                    Committed to ongoing product development and innovation,
                    staying ahead of the competition.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch bg-nero flex flex-row items-center justify-between lg:flex-col md:flex-col sm:gap-[20px]">
            <div className="flex-1 flex flex-col items-center justify-center py-0 px-[50px] lg:order-[2] lg:flex-[unset] lg:self-stretch md:pl-2.5 md:pr-2.5 md:box-border sm:px-2">
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
                  <div className="flex-1 relative leading-[150%] text-black">
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