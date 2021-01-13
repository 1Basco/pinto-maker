import React from "react";
import { Image } from 'react-native';
import { Button } from 'react-native-paper';

const suckButton = () =>(
    //flaticon
    <Button 
        icon={({ size }) => (
            <Image
                source={require('../../assets/penis.png')}
                style={{ width: 30, height: 30, }}
            />
        )} 
    mode='contained'
    onPress={() => {alert('GLUB GLUB');
        }}>
        MAMA AQUI OH!
    </Button>
)

export default suckButton;
