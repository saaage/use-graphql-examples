import React from 'react'
import { oneOf } from 'prop-types'
import styled from 'styled-components'

/**
 * Space uses design token values to create space between components. Instead of scoping margins to each component
 * to acommodate a specific layout, use Space to allow components to be more modular.
 */
const Space = props => {
  return <SpaceRoot data-testid="space-component" {...props} />
}

Space.defaultProps = {
  direction: 'y'
}

Space.propTypes = {
  /**
   * How much space should Space component take up, in multiples of 16.
   */
  value: oneOf([
    'eighth',
    'quarter',
    'half',
    'one',
    'one-and-half',
    'two',
    'three',
    'four'
  ]).isRequired,
  /**
   * Along which axis should the component take up space.
   */
  direction: oneOf(['y', 'x']),
  /**
   * Display property of Space component.
   */
  display: oneOf(['none', 'inline', 'inline-block', 'block'])
}

// prettier-ignore
const SpaceRoot = styled.div.withConfig({ displayName: 'Space' })`
  display: ${props => props.display ? props.display : 'block'};
  height: ${props => (props.direction === 'y') ? `var(--space-${props.value})` : '1px'};
  width: ${props => props.direction === 'x' ? `var(--space-${props.value})` : '1px'};
`

export default Space
