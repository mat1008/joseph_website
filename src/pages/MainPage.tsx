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

// Carousel for Projects - two rows, portrait image left and text right per card
const ProjectsCarousel: React.FC<{ items?: ProjectItem[] }> = ({ items = PROJECTS }) => {
  const [active, setActive] = React.useState(0);
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const slideRefs = React.useRef<Array<HTMLDivElement | null>>([]);

  // group items into pairs to render two rows per slide
  const slides = React.useMemo(() => {
    const out: ProjectItem[][] = [];
    for (let i = 0; i < items.length; i += 2) {
      out.push(items.slice(i, i + 2));
    }
    return out;
  }, [items]);

  const scrollTo = (index: number) => {
    const el = slideRefs.current[index];
    if (el) el.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    setActive(index);
  };

  const onScroll = () => {
    const cont = containerRef.current;
    if (!cont) return;

    const maxScroll = cont.scrollWidth - cont.clientWidth;
    // Clamp at edges so the dot reaches both ends when fully scrolled
    if (cont.scrollLeft <= 6) {
      setActive(0);
      return;
    }
    if (cont.scrollLeft >= maxScroll - 6) {
      setActive(slides.length - 1);
      return;
    }

    // Otherwise, pick the slide whose center is closest to the container center
    const center = cont.scrollLeft + cont.clientWidth / 2;
    let best = 0; let bestDist = Infinity;
    slideRefs.current.forEach((el, i) => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const contRect = cont.getBoundingClientRect();
      const slideCenter = rect.left - contRect.left + rect.width / 2 + cont.scrollLeft;
      const dist = Math.abs(slideCenter - center);
      if (dist < bestDist) { bestDist = dist; best = i; }
    });
    setActive(best);
  };

  React.useEffect(() => {
    scrollTo(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative">
      <div
        ref={containerRef}
        onScroll={onScroll}
        className="no-scrollbar overflow-x-auto scroll-smooth snap-x snap-mandatory"
      >
        <div className="flex items-stretch gap-6 px-6">
          {slides.map((pair, i) => (
            <div
              key={i}
              ref={(el) => { slideRefs.current[i] = el; }}
              className={`snap-center transition-transform duration-300 flex-shrink-0 w-[320px] sm:w-[380px] lg:w-[420px] ${i === active ? 'scale-100' : 'scale-95 opacity-95'}`}
            >
              <div className="flex flex-col gap-6">
                {pair.map((p, j) => (
                  <div key={`${p.title}-${j}`} className="bg-white text-black rounded-2xl shadow-md overflow-hidden h-[180px] flex">
                    <div className="p-4 w-full">
                      <div className="grid grid-cols-[140px_1fr] gap-4 items-center h-full">
                        <div className="w-[140px] h-[140px] rounded-md overflow-hidden bg-gray-100">
                          {p.link ? (
                            <a href={p.link} target={p.link.startsWith('http') ? '_blank' : undefined} rel={p.link.startsWith('http') ? 'noopener noreferrer' : undefined}>
                              <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                            </a>
                          ) : (
                            <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                          )}
                        </div>
                        <div className="h-full flex flex-col justify-center">
                          <h3 className="text-lg font-semibold">
                            {p.link ? (
                              <a href={p.link} target={p.link.startsWith('http') ? '_blank' : undefined} rel={p.link.startsWith('http') ? 'noopener noreferrer' : undefined} className="hover:underline">
                                {p.title}
                              </a>
                            ) : (
                              p.title
                            )}
                          </h3>
                          <p className="text-gray-700 text-sm mt-1 leading-relaxed overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>{p.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls - accent chevrons positioned outside (no wrap) */}
      <button
        onClick={() => active > 0 && scrollTo(active - 1)}
        disabled={active === 0}
        className={`hidden sm:flex absolute -left-12 md:-left-16 top-1/2 -translate-y-1/2 z-10 p-2 ${active === 0 ? 'text-accent/40 cursor-default pointer-events-none' : 'text-accent hover:text-accent-light'}`}
        aria-label="Previous"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button
        onClick={() => active < slides.length - 1 && scrollTo(active + 1)}
        disabled={active === slides.length - 1}
        className={`hidden sm:flex absolute -right-12 md:-right-16 top-1/2 -translate-y-1/2 z-10 p-2 ${active === slides.length - 1 ? 'text-accent/40 cursor-default pointer-events-none' : 'text-accent hover:text-accent-light'}`}
        aria-label="Next"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Dots */}
      <div className="mt-6 flex justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className={`w-2.5 h-2.5 rounded-full ${i === active ? 'bg-accent' : 'bg-black/30'}`}
            aria-label={`Go to slide ${i + 1}`}
          />
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
          backgroundImage: "url('/images/IMG_9962 Grande copie-fi35704818x2000.jpeg')",
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
            src="/images/IMG_9962 Grande copie-fi35704818x2000.jpeg"
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
                Enduraw: Performance Consultancy
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

      {/* Projects - Carousel (fused with former Success Stories) */}
      <section
        ref={(el) => { sectionRefs.current['main-projects'] = el; }}
        className="py-20 bg-white text-black"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 uppercase tracking-wide">Notable projects</h2>
          <ProjectsCarousel />
        </div>
      </section>
      {/* Former Success Stories section removed; content merged into Projects carousel */}

      {/* Photos & Media Section */}
      <section
        ref={(el) => { sectionRefs.current['media'] = el; }}
        className="py-20 bg-dark-secondary"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Photos & Media</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="aspect-square bg-gray-700 rounded-lg flex items-center justify-center">
              <div className="text-center p-4">
                <p className="text-gray-400 font-medium">Laboratory Setup</p>
                <p className="text-sm text-gray-500 mt-2">State-of-the-art performance testing facility</p>
              </div>
            </div>
            <div className="aspect-square bg-gray-700 rounded-lg flex items-center justify-center">
              <div className="text-center p-4">
                <p className="text-gray-400 font-medium">Athlete Testing</p>
                <p className="text-sm text-gray-500 mt-2">Elite athletes undergoing physiological assessment</p>
              </div>
            </div>
            <div className="aspect-square bg-gray-700 rounded-lg flex items-center justify-center">
              <div className="text-center p-4">
                <p className="text-gray-400 font-medium">Data Analysis</p>
                <p className="text-sm text-gray-500 mt-2">Advanced analytics and performance modeling</p>
              </div>
            </div>
            <div className="aspect-square bg-gray-700 rounded-lg flex items-center justify-center">
              <div className="text-center p-4">
                <p className="text-gray-400 font-medium">Award Ceremony</p>
                <p className="text-sm text-gray-500 mt-2">Celebrating championship victories with coached athletes</p>
              </div>
            </div>
            <div className="aspect-square bg-gray-700 rounded-lg flex items-center justify-center">
              <div className="text-center p-4">
                <p className="text-gray-400 font-medium">Research Team</p>
                <p className="text-sm text-gray-500 mt-2">The Enduraw performance science team</p>
              </div>
            </div>
            <div className="aspect-square bg-gray-700 rounded-lg flex items-center justify-center">
              <div className="text-center p-4">
                <p className="text-gray-400 font-medium">Media Coverage</p>
                <p className="text-sm text-gray-500 mt-2">Featured interviews and press coverage</p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-2xl font-semibold mb-4">Media Coverage</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-dark-bg p-6 rounded-lg">
                <h4 className="font-semibold mb-2">Featured Publications</h4>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• International Journal of Sports Science</li>
                  <li>• Trail Runner Magazine</li>
                  <li>• Ultra Running Research Quarterly</li>
                  <li>• Exercise and Sport Sciences Reviews</li>
                  <li>• Journal of Applied Physiology</li>
                </ul>
              </div>
              <div className="bg-dark-bg p-6 rounded-lg">
                <h4 className="font-semibold mb-2">Speaking Engagements</h4>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• International Sports Science Conference</li>
                  <li>• Elite Endurance Summit</li>
                  <li>• Data Analytics in Sports Symposium</li>
                  <li>• European Trail Running Congress</li>
                  <li>• Performance Analytics Workshop Series</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default MainPage;
