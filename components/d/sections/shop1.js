import React from 'react';
import LegalAnnotation from '@components/_global/legal/legalAnnotation';

export default function Shop1() {

  return (
    <section>
      <div className="grid-container">
        <div className="grid-x">
          <div className="cell large-4">
            <h1>Limited Time Offer</h1>
            <p>Get a $100 Visa Reward Card when you sign up for a 2-year contract. <LegalAnnotation annotation="hbo_fios_vtg_offer_3_24" /></p>
          </div>

          <div className="cell large-4">
            <div className="block">
              <h3>Frontier Personal Security Bundle</h3>
              <span>free for 12 months</span>
              <p>Get secure cloud storage and software to help protect your devices. Offer not valid with TV bundles.<LegalAnnotation annotation="hbo_fios_vtg_offer_3_24" /></p>
            </div>
          </div>

          <div className="cell large-4">
            <div className="block">
              <h3>HBO included for 12 months</h3>
              <p>when you bundle with qualifying TV service.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
