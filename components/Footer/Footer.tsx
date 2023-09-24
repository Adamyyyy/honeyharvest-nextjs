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
                  <Link className="text-link" href="/about">
                    Comoany
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-col col-6 col-md-3">
            <div className="footer-col-inner">
              <h3 className="col-title">Product</h3>
              <ul className="footer-menu list-unstyled">
                <li>
                  <Link className="text-link" href="/product">
                    10 Frame Beehive
                  </Link>
                </li>
                <li>
                  <Link className="text-link" href="/product">
                    Hive Frames
                  </Link>
                </li>
                <li>
                  <Link className="text-link" href="/product">
                    Bee Excluder
                  </Link>
                </li>
                <li>
                  <Link className="text-link" href="/product">
                    Ventilated Bee Hive Bottom Board
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-col col-6 col-md-3">
            <div className="footer-col-inner">
              <h3 className="col-title">Where to Buy</h3>
              <ul className="footer-menu list-unstyled">
                <li>
                  <Link
                    className="text-link"
                    href="https://www.ebay.com.au/usr/honeyharvest"
                  >
                    ebay
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* <div className="footer-col col-6 col-md-3">
            <div className="footer-col-inner">
              <h3 className="col-title">Legal</h3>
              <ul className="footer-menu list-unstyled">
                <li>
                  <Link className="text-link" href="/">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link className="text-link" href="/">
                    Terms of Services
                  </Link>
                </li>
                <li>
                  <Link className="text-link" href="/">
                    Policies
                  </Link>
                </li>
              </ul>
            </div>
          </div> */}
        </div>

        <div className="divider"></div>
        <div className="footer-bottom text-center">
          <small className="copyright">
            Copyright @
            <Link className="text-link" href="/" target="_blank">
              Honeyharvest.
            </Link>
            All Rights Reserved.
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
