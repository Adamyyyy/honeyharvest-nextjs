import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col col-6 col-md-3">
            <div className="footer-col-inner">
              <h3 className="col-title">About</h3>
              <ul className="footer-menu list-unstyled">
                <li>
                  <a className="text-link" href="about.html">
                    Comoany
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-col col-6 col-md-3">
            <div className="footer-col-inner">
              <h3 className="col-title">Product</h3>
              <ul className="footer-menu list-unstyled">
                <li>
                  <a className="text-link" href="product.html">
                    10 Frame Beehive
                  </a>
                </li>
                <li>
                  <a className="text-link" href="product.html">
                    Hive Frames
                  </a>
                </li>
                <li>
                  <a className="text-link" href="product.html">
                    Bee Excluder
                  </a>
                </li>
                <li>
                  <a className="text-link" href="product.html">
                    Ventilated Bee Hive Bottom Board
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-col col-6 col-md-3">
            <div className="footer-col-inner">
              <h3 className="col-title">Where to Buy</h3>
              <ul className="footer-menu list-unstyled">
                <li>
                  <a
                    className="text-link"
                    href="https://www.ebay.com.au/usr/honeyharvest"
                  >
                    ebay
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-col col-6 col-md-3">
            <div className="footer-col-inner">
              <h3 className="col-title">Legal</h3>
              <ul className="footer-menu list-unstyled">
                <li>
                  <Link className="text-link" href="#">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link className="text-link" href="#">
                    Terms of Services
                  </Link>
                </li>
                <li>
                  <Link className="text-link" href="#">
                    Policies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="divider"></div>
        <div className="footer-bottom text-center">
          {/* <ul className="social-media list-inline">
            <li className="list-inline-item">
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <i className="fa-brands fa-ebay"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <i className="fab fa-vimeo-v"></i>
              </a>
            </li>
          </ul> */}

          <small className="copyright">
            Copyright @
            <a className="text-link" href="#" target="_blank">
              Honey Harvest
            </a>
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
