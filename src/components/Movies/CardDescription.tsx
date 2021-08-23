import React from 'react'
import styled from 'styled-components'

interface PropsType {
  children: string
}

/*---> Component <---*/
function CardDescription({ children }: PropsType) {
  return <Wrapper>{children}</Wrapper>
}

/*---> Styles <---*/
export const Wrapper = styled.div`
  color: white;
  max-width: 500px;
  font-size: 18px;
  font-weight: 500;
`

export default CardDescription
