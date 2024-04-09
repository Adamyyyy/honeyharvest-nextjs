'use client';

import Link from 'next/link';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import promo1 from 'public/img/img5.jpg';
import promo2 from 'public/img/img6.jpg';
import promo3 from 'public/img/img7.jpg';

const PromoSection = () => {
  return (
    <section className="promo-section section section-on-bg">
      <div className="hero-slider-wrapper">
        <Carousel fade indicators={false} controls={false}>
          <Carousel.Item>
            <Image
              src={promo1}
              alt="promo-img1"
              height={680}
              style={{ width: '100%', objectFit: 'cover' }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              src={promo2}
              alt="promo-img2"
              height={680}
              style={{ width: '100%', objectFit: 'cover' }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              src={promo3}
              alt="promo-img3"
              height={680}
              style={{ width: '100%', objectFit: 'cover' }}
            />
          </Carousel.Item>
        </Carousel>

        <div className="hero-slider-mask"></div>
      </div>

      <div className="container promo-content">
        <h2 className="headline">
          Harvesting honey <br />
          has never been easier
        </h2>
        <p className="tagline">
        We supply backyard beekeepers with everything needed to start and continue year-round.
        </p>
        <div className="actions">
          <Link className="btn btn-cta" href="#">
            Learn more
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
