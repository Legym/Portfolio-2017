import React from 'react';
import Link from 'next/link';
import PhoneNumber from '@components/_global/fuse/phoneNumber';
import Icon from '@components/_global/icons/icons';

export default function Masthead({ visible, handleShowClick }) {

  return (
    <>
      <div className="grid-container">
        <div className="grid-x">
          <div className="cell large-12">

            <div className="menu">
              <Link href="/m">
                <img src="/static/_global/images/logo-frontier-red.svg" alt="" />
              </Link>

              <PhoneNumber />

              <div onClick={() => handleShowClick(!visible)}>
                {visible ?  <Icon name="x" color="black" /> : <Icon name="menu" color="black" /> }
              </div>
            </div>

          </div>
        </div>
      </div>

      <style jsx>
        {`
          .menu {
            display: flex;
          }
        `}
      </style>
    </>
  );
}
