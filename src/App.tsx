import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './components/pages/HomePage/HomePage';
import CoursePage from './components/pages/CoursePage/CoursePage';
import CompetetionsPage from './components/pages/CompetetionsPage/CompetetionsPage';
import CurriculumByCoursePage from './components/pages/CurriculumByCoursePage/CurriculumByCoursePage';
import AboutUsPage from './components/pages/AboutUsPage/AboutUsPage';
import ReviewPage from './components/pages/ReviewPage/ReviewPage';
import CommingSoonPage from './components/pages/CommingSoonPage/CommingSoonPage';
import PartnershipPage from './components/pages/PartnershipPage/PartnershipPage';
import BlogPage from './components/pages/BlogPage/BlogPage';
import ProjectPage from './components/pages/ProjectPage/ProjectPage';
import WhyCodeskPage from './components/pages/WhyCodeskPage/WhyCodeskPage';
import QuizPage from './components/pages/QuizPage/QuizPage';
import WorksheetPage from './components/pages/WorksheetPage/WorksheetPage';
import CarrerPage from './components/pages/CarrerPage/CarrerPage';
import QuizByCourseIDPage from './components/pages/QuizByCourseIDPage/QuizByCourseIDPage';
import Organizers from './components/pages/CompetetionsPage/Organizers/Organizers';
import Hackathons from './components/pages/CompetetionsPage/Hackathons/Hackathons';
import Projects from './components/pages/CompetetionsPage/Projects/Projects';
import Builders from './components/pages/CompetetionsPage/Builders/Builders';
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";

const routes = [
  {
    path: '/',
    component: <HomePage />,
    title: "Codesk Innovations | Nepal's #1 Coding Platform",
    metaDescription:
      "Nepal's first-ever low-code programming platform. Learn coding, robotics, VR/AR, and more. Perfect for kids and beginners.",
  },
  {
    path: '/coursepage',
    component: <CoursePage />,
    title: 'Courses | Codesk Innovations',
    metaDescription:
      "Nepal's most comprehensive coding courses. From basic programming to advanced robotics and AR/VR development.",
  },
  {
    path: '/competetionspage',
    component: <CompetetionsPage />,
    title: 'Competitions | Codesk Innovations',
    metaDescription:
      "Nepal's largest coding competitions. Showcase your skills in programming, robotics, and emerging technologies.",
  },
  {
    path: '/curriculumbycoursepage',
    component: <CurriculumByCoursePage />,
    title: 'Course Curriculum | Codesk Innovations',
    metaDescription:
      'Industry-aligned curriculum designed for Nepali students. Learn programming, AI, robotics, and more through hands-on projects.',
  },
  {
    path: '/aboutuspage',
    component: <AboutUsPage />,
    title: 'About Us | Codesk Innovations',
    metaDescription:
      "Pioneer in Nepal's coding education. Transforming tech education through innovative low-code learning and practical skills development.",
  },
  {
    path: 'competetions/hackathons',
    component: <Hackathons />,
    title: 'Hackathons | Codesk Innovations',
    metaDescription:
      "Participate in Nepal's biggest tech hackathons. Build innovative solutions using coding, robotics, and emerging technologies.",
  },
  {
    path: 'competetions/projects',
    component: <Projects />,
    title: 'Project Competitions | Codesk Innovations',
    metaDescription:
      "Nepal's premier platform for showcasing tech projects. From basic coding to advanced robotics and VR/AR implementations.",
  },
  {
    path: 'competetions/builders',
    component: <Builders />,
    title: 'Builders Competition | Codesk Innovations',
    metaDescription:
      'Build the future of Nepal through code. Join our builders community in creating innovative tech solutions.',
  },
  {
    path: 'competetions/organizers',
    component: <Organizers />,
    title: 'Organizers | Codesk Innovations',
    metaDescription:
      "Partner with Nepal's leading coding platform. Organize impactful tech events and competitions for the next generation.",
  },
  {
    path: '/reviewpage',
    component: <ReviewPage />,
    title: 'Reviews | Codesk Innovations',
    metaDescription:
      'See how Codesk is transforming tech education in Nepal. Read success stories from our students and partners.',
  },
  {
    path: '/commingsoonpage',
    component: <CommingSoonPage />,
    title: 'Coming Soon | Codesk Innovations',
    metaDescription:
      "Exciting new features coming to Nepal's #1 coding platform. Advanced robotics, AR/VR courses, and more.",
  },
  {
    path: '/partnershippage',
    component: <PartnershipPage />,
    title: 'Partnerships | Codesk Innovations',
    metaDescription:
      "Join forces with Nepal's leading tech education platform. Partner in revolutionizing coding and robotics education.",
  },
  {
    path: '/quizpage',
    component: <QuizPage />,
    title: 'Blog | Codesk Innovations',
    metaDescription:
      'Interactive coding and robotics quizzes designed for Nepali students. Test your skills in programming and emerging technologies.',
  },
  {
    path: '/projectpage',
    component: <ProjectPage />,
    title: 'Projects | Codesk Innovations',
    metaDescription:
      'Discover innovative projects built by Nepali students. From simple apps to complex robotics and VR/AR solutions.',
  },
  {
    path: '/whycodeskpage',
    component: <WhyCodeskPage />,
    title: "Why Codesk Innovations | Nepal's Premier Coding Platform",
    metaDescription:
      'First-ever low-code platform in Nepal offering comprehensive tech education. Learn coding, robotics, VR/AR in an innovative way.',
  },
  {
    path: '/worksheetpage',
    component: <WorksheetPage />,
    title: 'Worksheets | Codesk Innovations',
    metaDescription:
      'Practical worksheets for hands-on learning. Master coding, robotics, and VR/AR through guided exercises.',
  },
  {
    path: '/applyteacherpage',
    component: <CarrerPage />,
    title: 'Teaching Careers | Codesk Innovations',
    metaDescription:
      "Join Nepal's leading coding education team. Help shape the future of tech education through innovative teaching methods.",
  },
  {
    path: '/quizbycourseidpage',
    component: <QuizByCourseIDPage />,
    title: 'Course Quizzes | Codesk Innovations',
    metaDescription:
      'Comprehensive course assessments for Nepali students. Evaluate your progress in coding, robotics, and emerging technologies.',
  },
];

// ScrollToTop component
const ScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [window.location.pathname]);

  return null;
};

function App() {
  console.log('App component rendering');
  const location = useLocation();

  // Add protected route metadata
  const protectedRoutes = {
    '/blogpage': {
      title: 'Blog | Codesk Innovations',
      metaDescription: 'Latest insights on coding, robotics, and tech education in Nepal. Stay updated with industry trends and success stories.'
    }
  };

  // Update metadata when route changes
  useEffect(() => {
    // Check both regular and protected routes
    const currentRoute = routes.find(
      (route) => route.path === location.pathname
    ) || protectedRoutes[location.pathname as keyof typeof protectedRoutes];

    if (currentRoute) {
      document.title = currentRoute.title;

      // Update meta description
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      ) as HTMLMetaElement;
      if (metaDescriptionTag) {
        metaDescriptionTag.content = currentRoute.metaDescription;
      } else {
        const newMetaTag = document.createElement('meta');
        newMetaTag.name = 'description';
        newMetaTag.content = currentRoute.metaDescription;
        document.head.appendChild(newMetaTag);
      }
    }
  }, [location.pathname]);

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route
          path="/blogpage"
          element={
            <>
              <SignedIn>
                <BlogPage />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />
        {routes.map(({ path, component }) => (
          <Route key={path} path={path} element={component} />
        ))}
      </Routes>
    </>
  );
}

export default App;
