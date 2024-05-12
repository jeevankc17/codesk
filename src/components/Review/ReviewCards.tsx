import { FunctionComponent, useState } from "react";
import ReviewCard from "./ReviewCard";

type ReviewItemsType = Array<{
  identity: string;
  nameOfIdentity: string;
  review: string;
  image: string;
}>;

const ReviewCards: FunctionComponent = () => {
  const [reviewItems, setReviewItems] = useState<ReviewItemsType>([
    {
      identity: "Student of CoDesk",
      nameOfIdentity: "Nepali",
      review:
        "CoDesk is amazing! I love how it teaches me coding in such a fun and interactive way. The projects are super cool, and I've learned a lot while having fun!",
      image:
        "https://uploads.scratch.mit.edu/get_image/project/946480677_480x360.png",
    },
    {
      identity: "Student of CoDesk",
      nameOfIdentity: "Ramesh",
      review:
        "CoDesk has been a game-changer for me. It's made learning to code so much easier and enjoyable. I look forward to each lesson because I know I'll learn something new and exciting.",
      image:
        "https://uploads.scratch.mit.edu/get_image/project/946480678_480x360.png",
    },
    {
      identity: "Student of CoDesk",
      nameOfIdentity: "Priya",
      review:
        "CoDesk has sparked my interest in coding like never before. The platform is user-friendly, and the projects are engaging. I feel more confident in my coding skills with each project I complete.",
      image:
        "https://uploads.scratch.mit.edu/get_image/project/946480679_480x360.png",
    },
    {
      identity: "Student of CoDesk",
      nameOfIdentity: "Dipesh",
      review:
        "I'm so glad I found CoDesk! It's made coding less intimidating for me. The step-by-step instructions are really helpful, and I love seeing my projects come to life.",
      image:
        "https://uploads.scratch.mit.edu/get_image/project/946480680_480x360.png",
    },
    {
      identity: "Parent of CoDesk",
      nameOfIdentity: "Kiran",
      review:
        "As a parent, I couldn't be happier with CoDesk. It's a safe and educational environment for my child to learn coding. The progress my child has made since joining CoDesk is remarkable.",
      image:
        "https://uploads.scratch.mit.edu/get_image/project/946480681_480x360.png",
    },
    {
      identity: "Parent of CoDesk",
      nameOfIdentity: "Amit",
      review:
        "CoDesk has been a blessing for our family. It's not only teaching my child valuable coding skills but also critical thinking and problem-solving. I highly recommend it to other parents.",
      image:
        "https://uploads.scratch.mit.edu/get_image/project/946480682_480x360.png",
    },
    {
      identity: "Parent of CoDesk",
      nameOfIdentity: "Rajesh",
      review:
        "CoDesk has exceeded my expectations. It's refreshing to see my child so engaged and excited about learning. The platform is well-designed, and I appreciate the emphasis on creativity.",
      image:
        "https://uploads.scratch.mit.edu/get_image/project/946480683_480x360.png",
    },
    {
      identity: "Teacher of CoDesk",
      nameOfIdentity: "Sita",
      review:
        "CoDesk is a fantastic resource for educators. The curriculum is well-structured, and the platform provides ample opportunities for students to explore and experiment with code. It's been a valuable addition to my teaching toolkit.",
      image:
        "https://uploads.scratch.mit.edu/get_image/project/946480684_480x360.png",
    },
    {
      identity: "Teacher of CoDesk",
      nameOfIdentity: "Suman",
      review:
        "I've been using CoDesk in my classroom, and the results have been phenomenal. The platform makes it easy to track student progress and customize lessons to meet individual needs. It's made teaching coding more enjoyable for both me and my students.",
      image:
        "https://uploads.scratch.mit.edu/get_image/project/946480685_480x360.png",
    },
    {
      identity: "Teacher of CoDesk",
      nameOfIdentity: "Anita",
      review:
        "CoDesk has been a game-changer for my students. It's sparked their interest in coding and has led to some incredible projects. The support from the CoDesk team has been exceptional, and I appreciate the continuous updates and improvements to the platform.",
      image:
        "https://uploads.scratch.mit.edu/get_image/project/946480686_480x360.png",
    },
  ]);
  return (
    <div className="self-stretch flex flex-row flex-wrap items-center justify-center p-5 text-left text-lg text-footer-header font-body-medium-400 sm:pl-[5px] sm:pr-[5px] sm:box-border">
      {reviewItems.map((item, index) => (
        <ReviewCard
          key={index}
          image={item.image}
          nameOfIdentity={item.nameOfIdentity}
          identity={item.identity}
          review={item.review}
        />
      ))}
    </div>
  );
};

export default ReviewCards;
