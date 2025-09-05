import React, { useEffect, useRef } from 'react';

const ABOUT_IMAGE_URL = "/images/IMG_7254-fi34743127x417.JPG";

type ProjectItem = {
  title: string;
  description: string;
  image: string;
  link?: string;
};

const PROJECTS: ProjectItem[] = [
  {
    title: 'UTMB 2023',
    description: "Management of Ruth Croft and Duncan Périllat's pacing and nutrition plan",
    image: '/images/IMG_7658-fi35603242x140.JPG',
  },
  {
    title: 'Norseman 2023',
    description: "Accompanying and supporting Margaux Gressé on the Norseman, the world's toughest triathlon in Norway",
    image: '/images/IMG_6273-fi35603238x140.jpg',
    link: 'http://www.linkedin.com/pulse/2023-norseman-joseph-mestrallet%3FtrackingId=s0TXDDKBGQKiVmp8K3iJUw%253D%253D/?trackingId=s0TXDDKBGQKiVmp8K3iJUw%3D%3D'
  },
  {
    title: 'UTMB 2023',
    description: "Preparation of data insights on the leaders for live video on the l'Équipe channel and enhance the spectator experience",
    image: '/images/Singap2-fi35603565x186.jpeg',
    link: 'http://www.linkedin.com/posts/joseph-mestrallet-770279a7_utmb-2023-activity-7105151047119028224--YOu?utm_source=share&utm_medium=member_desktop'
  },
  {
    title: 'CCC et Transvulcania by UTMB 2022',
    description: "Petter Engdahl's race briefing to ensure his pacing plan is based on his energy expenditure and particular abilities. 2 wins and one race record",
    image: '/images/petter-fi35603243x210.jpg',
    link: 'http://medium.com/p/e03fcf77bdbb'
  },
  {
    title: 'Strava integration',
    description: 'Launch of a Strava integration with Alodie Boissonet to normalize running speeds according to outdoor conditions.',
    image: '/images/strava_logo-fi35603244x140.png',
    link: '/services/strava-integration'
  },
  {
    title: 'World Championship Budapest',
    description: "Solange Jesus' race briefing for Olympic qualification",
    image: '/images/solange-jesus-5-fi35603264x210.jpg',
  },
  {
    title: 'T24 Bormes 2022',
    description: 'Development of a 24-hour triathlon team strategy. Victory by one point out of more than 1000 !',
    image: '/images/T24victory-fi35603265x210.jpg',
    link: 'http://medium.com/@josephmestrallet/le-triathlon-une-histoire-de-maths-9937d33cbb7d'
  },
  {
    title: 'T24 Ré 2023',
    description: 'Development of a team strategy with real-time fatigue monitoring',
    image: '/images/00425-IrXQpp-fi35603267x210.jpg',
    link: 'http://www.linkedin.com/pulse/un-triathlon-de-24-heures-joseph-mestrallet%3FtrackingId=Izp3KNuRu%252BTmxU3IWm91hA%253D%253D/?trackingId=Izp3KNuRu%2BTmxU3IWm91hA%3D%3D'
  }
];

// Photo gallery images (local copies)
const GALLERY_IMAGES: string[] = [
  "/images/IMG_8111-fi35655319x513.JPG",
  "/images/IMG_6280 copie-fi35655334x660.JPG",
  "/images/IMG_7454-fi35655358x478.JPG",
  "/images/IMG_6273-fi35655346x373.JPG",
  "/images/IMG_6074-fi35655370x660.JPG",
  "/images/IMG_0152-fi35655393x380.JPG",
  "/images/IMG_9745-fi35655414x660.JPG",
  "/images/IMG_8619-fi35655452x470.JPG",
  "/images/ECPA Weekend Final-051-fi35655507x299.jpg",
  "/images/IMG_8290-fi35655441x453.JPG",
  "/images/IMG_9391-fi35655430x260.JPG",
  "/images/IMG_9962 Grande-fi35655497x340.jpeg",
  "/images/IMG_6306-fi35655471x280.JPG",
  "/images/IMG_7944-fi35655505x320.JPG",
  "/images/IMG_7568-fi35655511x315.JPG",
  "/images/ECPA Weekend Final-055-fi35655516x360.jpg",
  "/images/IMG_7425-fi35655526x327.JPG",
];
// Projects scroller: two horizontal rows inside an overflow container
const ProjectsScroller: React.FC<{ items?: ProjectItem[] }> = ({ items = PROJECTS }) => {
  return (
    <div className="relative overflow-x-auto scrollbar-thumb-black">
      <div className="grid grid-rows-2 grid-flow-col auto-cols gap-6 px-6">
        {items.map((p, idx) => (
          p.link ? (
            <a key={`${p.title}-${idx}`} href={p.link} target={p.link.startsWith('http') ? '_blank' : undefined} rel={p.link.startsWith('http') ? 'noopener noreferrer' : undefined} className="block group">
              <div className="bg-white text-black rounded-2xl shadow-md overflow-hidden h-[180px] flex ring-0 transition group-hover:ring-2 group-hover:ring-accent">
                <div className="p-4 w-full">
                  <div className="grid grid-cols-[140px_1fr] gap-4 items-center h-full">
                    <div className="w-[140px] h-[140px] rounded-md overflow-hidden bg-gray-100">
                      <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="h-full flex flex-col justify-center">
                      <h3 className="text-lg font-semibold">{p.title}</h3>
                      <p className="text-gray-700 text-sm mt-1 leading-relaxed overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>{p.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ) : (
            <div key={`${p.title}-${idx}`} className="bg-white text-black rounded-2xl shadow-md overflow-hidden h-[180px] flex ring-0 transition hover:ring-2 hover:ring-accent">
              <div className="p-4 w-full">
                <div className="grid grid-cols-[140px_1fr] gap-4 items-center h-full">
                  <div className="w-[140px] h-[140px] rounded-md overflow-hidden bg-gray-100">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="h-full flex flex-col justify-center">
                    <h3 className="text-lg font-semibold">{p.title}</h3>
                    <p className="text-gray-700 text-sm mt-1 leading-relaxed overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>{p.description}</p>
                  </div>
                </div>
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  );
};


interface MainPageProps {
  activeSection?: string;
}

const MainPage: React.FC<MainPageProps> = ({ activeSection }) => {
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    if (activeSection && sectionRefs.current[activeSection]) {
      sectionRefs.current[activeSection]?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, [activeSection]);

  return (
    <div className="bg-dark-bg text-white">
      {/* Hero Section - using original background image */}
      <section
        ref={(el) => { sectionRefs.current['hero'] = el; }}
        className="min-h-screen flex items-center justify-center pt-16 relative font-sans"
        style={{
          backgroundImage: "url('/images/tomlactate.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'right center',
          backgroundAttachment: 'fixed',
          backgroundColor: 'rgba(0, 0, 0, 0.48)'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-32"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-md">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white uppercase tracking-wide font-sans">
              Joseph Mestrallet
            </h1>
            <p className="text-lg md:text-xl text-white mb-8 font-light">
              Performance Science
            </p>
          </div>
        </div>
        {/* Original image from homepage */}
        <div className="absolute right-16 top-1/2 transform -translate-y-1/2 hidden lg:block">
          <img
            src="/images/tomlactate.jpeg"
            alt="Joseph Mestrallet"
            className="w-80 h-auto rounded-lg shadow-2xl"
          />
        </div>
      </section>





      {/* About Section - White background like original */}
      <section
        ref={(el) => { sectionRefs.current['about'] = el; }}
        className="py-20 bg-white text-black"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={ABOUT_IMAGE_URL}
                alt="About Joseph Mestrallet"
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 uppercase tracking-wide">About me</h2>
              <div className="space-y-4 text-gray-800">
                <p>
                  From Chamonix, French Alps, I have been involved in the world of trail running and endurance sports since my childhood. During my higher education I discovered my second love: mathematics. I then became a Data Scientist with this goal in mind: find a job that combines these two passions.
                </p>
                <p>
                  By running in competitions, I gradually developed an expertise on the daily life of athletes and the problems they face.
                  By doing my master thesis on this subject, I was able to understand the whole ecosystem and set up projects with international athletes and UTMB Groupe.
                </p>
                <p>
                  The use of data is nowadays indissociable from high level sports. Moreover, it is going to deeply transform the way amateur and leisure athletes go about their own activities and passions; Strava paved the way in that regard, yet we can still go much, much further, in both data customization and accuracy. If you want to discuss these topics, please leave me a message.
                </p>
              </div>

              {/* Data science block moved below the image+text row */}

            </div>
          </div>

          {/* Data science to optimize performance - full width below */}
          <div className="mt-16">
            <h3
              className="text-2xl font-bold text-center mb-12"
            >
              Data science to optimize performance
            </h3>

            <div className="grid gap-8 md:grid-cols-4">
              <div className="text-center bg-gray-50 p-6 rounded-lg shadow-sm">
                <h4 className="text-lg font-semibold mb-4">Map the athlete</h4>
                <p className="text-sm text-gray-700">
                  Thanks to data science, it will be possible to model the functioning of an athlete. To help the coach, I will determine his reaction to external conditions, his strengths as well as a personalized load model.
                </p>
              </div>

              <div className="text-center bg-gray-50 p-6 rounded-lg shadow-sm">
                <h4 className="text-lg font-semibold mb-4">Forecast performance</h4>
                <p className="text-sm text-gray-700">
                  At a time of hyper-personalization, race briefings are becoming more and more accurate. Monitoring the pacing up to the minute is therefore essential to optimize the athlete's qualities.
                </p>
              </div>

              <div className="text-center bg-gray-50 p-6 rounded-lg shadow-sm">
                <h4 className="text-lg font-semibold mb-4">Adjust to conditions</h4>
                <p className="text-sm text-gray-700">
                  The unexpected is the spice of the race. The performance scientist must be able to guide real time the athlete according to the conditions or physiological reactions in order to adjust pace, refuelling and strategy.
                </p>
              </div>

              <div className="text-center bg-gray-50 p-6 rounded-lg shadow-sm">
                <h4 className="text-lg font-semibold mb-4">Analyze the race</h4>
                <p className="text-sm text-gray-700">
                  It is after the race that conclusions must be drawn. This is the bulk of the work. The race confirms or refutes the hypotheses put forward beforehand and gives us avenues to work on for further training.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enduraw Section - Performance Consultancy */}
      <section
        ref={(el) => { sectionRefs.current['enduraw'] = el; }}
        className="py-20 bg-dark-bg text-white relative"
        style={{
          backgroundImage: "url('/images/joseph-3-fi35703597x2000.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-61"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 uppercase tracking-wide">
                Enduraw: Performance Experience
              </h2>
            </div>
            <div className="flex justify-center mb-8">
              <img
                src="/images/logo_enduraw%20blanc-fi35471045x260.png"
                alt="Enduraw Logo"
                className="h-32 opacity-90"
              />
            </div>
          </div>

          {/* Enduraw Description */}
          <div className="text-center mb-16">
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-200">
              <p>
                We are currently working to optimize race-day performance: physiological testing to identify
                the runner's strengths and weaknesses, development of models for understanding effort,
                scientific validation of training beliefs, technology watch.
              </p>
              <p>
                In the long term, we believe that the data scientist will be indispensable to make compromises
                between all the factors involved in performance, and will be able to provide key insights to
                the professionals who will manage these parameters (coaches, physical trainers, nutritionists,
                physiotherapists, mental trainers, aerodynamicists, mechanics, strategists).
              </p>
            </div>
          </div>

          {/* Our Values */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12 uppercase tracking-wide">
              Our Values
            </h3>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl bg-white/5 border border-white/10 p-8 shadow-lg hover:shadow-xl transition">
                <h4 className="text-xl font-semibold mb-4">High level sport exigence</h4>
                <p className="text-gray-300 mb-6">Made for elite athletes</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 h-5 w-5 flex-none rounded-full bg-accent/15 text-accent flex items-center justify-center">
                      <svg className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3.25-3.25a1 1 0 111.414-1.414l2.543 2.543 6.543-6.543a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-sm text-gray-300 leading-snug">Race briefing for Petter Engdahl</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 h-5 w-5 flex-none rounded-full bg-accent/15 text-accent flex items-center justify-center">
                      <svg className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3.25-3.25a1 1 0 111.414-1.414l2.543 2.543 6.543-6.543a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-sm text-gray-300 leading-snug">French hour record attempt</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl bg-white/5 border border-white/10 p-8 shadow-lg hover:shadow-xl transition">
                <h4 className="text-xl font-semibold mb-4">Scientific validation</h4>
                <p className="text-gray-300 mb-6">Data-driven, based on field research</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 h-5 w-5 flex-none rounded-full bg-accent/15 text-accent flex items-center justify-center">
                      <svg className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3.25-3.25a1 1 0 111.414-1.414l2.543 2.543 6.543-6.543a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-sm text-gray-300 leading-snug">€13k study on fatigue</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 h-5 w-5 flex-none rounded-full bg-accent/15 text-accent flex items-center justify-center">
                      <svg className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3.25-3.25a1 1 0 111.414-1.414l2.543 2.543 6.543-6.543a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-sm text-gray-300 leading-snug">Background in maths and Data Science</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl bg-white/5 border border-white/10 p-8 shadow-lg hover:shadow-xl transition">
                <h4 className="text-xl font-semibold mb-4">Spread our work</h4>
                <p className="text-gray-300 mb-6">Sharing expertise with sponsors and mass audiences</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 h-5 w-5 flex-none rounded-full bg-accent/15 text-accent flex items-center justify-center">
                      <svg className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3.25-3.25a1 1 0 111.414-1.414l2.543 2.543 6.543-6.543a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-sm text-gray-300 leading-snug">Regular publications on LinkedIn</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 h-5 w-5 flex-none rounded-full bg-accent/15 text-accent flex items-center justify-center">
                      <svg className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3.25-3.25a1 1 0 111.414-1.414l2.543 2.543 6.543-6.543a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-sm text-gray-300 leading-snug">Newsletter to 1,500+ people</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* They Trust Us Section */}
      <section className="py-20 bg-gray-200">
        <div className="max-w-full mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-8 text-black uppercase tracking-wide">
              Our partners
            </h2>
          </div>

          {/* Sliding logos animation - row 1 slides left */}
          <div className="relative overflow-hidden mb-8">
            <div className="flex animate-scroll-left w-max">
              {/* group A */}
              <div className="flex min-w-max gap-16 px-8">
                <div className="flex items-center justify-center bg-white rounded-lg p-6 shadow-sm min-w-[200px] h-24">
                  <img
                    src="/images/Salomon-logo-fi35703769x230.png"
                    alt="Salomon"
                    className="max-h-12 object-contain"
                  />
                </div>
                <div className="flex items-center justify-center bg-white rounded-lg p-6 shadow-sm min-w-[200px] h-24">
                  <img
                    src="/images/2018-CS-vertical_logo-color-fi35703757x85.png"
                    alt="Compressport"
                    className="max-h-12 object-contain"
                  />
                </div>
                <div className="flex items-center justify-center bg-white rounded-lg p-6 shadow-sm min-w-[200px] h-24">
                  <img
                    src="/images/logoON-fi35703747x170.png"
                    alt="ON Running"
                    className="max-h-12 object-contain"
                  />
                </div>
                <div className="flex items-center justify-center bg-white rounded-lg p-6 shadow-sm min-w-[200px] h-24">
                  <img
                    src="/images/5e3782b4-f6d8-434b-a5ec-a6459473a619-fi35703631x150.png"
                    alt="Supersapiens"
                    className="max-h-12 object-contain"
                  />
                </div>
                <div className="flex items-center justify-center bg-white rounded-lg p-6 shadow-sm min-w-[200px] h-24">
                  <img
                    src="/images/maurten-logo-white-01-01-fi35703778x198.png"
                    alt="Maurten"
                    className="max-h-12 object-contain"
                  />
                </div>
                <div className="flex items-center justify-center bg-white rounded-lg p-6 shadow-sm min-w-[200px] h-24">
                  <img
                    src="/images/ai_mauna_logo-fi35703946x130.png"
                    alt="AI Mauna"
                    className="max-h-12 object-contain"
                  />
                </div>
                <div className="flex items-center justify-center bg-white rounded-lg p-6 shadow-sm min-w-[200px] h-24">
                  <img
                    src="/images/polar-logo-fi35703774x170.png"
                    alt="Polar"
                    className="max-h-12 object-contain"
                  />
                </div>
              </div>
              {/* group B (duplicate) */}
              <div className="flex min-w-max gap-16 px-8" aria-hidden="true">
                <div className="flex items-center justify-center bg-white rounded-lg p-6 shadow-sm min-w-[200px] h-24">
                  <img src="/images/Salomon-logo-fi35703769x230.png" alt="" className="max-h-12 object-contain" />
                </div>
                <div className="flex items-center justify-center bg-white rounded-lg p-6 shadow-sm min-w-[200px] h-24">
                  <img src="/images/2018-CS-vertical_logo-color-fi35703757x85.png" alt="" className="max-h-12 object-contain" />
                </div>
                <div className="flex items-center justify-center bg-white rounded-lg p-6 shadow-sm min-w-[200px] h-24">
                  <img src="/images/logoON-fi35703747x170.png" alt="" className="max-h-12 object-contain" />
                </div>
                <div className="flex items-center justify-center bg-white rounded-lg p-6 shadow-sm min-w-[200px] h-24">
                  <img src="/images/5e3782b4-f6d8-434b-a5ec-a6459473a619-fi35703631x150.png" alt="" className="max-h-12 object-contain" />
                </div>
                <div className="flex items-center justify-center bg-white rounded-lg p-6 shadow-sm min-w-[200px] h-24">
                  <img src="/images/maurten-logo-white-01-01-fi35703778x198.png" alt="" className="max-h-12 object-contain" />
                </div>
                <div className="flex items-center justify-center bg-white rounded-lg p-6 shadow-sm min-w-[200px] h-24">
                  <img src="/images/ai_mauna_logo-fi35703946x130.png" alt="" className="max-h-12 object-contain" />
                </div>
                <div className="flex items-center justify-center bg-white rounded-lg p-6 shadow-sm min-w-[200px] h-24">
                  <img src="/images/polar-logo-fi35703774x170.png" alt="" className="max-h-12 object-contain" />
                </div>
              </div>
            </div>
          </div>

          {/* Sliding logos animation - row 2 slides right */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-right w-max">
              {/* group A */}
              <div className="flex min-w-max gap-16 px-8">
                <div className="flex items-center justify-center bg-white rounded-lg p-6 shadow-sm min-w-[200px] h-24">
                  <img
                    src="/images/vo2_master_-_dc_-_main_left_-_full_colour_-_transparent.png__664x0_q85_subsampling-2-fi35703783x310.png"
                    alt="VO2 Master"
                    className="max-h-12 object-contain"
                  />
                </div>
                <div className="flex items-center justify-center bg-white rounded-lg p-6 shadow-sm min-w-[200px] h-24">
                  <img
                    src="/images/Core-logo-fi35703773x100.png"
                    alt="Core"
                    className="max-h-12 object-contain"
                  />
                </div>
                <div className="flex items-center justify-center bg-white rounded-lg p-6 shadow-sm min-w-[200px] h-24">
                  <img
                    src="/images/Nix-logo-fi35703775x110.png"
                    alt="Nix"
                    className="max-h-12 object-contain"
                  />
                </div>
                <div className="flex items-center justify-center bg-white rounded-lg p-6 shadow-sm min-w-[200px] h-24">
                  <img
                    src="/images/Upside-Strength-Academy-Logo-WHite-Edge-2500x2500-1-1024x1024-fi35703786x120.png"
                    alt="Upside Strength"
                    className="max-h-12 object-contain"
                  />
                </div>
                <div className="flex items-center justify-center bg-white rounded-lg p-6 shadow-sm min-w-[200px] h-24">
                  <img
                    src="/images/Mysmartmoove-logo-fi35703772x170.png"
                    alt="MySmartMove"
                    className="max-h-12 object-contain"
                  />
                </div>
                <div className="flex items-center justify-center bg-white rounded-lg p-6 shadow-sm min-w-[200px] h-24">
                  <img
                    src="/images/stryd-fi35703791x200.png"
                    alt="Stryd"
                    className="max-h-12 object-contain"
                  />
                </div>
                <div className="flex items-center justify-center bg-white rounded-lg p-6 shadow-sm min-w-[200px] h-24">
                  <img
                    src="/images/TrainRed-logo-2-fi35703796x130.png"
                    alt="Train Red"
                    className="max-h-12 object-contain"
                  />
                </div>
              </div>
              {/* group B (duplicate) */}
              <div className="flex min-w-max gap-16 px-8" aria-hidden="true">
                <div className="flex items-center justify-center bg-white rounded-lg p-6 shadow-sm min-w-[200px] h-24"><img src="/images/vo2_master_-_dc_-_main_left_-_full_colour_-_transparent.png__664x0_q85_subsampling-2-fi35703783x310.png" alt="" className="max-h-12 object-contain" /></div>
                <div className="flex items-center justify-center bg-white rounded-lg p-6 shadow-sm min-w-[200px] h-24"><img src="/images/Core-logo-fi35703773x100.png" alt="" className="max-h-12 object-contain" /></div>
                <div className="flex items-center justify-center bg-white rounded-lg p-6 shadow-sm min-w-[200px] h-24"><img src="/images/Nix-logo-fi35703775x110.png" alt="" className="max-h-12 object-contain" /></div>
                <div className="flex items-center justify-center bg-white rounded-lg p-6 shadow-sm min-w-[200px] h-24"><img src="/images/Upside-Strength-Academy-Logo-WHite-Edge-2500x2500-1-1024x1024-fi35703786x120.png" alt="" className="max-h-12 object-contain" /></div>
                <div className="flex items-center justify-center bg-white rounded-lg p-6 shadow-sm min-w-[200px] h-24"><img src="/images/Mysmartmoove-logo-fi35703772x170.png" alt="" className="max-h-12 object-contain" /></div>
                <div className="flex items-center justify-center bg-white rounded-lg p-6 shadow-sm min-w-[200px] h-24"><img src="/images/stryd-fi35703791x200.png" alt="" className="max-h-12 object-contain" /></div>
                <div className="flex items-center justify-center bg-white rounded-lg p-6 shadow-sm min-w-[200px] h-24"><img src="/images/TrainRed-logo-2-fi35703796x130.png" alt="" className="max-h-12 object-contain" /></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects - Scroller */}
      <section
        ref={(el) => { sectionRefs.current['main-projects'] = el; }}
        className="py-20 bg-white text-black"
      >
        <div className="px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 uppercase tracking-wide">Projects</h2>
          <ProjectsScroller />
        </div>
      </section>

      {/* Media Section */}
      <section
        ref={(el) => { sectionRefs.current['media'] = el; }}
        className="py-20 bg-dark-secondary"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-8">Media Coverage</h3>
            <div className="max-w-4xl mx-auto">
              <a 
                href="https://www.linkedin.com/feed/update/urn:li:activity:7368561195525640192/"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-dark-bg p-8 rounded-lg hover:bg-gray-700 transition-colors group"
              >
                <div className="text-left">
                  <h4 className="text-xl font-semibold mb-4 group-hover:text-accent transition-colors">
                    UTMB 2025 Victory - Ruth Croft and Tom Evans' Exceptional Performance
                  </h4>
                  <div className="text-gray-300 space-y-4">
                    <p>
                      Two absolutely exceptional athletes achieved victory at UTMB, the most prestigious race in the world. 
                    </p>
                    <blockquote className="border-l-4 border-accent pl-4 italic">
                      "I say that performance is 90% the athlete, 9% the coach, and I bring the last 1% of performance with Enduraw."
                    </blockquote>
                    <p>
                      This victory showcases the comprehensive approach behind elite athlete success, emphasizing physiological modeling, 
                      training monitoring, pacing strategy optimization, and extensive team support.
                    </p>
                    <div className="flex items-center gap-2 text-accent group-hover:text-white transition-colors">
                      <span>View full post on LinkedIn</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Photography Gallery */}
      <section className="py-16 bg-dark-bg text-white font-sans">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-x-auto">
            <div className="flex gap-4 w-max">
              {GALLERY_IMAGES.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt="Gallery"
                  loading="lazy"
                  className="h-72 md:h-80 object-cover rounded-lg flex-none shadow"
                />
              ))}
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-base md:text-base text-gray-300">
              I'm also a keen photographer. Find some of my work on {' '}
              <a href="http://josephmestrallet.pixieset.com" target="_blank" rel="noreferrer" className="underline hover:text-gray-200">
                this link
              </a>.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default MainPage;
