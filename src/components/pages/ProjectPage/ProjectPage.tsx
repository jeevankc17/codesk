import { FunctionComponent, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import ProjectCards from './ProjectCards';
import Navbar from '../../common/Navbar';
import Footer from '../../common/Footer';
const ProjectPage: FunctionComponent = () => {
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
      "[data-scroll-to='projectsContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="w-full relative bg-nero flex flex-col items-center justify-start p-5 box-border gap-[20px] text-left text-4xl text-nero font-body-large-600 sm:pl-[5px] sm:pr-[5px] sm:box-border">
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
              Projects By Kids
            </div>
            <div className="self-stretch relative leading-[150%] text-md sm:text-sm sm:text-center">
              Fun way to learn coding for kids by doing projects
            </div>
            <button
              className="cursor-pointer py-[9px] px-5 bg-tomato self-stretch rounded flex flex-row items-center justify-center border-[1px] border-solid border-nero sm:h-[35px]"
              onClick={() => navigate('/commingsoonpage')}
            >
              <div className="relative text-lg leading-[150%] font-semibold font-body-large-600 text-nero text-center inline-block max-h-[58px] sm:text-base">
                View Projects
              </div>
            </button>
          </div>
        </div>
        <div className="flex-1 h-full flex items-center justify-center">
          <img
            className="w-full h-full object-cover object-center"
            alt=""
            src="/image-57@2x.png"
          />
        </div>
      </header>
      <div className="self-stretch bg-nero flex flex-col items-center justify-center gap-[30px] relative z-[1] text-center text-4xl\ text-black1">
        <div className="self-stretch bg-nero flex flex-col items-center justify-center py-0 px-[5px] gap-[5px]">
          <div className="self-stretch flex flex-row items-center justify-center p-2.5">
            <div className="flex-1 relative leading-[120%] font-semibold sm:text-3xl">
              Projects By Kids
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-center p-2.5 text-sm">
            <div className="flex-1 relative leading-[150%]">
              Great collection of fun and interactive coding projects for kids
              to assess and acquire computer science knowledge.
            </div>
          </div>
        </div>
        <ProjectCards />
        <div
          className="absolute left-[0] top-[-70px]"
          data-scroll-to="projectsContainer"
        />
      </div>
      <Footer />
    </div>
  );
};

export default ProjectPage;
