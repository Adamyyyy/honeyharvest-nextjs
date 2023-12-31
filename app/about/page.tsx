import Image from 'next/image';
import Link from 'next/link';
import officeSpace from 'public/img/office-space.jpg';
import heroAbout from 'public/img/hero-about.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faComputerMouse } from '@fortawesome/free-solid-svg-icons';

const AboutPage = () => {
  return (
    <div className="about-page">
      <section className="heading-section section section-on-bg">
        <div className="hero-wrapper">
          <Image
            src={heroAbout}
            style={{ width: '100%', objectFit: 'cover' }}
            height={500}
            alt="hero-about"
          />
          <div className="hero-mask-solid"></div>
        </div>

        <div className="container heading-content">
          <h2 className="headline">About Our Company</h2>
          <div className="intro">
            Committed to providing you with fantastic products and impeccable
            service for beekeeping.
            <br />
            Whatever your beekeeping need is, we look forward to hearing from
            you.
          </div>
          <div className="actions">
            <Link href="https://www.ebay.com.au/usr/honeyharvest">
              Click here to visit our ebay store
            </Link>
            <Link href="https://www.ebay.com.au/usr/honeyharvest">
              <FontAwesomeIcon
                icon={faComputerMouse}
                style={{ width: '15px' }}
              />
            </Link>
          </div>
        </div>
      </section>

      <div id="supplies-block" className="supplies-block">
        <div className="container">
          <h2 className="block-heading text-center">Our Beekeeping Supplies</h2>
          <div className="block-intro text-center">
            <p>
              Premier Beekeeping Equipment Provider in Sydney, Australia. We
              innovate and source our unique beekeeping items, continually
              enhancing product quality, delivery logistics, and digital
              systems. We aim to elevate the online shopping experience,
              offering specialties like Honey Extractors, Beehives,
              Beginner&apos;s Beekeeping Guides, Bee Smokers,and more.
            </p>

            <div className="row justify-content-center">
              <ul className="list-unstyled supplies-list col-auto text-start">
                <li>
                  <FontAwesomeIcon icon={faCheck} style={{ width: '20px' }} />{' '}
                  RELIABLE LOGISTICS
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} style={{ width: '20px' }} />{' '}
                  CUSTOMER HELP SUPPORT
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} style={{ width: '20px' }} />{' '}
                  PHONE PAYMENT OPTIONS
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} style={{ width: '20px' }} />{' '}
                  12 MONTHS WARRANTY
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheck} style={{ width: '20px' }} />{' '}
                  FAST DELIVERY
                </li>
              </ul>
            </div>

            <Image
              className="img-fluid center-block"
              src={officeSpace}
              alt="office-space"
              width={800}
              height={600}
            />
          </div>

          <div className="text-center"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
