import { useState } from "react";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { View } from "react-native";
import ButtonWrapper from "src/components/ButtonWrapper";
import ScreenLayout from "src/components/ScreenLayout";
import StackScreenHeader from "src/components/StackScreenHeader";
import TextInputWrapper from "src/components/TextInputWrapper";
import { storeGetItem, storeSetItem } from "src/utils/secureStore";
import { toastShow } from "src/utils/toast";
import styled from "styled-components/native";


export default function secureStoreScreen() {
    const [key] = useState('token');
    const [value,setVaue] = useState('');

    const onChange = (e: NativeSyntheticEvent<TextInputChangeEventData>)=>{
        setVaue(e.nativeEvent.text)
    }
  
    return (
        <ScreenLayout>
            <S.Content>
                <StackScreenHeader  options={{headerTitle: '数据存储'}} />
                <View >
            
                    <TextInputWrapper placeholder="输入保存值"  onChange={onChange} />
                    <ButtonWrapper
                    title="Save "
                    onPress={() => {
                        storeSetItem(key, value);
                        toastShow(`'保存${value}成功！'`)
                    }}
                    />

                    <ButtonWrapper
                    title="Get"
                    onPress={async() => {
                      const token = storeGetItem(key)
                      toastShow(token as string)
                    }}
                    />
                    
                </View>
            </S.Content>
        </ScreenLayout>
      
    );
  }

  
const S = {
    Content: styled.View`
      padding: 0 ${(p) => p.theme.size(45, 'px')};
    `,
    ViewWrapper: styled.View`
      display: flex;
      flex-direction: row;
      align-items: center;
      padding-bottom: 21px;
      justify-content: space-between;
      
    `,
    Text: styled.Text`
      color: ${(p) => p.theme.white};
      padding: 6px 0;
      font-size: ${(p) => p.theme.size(16,'px')};
    `
  }
  