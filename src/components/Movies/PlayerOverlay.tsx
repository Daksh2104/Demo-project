import React, { ReactNode } from 'react'
import styled from 'styled-components'

/*---> Component <---*/
const PlayerOverlay = ({ children, ...restProps }: PropsType) => {
  return <Wrapper {...restProps}>{children}</Wrapper>
}

/*---> Styles <---*/
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`

/*---> Interfaces <---*/
interface PropsType {
  children: ReactNode
  onClick: () => void
}

export default PlayerOverlay
