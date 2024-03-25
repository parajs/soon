import TextInputWrapper from 'src/components/TextInputWrapper'
import styled from 'styled-components/native'
import {  FC, useState } from 'react'
import ScreenLayout from 'src/components/ScreenLayout'
import NextButton from 'src/components/NextButton';
import StackScreenHeader from 'src/components/StackScreenHeader';
import OptionButton from 'src/components/OptionButton';
import  Male from 'src/assets/icons/male.svg'

import  Female from 'src/assets/icons/female.svg'
import  Transgender from 'src/assets/icons/transgender.svg'
import  KeyboardArrowdown from 'src/assets/icons/keyboard_arrow_down.svg'

interface Option {
  prefix?: FC
  text?: string
  suffix?: FC
}

const genderList: Array<Option> = [
  {
    prefix: Female,
    text: 'Female'
  },
  {
    prefix: Male,
    text: 'Male'
  },
  {
    prefix: Transgender,
    text: 'More Options'
  }
]

const meetList: Array<Option> = [
  {
    prefix: Transgender,
    text: 'Any gender'
  },
  {
    prefix: Female,
    text: 'Female friends only'
  },
  {
    prefix: Male,
    text: 'Male friends only'
  },
 
]



export default function setInfoScreen(){
    const [index, setIndex] = useState(0);

    const [gender,setGender] = useState(-1)

    const [meet,setMeet] = useState(-1)

    const submit = ()=>{}

    const genderPress = (item: Option,key: number)=>{
      for(let i= 0; i< genderList.length;i++){
        delete genderList[i].suffix

      }
      setGender(key)
    }

    
    const meetPress = (item: Option,key: number)=>{
      for(let i= 0; i< genderList.length;i++){
        delete meetList[i].suffix

      }
      setMeet(key)
    }


    


    const renderBirthday = ()=>{
      return (
        <>
          <S.Title>
              When’s your
          </S.Title>
          <S.Title>
              birthday?
          </S.Title>
          <S.Text ></S.Text>
          <TextInputWrapper placeholder='MM/DD/YYYY'  inputMode='numeric' />
         
          {/* {show && (
              <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              onChange={onChange}
              />
          )} */}
          <S.NextButtonWrapper>
            <NextButton  onPress={()=> setIndex(1)} />
          </S.NextButtonWrapper>
        </>
      )
    }


    const renderNickname = ()=>{
      return (
        <>
          <S.Title>
          What’s your
          </S.Title>
          <S.Title>
           nickname?
          </S.Title>
          <S.Text>You can change this later.</S.Text>
          <TextInputWrapper placeholder='Nickname' maxLength={20} />
        
          <S.NextButtonWrapper>
            <NextButton onPress={()=> setIndex(2)}/>
          </S.NextButtonWrapper>
        </>
      )
    }

    const renderGender = ()=>{
      return (
        <>
          <S.Title>
          What’s your gender?
          </S.Title>
         <S.ListWrapper>
          {
            genderList.map((item,key)=>{
              if(gender == key){
                item.suffix = KeyboardArrowdown
              }

              return  (
              <OptionButton 
              key={key} 
              {...item} 
              pressableProps={{ 
                onPress: ()=> genderPress(item,key),
              }}/>
              )
            })
          }
         </S.ListWrapper>
         
        
          <S.NextButtonWrapper>
            <NextButton onPress={()=> setIndex(3)}/>
          </S.NextButtonWrapper>
        </>
      )
    }

    const renderMeet = ()=>{
      return (
        <>
          <S.Title>
           I want 
          </S.Title>
          <S.Title>
           to meet
          </S.Title>
          <S.Text>Choose the kind of friends you want to meet on Soon. You can change this later.</S.Text>
          <S.ListWrapper>
          {
            meetList.map((item,key)=>{
              if(meet == key){
                item.suffix = KeyboardArrowdown
              }

              return  (
              <OptionButton 
              key={key} 
              {...item} 
              pressableProps={{ 
                onPress: ()=> meetPress(item,key),
              }}/>
              )
            })
          }
         </S.ListWrapper>
          <S.NextButtonWrapper>
            <NextButton onPress={()=> setIndex(4)} />
          </S.NextButtonWrapper>
        </>
      )
    }

    const renderPic = ()=>{
      return (
        <>
          <S.Title>
          Add your
          </S.Title>
          <S.Title>
          profile pic
          </S.Title>
          <S.Text>Make sure this photo is of you and your face is clearly visible.</S.Text>
          <S.NextButtonWrapper>
            <NextButton onPress={()=> setIndex(5)} />
          </S.NextButtonWrapper>
        </>
      )
    }

    const renderInto = ()=>{
      return (
        <>
          <S.Title>
          What are you into?
          </S.Title>
          <S.Text>Tab 5 tags to show your hobbies and interests in your profile.</S.Text>
          <S.NextButtonWrapper>
            <NextButton onPress={ submit}/>
          </S.NextButtonWrapper>
        </>
      )
    }

    const steps = [renderBirthday,renderNickname, renderGender,renderMeet,renderPic,renderInto]
  

    return (
        <ScreenLayout >
          <S.Content>
        
            <StackScreenHeader  />
            {steps[index]()}
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
    `,
    NextButtonWrapper: styled.View`
     display: flex;
     flex-direction: row;
     justify-content: center;
     margin-top: ${(p) => p.theme.size(126, 'px')};
    `,
    Text: styled.Text`
     font-size: ${(p) => p.theme.size(14, 'px')};
     color:  ${(p) => p.theme.white};
     padding: 14px 0;
    `,
    ListWrapper: styled.View`
     margin-top: ${(p) => p.theme.size(45, 'px')};
    `
  }
  