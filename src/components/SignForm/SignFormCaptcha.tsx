import React from 'react'
import styled from 'styled-components'

interface PropsType {
  children?: string
}

/*---> Component <---*/
function SignFormCaptcha({ children }: PropsType) {
  return <Text>{children}</Text>
}

/*---> Styles <---*/
export const Text = styled.p`
  margin-top: 10px;
  font-size: 13px;
  line-height: normal;
  color: #8c8c8c;
`

export default SignFormCaptcha
