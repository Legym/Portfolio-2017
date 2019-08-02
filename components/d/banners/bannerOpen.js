import React from 'react';
import PhoneNumber from '@components/_global/fuse/phoneNumber';
import Countdown from '@components/_global/countdown';
import Icon from '@components/_global/icons/icons';

export default function BannerOpen() {

  return (
    <div className="banner">
      <div className="grid-container">
        <div className="grid-x">
          <div className="cell large-6">
            <div className="banner__content">
              <p>We're open!</p>

              <div>
                <Icon name="clock" color="black" />
                <Countdown endDate="08/10/20 05:00:00 PM" />
              </div>
            </div>
          </div>

          <div className="cell large-6">
            <div>
              <span>
                Call now to order
              </span>
              <PhoneNumber />
            </div>
          </div>

        </div>
      </div>

      <style jsx>
        {`
          .banner {
            background-color: #E14643;
            color: #fff;
          }

          .banner__content {
            display: flex;
          }
        `}
      </style>
    </div>
  )
}
