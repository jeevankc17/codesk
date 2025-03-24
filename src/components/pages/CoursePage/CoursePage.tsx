import { FunctionComponent, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../common/Navbar';
import Footer from '../../common/Footer';

// Update the specializedCourses array with all 6 courses
const specializedCourses = [
  {
    title: 'Scratch Programming',
    category: 'Foundation',
    description:
      'Understanding fundamental programming concepts through visual coding.',
    features: [
      'Understanding fundamental programming concepts through visual coding.',
      'Learning to create interactive stories, games, and animations.',
      'Exploring computational thinking and problem-solving skills.',
    ],
    grade: 'Grade 3 and above',
    modules: '6 Modules, 36 Lessons & 50 classes',
    activities: '100+ fun activities and projects',
    image: '/scratchprogrammingpng@2x.png',
    certificates: [
      { text: 'Scratch Programming Certificate', icon: '/vector5.svg' },
      { text: 'Lifetime access to course content', icon: '/vector5.svg' },
      { text: 'Exclusive access to competitions', icon: '/vector5.svg' },
      { text: 'Scholarships for top performers', icon: '/vector5.svg' },
    ],
  },
  {
    title: 'Robolox Programming',
    category: 'Game Development',
    description: 'Master game development with Roblox Studio.',
    features: [
      'Mastering the tools and features of Roblox Studio for building immersive game environments.',
      'Learning Lua programming language to create interactive game mechanics and functionalities.',
      'Understanding the fundamentals of game design to create engaging gameplay experiences.',
    ],
    grade: 'Grade 7 and above',
    modules: '6 Modules, 36 Lessons & 50 classes',
    activities: '100+ fun activities and projects',
    image: '/scratchprogrammingpng@2x.png',
    certificates: [
      { text: 'Roblox Development Certificate', icon: '/vector5.svg' },
      { text: 'Lifetime access to course content', icon: '/vector5.svg' },
      { text: 'Exclusive access to competitions', icon: '/vector5.svg' },
      { text: 'Scholarships for top performers', icon: '/vector5.svg' },
    ],
  },
  {
    title: 'Thunkable Programming',
    category: 'App Development',
    description: 'Build mobile apps without traditional coding.',
    features: [
      'Building mobile apps without traditional coding using a visual programming interface.',
      'Integrating various features such as sensors, APIs, and databases into app development.',
      'Understanding the app development lifecycle from design to deployment.',
    ],
    grade: 'Grade 7 and above',
    modules: '6 Modules, 36 Lessons & 50 classes',
    activities: '100+ fun activities and projects',
    image: '/scratchprogrammingpng@2x.png',
    certificates: [
      { text: 'Mobile App Development Certificate', icon: '/vector5.svg' },
      { text: 'Lifetime access to course content', icon: '/vector5.svg' },
      { text: 'Exclusive access to competitions', icon: '/vector5.svg' },
      { text: 'Scholarships for top performers', icon: '/vector5.svg' },
    ],
  },
  {
    title: 'IOT Based Scratch',
    category: 'IOT & Robotics',
    description: 'Connect physical devices with code.',
    features: [
      'Learning about smart devices and how they interact with the internet to perform various tasks.',
      'Understanding the role of sensors in collecting data and actuators in performing actions in IoT systems.',
      'Introducing simple programming concepts through visual programming languages suitable for kids.',
    ],
    grade: 'Grade 7 and above',
    modules: '6 Modules, 36 Lessons & 50 classes',
    activities: '100+ fun activities and projects',
    image: '/scratchprogrammingpng@2x.png',
    certificates: [
      { text: 'IoT & Robotics Certificate', icon: '/vector5.svg' },
      { text: 'Lifetime access to course content', icon: '/vector5.svg' },
      { text: 'Exclusive access to competitions', icon: '/vector5.svg' },
      { text: 'Scholarships for top performers', icon: '/vector5.svg' },
    ],
  },
  {
    title: 'Python Programming',
    category: 'Artificial Intelligence',
    description: 'Learn professional programming with Python.',
    features: [
      'Introduction to Python programming language syntax and concepts.',
      'Understanding data types, variables, loops, and conditionals.',
      'Understanding how to work on data sets using Business Intelligence tools and machine learning models.',
    ],
    grade: 'Grade 7 and above',
    modules: '6 Modules, 36 Lessons & 50 classes',
    activities: '100+ fun activities and projects',
    image: '/scratchprogrammingpng@2x.png',
    certificates: [
      { text: 'Python Programming Certificate', icon: '/vector5.svg' },
      { text: 'Lifetime access to course content', icon: '/vector5.svg' },
      { text: 'Exclusive access to competitions', icon: '/vector5.svg' },
      { text: 'Scholarships for top performers', icon: '/vector5.svg' },
    ],
  },
  {
    title: 'Web Development',
    category: 'Web Development',
    description: 'Create modern websites and web applications.',
    features: [
      'Understanding of UI/UX principles using Figma then HTML, CSS, and JavaScript for creating interactive web pages.',
      'Learning about responsive design and cross-browser compatibility.',
      'Exploring different web development frameworks and libraries for enhanced functionality.',
    ],
    grade: 'Grade 7 and above',
    modules: '6 Modules, 36 Lessons & 50 classes',
    activities: '100+ fun activities and projects',
    image: '/scratchprogrammingpng@2x.png',
    certificates: [
      { text: 'Web Development Certificate', icon: '/vector5.svg' },
      { text: 'Lifetime access to course content', icon: '/vector5.svg' },
      { text: 'Exclusive access to competitions', icon: '/vector5.svg' },
      { text: 'Scholarships for top performers', icon: '/vector5.svg' },
    ],
  },
];

const workshopCourses = [
  {
    title: 'Single Day Codeshops',
    description:
      'A perfect course for kids who want to test drive to coding road.',
    age: 'Ages 8-18',
    lessons: '5+ Lessons',
    activities: '10+ Activities',
    image: '/image31@2x.png',
  },
  {
    title: 'Multi Day codeshops',
    description:
      'A course for those who want to master the art of coding and create a better future through code.',
    age: 'Ages 8-18',
    lessons: '10+ Lessons',
    activities: '15+ Activities',
    image: '/image41@2x.png',
  },
  {
    title: 'Week Long Codeshops',
    description:
      'A perfect course for kids who want to use coding to solve real-world problems and create a better future.',
    age: 'Ages 8-18',
    lessons: '15+ Lessons',
    activities: '20+ Activities',
    image: '/image51@2x.png',
  },
];

const CoursePage: FunctionComponent = () => {
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
      "[data-scroll-to='comboCourseContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
  }, []);

  const onCardscourseContainerClick = useCallback(() => {
    //TODO: link
  }, []);

  const onViewCurriculumButtonClick = useCallback(() => {
    navigate('/curriculumbycoursepage');
  }, [navigate]);

  const onButtonscurriculumClick = useCallback(() => {
    //TODO: button link
  }, []);

  const onDownloadButtonClick = useCallback(() => {
    navigate('/commingsoonpage');
  }, [navigate]);

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
          coursesColor="#FF5A43"
          competetionsColor="#000"
          aboutUsColor="#000"
          quizzesColor="#000"
        />
        
        <header className="self-stretch rounded-[20px] bg-footer-header h-[500px] flex flex-row items-center justify-between py-0 px-[10px] box-border gap-[5px] z-[1] text-left text-4xl text-nero font-inter lg:flex-col lg:h-auto md:flex-col md:gap-[5px] md:p-2.5 md:box-border sm:gap-[5px] sm:p-[5px] sm:h-auto sm:min-h-[550px] sm:box-border">
          <div className="w-[775px] flex flex-col items-start justify-start p-[10px] box-border gap-[10px] lg:order-[2] lg:w-full md:w-full sm:w-full sm:items-center">
            <div className="self-stretch flex flex-col items-start justify-start sm:items-center">
              <div className="self-stretch relative leading-[120%] font-semibold text-3xl md:text-xl sm:text-lg sm:text-center">
                All Coding Courses
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start text-base sm:items-center">
              <div className="self-stretch relative leading-[150%] text-md sm:text-center">
                Pick from a wide range of online coding courses for kids and set
                your children on the path of success
              </div>
            </div>
            <button
              className="cursor-pointer py-[9px] px-5 bg-tomato self-stretch rounded box-border h-[38px] flex flex-row items-center justify-center border-[1px] border-solid border-nero"
              autoFocus={true}
              onClick={onScrollBannerButtonClick}
            >
              <div className="relative tracking-[-0.01em] leading-[20px] capitalize font-semibold font-inter text-nero text-center inline-block max-h-[58px] text-3xl md:text-xl sm:text-lg">
                View a Courses
              </div>
            </button>
          </div>
          <div className="flex-1 h-full flex items-center justify-center">
            <img
              className="w-full h-full object-cover object-center"
              alt=""
              src="/image-54@2x.png"
            />
          </div>
        </header>
        <div className="self-stretch bg-nero flex flex-col items-start justify-center gap-[50px] relative z-[3]">
          <div className="self-stretch bg-nero flex flex-col items-center justify-center gap-[5px]">
            <div className="self-stretch flex flex-row items-center justify-center p-2.5">
              <div className="flex-1 relative leading-[120%] font-semibold text-center sm:text-3xl">
                All-in-one generalized coding courses
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-center p-2.5 text-sm">
              <div className="flex-1 relative leading-[150%] text-center">
                Learn to create apps, websites, games and more in our extensive
                online coding courses for kids who want to be real all-rounders
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-center p-5 gap-[50px] text-left text-base font-inter sm:pl-[5px] sm:pr-[5px] sm:box-border">
            {specializedCourses.map((course, index) => (
              <div
                key={index}
                className="w-[350px] rounded-lg bg-nero flex flex-col items-start justify-start p-2.5 box-border gap-[10px] cursor-pointer"
                onClick={onCardscourseContainerClick}
              >
                <div className="self-stretch relative rounded-t-md rounded-b-none bg-nero h-[99px] text-darkslateblue">
                  <img
                    className="absolute top-[-38px] right-[-34px] w-[227px] h-[123px] overflow-hidden object-cover"
                    alt=""
                    src={course.image}
                  />
                  <div className="absolute top-[37px] left-[-3px] rounded-8xs bg-nero h-[37px] flex flex-row items-center justify-start p-2.5 box-border">
                    <div className="relative leading-[150%] text-md">
                      {course.category}
                    </div>
                  </div>
                </div>

                <div className="self-stretch flex flex-col items-start justify-start text-2xl text-dodger-blue">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch bg-nero flex flex-row items-start justify-start">
                      <div className="flex-1 relative leading-[150%] font-semibold">
                        {course.title}
                      </div>
                    </div>
                  </div>

                  <div className="self-stretch bg-nero flex flex-col items-start justify-start gap-[5px] text-sm text-black1">
                    {course.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="self-stretch flex flex-row items-center justify-start gap-[5px]"
                      >
                        <img
                          className="w-8 relative h-8 overflow-hidden shrink-0"
                          alt=""
                          src={`/fire${idx + 1}.svg`}
                        />
                        <div className="flex-1 relative tracking-[-0.01em] leading-[22px]">
                          {feature}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Course details section */}
                <div className="self-stretch flex flex-col items-start justify-start gap-[5px] text-sm">
                  <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                    <img
                      className="w-6 relative h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/chalkboardteacher.svg"
                    />
                    <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                      <div className="flex-1 relative leading-[120%] font-semibold">
                        {course.grade}
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                    <img
                      className="w-6 relative h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/book--undefined--glyph-undefined.svg"
                    />
                    <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                      <div className="flex-1 relative leading-[120%] font-semibold">
                        {course.modules}
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                    <img
                      className="w-6 relative h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/microsoftwordlogo.svg"
                    />
                    <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                      <div className="flex-1 relative leading-[120%] font-semibold">{`Study Materials `}</div>
                    </div>
                  </div>
                  <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                    <img
                      className="w-6 relative h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/question.svg"
                    />
                    <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                      <div className="flex-1 relative leading-[120%] font-semibold">{`Worksheets & Quizzes`}</div>
                    </div>
                  </div>
                  <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                    <img
                      className="w-6 relative h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/celltower.svg"
                    />
                    <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                      <div className="flex-1 relative leading-[120%] font-semibold">
                        {course.activities}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Certificates section */}
                <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                  {course.certificates.map((cert, idx) => (
                    <div
                      key={idx}
                      className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]"
                    >
                      <img className="w-6 relative h-6" alt="" src={cert.icon} />
                      <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                        <div className="flex-1 relative leading-[150%] text-md">
                          {cert.text}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* View Curriculum button */}
                <div className="self-stretch bg-nero flex flex-col items-center justify-start">
                  <button
                    className="cursor-pointer py-[9px] px-5 bg-nero self-stretch rounded flex flex-row items-center justify-center border-[1px] border-solid border-aqua-deep"
                    onClick={onViewCurriculumButtonClick}
                  >
                    <div className="relative text-lg leading-[150%] font-semibold font-body-large-600 text-aqua-deep text-center inline-block max-h-[58px]">
                      View Curriculum
                    </div>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <section className="self-stretch bg-nero flex flex-col items-center justify-center p-5 gap-[20px] z-[1] text-center text-4xl text-black1 font-body-large-600 sm:pl-[5px] sm:pr-[5px] sm:box-border">
          <div className="self-stretch flex flex-col items-center justify-center pt-0 px-0 pb-[0.5px]">
            <div className="self-stretch relative leading-[120%] font-semibold sm:text-3xl">
              Coding Workshops
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-center justify-center p-[15px] gap-[15px] text-left text-sm sm:pl-[5px] sm:pr-[5px] sm:box-border">
            <div className="w-[350px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-lg bg-nero flex flex-col items-start justify-start p-2.5 box-border relative gap-[15px]">
              <img
                className="self-stretch relative max-w-full overflow-hidden h-[213px] shrink-0 object-cover z-[0]"
                alt=""
                src="/image31@2x.png"
              />
              <div className="self-stretch bg-nero flex flex-col items-start justify-start gap-[5px] z-[1]">
                <div className="self-stretch flex flex-col items-center justify-start pt-0 px-0 pb-[0.5px] text-2xl">
                  <div className="w-full relative leading-[150%] font-semibold inline-block max-w-[344px]">
                    Single Day Codeshops
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start text-base">
                  <div className="self-stretch relative leading-[150%]">
                    A perfect course for kids who want to test drive to coding
                    road.
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[5px]">
                  <div className="flex-1 flex flex-col items-start justify-start">
                    <div className="self-stretch relative leading-[120%] font-semibold">
                      Ages 8-18
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start">
                    <div className="self-stretch relative leading-[120%] font-semibold">
                      5+ Lessons
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start">
                    <div className="self-stretch relative leading-[120%] font-semibold">
                      10+ Activities
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-center justify-center pt-0 px-0 pb-2 text-center text-dodger-blue">
                  <div className="w-full relative leading-[150%] inline-block max-w-[384px]">
                    Don't let your child miss out to unlock their potential.
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-nero flex flex-col items-center justify-start gap-[15px] z-[2]">
                <button
                  className="cursor-pointer py-[9px] px-5 bg-nero self-stretch rounded box-border h-[41px] flex flex-row items-center justify-center border-[1px] border-solid border-aqua-deep"
                  onClick={onCoursesClick}
                >
                  <div className="flex-1 relative text-lg tracking-[-0.01em] leading-[20px] capitalize font-semibold font-inter text-aqua-deep text-center inline-block max-h-[58px]">
                    view course
                  </div>
                </button>
                <button
                  className="cursor-pointer py-[9px] px-5 bg-aqua-deep self-stretch rounded flex flex-row items-center justify-center border-[1px] border-solid border-nero"
                  onClick={onDownloadButtonClick}
                >
                  <div className="flex-1 relative text-lg tracking-[-0.01em] leading-[20px] capitalize font-semibold font-inter text-nero text-center inline-block max-h-[58px]">
                    Try a free class
                  </div>
                </button>
              </div>
              <img
                className="w-[100px] !m-[0] absolute top-[10px] left-[10px] h-[25px] overflow-hidden shrink-0 object-cover z-[3]"
                alt=""
                src="/bestsellingpng11@2x.png"
              />
            </div>
            <div className="w-[350px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-lg bg-nero flex flex-col items-start justify-start p-2.5 box-border relative gap-[15px]">
              <img
                className="self-stretch relative max-w-full overflow-hidden h-[213px] shrink-0 object-cover z-[0]"
                alt=""
                src="/image41@2x.png"
              />
              <div className="self-stretch bg-nero flex flex-col items-start justify-start gap-[5px] z-[1]">
                <div className="self-stretch flex flex-col items-center justify-start pt-0 px-0 pb-[0.5px] text-2xl">
                  <div className="w-full relative leading-[150%] font-semibold inline-block max-w-[344px]">
                    Multi Day codeshops
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start text-base">
                  <div className="self-stretch relative leading-[150%]">
                    A course for those who want to master the art of coding and
                    create a better future through code.
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[5px]">
                  <div className="flex-1 flex flex-col items-start justify-start">
                    <div className="self-stretch relative leading-[120%] font-semibold">
                      Ages 8-18
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start">
                    <div className="self-stretch relative leading-[120%] font-semibold">
                      10+ Lessons
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start">
                    <div className="self-stretch relative leading-[120%] font-semibold">
                      15+ Activities
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-center justify-center pt-0 px-0 pb-2 text-center text-dodger-blue">
                  <div className="w-full relative leading-[150%] inline-block max-w-[384px]">{`Don't let your child miss out to unlock their potential. `}</div>
                </div>
              </div>
              <div className="self-stretch bg-nero flex flex-col items-center justify-start gap-[15px] z-[2]">
                <button
                  className="cursor-pointer py-[9px] px-5 bg-nero self-stretch rounded box-border h-[41px] flex flex-row items-center justify-center border-[1px] border-solid border-aqua-deep"
                  onClick={onCoursesClick}
                >
                  <div className="flex-1 relative text-lg tracking-[-0.01em] leading-[20px] capitalize font-semibold font-inter text-aqua-deep text-center inline-block max-h-[58px]">
                    view course
                  </div>
                </button>
                <button
                  className="cursor-pointer py-[9px] px-5 bg-aqua-deep self-stretch rounded flex flex-row items-center justify-center border-[1px] border-solid border-nero"
                  onClick={onDownloadButtonClick}
                >
                  <div className="flex-1 relative text-lg tracking-[-0.01em] leading-[20px] capitalize font-semibold font-inter text-nero text-center inline-block max-h-[58px]">
                    Try a free class
                  </div>
                </button>
              </div>
              <img
                className="w-[100px] !m-[0] absolute top-[10px] left-[10px] h-[25px] overflow-hidden shrink-0 object-cover z-[3]"
                alt=""
                src="/bestsellingpng11@2x.png"
              />
            </div>
            <div className="w-[350px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-lg bg-nero flex flex-col items-start justify-start p-2.5 box-border relative gap-[15px]">
              <img
                className="self-stretch relative max-w-full overflow-hidden h-[213px] shrink-0 object-cover z-[0]"
                alt=""
                src="/image51@2x.png"
              />
              <div className="self-stretch bg-nero flex flex-col items-start justify-start gap-[5px] z-[1]">
                <div className="self-stretch flex flex-col items-center justify-start pt-0 px-0 pb-[0.5px] text-2xl">
                  <div className="w-full relative leading-[150%] font-semibold inline-block max-w-[344px]">
                    Week Long Codeshops
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start text-base">
                  <div className="self-stretch relative leading-[150%]">
                    A perfect course for kids who want to use coding to solve
                    real-world problems and create a better future.
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[5px]">
                  <div className="flex-1 flex flex-col items-start justify-start">
                    <div className="self-stretch relative leading-[120%] font-semibold">
                      Ages 8-18
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start">
                    <div className="self-stretch relative leading-[120%] font-semibold">
                      15+ Lessons
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start">
                    <div className="self-stretch relative leading-[120%] font-semibold">
                      20+ Activities
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-center justify-center pt-0 px-0 pb-2 text-center text-dodger-blue">
                  <div className="w-full relative leading-[150%] inline-block max-w-[384px]">
                    Don't let your child miss out to unlock their potential.
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-nero flex flex-col items-center justify-start gap-[15px] z-[2]">
                <button
                  className="cursor-pointer py-[9px] px-5 bg-nero self-stretch rounded box-border h-[41px] flex flex-row items-center justify-center border-[1px] border-solid border-aqua-deep"
                  onClick={onCoursesClick}
                >
                  <div className="flex-1 relative text-lg tracking-[-0.01em] leading-[20px] capitalize font-semibold font-inter text-aqua-deep text-center inline-block max-h-[58px]">
                    view course
                  </div>
                </button>
                <button
                  className="cursor-pointer py-[9px] px-5 bg-aqua-deep self-stretch rounded flex flex-row items-center justify-center border-[1px] border-solid border-nero"
                  onClick={onDownloadButtonClick}
                >
                  <div className="flex-1 relative text-lg tracking-[-0.01em] leading-[20px] capitalize font-semibold font-inter text-nero text-center inline-block max-h-[58px]">
                    Try a free class
                  </div>
                </button>
              </div>
              <img
                className="w-[100px] !m-[0] absolute top-[10px] left-[10px] h-[25px] overflow-hidden shrink-0 object-cover z-[3]"
                alt=""
                src="/bestsellingpng11@2x.png"
              />
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default CoursePage;
