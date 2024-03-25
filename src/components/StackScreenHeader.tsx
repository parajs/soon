import { Stack } from "expo-router";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack/src/types";
 

interface Props  {
    options?: NativeStackNavigationOptions
}

export default function StackScreenHeader(props: Props) {
    const { options = { } } = props
    const mergeOptions = Object.assign({},{ headerShown: true,headerShadowVisible: false,title: ''},options)
    return (
        <Stack.Screen options={mergeOptions} />
    )
  }
