import React, { useState, useEffect, useContext, useMemo } from 'react';
import { PreampContext } from '@store/cohesion/preamp/';
import preampConfig from '@preamp/config';

export default function Preamp({ placement, children }) {
  const preampDecision = useContext(PreampContext);
  const [ PreampAsset, setPreampComponent ] = useState(null);

  useEffect(() => {

    if (preampDecision) {

      // Assign Preamp decisions
      const preampDecisionAsset = preampDecision[placement];

      // If our decisions do not exists; skip
      if (typeof preampDecisionAsset !== 'undefined') {

        // Check if Preamp decisions exists in our preampConfig
        const assetName = preampConfig[preampDecisionAsset.id].path;

        // Code splitting
        assetName
          ? import(`../../../preamp/assets/${assetName}`).then(preampAssetCode => setPreampComponent(preampAssetCode))
          : ''

      }
    }
  }, [placement, preampDecision]); // Only update this component if preamp updates our provider

  // Convert Symbol into a react component
  const Component = useMemo(() => PreampAsset && PreampAsset.default, [PreampAsset]);

  // If a preamp decision is found in our preampConfig, load the preamp component
  // else load the base site (children)
  return PreampAsset ? <Component /> : children;
}
