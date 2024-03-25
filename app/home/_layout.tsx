import { Tabs } from "expo-router";
import  HomeSvg from 'src/assets/icons/home.svg'
import  ExploreSvg from 'src/assets/icons/explore.svg'
import  ChatSvg from 'src/assets/icons/chat.svg'
import  ProfileSvg from 'src/assets/icons/profile.svg'
import  HomeOrangeSvg from 'src/assets/icons/home-orange.svg'
import  ExploreOrangeSvg from 'src/assets/icons/explore-orange.svg'
import  ChatOrangeSvg from 'src/assets/icons/chat-orange.svg'
import  ProfileOrangeSvg from 'src/assets/icons/profile-orange.svg'

import { useTheme } from "styled-components/native";

export default function HomeLayout() {
   const {orange, gray434343,black} = useTheme()
    return (
      <Tabs 
      screenOptions={{
        tabBarActiveTintColor: orange,
        tabBarInactiveTintColor: black,
        tabBarStyle: {
            borderTopColor: gray434343,
            backgroundColor: gray434343,
        }
      }}>
        <Tabs.Screen
          name="index"
          options={{
              headerShadowVisible: false,
              tabBarLabel: "Home",
              tabBarIcon: ({focused})=>{
                return focused ? <HomeOrangeSvg /> : <HomeSvg />
              },
          }}
        />
        <Tabs.Screen
          name="explore"
          options={{
              tabBarLabel: "Explore",
              tabBarIcon: ({focused})=>{
                return focused ? <ExploreOrangeSvg /> : <ExploreSvg />
              },
          }}
        />
        <Tabs.Screen
          name="chat"
          options={{
              tabBarBadge: 1,
              tabBarBadgeStyle: {left: 10,position: "absolute"},
              tabBarLabel: "Chat",
              tabBarIcon: ({focused})=>{
                return focused ? <ChatOrangeSvg /> : <ChatSvg />
              },
          }}
        />

        <Tabs.Screen
          name="profile"
          options={{
              tabBarLabel: "Profile",
              tabBarIcon: ({focused})=>{
                return focused ? < ProfileOrangeSvg/> : <ProfileSvg />
              }
          }}
        />

      </Tabs>
    )
  }
  