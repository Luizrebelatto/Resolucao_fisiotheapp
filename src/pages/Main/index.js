import React from 'react';
import ImgPerson from '../../assets/person.png'
import {Wrapper,ContentText,Image,ButtonArea,Button,ButtonText,ViewText} from './style'

export default function Main({navigation}){
  return(
    <Wrapper>
      <Image source={ImgPerson}/>

      <ViewText>
        <ContentText>Olá, Lorena!</ContentText>
      </ViewText>
      
      <ContentText>Vamos Iniciar o seu</ContentText>
      <ContentText>tratamento? :)</ContentText>

      <ButtonArea>
        <Button onPress={() => navigation.navigate('Exercise')}>
          <ButtonText>Iniciar Tratamento</ButtonText>
        </Button>
      </ButtonArea>

    </Wrapper>
  )
}
