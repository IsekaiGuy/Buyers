import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Player from '../components/Player';

const HomeScreen = () => {
  return (
    <View>
      <View style={styles.player}>
        <Player />
      </View>

      <Text>Заказы</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  player: {
    padding: 20,
    borderRadius: 50,
  },
});

export default HomeScreen;
