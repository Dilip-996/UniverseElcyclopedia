import type { DirectoryTopic, EncyclopediaCategory } from "@/data/encyclopedia/types";

export const encyclopediaDirectory: Array<{
  id: EncyclopediaCategory;
  label: string;
  intro: string;
  topics: DirectoryTopic[];
}> = [
  {
    id: "solar-system",
    label: "Solar System",
    intro: "Our home star and the worlds that orbit it.",
    topics: [
      { title: "Sun", slug: "sun" },
      { title: "Mercury", slug: "mercury" },
      { title: "Venus", slug: "venus" },
      { title: "Earth", slug: "earth" },
      { title: "Moon", slug: "moon" },
      { title: "Mars", slug: "mars" },
      { title: "Jupiter", slug: "jupiter" },
      { title: "Saturn", slug: "saturn" },
      { title: "Uranus", slug: "uranus" },
      { title: "Neptune", slug: "neptune" },
      { title: "Dwarf planets", query: "dwarf" },
      { title: "Asteroids", query: "asteroid" },
      { title: "Comets", query: "comet" },
    ],
  },
  {
    id: "stars",
    label: "Stars",
    intro: "How suns are born, shine, and end.",
    topics: [
      { title: "What is a star?", slug: "stars" },
      { title: "How stars form", slug: "stars" },
      { title: "Red giants", slug: "stars" },
      { title: "White dwarfs", slug: "stars" },
      { title: "Supernovae", slug: "stars" },
      { title: "Neutron stars", slug: "stars" },
      { title: "Pulsars", query: "pulsar" },
      { title: "Binary stars", query: "binary" },
    ],
  },
  {
    id: "galaxies",
    label: "Galaxies",
    intro: "Cities of stars, near and unimaginably far.",
    topics: [
      { title: "Milky Way", slug: "milky-way" },
      { title: "Andromeda", query: "andromeda" },
      { title: "Spiral galaxies", slug: "milky-way" },
      { title: "Elliptical galaxies", query: "elliptical" },
      { title: "Irregular galaxies", query: "irregular" },
      { title: "Galaxy clusters", query: "cluster" },
    ],
  },
  {
    id: "deep-space",
    label: "Deep Space",
    intro: "Strange objects beyond our neighborhood.",
    topics: [
      { title: "Nebulae", slug: "nebulae" },
      { title: "Black holes", slug: "black-holes" },
      { title: "Quasars", query: "quasar" },
      { title: "Exoplanets", query: "exoplanet" },
      { title: "Dark matter", query: "dark matter" },
      { title: "Dark energy", query: "dark energy" },
      { title: "Cosmic microwave background", slug: "big-bang" },
    ],
  },
  {
    id: "universe",
    label: "The Universe",
    intro: "The biggest story science can tell.",
    topics: [
      { title: "Big Bang", slug: "big-bang" },
      { title: "Age of the Universe", slug: "big-bang" },
      { title: "Expansion of the Universe", slug: "big-bang" },
      { title: "Observable Universe", slug: "big-bang" },
      { title: "Cosmic scale", slug: "solar-system" },
    ],
  },
  {
    id: "exploration",
    label: "Space Exploration",
    intro: "The machines and people who go looking.",
    topics: [
      { title: "Apollo", slug: "apollo-11" },
      { title: "Voyager", query: "voyager" },
      { title: "Hubble", query: "hubble" },
      { title: "James Webb Space Telescope", slug: "james-webb-space-telescope" },
      { title: "Mars rovers", slug: "mars" },
      { title: "International Space Station", query: "station" },
    ],
  },
];
