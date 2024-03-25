import styled from 'styled-components/native'
import { Link, Stack, useRouter } from 'expo-router'
import ScreenLayout from 'src/components/ScreenLayout'
import LoginSignup from 'src/components/LoginSignup'
import { useState } from 'react';
import StackScreenHeader from 'src/components/StackScreenHeader';
import { useTheme } from 'styled-components/native';


export default function SignupScreen() {
    const [count, setCount] = useState(0);
    const { blue1859FF } = useTheme();


  return (
    <ScreenLayout testID="home-screen-layout">
      <S.Content testID="home-screen-content">
        <StackScreenHeader  />
        <LoginSignup type="signup">
        <S.ViewWrapper>
            <S.Text>Already have an account? </S.Text>
            <Link href="/"><S.Text style={{ color: blue1859FF}}>Login here</S.Text></Link>
        </S.ViewWrapper>
    
        </LoginSignup>

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
 `,
  Text: styled.Text`
    color: ${(p) => p.theme.white};
    font-size: ${(p) => p.theme.size(16, 'px')};
  `,
}
