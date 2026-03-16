import React from 'react';
import { FunctionComponent, useState, useCallback, useRef } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Icon,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../common/Navbar';
import Footer from '../../common/Footer';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const HomePage: FunctionComponent = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const navigate = useNavigate();

  const floatingStyles = (
    <style>{`
      @keyframes heroFloatY {
        0% { transform: translate3d(0,0,0); }
        50% { transform: translate3d(0,-10px,0); }
        100% { transform: translate3d(0,0,0); }
      }
      @keyframes heroFloatY2 {
        0% { transform: translate3d(0,0,0); }
        50% { transform: translate3d(0,-14px,0); }
        100% { transform: translate3d(0,0,0); }
      }
      @keyframes heroFloatY {
        0% { transform: translate3d(0,0,0); }
        50% { transform: translate3d(0,-10px,0); }
        100% { transform: translate3d(0,0,0); }
      }
      @keyframes heroFloatY2 {
        0% { transform: translate3d(0,0,0); }
        50% { transform: translate3d(0,-14px,0); }
        100% { transform: translate3d(0,0,0); }
      }
      @keyframes curveFloat1 {
        0% { transform: translate3d(0,0,0) rotate(0deg); }
        50% { transform: translate3d(-8px,-12px,0) rotate(2deg); }
        100% { transform: translate3d(0,0,0) rotate(0deg); }
      }
      @keyframes curveFloat2 {
        0% { transform: translate3d(0,0,0) rotate(0deg); }
        50% { transform: translate3d(10px,-8px,0) rotate(-1deg); }
        100% { transform: translate3d(0,0,0) rotate(0deg); }
      }
      @keyframes pulseScale {
        0%, 100% { transform: scale(1); opacity: 0.8; }
        50% { transform: scale(1.05); opacity: 1; }
      }
      @media (prefers-reduced-motion: reduce) {
        .hero-float-1, .hero-float-2, .curve-float-1, .curve-float-2, .pulse-node { animation: none !important; }
      }
      .hero-float-1 { animation: heroFloatY 6s ease-in-out infinite; will-change: transform; }
      .hero-float-2 { animation: heroFloatY2 7.5s ease-in-out infinite; will-change: transform; }
      .curve-float-1 { animation: curveFloat1 8s ease-in-out infinite; will-change: transform; }
      .curve-float-2 { animation: curveFloat2 9s ease-in-out infinite; will-change: transform; }
      .pulse-node { animation: pulseScale 3s ease-in-out infinite; will-change: transform; }
    `}</style>
  );

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

  const onTryAFreeClassButtonClick = useCallback(() => {
    navigate('/commingsoonpage');
  }, [navigate]);

  const onShowReviewsButtonClick = useCallback(() => {
    navigate('/reviewpage');
  }, [navigate]);

  const onViewProjectButtonClick = useCallback(() => {
    window.open('https://scratch.mit.edu/projects/839019799/');
  }, []);

  const onViewProjectButtonClick1 = useCallback(() => {
    window.open('https://scratch.mit.edu/projects/2232652/');
  }, []);

  const onJoinChallengesButtonClick = useCallback(() => {
    window.open('https://scratch.mit.edu/projects/16853582/');
  }, []);

  const onSeeMoreProjectsButtonClick = useCallback(() => {
    navigate('/competetions/projects');
  }, [navigate]);

  const onAskYOurDoubtButtonClick = useCallback(() => {
    window.open('https://www.facebook.com/codeskinnovations');
  }, []);

  const onSupportUsButtonClick = useCallback(() => {
    window.location.href = 'mailto:jkc5186@gmail.com?subject=For support ';
  }, []);

  const faqs = [
    {
      q: 'What is codeskinnovations?',
      a: 'codeskinnovations is an interactive online platform designed to teach programming in a practical and engaging way. It offers courses tailored for different skill levels.',
    },
    {
      q: 'Why should you learn to code?',
      a: 'Learning to code improves logical thinking, problem-solving, and communication skills. It also gives you a competitive advantage for internships and jobs. Programming is a modern literacy—one that helps you understand and build the technologies you use.',
    },
    {
      q: "I'm a beginner — is previous coding experience required?",
      a: 'No. The courses are designed so a complete beginner can follow along. You can start from fundamentals and move toward building real projects.',
    },
    {
      q: 'Who is codeskinnovations for?',
      a: 'codeskinnovations is built for students, self-learners, and professionals who want to build practical skills and ship real projects.',
    },
    {
      q: 'How are the courses structured?',
      a: 'Courses are divided into modules and lessons, focused on core concepts and project work. The curriculum is designed for smooth progression, with hands-on exercises to reinforce learning.',
    },
    {
      q: 'Do you provide progress tracking?',
      a: 'Yes. You get progress tracking and monitoring features to set goals and stay consistent while learning.',
    },
    {
      q: 'Is there technical support available?',
      a: 'Yes. You can reach out to the support team via email or through the online help center for help with platform issues.',
    },
  ];

  const cardData = [
    {
      icon: '/homepage/appstorelogo.svg',
      number: '15+',
      title: 'Coding stacks',
    },
    {
      icon: '/homepage/applelogo.svg',
      number: '5+',
      title: 'Disruptive Technology',
    },
    {
      icon: '/homepage/personsimplerun.svg',
      number: '100+',
      title: 'Career Outcomes',
    },
    {
      icon: '/homepage/cassettetape.svg',
      number: '50+',
      title: 'Hands On Resources',
    },
    {
      icon: '/homepage/androidlogo.svg',
      number: '100+',
      title: 'Workshops & Hackathons',
    },
    {
      icon: '/homepage/desktoptower.svg',
      number: 'Robust',
      title: 'Virtual & Physical Classes',
    },
  ];

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const startDragging = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current!.offsetLeft);
    setScrollLeft(scrollContainerRef.current!.scrollLeft);
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  const onDrag = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current!.offsetLeft;
    const walk = x - startX;
    scrollContainerRef.current!.scrollLeft = scrollLeft - walk;
  };

  // Add touch support for mobile devices
  const startDraggingTouch = (e: React.TouchEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollContainerRef.current!.offsetLeft);
    setScrollLeft(scrollContainerRef.current!.scrollLeft);
  };

  const onDragTouch = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.touches[0].pageX - scrollContainerRef.current!.offsetLeft;
    const walk = x - startX;
    scrollContainerRef.current!.scrollLeft = scrollLeft - walk;
  };

  return (
    <>
      {floatingStyles}
      <div className="w-full relative bg-nero flex flex-col items-center justify-center p-5 box-border gap-[20px] text-center text-4xl text-black font-body-large-600 sm:gap-[5px] sm:pl-[5px] sm:pr-[5px] sm:box-border">
        {/* Add a div for fixed navbar spacing */}
        <div className="h-[50px] w-full"></div>
        
        <Navbar
          onLogoClick={onLogoClick}
          onCoursesClick={onCoursesClick}
          onQuizzesClick={onQuizzesClick}
          onCompetetionsClick={onCompetetionsClick}
          onAboutUsClick={onAboutUsClick}
        />
        
        {/* Remove the 20px spacer since we have the navbar spacing */}
        <header className="self-stretch rounded-[20px] md:rounded-[15px] sm:rounded-[10px] bg-main-blue min-h-[500px] h-auto flex flex-row items-center justify-between py-5 px-[15px] box-border z-[1] text-left text-4xl text-nero font-inter lg:flex-col lg:min-h-[600px] md:flex-col md:gap-[10px] md:p-4 md:box-border sm:flex-col sm:gap-[10px] sm:p-4 sm:box-border">
          <div className="w-[775px] flex flex-col items-start justify-start p-[15px] box-border gap-[15px] lg:order-[2] lg:w-full md:w-full sm:w-full sm:items-center">
            <div className="self-stretch flex flex-col items-start justify-start font-body-large-600 sm:items-center">
              <div className="self-stretch relative leading-[120%] font-medium text-2xl md:text-xl sm:text-sm sm:text-center">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="mb-4"
                >
                  <TypeAnimation
                    sequence={[
                      'Coding has Never been so Fun ever Before!',
                      1000,
                    ]}
                    wrapper="span"
                    cursor={true}
                    className="text-3xl font-bold bg-gradient-to-r from-[#FF5A43] to-[#FF8A43] bg-clip-text text-transparent sm:text-xl"
                  />
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="mb-4 text-sm"
                >
                  Whether you're a{' '}
                  <motion.span
                    whileHover={{ scale: 1.1 }}
                    className="text-[#FF5A43] font-bold text-[1.1em] cursor-pointer hover:text-[#FF8A43] transition-colors duration-300"
                  >
                    Student
                  </motion.span>
                  , a{' '}
                  <motion.span
                    whileHover={{ scale: 1.1 }}
                    className="text-[#FF5A43] font-bold text-[1.1em] cursor-pointer hover:text-[#FF8A43] transition-colors duration-300"
                  >
                    Hobbyist
                  </motion.span>
                  , or a{' '}
                  <motion.span
                    whileHover={{ scale: 1.1 }}
                    className="text-[#FF5A43] font-bold text-[1.1em] cursor-pointer hover:text-[#FF8A43] transition-colors duration-300"
                  >
                    Professional
                  </motion.span>{' '}
                  or from a{' '}
                  <motion.span
                    whileHover={{ scale: 1.1 }}
                    className="text-[#FF5A43] font-bold text-[1.1em] cursor-pointer hover:text-[#FF8A43] transition-colors duration-300"
                  >
                    Technical/Non-Technical Background
                  </motion.span>
                  , it doesn't matter.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  className="text-sm"
                >
                  Our{' '}
                  <motion.span
                    whileHover={{ scale: 1.1 }}
                    className="text-[#FF5A43] font-bold text-[1.1em] cursor-pointer hover:text-[#FF8A43] transition-colors duration-300"
                  >
                    visual based programming
                  </motion.span>{' '}
                  helps you build{' '}
                  {[
                    'apps',
                    'websites',
                    'automation tools',
                    'data projects',
                    'AI workflows & any projects you want much faster much easier..'
                  ].map((text, index) => (
                    <motion.span
                      key={index}
                      whileHover={{
                        scale: 1.1,
                        color: '#FF5A43',
                      }}
                      className="font-bold text-[1em] cursor-pointer transition-colors duration-300 mx-1"
                    >
                      {text}
                      {index !== 5 && ','}
                    </motion.span>
                  ))}
                </motion.p>
              </div>
            </div>
            <div className="flex flex-row md:flex-col sm:items-center">
              <div className="self-stretch flex flex-row items-start justify-start gap-[15px] text-2xl sm:justify-center">
                <div className="self-stretch w-[107px] flex flex-col items-start justify-start sm:items-center">
                  <div className="self-stretch flex flex-col items-start justify-start sm:items-center">
                    <div className="relative tracking-[-0.01em] leading-[32px] font-semibold text-[#FF5A43] sm:text-lg">
                      50+
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[26.7px] pl-0 text-md font-body-large-600 sm:items-center sm:pr-0">
                    <div className="self-stretch relative leading-[24px] sm:text-sm ">
                      Career Tracks
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start sm:items-center">
                  <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[34.3px] pl-0 sm:items-center sm:pr-0">
                    <div className="relative tracking-[-0.01em] leading-[32px] font-semibold text-[#FF5A43] sm:text-lg">
                      100+
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start relative text-md font-body-large-600 sm:items-center">
                    <div className="relative leading-[24px] z-[0] sm:text-sm">
                      Hands-on Projects
                    </div>
                    <div className="w-6 absolute !m-[0] bottom-[0px] left-[0px] box-border h-px z-[1] border-b-[1px] border-solid border-silver" />
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[5px] text-lg sm:justify-center">
                <div className="self-stretch flex flex-row items-center justify-center">
                  <img
                    className="w-8 relative h-8 overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/homepage/phonecall@2x.png"
                  />
                </div>
                <div className="flex-1 flex flex-row items-center justify-start sm:justify-center">
                  <div className="flex-1 relative leading-[24px] font-semibold sm:text-xs">{`Have questions? Contact us and we’ll help you get started.`}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[525px] relative h-[478px] overflow-visible lg:order-[1] lg:w-full md:w-full md:h-[350px] sm:w-full sm:h-[200px]">
            <img
              className="absolute inset-0 w-full h-full object-contain rounded-[22px] md:rounded-[15px] sm:rounded-[10px]"
              alt=""
              src="/homepage/image-5@2x.png"
            />
            <div className="absolute inset-0 rounded-[22px]" />

            <div className="absolute z-[2] left-[-34px] top-[52px] bg-nero rounded-2xl shadow-[0px_14px_40px_rgba(31,_149,_242,_0.25)] px-4 py-3 w-[200px] sm:hidden transform -rotate-2 hover:-translate-y-1 hover:shadow-[0px_18px_55px_rgba(31,_149,_242,_0.28)] transition-all duration-300 hero-float-1">
              <div className="text-xs text-black/60">Active learners</div>
              <div className="text-lg font-semibold text-black">2,500+</div>
              <div className="mt-1 inline-flex items-center text-xs font-semibold text-chateau-green bg-[rgba(34,197,94,0.12)] px-2 py-0.5 rounded-full">+18% this month</div>
            </div>

            <div className="absolute z-[2] right-[-34px] top-[34px] bg-nero rounded-2xl shadow-[0px_14px_40px_rgba(31,_149,_242,_0.25)] px-4 py-3 w-[220px] sm:hidden transform rotate-2 hover:-translate-y-1 hover:shadow-[0px_18px_55px_rgba(31,_149,_242,_0.28)] transition-all duration-300 hero-float-2">
              <div className="text-xs text-black/60">Project built</div>
              <div className="text-lg font-semibold text-black">100+</div>
              <div className="mt-1 text-xs text-black/70">Built across Web, AI, and Automation</div>
            </div>

            {/* Curved Lines Design - Hidden on mobile */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none md:hidden" viewBox="0 0 525 478" style={{ zIndex: 1 }}>
              {/* Main curved path */}
              <path
                d="M 100 150 Q 200 100, 300 150 T 450 200"
                stroke="url(#gradient1)"
                strokeWidth="3"
                fill="none"
                opacity="0.6"
                className="curve-float-1"
              />
              <path
                d="M 80 300 Q 180 250, 280 300 T 420 350"
                stroke="url(#gradient2)"
                strokeWidth="2.5"
                fill="none"
                opacity="0.5"
                className="curve-float-2"
              />
              <path
                d="M 320 200 Q 380 180, 420 220 T 450 300"
                stroke="url(#gradient3)"
                strokeWidth="2"
                fill="none"
                opacity="0.4"
                className="curve-float-1"
                style={{ animationDelay: '2s' }}
              />
              
              {/* Gradient definitions */}
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.8" />
                </linearGradient>
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.8" />
                </linearGradient>
                <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#10b981" stopOpacity="0.8" />
                </linearGradient>
              </defs>
            </svg>

            {/* Circular Nodes - Hidden on mobile, visible on md+ */}
            <div className="absolute z-[4] left-[100px] top-[140px] w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg pulse-node md:hidden">
              <div className="text-white text-xs font-bold text-center">AI</div>
            </div>
            
            <div className="absolute z-[4] left-[200px] top-[100px] w-14 h-14 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center shadow-lg pulse-node md:hidden" style={{ animationDelay: '0.5s' }}>
              <div className="text-white text-xs font-bold text-center">Automation</div>
            </div>
            
            <div className="absolute z-[4] left-[300px] top-[140px] w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg pulse-node md:hidden" style={{ animationDelay: '1s' }}>
              <div className="text-white text-[10px] font-bold text-center">Web App</div>
            </div>
            
            <div className="absolute z-[4] left-[80px] top-[290px] w-14 h-14 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full flex items-center justify-center shadow-lg pulse-node md:hidden" style={{ animationDelay: '1.5s' }}>
              <div className="text-white text-xs font-bold text-center">Cloud</div>
            </div>
            
            <div className="absolute z-[4] left-[180px] top-[250px] w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-lg pulse-node md:hidden" style={{ animationDelay: '2s' }}>
              <div className="text-white text-xs font-bold text-center">Game</div>
            </div>
            
            <div className="absolute z-[4] left-[280px] top-[290px] w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center shadow-lg pulse-node md:hidden" style={{ animationDelay: '2.5s' }}>
              <div className="text-white text-[10px] font-bold text-center">IOT</div>
            </div>
            
            <div className="absolute z-[4] left-[380px] top-[250px] w-14 h-14 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-full flex items-center justify-center shadow-lg pulse-node md:hidden" style={{ animationDelay: '3s' }}>
              <div className="text-white text-xs font-bold text-center">AR/VR</div>
            </div>
            
            <div className="absolute z-[4] left-[350px] top-[180px] w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center shadow-lg pulse-node md:hidden" style={{ animationDelay: '3.5s' }}>
              <div className="text-white text-xs font-bold text-center">Business</div>
            </div>

                      </div>
        </header>
        <section className="self-stretch bg-nero flex flex-col items-center justify-start p-5 gap-[20px] z-[16] text-center text-4xl text-aqua-deep font-body-large-600 sm:mt-[20px] sm:pl-0 sm:pr-0 sm:box-border">
          <div className="self-stretch flex flex-col items-center justify-center h-auto">
            <div className="self-stretch h-auto relative leading-[120%] font-semibold inline-block text-center">
              <span className="text-3xl md:text-2xl sm:text-xl font-bold text-black">Most institutions teach how to code. We teach how to build systems.</span>
              <span className="text-xl md:text-lg sm:text-base text-gray-600 font-normal block mt-2">
                Technology is no longer a separate profession it has become a basic skill, just like communication or problem-solving.
              </span>
            </div>
          </div>

          <div
            ref={scrollContainerRef}
            className="self-stretch overflow-x-hidden flex flex-row flex-wrap items-center justify-center py-[25px] px-[5px] gap-[15px] text-left text-2xl text-main-blue"
            onMouseDown={startDragging}
            onMouseUp={stopDragging}
            onMouseLeave={stopDragging}
            onMouseMove={onDrag}
            onTouchStart={startDraggingTouch}
            onTouchEnd={stopDragging}
            onTouchMove={onDragTouch}
          >
            <div className="flex flex-row flex-wrap items-center justify-center gap-[15px]">
              {cardData.map((card, index) => (
                <div
                  key={index}
                  className="flex-none w-[200px] h-[150px] shadow-[0px_6px_18px_rgba(31,_149,_242,_0.22)] rounded bg-nero flex flex-col items-center justify-center p-[5px] box-border gap-[5px] transition-transform hover:scale-105 lg:w-[200px] md:w-[150px] sm:w-[150px]"
                >
                  <div className="self-stretch flex flex-row items-end justify-start gap-[14px]">
                    <img
                      className="w-[50px] relative h-[50px] overflow-hidden shrink-0"
                      alt=""
                      src={card.icon}
                    />
                    <div className="flex-1 flex flex-row items-end justify-start">
                      <div className="flex-1 relative leading-[150%] font-semibold sm:text-lg">
                        {card.number}
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start text-center text-md text-black">
                    <div className="flex-1 relative leading-[120%] font-semibold">
                      {card.title}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="self-stretch bg-nero flex flex-col items-center justify-center p-5 gap-[20px] z-[15] text-center text-4xl\ text-black font-body-large-600 sm:pl-[5px] sm:pr-[05px] sm:box-border">
          <div className="self-stretch flex flex-col items-center justify-center">
            <div className="self-stretch relative leading-[120%] font-semibold whitespace-pre-wrap text-3xl md:text-xl sm:text-lg">
              With CoDesk, your learning journey is in safe hands.
            </div>
          </div>
          <div className="self-stretch bg-nero flex flex-row flex-wrap items-center justify-center gap-[10px] text-xl sm:gap-[15px]">
            <div className="w-[300px] shadow-[0px_8px_22px_rgba(31,_149,_242,_0.18)] rounded bg-nero h-auto min-h-[340px] flex flex-col items-center justify-center p-[15px] box-border gap-[15px] sm:w-full sm:max-w-[350px]">
              <img
                className="w-[100px] relative h-[100px] overflow-hidden shrink-0"
                alt=""
                src="/homepage/baseballhelmet.svg"
              />
              <div className="self-stretch flex flex-row items-center justify-center">
                <div className="flex-1 relative leading-[150%] font-semibold">
                  Future Proof Curriculum
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start text-sm">
                <div className="flex-1 relative leading-[150%]">
                  Explore the Ever-Evolving World of Programming with Our
                  Up-to-the-Minute Curriculum. We insure latest Coding Trends
                  and Technologies.
                </div>
              </div>
            </div>
            <div className="w-[300px] shadow-[0px_8px_22px_rgba(31,_149,_242,_0.18)] rounded bg-nero h-auto min-h-[340px] flex flex-col items-center justify-center p-[15px] box-border gap-[15px] sm:w-full sm:max-w-[350px]">
              <img
                className="w-[100px] relative h-[100px] overflow-hidden shrink-0"
                alt=""
                src="/homepage/question2.svg"
              />
              <div className="self-stretch flex flex-row items-center justify-center">
                <div className="flex-1 relative leading-[150%] font-semibold">
                  Regular Doubt Session
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start text-sm">
                <div className="flex-1 relative leading-[150%]">
                  After every module, solve all your queries in this
                  personalized session. The toughest problems addressed -
                  concepts revised and doubts cleared!
                </div>
              </div>
            </div>
            <div className="w-[300px] shadow-[0px_8px_22px_rgba(31,_149,_242,_0.18)] rounded bg-nero h-auto min-h-[340px] flex flex-col items-center justify-center p-[15px] box-border gap-[15px] sm:w-full sm:max-w-[350px]">
              <img
                className="w-[100px] relative h-[100px] overflow-hidden shrink-0"
                alt=""
                src="/homepage/lifebuoy1.svg"
              />
              <div className="self-stretch flex flex-row items-center justify-center">
                <div className="flex-1 relative leading-[150%] font-semibold whitespace-pre-wrap">
                  Thrilling Competitions
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start text-sm">
                <div className="flex-1 relative leading-[150%] whitespace-pre-wrap">
                  Regular competitions are conducted to encourage students to
                  showcase their skills and develop their ideas.
                </div>
              </div>
            </div>
            <div className="w-[300px] shadow-[0px_8px_22px_rgba(31,_149,_242,_0.18)] rounded bg-nero h-auto min-h-[340px] flex flex-col items-center justify-center p-[15px] box-border gap-[15px] sm:w-full sm:max-w-[350px]">
              <img
                className="w-[100px] relative h-[100px] overflow-hidden shrink-0"
                alt=""
                src="/homepage/applepodcastslogo.svg"
              />
              <div className="self-stretch flex flex-row items-center justify-center">
                <div className="flex-1 relative leading-[150%] font-semibold">{`Projects & Quizzes after every class`}</div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start text-sm">
                <div className="flex-1 relative leading-[150%] whitespace-pre-wrap">
                  Quizzes and projects are fun and help us remember important
                  facts. These well-targeted and tailor-made quizzes will boost
                  confidence and performance for real-world work.
                </div>
              </div>
            </div>
            <div className="w-[300px] shadow-[0px_8px_22px_rgba(31,_149,_242,_0.18)] rounded bg-nero h-auto min-h-[340px] flex flex-col items-center justify-center p-[15px] box-border gap-[15px] sm:w-full sm:max-w-[350px]">
              <img
                className="w-[100px] relative h-[100px] overflow-hidden shrink-0"
                alt=""
                src="/homepage/wechatlogo1.svg"
              />
              <div className="self-stretch flex flex-row items-center justify-center">
                <div className="flex-1 relative leading-[150%] font-semibold whitespace-pre-wrap">
                  Personalized Classes
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start text-sm">
                <div className="flex-1 relative leading-[150%] whitespace-pre-wrap">
                  Understand concepts faster with personal attention from
                  teachers. Learn coding from highly qualified teachers trained
                  to make learning effective and impactful.
                </div>
              </div>
            </div>
            <div className="w-[300px] shadow-[0px_8px_22px_rgba(31,_149,_242,_0.18)] rounded bg-nero h-auto min-h-[340px] flex flex-col items-center justify-center p-[15px] box-border gap-[15px] sm:w-full sm:max-w-[350px]">
              <img
                className="w-[81.3px] relative h-[81.3px]"
                alt=""
                src="/homepage/vector1.svg"
              />
              <div className="self-stretch flex flex-row items-center justify-center">
                <div className="flex-1 relative leading-[150%] font-semibold whitespace-pre-wrap">
                  Lifetime Access to Resources
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start text-sm">
                <div className="flex-1 relative leading-[150%] whitespace-pre-wrap">{`Forgot what was taught in the last  class? No worries. Watch the  recorded class video anytime to  refresh your memory. Get lifetime access to our  exclusive learning content `}</div>
              </div>
            </div>
            <div className="w-[300px] shadow-[0px_8px_22px_rgba(31,_149,_242,_0.18)] rounded bg-nero h-auto min-h-[340px] flex flex-col items-center justify-center p-[15px] box-border gap-[15px] sm:w-full sm:max-w-[350px]">
              <img
                className="w-[100px] relative h-[100px] overflow-hidden shrink-0"
                alt=""
                src="/homepage/chalkboardteacher2.svg"
              />
              <div className="self-stretch flex flex-row items-center justify-center">
                <div className="flex-1 relative leading-[150%] font-semibold whitespace-pre-wrap">
                  Gamified learning dashboard for learners and mentors
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start text-sm">
                <div className="flex-1 relative leading-[150%] whitespace-pre-wrap">{`For class management &  progress tracking  For Easy rescheduling of  classes and session notes  For Course and instructor  information`}</div>
              </div>
            </div>
            <div className="w-[300px] shadow-[0px_8px_22px_rgba(31,_149,_242,_0.18)] rounded bg-nero h-auto min-h-[340px] flex flex-col items-center justify-start p-[15px] box-border gap-[15px] sm:w-full sm:max-w-[350px]">
              <img
                className="w-[100px] relative h-[100px] overflow-hidden shrink-0"
                alt=""
                src="/homepage/appwindow.svg"
              />
              <div className="self-stretch flex flex-row items-start justify-start">
                <div className="flex-1 relative leading-[150%] font-semibold whitespace-pre-wrap">
                  Classes runs on hybrid model
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start text-sm">
                <div className="flex-1 relative leading-[150%]">
                  Our class runs on both physical and virtual model ensuring
                  that our students can learn from anywhere at anytime
                </div>
              </div>
            </div>
            <div className="w-[300px] shadow-[0px_8px_22px_rgba(31,_149,_242,_0.18)] rounded bg-nero h-auto min-h-[340px] flex flex-col items-center justify-center p-[15px] box-border gap-[15px] sm:w-full sm:max-w-[350px]">
              <img
                className="w-[100px] relative h-[100px] overflow-hidden shrink-0"
                alt=""
                src="/homepage/student.svg"
              />
              <div className="self-stretch flex flex-row items-center justify-center">
                <div className="flex-1 relative leading-[150%] font-semibold whitespace-pre-wrap">
                  Community of Coders
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start text-sm">
                <div className="flex-1 relative leading-[150%] whitespace-pre-wrap">
                  Get access to our community to collaborate, share
                  projects, and solve real-world problems together
                </div>
              </div>
            </div>
            <div className="w-[300px] shadow-[0px_8px_22px_rgba(31,_149,_242,_0.18)] rounded bg-nero h-auto min-h-[340px] flex flex-col items-center justify-center p-[15px] box-border gap-[15px] sm:w-full sm:max-w-[350px]">
              <img
                className="w-[100px] relative h-[100px] overflow-hidden shrink-0"
                alt=""
                src="/homepage/arrowsincardinal.svg"
              />
              <div className="self-stretch flex flex-row items-center justify-center">
                <div className="flex-1 relative leading-[150%] font-semibold">
                  Gamified Learning
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start text-sm">
                <div className="flex-1 relative leading-[150%] whitespace-pre-wrap">
                  CoDesK makes learning engaging with gamification. Learners can take
                  quizzes or complete projects to earn points, badges, and
                  rewards.
                </div>
              </div>
            </div>
            <div className="w-[300px] shadow-[0px_8px_22px_rgba(31,_149,_242,_0.18)] rounded bg-nero h-auto min-h-[340px] flex flex-col items-center justify-center p-[15px] box-border gap-[15px] sm:w-full sm:max-w-[350px]">
              <img
                className="w-[100px] relative h-[100px] overflow-hidden shrink-0"
                alt=""
                src="/homepage/articlemedium.svg"
              />
              <div className="self-stretch flex flex-row items-center justify-center">
                <div className="flex-1 relative leading-[150%] font-semibold">{`Track progress and get structured feedback`}</div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start text-sm">
                <div className="flex-1 relative leading-[150%] whitespace-pre-wrap">
                  Great opportunity for mentors and learners to open two way
                  communication and to share insights and information for the
                  holistic development.
                </div>
              </div>
            </div>
            <div className="w-[300px] shadow-[0px_8px_22px_rgba(31,_149,_242,_0.18)] rounded bg-nero h-auto min-h-[340px] flex flex-col items-center justify-center p-[15px] box-border gap-[15px] sm:w-full sm:max-w-[350px]">
              <img
                className="w-[100px] relative h-[100px]"
                alt=""
                src="/homepage/vector2.svg"
              />
              <div className="self-stretch flex flex-row items-center justify-center">
                <div className="flex-1 relative leading-[150%] font-semibold">
                  Learning Certificates
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start text-sm">
                <div className="flex-1 relative leading-[150%] whitespace-pre-wrap">
                  Show the world what you can do with a certificate for every
                  amazing skill you master.
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="self-stretch bg-nero flex flex-col items-center justify-center p-5 gap-[20px] z-[14] text-center text-4xl\ text-black font-body-large-600 sm:pl-[5px] sm:pr-[5px] sm:box-border">
          <div className="self-stretch flex flex-col items-center justify-center">
            <div className="self-stretch relative leading-[120%] font-semibold text-3xl md:text-xl sm:text-lg">
              Choose a coding course that excites everyone
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-center justify-center p-[15px] gap-[15px] text-left text-sm sm:pl-[5px] sm:pr-[5px] sm:box-border">
            <div className="w-[350px] shadow-[0px_10px_26px_rgba(31,_149,_242,_0.18)] rounded-lg bg-nero flex flex-col items-start justify-start p-2.5 box-border relative gap-[15px] sm:w-full sm:max-w-[400px]">
              <img
                className="self-stretch relative max-w-full overflow-hidden h-[213px] shrink-0 object-cover z-[0]"
                alt=""
                src="/homepage/image@2x.png"
              />
              <div className="self-stretch bg-nero flex flex-col items-start justify-start gap-[5px] z-[1]">
                <div className="self-stretch flex flex-col items-center justify-start pt-0 px-0 pb-[0.5px] text-2xl">
                  <div className="w-full relative leading-[150%] font-semibold inline-block max-w-[344px]">
                    Specialized Coding
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start text-md">
                  <div className="self-stretch relative leading-[150%]">
                    A perfect course for beginners who want to use coding to solve
                    real-world problems and create a better future.
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[5px]">
                  <div className="flex-1 flex flex-col items-start justify-start">
                    <div className="self-stretch relative leading-[120%] font-semibold">
                      All Ages
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start">
                    <div className="self-stretch relative leading-[120%] font-semibold">
                      50 Lessons
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start">
                    <div className="self-stretch relative leading-[120%] font-semibold">
                      100+ Activities
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-center justify-center pt-0 px-0 pb-2 text-center text-dodger-blue">
                  <div className="w-full relative leading-[150%] inline-block max-w-[384px]">
                    Don't miss out to unlock your potential.
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-nero flex flex-col items-center justify-start gap-[15px] z-[2]">
                <button
                  className="cursor-pointer py-[9px] px-5 bg-nero self-stretch rounded box-border h-[41px] flex flex-row items-center justify-center border-[1px] border-solid border-aqua-deep"
                  autoFocus={true}
                  onClick={onCoursesClick}
                >
                  <div className="flex-1 relative text-lg tracking-[-0.01em] leading-[20px] capitalize font-semibold font-inter text-aqua-deep text-center inline-block max-h-[58px]">
                    view course
                  </div>
                </button>
                <button
                  className="cursor-pointer py-[9px] px-5 bg-aqua-deep self-stretch rounded flex flex-row items-center justify-center border-[1px] border-solid border-nero"
                  onClick={onTryAFreeClassButtonClick}
                >
                  <div className="flex-1 relative text-lg tracking-[-0.01em] leading-[20px] capitalize font-semibold font-inter text-nero text-center inline-block max-h-[58px]">
                    Try a free class
                  </div>
                </button>
              </div>
              <img
                className="w-[100px] !m-[0] absolute top-[10px] left-[10px] h-[25px] overflow-hidden shrink-0 object-cover z-[3]"
                alt=""
                src="/homepage/bestsellingpng1@2x.png"
              />
            </div>
            <div className="w-[350px] shadow-[0px_10px_26px_rgba(31,_149,_242,_0.18)] rounded-lg bg-nero flex flex-col items-start justify-start p-2.5 box-border relative gap-[15px] sm:w-full sm:max-w-[400px]">
              <img
                className="self-stretch relative max-w-full overflow-hidden h-[213px] shrink-0 object-cover z-[0]"
                alt=""
                src="/homepage/image1@2x.png"
              />
              <div className="self-stretch bg-nero flex flex-col items-start justify-start gap-[5px] z-[1]">
                <div className="self-stretch flex flex-col items-center justify-start pt-0 px-0 pb-[0.5px] text-2xl">
                  <div className="w-full relative leading-[150%] font-semibold inline-block max-w-[344px]">
                    All In One Coding
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start text-md">
                  <div className="self-stretch relative leading-[150%]">
                    A course for those who want to master the art of coding and
                    create a better future through code.
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[5px]">
                  <div className="flex-1 flex flex-col items-start justify-start">
                    <div className="self-stretch relative leading-[120%] font-semibold">
                      All Ages
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start">
                    <div className="self-stretch relative leading-[120%] font-semibold">
                      50+ Lessons
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start">
                    <div className="self-stretch relative leading-[120%] font-semibold">
                      100+ Activities
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-center justify-center pt-0 px-0 pb-2 text-center text-dodger-blue">
                  <div className="w-full relative leading-[150%] inline-block max-w-[384px]">
                    Don't miss out to unlock your potential.
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-nero flex flex-col items-center justify-start gap-[15px] z-[2]">
                <button
                  className="cursor-pointer py-[9px] px-5 bg-nero self-stretch rounded box-border h-[41px] flex flex-row items-center justify-center border-[1px] border-solid border-aqua-deep"
                  autoFocus={true}
                  onClick={onCoursesClick}
                >
                  <div className="flex-1 relative text-lg tracking-[-0.01em] leading-[20px] capitalize font-semibold font-inter text-aqua-deep text-center inline-block max-h-[58px]">
                    view course
                  </div>
                </button>
                <button
                  className="cursor-pointer py-[9px] px-5 bg-aqua-deep self-stretch rounded flex flex-row items-center justify-center border-[1px] border-solid border-nero"
                  onClick={onTryAFreeClassButtonClick}
                >
                  <div className="flex-1 relative text-lg tracking-[-0.01em] leading-[20px] capitalize font-semibold font-inter text-nero text-center inline-block max-h-[58px]">
                    Try a free class
                  </div>
                </button>
              </div>
              <img
                className="w-[100px] !m-[0] absolute top-[10px] left-[10px] h-[25px] overflow-hidden shrink-0 object-cover z-[3]"
                alt=""
                src="/homepage/bestsellingpng1@2x.png"
              />
            </div>
            <div className="w-[350px] shadow-[0px_10px_26px_rgba(31,_149,_242,_0.18)] rounded-lg bg-nero flex flex-col items-start justify-start p-2.5 box-border relative gap-[15px] sm:w-full sm:max-w-[400px]">
              <img
                className="self-stretch relative max-w-full overflow-hidden h-[213px] shrink-0 object-cover z-[0]"
                alt=""
                src="/homepage/image2@2x.png"
              />
              <div className="self-stretch bg-nero flex flex-col items-start justify-start gap-[5px] z-[1]">
                <div className="self-stretch flex flex-col items-center justify-start pt-0 px-0 pb-[0.5px] text-2xl">
                  <div className="w-full relative leading-[150%] font-semibold inline-block max-w-[344px]">
                    Coding Workshops
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start text-md">
                  <div className="self-stretch relative leading-[150%]">
                    A perfect course for beginners who want to test drive coding.
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[5px]">
                  <div className="flex-1 flex flex-col items-start justify-start">
                    <div className="self-stretch relative leading-[120%] font-semibold">
                      All Ages
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start">
                    <div className="self-stretch relative leading-[120%] font-semibold">
                      15+ Lessons
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start">
                    <div className="self-stretch relative leading-[120%] font-semibold">
                      30+ Activities
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-center justify-center pt-0 px-0 pb-2 text-center text-dodger-blue">
                  <div className="w-full relative leading-[150%] inline-block max-w-[384px]">
                    Don't miss out to unlock your potential.
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-nero flex flex-col items-center justify-start gap-[15px] z-[2]">
                <button
                  className="cursor-pointer py-[9px] px-5 bg-nero self-stretch rounded box-border h-[41px] flex flex-row items-center justify-center border-[1px] border-solid border-aqua-deep"
                  autoFocus={true}
                  onClick={onCoursesClick}
                >
                  <div className="flex-1 relative text-lg tracking-[-0.01em] leading-[20px] capitalize font-semibold font-inter text-aqua-deep text-center inline-block max-h-[58px]">
                    view course
                  </div>
                </button>
                <button
                  className="cursor-pointer py-[9px] px-5 bg-aqua-deep self-stretch rounded flex flex-row items-center justify-center border-[1px] border-solid border-nero"
                  onClick={onTryAFreeClassButtonClick}
                >
                  <div className="flex-1 relative text-lg tracking-[-0.01em] leading-[20px] capitalize font-semibold font-inter text-nero text-center inline-block max-h-[58px]">
                    Try a free class
                  </div>
                </button>
              </div>
              <img
                className="w-[100px] !m-[0] absolute top-[10px] left-[10px] h-[25px] overflow-hidden shrink-0 object-cover z-[3]"
                alt=""
                src="/homepage/bestsellingpng1@2x.png"
              />
            </div>
          </div>
          <section className="self-stretch bg-nero flex flex-row flex-wrap items-start justify-center p-[15px]">
            <button
              className="cursor-pointer py-[9px] px-5 bg-nero rounded box-border h-[41px] flex flex-row items-center justify-center border-[1px] border-solid border-aqua-deep"
              onClick={onCoursesClick}
            >
              <div className="relative text-lg leading-[150%] font-semibold font-body-large-600 text-aqua-deep text-center inline-block max-h-[58px]">
                Show All Courses
              </div>
            </button>
          </section>
        </section>
        <section className="self-stretch bg-nero flex flex-col items-center justify-center p-5 gap-[20px] z-[13]">
          <div className="self-stretch flex flex-col items-center justify-center">
            <div className="self-stretch relative leading-[120%] font-semibold text-3xl md:text-xl sm:text-lg">
              Flexible pricing with personalized classes
            </div>
          </div>
          <div className="self-stretch flex flex-row items-stretch justify-center gap-6 py-[25px] px-2.5 text-left text-md sm:pt-5 sm:pb-5 sm:box-border flex-wrap sm:gap-4">
            <div className="w-[300px] min-w-[300px] rounded-2xl bg-white overflow-hidden flex flex-col items-start justify-start shadow-[0px_10px_26px_rgba(31,_149,_242,_0.18)] hover:shadow-[0px_14px_34px_rgba(31,_149,_242,_0.22)] transition-shadow sm:min-w-0 sm:w-full sm:max-w-[350px]">
              <div className="self-stretch bg-gradient-to-r from-aqua-deep to-[#0B8BEA] text-nero flex flex-col items-start justify-center pt-7 px-6 pb-4 relative">
                <div className="self-stretch flex flex-row items-start justify-between gap-4">
                  <div className="flex-1 relative leading-[120%] font-semibold text-lg">
                    8 classes / month
                  </div>
                  <div className="shrink-0 text-sm font-semibold bg-nero/15 rounded-full px-3 py-1">
                    Most Popular
                  </div>
                </div>
                <img
                  className="w-[100px] !m-[0] absolute top-[0px] left-[0px] h-[25px] overflow-hidden shrink-0 object-cover opacity-90"
                  alt=""
                  src="/homepage/bestsellingpng@2x.png"
                />
              </div>
              <div className="self-stretch bg-white flex flex-col items-start justify-start py-5 px-6 gap-3 text-sm">
                <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                    alt=""
                    src="/homepage/svg4.svg"
                  />
                  <div className="flex-1 flex flex-row items-center justify-start">
                    <div className="flex-1 relative leading-[150%]">
                      2 classes per week
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                    alt=""
                    src="/homepage/svg4.svg"
                  />
                  <div className="flex-1 flex flex-row items-center justify-start">
                    <div className="flex-1 relative leading-[150%]">
                      12+ fun and engaging activities
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                    alt=""
                    src="/homepage/svg.svg"
                  />
                  <div className="flex-1 flex flex-row items-center justify-start">
                    <div className="flex-1 relative leading-[150%]">
                      Access to complete coding module
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                    alt=""
                    src="/homepage/svg4.svg"
                  />
                  <div className="flex-1 flex flex-row items-center justify-start">
                    <div className="flex-1 relative leading-[150%]">
                      Expert-designed, project-based curriculum paired with
                      hands-on activities and projects
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                    alt=""
                    src="/homepage/svg.svg"
                  />
                  <div className="flex-1 flex flex-row items-center justify-start">
                    <div className="flex-1 relative leading-[150%]">
                      Progress tracking and mentor feedback
                    </div>
                  </div>
                </div>
                <div className="w-[229px] hidden flex-row items-center justify-start gap-[10px]">
                  <img
                    className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                    alt=""
                    src="/homepage/svg.svg"
                  />
                  <div className="flex-1 flex flex-row items-center justify-start">
                    <div className="flex-1 relative leading-[150%]">
                      Unlimited doubt sessions, available 24*7
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[300px] min-w-[300px] rounded-2xl bg-white overflow-hidden flex flex-col items-start justify-start shadow-[0px_10px_26px_rgba(31,_149,_242,_0.18)] hover:shadow-[0px_14px_34px_rgba(31,_149,_242,_0.22)] transition-shadow sm:min-w-0 sm:w-full sm:max-w-[350px]">
              <div className="self-stretch bg-slate-900 text-nero flex flex-col items-start justify-center pt-7 px-6 pb-4 relative">
                <div className="self-stretch flex flex-row items-start justify-between gap-4">
                  <div className="flex-1 relative leading-[120%] font-semibold text-lg">
                    4 classes / month
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-white flex flex-col items-start justify-start py-5 px-6 gap-3 text-sm">
                <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                    alt=""
                    src="/homepage/svg4.svg"
                  />
                  <div className="flex-1 flex flex-row items-center justify-start">
                    <div className="flex-1 relative leading-[150%]">
                      1 classes per week
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                    alt=""
                    src="/homepage/svg4.svg"
                  />
                  <div className="flex-1 flex flex-row items-center justify-start">
                    <div className="flex-1 relative leading-[150%]">
                      8+ fun and engaging activities
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                    alt=""
                    src="/homepage/svg.svg"
                  />
                  <div className="flex-1 flex flex-row items-center justify-start">
                    <div className="flex-1 relative leading-[150%]">
                      Access to complete coding module
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                    alt=""
                    src="/homepage/svg4.svg"
                  />
                  <div className="flex-1 flex flex-row items-center justify-start">
                    <div className="flex-1 relative leading-[150%]">
                      Expert-designed, project-based curriculum paired with
                      hands-on activities and projects
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                    alt=""
                    src="/homepage/svg.svg"
                  />
                  <div className="flex-1 flex flex-row items-center justify-start">
                    <div className="flex-1 relative leading-[150%]">
                      Progress tracking and mentor feedback
                    </div>
                  </div>
                </div>
                <div className="w-[229px] hidden flex-row items-center justify-start gap-[10px]">
                  <img
                    className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                    alt=""
                    src="/homepage/svg.svg"
                  />
                  <div className="flex-1 flex flex-row items-center justify-start">
                    <div className="flex-1 relative leading-[150%]">
                      Unlimited doubt sessions, available 24*7
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="self-stretch bg-nero flex flex-row flex-wrap items-start justify-center p-[15px]">
            <button
              className="cursor-pointer py-[9px] px-5 bg-nero rounded box-border h-[41px] flex flex-row items-center justify-center border-[1px] border-solid border-aqua-deep"
              autoFocus={true}
              onClick={onTryAFreeClassButtonClick}
            >
              <div className="relative text-lg leading-[150%] font-semibold font-body-large-600 text-aqua-deep text-center inline-block max-h-[58px]">
                Know Pricing
              </div>
            </button>
          </section>
        </section>
        <section className="self-stretch bg-nero flex flex-col items-center justify-start p-5 gap-[15px] z-[12] mt-[10px] mb-[10px]"> {/* Reduced from 20px to 10px */}
          <div className="self-stretch flex flex-col items-center justify-start gap-[24px]">
            <div className="self-stretch flex flex-col items-center justify-start">
              <div className="self-stretch relative leading-[120%] font-semibold text-3xl md:text-xl sm:text-lg">
                Learn, compete, and win certificates in coding competitions
              </div>
            </div>
            <div className="self-stretch flex flex-col items-center justify-start pt-0 px-[16.2px] pb-[0.5px] text-sm text-dimgray">
              <div className="self-stretch relative leading-[150%]">
                <p className="m-0">
                  Our coding competitions and hackathons are a great way to put
                  your coding skills to
                </p>
                <p className="m-0">
                  test and to learn and grow while competing with the best minds
                </p>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-start text-2xl text-aqua-deep">
            <div className="self-stretch bg-nero flex flex-row flex-wrap items-center justify-between p-[15px] max-w-4xl mx-auto rounded-xl shadow-[0px_10px_26px_rgba(31,_149,_242,_0.18)]">
              <div className="flex flex-row items-center justify-between sm:flex-col w-full">
                <img
                  className="w-[186px] rounded h-[127px] overflow-hidden shrink-0 object-cover sm:w-full sm:h-[100px]"
                  alt=""
                  src="/homepage/iconpng1@2x.png"
                />
                <div className="flex-1 flex flex-col items-center justify-center gap-[10px] sm:flex-[unset] sm:self-stretch ml-4 sm:ml-0">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch flex flex-row items-start justify-start">
                      <div className="flex-1 relative leading-[150%] font-semibold sm:text-xl">
                        Nepal CodeWars 2024 University Hackathon
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start gap-[10px] text-right text-md text-chateau-green">
                      <div className="flex-1 relative leading-[150%]">
                        Hosted by:
                      </div>
                      <div className="flex-1 relative leading-[150%] text-left">
                        CoDesk Innovations
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start text-right text-sm text-black">
                    <div className="self-stretch flex flex-row items-center justify-start">
                      <div className="flex-1 relative leading-[120%] font-semibold">
                        Team Size:
                      </div>
                      <div className="flex-1 relative leading-[120%] font-semibold text-left">
                        {' '}
                        3
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-start">
                      <div className="flex-1 relative leading-[120%] font-semibold">{`Label: `}</div>
                      <div className="flex-1 relative leading-[120%] font-semibold text-left">
                        {' '}
                        Advanced
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-start">
                      <div className="flex-1 relative leading-[120%] font-semibold">
                        Theme:
                      </div>
                      <div className="flex-1 flex flex-row flex-wrap items-center justify-start text-left text-xs">
                        <div className="rounded-lg bg-dim-green flex flex-col items-start justify-start p-[5px]">
                          <div className="relative leading-[130%]">
                            No Restrictions
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end justify-center gap-[10px] text-right text-sm text-black1 sm:w-full sm:items-center mt-4 sm:mt-2">
                <button
                  className="cursor-pointer py-2 px-4 bg-aqua-deep rounded flex flex-row items-center justify-center border-[1px] border-solid border-nero hover:bg-[#0055a4] transition-colors sm:w-full max-w-[160px]"
                  onClick={onTryAFreeClassButtonClick}
                >
                  <div className="relative text-base leading-[150%] font-semibold font-body-large-600 text-nero text-center">
                    Apply Now
                  </div>
                </button>
              </div>
            </div>
          </div>
          <section className="self-stretch bg-nero flex flex-row flex-wrap items-start justify-center p-[15px]">
            <button
              className="cursor-pointer py-[9px] px-5 bg-nero rounded box-border h-[41px] flex flex-row items-center justify-center border-[1px] border-solid border-aqua-deep"
              autoFocus={true}
              onClick={onCompetetionsClick}
            >
              <div className="relative text-lg leading-[150%] font-semibold font-body-large-600 text-aqua-deep text-center inline-block max-h-[58px]">
                Show Competetions
              </div>
            </button>
          </section>
        </section>
        <section className="self-stretch bg-nero flex flex-col items-start justify-start p-5 gap-[20px] z-[9]">
          <div className="self-stretch flex flex-row items-center justify-center">
            <div className="flex-1 relative leading-[120%] font-semibold text-3xl md:text-xl sm:text-lg">
              <span>{`Testimonials: Why learners ❤️ Codesk Innovations`}</span>
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-center justify-center p-[15px] gap-[20px] text-left text-lg md:flex-row md:flex-wrap sm:flex-col sm:items-center sm:pl-[5px] sm:pr-[5px] sm:box-border sm:gap-[15px]">
            <div className="w-[350px] shadow-[0px_10px_26px_rgba(31,_149,_242,_0.18)] rounded bg-nero flex flex-col items-start justify-start p-[15px] box-border gap-[15px] sm:pl-[5px] sm:pr-[5px] sm:box-border sm:w-full sm:max-w-[400px]">
              <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[30px]">
                <div className="flex flex-row items-start justify-start">
                  <img
                    className="w-[100px] relative rounded-100xl h-[100px] object-cover"
                    alt=""
                    src="/homepage/image4@2x.png"
                  />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[5px]">
                  <div className="self-stretch flex flex-row items-center justify-start">
                    <div className="flex-1 relative leading-[150%] font-semibold">
                      Roshni
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start text-md">
                    <div className="flex-1 relative leading-[150%]">
                      student
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start text-center text-md">
                <div className="flex-1 relative leading-[150%]">
                  CoDesk's structured learning paths helped me build projects
                  faster and with more confidence.
                </div>
              </div>
            </div>
            <div className="w-[350px] shadow-[0px_10px_26px_rgba(31,_149,_242,_0.18)] rounded bg-nero flex flex-col items-start justify-start p-[15px] box-border gap-[15px] sm:pl-[5px] sm:pr-[5px] sm:box-border sm:w-full sm:max-w-[400px]">
              <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[30px]">
                <div className="flex flex-row items-start justify-start">
                  <img
                    className="w-[100px] relative rounded-100xl h-[100px] object-cover"
                    alt=""
                    src="/homepage/image5@2x.png"
                  />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[5px]">
                  <div className="self-stretch flex flex-row items-center justify-start">
                    <div className="flex-1 relative leading-[150%] font-semibold">
                      Surya
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start text-md">
                    <div className="flex-1 relative leading-[150%]">
                      student
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start text-center text-md">
                <div className="flex-1 relative leading-[150%]">
                  I now feel confident building real web applications, thanks to
                  the structured guidance and feedback from CoDesk.
                </div>
              </div>
            </div>
            <div className="w-[350px] shadow-[0px_10px_26px_rgba(31,_149,_242,_0.18)] rounded bg-nero flex flex-col items-start justify-start p-[15px] box-border gap-[15px] sm:pl-[5px] sm:pr-[5px] sm:box-border sm:w-full sm:max-w-[400px]">
              <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[30px]">
                <div className="flex flex-row items-start justify-start">
                  <img
                    className="w-[100px] relative rounded-100xl h-[100px] object-cover"
                    alt=""
                    src="/homepage/image6@2x.png"
                  />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[5px]">
                  <div className="self-stretch flex flex-row items-center justify-start">
                    <div className="flex-1 relative leading-[150%] font-semibold">
                      Preeti
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start text-md">
                    <div className="flex-1 relative leading-[150%]">
                      student
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start text-center text-md">
                <div className="flex-1 relative leading-[150%]">
                  The curriculum offers industry-relevant projects and
                  thoughtfully designed exercises that build strong fundamentals.
                </div>
              </div>
            </div>
          </div>
          <section className="self-stretch bg-nero flex flex-row flex-wrap items-start justify-center p-[15px]">
            <button
              className="cursor-pointer py-[9px] px-5 bg-nero rounded box-border h-[41px] flex flex-row items-center justify-center border-[1px] border-solid border-aqua-deep"
              onClick={onShowReviewsButtonClick}
            >
              <div className="relative text-lg leading-[150%] font-semibold font-body-large-600 text-aqua-deep text-center inline-block max-h-[58px]">
                Show reviews
              </div>
            </button>
          </section>
        </section>
        <section className="w-[1400px] bg-nero hidden flex-col items-start justify-start p-5 box-border gap-[20px] z-[6] sm:pl-[5px] sm:pr-[5px] sm:box-border">
          <div className="self-stretch flex flex-row items-center justify-center gap-[13px]">
            <div className="w-9 h-[131px] overflow-hidden shrink-0 flex flex-col items-end justify-center">
              <img
                className="self-stretch relative max-w-full overflow-hidden h-[29.2px] shrink-0"
                alt=""
                src="/homepage/vector4.svg"
              />
            </div>
            <div className="flex-1 relative leading-[120%] font-semibold text-3xl md:text-xl sm:text-lg">
              It's our love and passion for coding that drives us to teach
              coding
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-center justify-center p-[15px] gap-[15px] text-md md:flex-row md:flex-wrap sm:pl-[5px] sm:pr-[5px] sm:box-border">
            <div className="w-[300px] shadow-[0px_14px_34px_rgba(31,_149,_242,_0.22)] rounded-lg bg-nero overflow-hidden shrink-0 flex flex-col items-center justify-center py-[50px] px-[15px] box-border gap-[15px]">
              <div className="self-stretch flex flex-col items-center justify-start">
                <div className="self-stretch relative leading-[120%] font-semibold whitespace-pre-wrap">{`"Teaching software engineering is a responsibility we take seriously."`}</div>
              </div>
              <div className="w-full overflow-hidden flex flex-col items-center justify-center py-0 px-[42px] box-border max-w-[384px]">
                <img
                  className="w-[146px] relative rounded-61xl-5 h-[154px] object-cover"
                  alt=""
                  src="/homepage/rectangle-1@2x.png"
                />
              </div>
              <div className="self-stretch flex flex-col items-center justify-center gap-[2px]">
                <div className="self-stretch flex flex-col items-center justify-start text-2xl">
                  <div className="self-stretch relative leading-[150%] font-semibold">
                    Sandeep Neupane
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-center justify-start">
                  <div className="self-stretch relative leading-[150%]">{`Co-Founder & CEO, CoDesk`}</div>
                </div>
                <div className="self-stretch flex flex-col items-center justify-start">
                  <div className="self-stretch relative leading-[150%]">
                    IOE TU Dharan
                  </div>
                </div>
                <div className="w-[270px] h-[76px] hidden flex-col items-center justify-start min-h-[72px] text-wwwcodingalcom-mine-shaft">
                  <div className="w-[270px] relative leading-[120%] font-semibold hidden">{`Former Co-founder and CTO `}</div>
                </div>
              </div>
              <img
                className="w-8 relative h-8 overflow-hidden shrink-0 hidden"
                alt=""
                src="/homepage/arrowbendrightdown.svg"
              />
            </div>
            <div className="w-[300px] shadow-[0px_14px_34px_rgba(31,_149,_242,_0.22)] rounded-lg bg-nero overflow-hidden shrink-0 flex flex-col items-center justify-center py-[50px] px-[15px] box-border gap-[15px]">
              <div className="self-stretch flex flex-col items-center justify-start">
                <div className="self-stretch relative leading-[120%] font-semibold">
                  "Empowering young minds with coding skills is a profound
                  responsibility we eagerly embrace."
                </div>
              </div>
              <div className="w-full overflow-hidden flex flex-col items-center justify-center py-0 px-[42px] box-border max-w-[384px]">
                <img
                  className="w-[146px] relative rounded-61xl-5 h-[154px] object-cover"
                  alt=""
                  src="/homepage/rectangle-11@2x.png"
                />
              </div>
              <div className="self-stretch flex flex-col items-center justify-center gap-[2px]">
                <div className="self-stretch flex flex-col items-center justify-start text-2xl">
                  <div className="self-stretch relative leading-[150%] font-semibold">
                    Jeevan KC
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-center justify-start">
                  <div className="self-stretch relative leading-[150%]">{`Co-Founder & CTO, CoDesk`}</div>
                </div>
                <div className="self-stretch flex flex-col items-center justify-start">
                  <div className="self-stretch relative leading-[150%]">
                    IOE TU Dharan
                  </div>
                </div>
                <div className="w-[270px] hidden flex-col items-center justify-start min-h-[72px] text-wwwcodingalcom-mine-shaft">
                  <div className="self-stretch relative leading-[120%] font-semibold">{`Former Co-founder and CTO `}</div>
                </div>
              </div>
              <img
                className="w-8 relative h-8 overflow-hidden shrink-0 hidden"
                alt=""
                src="/homepage/arrowbendrightdown.svg"
              />
            </div>
            <div className="w-[300px] shadow-[0px_14px_34px_rgba(31,_149,_242,_0.22)] rounded-lg bg-nero overflow-hidden shrink-0 flex flex-col items-center justify-center py-[50px] px-[15px] box-border gap-[15px]">
              <div className="self-stretch flex flex-col items-center justify-start">
                <div className="self-stretch relative leading-[120%] font-semibold">
                  "Guiding children through the world of coding is a weighty
                  task we're committed to shouldering."
                </div>
              </div>
              <div className="w-full overflow-hidden flex flex-col items-center justify-center py-0 px-[42px] box-border max-w-[384px]">
                <img
                  className="w-[146px] relative rounded-61xl-5 h-[154px] object-cover"
                  alt=""
                  src="/homepage/rectangle-1@2x.png"
                />
              </div>
              <div className="self-stretch flex flex-col items-center justify-center gap-[2px]">
                <div className="self-stretch flex flex-col items-center justify-start text-2xl">
                  <div className="self-stretch relative leading-[150%] font-semibold">
                    Abin KC
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-center justify-start">
                  <div className="self-stretch relative leading-[150%]">{`Co-Founder & Marketing Leads, CoDesk`}</div>
                </div>
                <div className="self-stretch flex flex-col items-center justify-start">
                  <div className="self-stretch relative leading-[150%]">
                    IOE TU Dharan
                  </div>
                </div>
                <div className="w-[270px] hidden flex-col items-center justify-start min-h-[72px] text-wwwcodingalcom-mine-shaft">
                  <div className="self-stretch relative leading-[120%] font-semibold">{`Former Co-founder and CTO `}</div>
                </div>
              </div>
              <img
                className="w-8 relative h-8 overflow-hidden shrink-0 hidden"
                alt=""
                src="/homepage/arrowbendrightdown.svg"
              />
            </div>
          </div>
          <section className="self-stretch bg-nero flex flex-row flex-wrap items-start justify-center p-[15px]">
            <button
              className="cursor-pointer py-[9px] px-5 bg-nero rounded box-border h-[41px] flex flex-row items-center justify-center border-[1px] border-solid border-aqua-deep"
              onClick={onAboutUsClick}
            >
              <div className="relative text-lg leading-[150%] font-semibold font-body-large-600 text-aqua-deep text-center inline-block max-h-[58px]">
                Meet our team
              </div>
            </button>
          </section>
        </section>
        <section className="self-stretch bg-nero flex flex-col items-center justify-start p-5 gap-[20px] z-[5] sm:pl-[5px] sm:pr-[5px] sm:box-border">
          <div className="self-stretch flex flex-col items-center justify-start pt-0 px-0 pb-[0.5px]">
            <div className="self-stretch relative leading-[120%] font-semibold text-3xl md:text-xl sm:text-lg">{`Most loved & trusted platform to learn coding`}</div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-center justify-center p-[15px] gap-[15px] text-left text-md md:flex-row md:flex-wrap sm:pl-[5px] sm:pr-[5px] sm:box-border">
            <div className="w-[200px] shadow-[0px_6px_18px_rgba(31,_149,_242,_0.22)] rounded bg-nero flex flex-col items-start justify-start p-[15px] box-border gap-[15px] sm:w-full sm:max-w-[300px]">
              <img
                className="w-[50px] relative h-[50px] overflow-hidden shrink-0"
                alt=""
                src="/homepage/arrowssplit.svg"
              />
              <div className="self-stretch flex flex-row items-start justify-start">
                <div className="flex-1 relative leading-[120%] font-semibold">
                  Classes runs on hybrid model
                </div>
              </div>
            </div>
            <div className="w-[200px] shadow-[0px_6px_18px_rgba(31,_149,_242,_0.22)] rounded bg-nero flex flex-col items-start justify-start p-[15px] box-border gap-[15px] sm:w-full sm:max-w-[300px]">
              <img
                className="w-[50px] relative h-[50px] overflow-hidden shrink-0"
                alt=""
                src="/homepage/bathtub.svg"
              />
              <div className="self-stretch flex flex-row items-start justify-start">
                <div className="flex-1 relative leading-[120%] font-semibold">
                  Lifetime support and access to all the study resources
                </div>
              </div>
            </div>
            <div className="w-[200px] shadow-[0px_6px_18px_rgba(31,_149,_242,_0.22)] rounded bg-nero flex flex-col items-start justify-start p-[15px] box-border gap-[15px] sm:w-full sm:max-w-[300px]">
              <img
                className="w-[50px] relative h-[50px] overflow-hidden shrink-0"
                alt=""
                src="/homepage/batteryverticalfull.svg"
              />
              <div className="self-stretch flex flex-row items-start justify-start">
                <div className="flex-1 relative leading-[120%] font-semibold">{`All level of Coding courses `}</div>
              </div>
            </div>
            <div className="w-[200px] shadow-[0px_6px_18px_rgba(31,_149,_242,_0.22)] rounded bg-nero flex flex-col items-start justify-start p-[15px] box-border gap-[15px] sm:w-full sm:max-w-[300px]">
              <img
                className="w-[50px] relative h-[50px] overflow-hidden shrink-0"
                alt=""
                src="/homepage/presentationchart.svg"
              />
              <div className="self-stretch flex flex-row items-start justify-start">
                <div className="flex-1 relative leading-[120%] font-semibold">
                  Dashboard to track learning milestones and progress
                </div>
              </div>
            </div>
            <div className="w-[200px] shadow-[0px_6px_18px_rgba(31,_149,_242,_0.22)] rounded bg-nero flex flex-col items-start justify-start p-[15px] box-border gap-[15px] sm:w-full sm:max-w-[300px]">
              <img
                className="w-[50px] relative h-[50px] overflow-hidden shrink-0"
                alt=""
                src="/homepage/columnsplusright.svg"
              />
              <div className="self-stretch flex flex-row items-start justify-start">
                <div className="flex-1 relative leading-[120%] font-semibold">
                  Guided course journey for student
                </div>
              </div>
            </div>
          </div>
          <section className="self-stretch bg-nero flex flex-row flex-wrap items-start justify-center p-[15px]">
            <button
              className="cursor-pointer py-[9px] px-5 bg-nero rounded box-border h-[41px] flex flex-row items-center justify-center border-[1px] border-solid border-aqua-deep"
              autoFocus={true}
              onClick={onAboutUsClick}
            >
              <div className="relative text-lg leading-[150%] font-semibold font-body-large-600 text-aqua-deep text-center inline-block max-h-[58px]">
                Know more CoDesk
              </div>
            </button>
          </section>
        </section>
        <section className="self-stretch bg-nero flex flex-col items-center justify-start p-5 box-border gap-6 z-[4] sm:px-4 sm:py-4 sm:gap-4">
          <div className="w-full max-w-[1100px] flex flex-col gap-6">
            <div className="text-center space-y-2">
              <div className="relative leading-[120%] font-semibold text-2xl md:text-xl sm:text-lg text-aqua-deep inline-block">
                Frequently Asked Questions
              </div>
              <div className="text-sm md:text-xs text-gray-600 max-w-2xl mx-auto">
                Find answers to common questions about our coding programs and learning platform
              </div>
            </div>

            <div className="self-stretch grid grid-cols-1 gap-4">
              {faqs.map((item, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="group bg-nero rounded-lg shadow-[0px_10px_26px_rgba(31,_149,_242,_0.16)] hover:shadow-[0px_14px_34px_rgba(31,_149,_242,_0.2)] transition-all duration-300 overflow-hidden"
                  >
                    <button
                      type="button"
                      className="w-full flex items-center justify-between gap-3 p-4 text-left hover:bg-gray-50/30 transition-colors duration-200"
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                    >
                      <div className="flex-1 text-gray-900 font-medium text-sm md:text-xs leading-[140%] pr-3">
                        {item.q}
                      </div>
                      <div
                        className={`flex-shrink-0 h-6 w-6 rounded-full border border-aqua-deep/30 flex items-center justify-center text-aqua-deep transition-all duration-300 ${
                          isOpen ? 'rotate-180' : 'rotate-0'
                        }`}
                      >
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </button>
                    <div className={`relative overflow-hidden transition-all duration-300 ${
                      isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="px-4 pb-4 text-gray-600 text-xs md:text-xs leading-[160%] border-t border-gray-100 pt-3">
                        {item.a}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="text-center pt-2">
              <div className="inline-flex items-center gap-2 text-xs text-gray-500">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Still have questions? Browse our help center or contact our support team
              </div>
            </div>
          </div>
        </section>
        <section className="self-stretch bg-nero flex flex-row items-center justify-center p-5 z-[3] md:flex-col sm:pl-[5px] sm:pr-[5px] sm:box-border">
          <div className="flex-1 bg-nero flex flex-col items-start justify-start p-5 gap-[40px] md:flex-[unset] md:self-stretch sm:pl-[5px] sm:pr-[5px] sm:box-border">
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-col items-center justify-start pt-0 px-2.5 pb-3">
                <div className="self-stretch relative leading-[120%] font-semibold text-3xl md:text-xl sm:text-lg">
                  You are in safe hands at codeskinnovations
                </div>
              </div>
              <div className="self-stretch h-[35px] flex flex-row items-center justify-center p-2.5 box-border text-sm">
                <div className="flex-1 relative leading-[150%] font-medium">
                  Like thousands of learners who have chosen codeskinnovations
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start text-md">
              <div className="self-stretch flex flex-col items-center justify-center">
                <div className="self-stretch relative leading-[150%]">
                  At codeskinnovations, we are passionate about our stakeholder. If at
                  any point, you feel that you wish to discontinue using
                  codeskinnovations, please email us at billing@codeskinnovations.com and we
                  will immediately process your refund for the remaining
                  lessons/classes, no questions asked.
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="self-stretch bg-nero flex flex-col items-center justify-center gap-[30px] z-[2]">
          <div className="self-stretch bg-nero flex flex-col items-center justify-center py-0 px-[5px] gap-[5px]">
            <div className="self-stretch flex flex-row items-center justify-center p-2.5">
              <div className="flex-1 relative leading-[120%] font-semibold text-3xl md:text-xl sm:text-lg">
                Contact Us
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-center p-2.5 text-md">
              <div className="flex-1 relative leading-[150%]">
                Feel free to reach out to us
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-center justify-center p-5">
            <form className="m-0 w-full max-w-[550px] shadow-[0px_10px_26px_rgba(31,_149,_242,_0.16)] rounded-xl bg-nero box-border flex flex-col items-start justify-start py-7 px-5 sm:px-4 gap-[17px]">
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch relative text-lg leading-[150%] font-semibold font-body-large-600 text-nero text-left">
                  Fill in your details to and reach out to us!
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch rounded flex flex-col items-start justify-start py-0 px-3 border-[1px] border-solid border-other-outlined-border">
                    <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-4 px-0 gap-[8px]">
                      <div className="hidden flex-row items-start justify-start gap-[8px]">
                        <div className="flex flex-col items-start justify-start">
                          <div className="rounded-2xl bg-grey-grey-300 flex flex-row items-center justify-start p-1">
                            <div className="w-6 rounded-45xl bg-grey-grey-400 h-6 overflow-hidden shrink-0 hidden flex-row items-center justify-center">
                              <div className="self-stretch flex-1 relative text-xs tracking-[0.4px] leading-[166%] font-components-chip text-grey-grey-700 text-center flex items-center justify-center">
                                F
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start py-[3px] px-1.5">
                              <div className="relative text-sm tracking-[0.16px] leading-[18px] font-components-chip text-text-primary text-left">
                                Chip
                              </div>
                            </div>
                            <img
                              className="w-6 relative h-6 overflow-hidden shrink-0"
                              alt=""
                              src="/homepage/cancel.svg"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start">
                          <div className="rounded-2xl bg-grey-grey-300 flex flex-row items-center justify-start p-1">
                            <div className="w-6 rounded-45xl bg-grey-grey-400 h-6 overflow-hidden shrink-0 hidden flex-row items-center justify-center">
                              <div className="self-stretch flex-1 relative text-xs tracking-[0.4px] leading-[166%] font-components-chip text-grey-grey-700 text-center flex items-center justify-center">
                                F
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start py-[3px] px-1.5">
                              <div className="relative text-sm tracking-[0.16px] leading-[18px] font-components-chip text-text-primary text-left">
                                Chip
                              </div>
                            </div>
                            <img
                              className="w-6 relative h-6 overflow-hidden shrink-0"
                              alt=""
                              src="/homepage/cancel.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <input
                        className="[border:none] [outline:none] font-body-large-600 text-md bg-[transparent] flex-1 relative leading-[150%] text-text-secondary text-left"
                        placeholder="Your name"
                        type="text"
                      />
                      <div className="w-7 relative h-7 hidden">
                        <div className="absolute top-[0px] left-[0px] flex flex-col items-center justify-start">
                          <div className="rounded-29xl flex flex-row items-center justify-start p-1">
                            <img
                              className="w-5 relative h-5 overflow-hidden shrink-0"
                              alt=""
                              src="/homepage/close.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start">
                        <img
                          className="w-6 relative h-6 overflow-hidden shrink-0"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch rounded flex flex-col items-start justify-start py-0 px-3 border-[1px] border-solid border-other-outlined-border">
                    <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-4 px-0 gap-[8px]">
                      <div className="hidden flex-row items-start justify-start gap-[8px]">
                        <div className="flex flex-col items-start justify-start">
                          <div className="rounded-2xl bg-grey-grey-300 flex flex-row items-center justify-start p-1">
                            <div className="w-6 rounded-45xl bg-grey-grey-400 h-6 overflow-hidden shrink-0 hidden flex-row items-center justify-center">
                              <div className="self-stretch flex-1 relative text-xs tracking-[0.4px] leading-[166%] font-components-chip text-grey-grey-700 text-center flex items-center justify-center">
                                F
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start py-[3px] px-1.5">
                              <div className="relative text-sm tracking-[0.16px] leading-[18px] font-components-chip text-text-primary text-left">
                                Chip
                              </div>
                            </div>
                            <img
                              className="w-6 relative h-6 overflow-hidden shrink-0"
                              alt=""
                              src="/homepage/cancel.svg"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start">
                          <div className="rounded-2xl bg-grey-grey-300 flex flex-row items-center justify-start p-1">
                            <div className="w-6 rounded-45xl bg-grey-grey-400 h-6 overflow-hidden shrink-0 hidden flex-row items-center justify-center">
                              <div className="self-stretch flex-1 relative text-xs tracking-[0.4px] leading-[166%] font-components-chip text-grey-grey-700 text-center flex items-center justify-center">
                                F
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start py-[3px] px-1.5">
                              <div className="relative text-sm tracking-[0.16px] leading-[18px] font-components-chip text-text-primary text-left">
                                Chip
                              </div>
                            </div>
                            <img
                              className="w-6 relative h-6 overflow-hidden shrink-0"
                              alt=""
                              src="/homepage/cancel.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <input
                        className="[border:none] [outline:none] font-body-large-600 text-md bg-[transparent] flex-1 relative leading-[150%] text-text-secondary text-left"
                        placeholder="Email address"
                        type="text"
                      />
                      <div className="w-7 relative h-7 hidden">
                        <div className="absolute top-[0px] left-[0px] flex flex-col items-center justify-start">
                          <div className="rounded-29xl flex flex-row items-center justify-start p-1">
                            <img
                              className="w-5 relative h-5 overflow-hidden shrink-0"
                              alt=""
                              src="/homepage/close.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start">
                        <img
                          className="w-6 relative h-6 overflow-hidden shrink-0"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch rounded flex flex-col items-start justify-start py-0 px-3 border-[1px] border-solid border-other-outlined-border">
                    <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-4 px-0 gap-[8px]">
                      <div className="hidden flex-row items-start justify-start gap-[8px]">
                        <div className="flex flex-col items-start justify-start">
                          <div className="rounded-2xl bg-grey-grey-300 flex flex-row items-center justify-start p-1">
                            <div className="w-6 rounded-45xl bg-grey-grey-400 h-6 overflow-hidden shrink-0 hidden flex-row items-center justify-center">
                              <div className="self-stretch flex-1 relative text-xs tracking-[0.4px] leading-[166%] font-components-chip text-grey-grey-700 text-center flex items-center justify-center">
                                F
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start py-[3px] px-1.5">
                              <div className="relative text-sm tracking-[0.16px] leading-[18px] font-components-chip text-text-primary text-left">
                                Chip
                              </div>
                            </div>
                            <img
                              className="w-6 relative h-6 overflow-hidden shrink-0"
                              alt=""
                              src="/homepage/cancel.svg"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start">
                          <div className="rounded-2xl bg-grey-grey-300 flex flex-row items-center justify-start p-1">
                            <div className="w-6 rounded-45xl bg-grey-grey-400 h-6 overflow-hidden shrink-0 hidden flex-row items-center justify-center">
                              <div className="self-stretch flex-1 relative text-xs tracking-[0.4px] leading-[166%] font-components-chip text-grey-grey-700 text-center flex items-center justify-center">
                                F
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start py-[3px] px-1.5">
                              <div className="relative text-sm tracking-[0.16px] leading-[18px] font-components-chip text-text-primary text-left">
                                Chip
                              </div>
                            </div>
                            <img
                              className="w-6 relative h-6 overflow-hidden shrink-0"
                              alt=""
                              src="/homepage/cancel.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <input
                        className="[border:none] [outline:none] font-body-large-600 text-md bg-[transparent] flex-1 relative leading-[150%] text-text-secondary text-left"
                        placeholder="Email address"
                        type="text"
                      />
                      <div className="w-7 relative h-7 hidden">
                        <div className="absolute top-[0px] left-[0px] flex flex-col items-center justify-start">
                          <div className="rounded-29xl flex flex-row items-center justify-start p-1">
                            <img
                              className="w-5 relative h-5 overflow-hidden shrink-0"
                              alt=""
                              src="/homepage/close.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start">
                        <img
                          className="w-6 relative h-6 overflow-hidden shrink-0"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch rounded flex flex-col items-start justify-start py-0 px-3 border-[1px] border-solid border-other-outlined-border">
                    <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-4 px-0 gap-[8px]">
                      <div className="hidden flex-row items-start justify-start gap-[8px]">
                        <div className="flex flex-col items-start justify-start">
                          <div className="rounded-2xl bg-grey-grey-300 flex flex-row items-center justify-start p-1">
                            <div className="w-6 rounded-45xl bg-grey-grey-400 h-6 overflow-hidden shrink-0 hidden flex-row items-center justify-center">
                              <div className="self-stretch flex-1 relative text-xs tracking-[0.4px] leading-[166%] font-components-chip text-grey-grey-700 text-center flex items-center justify-center">
                                F
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start py-[3px] px-1.5">
                              <div className="relative text-sm tracking-[0.16px] leading-[18px] font-components-chip text-text-primary text-left">
                                Chip
                              </div>
                            </div>
                            <img
                              className="w-6 relative h-6 overflow-hidden shrink-0"
                              alt=""
                              src="/homepage/cancel.svg"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start">
                          <div className="rounded-2xl bg-grey-grey-300 flex flex-row items-center justify-start p-1">
                            <div className="w-6 rounded-45xl bg-grey-grey-400 h-6 overflow-hidden shrink-0 hidden flex-row items-center justify-center">
                              <div className="self-stretch flex-1 relative text-xs tracking-[0.4px] leading-[166%] font-components-chip text-grey-grey-700 text-center flex items-center justify-center">
                                F
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start py-[3px] px-1.5">
                              <div className="relative text-sm tracking-[0.16px] leading-[18px] font-components-chip text-text-primary text-left">
                                Chip
                              </div>
                            </div>
                            <img
                              className="w-6 relative h-6 overflow-hidden shrink-0"
                              alt=""
                              src="/homepage/cancel.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <input
                        className="[border:none] [outline:none] font-body-large-600 text-md bg-[transparent] flex-1 relative leading-[150%] text-text-secondary text-left"
                        placeholder="Phone Number"
                        type="text"
                      />
                      <div className="w-7 relative h-7 hidden">
                        <div className="absolute top-[0px] left-[0px] flex flex-col items-center justify-start">
                          <div className="rounded-29xl flex flex-row items-center justify-start p-1">
                            <img
                              className="w-5 relative h-5 overflow-hidden shrink-0"
                              alt=""
                              src="/homepage/close.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start">
                        <img
                          className="w-6 relative h-6 overflow-hidden shrink-0"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="cursor-pointer py-[9px] px-5 bg-aqua-deep rounded flex flex-row items-center justify-center border-[1px] border-solid border-nero self-center w-full max-w-[200px]"
                onClick={onSupportUsButtonClick}
              >
                <div className="relative text-lg leading-[150%] font-semibold font-body-large-600 text-nero text-center inline-block max-h-[58px]">
                  Subimt
                </div>
              </button>
            </form>
          </div>
        </section>
        <section className="self-stretch bg-nero flex flex-col items-center justify-start p-5 gap-[20px] z-[1] sm:pl-[5px] sm:pr-[5px] sm:box-border">
          <div className="self-stretch flex flex-col items-center justify-start pt-0 px-0 pb-[0.5px]">
            <div className="self-stretch relative leading-[120%] font-semibold text-center text-3xl md:text-xl sm:text-lg">
              Special thanks to
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[40px] text-xs text-dimgray md:gap-[30px] sm:gap-[20px]">
            {/* Backed by section */}
            <div className="flex flex-col items-center justify-start gap-[16px] w-[300px] sm:w-full">
              <div className="text-center">
                <div className="text-base leading-[130%]">Backed by</div>
              </div>
              <div className="flex flex-row items-center justify-center gap-[32px] sm:gap-[24px] sm:flex-col w-full">
                <div className="w-[120px] h-[60px] flex items-center justify-center">
                  <img
                    className="max-w-full max-h-full w-auto h-auto"
                    alt="STEM Logo"
                    src="/homepage/stem-logo-recreated01-1@2x.png"
                  />
                </div>
                <div className="w-[120px] h-[60px] flex items-center justify-center">
                  <img
                    className="max-w-full max-h-full w-auto h-auto object-contain"
                    alt="Proma.ai Logo"
                    src="https://proma.ai/_astro/logo-new.CLfn8ACZ_22shiD.svg"
                  />
                </div>
              </div>
            </div>

            {/* Built by section */}
            <div className="flex flex-col items-center justify-start gap-[16px] w-[300px] sm:w-full">
              <div className="text-center">
                <div className="text-base leading-[130%]">Built by</div>
              </div>
              <div className="flex flex-row items-center justify-center gap-[32px] sm:gap-[24px] sm:flex-col w-full">
                <div className="w-[120px] h-[60px] flex items-center justify-center">
                  <img
                    className="max-w-full max-h-full w-auto h-auto"
                    alt="ActivePieces Logo"
                    src="https://www.activepieces.com/activepieces-logo-hz-og.svg"
                  />
                </div>
                <div className="w-[120px] h-[60px] flex items-center justify-center">
                  <img
                    className="max-w-full max-h-full w-auto h-auto"
                    alt="Nordcraft Logo"
                    src="https://res.cloudinary.com/jeevankc17/image/upload/v1771917422/nc-logo-wide-black_c0qbvg.png"
                  />
                </div>
              </div>
            </div>

            {/* Supported by section */}
            <div className="flex flex-col items-center justify-start gap-[16px] w-[300px] sm:w-full">
              <div className="text-center">
                <div className="text-base leading-[130%]">Supported by</div>
              </div>
              <div className="flex flex-row items-center justify-center gap-[32px] sm:gap-[24px] sm:flex-col w-full">
                <div className="w-[120px] h-[60px] flex items-center justify-center">
                  <img
                    className="max-w-full max-h-full w-auto h-auto"
                    alt="BIT Logo"
                    src="/homepage/bit-logo-recreated-1@2x.png"
                  />
                </div>
                <div className="w-[120px] h-[60px] flex items-center justify-center">
                  <svg
                    width="109"
                    height="113"
                    viewBox="0 0 109 113"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="max-w-full max-h-full w-auto h-auto"
                    aria-label="Supabase Logo"
                  >
                    <path
                      d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z"
                      fill="url(#paint0_linear)"
                    />
                    <path
                      d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z"
                      fill="url(#paint1_linear)"
                      fillOpacity="0.2"
                    />
                    <path
                      d="M45.317 2.07103C48.1765 -1.53037 53.9745 0.442937 54.0434 5.041L54.4849 72.2922H9.83113C1.64038 72.2922 -2.92775 62.8321 2.1655 56.4175L45.317 2.07103Z"
                      fill="#3ECF8E"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="53.9738"
                        y1="54.974"
                        x2="94.1635"
                        y2="71.8295"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#249361" />
                        <stop offset="1" stopColor="#3ECF8E" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear"
                        x1="36.1558"
                        y1="30.578"
                        x2="54.4844"
                        y2="65.0806"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop />
                        <stop offset="1" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="self-stretch bg-nero flex flex-row flex-wrap items-start justify-center p-[15px]">
          <button
            className="cursor-pointer py-[9px] px-5 bg-aqua-deep rounded flex flex-row items-center justify-center border-[1px] border-solid border-nero"
            autoFocus={true}
            onClick={onSupportUsButtonClick}
          >
            <div className="relative text-lg leading-[150%] font-semibold font-body-large-600 text-nero text-center inline-block max-h-[58px]">
              support us
            </div>
          </button>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
