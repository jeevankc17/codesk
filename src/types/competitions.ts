export interface Builder {
  id: number;
  name: string;
  avatar: string;
  hackathonsAttended: number;
  projectsCompleted: number;
  prizesWon: number;
}

export interface Hackathon {
  id: number;
  title: string;
  hostedBy: string;
  teamSize: number;
  label: string;
  theme: string;
  status: 'open' | 'upcoming' | 'completed';
  image: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  buildBy: string;
  buildAt: string;
  technologies: string[];
}

export interface Organizer {
  id: number;
  name: string;
  logo: string;
  hackathonsOrganized: number;
  projectsSubmitted: number;
  prizeWorth: number;
} 