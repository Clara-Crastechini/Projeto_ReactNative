import { StyleSheet, Text, View, ImageBackground, Image, ScrollView } from "react-native";
import {Input} from "../components/input/input"
import { Botao } from "../components/botao/botao";
import {Card} from "../components/card/card";

export default function Index() {
  return (
    <>
      {/* 1. Logo + imagem de fundo */}
      <ScrollView style={styles.containerScroll}>
      <View style={styles.imagem}>
      <ImageBackground source={require('../assets/images/imgFundo.png')} 
      style={styles.imgFundo}>
      
      <Image source={require('../assets/images/Logo.png')}
      style={styles.logo}>

      </Image>
      </ImageBackground>
      </View>
      {/* 2. Campo de consulta */}
      <View style={styles.container}>
      {/* 2.1 Titulo */}
        <Text style={styles.titulo}>Consulte seu CEP</Text>

      {/* 2.2 Input */}
        <Input/>

      {/* 2.3 Botao */}
      <Botao tituloBotao='Consultar'/>

      {/* 2.4 Card */}
      <Card/>
      </View>
      </ScrollView>

    </>
  );
}


// Estilos dos meus componentes: 
const styles = StyleSheet.create({
  imgFundo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },

  logo: {
    width: 100,
    height: 120
  },

  container: {
    alignItems: 'center',
    width: '100%',
    minHeight: '100%',
    gap: 40,
    paddingTop: 50,
  },
  
  containerScroll: {
    flex: 1.5,
    height: '100%',
    paddingBottom: 70

  },

  titulo:{
    fontSize: 25
  },

  imagem: {
    height: '50%'
  }


})