import React from 'react';
import ImgHand from '../../assets/hand.png'
import {Wrapper,ButtonArea,Button,ButtonText,WrapperContent,Description,Img,Container,Details,Title,Text} from './style'

export default function Exercise({navigation}){
  return(
    <Wrapper>
      
      <WrapperContent>
        <Img source={ImgHand}/>
        <Description>Fechar e Abrir as</Description>
        <Description>mãos</Description>

        <ButtonArea>
          <Button onPress={() => navigation.navigate('Exercise')}>
            <ButtonText>Feito</ButtonText>
          </Button>
        </ButtonArea>
      </WrapperContent>
      
      <Container>
        <Details>
          <Title>Séries</Title>
          <Text>4</Text>
        </Details>
        <Details>
          <Title>Repetições</Title>
          <Text>10</Text>
        </Details>
        <Details>
          <Title>Descanso</Title>
          <Text>20 seg</Text>
        </Details>
      </Container>

    </Wrapper>
    )
}
