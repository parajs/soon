import styled from 'styled-components/native'
import {  Link, Stack } from 'expo-router'
import ScreenLayout from 'src/components/ScreenLayout'
import { Text} from 'react-native'

export default function LoginScreen() {
  
  return (
    <ScreenLayout testID="home-screen-layout">
      <S.Content testID="home-screen-content">
        {/* <Stack.Screen  options={{ title: 'Home Screen' }} /> */}
        <Text>profile</Text>
      </S.Content>
    </ScreenLayout>
  )
}



const S = {
  Content: styled.View`
    padding: 40px 45px;
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
