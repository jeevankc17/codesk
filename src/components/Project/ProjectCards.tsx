import { FunctionComponent, useState } from "react";
import ProjectCard from "./ProjectCard";

type CardItemsType = Array<{
  nameStudent: string;
  grade: string;
  courseName: string;
  projectName: string;
  projectId: string;
  coverImage: string;
  profileImage: string;
}>;

const ProjectCards: FunctionComponent = () => {
  const [cardItems, setCardItems] = useState<CardItemsType>([
    {
      nameStudent: "Aarav",
      grade: "8",
      courseName: "Python",
      projectName: "Python Game Development",
      projectId: "P001",
      coverImage:
        "https://uploads.scratch.mit.edu/get_image/project/946418670_480x360.png",
      profileImage:
        "https://uploads.scratch.mit.edu/get_image/project/946418671_480x360.png",
    },
    {
      nameStudent: "Neha",
      grade: "9",
      courseName: "Scratch",
      projectName: "Interactive Storytelling",
      projectId: "S002",
      coverImage:
        "https://uploads.scratch.mit.edu/get_image/project/946418672_480x360.png",
      profileImage:
        "https://uploads.scratch.mit.edu/get_image/project/946418673_480x360.png",
    },
    {
      nameStudent: "Rohan",
      grade: "7",
      courseName: "Roblox",
      projectName: "Game Development in Roblox",
      projectId: "R003",
      coverImage:
        "https://uploads.scratch.mit.edu/get_image/project/946418674_480x360.png",
      profileImage:
        "https://uploads.scratch.mit.edu/get_image/project/946418675_480x360.png",
    },
    {
      nameStudent: "Priya",
      grade: "8",
      courseName: "Thunkable",
      projectName: "App Development with Thunkable",
      projectId: "T004",
      coverImage:
        "https://uploads.scratch.mit.edu/get_image/project/946418676_480x360.png",
      profileImage:
        "https://uploads.scratch.mit.edu/get_image/project/946418677_480x360.png",
    },
    {
      nameStudent: "Arjun",
      grade: "10",
      courseName: "Python",
      projectName: "Data Analysis with Python",
      projectId: "P005",
      coverImage:
        "https://uploads.scratch.mit.edu/get_image/project/946418678_480x360.png",
      profileImage:
        "https://uploads.scratch.mit.edu/get_image/project/946418679_480x360.png",
    },
    {
      nameStudent: "Sneha",
      grade: "6",
      courseName: "Roblox",
      projectName: "Game Design in Roblox Studio",
      projectId: "R006",
      coverImage:
        "https://uploads.scratch.mit.edu/get_image/project/946418680_480x360.png",
      profileImage:
        "https://uploads.scratch.mit.edu/get_image/project/946418681_480x360.png",
    },
    {
      nameStudent: "Aryan",
      grade: "7",
      courseName: "Scratch",
      projectName: "Game Development in Scratch",
      projectId: "S007",
      coverImage:
        "https://uploads.scratch.mit.edu/get_image/project/946418682_480x360.png",
      profileImage:
        "https://uploads.scratch.mit.edu/get_image/project/946418683_480x360.png",
    },
    {
      nameStudent: "Isha",
      grade: "9",
      courseName: "Python",
      projectName: "Web Development with Flask",
      projectId: "P008",
      coverImage:
        "https://uploads.scratch.mit.edu/get_image/project/946418684_480x360.png",
      profileImage:
        "https://uploads.scratch.mit.edu/get_image/project/946418685_480x360.png",
    },
    {
      nameStudent: "Rahul",
      grade: "7",
      courseName: "Thunkable",
      projectName: "Mobile App Development",
      projectId: "T009",
      coverImage:
        "https://uploads.scratch.mit.edu/get_image/project/946418686_480x360.png",
      profileImage:
        "https://uploads.scratch.mit.edu/get_image/project/946418687_480x360.png",
    },
    {
      nameStudent: "Simran",
      grade: "8",
      courseName: "Roblox",
      projectName: "Scripting in Roblox Studio",
      projectId: "R010",
      coverImage:
        "https://uploads.scratch.mit.edu/get_image/project/946418688_480x360.png",
      profileImage:
        "https://uploads.scratch.mit.edu/get_image/project/946418689_480x360.png",
    },
  ]);
  return (
    <div className="self-stretch flex flex-row flex-wrap items-center justify-center p-5 text-left text-5xl text-black font-body-xl-600 sm:pl-[5px] sm:pr-[5px] sm:box-border">
      {cardItems.map((item, index) => (
        <ProjectCard
          key={index}
          coverImage={item.coverImage}
          nameStudent={item.nameStudent}
          courseName={item.courseName}
          projectName={item.projectName}
          projectId={item.projectId}
          profileImage={item.profileImage}
          grade={item.grade}
        />
      ))}
    </div>
  );
};

export default ProjectCards;
