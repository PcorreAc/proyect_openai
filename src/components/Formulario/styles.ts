import styled from 'styled-components'

export const ContainerImages = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(256px, auto));
  justify-content: center;
  overflow: auto;
  gap: 20px;
  img {
    max-width: 256px;
  }
`

export const ContainerBox = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  border: 1px solid #3b3b3b;
  box-shadow: 2px 0px 12px 3px rgb(255 255 255 / 8%);

  p {
    color: #666d65;
    padding: 15px;
    margin: 0 auto;
    letter-spacing: 0.15em;
    :last-child {
      overflow: auto;
    }
  }
`

export const ContainerForm = styled.div`
  display: flex;
  width: 100%;
  height: 75px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border-top: 1px solid #3a3a3a;

  button {
    position: absolute;
    display: flex;
    padding: 5px;
    color: #676968;
    border-radius: 8px;
    gap: 10px;
    font-size: 12px;
    background: #242424;
    border: 1px solid #3a3a3a;
    align-items: center;
    cursor: pointer;
    bottom: 75px;

    img {
      width: 15px;
      height: 15px;
    }
  }
`

export const Form = styled.form`
  display: flex;
  width: 50%;
  justify-content: end;
  height: 35px;

  input {
    border-radius: 8px;
    padding: 0px 10px;
    border: 1px solid #606060;
    width: 100%;
  }
  img {
    position: absolute;
    padding: 8px 10px;
    cursor: pointer;
  }
`
