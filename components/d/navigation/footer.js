import React from 'react';
import Link from 'next/link';

export default function Footer() {

  return (
    <footer className="footer">
      <div className="grid-container">
        <div className="grid-x">

          <div className="cell large-6">
            <div className="left-block">
              <div className="left-block__top">

                <Link href="/d">
                <a>
                  <img src="/static/_global/images/logo-frontier-red.svg" alt="" />
                </a>
              </Link>

                <ul className="left-block__social">
                <li>ICON</li>
                <li>ICON</li>
                <li>ICON</li>
                <li>ICON</li>
              </ul>
              </div>

              <div className="left-block__bottom">
                <span>© 2019 Frontier Communications Corporation</span>
                <ul className="left-block__tos">
                <li>privacy Policy</li>
                <li>Terms &amp; Conditions</li>
                <li>Accessibility</li>
              </ul>
              </div>
            </div>
          </div>

          <div className="cell large-6">
            <div className="right-block">
              <ul>
                <li>Plans & Pricing</li>
                <li>Internet</li>
                <li>Voice</li>
                <li>Bundles</li>
              </ul>

              <ul>
                <li>Customer Support</li>
                <li>Manage Account</li>
                <li>Online Billpay</li>
                <li>Order online</li>
              </ul>

              <ul>
                <li>Frontier Secure</li>
                <li>Business</li>
                <li>Check Availability</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .footer {
            padding-top: 94px;
          }

          .right-block,
          .left-block__top,
          .left-block__social {
            display: flex;
          }
        `}
      </style>
    </footer>
  )
}
