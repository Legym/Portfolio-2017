import React from 'react';
// import Layout from '@layout/d';
// import Icon from '@/components/_global/icons/icons';
// import clickToCopy from "../../assets/_global/js/partials/click-to-copy";

export default function Icons({ name, color, size }) {

  function computedClass() {
    return `icon icon-${name} ${!isHash() ? `icon--${color}` : ''}`;
  }

  function isHash() {
    return color && color.indexOf('#') > -1;
  }

  // function styleString() {
  //   const color = isHash
  //     ? `color: ${color}; `
  //     : '';
  //   const fontSize = size
  //     ? `font-size: ${size} `
  //     : '';
  //   return color + fontSize;
  // }

  return (
    <>
      <i className={computedClass()} />

      <style jsx>
        {`
          .icon {
            display: inline-block;
            font-size: 18px;
            vertical-align: middle;
          }

          // Primary Colors
          .icon--black {
            color: black;
          }

          .icon--red {
            color: red;
          }

          .icon--white {
            color: white;
          }

          // Gray
          .icon--cool-gray-1 {
            color: gray;
          }

          // Pops of Color
          .icon--yellow {
            color: yellow;
          }

          .icon--orange {
            color: orange;
          }

          .icon--green {
            color: green;
          }

          .icon--blue {
            color: blue;
          }
        `}
      </style>
    </>
  )
}
