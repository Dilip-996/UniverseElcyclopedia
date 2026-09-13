import type { EncyclopediaEntry } from "@/data/encyclopedia/types";

export const explorationEntries: EncyclopediaEntry[] = [
  {
    slug: "james-webb-space-telescope",
    title: "James Webb Space Telescope",
    category: "exploration",
    shortDescription: "A golden infrared observatory that looks back toward the first galaxies.",
    intro: "The James Webb Space Telescope, or Webb, is a space observatory designed to see infrared light — heat-glow that can slip through dust and travel from the early universe.",
    visual: "mission",
    featured: true,
    popular: true,
    embed: "missions",
    quizLink: true,
    quickFacts: [
      { label: "Launched", value: "December 25, 2021" },
      { label: "Type", value: "Infrared space telescope" },
      { label: "Mirror", value: "6.5 meters across, gold-coated" },
      { label: "Location", value: "Near L2, 1.5 million km from Earth" },
      { label: "Partners", value: "NASA, ESA, CSA" },
      { label: "Named for", value: "James E. Webb, a NASA administrator" },
    ],
    sections: [
      {
        id: "overview",
        title: "What is it?",
        paragraphs: [
          "Webb is a telescope the size of a tennis court when its sunshield is open. Eighteen gold hexagons fit together to make one large mirror.",
          "Gold is not for show. A thin gold coating reflects infrared light especially well. Infrared lets Webb see baby stars still in their dusty blankets and galaxies whose light has been stretched by expanding space.",
        ],
      },
      {
        id: "special",
        title: "What makes it special?",
        paragraphs: [
          "Hubble orbits Earth and sees mostly visible and ultraviolet light. Webb sits farther away, stays colder, and is tuned to infrared. Together they are partners, not rivals.",
          "To stay cold, Webb hides behind a five-layer sunshield that blocks the heat of the Sun, Earth, and Moon. The telescope side can be colder than −220°C.",
        ],
      },
      {
        id: "there",
        title: "Where does it work?",
        paragraphs: [
          "Webb orbits a quiet balance point called L2, about 1.5 million kilometers from Earth — roughly four times farther than the Moon. From there it can keep its sunshield pointed the right way and still talk to home.",
        ],
      },
      {
        id: "study",
        title: "What does it study?",
        paragraphs: [
          "First galaxies, star nurseries, exoplanet atmospheres, and objects in our own solar system. Its pictures of nebulae and colliding galaxies are already classroom legends.",
          "Scientists also use it like a chemist’s lamp: when a planet crosses its star, Webb can read which gases dim which colors of starlight.",
        ],
      },
      {
        id: "formation",
        title: "How was it built?",
        paragraphs: [
          "Webb folded to fit inside a rocket and unfolded in space — sunshield, boom, and mirrors — in a sequence that had to work. There is no repair truck at L2.",
        ],
      },
    ],
    amazingFacts: [
      "If you unfolded Webb’s mirrors on a tennis court, they would nearly cover it.",
      "Each gold layer on the mirrors is only about 100 nanometers thick — far thinner than a soap bubble.",
      "Webb can see some galaxies as they looked more than 13 billion years ago.",
    ],
    vocabulary: [
      { term: "Infrared", definition: "Light with wavelengths longer than red, often felt as heat." },
      { term: "L2", definition: "A gravitational balance point beyond Earth where a spacecraft can stay aligned with our planet." },
      { term: "Exoplanet", definition: "A planet that orbits a star other than the Sun." },
    ],
    relatedTopics: ["nebulae", "stars", "big-bang", "apollo-11"],
    searchKeywords: ["james webb", "jwst", "webb", "telescope", "infrared", "hubble", "gold mirror", "exoplanet"],
  },
  {
    slug: "apollo-11",
    title: "Apollo 11",
    category: "exploration",
    shortDescription: "The 1969 mission that first placed humans on the Moon.",
    intro: "Apollo 11 was the spaceflight that landed Neil Armstrong and Buzz Aldrin on the Moon on July 20, 1969, while Michael Collins orbited above.",
    visual: "mission",
    featured: true,
    popular: true,
    embed: "missions",
    quizLink: true,
    quickFacts: [
      { label: "Date", value: "July 16–24, 1969" },
      { label: "Crew", value: "Armstrong, Aldrin, Collins" },
      { label: "Destination", value: "Sea of Tranquility, Moon" },
      { label: "Time on surface", value: "About 21.5 hours" },
      { label: "Moonwalk length", value: "2 hours 31 minutes" },
      { label: "Rocks returned", value: "21.6 kilograms" },
    ],
    sections: [
      {
        id: "overview",
        title: "What was it?",
        paragraphs: [
          "Apollo 11 was a NASA mission during the Space Race. A Saturn V rocket launched the crew from Florida. The command module Columbia stayed in lunar orbit while the lunar module Eagle descended.",
          "Armstrong’s first words from the surface — “That’s one small step for [a] man, one giant leap for mankind” — became one of the most quoted sentences in history.",
        ],
      },
      {
        id: "special",
        title: "What made it special?",
        paragraphs: [
          "It was the first time humans walked on another world. The computer guidance system was weaker than a modern calculator, yet it got Eagle to a safe landing with seconds of fuel to spare.",
          "The crew left a plaque, scientific instruments, and footprints that may last millions of years.",
        ],
      },
      {
        id: "there",
        title: "What was it like there?",
        paragraphs: [
          "The sky was black. The ground was bright gray. Earth hung above the horizon as a small, vivid globe. Suits were stiff, and every tool had to be designed for bulky gloves.",
          "Imagine hopping in a backpack that is also your house, radio, and air supply, on dirt that sticks like powdered charcoal.",
        ],
      },
      {
        id: "study",
        title: "How did it change science?",
        paragraphs: [
          "Moon rocks showed that the Moon is ancient and related to Earth, supporting the giant-impact idea. Seismometers listened for moonquakes. Later Apollo landings built on the first steps.",
          "Apollo also changed culture. It proved that a careful plan, thousands of people, and stubborn engineering could reach another world.",
        ],
      },
      {
        id: "formation",
        title: "How was the mission built?",
        paragraphs: [
          "Saturn V remains one of the most powerful rockets ever flown. The lunar module had a descent stage that stayed on the Moon and an ascent stage that carried the astronauts back to Columbia.",
        ],
      },
    ],
    amazingFacts: [
      "More people have now been to space than have walked on the Moon. Only 12 people have lunar footprints.",
      "The Apollo 11 computer had about 64 kilobytes of memory.",
      "Armstrong and Aldrin were on the surface less than a day, but they completed the first human field geology on another world.",
    ],
    vocabulary: [
      { term: "Lunar module", definition: "The spider-legged spacecraft that landed on the Moon and later launched back to orbit." },
      { term: "Command module", definition: "The cone-shaped capsule the crew rode in to the Moon and back to Earth." },
      { term: "Saturn V", definition: "The huge rocket that launched Apollo missions from Earth." },
    ],
    relatedTopics: ["moon", "earth", "james-webb-space-telescope", "mars"],
    searchKeywords: ["apollo", "apollo 11", "moon landing", "armstrong", "aldrin", "nasa", "1969", "saturn v"],
  },
];
