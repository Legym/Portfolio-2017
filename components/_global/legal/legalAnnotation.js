import React, { useEffect } from 'react';
import { LegalState } from '@store/_global/legal';

export default function LegalAnnotation({ annotation }) {

  const [ { annotationList, legalText }, dispatch ] = LegalState();

  useEffect(() => {

    function setAnnotation() {
      let newArr = annotationList;

      if (newArr.indexOf(annotation) === -1) {
        newArr.push(annotation)
      }

      dispatch({ type: 'setAnnotation', setAnnotation: newArr })
    }

    function removeAnnotation() {
      let newArr = annotationList;

      for( var i = 0; i < newArr.length; i++) {
        if (annotation === newArr[i]) {
          newArr.splice(newArr[i]);
        }
      }

      dispatch({ type: 'setAnnotation', setAnnotation: newArr })
    }

    // ComponentDidMount
    setAnnotation();

    // ComponentDidUnMount
    return () => removeAnnotation();

    /* eslint-disable react-hooks/exhaustive-deps */
  }, [annotation])
  // FIX THIS. New legal annotation (like a modal pop), will trigger a render when loaded on the page, but will not update whats currently on the page
  // Shallow comparrsion. We need deep!


  // Loop through active
  function displayAnnotation() {
    const active = legalText.find(item => item.id === annotation);
    return active.annotation;
  }


  return (
    <sup>
      {
        // Dirty check: Check if legal has been populated or wait for legal annotation to hit endpoint with new sku
        typeof legalText.find(item => item.id === annotation) === 'undefined'
          ? ''
          : displayAnnotation()
      }
    </sup>
  )
}
