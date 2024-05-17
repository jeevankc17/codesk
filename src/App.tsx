import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import CompetetionsPage from "./pages/CompetetionsPage";
import CoursePage from "./pages/CoursePage";
import CurriculumByCoursePage from "./pages/CurriculumByCoursePage";
import AboutUsPage from "./pages/AboutUsPage";
import ReviewPage from "./pages/ReviewPage";
import CommingSoonPage from "./pages/CommingSoonPage";
import PartnershipPage from "./pages/PartnershipPage";
import BlogPage from "./pages/BlogPage";
import ProjectPage from "./pages/ProjectPage";
import WhyCodeskPage from "./pages/WhyCodeskPage";
import QuizPage from "./pages/QuizPage";
import WorksheetPage from "./pages/WorksheetPage";
import CarrerPage from "./pages/CarrerPage";
import QuizByCourseIDPage from "./pages/QuizByCourseIDPage";
import HackathonsCompetetionsPage from "./pages/HackathonsCompetetionsPage";
import ProjectsCompetetionsPage from "./pages/ProjectsCompetetionsPage";
import BuildersCompetetionsPage from "./pages/BuildersCompetetionsPage";
import OrganizersCompetetionsPage from "./pages/OrganizersCompetetionsPage";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    window.scrollTo(0, 0);
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
      case "/competetionspage":
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
      <Route path="/competetionspage" element={<CompetetionsPage />} />
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
