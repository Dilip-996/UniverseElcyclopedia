export type QuizQuestion = {
  id: string;
  category: "planets" | "stars" | "solar-system" | "galaxies" | "missions";
  question: string;
  options: string[];
  answer: number;
  explanation: string;
};

export const quizQuestions: QuizQuestion[] = [
  {
    id: "q1",
    category: "planets",
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Mercury"],
    answer: 1,
    explanation: "Mars looks rusty red because its dirt is full of iron — like a giant rusty bicycle!",
  },
  {
    id: "q2",
    category: "solar-system",
    question: "What sits in the center of our solar system?",
    options: ["Earth", "The Moon", "The Sun", "Jupiter"],
    answer: 2,
    explanation: "The Sun is our star. Its gravity holds the planets in their orbits like a cosmic merry-go-round.",
  },
  {
    id: "q3",
    category: "planets",
    question: "Which planet has the most famous rings?",
    options: ["Neptune", "Earth", "Saturn", "Mars"],
    answer: 2,
    explanation: "Saturn's icy rings look like a glowing hula hoop. Other planets have rings, but Saturn's are the show-offs.",
  },
  {
    id: "q4",
    category: "stars",
    question: "Why do some stars look blue and others look red?",
    options: [
      "Blue stars are hotter",
      "Red stars are closer",
      "Blue stars are made of water",
      "It is just a trick of the eye",
    ],
    answer: 0,
    explanation: "Hot stars glow blue-white. Cooler stars glow orange or red — like a stove burner on different settings.",
  },
  {
    id: "q5",
    category: "galaxies",
    question: "What kind of galaxy is the Milky Way?",
    options: ["Elliptical", "Spiral", "Irregular", "Square"],
    answer: 1,
    explanation: "The Milky Way is a barred spiral — a pinwheel of stars with a long bar through the middle.",
  },
  {
    id: "q6",
    category: "missions",
    question: "Who were the first humans to walk on the Moon?",
    options: ["Apollo 11 astronauts", "Mars rover drivers", "Voyager scientists", "Hubble engineers"],
    answer: 0,
    explanation: "In 1969, Neil Armstrong and Buzz Aldrin stepped onto the Moon during the Apollo 11 mission.",
  },
  {
    id: "q7",
    category: "planets",
    question: "About how many Earths could line up across Jupiter?",
    options: ["2", "11", "50", "100"],
    answer: 1,
    explanation: "Jupiter is enormous. About 11 Earths could sit side-by-side across its wide middle!",
  },
  {
    id: "q8",
    category: "stars",
    question: "What do we call a giant exploding star?",
    options: ["Asteroid", "Comet", "Supernova", "Meteor"],
    answer: 2,
    explanation: "A supernova is a star's spectacular goodbye. It can shine brighter than a whole galaxy for a little while.",
  },
  {
    id: "q9",
    category: "solar-system",
    question: "Which planet is closest to the Sun?",
    options: ["Venus", "Earth", "Mercury", "Mars"],
    answer: 2,
    explanation: "Tiny Mercury is the innermost planet. It races around the Sun in just 88 Earth days.",
  },
  {
    id: "q10",
    category: "missions",
    question: "Which spacecraft has left our solar system?",
    options: ["Apollo 11", "Hubble", "Voyager 1", "Ingenuity"],
    answer: 2,
    explanation: "Voyager 1 flew past the giant planets and kept going — it is now in interstellar space.",
  },
];

export const quizRanks = [
  { min: 9, title: "Galaxy Genius", message: "You could navigate the stars with your eyes closed!" },
  { min: 7, title: "Planet Pro", message: "The solar system high-fives you. Amazing work!" },
  { min: 4, title: "Cosmic Explorer", message: "You are on your way. Keep exploring the universe!" },
  { min: 0, title: "Star Cadet", message: "Every astronaut starts somewhere. Try again and level up!" },
];
