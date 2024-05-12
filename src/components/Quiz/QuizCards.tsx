import { FunctionComponent, useState } from "react";
import QuizCard from "./QuizCard";

type QuizCourseItemsType = Array<{
  courseName: string;
  courseId: string;
  image: string;
}>;

const QuizCards: FunctionComponent = () => {
  const [quizCourseItems, setQuizCourseItems] = useState<QuizCourseItemsType>([
    {
      courseName: "Scratch Programming",
      courseId: "SP001",
      image:
        "https://uploads.scratch.mit.edu/get_image/project/946418682_480x360.png",
    },
    {
      courseName: "Thunkable Programming",
      courseId: "TP002",
      image:
        "https://uploads.scratch.mit.edu/get_image/project/9464186889_480x360.png",
    },
    {
      courseName: "Web Development",
      courseId: "WD003",
      image:
        "https://uploads.scratch.mit.edu/get_image/project/946418690_480x360.png",
    },
    {
      courseName: "Python Programming",
      courseId: "PP004",
      image:
        "https://uploads.scratch.mit.edu/get_image/project/946418685_480x360.png",
    },
    {
      courseName: "IoT with Scratch",
      courseId: "IS005",
      image:
        "https://uploads.scratch.mit.edu/get_image/project/946418686_480x360.png",
    },
    {
      courseName: "Roblox Programming",
      courseId: "RP006",
      image:
        "https://uploads.scratch.mit.edu/get_image/project/946418687_480x360.png",
    },
  ]);
  return (
    <div className="self-stretch flex flex-row flex-wrap items-center justify-center p-5 text-left text-5xl text-black1 font-body-xl-600 sm:pl-[5px] sm:pr-[5px] sm:box-border">
      {quizCourseItems.map((item, index) => (
        <QuizCard
          key={index}
          image={item.image}
          courseName={item.courseName}
          courseId={item.courseId}
        />
      ))}
    </div>
  );
};

export default QuizCards;
