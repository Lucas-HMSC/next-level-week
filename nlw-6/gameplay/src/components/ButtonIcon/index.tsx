import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import DiscordImg from '../../assets/discord.png';

import { styles } from './styles';

export function ButtonIcon() {
  return (
    <TouchableOpacity>
      <View style={styles.iconWrapper}>

      </View>
    </TouchableOpacity>
  );
}