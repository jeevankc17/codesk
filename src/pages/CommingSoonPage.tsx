import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CommingSoonPage: FunctionComponent = () => {
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

  const onHomeButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="w-full relative bg-nero flex flex-col items-center justify-start p-5 box-border gap-[20px] text-left text-lg text-primary-500 font-body-large-600 sm:pl-[5px] sm:pr-[5px] sm:box-border">
      <Navbar
        coDeskLabColor="#1f95f2"
        onLogoClick={onLogoClick}
        onCoursesClick={onCoursesClick}
        onQuizzesClick={onQuizzesClick}
        onCompetetionsClick={onCompetetionsClick}
        onAboutUsClick={onAboutUsClick}
        competetionsColor="#000"
        coursesColor="#000"
        aboutUsColor="#000"
        quizzesColor="#000"
      />
      <div className="self-stretch bg-nero flex flex-row items-center justify-between py-0 px-[15px] z-[1] md:flex-col sm:pl-[5px] sm:pr-[5px] sm:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[40px] md:flex-[unset] md:self-stretch">
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
            <div className="self-stretch relative leading-[150%] font-semibold">
              COMING SOON
            </div>
            <div className="self-stretch relative text-29xl leading-[120%] font-semibold text-gray-900 sm:text-13xl">
              There is no record on our Database currently, we are going to
              launch our feature very soon. Stay tune
            </div>
          </div>
          <button
            className="cursor-pointer py-[9px] px-5 bg-aqua-deep rounded flex flex-row items-center justify-center border-[1px] border-solid border-nero"
            onClick={onHomeButtonClick}
          >
            <div className="relative text-lg leading-[150%] font-semibold font-body-large-600 text-nero text-center inline-block max-h-[58px]">
              Go Back To Home
            </div>
          </button>
        </div>
        <div className="w-[579px] flex flex-row items-center justify-center">
          <img
            className="w-[579px] relative h-[604px] object-cover"
            alt=""
            src="/image7@2x.png"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CommingSoonPage;
