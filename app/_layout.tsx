import 'expo-dev-client'
import { ThemeProvider as NavThemeProvider } from '@react-navigation/native'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import styled, { ThemeProvider as StyledThemeProvider, type DefaultTheme } from 'styled-components/native'
import { appTheme, navTheme } from 'src/config/theme'
import { RootSiblingParent } from 'react-native-root-siblings';

export default function AppLayout() {
  return (
    <StyledThemeProvider theme={appTheme as DefaultTheme}>
      <StatusBar style="dark"  />
      <S.SafeAreaView>
          <NavThemeProvider value={navTheme}>
            <RootSiblingParent>
              <Stack screenOptions={ {headerShown: false}} />
            </RootSiblingParent>
          </NavThemeProvider>
      </S.SafeAreaView>
    </StyledThemeProvider>
  )
}

const S = {
  SafeAreaView: styled.SafeAreaView`
    flex: 1;
    flex-direction: column;
  `
}
