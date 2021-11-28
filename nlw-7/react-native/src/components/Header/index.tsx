import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useAuth } from '../../hooks/auth';

import LogoSvg from '../../assets/logo.svg';

import { UserPhoto } from '../UserPhoto';

import { styles } from './styles';


export function Header() {
  const { user, signOut } = useAuth();

  return (
    <View style={styles.container}>
      <LogoSvg />
      
      <View style={styles.logoutButton}>
        {
          user && 
          <TouchableOpacity onPress={signOut}>
            <Text style={styles.logoutText}>
              Sair
            </Text>
          </TouchableOpacity>
        }

        <UserPhoto
          imageUri={user?.avatar_url}
        />
      </View>
    </View>
  );
}