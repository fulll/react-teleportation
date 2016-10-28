import styled from 'styled-components'

export const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, ${props => props.opacity});
`
export const Img = styled.img`
  position: absolute;
  left: 20%;
  top: 10%;
  width: 60%;
`
