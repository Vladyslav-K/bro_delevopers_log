import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(360deg);
}
`

const Spinner = styled.div`
  margin: -5em 0 0 -5em;
  font-size: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  text-indent: -9999em;
  border-top: 1.1em solid rgba(98, 87, 114, 0.2);
  border-right: 1.1em solid rgba(98, 87, 114, 0.2);
  border-bottom: 1.1em solid rgba(98, 87, 114, 0.2);
  border-left: 1.1em solid rgb(98, 87, 114);
  transform: translateZ(0);
  animation: ${rotate} 1.1s infinite linear;

  border-radius: 50%;
  width: 10em;
  height: 10em;

  &:after: {
    border-radius: 50%;
    width: 10em;
    height: 10em;
  }
`
export default Spinner
