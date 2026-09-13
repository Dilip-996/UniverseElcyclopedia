import type { EncyclopediaEntry } from "@/data/encyclopedia/types";

export const cosmosEntries: EncyclopediaEntry[] = [
  {
    slug: "stars",
    title: "Stars",
    category: "stars",
    shortDescription: "Giant glowing spheres of plasma that make their own light.",
    intro: "A star is a huge ball of gas held together by gravity. In its core, fusion turns hydrogen into helium and releases the energy we see as starlight.",
    visual: "star",
    featured: true,
    popular: true,
    embed: "star-life",
    quizLink: true,
    quickFacts: [
      { label: "Nearest star", value: "The Sun" },
      { label: "Next nearest", value: "Proxima Centauri, 4.24 light-years" },
      { label: "Our galaxy’s stars", value: "About 100 billion" },
      { label: "Hottest common color", value: "Blue-white" },
      { label: "Coolest common color", value: "Red" },
      { label: "Fuel of most stars", value: "Hydrogen" },
    ],
    sections: [
      {
        id: "overview",
        title: "What is a star?",
        paragraphs: [
          "Stars look like pinpricks because they are unimaginably far away. Up close, each one is a blazing sphere. Our Sun is a star. The others are suns that happen to live much farther off.",
          "Color is a clue to temperature. Blue stars are hotter. Red stars are cooler. Yellow stars such as the Sun sit in the middle, like a stove burner on a medium setting.",
        ],
      },
      {
        id: "formation",
        title: "How stars form",
        paragraphs: [
          "Stars begin in cold clouds of gas and dust called nebulae. Gravity slowly gathers the cloud into clumps. When a clump’s center grows hot and dense enough, fusion starts and a star is born.",
          "Imagine cookie dough being pressed into a ball until the middle becomes a furnace. That furnace can shine for millions or billions of years.",
        ],
      },
      {
        id: "life",
        title: "What happens as they age?",
        paragraphs: [
          "A star’s life depends on its mass. Medium stars like the Sun swell into red giants, then gently shed their outer layers and leave a white dwarf — a city-sized ember.",
          "Massive stars live fast and end with a supernova, a blast that can outshine a galaxy. The leftover core may become a neutron star or a black hole.",
        ],
      },
      {
        id: "special",
        title: "What makes them special?",
        paragraphs: [
          "Stars make the ingredients of planets and people. The calcium in bones and the iron in blood were forged in stars that lived and died before the Sun was born.",
          "Binary stars orbit each other. Some pulse. Some explode. The night sky is a catalog of different life stages happening all at once.",
        ],
      },
      {
        id: "there",
        title: "What would it be like near one?",
        paragraphs: [
          "Near a calm star like the Sun, a planet can have oceans. Near a blue giant, radiation would be fierce and the star’s life would be short. Near a dying red giant, inner planets could be swallowed.",
        ],
      },
      {
        id: "study",
        title: "How do we study them?",
        paragraphs: [
          "Spectrographs split starlight into rainbows that reveal temperature and chemistry. Telescopes such as Hubble and Webb photograph nurseries and wreckage. The timeline below follows a star from dusty cloud to finale.",
        ],
      },
    ],
    amazingFacts: [
      "There are more stars in the observable universe than grains of sand on all of Earth’s beaches.",
      "A teaspoon of neutron-star material would weigh as much as a mountain.",
      "The Sun is a fairly ordinary star. Many are smaller red dwarfs; a few are monsters hundreds of times wider.",
    ],
    vocabulary: [
      { term: "Fusion", definition: "The joining of light atoms into heavier ones, releasing energy." },
      { term: "Supernova", definition: "The explosive death of a massive star." },
      { term: "White dwarf", definition: "The hot, fading core left after a Sun-like star sheds its outer layers." },
      { term: "Neutron star", definition: "An extremely dense leftover core, only about as wide as a city." },
      { term: "Red giant", definition: "An aging star that has swollen and cooled at the surface." },
      { term: "Binary star", definition: "Two stars that orbit each other." },
      { term: "Pulsar", definition: "A spinning neutron star that sweeps beams of radiation past Earth like a lighthouse." },
    ],
    relatedTopics: ["sun", "nebulae", "black-holes", "milky-way"],
    searchKeywords: [
      "stars",
      "star",
      "what is a star",
      "how stars form",
      "red giants",
      "white dwarfs",
      "supernovae",
      "supernova",
      "star explosion",
      "neutron stars",
      "pulsars",
      "pulsar",
      "binary stars",
      "binary",
    ],
  },
  {
    slug: "milky-way",
    title: "Milky Way",
    category: "galaxies",
    shortDescription: "The barred spiral galaxy that is our home in space.",
    intro: "The Milky Way is a vast disk of stars, gas, and dust. From a dark place on Earth it looks like spilled milk across the night sky — because we are seeing it from the inside.",
    visual: "galaxy",
    featured: true,
    popular: true,
    embed: "galaxy",
    quizLink: true,
    quickFacts: [
      { label: "Type", value: "Barred spiral galaxy" },
      { label: "Stars", value: "About 100 billion" },
      { label: "Diameter", value: "About 100,000 light-years" },
      { label: "Our location", value: "Orion Arm, ~26,000 light-years from center" },
      { label: "Neighbor", value: "Andromeda Galaxy" },
      { label: "Central object", value: "Sagittarius A*, a supermassive black hole" },
    ],
    sections: [
      {
        id: "overview",
        title: "What is it?",
        paragraphs: [
          "A galaxy is a huge family of stars held together by gravity. The Milky Way is ours. It has spiral arms, a central bar of stars, a dusty disk, and a faint halo of older stars and globular clusters.",
          "We cannot step outside and take a postcard photo. Artists and scientists build maps from star counts, radio waves, and the motions of gas.",
        ],
      },
      {
        id: "made-of",
        title: "What is it made of?",
        paragraphs: [
          "Stars and planets are the bright parts. Most of the mass we can measure in the outskirts is invisible dark matter — we know it is there because of how stars orbit.",
          "Gas and dust in the disk are the raw material for new suns. That is why spiral arms look bluish: they hold many young, hot stars.",
        ],
      },
      {
        id: "formation",
        title: "How did it form?",
        paragraphs: [
          "The Milky Way grew over billions of years by collapsing gas and by swallowing smaller galaxies. Some leftover dwarf galaxies are still being stretched into streams of stars.",
        ],
      },
      {
        id: "special",
        title: "What makes it special?",
        paragraphs: [
          "It is home. The Sun lives in a quiet suburb, not in the crowded, radiation-rich center. That location may have helped life last long enough to invent telescopes.",
          "Andromeda is on a long collision course with us. In about 4 billion years the two spirals will begin to merge. Stars are so far apart that they will rarely crash; the shapes will simply remix.",
        ],
      },
      {
        id: "there",
        title: "Where are we?",
        paragraphs: [
          "Your cosmic address is Earth, Solar System, Orion Arm, Milky Way, Local Group, Universe. Each step out is a jump in scale so large that numbers stop feeling real — which is why maps and analogies help.",
        ],
      },
      {
        id: "study",
        title: "How do we study it?",
        paragraphs: [
          "Radio telescopes see cold hydrogen. Infrared telescopes peer through dust. Gaia has measured the positions and motions of more than a billion stars, turning the galaxy into a moving map.",
        ],
      },
    ],
    amazingFacts: [
      "It takes the Sun about 230 million years to complete one orbit around the galactic center. The last time we were here, dinosaurs had not yet appeared.",
      "The Milky Way and Andromeda are the two largest members of a neighborhood called the Local Group.",
      "If the galaxy were the size of a dinner plate, the solar system would be smaller than a bacterium on the rim.",
    ],
    vocabulary: [
      { term: "Spiral galaxy", definition: "A galaxy with a bright center and curving arms of stars and gas." },
      { term: "Elliptical galaxy", definition: "A rounded, football-shaped galaxy made mostly of older stars." },
      { term: "Irregular galaxy", definition: "A galaxy without a neat spiral or oval shape, often after a collision." },
      { term: "Galaxy cluster", definition: "A group of galaxies bound together by gravity." },
      { term: "Light-year", definition: "The distance light travels in one year, about 9.5 trillion kilometers." },
      { term: "Andromeda", definition: "The nearest large spiral galaxy to the Milky Way, about 2.5 million light-years away." },
    ],
    relatedTopics: ["stars", "black-holes", "solar-system", "big-bang"],
    searchKeywords: [
      "milky way",
      "galaxy",
      "spiral",
      "andromeda",
      "elliptical",
      "irregular",
      "cluster",
      "local group",
      "our galaxy",
    ],
  },
  {
    slug: "black-holes",
    title: "Black Holes",
    category: "deep-space",
    shortDescription: "Places where gravity is so strong that light cannot escape.",
    intro: "A black hole is not a cosmic vacuum cleaner roaming the galaxy. It is a region of space where mass is packed so tightly that its gravity becomes extreme.",
    visual: "black-hole",
    featured: true,
    popular: true,
    embed: "black-hole",
    quizLink: true,
    quickFacts: [
      { label: "What it is", value: "A region of extreme gravity" },
      { label: "Boundary", value: "Event horizon" },
      { label: "Stellar-mass size", value: "Often a few times the Sun’s mass" },
      { label: "Supermassive size", value: "Millions to billions of Suns" },
      { label: "Nearest known", value: "Many light-years away" },
      { label: "Danger to Earth", value: "None from known black holes" },
    ],
    sections: [
      {
        id: "overview",
        title: "What is it?",
        paragraphs: [
          "Imagine a trampoline with a bowling ball in the middle. Marbles roll inward because the fabric bends. A black hole is a bend in space so steep that even light cannot climb out.",
          "The dark “hole” you see in pictures is the event horizon — an invisible boundary. Cross it, and the outside universe can no longer receive your signals.",
        ],
      },
      {
        id: "formation",
        title: "How do they form?",
        paragraphs: [
          "Stellar-mass black holes can form when a massive star explodes and its core collapses. Supermassive black holes live in galaxy centers and grew over cosmic time by gathering gas and merging with others.",
          "The first image of a black hole’s shadow, taken in 2019, showed the giant in galaxy M87. In 2022, astronomers imaged Sagittarius A* at the heart of the Milky Way.",
        ],
      },
      {
        id: "special",
        title: "What makes it special?",
        paragraphs: [
          "Black holes let scientists test Einstein’s theory of gravity in the strongest conditions we know. They are laboratories, not monsters.",
          "Matter falling in can heat up and glow in X-rays before it vanishes from view. That glowing disk is why some black holes are easier to find than quiet ones.",
        ],
      },
      {
        id: "there",
        title: "What would it be like near one?",
        paragraphs: [
          "From a safe distance you would see a dark circle with a bright, warped ring of light. If you fell in feet first toward a smaller black hole, gravity would stretch you — an effect nicknamed spaghettification.",
          "Near a supermassive black hole the stretch can be gentler at the horizon, but the trip is still one-way. Lucky for us, the nearest known black holes are far away. Earth is not on the menu.",
        ],
      },
      {
        id: "study",
        title: "How do we study it?",
        paragraphs: [
          "We watch stars whip around hidden mass, detect X-rays from hot gas, and pick up gravitational waves from black holes colliding. The visual below is a gentle model of objects orbiting an event horizon.",
        ],
      },
    ],
    amazingFacts: [
      "If the Sun collapsed into a black hole — it will not — Earth would still orbit at the same distance. The danger would be darkness, not being sucked in.",
      "Time passes more slowly closer to a black hole, as measured by a distant observer.",
      "Some black holes are quieter than a library. Others power quasars brighter than whole galaxies.",
    ],
    vocabulary: [
      { term: "Event horizon", definition: "The boundary around a black hole beyond which nothing, not even light, can escape." },
      { term: "Gravity", definition: "The pull that mass gives to other mass. Near a black hole that pull becomes extreme." },
      { term: "Quasar", definition: "A brilliantly glowing galaxy center powered by a feeding supermassive black hole." },
    ],
    relatedTopics: ["stars", "milky-way", "nebulae", "big-bang"],
    searchKeywords: ["black hole", "black holes", "event horizon", "gravity", "quasar", "sagittarius", "spaghettification"],
  },
  {
    slug: "nebulae",
    title: "Nebulae",
    category: "deep-space",
    shortDescription: "Clouds of gas and dust where stars are born — and where they leave farewells.",
    intro: "A nebula is a cloud in space. Some nebulae are stellar nurseries. Others are the glowing leftovers of dying stars.",
    visual: "nebula",
    popular: true,
    embed: "star-life",
    quizLink: true,
    quickFacts: [
      { label: "What it is", value: "A cloud of gas and dust" },
      { label: "Famous nursery", value: "Orion Nebula" },
      { label: "Famous leftover", value: "Crab Nebula (supernova remnant)" },
      { label: "Distance example", value: "Orion Nebula ~1,300 light-years" },
      { label: "Made of", value: "Mostly hydrogen, plus dust" },
      { label: "Role", value: "Star birth and star leftovers" },
    ],
    sections: [
      {
        id: "overview",
        title: "What is it?",
        paragraphs: [
          "Nebula means “cloud.” In space, clouds can be light-years wide. They do not look colorful to your eye the way camera photos do; long exposures and filters reveal reds, greens, and blues.",
          "Emission nebulae glow because nearby stars energize the gas. Reflection nebulae shine by bouncing starlight. Dark nebulae are dusty silhouettes.",
        ],
      },
      {
        id: "formation",
        title: "How do they form?",
        paragraphs: [
          "Some clouds are leftovers from the galaxy’s gas supply. Others are blown outward when stars shed layers or explode. The Crab Nebula is the wreckage of a supernova seen in the year 1054.",
        ],
      },
      {
        id: "special",
        title: "What makes them special?",
        paragraphs: [
          "Nebulae are recycling centers. Dying stars return enriched gas to space. New stars gather that gas and begin the story again.",
          "The pillars and knots in pictures are not solid rock. They are denser mist, sculpted by radiation the way wind sculpts sand.",
        ],
      },
      {
        id: "there",
        title: "What would it be like there?",
        paragraphs: [
          "Even a “thick” nebula is a better vacuum than any laboratory on Earth. If you flew through one, you would not feel fog on a windshield. The beauty is spread across trillions of kilometers.",
        ],
      },
      {
        id: "study",
        title: "How do we study them?",
        paragraphs: [
          "Hubble’s visible-light portraits made nebulae famous. Webb’s infrared eyes can see baby stars still wrapped in dust. Spectroscopy tells us which elements are glowing.",
        ],
      },
    ],
    amazingFacts: [
      "The Orion Nebula is visible as a fuzzy star in Orion’s sword if your sky is dark.",
      "A planetary nebula has nothing to do with planets. The name is a leftover from older telescopes that made them look like disks.",
      "The gas in some nebulae is thinner than a breath spread through a sports stadium.",
    ],
    vocabulary: [
      { term: "Nebula", definition: "A cloud of gas and dust in space." },
      { term: "Stellar nursery", definition: "A region where new stars are forming." },
      { term: "Supernova remnant", definition: "The expanding wreckage left after a massive star explodes." },
    ],
    relatedTopics: ["stars", "black-holes", "james-webb-space-telescope", "milky-way"],
    searchKeywords: ["nebula", "nebulae", "orion", "stellar nursery", "dust", "gas cloud", "crab"],
  },
  {
    slug: "big-bang",
    title: "Big Bang",
    category: "universe",
    shortDescription: "The beginning of the expanding universe we observe today.",
    intro: "The Big Bang is the name for the moment, about 13.8 billion years ago, when the universe began expanding from an extremely hot, dense state.",
    visual: "cosmos",
    featured: true,
    popular: true,
    quizLink: true,
    quickFacts: [
      { label: "Age of the universe", value: "About 13.8 billion years" },
      { label: "What expanded", value: "Space itself" },
      { label: "First light we still see", value: "Cosmic microwave background" },
      { label: "CMB temperature now", value: "2.7 K (−270°C)" },
      { label: "Observable universe", value: "About 93 billion light-years across" },
      { label: "Expansion today", value: "Still continuing, and speeding up" },
    ],
    sections: [
      {
        id: "overview",
        title: "What is it?",
        paragraphs: [
          "The Big Bang was not an explosion in empty space, like fireworks in a dark field. Space itself expanded, carrying energy and, later, matter with it.",
          "Asking “what did it expand into?” is like asking what is north of the North Pole. The universe is the whole map. As far as we can tell, it does not need a room around it.",
        ],
      },
      {
        id: "age",
        title: "Age of the Universe",
        paragraphs: [
          "Careful measurements of the cosmic microwave background and the Hubble expansion rate give an age of about 13.8 billion years.",
          "That is enough time for the first stars to form, for galaxies to gather, and for the Sun and Earth to appear only in the last third of the story.",
        ],
      },
      {
        id: "expansion",
        title: "Expansion of the Universe",
        paragraphs: [
          "Distant galaxies recede because the space between us and them is stretching. The farther they are, the faster they recede. Raisin bread in an oven is a classic picture: the raisins (galaxies) do not run; the dough (space) grows.",
          "In recent billions of years the expansion has been speeding up. Scientists call the unknown cause dark energy.",
        ],
      },
      {
        id: "observable",
        title: "The Observable Universe",
        paragraphs: [
          "We cannot see infinitely far. Light needs time to travel, and the universe has a finite age. The observable universe is the bubble of space from which light has had time to reach us.",
          "That bubble is about 93 billion light-years across — larger than 13.8 billion light-years — because space has stretched while the light was on the way.",
        ],
      },
      {
        id: "special",
        title: "What makes it special?",
        paragraphs: [
          "The cosmic microwave background is leftover glow from when the universe became transparent, about 380,000 years after the beginning. It is the oldest light we can take a picture of.",
          "Tiny warmer and cooler spots in that glow are the seeds that grew into galaxy clusters.",
        ],
      },
      {
        id: "study",
        title: "How do we study it?",
        paragraphs: [
          "Satellites map the microwave background. Telescopes measure how fast galaxies recede. Particle accelerators recreate snippets of the early heat. The story is one of the strongest in science because many different clues agree.",
        ],
      },
    ],
    amazingFacts: [
      "Every direction you look, if you could see far enough, you would see the same ancient afterglow.",
      "Dark matter and dark energy together appear to make up about 95% of the universe. Ordinary atoms are the small remainder.",
      "The observable universe contains on the order of two trillion galaxies, according to deep Hubble surveys.",
    ],
    vocabulary: [
      { term: "Cosmic microwave background", definition: "Faint leftover light from the early universe, now seen as microwaves in every direction." },
      { term: "Dark matter", definition: "Unseen matter that pulls on galaxies with gravity but does not shine." },
      { term: "Dark energy", definition: "The unknown something causing the universe’s expansion to speed up." },
      { term: "Observable universe", definition: "The portion of the universe from which light has had time to reach us." },
    ],
    relatedTopics: ["milky-way", "stars", "black-holes", "james-webb-space-telescope"],
    searchKeywords: [
      "big bang",
      "age of the universe",
      "expansion",
      "observable universe",
      "cosmic scale",
      "cmb",
      "cosmic microwave background",
      "dark matter",
      "dark energy",
      "beginning",
    ],
  },
];
