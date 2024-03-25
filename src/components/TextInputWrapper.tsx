import styled from "styled-components/native"
import { appTheme } from "src/config/theme"
import {  TextInputProps, ToastAndroid } from "react-native"
import { useState } from "react"


interface Props extends TextInputProps {

}

export default function TextInputWrapper(props: Props) {
  //  const [ isFocus, setIsFocus] = useState(false)

  //  const onFocus = ()=>{
  //     setIsFocus(true)
  //  }

  //  const onBlur = ()=>{
  //   setIsFocus(false)
  //  }
    return (
      
      <S.TextInput 
      // style={{borderColor: isFocus ? `${appTheme.blue1859FF}` : `${appTheme.gray434343}`}}
      placeholderTextColor={appTheme.grayAAAAAA } 
      selectionColor={ appTheme.blue1859FF} 
      // onFocus={onFocus}
      // onBlur={onBlur}
      { ...props} 
      />
    )
  }

  
const S = {
    TextInput: styled.TextInput`
      border-width: 1px;
      color: ${(p) => p.theme.grayAAAAAA};
      background: ${(p) => p.theme.gray434343};
      height: ${(p) => p.theme.size(58, 'px')};
      border-radius: 8px;
      padding: 0 ${(p) => p.theme.size(12, 'px')};
      font-family: helvetica;
      font-weight: bold;
      font-size: ${(p) => p.theme.size(20, 'px')};
      margin-bottom: ${(p) => p.theme.size(14, 'px')};
    `
  }
  