import React, { useEffect, useContext } from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';
import { SkusContext } from '@store/_global/skus';
import Swiper from 'swiper';
import ShopColumn from '@components/d/grid-sections/shopColumn';
import uuidv4 from 'uuid/v4';

export default function ShopContent({ plans, tabIndex }) {

  const skuContext = useContext(SkusContext);

  useEffect(() => {

    const swiper = new Swiper(`.swiper-container__${tabIndex}`, {
      slidesPerView: 3,
      spaceBetween: 30,
    });

    return () => swiper.destroy()

    /* eslint-disable react-hooks/exhaustive-deps */
  });


  function indexToName(slider) {
    let planName;

    switch(slider) {
      case 0:
          planName = 'internet';
      break;

      case 1:
          planName = 'bundles';
      break;

      case 2:
          planName = 'phone';
      break;

      default:
          planName = 'internet';
    }

    return planName;
  }

  return (
    <div className={`swiper-container swiper-container__${tabIndex}`}>
      <div className="swiper-wrapper">
        {
          skuContext.state === null
            ? (
              <div className="loader">
                <Dimmer active inverted>
                  <Loader size='massive'>Loading</Loader>
                </Dimmer>
              </div>
              )
            : plans[indexToName(tabIndex)].map(item => <ShopColumn key={uuidv4()} sku={skuContext.state[item]} />)
        }
      </div>

      <style jsx>
        {`
          .swiper-container {
            min-height: 400px; // During swiper init the grid has 0 height. Fixes flash.
            opacity: 0;
          }

          .swiper-container-initialized {
            opacity: 1;
            transition: .3s ease all;
          }

          .swiper-slide {
            height: 450px;
            background-color: white;
          }

          .loader {
            height: 450px;
          }
        `}
      </style>
    </div>
  )
}
