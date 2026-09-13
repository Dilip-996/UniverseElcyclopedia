export type Mission = {
  id: string;
  name: string;
  year: string;
  destination: string;
  achievement: string;
  funFact: string;
  color: string;
};

export const missions: Mission[] = [
  {
    id: "apollo-11",
    name: "Apollo 11",
    year: "1969",
    destination: "Earth's Moon",
    achievement: "First humans walked on another world. Neil Armstrong and Buzz Aldrin left footprints in the lunar dust.",
    funFact: "The computer on Apollo 11 was weaker than a modern calculator!",
    color: "#e7e5e4",
  },
  {
    id: "voyager-1",
    name: "Voyager 1",
    year: "1977",
    destination: "Jupiter, Saturn, then interstellar space",
    achievement: "It flew past giant planets and became the first human-made object to leave our solar system.",
    funFact: "Voyager 1 carries a Golden Record with Earth sounds and pictures — a message in a bottle for the stars.",
    color: "#fbbf24",
  },
  {
    id: "voyager-2",
    name: "Voyager 2",
    year: "1977",
    destination: "Jupiter, Saturn, Uranus, and Neptune",
    achievement: "The only spacecraft to visit Uranus and Neptune up close.",
    funFact: "Voyager 2 is still sending whispers home from billions of kilometers away.",
    color: "#38bdf8",
  },
  {
    id: "hubble",
    name: "Hubble Space Telescope",
    year: "1990",
    destination: "Orbit around Earth",
    achievement: "Took jaw-dropping photos that changed how we see galaxies, stars, and nebulae.",
    funFact: "Hubble has traveled more than 4 billion miles while circling Earth — without ever leaving our planet's neighborhood.",
    color: "#818cf8",
  },
  {
    id: "jwst",
    name: "James Webb Space Telescope",
    year: "2021",
    destination: "A quiet spot 1.5 million km from Earth",
    achievement: "Sees infrared light so we can peek at baby stars and the first galaxies.",
    funFact: "Webb's golden mirrors would cover a tennis court if you unfolded them on Earth.",
    color: "#f59e0b",
  },
  {
    id: "rovers",
    name: "Mars Rovers",
    year: "1997–today",
    destination: "Mars",
    achievement: "Robot geologists like Curiosity and Perseverance drive around Mars, hunting for clues of ancient water.",
    funFact: "Perseverance brought a helicopter named Ingenuity — the first aircraft to fly on another planet!",
    color: "#fb7185",
  },
];
