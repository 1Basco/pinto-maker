import { StatusBar } from 'expo-status-bar';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import SuckButton from './src/components/SuckButton.js'
import PintoModal from './src/components/ModalPinto.js'
import MenuBar from './src/components/MenuBar.js'
import CardPinto from './src/components/CardPinto.js'


const theme ={
  ...DefaultTheme,
  roundness: 8,
  colors:{
    ...DefaultTheme.colors,
    primary: '#838383',
    accent: '#d9adad',
    background: '#ad9d9d'

  }
}

export default function App() {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <PaperProvider theme={theme}>
    <View>
      
      <View>
        <MenuBar onShowPinto={showModal}></MenuBar>
      </View>

      <View>
        <CardPinto></CardPinto>
      </View>
      
      <View> 
        <PintoModal visible={visible} onDismiss={hideModal} />
      </View>
      
      <View style={styles.buttonContainer}>
        <SuckButton></SuckButton>
      </View>

    </View>
    </PaperProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
  
   /* flex: 1,
    alignItems: 'left',
    //backgroundColor: '#fff',
    position: 'relative',
    top: '20%',
    justifyContent: 'center',
    padding: 10,
    //color: 'black',*/
  },
  buttonContainer:{
    //backgroundColor: 'papayawhip',
    position: 'relative',
    width: 190,
    marginLeft: '50%',
    marginTop: '165%',
  
  },
  text:{
    fontSize: 20,
    fontFamily: 'sans-serif'
  }
});
