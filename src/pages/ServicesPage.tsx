import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import PersonCard from '../components/PersonCard';

interface ServicesPageProps {
  activeSection?: string;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ activeSection }) => {
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    if (activeSection && sectionRefs.current[activeSection]) {
      sectionRefs.current[activeSection]?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, [activeSection]);

  const offerings = [
    {
      id: 'strava-integration',
      title: 'Strava Integration',
      description:
        'Try our free Strava integration that analyzes every run and shows the impact of wind, elevation, heat and altitude on your pace.',
      cta: 'Explore Enduraw Report',
      price: 'FREE',
      to: '/services/strava-integration',
    },
    {
      id: 'physiological-testing',
      title: 'Physiological Testing',
      description:
        "Test your physiological data to know your body better and train more efficiently: VO2max, thresholds, race pace, poles efficiency and more.",
      cta: 'View Testing Protocols',
      price: '150€',
      to: '/services/physiological-testing',
    },
    {
      id: 'race-briefing',
      title: 'Customized Pacing Plan',
      description:
        'Our flagship product: a pro-grade race briefing customized to your level with kilometer-by-kilometer pacing, aid-station times, and tips on weather and nutrition.',
      cta: 'Discover Race Briefing',
      price: '30€',
      to: '/services/race-briefing',
    },
  ];

  return (
    <div className="bg-dark-bg text-white">
      {/* Intro */}
      <section ref={(el) => { sectionRefs.current['overview'] = el; }} className="pt-24 pb-8 font-sans">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold mb-6">Enduraw services</h1>
            <div className="text-xl text-gray-300 max-w-3xl mx-auto space-y-4">
              <p>
                Building on two years of expertise in data for performance, Enduraw has become the leading expert for Race Day.
              </p>
              <p>
                We support elite athletes in their quest for record-breaking performance. We're also committed to provide products enabling everyone to use our algorithms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Elite Athletes - Hero */}
      <section id="elite-athletes" ref={(el) => { sectionRefs.current['elite-athletes'] = el; }} className="py-20 bg-gradient-to-b from-dark-bg to-dark-secondary/30 font-sans">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-5xl font-extrabold mb-4">For elite athletes</h2>
            <p className="text-lg text-gray-200"><i>Our DNA is high level performance.</i></p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <img
                src="/images/IMG_6392-fi35603540x381.JPG"
                alt="Elite athlete training with Enduraw"
                className="w-full h-[28rem] object-cover rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
            <div>
              <p className="text-gray-200 mb-4">
                Enduraw uses its unique expertise at the frontier between mathematical mastery and
                knowledge of top-level sport to go after marginal gains.
              </p>
              <p className="text-gray-200 mb-4">
                Thanks to our experience with the world's best athletes and our collaboration with
                the most advanced brands in sports technology, we have become the experts in Race Day
                for endurance sports.
              </p>
              <p className="text-gray-200 mb-4">
                Preparation for an UTMB (race briefing, pacing according to your qualities, outdoor
                conditions, competitor analysis, race strategy, nutrition strategy, etc.) nothing is
                left to chance.
              </p>
              <p className="text-gray-200 mb-6">
                Do you want to do everything possible to beat an FKT or a world record? Don't
                hesitate to call on us!
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Our Athletes</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              <PersonCard
                fullName="Petter Engdahl"
                age={29}
                country="Sweden 🇸🇪"
                sports="Trail, Ultra Trail"
                achievements="CCC (UTMB) winner, record • Transvulcania winner"
                imageUrl="/images/petter-fi35687434x285.png"
                variant="athlete"
              />
              <PersonCard
                fullName="Duncan Périllat"
                age={30}
                country="France 🇫🇷"
                sports="Marathon, Ultra Trail"
                achievements="French marathon champion • UTMB St Jacques winner"
                imageUrl="/images/Duncan2-fi35687444x236.png"
                variant="athlete"
              />
              <PersonCard
                fullName="Ruth Croft"
                age={34}
                country="New Zealand 🇳🇿"
                sports="Trail, Ultra Trail"
                achievements="CCC, Western States winner • Vice world champion"
                imageUrl="/images/Ruth-fi35687447x220.png"
                variant="athlete"
              />
              <PersonCard
                fullName="Laurent Derain"
                age={44}
                country="France 🇫🇷"
                sports="Cycling, Time Trial"
                achievements="Master World Champion • French Hour Record attempt"
                imageUrl="/images/Laurent-fi35687451x160.png"
                variant="athlete"
              />
            </div>
          </div>

          <div className="mt-6 p-5 bg-dark-bg/60 border border-gray-700 rounded-md">
            <h3 className="text-2xl font-semibold mb-1"><i>Sorry, we're at full capacity</i></h3>
            <p className="text-gray-400">Our athlete promotion is complete for 2024!</p>
            <p className="text-gray-200 mt-2">
              Feel free to leave us a message for 2025 below, or discover our race briefings.
            </p>
            <div className="mt-4 flex gap-3">
              <a href="/services/race-briefing" className="bg-accent hover:bg-accent-light text-white px-5 py-2 rounded-md font-semibold">Discover Race Briefing</a>
              <a href="mailto:contact.enduraw@gmail.com" className="bg-dark-bg hover:bg-gray-700 text-white px-5 py-2 rounded-md font-semibold">Contact us</a>
            </div>
          </div>

        </div>
      </section>

      {/* For all athletes - Hero */}
      <section ref={(el) => { sectionRefs.current['for-all-athletes'] = el; }} className="py-20 bg-dark-secondary font-sans">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-5xl font-extrabold mb-4">For all athletes</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {offerings.map((o) => (
              <div
                key={o.id}
                id={o.id}
                ref={(el) => {
                  sectionRefs.current[o.id] = el;
                }}
                className="bg-dark-bg rounded-lg p-6 flex flex-col"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    {o.id === 'strava-integration' && (
                      <img
                        src="/images/strava_logo-fi35603244x140.png"
                        alt="Strava logo"
                        className="h-6 w-auto"
                        loading="lazy"
                      />
                    )}
                    <h3 className="text-2xl font-bold">{o.title}</h3>
                  </div>
                  <span
                    className={`${o.id === 'strava-integration' ? '' : 'text-accent'} font-semibold`}
                    style={
                      o.id === 'strava-integration'
                        ? { color: '#fc4c02' }
                        : o.id === 'physiological-testing'
                          ? { color: '#8b5cf6' }
                          : undefined
                    }
                  >
                    {o.price}
                  </span>
                </div>
                <p className="text-gray-300 mb-5 flex-1">{o.description}</p>
                {o.to.startsWith('http') ? (
                  <a
                    href={o.to}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-block ${o.id === 'strava-integration' || o.id === 'physiological-testing'
                      ? ''
                      : 'bg-accent hover:bg-accent-light'
                      } text-white px-5 py-2 rounded-md font-semibold text-center`}
                    style={
                      o.id === 'strava-integration'
                        ? { backgroundColor: '#fc4c02' }
                        : o.id === 'physiological-testing'
                          ? { backgroundColor: '#8b5cf6' }
                          : undefined
                    }
                  >
                    {o.cta}
                  </a>
                ) : (
                  <Link
                    to={o.to}
                    className={`inline-block ${o.id === 'strava-integration' || o.id === 'physiological-testing'
                      ? ''
                      : 'bg-accent hover:bg-accent-light'
                      } text-white px-5 py-2 rounded-md font-semibold text-center`}
                    style={
                      o.id === 'strava-integration'
                        ? { backgroundColor: '#fc4c02' }
                        : o.id === 'physiological-testing'
                          ? { backgroundColor: '#8b5cf6' }
                          : undefined
                    }
                  >
                    {o.cta}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Get in Touch Section */}
      <section className="py-20 bg-gray-100 text-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8 uppercase tracking-wide">Get in Touch</h2>

          {/* Contact Information */}
          <div className="mb-12">
            <p className="text-lg text-gray-700 mb-4">
              Ready to optimize your performance? Let's discuss how data science can transform your training.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:contact.enduraw@gmail.com"
                className="bg-accent hover:bg-accent-light text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Contact us
              </a>
              <a
                href="/services"
                className="border border-gray-600 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                View All Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
