import React, { useState } from 'react';
import PriceLockup from '@components/d/priceLockup/homepageHeroLockup';
import Button from '@components/d/_dumb/button';
import LegalAnnotation from '@components/_global/legal/legalAnnotation';

export default function HeroLanding() {

  const [sku] = useState('comshopgridint1')

  return (
    <div className="heroLanding">
      <div className="grid-container">
        <div className="grid-x">
          <div className="cell large-6">
            <h1>Fasten your digital seatbelt</h1>
            <p>Frontier  has the speeds you need on a network you can trust. <LegalAnnotation annotation="vrc-sponsoredbyftr-jan-off-change" /> </p>

            <PriceLockup sku={sku} />

            <div className="">
              <Button color='red'>Order Online</Button>
              <Button basic>Shop Plans</Button>
            </div>
          </div>

          <div className="cell large-6">
            <img src="/static/d/images/hero.svg" alt="" />
          </div>

        </div>
      </div>

      <style jsx>
        {`
          .heroLanding {
            display: flex;
          }
        `}
      </style>
    </div>
  )
}
