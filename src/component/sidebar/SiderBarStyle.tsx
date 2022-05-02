import styled, { keyframes } from 'styled-components'
const waveAnimation = keyframes`{
  0% {
    width: 8px;
    height: 8px;
    border-radius: 50%;

  }
  100% {
    width: 200px;
    height: 200px;
    border-radius: 50%;
 }
}
`
export const Wave = styled.div`
  background-color: transparent;
  text-align: center;
  div {
    width: 8px;
    height: 8px;
    box-shadow: 0 0 20px #bdc3c7;
    border-radius: 8px;
    position: absolute;
    top: 256px;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  div.pointer1 {
    animation: ${waveAnimation} 3s infinite ease-out;
  }
  div.pointer2 {
    animation: ${waveAnimation} 3s 0.5s infinite ease-out;
  }
  div.pointer3 {
    animation: ${waveAnimation} 3s 0.8s infinite ease-out;
  }
  div.pointer4 {
    animation: ${waveAnimation} 3s 1.3s infinite ease-out;
  }
  div.pointer5 {
    animation: ${waveAnimation} 3s 1.8s infinite ease-out;
  }
`
export const SideBarWrapper = styled.section`
  margin-bottom: 100px;
  div.wrapped {
    background-color: white;
    border-radius: 25px;
    margin: 0 auto;
    padding-top: 30px;
    width: 340px;
    height: 390px;
    box-shadow: 1px 3px 10px rgb(153 153 153 / 30%);
  }
  div.title {
    margin-top: 30px;
  }
  div.link {
    display: flex;
    justify-content: center;
    .my-media {
      &:hover {
        background-color: rgb(235, 235, 235);
      }
      cursor: pointer;
      height: 35px;
      padding: 8px;
      border-radius: 8px;
      margin-left: 15px;
      /* line-height: 35px; */
      box-shadow: 1px 3px 10px rgb(153 153 153 / 30%);
    }
  }
`
