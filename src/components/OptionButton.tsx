import styled from "styled-components/native"
import { PressableProps } from "react-native"
import { FC } from "react";



interface Props  {
    pressableProps?: PressableProps
    prefix?: FC,
    text?: string,
    suffix?: FC
}

export default function OptionButton(props: Props) {

    const { pressableProps, prefix: Prefix,text,suffix: Suffix} = props;

    return (
      <S.Button { ...pressableProps} >
       
        {
            Prefix && (<S.Icon> <Prefix /></S.Icon>)
        }
        
        <S.Text>
          { text }
        </S.Text>
        {
            Suffix && (<S.Icon> <Suffix /></S.Icon>)
        }
     
      </S.Button>
    )
  }

  
const S = {
    Button: styled.Pressable`
      background: ${(p) => p.theme.gray434343};
      height:  ${(p) => p.theme.size(60, 'px')};
      display: flex;
      flex-direction: row;
      align-items: center;
      row-gap: ${(p) => p.theme.size(10, 'px')};
      border-radius: 8px;
      padding: 0 ${(p) => p.theme.size(14, 'px')};
      margin-bottom: ${(p) => p.theme.size(14, 'px')};
    `,
     Icon: styled.Text`
        color: ${(p) => p.theme.white};
    `,
    Text: styled.Text`
        flex: 1;
        margin-left: ${(p) => p.theme.size(10, 'px')};
        font-weight: 900;
        color: ${(p) => p.theme.white};
    `
  }
  