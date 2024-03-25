import styled from "styled-components/native"
import { TouchableOpacityProps } from "react-native"

import  RightSvg from 'src/assets/icons/right.svg'
import { toastShow } from "src/utils/toast"

interface Props extends TouchableOpacityProps {
}


export default function NextButton(props: Props) {

    return (
      <S.Button  onPress={()=>{ toastShow("chenzhen")}} activeOpacity={0.6}  { ...props} >
        <RightSvg />
      </S.Button>
    )
  }

  
const S = {
    Button: styled.TouchableOpacity`
      background: ${(p) => p.theme.orange};
      height:  ${(p) => p.theme.size(58, 'px')};
      width: ${(p) => p.theme.size(58, 'px')};
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
      padding: 0 ${(p) => p.theme.size(12, 'px')};
      margin-bottom: ${(p) => p.theme.size(14, 'px')};
    `
  }
  