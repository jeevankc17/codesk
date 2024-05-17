export interface PageMetadata {
    title: string;
    metaDescription: string;
  }
  
  export const getPageMetadata = (pathname: string): PageMetadata => {
    switch (pathname) {
      case "/":
        return { title: "Home - MyApp", metaDescription: "Welcome to the homepage of MyApp." };
      case "/coursepage":
        return { title: "Courses - MyApp", metaDescription: "Explore the courses offered by MyApp." };
      case "/curriculumbycoursepage":
        return { title: "Curriculum - MyApp", metaDescription: "View the curriculum for our courses." };
      case "/aboutuspage":
        return { title: "About Us - MyApp", metaDescription: "Learn more about MyApp." };
      case "/reviewpage":
        return { title: "Reviews - MyApp", metaDescription: "Read reviews from our students." };
      case "/commingsoonpage":
        return { title: "Coming Soon - MyApp", metaDescription: "Exciting new content is coming soon." };
      case "/partnershippage":
        return { title: "Partnerships - MyApp", metaDescription: "Explore partnership opportunities with MyApp." };
      case "/blogpage":
        return { title: "Blog - MyApp", metaDescription: "Read the latest articles from MyApp." };
      case "/projectpage":
        return { title: "Projects - MyApp", metaDescription: "Discover the projects our students are working on." };
      case "/whycodeskpage":
        return { title: "Why Codesk - MyApp", metaDescription: "Learn why you should choose Codesk." };
      case "/quizpage":
        return { title: "Quizzes - MyApp", metaDescription: "Take quizzes to test your knowledge." };
      case "/worksheetpage":
        return { title: "Worksheets - MyApp", metaDescription: "Complete worksheets to reinforce your learning." };
      case "/applyteacherpage":
        return { title: "Careers - MyApp", metaDescription: "Apply to become a teacher at MyApp." };
      case "/quizbycourseidpage":
        return { title: "Quiz by Course - MyApp", metaDescription: "Take quizzes based on the course content." };
      case "/competetionspage":
        return { title: "Competitions - MyApp", metaDescription: "Participate in our exciting competitions." };
      case "/hackathonscompetetionspage":
        return { title: "Hackathons - MyApp", metaDescription: "Join our hackathons and showcase your skills." };
      case "/projectscompetetionspage":
        return { title: "Project Competitions - MyApp", metaDescription: "Compete in our project-based competitions." };
      case "/builderscompetetionspage":
        return { title: "Builders Competitions - MyApp", metaDescription: "Showcase your building skills in our competitions." };
      case "/organizerscompetetionspage":
        return { title: "Organizers Competitions - MyApp", metaDescription: "Become an organizer for our competitions." };
      default:
        return { title: "MyApp", metaDescription: "MyApp - Your one-stop destination for learning and competitions." };
    }
  };
  
