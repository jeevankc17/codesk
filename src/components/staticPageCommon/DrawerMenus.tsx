import { FunctionComponent, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export type DrawerMenusType = {
  className?: string;
  onClose?: () => void;
};

const DrawerMenus: FunctionComponent<DrawerMenusType> = ({
  className = "",
  onClose,
}) => {
  const navigate = useNavigate();
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onMenuItemClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onMenuItemClick1 = useCallback(() => {
    navigate("/aboutuspage");
  }, [navigate]);

  const onMenuItemClick2 = useCallback(() => {
    navigate("/coursepage");
  }, [navigate]);

  const onMenuItemClick3 = useCallback(() => {
    navigate("/partnershippage");
  }, [navigate]);

  const onMenuItemClick4 = useCallback(() => {
    navigate("/quizpage");
  }, [navigate]);

  const onMenuItemClick5 = useCallback(() => {
    navigate("/competetionspage");
  }, [navigate]);

  const onMenuItemClick6 = useCallback(() => {
    navigate("/worksheetpage");
  }, [navigate]);

  const onMenuItemClick7 = useCallback(() => {
    navigate("/blogpage");
  }, [navigate]);

  const onMenuItemClick8 = useCallback(() => {
    navigate("/projectpage");
  }, [navigate]);

  const onMenuItemClick9 = useCallback(() => {
    navigate("/whycodeskpage");
  }, [navigate]);

  const onMenuItemClick10 = useCallback(() => {
    navigate("/applyteacherpage");
  }, [navigate]);

  const onMenuItemClick11 = useCallback(() => {
    navigate("/commingsoonpage");
  }, [navigate]);

  return (
    <div
      className={`w-80 relative bg-nero flex flex-col items-start justify-start py-5 px-[30px] box-border gap-[138px] [&.animate]:animate-[0.25s_ease_0s_1_normal_forwards_slide-in-left] opacity-[0] h-full max-w-[90%] overflow-auto text-left text-xs text-lightslategray font-components-chip ${className}`}
      data-animate-on-scroll
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
        <div className="flex flex-row items-center justify-start gap-[12px]">
          <div className="flex flex-row items-start justify-start">
            <img
              className="w-[49px] relative h-[49px] object-cover"
              alt=""
              src="/group3@2x.png"
            />
          </div>
          <div className="flex flex-col items-start justify-start">
            <div className="relative leading-[18px]">Hello</div>
            <b className="relative text-xl leading-[30px] text-black">
              CoDeskLab
            </b>
          </div>
        </div>
        <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-aliceblue" />
        <div className="flex flex-col items-start justify-start gap-[28px]">
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-row items-start justify-start gap-[16px]"
            onClick={onMenuItemClick}
          >
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0"
              alt=""
              src="/houseline.svg"
            />
            <div className="relative text-base leading-[24px] font-medium font-components-chip text-black1 text-left">
              Home
            </div>
          </button>
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-row items-start justify-start gap-[16px]"
            onClick={onMenuItemClick1}
          >
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0"
              alt=""
              src="/info.svg"
            />
            <div className="relative text-base leading-[24px] font-medium font-components-chip text-black1 text-left">
              About Us
            </div>
          </button>
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-row items-start justify-start gap-[16px]"
            onClick={onMenuItemClick2}
          >
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0"
              alt=""
              src="/video.svg"
            />
            <div className="relative text-base leading-[24px] font-medium font-components-chip text-black1 text-left">
              Courses
            </div>
          </button>
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-row items-start justify-start gap-[16px]"
            onClick={onMenuItemClick3}
          >
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0"
              alt=""
              src="/book--undefined--glyph-undefined1.svg"
            />
            <div className="relative text-base leading-[24px] font-medium font-components-chip text-black1 text-left">
              School Partnerships
            </div>
          </button>
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-row items-start justify-start gap-[16px]"
            onClick={onMenuItemClick4}
          >
            <img
              className="w-6 relative h-[19.5px]"
              alt=""
              src="/vector11.svg"
            />
            <div className="relative text-base leading-[24px] font-medium font-components-chip text-black1 text-left">
              Quizzes
            </div>
          </button>
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-row items-start justify-start gap-[16px]"
            onClick={onMenuItemClick5}
          >
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0"
              alt=""
              src="/flagbannerfold.svg"
            />
            <div className="relative text-base leading-[24px] font-medium font-components-chip text-black1 text-left">
              Competetion
            </div>
          </button>
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-row items-start justify-start gap-[16px]"
            onClick={onMenuItemClick6}
          >
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0"
              alt=""
              src="/bookopentext1.svg"
            />
            <div className="relative text-base leading-[24px] font-medium font-components-chip text-black1 text-left">
              Worksheets
            </div>
          </button>
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-row items-start justify-start gap-[16px]"
            onClick={onMenuItemClick7}
          >
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0"
              alt=""
              src="/bookopentext1.svg"
            />
            <div className="relative text-base leading-[24px] font-medium font-components-chip text-black1 text-left">
              Blogs
            </div>
          </button>
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-row items-start justify-start gap-[16px]"
            onClick={onMenuItemClick8}
          >
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0"
              alt=""
              src="/celltower1.svg"
            />
            <div className="relative text-base leading-[24px] font-medium font-components-chip text-black1 text-left">
              Projects
            </div>
          </button>
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-row items-center justify-start gap-[16px]"
            onClick={onMenuItemClick9}
          >
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0"
              alt=""
              src="/question1.svg"
            />
            <div className="relative text-base leading-[24px] font-medium font-components-chip text-black1 text-left">
              Why CoDesk?
            </div>
          </button>
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-row items-center justify-start gap-[16px]"
            onClick={onMenuItemClick10}
          >
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0"
              alt=""
              src="/chalkboardteacher1.svg"
            />
            <div className="relative text-base leading-[24px] font-medium font-components-chip text-black1 text-left">
              Careers
            </div>
          </button>
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-row items-center justify-start gap-[16px]"
            onClick={onMenuItemClick11}
          >
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0"
              alt=""
              src="/lockkeyopen.svg"
            />
            <div className="relative text-base leading-[24px] font-medium font-components-chip text-black1 text-left">
              Login
            </div>
          </button>
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-row items-start justify-start gap-[16px]"
            onClick={onMenuItemClick11}
          >
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0"
              alt=""
              src="/cashregister.svg"
            />
            <div className="relative text-base leading-[24px] font-medium font-components-chip text-black1 text-left">
              Register
            </div>
          </button>
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-row items-start justify-start gap-[16px]"
            onClick={onMenuItemClick11}
          >
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0"
              alt=""
              src="/userswitch.svg"
            />
            <div className="relative text-base leading-[24px] font-medium font-components-chip text-black1 text-left">
              Instructor Login
            </div>
          </button>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start text-sm">
        <div className="relative leading-[24px]">Version 1.0.0</div>
      </div>
    </div>
  );
};

export default DrawerMenus;
