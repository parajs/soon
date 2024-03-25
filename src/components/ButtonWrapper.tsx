import styled from "styled-components/native"
import { appTheme } from "src/config/theme"
import {  ButtonProps,Text, TouchableOpacityProps } from "react-native"


interface Props extends TouchableOpacityProps {
    title: string
}


export default function ButtonWrapper(props: Props) {
    const { title = '' } = props
    return (
      <S.Button activeOpacity={0.6}  { ...props} >
         <S.Text>{title}</S.Text>
      </S.Button>
    )
  }

  
const S = {
    Button: styled.TouchableOpacity`
      background: ${(p) => p.theme.orange};
      height:  ${(p) => p.theme.size(58, 'px')};
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
      padding: 0 ${(p) => p.theme.size(12, 'px')};
      margin-bottom: ${(p) => p.theme.size(14, 'px')};
    `,

     Text: styled.Text`
     color: ${(p) => p.theme.black};
     font-weight: bold;
     font-size: ${(p) => p.theme.size(20, 'px')};
   `
  }
  