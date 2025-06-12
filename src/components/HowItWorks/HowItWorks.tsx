import React, { useState } from 'react';
import styles from './HowItWorks.module.scss';

const tabs = [
  'Nutrition',
  'Physical Activity',
  'Restorative Sleep',
  'Stress Management',
  'Social Connection',
  'Substance Abuse'
];

const cards = [
  {
    id: 1,
    type: 'Nutrition',
    image: '/images/nutrition.png',
    metric: '2000',
    unit: 'kcal',
    text: 'Balanced nutrition is essential for maintaining a healthy weight and preventing chronic diseases. Focus on whole foods and plant-based options.'
  },
  {
    id: 2,
    type: 'Physical Activity',
    image: '/images/physical-activity.png',
    metric: '150',
    unit: 'min/week',
    text: 'Regular physical activity improves cardiovascular health, strengthens muscles, and boosts mental well-being. Aim for moderate to vigorous exercise.'
  },
  {
    id: 3,
    type: 'Restorative Sleep',
    image: '/images/sleep.png',
    metric: '7-9',
    unit: 'hours',
    text: 'Quality sleep is crucial for physical recovery, mental clarity, and emotional balance. Maintain a consistent sleep schedule.'
  },
  {
    id: 4,
    type: 'Stress Management',
    image: '/images/stress-management.png',
    metric: '20',
    unit: 'min/day',
    text: 'Effective stress management through meditation, breathing exercises, or mindfulness helps maintain mental and physical health.'
  },
  {
    id: 5,
    type: 'Social Connection',
    image: '/images/social-connection.png',
    metric: '3+',
    unit: 'connections',
    text: 'Meaningful social relationships contribute to emotional well-being and longevity. Maintain regular contact with family and friends.'
  },
  {
    id: 6,
    type: 'Substance Abuse',
    image: '/images/substance-abuse.png',
    metric: 'Zero',
    unit: 'tolerance',
    text: 'Avoiding harmful substances and practicing moderation with alcohol is crucial for long-term health and wellness.'
  }
];

const HowItWorks: React.FC = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handlePrevClick = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const handleNextClick = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  const carouselRef = React.useRef<HTMLDivElement>(null);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            <span className={styles.highlight}>Lifestyle as medicine</span>: The six pillars
          </h2>
          <div className={styles.navigation}>
            <button 
              className={styles.navButton} 
              onClick={handlePrevClick}
              aria-label="Previous slide"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button 
              className={styles.navButton} 
              onClick={handleNextClick}
              aria-label="Next slide"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        <div className={styles.tabs}>
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`${styles.tab} ${activeTab === tab ? styles.active : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className={styles.carouselWrapper}>
          <div 
            className={styles.carousel} 
            ref={carouselRef}
          >
            {cards.map((card) => (
              <div 
                key={card.id}
                className={`${styles.card} ${activeTab === card.type ? styles.active : ''}`}
              >
                <div className={styles.cardImage}>
                  <img src={card.image} alt={card.type} loading="lazy" />
                  <div className={styles.cardMetric}>
                    <span className={styles.metricValue}>{card.metric}</span>
                    <span className={styles.metricUnit}>{card.unit}</span>
                  </div>
                </div>
                <p className={styles.cardText}>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 