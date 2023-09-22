/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';
import heroProduct from 'public/img/hero-product.jpg';

const ProductPage = () => {
  return (
    <div className="product-page">
      <section className="heading-section section section-on-bg">
        <div className="hero-wrapper">
          <Image
            src={heroProduct}
            style={{ width: '100%', objectFit: 'cover' }}
            height={500}
            alt="hero-product"
          />
          <div className="hero-mask-gradient" style={{}}></div>
        </div>

        <div className="container heading-content">
          <h2 className="headline">Complete Beehives</h2>
          <div className="intro">
            Our range of Whitehouse Beehives are available in 8 Frame and 10
            Frame designs and a variety of frame depths.
          </div>
          <div className="actions">
            <a className="scrollto" href="#product-block">
              View All
            </a>
            <a className="scrollto" href="#product-block">
              <Image src="img/arrow-icon.svg" alt="" width={30} height={30} />
            </a>
          </div>
        </div>
      </section>

      <div id="product-block" className="product-block">
        <div className="container">
          <h2 className="block-heading text-center">Our Products</h2>
          <div className="block-intro text-center">
            Intro goes here ipsum dolor sit amet, consectetuer adipiscing elit.
            Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes.
          </div>
          <div className="row">
            <div className="item col-6 col-lg-3">
              <div className="item-inner">
                <img
                  className="img-fluid"
                  src="img/product/product-1.jpg"
                  alt="product-1"
                />

                <div className="mask"></div>

                <div className="info text-center">
                  <Link
                    href="https://www.ebay.com.au/usr/honeyharvest"
                    style={{ textDecoration: 'none' }}
                  >
                    <div className="name">
                      10 Frame Beehive Flat Pack With Mesh Ventilated Bee Hive
                      Bottom Board
                    </div>
                    <div className="price">Price: AU $160.00</div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="item col-6 col-lg-3">
              <div className="item-inner">
                <img
                  className="img-fluid"
                  src="img/product/product-2.jpg"
                  alt=""
                />
                <div className="mask"></div>

                <div className="info text-center">
                  <Link
                    href="https://www.ebay.com.au/usr/honeyharvest"
                    style={{ textDecoration: 'none' }}
                  >
                    <div className="name">
                      10 Frame Double Hive Kit 20* Flat Pack Frames & Mesh
                      Ventilated Bee Hive Bottom
                    </div>
                    <div className="price">Price: AU $190.00</div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="item col-6 col-lg-3">
              <div className="item-inner">
                <img
                  className="img-fluid"
                  src="img/product/product-3.jpg"
                  alt=""
                />
                <div className="mask"></div>

                <div className="info text-center">
                  <Link
                    href="https://www.ebay.com.au/usr/honeyharvest"
                    style={{ textDecoration: 'none' }}
                  >
                    <div className="name">
                      10 Frame Fully Assembled Double Hive Kit with Mesh
                      Ventilated Bottom Board
                    </div>
                    <div className="price">Price: AU $230.00</div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="item col-6 col-lg-3">
              <div className="item-inner">
                <img
                  className="img-fluid"
                  src="img/product/product-4.jpg"
                  alt=""
                />
                <div className="mask"></div>

                <div className="info text-center">
                  <Link
                    href="https://www.ebay.com.au/usr/honeyharvest"
                    style={{ textDecoration: 'none' }}
                  >
                    <div className="name">
                      10 Frame Beehive -Double Level - No Frames *1 Free Plastic
                      Queen Excluder
                    </div>
                    <div className="price">Price: AU $130.00</div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="item col-6 col-lg-3">
              <div className="item-inner">
                <img
                  className="img-fluid"
                  src="img/product/product-5.jpg"
                  alt=""
                />
                <div className="mask"></div>

                <div className="info text-center">
                  <Link
                    href="https://www.ebay.com.au/usr/honeyharvest"
                    style={{ textDecoration: 'none' }}
                  >
                    <div className="name">
                      4 Set*Ventilated Bee Hive Bottom Board For 10 Frame
                      Beehive Box
                    </div>
                    <div className="price">Price: AU $198.00</div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="item col-6 col-lg-3">
              <div className="item-inner">
                <img
                  className="img-fluid"
                  src="img/product/product-6.jpg"
                  alt=""
                />
                <div className="mask"></div>

                <div className="info text-center">
                  <Link
                    href="https://www.ebay.com.au/usr/honeyharvest"
                    style={{ textDecoration: 'none' }}
                  >
                    <div className="name">20L Plastic Bucket With Lid</div>
                    <div className="price">Price: AU $33.95</div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="item col-6 col-lg-3">
              <div className="item-inner">
                <img
                  className="img-fluid"
                  src="img/product/product-7.jpg"
                  alt=""
                />
                <div className="mask"></div>

                <div className="info text-center">
                  <Link
                    href="https://www.ebay.com.au/usr/honeyharvest"
                    style={{ textDecoration: 'none' }}
                  >
                    <div className="name">
                      8 Frame Double Hive Kit 16* Flat Pack Frames & Mesh
                      Ventilated Bee Hive Bottom
                    </div>
                    <div className="price">Price: AU $187.00</div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="item col-6 col-lg-3">
              <div className="item-inner">
                <img
                  className="img-fluid"
                  src="img/product/product-8.jpg"
                  alt=""
                />
                <div className="mask"></div>

                <div className="info text-center">
                  <Link
                    href="https://www.ebay.com.au/usr/honeyharvest"
                    style={{ textDecoration: 'none' }}
                  >
                    <div className="name">
                      20*Wire Assembled Frames With Brass Eyelets
                    </div>
                    <div className="price">Price: AU $121.00</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
