import { FunctionComponent, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../common/Navbar';
import Footer from '../../common/Footer';

const CommingSoonPage: FunctionComponent = () => {
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
    <div className="w-full relative bg-nero flex flex-col items-center justify-start p-5 box-border gap-[20px] text-left text-4xl text-nero font-body-large-600 sm:pl-[5px] sm:pr-[5px] sm:box-border">
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

      <div className="max-w-[1240px] w-full flex flex-col items-center justify-center gap-[30px] py-10 px-5 text-center sm:px-2">
        <div className="flex flex-col items-center justify-center gap-[15px] sm:gap-[10px]">
          <div className="relative leading-[120%] font-semibold text-4xl sm:text-2xl">
            Coming Soon
          </div>
          <div className="relative leading-[150%] text-lg sm:text-base">
            We are working hard to bring you something amazing. Stay tuned!
          </div>
          <button
            className="cursor-pointer py-[9px] px-5 bg-aqua-deep rounded flex flex-row items-center justify-center border-[1px] border-solid border-nero sm:h-[35px]"
            onClick={onLogoClick}
          >
            <div className="relative text-lg leading-[150%] font-semibold font-body-large-600 text-nero text-center inline-block max-h-[58px] sm:text-base">
              Go Back To Home
            </div>
          </button>
        </div>
        <div className="w-full max-w-[579px] flex items-center justify-center">
          <img
            className="w-full h-auto object-contain sm:max-w-[300px]"
            alt=""
            src="/image71@2x.png"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CommingSoonPage;
