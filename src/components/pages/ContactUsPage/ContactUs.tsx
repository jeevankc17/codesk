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
        <div className="w-full max-w-[579px] flex flex-col items-center justify-center gap-3 text-left">
          <div className="text-black1 text-lg sm:text-base font-semibold text-center">
            Reach out
          </div>
          <div className="w-full rounded-xl bg-nero shadow-[0px_10px_26px_rgba(31,_149,_242,_0.16)] border border-gray-200 p-4 flex flex-col gap-3">
            <a
              href="mailto:codeskinnovations@gmail.com"
              className="w-full flex flex-row items-center justify-start gap-3 rounded-lg hover:bg-gray-50 p-2 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-main-blue/10 flex items-center justify-center shrink-0">
                <svg
                  className="w-5 h-5 text-main-blue"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M4 6.75C4 5.784 4.784 5 5.75 5H18.25C19.216 5 20 5.784 20 6.75V17.25C20 18.216 19.216 19 18.25 19H5.75C4.784 19 4 18.216 4 17.25V6.75Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  <path
                    d="M6 7.5L12 12.25L18 7.5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex-1 flex flex-col">
                <div className="text-sm font-semibold text-black1">Email</div>
                <div className="text-sm text-gray-600 break-all">codeskinnovations@gmail.com</div>
              </div>
            </a>

            <a
              href="https://wa.me/9779868296800"
              target="_blank"
              rel="noreferrer"
              className="w-full flex flex-row items-center justify-start gap-3 rounded-lg hover:bg-gray-50 p-2 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-[rgba(34,197,94,0.12)] flex items-center justify-center shrink-0">
                <svg
                  className="w-5 h-5 text-chateau-green"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M12 21a9 9 0 1 0-7.745-4.412L3.5 21l4.588-.755A8.96 8.96 0 0 0 12 21Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.2 8.8c-.25-.55-.52-.56-.76-.57-.2-.01-.43-.01-.66-.01-.23 0-.61.09-.92.43-.31.35-1.17 1.14-1.17 2.78 0 1.64 1.2 3.23 1.36 3.46.16.23 2.31 3.7 5.66 5.04 2.78 1.11 3.35.89 3.95.83.6-.06 1.94-.79 2.21-1.55.27-.76.27-1.41.19-1.55-.08-.14-.31-.23-.66-.4-.35-.17-2.08-1.02-2.4-1.14-.32-.12-.55-.17-.79.17-.23.35-.9 1.14-1.1 1.37-.2.23-.4.26-.75.09-.35-.17-1.47-.54-2.8-1.72-1.03-.92-1.72-2.05-1.93-2.4-.2-.35-.02-.54.15-.71.16-.16.35-.4.52-.6.17-.2.23-.35.35-.58.12-.23.06-.43-.03-.6-.09-.17-.79-1.93-1.08-2.58Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="flex-1 flex flex-col">
                <div className="text-sm font-semibold text-black1">WhatsApp</div>
                <div className="text-sm text-gray-600">+977 9868296800</div>
              </div>
            </a>
          </div>
        </div>

        <div className="w-full max-w-[579px] flex items-center justify-center">
          <img
            className="w-full h-auto object-contain max-w-[360px] sm:max-w-[240px]"
            alt=""
            src="/image71@2x.png"
          />
        </div>

        <div className="flex flex-col items-center justify-center gap-[15px] sm:gap-[10px]">
          <button
            className="cursor-pointer py-[9px] px-5 bg-aqua-deep rounded flex flex-row items-center justify-center border-[1px] border-solid border-nero sm:h-[35px]"
            onClick={onLogoClick}
          >
            <div className="relative text-lg leading-[150%] font-semibold font-body-large-600 text-nero text-center inline-block max-h-[58px] sm:text-base">
              Go Back To Home
            </div>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CommingSoonPage;
