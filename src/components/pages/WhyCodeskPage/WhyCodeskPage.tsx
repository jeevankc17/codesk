import { FunctionComponent, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../common/Navbar';
import Footer from '../../common/Footer';

const WhyCodeskPage: FunctionComponent = () => {
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
    <div className="w-full relative bg-nero flex flex-col items-center justify-start p-5 box-border gap-[20px] text-center text-sm text-black1 font-body-large-600 sm:pl-[5px] sm:pr-[5px] sm:box-border">
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
      <div className="self-stretch rounded-mini bg-footer-header flex flex-row items-center justify-between py-0 px-[15px] z-[4] text-left text-4xl text-nero lg:flex-col md:flex-col sm:pl-[5px] sm:pr-[5px] sm:box-border">
        <div className="flex-1 flex flex-col items-center justify-center p-[15px] gap-[34px] lg:flex-[unset] lg:self-stretch md:order-[2] md:flex-[unset] md:self-stretch">
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch relative leading-[120%] font-semibold sm:text-sm">{`Building the Nepal’s largest & most loved coding firm for kids & teenagers`}</div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start text-3xl md:text-xl sm:text-lg">
            <div className="self-stretch relative leading-[150%] text-sm">
              CoDeskLab started with a dream to inspire school kids to fall in
              love with coding and to empower every child to build anything they
              can imagine
            </div>
          </div>
        </div>
        <img
          className="flex-1 relative max-w-full overflow-hidden h-[516.2px] object-cover lg:order-[1] lg:flex-[unset] lg:self-stretch md:order-[1] md:flex-[unset] md:self-stretch sm:h-[300px]"
          alt=""
          src="/image-58@2x.png"
        />
      </div>
      <div className="self-stretch bg-nero flex flex-col items-center justify-center gap-[30px] z-[3] text-4xl sm:pl-[5px] sm:pr-[5px] sm:box-border">
        <div className="self-stretch bg-nero flex flex-col items-center justify-center py-0 px-[5px] gap-[5px]">
          <div className="self-stretch flex flex-row items-center justify-center p-2.5">
            <div className="flex-1 relative leading-[120%] font-semibold sm:text-3xl">
              Why kids and parents love CoDesk?
            </div>
          </div>
          <div className="self-stretch h-[41px]" />
        </div>
        <div className="self-stretch bg-nero flex flex-col items-start justify-start p-[15px] gap-[40px] text-sm sm:pl-[5px] sm:pr-[5px] sm:box-border">
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
                    <div className="flex-1 relative leading-[120%] font-semibold sm:text-2xl">
                      Curriculum
                    </div>
                  </div>
                  <div className="w-[525px] bg-nero hidden flex-row items-center justify-center p-2.5 box-border text-md text-darkslategray-100">
                    <div className="flex-1 relative leading-[22px] font-medium">
                      1
                    </div>
                  </div>
                </div>
                <div className="self-stretch bg-nero flex flex-row items-center justify-center py-2.5 px-[30px] text-lg">
                  <div className="flex-1 relative leading-[150%]">
                    Our unique curriculum is built on BIDE, STEAM, and Bloom's
                    taxonomy model for enhancing cognitive, logical and
                    computational skills. Combined with practical projects, it
                    makes learning not only informative but also fun for the
                    children!
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
                    <div className="flex-1 relative leading-[120%] font-semibold sm:text-2xl">
                      Teachers
                    </div>
                  </div>
                </div>
                <div className="self-stretch bg-nero flex flex-row items-center justify-center py-2.5 px-[30px] text-lg">
                  <div className="flex-1 relative leading-[150%]">
                    Our teachers are experts in computer science, backed with
                    years of industry and teaching experience, passionate about
                    teaching kids.
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
                src="/reason1svg1@2x.png"
              />
            </div>
            <div className="flex-1 flex flex-col items-center justify-center py-0 px-[70px] lg:flex-[unset] lg:self-stretch md:pl-2.5 md:pr-2.5 md:box-border md:flex-[unset] md:self-stretch">
              <div className="self-stretch flex flex-col items-start justify-start w-full">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5">
                    <div className="flex-1 relative leading-[120%] font-semibold sm:text-2xl">
                      Personalized Coding Journey
                    </div>
                  </div>
                </div>
                <div className="self-stretch bg-nero flex flex-row items-center justify-center py-2.5 px-[30px] text-lg">
                  <div className="flex-1 relative leading-[150%]">
                    Every child is unique and and so is their journey of
                    learning to code. We ensure that every child is clear with
                    each concept before moving on to the next, even if it means
                    providing an extra class.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch bg-nero flex flex-row items-center justify-between lg:flex-col md:flex-col">
            <div className="flex-1 flex flex-col items-center justify-center py-0 px-[50px] lg:order-[2] lg:flex-[unset] lg:self-stretch md:order-[2] md:flex-[unset] md:self-stretch">
              <div className="self-stretch flex flex-col items-start justify-start w-full">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5">
                    <div className="flex-1 relative leading-[120%] font-semibold sm:text-2xl">
                      Our values
                    </div>
                  </div>
                </div>
                <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5 text-lg">
                  <div className="flex-1 relative leading-[30px]">
                    Introducing children to coding and making them fall in love
                    with coding is our motto. We are not here to take them to
                    Mars or Moon, but help them build the skill of the 21st
                    century and hopefully empower them in their journey of life.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 bg-nero flex flex-row items-center justify-center p-2.5 lg:order-[1] lg:flex-[unset] lg:self-stretch md:order-[1] md:flex-[unset] md:self-stretch">
              <img
                className="w-[380px] relative h-[350px] overflow-hidden shrink-0"
                alt=""
                src="/reason3svg.svg"
              />
            </div>
          </div>
          <div className="self-stretch bg-nero flex flex-row items-center justify-between lg:flex-col md:flex-col">
            <div className="flex-1 bg-nero flex flex-row items-center justify-center p-2.5 lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch">
              <img
                className="w-[380px] relative h-[372px] overflow-hidden shrink-0"
                alt=""
                src="/reason4svg.svg"
              />
            </div>
            <div className="flex-1 flex flex-col items-center justify-center py-0 px-[70px] lg:flex-[unset] lg:self-stretch md:pl-2.5 md:pr-2.5 md:box-border md:flex-[unset] md:self-stretch">
              <div className="self-stretch flex flex-col items-start justify-start w-full">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5">
                    <div className="flex-1 relative leading-[120%] font-semibold sm:text-2xl">
                      Founding Team Experise
                    </div>
                  </div>
                </div>
                <div className="self-stretch bg-nero flex flex-row items-center justify-center py-2.5 px-[30px] text-lg">
                  <div className="flex-1 relative leading-[150%] whitespace-pre-wrap">
                    CoDesk’s founder are tutor and and also the system builder.
                    We understand what it takes to provide the right education
                    to your child.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] bg-nero flex flex-col items-start justify-start p-5 gap-[20px] z-[2] sm:pl-[5px] sm:pr-[5px] sm:box-border">
        <div className="self-stretch flex flex-col items-center justify-start">
          <div className="self-stretch relative leading-[120%] font-semibold sm:text-3xl">
            Why CoDesk offers more value for the price?
          </div>
          <div className="self-stretch relative text-lg leading-[150%]">
            <p className="m-0">
              Our courses are holistic and our curriculum is scientifically
              based. Our prices are
            </p>
            <p className="m-0">transparent and predictable.</p>
          </div>
        </div>
        <div className="self-stretch bg-nero flex flex-row flex-wrap items-center justify-center p-[15px] gap-[15px] text-2xl md:flex-row md:flex-wrap">
          <div className="shadow-[0px_10px_15px_-3px_rgba(0,_0,_0,_0.1),_0px_4px_6px_-2px_rgba(0,_0,_0,_0.05)] rounded-13xl bg-nero overflow-hidden flex flex-col items-center justify-start py-10 px-5 gap-[28px]">
            <img
              className="w-[100px] relative h-[88.2px] overflow-hidden shrink-0"
              alt=""
              src="/freecoursesvg.svg"
            />
            <div className="self-stretch flex flex-col items-center justify-start">
              <div className="self-stretch relative leading-[150%] font-semibold">
                Demo class as beginners
              </div>
            </div>
            <div className="w-[317.3px] flex flex-col items-center justify-start text-md">
              <div className="self-stretch relative leading-[150%]">
                At CoDesk, we offers the chance to take a demo class where your
                children learn the basics of coding and learn to create their
                own animations, apps or websites.
              </div>
            </div>
          </div>
          <div className="shadow-[0px_10px_15px_-3px_rgba(0,_0,_0,_0.1),_0px_4px_6px_-2px_rgba(0,_0,_0,_0.05)] rounded-13xl bg-nero overflow-hidden flex flex-col items-center justify-start py-10 px-5 gap-[28px]">
            <img
              className="w-[100px] relative h-[100px] overflow-hidden shrink-0"
              alt=""
              src="/customizedlearningsvg.svg"
            />
            <div className="self-stretch flex flex-col items-center justify-start">
              <div className="self-stretch relative leading-[150%] font-semibold">
                Customized Learning Journey
              </div>
            </div>
            <div className="w-[317.3px] flex flex-col items-center justify-start text-md">
              <div className="self-stretch relative leading-[150%]">
                At CoDesk, we believe that each child is unique and so should be
                their learning journey. We make sure that each child learns
                according to their own pace which makes sure they learn coding
                the right way.
              </div>
            </div>
          </div>
          <div className="shadow-[0px_10px_15px_-3px_rgba(0,_0,_0,_0.1),_0px_4px_6px_-2px_rgba(0,_0,_0,_0.05)] rounded-13xl bg-nero overflow-hidden flex flex-col items-center justify-start py-10 px-5 gap-[28px]">
            <img
              className="w-[93.3px] relative h-[100px] overflow-hidden shrink-0"
              alt=""
              src="/moneybackguaranteesvg.svg"
            />
            <div className="self-stretch flex flex-col items-center justify-start">
              <div className="self-stretch relative leading-[150%] font-semibold">
                Guaranteed money back
              </div>
            </div>
            <div className="w-[317.3px] flex flex-col items-center justify-start text-md">
              <div className="self-stretch relative leading-[150%]">
                At CoDesk, we put customer satisfaction first and so, we have a
                100% money back guarantee policy. If we do not meet your
                expectations you have the right to cancel your purchase and get
                your money back. It’s as simple as that.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] bg-nero flex flex-col items-start justify-start p-5 gap-[20px] z-[1] sm:pl-[5px] sm:pr-[5px] sm:box-border">
        <div className="self-stretch flex flex-col items-center justify-start pt-0 px-[58px] pb-[0.5px]">
          <div className="w-full relative leading-[120%] font-semibold inline-block max-w-[1128px] sm:text-3xl">
            Why children should learn to code?
          </div>
        </div>
        <div className="self-stretch bg-nero flex flex-row flex-wrap items-center justify-center p-[15px] gap-[15px] text-md md:flex-row md:flex-wrap">
          <div className="w-[350px] rounded-3xs bg-nero flex flex-col items-center justify-center p-5 box-border">
            <img
              className="w-[250px] relative h-[250px] overflow-hidden shrink-0 object-cover"
              alt=""
              src="/reason1png3@2x.png"
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
              src="/reason1png11@2x.png"
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
              src="/reason1png21@2x.png"
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

export default WhyCodeskPage;
