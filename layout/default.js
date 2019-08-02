import React from 'react';

export default function Default({ children }) {

  return (
    <>
      <main className="body">
        {children}
      </main>

      <style jsx>
        {`
          .body {
            background-color: #FBFBFB;
          }
        `}
      </style>

      <style jsx global>
        {`
          // This is only compiled during build. Not during dev mode; you will need to restart the build
          @import 'assets/default/scss/project.scss';
        `}
      </style>
    </>
  )
}
