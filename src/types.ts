export interface Project {
  id: number;
  name: string;
  edgyName: string;
  description: string | null;
  tags: string[];
  link: string;
  coverImg: string;
  logoImg?: string | null; // Make this optional
  numberSrc: string;
  hoverSrc: string;
  gradientColor?: string; // Make this optional
}

// Define the type for projectComponents
export type ProjectComponents = {
    [key: string]: {
      MainContent: React.ComponentType | null;
      SubContent: React.ComponentType | null;
    };
  };