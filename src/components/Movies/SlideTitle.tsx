import React from 'react'
import styled from 'styled-components'

interface PropsType {
  children: string
}

/*---> Component <---*/
function SlideTitle({ children }: PropsType) {
  return <Wrapper>{children}</Wrapper>
}

/*---> Styles <---*/
export const Wrapper = styled.div`
  font-size: 24px;
  color: #e5e5e5;
  font-weight: bold;
  margin-bottom: 20px;

  @media (max-width: 650px) {
    text-align: center;
  }
`

export default SlideTitle
