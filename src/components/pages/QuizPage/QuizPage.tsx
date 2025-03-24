import { FunctionComponent, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import QuizCards from './QuizCards';
import Navbar from '../../common/Navbar';
import Footer from '../../common/Footer';

const QuizPage: FunctionComponent = () => {
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
          quizzesColor="#FF5A43"
        />
        
        <header className="self-stretch rounded-[20px] bg-footer-header h-[500px] flex flex-row items-center justify-between py-0 px-[10px] box-border gap-[5px] z-[1] text-left text-4xl text-nero font-inter lg:flex-col lg:h-auto md:flex-col md:gap-[5px] md:p-2.5 md:box-border sm:gap-[5px] sm:p-[5px] sm:h-auto sm:min-h-[550px] sm:box-border">
          <div className="flex-1 flex flex-col items-center justify-center p-[10px] gap-[10px] lg:order-[2] lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch">
            <div className="self-stretch flex flex-col items-start justify-start sm:items-center">
              <div className="self-stretch relative leading-[120%] font-semibold text-3xl md:text-xl sm:text-lg sm:text-center">
                Coding Quizes for Kids
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start text-md sm:items-center">
              <div className="self-stretch relative leading-[150%] text-md sm:text-center">
                Fun way to learn coding for kids using quizzes. Great way to
                improve coding skills.
              </div>
            </div>
            <button
              className="cursor-pointer py-[9px] px-5 bg-tomato self-stretch rounded box-border h-[38px] flex flex-row items-center justify-center border-[1px] border-solid border-nero"
              autoFocus={true}
              onClick={onScrollBannerButtonClick}
            >
              <div className="relative text-lg leading-[150%] font-semibold font-body-large-600 text-nero text-center inline-block max-h-[58px]">
                View a Quizzes
              </div>
            </button>
          </div>
          <div className="flex-1 h-full flex items-center justify-center">
            <img
              className="w-full h-full object-cover object-center"
              alt=""
              src="/image-55@2x.png"
            />
          </div>
        </header>
        <div className="self-stretch bg-nero flex flex-col items-center justify-center gap-[30px] relative z-[1] text-center text-sm text-black1">
          <div className="self-stretch bg-nero flex flex-col items-center justify-center py-0 px-[5px] gap-[5px]">
            <div className="self-stretch flex flex-row items-center justify-center p-2.5">
              <div className="h-[38px] flex-1 relative leading-[120%] font-semibold inline-block text-3xl md:text-xl sm:text-lg">
                Coding quizzes for kids
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-center p-2.5 text-sm">
              <div className="flex-1 relative leading-[150%]">
                Great collection of fun and interactive coding quizzes for kids to
                assess and acquire computer science knowledge.
              </div>
            </div>
          </div>
          <QuizCards />
          <div
            className="absolute left-[0] top-[-70px]"
            data-scroll-to="quizzesContainer"
          />
        </div>
        <div className="h-[50px] w-full"></div>
        <Footer />
      </div>
    </>
  );
};

export default QuizPage;
