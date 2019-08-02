import React, { useContext } from 'react';
import { SkusContext } from '@store/_global/skus/';
import { Dimmer, Loader } from 'semantic-ui-react';
import LegalAnnotation from '@components/_global/legal/legalAnnotation';

export default function PriceHeroLanding({ sku }) {
  const skuContext = useContext(SkusContext);

  if (skuContext.state === null) {
    return (
      <Dimmer active inverted>
        <Loader size='massive'>Loading</Loader>
      </Dimmer>
    );
  }

  const { InternetSpeed, Price, PackageDisclaimer,  } = skuContext.state[sku];
  const { term } = skuContext.state[sku].package;
  const { annotation } = skuContext.state[sku].legal;

  return (
    <>
      <p>{InternetSpeed} / {InternetSpeed} Mbps Internet</p>
      <h4 className="headline-2">{Price} {term}</h4>
      <span className="legal">{PackageDisclaimer}</span>
      <LegalAnnotation annotation={annotation} />
    </>
  )
}
