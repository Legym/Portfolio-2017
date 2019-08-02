import React from 'react';
import Link from 'next/link';

export default function Footer() {

  return (
    <>
      <div className="grid-container">
        <div className="grid-x">

          <div className="cell large-12">
            <Link href="/d">
              <a>
                <img src="/static/_global/images/logo-frontier-red.svg" alt="" />
              </a>
            </Link>

            <p>© 2019 Frontier Communications Corporation</p>
          </div>

          <div className="cell large-12">
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

          LEGAL

          <ul className="">
            <li>ICON</li>
            <li>ICON</li>
            <li>ICON</li>
            <li>ICON</li>
          </ul>

          <ul className="">
            <li>privacy Policy</li>
            <li>Terms &amp; Conditions</li>
            <li>Accessibility</li>
          </ul>

        </div>

        <style jsx>
          {`
            .right-block,
            .left-block__top,
            .left-block__social {
              display: flex;
            }
          `}
        </style>
      </div>
    </>
  )
}
