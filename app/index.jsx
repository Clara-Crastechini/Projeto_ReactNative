import { StyleSheet, Text, View, ImageBackground, Image, ScrollView } from "react-native";
import { Input } from "../components/input/input"
import { Botao } from "../components/botao/botao";
import { Card } from "../components/card/card";
import { useState } from "react";
import axios from "axios";

export default function Index() {

  const [cep, setCep] = useState("");
  const [json, setJson] = useState({});
  const [consulta, setConsulta] = useState(false);

  async function consultarCep() {
    try {
      if (cep !== "" && cep.length === 8) {
        const resposta = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        // console.log(resposta.data)
        setJson(resposta.data);
        console.log(resposta.data);
        console.log(setJson.logradouro);
        setConsulta(true);
        
        


      }else{
        alert("O cep esta incorreto. Digite com 8 numeros")
        setConsulta(false)
      }
    } catch (error) {
      console.log(error);
      setConsulta(false)
    }

  }



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
          <Input valorCep={cep} onChangeValorCep={e => {setCep(e); console.log(e);}}/>

          {/* 2.3 Botao */}
          <Botao tituloBotao='Consultar' onPress={consultarCep} />

          {/* 2.4 Card */}
          {json.cep && (

            <Card cep={json.cep} logradouro={json.logradouro} bairro={json.bairro} uf={json.uf} estado={json.estado} regiao={json.regiao}/>
          )

          }
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

  titulo: {
    fontSize: 25,
    fontFamily: "Poppins-Bold",
    color: "#000000"
  },

  imagem: {
    height: '50%'
  }


})