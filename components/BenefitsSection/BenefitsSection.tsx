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
                If you&apos;ve ever dream of hearing the gentle hum of bees
                while sipping your morning coffee or marveled at the idea of
                harvesting your own golden honey, then you&apos;re in the right
                place.
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
                From the sun-drenched shores of Queensland to the crisp air of
                Tasmania, our eBay journey over the last three years has been a
                sweet symphony of delivering beehive treasures across Australia.
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
                Your go-to hub for quality beekeeping gear, catering to both
                experts and beginners. Explore top industry essentials with us!
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
