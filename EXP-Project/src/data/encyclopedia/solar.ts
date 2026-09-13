import type { EncyclopediaEntry } from "@/data/encyclopedia/types";

export const solarEntries: EncyclopediaEntry[] = [
  {
    slug: "sun",
    title: "Sun",
    category: "solar-system",
    shortDescription: "The star at the center of our solar system.",
    intro: "The Sun is a star — a giant ball of glowing gas whose gravity holds every planet in place.",
    visual: "sun",
    featured: true,
    popular: true,
    embed: "solar-system",
    quizLink: true,
    quickFacts: [
      { label: "Type", value: "Yellow dwarf star (G2V)" },
      { label: "Age", value: "4.6 billion years" },
      { label: "Diameter", value: "1.39 million km", note: "About 109 Earths across" },
      { label: "Surface temperature", value: "5,500°C" },
      { label: "Core temperature", value: "15 million °C" },
      { label: "Distance from Earth", value: "150 million km", note: "Light takes 8 minutes to arrive" },
    ],
    sections: [
      {
        id: "overview",
        title: "What is it?",
        paragraphs: [
          "The Sun looks like a flat disk in our sky, but it is a sphere of hydrogen and helium. It is so large that about 1.3 million Earths could fit inside it.",
          "It is not on fire the way a campfire is. In its core, gravity squeezes atoms so hard that they fuse together and release energy. That energy becomes the light and heat that make life on Earth possible.",
        ],
      },
      {
        id: "made-of",
        title: "What is it made of?",
        paragraphs: [
          "About 74% of the Sun’s mass is hydrogen and about 24% is helium. The rest is a sprinkle of heavier elements such as oxygen, carbon, neon, and iron.",
          "Imagine a soup so hot that atoms cannot hold onto their electrons. Scientists call that soup plasma — the most common state of matter in the universe.",
        ],
      },
      {
        id: "formation",
        title: "How did it form?",
        paragraphs: [
          "About 4.6 billion years ago, a cold cloud of gas and dust began to collapse. Gravity pulled the cloud inward until the center grew hot enough to start nuclear fusion.",
          "The leftover material flattened into a spinning disk. From that disk, the planets — including Earth — were born.",
        ],
      },
      {
        id: "special",
        title: "What makes it special?",
        paragraphs: [
          "The Sun is an ordinary star. What makes it extraordinary to us is the distance. It is close enough to warm oceans and grow forests, but not so close that it boils them away.",
          "It also has a magnetic field that twists and snaps. Those snaps can send solar storms racing through space. When they reach Earth, they can paint the sky with auroras.",
        ],
      },
      {
        id: "there",
        title: "What would it be like there?",
        paragraphs: [
          "You could not stand on the Sun. There is no solid ground — only deeper and hotter layers of gas.",
          "Imagine this: if you flew a spacecraft toward it, the heat and radiation would destroy the ship long before you reached the glowing surface astronomers call the photosphere.",
        ],
      },
      {
        id: "study",
        title: "How do we study it?",
        paragraphs: [
          "Never look directly at the Sun. Scientists use special telescopes, space probes such as Parker Solar Probe, and filtered observatories to study its surface, storms, and interior.",
          "Sound waves traveling through the Sun help researchers map what is happening deep inside — a method a bit like using earthquakes to study Earth’s insides.",
        ],
      },
    ],
    amazingFacts: [
      "The Sun loses about 4 million tons of mass every second as energy. It still has enough fuel to shine for billions of years.",
      "A million Earths could fit inside the Sun, with room left over for a few hundred thousand more.",
      "The core of the Sun is about 15 million degrees Celsius — hotter than any oven, volcano, or lightning bolt on Earth.",
    ],
    vocabulary: [
      { term: "Nuclear fusion", definition: "A process in which lightweight atoms join to make a heavier atom and release energy." },
      { term: "Plasma", definition: "A super-hot gas in which atoms have lost some or all of their electrons." },
      { term: "Photosphere", definition: "The bright layer of the Sun we normally see as its surface." },
    ],
    relatedTopics: ["earth", "solar-system", "stars", "mars"],
    searchKeywords: ["sun", "star", "our star", "yellow dwarf", "fusion", "solar", "light", "heat"],
  },
  {
    slug: "mercury",
    title: "Mercury",
    category: "solar-system",
    shortDescription: "The smallest planet and the closest world to the Sun.",
    intro: "Mercury is a rocky speedster. It finishes a year in just 88 Earth days, yet one of its days lasts 59 Earth days.",
    visual: "planet",
    planetId: "mercury",
    popular: true,
    quizLink: true,
    quickFacts: [
      { label: "Type", value: "Rocky planet" },
      { label: "Distance from Sun", value: "58 million km", note: "0.39 AU" },
      { label: "Diameter", value: "4,879 km", note: "About 3 Mercurys across Earth" },
      { label: "Length of day", value: "59 Earth days" },
      { label: "Length of year", value: "88 Earth days" },
      { label: "Moons", value: "0" },
      { label: "Temperature", value: "−173°C to 427°C" },
    ],
    sections: [
      {
        id: "overview",
        title: "What is it?",
        paragraphs: [
          "Mercury is the innermost planet. From Earth it can appear as a bright speck near sunrise or sunset, but it never strays far from the Sun in our sky.",
          "Its surface looks a little like the Moon: gray, cratered, and airless. There is almost no atmosphere to soften incoming meteoroids or hold heat through the night.",
        ],
      },
      {
        id: "made-of",
        title: "What is it made of?",
        paragraphs: [
          "Mercury is a dense ball of rock wrapped around a huge iron core. That core may take up about 85% of the planet’s radius — an unusually large heart for such a small world.",
          "Scientists think giant collisions long ago may have stripped away much of its outer rock, leaving the metal-rich world we see today.",
        ],
      },
      {
        id: "formation",
        title: "How did it form?",
        paragraphs: [
          "Like the other rocky planets, Mercury grew from leftover dust and pebbles in the young solar system. Close to the Sun, lightweight ices could not survive, so Mercury built itself from metal and rock.",
        ],
      },
      {
        id: "special",
        title: "What makes it special?",
        paragraphs: [
          "A year on Mercury is shorter than one Mercury day. If you could stand there at the right time, the Sun would appear to rise, pause, and even move backward a little before setting.",
          "Ice exists in permanently shadowed craters near the poles. Imagine ice cream hiding in a freezer while the kitchen next door is an oven.",
        ],
      },
      {
        id: "there",
        title: "What would it be like there?",
        paragraphs: [
          "Daytime can roast above 400°C. Night can plunge below −170°C. Without a thick atmosphere, the sky would stay black even at noon, and the Sun would look about three times wider than it does from Earth.",
          "Gravity is only 38% of Earth’s. A 30-kilogram backpack would feel closer to 11 kilograms.",
        ],
      },
      {
        id: "study",
        title: "How do we study it?",
        paragraphs: [
          "Mariner 10 flew past in the 1970s. MESSENGER orbited from 2011 to 2015 and mapped the whole planet. BepiColombo, a joint European–Japanese mission, is on the way to study it in even more detail.",
        ],
      },
    ],
    amazingFacts: [
      "Mercury has wrinkles — giant cliffs formed as the planet cooled and shrank.",
      "It has a magnetic field, which surprised scientists because such a small planet was not expected to keep one.",
      "From Mercury’s surface, Earth would look like a bright star.",
    ],
    vocabulary: [
      { term: "AU", definition: "Astronomical unit — the average Earth–Sun distance, about 150 million kilometers." },
      { term: "Core", definition: "The metal-rich center of a rocky planet." },
      { term: "Crater", definition: "A bowl-shaped hole made when a rock from space slams into a surface." },
    ],
    relatedTopics: ["venus", "sun", "earth", "solar-system"],
    searchKeywords: ["mercury", "closest planet", "smallest planet", "fastest planet", "no moons", "messenger"],
  },
  {
    slug: "venus",
    title: "Venus",
    category: "solar-system",
    shortDescription: "Earth’s overheated twin, wrapped in acid clouds.",
    intro: "Venus is almost as big as Earth, but it is the hottest planet in the solar system — hotter than Mercury, even though it is farther from the Sun.",
    visual: "planet",
    planetId: "venus",
    popular: true,
    quizLink: true,
    quickFacts: [
      { label: "Type", value: "Rocky planet" },
      { label: "Distance from Sun", value: "108 million km", note: "0.72 AU" },
      { label: "Diameter", value: "12,104 km", note: "Almost Earth-sized" },
      { label: "Length of day", value: "243 Earth days" },
      { label: "Length of year", value: "225 Earth days" },
      { label: "Moons", value: "0" },
      { label: "Temperature", value: "465°C" },
    ],
    sections: [
      {
        id: "overview",
        title: "What is it?",
        paragraphs: [
          "Venus is the second planet from the Sun and the brightest natural object in our night sky after the Moon. People once called it the morning star or evening star.",
          "Under those pretty clouds is a world that would crush, melt, and poison an unprotected visitor in minutes.",
        ],
      },
      {
        id: "made-of",
        title: "What is it made of?",
        paragraphs: [
          "Venus is a rocky planet with a thick atmosphere of carbon dioxide. The clouds are made of sulfuric acid droplets.",
          "That atmosphere acts like a sealed greenhouse. Sunlight gets in, heat tries to leave, and the trapped energy cooks the surface to about 465°C — hot enough to melt lead.",
        ],
      },
      {
        id: "formation",
        title: "How did it form?",
        paragraphs: [
          "Venus probably formed in a similar way to Earth. For a long time, scientists wondered whether it once had oceans. If it did, a runaway greenhouse effect may have boiled them away.",
          "The lesson is important: a planet can start as a possible twin and then take a very different path.",
        ],
      },
      {
        id: "special",
        title: "What makes it special?",
        paragraphs: [
          "A day on Venus is longer than a year on Venus. It also spins backward compared with most planets, so the Sun would rise in the west and set in the east.",
          "The air pressure at the surface is about 90 times Earth’s — like being 900 meters underwater.",
        ],
      },
      {
        id: "there",
        title: "What would it be like there?",
        paragraphs: [
          "Imagine standing on a dim orange plain under a sky that never shows blue. The air would feel heavy, the temperature would be oven-hot, and metal would slowly fail.",
          "Soviet Venera landers survived only about an hour. Their last photos are treasures because the machines did not last long enough to take many more.",
        ],
      },
      {
        id: "study",
        title: "How do we study it?",
        paragraphs: [
          "Radar from orbiting spacecraft can pierce the clouds and map mountains and volcanoes. Future missions hope to study the atmosphere in more detail and look for signs of recent volcanic activity.",
        ],
      },
    ],
    amazingFacts: [
      "Venus is hotter than Mercury even though it is farther from the Sun.",
      "It rotates so slowly that you could watch a sunset last a very long time — if you could survive the air.",
      "Some mountains on Venus are taller than many famous peaks on Earth.",
    ],
    vocabulary: [
      { term: "Greenhouse effect", definition: "When gases in an atmosphere trap heat and warm a planet." },
      { term: "Atmosphere", definition: "The layer of gases surrounding a world." },
      { term: "Radar", definition: "A method that bounces radio waves off a surface to make a map." },
    ],
    relatedTopics: ["earth", "mercury", "sun", "solar-system"],
    searchKeywords: ["venus", "hottest planet", "earth twin", "greenhouse", "clouds", "backward spin"],
  },
  {
    slug: "earth",
    title: "Earth",
    category: "solar-system",
    shortDescription: "The only world we know that hosts life.",
    intro: "Earth is a rocky planet with liquid oceans, a breathable atmosphere, and a magnetic field that helps shield living things from space radiation.",
    visual: "planet",
    planetId: "earth",
    featured: true,
    popular: true,
    quizLink: true,
    quickFacts: [
      { label: "Type", value: "Rocky planet" },
      { label: "Distance from Sun", value: "150 million km", note: "1 AU" },
      { label: "Diameter", value: "12,742 km" },
      { label: "Length of day", value: "24 hours" },
      { label: "Length of year", value: "365.25 days" },
      { label: "Moons", value: "1" },
      { label: "Average temperature", value: "15°C" },
    ],
    sections: [
      {
        id: "overview",
        title: "What is it?",
        paragraphs: [
          "Earth is the third planet from the Sun and the largest of the four rocky planets. From space it looks blue because oceans cover about 71% of the surface.",
          "It is also the only planet where we have found life — forests, coral reefs, whales, microbes, and people writing encyclopedia articles.",
        ],
      },
      {
        id: "made-of",
        title: "What is it made of?",
        paragraphs: [
          "Earth has layers: a metal core, a thick rocky mantle, and a thin crust we live on. Water fills ocean basins. Air made mostly of nitrogen and oxygen wraps the planet.",
          "Plate tectonics slowly recycle the crust. Continents drift, mountains rise, and volcanoes return gases to the air. That restless geology helps keep Earth livable over long ages.",
        ],
      },
      {
        id: "formation",
        title: "How did it form?",
        paragraphs: [
          "Earth grew from leftover rock and metal around the young Sun. A giant collision with a Mars-sized body named Theia may have blasted out debris that became the Moon.",
          "Later, comets and asteroids delivered water and other ingredients. Life appeared more than 3.5 billion years ago, first as simple microbes.",
        ],
      },
      {
        id: "special",
        title: "What makes it special?",
        paragraphs: [
          "Earth sits in the habitable zone — the range of distances where liquid water can exist on a planet’s surface. Distance is not enough, though. A stable climate, a magnetic field, and the right atmosphere also matter.",
          "The Moon steadies Earth’s tilt. That steadiness helps seasons stay regular enough for complex life to thrive.",
        ],
      },
      {
        id: "there",
        title: "What would it be like there?",
        paragraphs: [
          "You already know. Blue sky in daytime, stars at night, weather that can be gentle or fierce. Compared with every other planet we have visited, Earth is the comfortable one.",
          "From orbit, astronauts often say the atmosphere looks paper-thin — a reminder that the air we depend on is a surprisingly delicate wrapping.",
        ],
      },
      {
        id: "study",
        title: "How do we study it?",
        paragraphs: [
          "Earth science uses satellites, ocean ships, weather balloons, ice cores, and seismometers. Looking at other planets also teaches us about home. Venus shows what a runaway greenhouse can do. Mars shows what a world can look like after losing most of its air.",
        ],
      },
    ],
    amazingFacts: [
      "Earth is the densest planet in the solar system.",
      "One day is 24 hours, but the planet is still slowing very slightly because of the Moon’s pull.",
      "If you shrank Earth to the size of a classroom globe, the atmosphere would be thinner than a coat of varnish.",
    ],
    vocabulary: [
      { term: "Habitable zone", definition: "The distance from a star where liquid water can exist on a planet’s surface." },
      { term: "Magnetic field", definition: "An invisible shield created by moving metal in a planet’s core." },
      { term: "Plate tectonics", definition: "The slow sliding of giant pieces of a planet’s outer shell." },
    ],
    relatedTopics: ["moon", "sun", "mars", "solar-system", "apollo-11"],
    searchKeywords: ["earth", "home", "life", "oceans", "blue planet", "habitable", "our planet"],
  },
  {
    slug: "moon",
    title: "Moon",
    category: "solar-system",
    shortDescription: "Earth’s natural satellite and the first world humans walked on.",
    intro: "The Moon is Earth’s closest neighbor in space — a gray, airless world that lights our nights and tugs our oceans.",
    visual: "moon",
    featured: true,
    popular: true,
    quizLink: true,
    quickFacts: [
      { label: "Type", value: "Natural satellite" },
      { label: "Distance from Earth", value: "384,400 km", note: "About 30 Earths away" },
      { label: "Diameter", value: "3,475 km", note: "About one-quarter of Earth" },
      { label: "Length of day", value: "29.5 Earth days" },
      { label: "Orbital period", value: "27.3 days" },
      { label: "Gravity", value: "0.17 × Earth" },
      { label: "Atmosphere", value: "Almost none" },
    ],
    sections: [
      {
        id: "overview",
        title: "What is it?",
        paragraphs: [
          "The Moon is a rocky sphere that orbits Earth. The same side always faces us, which is why the familiar “face” never turns away.",
          "Its light is borrowed. Moonlight is sunlight bouncing off gray dust and rock.",
        ],
      },
      {
        id: "made-of",
        title: "What is it made of?",
        paragraphs: [
          "The Moon has a crust of rock, a mantle, and a small core. The dark patches called maria are ancient lava plains. The bright highlands are older, cratered crust.",
          "A fine powder called regolith covers almost everything. Boots sink into it. That is why Apollo astronauts left such crisp footprints.",
        ],
      },
      {
        id: "formation",
        title: "How did it form?",
        paragraphs: [
          "The leading idea is the giant-impact hypothesis. A world about the size of Mars struck the young Earth. Debris flung into orbit gathered into the Moon.",
          "Moon rocks brought home by Apollo support this story: they are dry, ancient, and chemically related to Earth’s mantle.",
        ],
      },
      {
        id: "special",
        title: "What makes it special?",
        paragraphs: [
          "The Moon is unusually large compared with its planet. That size helps stabilize Earth’s seasons and creates the tides that shape coastlines.",
          "It is also the only world besides Earth where humans have walked. The first steps happened on July 20, 1969, during Apollo 11.",
        ],
      },
      {
        id: "there",
        title: "What would it be like there?",
        paragraphs: [
          "The sky is black even in daytime. Earth hangs as a blue-and-white marble, four times wider than the Moon looks from home.",
          "A jump would take you higher and last longer. There is no air to carry sound, so a friend standing nearby would need a radio to hear you.",
        ],
      },
      {
        id: "study",
        title: "How do we study it?",
        paragraphs: [
          "Telescopes, orbiters, landers, and human expeditions have mapped the Moon in detail. New missions are planning to return people and build longer stays near the south pole, where ice may hide in shadowed craters.",
        ],
      },
    ],
    amazingFacts: [
      "The Moon is moving away from Earth by about 3.8 centimeters each year.",
      "Footprints there can last millions of years because there is no wind or rain to erase them.",
      "A paperclip would weigh about as much as a small button in Moon gravity.",
    ],
    vocabulary: [
      { term: "Satellite", definition: "An object that orbits another object. The Moon is a natural satellite of Earth." },
      { term: "Regolith", definition: "A layer of loose dust and broken rock on the surface of an airless world." },
      { term: "Maria", definition: "Dark lunar plains formed by ancient lava flows. The word means “seas,” though they are dry." },
    ],
    relatedTopics: ["earth", "apollo-11", "solar-system", "sun"],
    searchKeywords: ["moon", "luna", "satellite", "apollo", "tides", "craters", "earth moon"],
  },
];
