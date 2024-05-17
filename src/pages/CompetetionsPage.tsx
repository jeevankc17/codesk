import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import CodewarTabs from "../components/CodewarTabs";
import Footer from "../components/Footer";

const CompetetionsPage: FunctionComponent = () => {
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

  const onScrollBannerButtonClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='stepsContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onTryAHackathonsButtonClick = useCallback(() => {
    navigate("/commingsoonpage");
  }, [navigate]);

  return (
    <div className="w-full relative bg-nero flex flex-col items-start justify-center p-5 box-border gap-[20px] text-center text-13xl text-black font-body-xl-600 sm:py-[30px] sm:px-[5px] sm:box-border">
      <Navbar
        logoColor="#1f95f2"
        onLogoClick={onLogoClick}
        onCoursesClick={onCoursesClick}
        onQuizzesClick={onQuizzesClick}
        onCompetetionsClick={onCompetetionsClick}
        onAboutUsClick={onAboutUsClick}
        coursesColor="#000"
        competetionsColor="#FF5A43"
        aboutUsColor="#000"
        quizzesColor="#000"
      />
      <CodewarTabs
        organizersTabBackgroundColor="#fff"
        onHackathonsTabClick={onHackathonsTabClick}
        onProjectsTabClick={onProjectsTabClick}
        onBuildersTabClick={onBuildersTabClick}
        onOrganizersTabContainerClick={onOrganizersTabContainerClick}
        buildersTabBackgroundColor="#fff"
        hackathonsTabBackgroundColor="#fff"
        projectsTabBackgroundColor="#fff"
      />
      <div className="self-stretch rounded-mini bg-footer-header flex flex-row items-center justify-between py-0 px-[15px] z-[4] text-left text-29xl text-nero lg:flex-col md:flex-col sm:pl-[5px] sm:pr-[5px] sm:box-border">
        <div className="flex-1 flex flex-col items-center justify-center p-[15px] gap-[34px] lg:order-[2] lg:flex-[unset] lg:self-stretch md:order-[2] md:flex-[unset] md:self-stretch">
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch relative leading-[120%] font-semibold sm:text-13xl">
              We care about organizor’s hackathons and builder’s projects
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start text-base">
            <div className="self-stretch relative leading-[150%]">
              <p className="m-0">
                No more creating Google Forms and managing participants in an
                Excel sheet.
              </p>
              <p className="m-0">
                You focus on your people, leave the rest to us.
              </p>
            </div>
          </div>
          <button
            className="cursor-pointer py-[9px] px-5 bg-tomato self-stretch rounded box-border h-[38px] flex flex-row items-center justify-center border-[1px] border-solid border-nero"
            autoFocus={true}
            onClick={onScrollBannerButtonClick}
          >
            <div className="relative text-lg leading-[150%] font-semibold font-body-xl-600 text-nero text-center inline-block max-h-[58px]">
              Our Four Pillars
            </div>
          </button>
        </div>
        <img
          className="flex-1 relative max-w-full overflow-hidden h-[516.2px] object-cover lg:order-[1] lg:flex-[unset] lg:self-stretch md:order-[1] md:flex-[unset] md:self-stretch sm:h-[300px]"
          alt=""
          src="/image-511@2x.png"
        />
      </div>
      <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] bg-nero flex flex-col items-center justify-center p-5 gap-[20px] relative z-[3] text-17xl sm:pl-[5px] sm:pr-[5px] sm:box-border">
        <div className="self-stretch bg-nero flex flex-col items-center justify-center gap-[30px]">
          <div className="self-stretch bg-nero flex flex-col items-center justify-center py-0 px-[5px]">
            <div className="self-stretch flex flex-row items-center justify-center p-2.5">
              <div className="flex-1 relative leading-[120%] font-semibold">
                CodeskLab is ..
              </div>
            </div>
          </div>
          <div className="self-stretch bg-nero flex flex-col items-start justify-start p-[15px] gap-[40px] text-left text-5xl text-aqua-deep">
            <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[40px] lg:flex-col md:flex-col">
              <img
                className="w-[500px] relative h-[500px] overflow-hidden shrink-0 object-cover md:w-[300px] md:h-[300px] sm:w-[300px] sm:h-[300px]"
                alt=""
                src="/featureshowcasebrowser89355ef99806d9f83a789939c3f0a482svg@2x.png"
              />
              <div className="flex-1 flex flex-col items-start justify-center py-8 px-0 lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch relative leading-[150%] font-semibold">
                      Number 1
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start text-29xl text-black">
                    <div className="self-stretch relative leading-[120%] font-semibold">
                      <p className="m-0">Your digital up-to-</p>
                      <p className="m-0">date resumé</p>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start text-lg text-black">
                  <div className="self-stretch relative leading-[150%]">
                    <p className="m-0">
                      Showcase to the world your skills, links to your social
                    </p>
                    <p className="m-0">
                      profile, where you have worked and what you have worked
                    </p>
                    <p className="m-0">on and the projects you have built.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[40px] text-right lg:flex-col md:flex-col">
              <div className="flex-1 flex flex-col items-end justify-center py-8 px-0 lg:order-[2] lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch relative leading-[150%] font-semibold">
                      Number 2
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start text-29xl text-black">
                    <div className="self-stretch relative leading-[120%] font-semibold">
                      <p className="m-0">A showcase of all your</p>
                      <p className="m-0">projects</p>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start text-lg text-black">
                  <div className="self-stretch relative leading-[150%]">
                    <p className="m-0">
                      Give your weekend projects, side projects, hobby projects,
                    </p>
                    <p className="m-0">
                      serious ventures a place to breathe, invite collaborators
                      and
                    </p>
                    <p className="m-0">inspire other builders.</p>
                  </div>
                </div>
              </div>
              <img
                className="w-[500px] relative h-[500px] overflow-hidden shrink-0 object-cover md:w-[300px] md:h-[300px] sm:w-[300px] sm:h-[300px]"
                alt=""
                src="/featureshowcasebrowser89355ef99806d9f83a789939c3f0a482svg1@2x.png"
              />
            </div>
            <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[40px] lg:flex-col md:flex-col">
              <img
                className="w-[500px] relative h-[500px] overflow-hidden shrink-0 object-cover md:w-[300px] md:h-[300px] sm:w-[300px] sm:h-[300px]"
                alt=""
                src="/featurehackathonbrowser5a044ca6908b6e62ac5be7426689d29bsvg@2x.png"
              />
              <div className="flex-1 flex flex-col items-start justify-center py-8 px-0 lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch relative leading-[150%] font-semibold">
                      Number 3
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start text-29xl text-black">
                    <div className="self-stretch relative leading-[120%] font-semibold">
                      <p className="m-0">Your portal to the best</p>
                      <p className="m-0">hackathons</p>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start text-lg text-black">
                  <div className="self-stretch relative leading-[150%]">
                    <p className="m-0">
                      Applying to hackathons on CoDeskLab is as simple as a
                      click of
                    </p>
                    <p className="m-0">
                      a button. We save all the required info so that you don’t
                    </p>
                    <p className="m-0">
                      have to fill them over and over again.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[40px] text-right lg:flex-col md:flex-col">
              <div className="flex-1 flex flex-col items-end justify-center py-8 px-0 lg:order-[2] lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch relative leading-[150%] font-semibold">
                      Number 4
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start text-29xl text-black">
                    <div className="self-stretch relative leading-[120%] font-semibold">
                      <p className="m-0">Your skill assessment</p>
                      <p className="m-0">playground</p>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start text-lg text-black">
                  <div className="self-stretch relative leading-[150%]">
                    <p className="m-0">
                      Take our quiz, earn a badge and see where you stand
                    </p>
                    <p className="m-0">among the rest of the builders.</p>
                  </div>
                </div>
              </div>
              <img
                className="w-[500px] relative h-[500px] overflow-hidden shrink-0 object-cover md:w-[300px] md:h-[300px] sm:w-[300px] sm:h-[300px]"
                alt=""
                src="/featureskillbrowser050977059a23d0d942236d6e8d48c6edsvg@2x.png"
              />
            </div>
          </div>
        </div>
        <section className="self-stretch bg-nero flex flex-row flex-wrap items-start justify-center p-[15px]">
          <button
            className="cursor-pointer py-[9px] px-5 bg-aqua-deep rounded flex flex-row items-center justify-center border-[1px] border-solid border-nero"
            autoFocus={true}
            onClick={onTryAHackathonsButtonClick}
          >
            <div className="relative text-lg leading-[150%] font-semibold font-body-xl-600 text-nero text-center inline-block max-h-[58px]">
              Try A Hackathons
            </div>
          </button>
        </section>
        <div
          className="absolute left-[0] top-[-140px]"
          data-scroll-to="stepsContainer"
        />
      </div>
      <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] bg-nero flex flex-col items-start justify-start p-5 gap-[20px] z-[2] sm:pl-[5px] sm:pr-[5px] sm:box-border">
        <div className="self-stretch flex flex-col items-center justify-start pt-0 px-[58px] pb-[0.5px]">
          <div className="w-full relative leading-[120%] font-semibold inline-block max-w-[1128px]">
            Why children should involved in hackathons?
          </div>
        </div>
        <div className="self-stretch bg-nero flex flex-row flex-wrap items-center justify-center p-[15px] gap-[15px] text-base md:flex-row md:flex-wrap">
          <div className="w-[350px] rounded-3xs bg-nero flex flex-col items-center justify-center p-5 box-border">
            <img
              className="w-[250px] relative h-[250px] overflow-hidden shrink-0 object-cover"
              alt=""
              src="/reason1png@2x.png"
            />
            <div className="self-stretch bg-nero flex flex-col items-center justify-center">
              <div className="self-stretch flex flex-col items-center justify-center py-4 px-0">
                <div className="self-stretch relative leading-[120%] font-semibold">
                  Skill Development
                </div>
              </div>
              <div className="self-stretch flex flex-col items-center justify-center text-sm">
                <div className="w-full relative leading-[150%] inline-block max-w-[448px]">
                  Hackathons offer children a chance to sharpen their coding
                  skills by tackling real-world problems. They get to apply
                  programming languages and techniques they've learned in a
                  practical setting, which deepens their understanding and
                  proficiency.
                </div>
              </div>
            </div>
          </div>
          <div className="w-[350px] rounded-3xs bg-nero flex flex-col items-center justify-center p-5 box-border">
            <img
              className="w-[250px] relative h-[250px] overflow-hidden shrink-0 object-cover"
              alt=""
              src="/reason1png1@2x.png"
            />
            <div className="self-stretch bg-nero flex flex-col items-center justify-center">
              <div className="self-stretch flex flex-col items-center justify-center py-4 px-0">
                <div className="self-stretch relative leading-[120%] font-semibold">
                  Innovation and Problem-Solving
                </div>
              </div>
              <div className="self-stretch flex flex-col items-center justify-center text-sm">
                <div className="w-full relative leading-[150%] inline-block max-w-[448px]">
                  Coding challenges in hackathons push children to think outside
                  the box and come up with creative solutions. They learn to
                  break down complex problems into manageable chunks and use
                  their coding knowledge to devise innovative approaches.
                </div>
              </div>
            </div>
          </div>
          <div className="w-[350px] rounded-3xs bg-nero flex flex-col items-center justify-center p-5 box-border">
            <img
              className="w-[250px] relative h-[250px] overflow-hidden shrink-0 object-cover"
              alt=""
              src="/reason1png2@2x.png"
            />
            <div className="self-stretch bg-nero flex flex-col items-center justify-center">
              <div className="self-stretch flex flex-col items-center justify-center py-4 px-0">
                <div className="self-stretch relative leading-[120%] font-semibold">
                  Teamwork in Code
                </div>
              </div>
              <div className="self-stretch flex flex-col items-center justify-center text-sm">
                <div className="w-full relative leading-[150%] inline-block max-w-[448px]">
                  Many hackathons encourage teamwork, where children collaborate
                  on coding projects. This teaches them how to work efficiently
                  in a team setting, manage version control systems like Git,
                  and leverage tools like GitHub for collaborative coding.
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
                  Building Confidence through Code:
                </div>
              </div>
              <div className="self-stretch flex flex-col items-center justify-center text-sm">
                <div className="w-full relative leading-[150%] inline-block max-w-[448px]">
                  Completing a coding project within the tight time frame of a
                  hackathon can be a major confidence booster for children.
                  Presenting their code to judges or peers also hones their
                  communication skills and gives them valuable feedback.
                </div>
              </div>
            </div>
          </div>
          <div className="w-[350px] rounded-3xs bg-nero flex flex-col items-center justify-center p-5 box-border">
            <img
              className="w-[250px] relative h-[250px] overflow-hidden shrink-0 object-cover"
              alt=""
              src="/reason1png7@2x.png"
            />
            <div className="self-stretch bg-nero flex flex-col items-center justify-center">
              <div className="self-stretch flex flex-col items-center justify-center py-4 px-0">
                <div className="self-stretch relative leading-[120%] font-semibold">
                  Networking in the Coding Community
                </div>
              </div>
              <div className="self-stretch flex flex-col items-center justify-center text-sm">
                <div className="w-full relative leading-[150%] inline-block max-w-[448px]">
                  Hackathons provide children with a platform to connect with
                  fellow coders, mentors, and professionals. This networking
                  opportunity exposes them to diverse perspectives, new coding
                  techniques, and potential future collaborators or mentors.
                </div>
              </div>
            </div>
          </div>
          <div className="w-[350px] rounded-3xs bg-nero flex flex-col items-center justify-center p-5 box-border">
            <img
              className="w-[250px] relative h-[250px] overflow-hidden shrink-0 object-cover"
              alt=""
              src="/reason1png1@2x.png"
            />
            <div className="self-stretch bg-nero flex flex-col items-center justify-center">
              <div className="self-stretch flex flex-col items-center justify-center py-4 px-0">
                <div className="self-stretch relative leading-[120%] font-semibold">
                  Real-World Coding Practices
                </div>
              </div>
              <div className="self-stretch flex flex-col items-center justify-center text-sm">
                <div className="w-full relative leading-[150%] inline-block max-w-[448px]">
                  Hackathons often require children to use industry-standard
                  coding tools and methodologies. This introduces them to
                  important coding practices like version control, agile
                  development, and testing, which are crucial for success in a
                  coding career.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] bg-nero flex flex-col items-start justify-start p-5 gap-[20px] z-[1] sm:pl-[5px] sm:pr-[5px] sm:box-border">
        <div className="self-stretch flex flex-col items-center justify-start">
          <div className="self-stretch relative leading-[120%] font-semibold">
            Eligibility criteria for Hackathons
          </div>
        </div>
        <div className="self-stretch bg-nero flex flex-row flex-wrap items-center justify-center p-[15px] gap-[15px] text-5xl md:flex-row md:flex-wrap">
          <div className="shadow-[0px_10px_15px_-3px_rgba(0,_0,_0,_0.1),_0px_4px_6px_-2px_rgba(0,_0,_0,_0.05)] rounded-13xl bg-nero overflow-hidden flex flex-col items-center justify-start py-10 px-5 gap-[28px]">
            <img
              className="w-[100px] relative h-[88.2px] overflow-hidden shrink-0"
              alt=""
              src="/freecoursesvg.svg"
            />
            <div className="w-[317.3px] flex flex-col items-center justify-start py-0 px-[31.5px] box-border">
              <div className="self-stretch relative leading-[150%] font-semibold">
                Age Restrictions
              </div>
            </div>
            <div className="w-[317.3px] flex flex-col items-center justify-start py-0 px-[20.6px] box-border text-sm">
              <div className="self-stretch relative leading-[150%]">
                Many hackathons have age restrictions to ensure that
                participants are within a certain demographic range. Some
                hackathons may be open to all ages, while others might target
                specific age groups, such as high school students, college
                students, or professionals. Organizers may also require parental
                consent for participants under a certain age.
              </div>
            </div>
          </div>
          <div className="shadow-[0px_10px_15px_-3px_rgba(0,_0,_0,_0.1),_0px_4px_6px_-2px_rgba(0,_0,_0,_0.05)] rounded-13xl bg-nero overflow-hidden flex flex-col items-center justify-start py-10 px-5 gap-[28px]">
            <img
              className="w-[100px] relative h-[100px] overflow-hidden shrink-0"
              alt=""
              src="/customizedlearningsvg1.svg"
            />
            <div className="w-[317.3px] flex flex-col items-center justify-start py-0 px-[31.5px] box-border">
              <div className="self-stretch relative leading-[150%] font-semibold">
                Skill Level
              </div>
            </div>
            <div className="w-[317.3px] flex flex-col items-center justify-start py-0 px-[20.6px] box-border text-sm">
              <div className="self-stretch relative leading-[150%]">
                Hackathons may specify a minimum skill level or prerequisite
                knowledge in coding or related fields. Some events are
                beginner-friendly and welcome participants with little to no
                coding experience, while others may require more advanced
                skills. Organizers often provide information about the required
                skill level in the event's description or registration
                materials.
              </div>
            </div>
          </div>
          <div className="shadow-[0px_10px_15px_-3px_rgba(0,_0,_0,_0.1),_0px_4px_6px_-2px_rgba(0,_0,_0,_0.05)] rounded-13xl bg-nero overflow-hidden flex flex-col items-center justify-start py-10 px-5 gap-[28px]">
            <img
              className="w-[93.3px] relative h-[100px] overflow-hidden shrink-0"
              alt=""
              src="/moneybackguaranteesvg.svg"
            />
            <div className="w-[317.3px] flex flex-col items-center justify-start py-0 px-[31.5px] box-border">
              <div className="self-stretch relative leading-[150%] font-semibold">
                Registration Requirements
              </div>
            </div>
            <div className="w-[317.3px] flex flex-col items-center justify-start py-0 px-[20.6px] box-border text-sm">
              <div className="self-stretch relative leading-[150%]">
                Participants typically need to register for a hackathon in
                advance, either individually or as part of a team. Registration
                requirements may include providing personal information, such as
                name, email address, and sometimes educational or professional
                background. In some cases, participants may need to submit a
                brief application or answer questions about their coding
                experience or project ideas.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CompetetionsPage;
