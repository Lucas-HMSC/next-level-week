import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { CategorySelect } from '../../components/CategorySelect';
import { Background } from '../../components/Background';
import { SmallInput } from '../../components/SmallInput';
import { GuildIcon } from '../../components/GuildIcon';
import { Header } from '../../components/Header';

import BannerImg from '../../assets/banner.png';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';

export function AppointmentCreate() {
  const [category, setCategory] = useState('');

  return (
    <Background>
      <Header 
        title='Agendar partida'
      />

      <Text style={[
        styles.label,
        { 
          marginLeft: 24,
          marginTop: 36,
          marginBottom: 18,
        }
      ]}>
        Categoria
      </Text>

      <CategorySelect 
        hasCheckBox
        setCategory={setCategory}
        categorySelected={category}
      />

      <View style={styles.form}>
        <RectButton>
          <View style={styles.select}>
            {
              /*<View style={styles.image} />*/
              <GuildIcon />
            }

            <View style={styles.selectBody}>
              <Text style={styles.label}>
                Selecione um servidor
              </Text>
            </View>
            
            <Feather 
              name='chevron-right'
              size={18}
              color={theme.colors.heading}
            />

          </View>
        </RectButton>

        <View style={styles.field}>
          <View>
            <Text style={styles.label}>
              Dia e mês
            </Text>
            
            <View style={styles.column}>
              <SmallInput maxLength={2} />
              <Text style={styles.divider}>
                {'/'}
              </Text>
              <SmallInput maxLength={2} />
            </View>
          </View>

          <View>
            <Text style={styles.label}>
              Hora e minuto
            </Text>
            
            <View style={styles.column}>
              <SmallInput maxLength={2} />
              <Text style={styles.divider}>
                {':'}
              </Text>
              <SmallInput maxLength={2} />
            </View>
          </View>
        </View>

        
      </View>
    </Background>
  );
}