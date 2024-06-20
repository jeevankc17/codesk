import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomePage from "./components/pages/staticPages/HomePage/HomePage";
import CoursePage from "./components/pages/staticPages/CoursePage/CoursePage";
import CurriculumByCoursePage from "./components/pages/staticPages/CurriculumByCoursePage/CurriculumByCoursePage";
import AboutUsPage from "./components/pages/staticPages/AboutUsPage/AboutUsPage";
import ReviewPage from "./components/pages/staticPages/ReviewPage/ReviewPage";
import CommingSoonPage from "./components/pages/staticPages/CommingSoonPage/CommingSoonPage";
import PartnershipPage from "./components/pages/staticPages/PartnershipPage/PartnershipPage";
import BlogPage from "./components/pages/staticPages/BlogPage/BlogPage";
import ProjectPage from "./components/pages/staticPages/ProjectPage/ProjectPage";
import WhyCodeskPage from "./components/pages/staticPages/WhyCodeskPage/WhyCodeskPage";
import QuizPage from "./components/pages/staticPages/QuizPage/QuizPage";
import WorksheetPage from "./components/pages/staticPages/WorksheetPage/WorksheetPage";
import CarrerPage from "./components/pages/staticPages/CarrerPage/CarrerPage";
import QuizByCourseIDPage from "./components/pages/staticPages/QuizByCourseIDPage/QuizByCourseIDPage";
import CompetetionsPage from "./components/pages/staticPages/CompetetionsPage/CompetetionsPage";
import HackathonsCompetetionsPage from "./components/pages/staticPages/HackathonsCompetetionsPage/HackathonsCompetetionsPage";
import ProjectsCompetetionsPage from "./components/pages/staticPages/ProjectsCompetetionsPage/ProjectsCompetetionsPage";
import BuildersCompetetionsPage from "./components/pages/staticPages/BuildersCompetetionsPage/BuildersCompetetionsPage";
import OrganizersCompetetionsPage from "./components/pages/staticPages/OrganizersCompetetionsPage/OrganizersCompetetionsPage";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/coursepage":
        title = "";
        metaDescription = "";
        break;
      case "/curriculumbycoursepage":
        title = "";
        metaDescription = "";
        break;
      case "/aboutuspage":
        title = "";
        metaDescription = "";
        break;
      case "/reviewpage":
        title = "";
        metaDescription = "";
        break;
      case "/commingsoonpage":
        title = "";
        metaDescription = "";
        break;
      case "/partnershippage":
        title = "";
        metaDescription = "";
        break;
      case "/blogpage":
        title = "";
        metaDescription = "";
        break;
      case "/projectpage":
        title = "";
        metaDescription = "";
        break;
      case "/whycodeskpage":
        title = "";
        metaDescription = "";
        break;
      case "/quizpage":
        title = "";
        metaDescription = "";
        break;
      case "/worksheetpage":
        title = "";
        metaDescription = "";
        break;
      case "/applyteacherpage":
        title = "";
        metaDescription = "";
        break;
      case "/quizbycourseidpage":
        title = "";
        metaDescription = "";
        break;
      case "/competetionspage":
        title = "";
        metaDescription = "";
        break;
      case "/hackathonscompetetionspage":
        title = "";
        metaDescription = "";
        break;
      case "/projectscompetetionspage":
        title = "";
        metaDescription = "";
        break;
      case "/builderscompetetionspage":
        title = "";
        metaDescription = "";
        break;
      case "/organizerscompetetionspage":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/coursepage" element={<CoursePage />} />
      <Route
        path="/curriculumbycoursepage"
        element={<CurriculumByCoursePage />}
      />
      <Route path="/aboutuspage" element={<AboutUsPage />} />
      <Route path="/reviewpage" element={<ReviewPage />} />
      <Route path="/commingsoonpage" element={<CommingSoonPage />} />
      <Route path="/partnershippage" element={<PartnershipPage />} />
      <Route path="/blogpage" element={<BlogPage />} />
      <Route path="/projectpage" element={<ProjectPage />} />
      <Route path="/whycodeskpage" element={<WhyCodeskPage />} />
      <Route path="/quizpage" element={<QuizPage />} />
      <Route path="/worksheetpage" element={<WorksheetPage />} />
      <Route path="/applyteacherpage" element={<CarrerPage />} />
      <Route path="/quizbycourseidpage" element={<QuizByCourseIDPage />} />
      <Route path="/competetionspage" element={<CompetetionsPage />} />
      <Route
        path="/hackathonscompetetionspage"
        element={<HackathonsCompetetionsPage />}
      />
      <Route
        path="/projectscompetetionspage"
        element={<ProjectsCompetetionsPage />}
      />
      <Route
        path="/builderscompetetionspage"
        element={<BuildersCompetetionsPage />}
      />
      <Route
        path="/organizerscompetetionspage"
        element={<OrganizersCompetetionsPage />}
      />
    </Routes>
  );
}
export default App;