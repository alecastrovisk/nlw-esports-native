import { useRoute } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GameParams } from '../../@types/navigation';
import { Background } from '../../Components/Background';

import { styles } from './styles';

export function Game() {
  const route = useRoute();
  const game = route.params as GameParams;

  return (
    <Background>
      <SafeAreaView style={styles.container}>

      </SafeAreaView>
    </Background>
  );
}