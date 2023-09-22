import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const ProductionSection = () => {
  return (
    <section id="seller-section" className="seller-section section">
      <h2 className="section-title">Our Best Seller</h2>
      <div className="section-intro">
        Ranging from diverse beehive boxes and foundations to Queen excluder and
        all essential beekeeping tools you might require.
      </div>
      <div className="container">
        <div className="stories-wrapper row">
          <div className="item item-1 col-12 col-md-6">
            <div className="item-inner text-center">
              <div className="item-mask"></div>
              <div className="item-content">
                <h3 className="content-title">
                  10 Frame Beehive <br />
                  Double Level
                </h3>
                <div className="content-desc">
                  <span className="icon-holder">
                    <FontAwesomeIcon icon={faCheck} style={{ width: '20px' }} />
                  </span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                    aenean commodo ligula eget dolor aenean massa. Cum sociis
                    natoque penatibus.
                  </p>
                </div>
                <Link className="item-link" href="/product"></Link>
              </div>
              {/* <!--//item-content--> */}
            </div>
            {/* <!--//item-inner--> */}
          </div>
          {/* <!--//item--> */}
          <div className="item item-2 col-12 col-md-6">
            <div className="item-inner text-center">
              <div className="item-mask"></div>
              <div className="item-content">
                <h3 className="content-title">
                  10 Frame Beehive Flat Pack With Mesh Ventilated Bee Hive
                  Bottom Board
                </h3>
                <div className="content-desc">
                  <span className="icon-holder">
                    <FontAwesomeIcon icon={faCheck} style={{ width: '20px' }} />
                  </span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                    aenean commodo ligula eget dolor aenean massa. Cum sociis
                    natoque penatibus.
                  </p>
                </div>
                <Link className="item-link" href="/product"></Link>
              </div>
              {/* <!--//item-content--> */}
            </div>
            {/* <!--//item-inner--> */}
          </div>
          {/* <!--//item--> */}
          <div className="item item-3 col-12 col-md-6">
            <div className="item-inner text-center">
              <div className="item-mask"></div>
              <div className="item-content">
                <h3 className="content-title">
                  Ventilated Bee Hive Bottom Board <br />
                  For 10 Frame Beehive Box
                </h3>
                <div className="content-desc">
                  <span className="icon-holder">
                    <FontAwesomeIcon icon={faCheck} style={{ width: '20px' }} />
                  </span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                    aenean commodo ligula eget dolor aenean massa. Cum sociis
                    natoque penatibus.
                  </p>
                </div>
                <Link className="item-link" href="/product"></Link>
              </div>
              {/* <!--//item-content--> */}
            </div>
            {/* <!--//item-inner--> */}
          </div>
          {/* <!--//item--> */}
          <div className="item item-4 col-12 col-md-6">
            <div className="item-inner text-center">
              <div className="item-mask"></div>
              <div className="item-content">
                <h3 className="content-title">
                  3 x 10 Frame Plastic <br />
                  Bee Excluder
                </h3>
                <div className="content-desc">
                  <span className="icon-holder">
                    <FontAwesomeIcon icon={faCheck} style={{ width: '20px' }} />
                  </span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit
                    aenean commodo ligula eget dolor aenean massa. Cum sociis
                    natoque penatibus.
                  </p>
                </div>
                <Link className="item-link" href="/product"></Link>
              </div>
              {/* <!--//item-content--> */}
            </div>
            {/* <!--//item-inner--> */}
          </div>
          {/* <!--//item--> */}
        </div>
        {/* <!--//row--> */}
        <div className="action-wrapper text-center">
          <Link className="btn btn-cta btn-light" href="/product">
            All Products
          </Link>
        </div>
      </div>
      {/* <!--//container--> */}
    </section>
  );
};

export default ProductionSection;
