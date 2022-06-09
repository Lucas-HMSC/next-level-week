import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { Copyright } from '../Copyright';

import successImg from '../../assets/success.png'; 

import { styles } from './styles';

interface Props { 
  onSendAnotherFeedback: () => void;
}

export function Success({ onSendAnotherFeedback }: Props) {
  return (
    <View style={ styles.container }>
      <Image
        source={ successImg }
        style={ styles.image }
      />

      <Text style={ styles.title }>
        Agradecemos o feedback
      </Text>

      <TouchableOpacity 
        style={ styles.button }
        onPress={ onSendAnotherFeedback }
      >
        <Text style={ styles.buttonTitle }>
          Quero enviar outro
        </Text>
      </TouchableOpacity>

      <Copyright />
    </View>
  );
}