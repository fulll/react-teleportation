import React from 'react'
import { capitalize as c } from 'lodash'
import styled from 'styled-components'

const fontFamily = 'Noto, Roboto, sans-serif'

const Modal = styled.div`
  display: table;
  max-width: 400px;
  min-width: 350px;
  margin: 30vh auto;
  background-color: white;
  padding-bottom: 8px;
`
const H1 = styled.h1`
  font-size: 20px;
  font-weight: 600;
  padding: 24px 24px 0;
  margin: 0;
  font-family: ${fontFamily};
`

const P = styled.p`
  font-size: 14px;
  padding: 24px;
  margin: 0;
  font-family: ${fontFamily};
`

const Button = styled.button`
  background-color: transparent;
  cursor: pointer;
  color: #2196F3;
  font-size: 14px;
  height: 45px;
  box-sizing: border-box;
  font-weight: 500;
  padding: 12px 10px;
  float: right;
  text-transform: uppercase;
  outline: none;
  border: none;
  &:hover {
    background-color: #eee;
  }
`

export const Alert = ({ title, description, right, left }) => (
  <Modal>
    <H1>{c(title)}</H1>
    <P>{c(description)}</P>
    <footer style={{ padding: 8 }}>
      <Button onClick={right.action}>{right.title}</Button>
      <Button onClick={left.action}>{left.title}</Button>
    </footer>
  </Modal>
)
Alert.propTypes = {
  /* eslint-disable react/no-unused-prop-types */
  title: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
  right: React.PropTypes.shape({
    title: React.PropTypes.string.isRequired,
    action: React.PropTypes.func.isRequired,
  }),
  left: React.PropTypes.shape({
    title: React.PropTypes.string.isRequired,
    action: React.PropTypes.func.isRequired,
  }),
  /* eslint-enable react/no-unused-prop-types */
}
