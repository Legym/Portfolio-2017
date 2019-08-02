import React, { useEffect } from 'react';
import { LegalState } from '@store/_global/legal';
import uuidv4 from 'uuid/v4';
import Axios from 'axios';

export default function LegalText() {

  const [ { annotationList, legalText, counter }, dispatch ] = LegalState();

  useEffect(() => {

    async function fetchLegalText() {
      await Axios.get(`https://internet.frontier.com/api/legal.php?ann=${annotationList.join('|')}&site=internet.frontier.com`)
        .then(res => {

          let listOfLegalText = [];
          const legalResponse = res.data;

          // The legal endpoint response comes back as one large object. We need to format the structure
          // and save the response as an array of objects
          Object.keys(legalResponse).map(key => {

            let newObj = {
              id: key,
              annotation: legalResponse[key].annotation,
              text: legalResponse[key].text
            };

            listOfLegalText.push(newObj)
          })

          // Commit array to state
          dispatch({ type: 'setLegalText', setLegal: listOfLegalText })
        })
        .catch(err => console.log(err))
    }

    // If there are no annotations on the page, reset the LegalText instead of making a network request
    (annotationList.length === 0)
      ? dispatch({ type: 'setLegalText', setLegal: [] })
      : fetchLegalText();

  /* eslint-disable react-hooks/exhaustive-deps */
  }, [counter]) // We cannot watch annotationList due to shallow comparsion. Same problem as legalAnnotation.

  return (
    <div className="grid-container">
      <div className="grid-x">
        <div className="cell large-12">
          {legalText.map(item => <p className="legal" key={uuidv4()}>{item.annotation} {item.text}</p>)}
        </div>
      </div>
    </div>
  )
}
