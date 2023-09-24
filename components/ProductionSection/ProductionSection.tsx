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
                    Double level hive features dovetail joints for easy assembly
                    and added strength. Made from New Zealand Pine
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
                  100 X Full Depth Flat-pack Beehive Frame <br />
                  With Brass Eyelets
                </h3>
                <div className="content-desc">
                  <span className="icon-holder">
                    <FontAwesomeIcon icon={faCheck} style={{ width: '20px' }} />
                  </span>
                  <p>
                    Box of 100 Full Depth Unassembled Bee Frame With Brass
                    Eyelets.
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
                  Plastic Foundation <br />
                  for Full Depth Hive Frames
                </h3>
                <div className="content-desc">
                  <span className="icon-holder">
                    <FontAwesomeIcon icon={faCheck} style={{ width: '20px' }} />
                  </span>
                  <p>Premiu Foodgrade Plastic Foundation Sheet</p>
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
                  8 Frame Beehive Flat Pack <br />
                  With Mesh Ventilated Bee Hive Bottom Board
                </h3>
                <div className="content-desc">
                  <span className="icon-holder">
                    <FontAwesomeIcon icon={faCheck} style={{ width: '20px' }} />
                  </span>
                  <p>
                    Made from New Zealand Pine. Mesh Ventilated Bottom Board.
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
