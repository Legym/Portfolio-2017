module.exports = (() => {
  const colors = [
    'red',
    'black',
    'blue',
    'orange',
    'green',
    'yellow',
    'cool-gray-10',
    'cool-gray-6',
    'cool-gray-3',
    'cool-gray-1',
    'white',
    '#002288'
  ];

  const tmpl = {
    page:
      `
import React, { useEffect } from 'react';
import Layout from '@layout/d';
import Icon from '@components/_global/icons/icons';
// import clickToCopy from "../../assets/_global/js/partials/click-to-copy";

export default function Icons() {

  useEffect(() => {
    // clickToCopy.init();
  })

  return (
    <>
      <div className="grid-container">
        <h1>Icon System</h1>
        {{GRID_MARKUP}}

        <style jsx>
          {\`
            section {
              margin-bottom: 18px;
            }

            section:nth-of-type(3n) {
              margin-bottom: 36px;
            }

            .cell {
              margin-bottom: 12px;
            }

            .cell--icon {
              margin-bottom: 12px;
              transition: all 150ms ease;
            }

            .cell--icon:active {
              color: currentColor - #111;
              transform: translateY(3px);
            }

            pre code {
              display: block;
              font-size: 14px;
              padding: 8px 12px;
              background-color: #e6e6e6;
            }
          \`}
        </style>
      </div>
    </>
  )
}

Icons.Layout = Layout
`
  };

  const htmlEncode = (markup) => {
    let buf = [];
    for (let i = markup.length - 1; i >= 0; i--) {
      buf.unshift(['&#', markup[i].charCodeAt(), ';'].join(''));
    }
    return buf.join('');
  };

  const generatePage = (files) => {
    let gridMarkup = '';

    files.forEach((file, index) => {

      let fontSize = 35;

      if (file.indexOf('minus') > -1) {
        fontSize /= 4;
      }

      // Header for each section
      gridMarkup +=
        `<section className="grid-x">
          <div className="cell full">
            <h2>${file.replace('.svg', '')}</h2>
            <p>Click an icon to copy its component markup.</p>
          </div>
        </section>

        <section className="grid-x">
          <div className="cell full">
            <pre><code>${htmlEncode(`<Icon name="${file.replace('.svg', '')}"></Icon>`)}</code></pre>
          </div>
        </section>

        <section className="grid-x small-up-2 medium-up-4 large-up-6">`;

      // Cells of icons for each section
      colors.forEach((color) => {
        gridMarkup +=
          `
          <div className="cell cell--icon" data-click-to-copy='${htmlEncode(`<Icon name="${file.replace('.svg', '')}" color="${color}"></Icon>`)}'>
            <Icon name="${file.replace('.svg', '')}" color="${color}" size="${fontSize}px;"></Icon>
          </div>`;
      });

      // Closing tag for each section
      gridMarkup += `
      </section>
      `;

    });


    return tmpl.page
      .replace('{{GRID_MARKUP}}', gridMarkup.replace(/\s+$/, ''));
  }

  return {
    generatePage
  }
})();
