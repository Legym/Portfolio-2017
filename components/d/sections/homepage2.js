import React from 'react';
import Button from '@components/d/_dumb/button';

export default function Homepage2() {

  return (
    <section className="homepage2">
      <div className="grid-container">
        <div className="grid-x">
          <div className="cell large-6">
            <h2>Why Fios® by Frontier?</h2>
            <h3>Don’t settle for less than 100% of the Internet.</h3>
            <p>FiOS by Frontier is a 100% fiber-optic Internet. No network is better equipped than FiOS to support multiple devices and users at the same time. With upload speeds up to 5x faster than cable*, Frontier offers Internet plans that make it easier for you to stay connected, all at a price that won’t break the bank.</p>
            <p>*based on plans with maximum upload speeds of 100 Mbps </p>

            <Button color="red">Check availability</Button>
          </div>

          <div className="cell large-6">
            <img src="/static/d/images/WiFi_Extender-01.svg" alt="" />
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .homepage2 {
            padding-top: 160px;
          }
        `}
      </style>
    </section>
  )
}
