import React from 'react'
import styled from 'styled-components'
import colors from '~/styles/colors'
import typography from '~/styles/typography'

const Hyperlink = styled.a`
  color: ${colors.interactable};
  display: inline-block;
  font-family: ${typography.sanSerif};
  font-weight: inherit;
  font-size: inherit;

  &:hover {
    transition: transform 0.4s ease;
    transform: translateY(-0.1em);
  }
`

const Link = ({children, rel, target, to}) => {
  // Always add noreferrer and noopener to rel if the target is blank
  const relationship =
    (rel || '') + `${target === '_blank' && ' noreferrer noopener'}`
  return (
    <Hyperlink href={to || '#'} rel={relationship} target={target}>
      {children}
    </Hyperlink>
  )
}

export default Link