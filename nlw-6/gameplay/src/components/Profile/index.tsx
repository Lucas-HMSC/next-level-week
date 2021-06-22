import React from 'react';
import { Text, View } from 'react-native';

import { Avatar } from '../Avatar';

import { styles } from './styles';

export function Profile() {
  return(
    <View style={styles.container}>

      <Avatar  
        urlImage="https://github.com/lucas-hmsc.png"
      />

      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>
            Olá, 
          </Text>

          <Text style={styles.username}>
            Lucas
          </Text>
        </View>

        <Text style={styles.message}>
          Hoje é dia de vitória
        </Text>
      </View>
    </View>
  );
}