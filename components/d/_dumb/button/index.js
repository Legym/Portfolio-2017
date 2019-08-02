import React from 'react'
import { Button } from 'semantic-ui-react'

const ButtonPrimary = props => {

  return (
    <>
      <Button {...props} className="ButtonPrimary ButtonPrimary__padding" />

      <style jsx global>
        {`
            @import 'assets/_global/scss/partials/_variables.scss';
            @import 'assets/d/scss/partials/_variables.scss';
            @import 'assets/_global/scss/partials/_mixins.scss';

            .ui.button.ButtonPrimary__padding {
              @include buttons('primary')
              padding: 15px 30px;
            }

            // Override Semantic UI's style
            .ui.red.button {
              background-color: $color-red;
            }

            .ui.basic.button {
              box-shadow: 0 0 0 2px $color-red;
              color: $color-red !important;
            }
          `}
      </style>
    </>
  )
}

export default ButtonPrimary;
