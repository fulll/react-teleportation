import React from 'react'
import styled from 'styled-components'

export const fontFamily = 'Noto, Roboto, sans-serif'
export { AsyncImg as Img } from './AsyncImg'

export const H1 = styled.h1`
  font-size: 20px;
  font-weight: 600;
  padding: 24px 24px 0;
  margin: 0;
  font-family: ${fontFamily};
`

export const P = styled.p`
  font-size: 14px;
  padding: 24px;
  margin: 0;
  font-family: ${fontFamily};
`

export const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, ${props => props.opacity});
`

const Box = styled.div`
  position: fixed;
  width: 200px;
  height: 70px;
  background: white;
  padding: 20px;
  box-sizing: border-box;
  font-family: ${fontFamily};
`

const Arrow = styled.div`
  background: white;
  width: 12px;
  height: 12px;
  position: absolute;
  top: -6px;
  transform: rotate(45deg);
`

export const Tooltip = ({ style, children }) => (
  <Box style={style}>
    <Arrow />
    {children}
  </Box>
)

Tooltip.propTypes = {
  style: React.PropTypes.shape({}),
  children: React.PropTypes.node,
}
