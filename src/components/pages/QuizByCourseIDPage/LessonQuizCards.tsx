import { FunctionComponent, useState } from 'react';
import LessonQuizCard from './LessonQuizCard';

export type LessonQuizCardsType = {
  className?: string;
};

type QuizLessonItemsType = Array<{
  image: string;
  lessonName: string;
  courseName: string;
  lessonNumber: string;
  level: string;
  lessonId: string;
  numberQuestions: string;
}>;

const LessonQuizCards: FunctionComponent<LessonQuizCardsType> = ({
  className = '',
}) => {
  const [quizLessonItems, setQuizLessonItems] = useState<QuizLessonItemsType>([
    {
      image:
        'https://uploads.scratch.mit.edu/get_image/project/946418601_480x360.png',
      lessonName: 'Introduction to Scratch',
      courseName: 'Scratch Programming',
      lessonNumber: '1',
      level: 'Basic Level',
      lessonId: 'SP001L001',
      numberQuestions: '10',
    },
    {
      image:
        'https://uploads.scratch.mit.edu/get_image/project/946418602_480x360.png',
      lessonName: 'Direction Sense',
      courseName: 'Scratch Programming',
      lessonNumber: '2',
      level: 'Basic Level',
      lessonId: 'SP001L002',
      numberQuestions: '10',
    },
    {
      image:
        'https://uploads.scratch.mit.edu/get_image/project/946418603_480x360.png',
      lessonName: 'Moving and gliding',
      courseName: 'Scratch Programming',
      lessonNumber: '3',
      level: 'Basic Level',
      lessonId: 'SP001L003',
      numberQuestions: '10',
    },
    {
      image:
        'https://uploads.scratch.mit.edu/get_image/project/946418604_480x360.png',
      lessonName: 'Tour the Solar System',
      courseName: 'Scratch Programming',
      lessonNumber: '4',
      level: 'Basic Level',
      lessonId: 'SP001L004',
      numberQuestions: '10',
    },
    {
      image:
        'https://uploads.scratch.mit.edu/get_image/project/946418605_480x360.png',
      lessonName: 'Mario Dash',
      courseName: 'Scratch Programming',
      lessonNumber: '5',
      level: 'Basic Level',
      lessonId: 'SP001L005',
      numberQuestions: '10',
    },
    {
      image:
        'https://uploads.scratch.mit.edu/get_image/project/946418606_480x360.png',
      lessonName: 'Drawing with Pen',
      courseName: 'Scratch Programming',
      lessonNumber: '6',
      level: 'Basic Level',
      lessonId: 'SP001L006',
      numberQuestions: '10',
    },
    {
      image:
        'https://uploads.scratch.mit.edu/get_image/project/946418607_480x360.png',
      lessonName: 'Transitions',
      courseName: 'Scratch Programming',
      lessonNumber: '7',
      level: 'Basic Level',
      lessonId: 'SP001L007',
      numberQuestions: '10',
    },
    {
      image:
        'https://uploads.scratch.mit.edu/get_image/project/946418608_480x360.png',
      lessonName: 'Conditional statements and Loops',
      courseName: 'Scratch Programming',
      lessonNumber: '8',
      level: 'Basic Level',
      lessonId: 'SP001L008',
      numberQuestions: '10',
    },
    {
      image:
        'https://uploads.scratch.mit.edu/get_image/project/946418609_480x360.png',
      lessonName: 'Catch Game',
      courseName: 'Scratch Programming',
      lessonNumber: '9',
      level: 'Basic Level',
      lessonId: 'SP001L009',
      numberQuestions: '10',
    },
    {
      image:
        'https://uploads.scratch.mit.edu/get_image/project/946418610_480x360.png',
      lessonName: 'DJ Cat',
      courseName: 'Scratch Programming',
      lessonNumber: '10',
      level: 'Basic Level',
      lessonId: 'SP001L010',
      numberQuestions: '10',
    },
    {
      image:
        'https://uploads.scratch.mit.edu/get_image/project/946418611_480x360.png',
      lessonName: 'Interlink Characters',
      courseName: 'Scratch Programming',
      lessonNumber: '11',
      level: 'Basic Level',
      lessonId: 'SP001L011',
      numberQuestions: '10',
    },
    {
      image:
        'https://uploads.scratch.mit.edu/get_image/project/946418612_480x360.png',
      lessonName: 'Create a quiz',
      courseName: 'Scratch Programming',
      lessonNumber: '12',
      level: 'Basic Level',
      lessonId: 'SP001L012',
      numberQuestions: '10',
    },
    {
      image:
        'https://uploads.scratch.mit.edu/get_image/project/946418613_480x360.png',
      lessonName: 'Snake and Food',
      courseName: 'Scratch Programming',
      lessonNumber: '13',
      level: 'Intermediate Level',
      lessonId: 'SP001L013',
      numberQuestions: '10',
    },
    {
      image:
        'https://uploads.scratch.mit.edu/get_image/project/946418614_480x360.png',
      lessonName: 'Integer game',
      courseName: 'Scratch Programming',
      lessonNumber: '14',
      level: 'Intermediate Level',
      lessonId: 'SP001L014',
      numberQuestions: '10',
    },
    {
      image:
        'https://uploads.scratch.mit.edu/get_image/project/946418615_480x360.png',
      lessonName: 'Fundamentals of game building',
      courseName: 'Scratch Programming',
      lessonNumber: '15',
      level: 'Intermediate Level',
      lessonId: 'SP001L015',
      numberQuestions: '10',
    },
    {
      image:
        'https://uploads.scratch.mit.edu/get_image/project/946418616_480x360.png',
      lessonName: 'Car Game',
      courseName: 'Scratch Programming',
      lessonNumber: '16',
      level: 'Intermediate Level',
      lessonId: 'SP001L016',
      numberQuestions: '10',
    },
    {
      image:
        'https://uploads.scratch.mit.edu/get_image/project/946418617_480x360.png',
      lessonName: 'Hungry Casey I',
      courseName: 'Scratch Programming',
      lessonNumber: '17',
      level: 'Intermediate Level',
      lessonId: 'SP001L017',
      numberQuestions: '10',
    },
    {
      image:
        'https://uploads.scratch.mit.edu/get_image/project/946418618_480x360.png',
      lessonName: 'Hungry Casey II',
      courseName: 'Scratch Programming',
      lessonNumber: '18',
      level: 'Intermediate Level',
      lessonId: 'SP001L018',
      numberQuestions: '10',
    },
    {
      image:
        'https://uploads.scratch.mit.edu/get_image/project/946418619_480x360.png',
      lessonName: 'Build your microscope',
      courseName: 'Scratch Programming',
      lessonNumber: '19',
      level: 'Intermediate Level',
      lessonId: 'SP001L019',
      numberQuestions: '10',
    },
    {
      image:
        'https://uploads.scratch.mit.edu/get_image/project/946418620_480x360.png',
      lessonName: 'My AI friend GIGA',
      courseName: 'Scratch Programming',
      lessonNumber: '20',
      level: 'Intermediate Level',
      lessonId: 'SP001L020',
      numberQuestions: '10',
    },
    {
      image:
        'https://uploads.scratch.mit.edu/get_image/project/946418621_480x360.png',
      lessonName: 'Pacman I',
      courseName: 'Scratch Programming',
      lessonNumber: '21',
      level: 'Intermediate Level',
      lessonId: 'SP001L021',
      numberQuestions: '10',
    },
    {
      image:
        'https://uploads.scratch.mit.edu/get_image/project/946418622_480x360.png',
      lessonName: 'Pacman II',
      courseName: 'Scratch Programming',
      lessonNumber: '22',
      level: 'Intermediate Level',
      lessonId: 'SP001L022',
      numberQuestions: '10',
    },
    {
      image:
        'https://uploads.scratch.mit.edu/get_image/project/946418623_480x360.png',
      lessonName: 'Paint I',
      courseName: 'Scratch Programming',
      lessonNumber: '23',
      level: 'Intermediate Level',
      lessonId: 'SP001L023',
      numberQuestions: '10',
    },
    {
      image:
        'https://uploads.scratch.mit.edu/get_image/project/946418624_480x360.png',
      lessonName: 'Paint II',
      courseName: 'Scratch Programming',
      lessonNumber: '24',
      level: 'Intermediate Level',
      lessonId: 'SP001L024',
      numberQuestions: '10',
    },
    {
      image:
        'https://uploads.scratch.mit.edu/get_image/project/946418625_480x360.png',
      lessonName: 'Introduction to Artificial Intelligence',
      courseName: 'Scratch Programming',
      lessonNumber: '25',
      level: 'Advanced Level',
      lessonId: 'SP001L025',
      numberQuestions: '10',
    },
    {
      image:
        'https://uploads.scratch.mit.edu/get_image/project/946418626_480x360.png',
      lessonName: 'Types of Machine Learning',
      courseName: 'Scratch Programming',
      lessonNumber: '26',
      level: 'Advanced Level',
      lessonId: 'SP001L026',
      numberQuestions: '10',
    },
    {
      image:
        'https://uploads.scratch.mit.edu/get_image/project/946418627_480x360.png',
      lessonName: 'Application Programming Interface',
      courseName: 'Scratch Programming',
      lessonNumber: '27',
      level: 'Advanced Level',
      lessonId: 'SP001L027',
      numberQuestions: '10',
    },
    {
      image:
        'https://uploads.scratch.mit.edu/get_image/project/946418628_480x360.png',
      lessonName: 'Introduction to Machine Learning',
      courseName: 'Scratch Programming',
      lessonNumber: '28',
      level: 'Advanced Level',
      lessonId: 'SP001L028',
      numberQuestions: '10',
    },
    {
      image:
        'https://uploads.scratch.mit.edu/get_image/project/946418629_480x360.png',
      lessonName: 'Deep Learning',
      courseName: 'Scratch Programming',
      lessonNumber: '29',
      level: 'Advanced Level',
      lessonId: 'SP001L029',
      numberQuestions: '10',
    },
    {
      image:
        'https://uploads.scratch.mit.edu/get_image/project/946418630_480x360.png',
      lessonName: 'Image classification',
      courseName: 'Scratch Programming',
      lessonNumber: '30',
      level: 'Advanced Level',
      lessonId: 'SP001L030',
      numberQuestions: '10',
    },
    {
      image:
        'https://uploads.scratch.mit.edu/get_image/project/946418631_480x360.png',
      lessonName: 'Speech Recognition',
      courseName: 'Scratch Programming',
      lessonNumber: '31',
      level: 'Advanced Level',
      lessonId: 'SP001L031',
      numberQuestions: '10',
    },
    {
      image:
        'https://uploads.scratch.mit.edu/get_image/project/946418632_480x360.png',
      lessonName: 'Supervised learning',
      courseName: 'Scratch Programming',
      lessonNumber: '32',
      level: 'Advanced Level',
      lessonId: 'SP001L032',
      numberQuestions: '10',
    },
    {
      image:
        'https://uploads.scratch.mit.edu/get_image/project/946418633_480x360.png',
      lessonName: 'Create Riddles',
      courseName: 'Scratch Programming',
      lessonNumber: '33',
      level: 'Advanced Level',
      lessonId: 'SP001L033',
      numberQuestions: '10',
    },
    {
      image:
        'https://uploads.scratch.mit.edu/get_image/project/946418634_480x360.png',
      lessonName: 'Overfitting',
      courseName: 'Scratch Programming',
      lessonNumber: '34',
      level: 'Advanced Level',
      lessonId: 'SP001L034',
      numberQuestions: '10',
    },
    {
      image:
        'https://uploads.scratch.mit.edu/get_image/project/946418635_480x360.png',
      lessonName: 'Neural Networks I',
      courseName: 'Scratch Programming',
      lessonNumber: '35',
      level: 'Advanced Level',
      lessonId: 'SP001L035',
      numberQuestions: '10',
    },
    {
      image:
        'https://uploads.scratch.mit.edu/get_image/project/946418636_480x360.png',
      lessonName: 'Rock Paper Scissors Game',
      courseName: 'Scratch Programming',
      lessonNumber: '36',
      level: 'Advanced Level',
      lessonId: 'SP001L036',
      numberQuestions: '10',
    },
  ]);
  return (
    <div
      className={`self-stretch flex flex-row flex-wrap items-center justify-center p-5 text-left text-2xl text-black1 font-body-large-600 sm:pl-[5px] sm:pr-[5px] sm:box-border ${className}`}
    >
      {quizLessonItems.map((item, index) => (
        <LessonQuizCard
          key={index}
          lessonName={item.lessonName}
          courseName={item.courseName}
          lessonNumber={item.lessonNumber}
          numberQuestions={item.numberQuestions}
          level={item.level}
          lessonId={item.lessonId}
        />
      ))}
    </div>
  );
};

export default LessonQuizCards;
