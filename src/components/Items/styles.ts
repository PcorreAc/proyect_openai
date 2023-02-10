import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 10px;
  //grid-template-columns: repeat(auto-fit, minmax(350px, auto));
  gap: 20px;
  border: 1px solid #3b3b3b;
  border-radius: 10px;
  box-shadow: 2px 0px 12px 3px rgb(255 255 255 / 8%);
`
export const ContainerItem = styled.div`
  display: flex;
  gap: 20px;
  cursor: pointer;
  :hover {
    opacity: 0.9;
  }
`

type propsItem = {
  background: string
}
export const ItemIcon = styled.div<propsItem>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
  border-radius: 8px;
  background-color: ${(props) => props.background};
`
export const ItemDescription = styled.div`
  opacity: 0.8;
  max-width: 300px;
  text-align: start;
  h3 {
    margin: 0;
  }
  p {
    margin: 0;
    font-size: 12px;
  }
`
