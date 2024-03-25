import TextInputWrapper from 'src/components/TextInputWrapper'
import ButtonWrapper from 'src/components/ButtonWrapper'
import styled from 'styled-components/native'
import { PropsWithChildren } from 'react'
import { useRouter } from 'expo-router'

interface Props extends PropsWithChildren {
   type?: 'login' | 'signup'
}

export default function LoginSignup(props: Props){
    const { children, type = 'login' } = props
    
    const router = useRouter();
    const ok = ()=>{
        if(type == 'login'){
            router.navigate('/home')
        }
    }

    return (
        <>
            <S.Title>
                { type == 'login' ? 'Login' : 'Sign up'}
            </S.Title>
            <TextInputWrapper placeholder='Email Address' inputMode='email' maxLength={30}/>
            <TextInputWrapper placeholder='Password' textContentType="password" secureTextEntry={true} maxLength={40} />
            { children}
            <ButtonWrapper onPress={ok}  title= { type == 'login' ? 'Login' : 'Create Account'} />
        
        </>
    )
}


const S = {
    Title: styled.Text`
      color: ${(p) => p.theme.orange};
      font-family: helvetica;
      font-weight: 900;
      font-size: ${(p) => p.theme.size(36, 'px')};
      margin-bottom: ${(p) => p.theme.size(90, 'px')};
    `
  }
  