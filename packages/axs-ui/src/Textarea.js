
import React from 'react'
import { Box, config } from 'axs'
import resets from './resets'

class Textarea extends React.Component {
  render () {
    const { css, ...props } = this.props

    return (
      <Box
        is='textarea'
        css={{
          ...cx,
          ...css
        }}
        rounded
        border
        borderGray3
        width={1}
        {...props}
      />
    )
  }
}

const cx = {
  ...resets.textarea,
  ':focus': {
    outline: 'none',
    borderColor: config.colors.blue
  }
}

export default Textarea

