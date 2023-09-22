import Image from 'next/image';
import Link from 'next/link';
import officeSpace from 'public/img/office-space.jpg';
import heroAbout from 'public/img/hero-about.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faComputerMouse } from '@fortawesome/free-solid-svg-icons';

const About = () => {
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            <br />
            Aenean commodo ligula eget dolor.
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
              High quality Beekeeping Equipment Supplier in Sydney, Australia.
              We develop and import our own Beekeeping products, we are
              constantly improving our products Quality, Transport Delivery
              Logistics and IT systems.Our goal is to provide executive level of
              service for Online Shopping. Specialising in a range of Honey
              Extractors, Beehives, Made in Australia Jars, Getting Started in
              Beekeeping Books, Bee Smoker, Uncapping Stations and more.
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

export default About;
