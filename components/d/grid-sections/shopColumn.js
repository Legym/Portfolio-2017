import React from 'react';
import Icon from '@components/_global/icons/icons'
import Button from '@components/d/_dumb/button';
import uuidv4 from 'uuid/v4';
import Link from 'next/link';

export default function ShopColumn({ sku }) {
  const { InternetSpeed, Price, Bullets, PackageDisclaimer } = sku;
  const { term } = sku.package;

  function splitString() {
    const array = Bullets.split('|');
    return array
  }

  return (
    <div className="swiper-slide">
      <p>{InternetSpeed} / {InternetSpeed} Mbps Internet</p>
      <h4 className="headline-2">{Price} {term}</h4>
      <span className="legal">{PackageDisclaimer}</span>
      <Button color="red">Order now</Button>
      <ul>
        {splitString().map(index => <li key={uuidv4()}><Icon name="checkmark" /> {index}</li>)}
      </ul>

      <style jsx>
        {`
          ul {
            list-style-type: none;
            margin-left: 0;
          }

          .swiper-slide {
            background-color: white;
            box-shadow: 0px 12px 20px 0px rgba(0,0,0,0.07);
          }
        `}
      </style>
    </div>
  )
}
