// All text comes from the NASA Space Apps Challenge "Resources" tab
// (NASA's Discarded Equipment Storytelling). Images come from the linked NASA pages.
export const RESOURCES_URL = 'https://www.spaceappschallenge.org/2026/challenges/nasas-discarded-equipment-storytelling/?tab=resources'
export const GROUPS = ['The Moon', 'Mars & beyond']
const NS = 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id='
const SN = 'https://science.nasa.gov/mission/'
const AS = 'https://assets.science.nasa.gov/content/dam/science/psd/solar/'

export const ITEMS = [
  { id: 'lm', icon: '🌕', group: GROUPS[0], name: 'Apollo Lunar Modules',
    desc: `The descent stages of the Lunar Modules (like Apollo 11's Eagle) were left behind as launch pads.`,
    img: 'https://nssdc.gsfc.nasa.gov/planetary/image/ap11_lm_as11_40_5927.jpg', alt: 'Apollo 11 Lunar Module',
    src: { label: 'NSSDCA: Apollo 11 Lunar Module', url: NS + '1969-059C' },
    quiz: { q: 'What were the descent stages of the Lunar Modules used as?', o: ['Launch pads', 'Weather stations', 'Radio towers'], a: 0 } },
  { id: 'lrv', icon: '🚙', group: GROUPS[0], name: 'Lunar Roving Vehicles (LRVs)',
    desc: `Three electric "moon buggies" driven by astronauts. Parked permanently on the Moon.`,
    img: 'https://nssdc.gsfc.nasa.gov/image/spacecraft/apollo_15_lm.jpg', alt: 'Apollo 15 Lunar Module, which carried a Lunar Roving Vehicle',
    src: { label: 'NSSDCA: Apollo 15 Lunar Module (carried the LRV)', url: NS + '1971-063C' },
    quiz: { q: 'How many electric moon buggies were driven by astronauts?', o: ['One', 'Three', 'Ten'], a: 1 } },
  { id: 'alsep', icon: '📡', group: GROUPS[0], name: 'ALSEP Scientific Packages',
    desc: `Apollo Lunar Surface Experiments Packages (seismometers, retroreflectors, etc.) left to do science after astronauts departed.`,
    img: 'https://nssdc.gsfc.nasa.gov/planetary/image/apollo12_lunar_module.jpg', alt: 'Apollo 12 Lunar Module and ALSEP',
    src: { label: 'NSSDCA: Apollo 12 Lunar Module / ALSEP', url: NS + '1969-099C' },
    quiz: { q: 'What did the ALSEP packages do after the astronauts departed?', o: ['Took selfies', 'Science', 'Launched rockets'], a: 1 } },
  { id: 'surveyor', icon: '🛬', group: GROUPS[0], name: 'Surveyor Landers',
    desc: `Robotic probes sent in the 1960s to prove soft landings were possible.`,
    img: AS + '2023/07/as12-48-7134_1280.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg', alt: 'Surveyor 3 on the Moon, with the Apollo 12 Lunar Module in the background',
    src: { label: 'NASA Science: Surveyor 3', url: SN + 'surveyor-3/' },
    quiz: { q: 'What did the Surveyor landers prove?', o: ['Soft landings were possible', 'The Moon has oceans', 'Rovers can fly'], a: 0 } },
  { id: 'sojourner', icon: '🤖', group: GROUPS[1], name: 'Sojourner Rover',
    desc: `The first rover on Mars (1997), delivered by the Pathfinder lander. Now permanently parked.`,
    img: AS + '2023/09/p/i/a/0/PIA01551-1.jpg', alt: 'Sojourner rover on the surface of Mars',
    src: { label: 'NASA Science: Mars Pathfinder', url: SN + 'mars-pathfinder/' },
    quiz: { q: 'Which lander delivered Sojourner to Mars?', o: ['Viking', 'Pathfinder', 'Phoenix'], a: 1 } },
  { id: 'mer', icon: '🛞', group: GROUPS[1], name: 'Spirit & Opportunity',
    desc: `Twin rovers that operated for years. Both are now inactive monuments to Mars exploration.`,
    img: 'https://science.nasa.gov/wp-content/uploads/2008/02/365-mer-1280-spirit.jpg', alt: 'Artist concept of the Spirit rover on Mars',
    src: { label: 'NASA Science: Spirit and Opportunity', url: SN + 'mars-exploration-rovers-spirit-and-opportunity/' },
    quiz: { q: 'What are Spirit and Opportunity today?', o: ['Still driving', 'Inactive monuments to Mars exploration', 'Orbiting Mars'], a: 1 } },
  { id: 'viking', icon: '🛰️', group: GROUPS[1], name: 'Viking 1 & 2 Landers',
    desc: `The first U.S. landers to successfully operate on Mars (1976), remaining exactly where they touched down.`,
    img: AS + '2023/07/Viking_1_First_Image_From_Mars_1280.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg', alt: 'First image from the surface of Mars, taken by Viking 1',
    src: { label: 'NASA Science: Viking 1', url: SN + 'viking-1/' },
    quiz: { q: 'In which year did the Viking landers successfully operate on Mars?', o: ['1997', '1969', '1976'], a: 2 } },
  { id: 'insight', icon: '🌋', group: GROUPS[1], name: 'Phoenix & InSight Landers',
    desc: `Phoenix dug for water ice; InSight listened for marsquakes. Both eventually lost power.`,
    img: 'https://science.nasa.gov/wp-content/uploads/2008/02/insight.jpg', alt: 'Artist concept of the InSight lander on Mars',
    src: { label: 'NASA Science: InSight Lander', url: SN + 'insight/' },
    quiz: { q: 'What did InSight listen for?', o: ['Radio stations', 'Marsquakes', 'Dust devils'], a: 1 } },
  { id: 'dawn', icon: '☄️', group: GROUPS[1], name: 'Dawn Spacecraft',
    desc: `Mapped Vesta and Ceres. Ran out of fuel and remains in a perpetual, unpowered orbit around Ceres.`,
    img: AS + 'internal_resources/2932/Dawn_Artists_Concept.jpeg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg', alt: 'Artist concept of the Dawn spacecraft',
    src: { label: 'NASA Science: Dawn', url: SN + 'dawn/' },
    quiz: { q: 'Where does Dawn remain today?', o: ['In orbit around Ceres', 'On the Moon', 'Back on Earth'], a: 0 } },
  { id: 'near', icon: '🪨', group: GROUPS[1], name: 'NEAR Shoemaker',
    desc: `First spacecraft to orbit and land on an asteroid. Left resting on the surface of 433 Eros.`,
    img: AS + '2023/07/nearspacecraft.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg', alt: 'Illustration of the NEAR spacecraft at asteroid Eros',
    src: { label: 'NASA Science: NEAR Shoemaker', url: SN + 'near-shoemaker/' },
    quiz: { q: 'Where was NEAR Shoemaker left resting?', o: ['On Mars', 'On the surface of 433 Eros', 'In Earth orbit'], a: 1 } },
  { id: 'pioneer', icon: '🚀', group: GROUPS[1], name: 'Pioneer 10 & 11',
    desc: `Early deep-space probes that explored the outer planets. Now drifting silently out of the solar system.`,
    img: AS + 'internal_resources/731/Illustrated_Pioneer_10_at_Jupiter.jpeg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg', alt: 'Illustration of Pioneer 10 at Jupiter',
    src: { label: 'NASA Science: Pioneer 10', url: SN + 'pioneer-10/' },
    quiz: { q: 'Where are Pioneer 10 and 11 drifting now?', o: ['Back toward Earth', 'Out of the solar system', 'Around the Moon'], a: 1 } },
  { id: 'ingenuity', icon: '🚁', group: GROUPS[1], name: 'Ingenuity Helicopter',
    desc: `The first aircraft on another planet. Sustained rotor damage and became a stationary artifact.`,
    img: 'https://science.nasa.gov/wp-content/uploads/2024/06/ingenuity-topiccard-3x2-1.jpg', alt: 'Ingenuity Mars Helicopter',
    src: { label: 'NASA Science: Ingenuity Mars Helicopter', url: SN + 'mars-2020-perseverance/ingenuity-mars-helicopter/' },
    quiz: { q: 'What was Ingenuity the first to be on another planet?', o: ['Submarine', 'Aircraft', 'Telescope'], a: 1 } },
  { id: 'kepler', icon: '🔭', group: GROUPS[1], name: 'Kepler Space Telescope',
    desc: `Revolutionary exoplanet-hunting telescope that ran out of fuel and is drifting in an Earth-trailing orbit.`,
    img: 'https://images-assets.nasa.gov/image/PIA18904/PIA18904~large.jpg', alt: 'Artist concept of the Kepler space telescope',
    src: { label: 'NASA Science: Kepler / K2', url: SN + 'kepler/' },
    quiz: { q: 'What was the Kepler telescope hunting for?', o: ['Asteroids', 'Exoplanets', 'Comets'], a: 1 } }
]

export const RANKS = [[1000, 'Mission Commander'], [600, 'Space Archaeologist'], [0, 'Explorer']]
export const VO = {
  intro: `Hello, space archaeologist! NASA left spacecraft, rovers and landers on the Moon, on Mars, and in deep space. Visit all ${ITEMS.length} sites, and learn what was left behind.`,
  map: 'Choose a site to explore.',
  mapDone: 'You visited every site. Open your mission certificate.',
  final: total => `Mission complete! You earned ${total} points out of ${ITEMS.length * 100}. Great work, space archaeologist.`
}
