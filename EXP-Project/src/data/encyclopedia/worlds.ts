import type { EncyclopediaEntry } from "@/data/encyclopedia/types";

export const worldEntries: EncyclopediaEntry[] = [
  {
    slug: "mars",
    title: "Mars",
    category: "solar-system",
    shortDescription: "The rusty red planet with canyons, volcanoes, and robot explorers.",
    intro: "Mars is a cold desert world. It is about half as wide as Earth, yet it holds some of the solar system’s most enormous landscapes.",
    visual: "planet",
    planetId: "mars",
    featured: true,
    popular: true,
    quizLink: true,
    quickFacts: [
      { label: "Type", value: "Rocky planet" },
      { label: "Distance from Sun", value: "228 million km", note: "1.52 AU" },
      { label: "Diameter", value: "6,779 km", note: "About half of Earth" },
      { label: "Length of day", value: "24.6 hours" },
      { label: "Length of year", value: "687 Earth days" },
      { label: "Moons", value: "2 — Phobos and Deimos" },
      { label: "Temperature", value: "−65°C average" },
    ],
    sections: [
      {
        id: "overview",
        title: "What is it?",
        paragraphs: [
          "Mars is the fourth planet from the Sun. Iron-rich dust gives it a rusty color, which is why people call it the Red Planet.",
          "A day there is almost the same length as ours. A year lasts 687 Earth days — so a 10-year-old on Earth would be only about 5 in Martian years.",
        ],
      },
      {
        id: "made-of",
        title: "What is it made of?",
        paragraphs: [
          "Mars is a rocky planet with a thin carbon-dioxide atmosphere. Polar ice caps hold frozen water and frozen carbon dioxide.",
          "Long ago, rivers and lakes appear to have shaped the surface. Today the air is too thin for stable liquid water to last in the open, but ice remains in the ground and at the poles.",
        ],
      },
      {
        id: "formation",
        title: "How did it form?",
        paragraphs: [
          "Mars formed with the other rocky planets. It cooled faster than Earth because it is smaller. Its magnetic field faded, and much of its thicker ancient atmosphere was stripped away by the solar wind.",
        ],
      },
      {
        id: "special",
        title: "What makes it special?",
        paragraphs: [
          "Olympus Mons is the tallest volcano we know in the solar system — about 22 kilometers high, nearly three times the height of Mount Everest.",
          "Valles Marineris is a canyon system that would stretch from New York to Los Angeles. Imagine a scar on a school-globe Earth that ran a quarter of the way around.",
        ],
      },
      {
        id: "there",
        title: "What would it be like there?",
        paragraphs: [
          "The sky can look butterscotch or dusty pink. Sunsets may turn blue. You would need a spacesuit: the air is unbreathable, and the pressure is less than 1% of Earth’s.",
          "Gravity is 38% of Earth’s, the same as Mercury. A running jump would feel springy, but the cold and thin air would still be dangerous.",
        ],
      },
      {
        id: "study",
        title: "How do we study it?",
        paragraphs: [
          "Orbiters photograph the surface. Rovers such as Curiosity and Perseverance drive as robot geologists. Perseverance even launched Ingenuity, the first aircraft to fly on another planet.",
          "Scientists are searching for signs that Mars once had conditions friendly to microbes — and they are collecting samples that a future mission may bring home.",
        ],
      },
    ],
    amazingFacts: [
      "Mars has two tiny moons named Phobos and Deimos, after fear and panic in Greek myth.",
      "A dust storm can wrap the whole planet and last for weeks.",
      "In 2021, a helicopter named Ingenuity made the first powered flight on another world.",
    ],
    vocabulary: [
      { term: "Rover", definition: "A wheeled robot that explores the surface of another world." },
      { term: "Solar wind", definition: "A stream of charged particles flowing out from the Sun." },
      { term: "Ice cap", definition: "A thick sheet of ice covering a polar region." },
    ],
    relatedTopics: ["earth", "jupiter", "solar-system", "apollo-11"],
    searchKeywords: ["mars", "red planet", "rover", "olympus mons", "canyon", "phobos", "deimos", "water"],
  },
  {
    slug: "jupiter",
    title: "Jupiter",
    category: "solar-system",
    shortDescription: "The solar system’s giant, striped with storms.",
    intro: "Jupiter is a gas giant so wide that about 11 Earths could sit side by side across it. More than 1,300 Earths could fit inside.",
    visual: "planet",
    planetId: "jupiter",
    featured: true,
    popular: true,
    quizLink: true,
    quickFacts: [
      { label: "Type", value: "Gas giant" },
      { label: "Distance from Sun", value: "778 million km", note: "5.2 AU" },
      { label: "Diameter", value: "139,820 km", note: "About 11 Earths across" },
      { label: "Length of day", value: "10 hours" },
      { label: "Length of year", value: "12 Earth years" },
      { label: "Moons", value: "95 confirmed" },
      { label: "Temperature", value: "−110°C at cloud tops" },
    ],
    sections: [
      {
        id: "overview",
        title: "What is it?",
        paragraphs: [
          "Jupiter is the fifth planet from the Sun and the largest in our solar system. It is made mostly of hydrogen and helium — the same ingredients as a star, but not massive enough to ignite fusion.",
          "Its stripes are bands of clouds racing in opposite directions. The Great Red Spot is a storm larger than Earth that has lasted for centuries.",
        ],
      },
      {
        id: "made-of",
        title: "What is it made of?",
        paragraphs: [
          "There is no solid ground to land on. If you dropped into Jupiter, you would fall through colder clouds, then hotter, thicker hydrogen, until the pressure became enormous.",
          "Deep inside, hydrogen may behave like a metal. That metallic hydrogen helps generate Jupiter’s powerful magnetic field — the strongest of any planet here.",
        ],
      },
      {
        id: "formation",
        title: "How did it form?",
        paragraphs: [
          "Jupiter likely grew first among the planets. A large rocky-icy core gathered a huge envelope of gas from the solar nebula before the Sun’s light and wind blew the leftover gas away.",
          "Because it formed early and grew huge, Jupiter shaped the paths of many smaller objects, including some that later hit the inner planets.",
        ],
      },
      {
        id: "special",
        title: "What makes it special?",
        paragraphs: [
          "Jupiter is almost a planetary system of its own. Its four largest moons — Io, Europa, Ganymede, and Callisto — were discovered by Galileo in 1610.",
          "Europa may hide a saltwater ocean under ice. Ganymede is larger than Mercury. Io is the most volcanic world we know.",
        ],
      },
      {
        id: "there",
        title: "What would it be like there?",
        paragraphs: [
          "At the cloud tops you would find ammonia ices, fierce winds, and lightning. Gravity is more than twice Earth’s, so standing — if you had a platform — would feel crushing.",
          "Imagine this: a day lasts only about 10 hours. The whole giant planet spins faster than any other in the solar system.",
        ],
      },
      {
        id: "study",
        title: "How do we study it?",
        paragraphs: [
          "Voyager, Galileo, Juno, and other spacecraft have flown by or orbited Jupiter. Telescopes on Earth and in space watch its storms change from year to year.",
          "Open the Solar System observatory to see how far Jupiter sits from the inner worlds — much farther than a classroom poster can suggest.",
        ],
      },
    ],
    amazingFacts: [
      "About 11 Earths could fit side by side across Jupiter. The exact diameter is 139,820 kilometers.",
      "Jupiter has a faint ring system, much thinner than Saturn’s.",
      "Its magnetic field is so strong it could fit several Suns inside the space it influences.",
    ],
    vocabulary: [
      { term: "Gas giant", definition: "A huge planet made mostly of hydrogen and helium, with no solid surface like Earth’s." },
      { term: "Great Red Spot", definition: "A giant storm in Jupiter’s atmosphere that has lasted for hundreds of years." },
      { term: "Metallic hydrogen", definition: "Hydrogen squeezed so hard it conducts electricity like a metal." },
    ],
    relatedTopics: ["saturn", "solar-system", "sun", "mars"],
    searchKeywords: ["jupiter", "biggest planet", "largest planet", "gas giant", "great red spot", "moons", "galileo", "europa"],
  },
  {
    slug: "saturn",
    title: "Saturn",
    category: "solar-system",
    shortDescription: "The ringed gas giant that would float in a giant bathtub.",
    intro: "Saturn is a pale gold world famous for icy rings. It is the second-largest planet, and it is less dense than water.",
    visual: "planet",
    planetId: "saturn",
    popular: true,
    quizLink: true,
    quickFacts: [
      { label: "Type", value: "Gas giant" },
      { label: "Distance from Sun", value: "1.4 billion km", note: "9.58 AU" },
      { label: "Diameter", value: "116,460 km", note: "About 9 Earths across" },
      { label: "Length of day", value: "10.7 hours" },
      { label: "Length of year", value: "29 Earth years" },
      { label: "Moons", value: "146 confirmed" },
      { label: "Temperature", value: "−140°C at cloud tops" },
    ],
    sections: [
      {
        id: "overview",
        title: "What is it?",
        paragraphs: [
          "Saturn is the sixth planet from the Sun. Through a small telescope its rings look like a single bright hoop. Up close they are billions of chunks of ice and rock.",
          "The planet itself is a ball of hydrogen and helium with bands of clouds. Winds there can blow faster than a jet aircraft.",
        ],
      },
      {
        id: "made-of",
        title: "What is it made of?",
        paragraphs: [
          "Like Jupiter, Saturn has no solid surface. Its average density is lower than water. If you could find a bathtub big enough, Saturn would float.",
          "The rings are mostly water ice. Some particles are as fine as powder. Others are as large as houses.",
        ],
      },
      {
        id: "formation",
        title: "How did it form?",
        paragraphs: [
          "Saturn grew in the outer solar system where ices were common. The rings may be leftover pieces of a shattered moon, or material that never formed into a moon at all. Scientists are still testing both ideas.",
        ],
      },
      {
        id: "special",
        title: "What makes it special?",
        paragraphs: [
          "Titan, Saturn’s largest moon, has a thick nitrogen atmosphere and lakes of liquid methane. Enceladus sprays icy water into space from a hidden ocean.",
          "Those moons make Saturn one of the best places to ask a big question: can life exist beyond Earth?",
        ],
      },
      {
        id: "there",
        title: "What would it be like there?",
        paragraphs: [
          "From a safe distance the rings would look like a glowing highway around the planet. Up close they are more like a blizzard of glittering gravel.",
          "Gravity near the cloud tops is close to Earth’s, but the air would still be unbreathable and bitterly cold.",
        ],
      },
      {
        id: "study",
        title: "How do we study it?",
        paragraphs: [
          "Pioneer, Voyager, and especially Cassini transformed Saturn from a pretty picture into a family of worlds. Cassini flew between the rings and dove into the atmosphere at the end of its mission in 2017.",
        ],
      },
    ],
    amazingFacts: [
      "Saturn would float in water because it is less dense than a bathtub full of it — if you had a bathtub the size of a planet.",
      "The rings are huge across but thin. In many places they are only tens of meters thick.",
      "Saturn has more moons than any other planet we have counted so far.",
    ],
    vocabulary: [
      { term: "Ring system", definition: "A disk of ice, dust, and rock orbiting a planet." },
      { term: "Density", definition: "How much mass is packed into a certain amount of space." },
      { term: "Methane", definition: "A chemical that can be a gas on Earth and a liquid in Titan’s extreme cold." },
    ],
    relatedTopics: ["jupiter", "solar-system", "neptune", "james-webb-space-telescope"],
    searchKeywords: ["saturn", "rings", "float", "gas giant", "titan", "enceladus", "cassini"],
  },
  {
    slug: "uranus",
    title: "Uranus",
    category: "solar-system",
    shortDescription: "An ice giant that rolls around the Sun on its side.",
    intro: "Uranus is a pale blue-green ice giant. It spins almost on its side, as if a giant collision knocked it over long ago.",
    visual: "planet",
    planetId: "uranus",
    quizLink: true,
    quickFacts: [
      { label: "Type", value: "Ice giant" },
      { label: "Distance from Sun", value: "2.9 billion km", note: "19.2 AU" },
      { label: "Diameter", value: "50,724 km", note: "About 4 Earths across" },
      { label: "Length of day", value: "17 hours" },
      { label: "Length of year", value: "84 Earth years" },
      { label: "Moons", value: "28" },
      { label: "Temperature", value: "−195°C" },
    ],
    sections: [
      {
        id: "overview",
        title: "What is it?",
        paragraphs: [
          "Uranus is the seventh planet from the Sun. It was the first planet discovered with a telescope, in 1781, by William Herschel.",
          "Its color comes from methane in the atmosphere, which absorbs red light and leaves a blue-green glow.",
        ],
      },
      {
        id: "made-of",
        title: "What is it made of?",
        paragraphs: [
          "Ice giants are not giant ice cubes. “Ice” here means water, ammonia, and methane that were slushy or solid in the cold outer solar system and are now mixed under enormous pressure.",
          "A hydrogen-and-helium atmosphere wraps a hot, dense fluid interior. There is no place to land.",
        ],
      },
      {
        id: "formation",
        title: "How did it form?",
        paragraphs: [
          "Uranus likely grew from rock and ice, then captured gas. A massive impact may have tilted the whole planet. That tilt gives Uranus extreme seasons lasting about 21 years each.",
        ],
      },
      {
        id: "special",
        title: "What makes it special?",
        paragraphs: [
          "Most planets spin like tops. Uranus rolls more like a ball on its side. During parts of its orbit, one pole points almost straight at the Sun for decades.",
          "It has faint rings and a family of icy moons named mostly after characters from Shakespeare and Alexander Pope.",
        ],
      },
      {
        id: "there",
        title: "What would it be like there?",
        paragraphs: [
          "The sunlight is weak — about 1/400 as bright as on Earth. The clouds are bitterly cold. If you could hover in the upper atmosphere, the Sun would look like a bright star.",
        ],
      },
      {
        id: "study",
        title: "How do we study it?",
        paragraphs: [
          "Voyager 2 is the only spacecraft that has visited Uranus, flying past in 1986. Telescopes such as Hubble and Webb continue to watch storms and rings from afar. Scientists hope for a new orbiter one day.",
        ],
      },
    ],
    amazingFacts: [
      "A 10-year-old on Earth would not yet be one year old on Uranus.",
      "Uranus was originally going to be named after King George III. The name Uranus comes from an ancient sky god.",
      "Its rings were discovered in 1977 when they blocked a star’s light.",
    ],
    vocabulary: [
      { term: "Ice giant", definition: "A large planet rich in water, ammonia, and methane, wrapped in a hydrogen atmosphere." },
      { term: "Axial tilt", definition: "How much a planet leans as it spins. Uranus leans almost 98 degrees." },
      { term: "Methane", definition: "A gas that makes Uranus and Neptune look blue." },
    ],
    relatedTopics: ["neptune", "saturn", "solar-system", "jupiter"],
    searchKeywords: ["uranus", "ice giant", "sideways", "tilt", "blue green", "herschel"],
  },
  {
    slug: "neptune",
    title: "Neptune",
    category: "solar-system",
    shortDescription: "The farthest planet, painted deep blue and whipped by jet-speed winds.",
    intro: "Neptune is an ice giant at the edge of the planetary neighborhood. It has the fastest winds measured on any planet in the solar system.",
    visual: "planet",
    planetId: "neptune",
    quizLink: true,
    quickFacts: [
      { label: "Type", value: "Ice giant" },
      { label: "Distance from Sun", value: "4.5 billion km", note: "30.05 AU" },
      { label: "Diameter", value: "49,244 km", note: "About 4 Earths across" },
      { label: "Length of day", value: "16 hours" },
      { label: "Length of year", value: "165 Earth years" },
      { label: "Moons", value: "16" },
      { label: "Temperature", value: "−200°C" },
    ],
    sections: [
      {
        id: "overview",
        title: "What is it?",
        paragraphs: [
          "Neptune is the eighth planet from the Sun. It was predicted with mathematics before anyone saw it, because Uranus’s path looked slightly tugged by an unseen world.",
          "Its deep blue color is richer than Uranus’s, even though the two planets are similar in size. Scientists are still working out exactly why.",
        ],
      },
      {
        id: "made-of",
        title: "What is it made of?",
        paragraphs: [
          "Neptune has a hydrogen, helium, and methane atmosphere over a hot, dense mixture of water, ammonia, and methane ices. At the center is likely a rocky core.",
          "Winds can exceed 2,000 kilometers per hour — faster than a jet and faster than sound on Earth.",
        ],
      },
      {
        id: "formation",
        title: "How did it form?",
        paragraphs: [
          "Neptune may have formed closer in and then migrated outward, or it may have grown where it is. Either way, it finished as the last of the eight official planets.",
        ],
      },
      {
        id: "special",
        title: "What makes it special?",
        paragraphs: [
          "Triton, Neptune’s largest moon, orbits backward. That is a clue it was captured rather than formed in place. Triton has geysers of nitrogen and a surface that looks strangely young.",
          "Voyager 2 — the only visitor so far — found a Great Dark Spot, a storm that later faded, showing that Neptune’s weather is restless.",
        ],
      },
      {
        id: "there",
        title: "What would it be like there?",
        paragraphs: [
          "Sunlight is about 900 times weaker than on Earth. The planet would glow with a dim blue twilight. You would not hear the winds as we do; the atmosphere is a different mix and there is no solid ground to stand on.",
        ],
      },
      {
        id: "study",
        title: "How do we study it?",
        paragraphs: [
          "Voyager 2 flew past in 1989. Since then, Hubble, Webb, and large ground telescopes have watched clouds, seasons, and rings. A dedicated Neptune orbiter remains a dream for future explorers.",
        ],
      },
    ],
    amazingFacts: [
      "Neptune has completed only one orbit since its discovery in 1846. It finished that first lap in 2011.",
      "Its winds can blow faster than a jet plane.",
      "Triton is slowly spiraling inward and may one day be torn into a ring.",
    ],
    vocabulary: [
      { term: "Ice giant", definition: "A large, cold planet rich in water, ammonia, and methane." },
      { term: "Capture", definition: "When a planet’s gravity steals an object and makes it a moon." },
      { term: "Great Dark Spot", definition: "A huge storm Voyager 2 saw on Neptune in 1989." },
    ],
    relatedTopics: ["uranus", "jupiter", "solar-system", "james-webb-space-telescope"],
    searchKeywords: ["neptune", "farthest planet", "blue", "winds", "triton", "ice giant", "voyager"],
  },
  {
    slug: "solar-system",
    title: "Solar System",
    category: "solar-system",
    shortDescription: "One star, eight planets, and a vast family of smaller worlds.",
    intro: "The solar system is our cosmic neighborhood: the Sun, eight planets, moons, dwarf planets, asteroids, and comets, all bound by gravity.",
    visual: "cosmos",
    featured: true,
    popular: true,
    embed: "solar-system",
    quizLink: true,
    quickFacts: [
      { label: "Center", value: "The Sun" },
      { label: "Planets", value: "8" },
      { label: "Age", value: "4.6 billion years" },
      { label: "Known moons", value: "200+" },
      { label: "Edge (heliopause)", value: "About 18 billion km" },
      { label: "Nearest star beyond", value: "Proxima Centauri, 4.24 light-years" },
    ],
    sections: [
      {
        id: "overview",
        title: "What is it?",
        paragraphs: [
          "A solar system is a star and the objects that orbit it. Ours includes rocky inner planets, giant outer planets, a belt of asteroids, the Kuiper Belt of icy leftovers, and a distant swarm of comets.",
          "If the Sun were a grapefruit, Earth would be a grain of salt about 15 meters away. Neptune would be a small pebble more than a football field away.",
        ],
      },
      {
        id: "made-of",
        title: "What is it made of?",
        paragraphs: [
          "Almost all the mass — more than 99.8% — is in the Sun. The planets are leftovers that happened to gather into worlds. Between them is not empty nothing: dust, radiation, and the solar wind fill the space.",
        ],
      },
      {
        id: "formation",
        title: "How did it form?",
        paragraphs: [
          "A collapsing cloud made the Sun. A spinning disk of leftovers made the planets. Close in, only rock and metal could survive the heat. Farther out, ices could stick, helping giants grow huge.",
        ],
      },
      {
        id: "special",
        title: "What makes it special?",
        paragraphs: [
          "It is the only planetary system we can study up close. Other stars have planets too — exoplanets — but they are so far away that we usually see them as tiny dips in starlight, not as landscapes.",
          "Dwarf planets such as Pluto, Ceres, and Eris, plus countless asteroids and comets, show that “planet” is only one kind of world.",
        ],
      },
      {
        id: "there",
        title: "What would it be like there?",
        paragraphs: [
          "You already live here. Traveling from world to world, though, would mean crossing huge dark gaps. The planets are not crowded like they look on a poster. Most of a journey is empty space.",
        ],
      },
      {
        id: "study",
        title: "How do we study it?",
        paragraphs: [
          "Telescopes, radar, and spacecraft have visited every planet. Voyager 1 has even crossed into interstellar space. The interactive map below lets you tap each planet and compare their paths around the Sun.",
        ],
      },
    ],
    amazingFacts: [
      "Light from the Sun takes about 8 minutes to reach Earth and more than 4 hours to reach Neptune.",
      "There are more than a million known asteroids, and many more still uncounted.",
      "A comet’s tail always points away from the Sun, pushed by sunlight and the solar wind.",
    ],
    vocabulary: [
      { term: "Orbit", definition: "The curved path an object follows around another object." },
      { term: "Asteroid", definition: "A rocky leftover from planet formation, usually orbiting the Sun between Mars and Jupiter." },
      { term: "Comet", definition: "An icy body that can grow a glowing tail when it nears the Sun." },
      { term: "Dwarf planet", definition: "A round world that orbits the Sun but has not cleared its neighborhood of other objects." },
    ],
    relatedTopics: ["sun", "earth", "jupiter", "stars"],
    searchKeywords: [
      "solar system",
      "planets",
      "asteroids",
      "comets",
      "dwarf planets",
      "pluto",
      "neighborhood",
      "our system",
    ],
  },
];
