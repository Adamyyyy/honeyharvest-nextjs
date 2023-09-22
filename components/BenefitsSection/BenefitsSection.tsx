import Image from 'next/image';
import benefit1 from 'public/img/benefits-1.jpg';
import benefit2 from 'public/img/benefits-2.jpg';
import benefit3 from 'public/img/benefits-3.jpg';

const BeneFitSection = () => {
  return (
    <div className="benefits-wrapper">
      <div className="container text-center">
        <h2 className="section-title mb-5">Start Beekeeping this Summer</h2>
        <div className="row">
          <div className="item col-12 col-md-4">
            <div className="item-inner">
              <Image
                className="item-icon"
                src={benefit1}
                alt="item-icon"
                width={320}
                height={320}
                style={{ objectFit: 'cover' }}
              />
              <h3 className="item-title">Perfect for backyard beekeepers</h3>
              <div className="item-desc">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus.
              </div>
            </div>
            {/* <!--//item-inner--> */}
          </div>
          {/* <!--//item--> */}
          <div className="item col-12 col-md-4">
            <div className="item-inner">
              <Image
                className="item-icon"
                src={benefit2}
                alt="item-icon"
                width={320}
                height={320}
                style={{ objectFit: 'cover' }}
              />
              <h3 className="item-title">Loved by 1,000 customers</h3>
              <div className="item-desc">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus.
              </div>
            </div>
            {/* <!--//item-inner--> */}
          </div>
          {/* <!--//item--> */}
          <div className="item col-12 col-md-4">
            <div className="item-inner">
              <Image
                className="item-icon"
                src={benefit3}
                alt="item-icon"
                width={320}
                height={320}
                style={{ objectFit: 'cover' }}
              />
              <h3 className="item-title">Taste the difference</h3>
              <div className="item-desc">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus.
              </div>
            </div>
            {/* <!--//item-inner--> */}
          </div>
          {/* <!--//item--> */}
        </div>
        {/* <!--//row--> */}
      </div>
      {/* <!--//container--> */}
    </div>
    // <!--//benefits-->
  );
};

export default BeneFitSection;
