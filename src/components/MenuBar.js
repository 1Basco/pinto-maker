import * as React from 'react';
import { Appbar } from 'react-native-paper';



const menuBar = ({onShowPinto}) => {

  const _handleSearch = () => alert('Procurando seu Pintinho minusculo KKKK');

  const _handleMore = () => alert('Mostrar oq? Seu pinto já acabou');
  
  return (
    <Appbar.Header>
      <Appbar.Action icon="apps" onPress={onShowPinto}/>
      <Appbar.Content title="PintoMaker" subtitle="Chega de NUDE" />
      <Appbar.Action icon="magnify" onPress={_handleSearch} />
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
    </Appbar.Header>
  );
};

export default menuBar;