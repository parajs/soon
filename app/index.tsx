import styled from 'styled-components/native'
import {  Link, Stack } from 'expo-router'
import LinkButton from 'src/components/LinkButton'
import ScreenLayout from 'src/components/ScreenLayout'
import LoginSignup from 'src/components/LoginSignup'
import StackScreenHeader from 'src/components/StackScreenHeader'


export default function LoginScreen() {

  return (
    <ScreenLayout testID="home-screen-layout">
      <S.Content testID="home-screen-content">
         <StackScreenHeader  />
         <LoginSignup>
          <S.ViewWrapper>
            <Link href="/forgotPwd"><S.Text>Forgot Password?</S.Text></Link>
            <Link href="/signUp"><S.Text>Sign up</S.Text></Link>
          </S.ViewWrapper>
         </LoginSignup>

         <LinkButton href="/home" text="Go To Home" />
         <LinkButton href="/setInfo" text="Go To set Info" />
         <LinkButton href="/secureStore" text="Go To secure store" />
      </S.Content>
    </ScreenLayout>
  )
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
