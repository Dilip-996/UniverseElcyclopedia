export type PlanetId =
  | "mercury"
  | "venus"
  | "earth"
  | "mars"
  | "jupiter"
  | "saturn"
  | "uranus"
  | "neptune";

export type Planet = {
  id: PlanetId;
  name: string;
  nickname: string;
  description: string;
  distanceFromSun: string;
  distanceAu: number;
  dayLength: string;
  yearLength: string;
  moons: number;
  temperature: string;
  funFact: string;
  sizeVsEarth: string;
  diameterKm: number;
  gravity: number;
  color: string;
  glow: string;
  order: number;
};

export const planets: Planet[] = [
  {
    id: "mercury",
    name: "Mercury",
    nickname: "The Speedy Messenger",
    description:
      "Mercury is the smallest planet and the closest one to the Sun. It zips around so fast that a year there is only 88 Earth days!",
    distanceFromSun: "58 million km",
    distanceAu: 0.39,
    dayLength: "59 Earth days",
    yearLength: "88 Earth days",
    moons: 0,
    temperature: "-173°C to 427°C",
    funFact: "A year on Mercury is shorter than one Mercury day!",
    sizeVsEarth: "About 3 Mercurys could sit side-by-side across Earth.",
    diameterKm: 4879,
    gravity: 0.38,
    color: "#c4b5a0",
    glow: "rgba(196, 181, 160, 0.45)",
    order: 1,
  },
  {
    id: "venus",
    name: "Venus",
    nickname: "Earth's Cloudy Twin",
    description:
      "Venus is almost the same size as Earth, but it is wrapped in thick yellow clouds. It is the hottest planet of all — hotter than an oven!",
    distanceFromSun: "108 million km",
    distanceAu: 0.72,
    dayLength: "243 Earth days",
    yearLength: "225 Earth days",
    moons: 0,
    temperature: "465°C",
    funFact: "A day on Venus is longer than a year on Venus!",
    sizeVsEarth: "Venus is almost the same size as Earth.",
    diameterKm: 12104,
    gravity: 0.91,
    color: "#e8c07a",
    glow: "rgba(232, 192, 122, 0.5)",
    order: 2,
  },
  {
    id: "earth",
    name: "Earth",
    nickname: "Our Home Planet",
    description:
      "Earth is the only planet we know that has oceans, trees, animals, and kids like you. Its blue oceans and white clouds make it glow in space.",
    distanceFromSun: "150 million km",
    distanceAu: 1,
    dayLength: "24 hours",
    yearLength: "365.25 days",
    moons: 1,
    temperature: "15°C average",
    funFact: "Earth is the only planet we know with life — including you!",
    sizeVsEarth: "This is our home. Everything we know lives here.",
    diameterKm: 12742,
    gravity: 1,
    color: "#3b82c4",
    glow: "rgba(59, 130, 196, 0.55)",
    order: 3,
  },
  {
    id: "mars",
    name: "Mars",
    nickname: "The Red Planet",
    description:
      "Mars looks rusty red because its dirt is full of iron. It has giant volcanoes, deep canyons, and two tiny potato-shaped moons.",
    distanceFromSun: "228 million km",
    distanceAu: 1.52,
    dayLength: "24.6 hours",
    yearLength: "687 Earth days",
    moons: 2,
    temperature: "-65°C",
    funFact: "Mars has the biggest volcano in the solar system — Olympus Mons!",
    sizeVsEarth: "Mars is about half as wide as Earth.",
    diameterKm: 6779,
    gravity: 0.38,
    color: "#c45c3b",
    glow: "rgba(196, 92, 59, 0.5)",
    order: 4,
  },
  {
    id: "jupiter",
    name: "Jupiter",
    nickname: "The Giant King",
    description:
      "Jupiter is the biggest planet — a huge ball of swirling gas. Its Great Red Spot is a storm bigger than Earth that has been spinning for hundreds of years.",
    distanceFromSun: "778 million km",
    distanceAu: 5.2,
    dayLength: "10 hours",
    yearLength: "12 Earth years",
    moons: 95,
    temperature: "-110°C",
    funFact: "About 11 Earths could fit side-by-side across Jupiter!",
    sizeVsEarth: "More than 1,300 Earths could fit inside Jupiter.",
    diameterKm: 139820,
    gravity: 2.34,
    color: "#d4a574",
    glow: "rgba(212, 165, 116, 0.5)",
    order: 5,
  },
  {
    id: "saturn",
    name: "Saturn",
    nickname: "The Ringed Wonder",
    description:
      "Saturn is famous for its dazzling icy rings. They look solid from far away, but they are made of billions of chunks of ice and rock.",
    distanceFromSun: "1.4 billion km",
    distanceAu: 9.58,
    dayLength: "10.7 hours",
    yearLength: "29 Earth years",
    moons: 146,
    temperature: "-140°C",
    funFact: "Saturn would float in a giant bathtub — it is less dense than water!",
    sizeVsEarth: "About 9 Earths could line up across Saturn.",
    diameterKm: 116460,
    gravity: 1.06,
    color: "#e6d3a3",
    glow: "rgba(230, 211, 163, 0.5)",
    order: 6,
  },
  {
    id: "uranus",
    name: "Uranus",
    nickname: "The Sideways Roller",
    description:
      "Uranus is a pale blue-green ice giant that spins on its side — like a ball rolling around the Sun. Its tilt may have come from a giant crash long ago.",
    distanceFromSun: "2.9 billion km",
    distanceAu: 19.2,
    dayLength: "17 hours",
    yearLength: "84 Earth years",
    moons: 28,
    temperature: "-195°C",
    funFact: "Uranus spins on its side, like a rolling ball!",
    sizeVsEarth: "About 4 Earths could sit across Uranus.",
    diameterKm: 50724,
    gravity: 0.89,
    color: "#7ec8c8",
    glow: "rgba(126, 200, 200, 0.5)",
    order: 7,
  },
  {
    id: "neptune",
    name: "Neptune",
    nickname: "The Windy Blue Giant",
    description:
      "Neptune is the farthest planet from the Sun. It is a deep blue ice giant with the fastest winds in the solar system — faster than a jet plane!",
    distanceFromSun: "4.5 billion km",
    distanceAu: 30.05,
    dayLength: "16 hours",
    yearLength: "165 Earth years",
    moons: 16,
    temperature: "-200°C",
    funFact: "Neptune's winds can blow faster than a jet plane!",
    sizeVsEarth: "About 4 Earths could sit across Neptune.",
    diameterKm: 49244,
    gravity: 1.12,
    color: "#4169e1",
    glow: "rgba(65, 105, 225, 0.55)",
    order: 8,
  },
];

export function getPlanet(id: string) {
  return planets.find((planet) => planet.id === id);
}

export const compareMetrics = [
  { key: "diameterKm", label: "Size", unit: "km wide" },
  { key: "distanceAu", label: "Distance from the Sun", unit: "AU" },
  { key: "moons", label: "Number of moons", unit: "moons" },
  { key: "gravity", label: "Gravity vs Earth", unit: "× Earth" },
] as const;
