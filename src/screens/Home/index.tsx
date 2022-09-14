import React from 'react';
import { View, Image, FlatList } from 'react-native';

import logoImage from '../../assets/logo-nlw-esports.png';
import { GameCard } from '../../Components/GameCard';
import { Heading } from '../../Components/Heading';
import { GAMES } from '../../utils/games';

import { styles } from './styles';

export function Home() {
  return (
    <View style={styles.container}>
      <Image
        source={logoImage}
        style={styles.logo}  
      />

      <Heading
        title="Encontre seu duo!"
        subtitle="Selecione o game que deseja jogar..."
      />

      <FlatList
        data={GAMES}
        contentContainerStyle={styles.contentList}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <GameCard
            data={item}
          />
        )}
      />

    </View>
  );
}