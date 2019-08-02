import React from 'react';

export default function ModuleA({ page }) {

  function contentAlign() {
    const { position } = page;
    return position === 'Left'
      ? ''
      : 'align-right';
  }

  function lightText() {
    const { lightText } = page;
    return lightText === 'Yes'
      ? 'light-text'
      : '';
  }

  function backgroundImage() {
    return { backgroundImage: `url(${page.backgroundImage})` }
  }

  function headline() {
    const { tag, text } = page.headline;

    switch (tag) {
      case 'h1': return {__html: `<h1 class="headline-1"> ${text} </h1>`};
      case 'h2': return {__html:`<h2 class="headline-2"> ${text} </h2>`};
      case 'h3': return {__html:`<h3 class="headline-3"> ${text} </h3>`};
      default: return {__html:`<h2 class="headline-2"> ${text} </h2>`};
    }
  }

  return (
    <>
      <div className={`content-deck module-a ${lightText()}`}>

        <div className="background" style={backgroundImage()} />

        <div className="grid-container">
          <div className={`grid-x ${contentAlign()}`}>
            <div className="cell small-12 medium-6">
              <div className="module-A__headline" dangerouslySetInnerHTML={headline()} />
              <span className="intro" dangerouslySetInnerHTML={{__html: page.content}} />
              <span>{page.legal}</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          @import 'assets/_global/scss/partials/_variables.scss';
          @import 'assets/s/scss/partials/_variables.scss';

          .content-deck {
            position: relative;
            max-width: 1200px;
            margin: 0 auto;
            padding: 120px 0;
            border-right: 1px solid #d8dada;
            border-left: 1px solid #d8dada;

            // Small only
            @media screen and (max-width: 39.9375em) {
              padding: 60px 0;
              background-color: $color-cool-gray-1;
            }
          }

          .background {
            position: absolute;
            z-index: 0;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background-repeat: no-repeat !important; // used to style the background image, which is an inline style
            background-position: center !important; // used to style the background image, which is an inline style

            // Small only
            @media screen and (max-width: 39.9375em) {
              position: inherit;
              height: 230px;
              margin-top: -60px;
              margin-bottom: 60px;
              background-position: center !important; // used to style the background image, which is an inline style
              background-size: cover !important; // used to style the background image, which is an inline style
            }
          }

          .cell {
            position: relative;
            z-index: 100;

            // Small only
            @media screen and (max-width: 39.9375em) {
              position: inherit;
            }
          }

          .light-text {
            color: $color-white;

            // Small only
            @media screen and (max-width: 39.9375em) {
              color: $color-black;
            }
          }

          .module-A__headline {
            margin-bottom: 12px;
          }
        `}
      </style>
    </>
  )
}
