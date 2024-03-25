import styled from 'styled-components/native'
import { Stack, useRouter } from 'expo-router'
import ScreenLayout from 'src/components/ScreenLayout'


import TextInputWrapper from 'src/components/TextInputWrapper'
import ButtonWrapper from 'src/components/ButtonWrapper'
import { toastShow } from 'src/utils/toast'
import StackScreenHeader from 'src/components/StackScreenHeader'

export default function ForgetPwdScreen() {

  return (
    <ScreenLayout >
      <S.Content>
        <StackScreenHeader  />
        <S.Title>
            Forgot Password
        </S.Title>
        <TextInputWrapper placeholder='Email Address'/>
        <TextInputWrapper placeholder='Password' textContentType="password" secureTextEntry={true} />
        
        <ButtonWrapper  title='Submit' />
        
      </S.Content>
    </ScreenLayout>
  )
}

const S = {
  Content: styled.View`
    padding: 0 ${(p) => p.theme.size(45, 'px')};
  `,
  Title: styled.Text`
    color: ${(p) => p.theme.orange};
    font-family: helvetica;
    font-weight: 900;
    font-size: ${(p) => p.theme.size(36, 'px')};
    margin-bottom: ${(p) => p.theme.size(90, 'px')};
  `
}



  