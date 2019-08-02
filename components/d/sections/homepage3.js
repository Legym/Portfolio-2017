import React from 'react';
import Button from '@components/d/_dumb/button';

export default function Homepage3() {

  return (
    <section className="homepage3">
      <div className="grid-container">
        <div className="grid-x">
          <div className="cell large-6">
            <img src="/static/d/images/tv.svg" alt="" />
          </div>

          <div className="cell large-6">
            <h2>Upgrade your entertainment</h2>
            <h3>With Frontier, you can talk, game and stream even more.</h3>
            <p>Make your house feel like home with an Internet, TV and phone bundle from FiOS by Frontier. Stream as much as you want, with no data caps or usage limits. With FiOS TV, you can access Netflix just like you access other channels.* Plus, you can talk to friends and family nearby or across the country when you bundle with Frontier. </p>
            <p>*Netflix streaming membership and DVR required. DVR requires an additional monthly fee.</p>

            <Button color="red">Shop Bundles</Button>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .homepage3 {
            padding: 160px 0 200px;
          }
        `}
      </style>
    </section>
  )
}
