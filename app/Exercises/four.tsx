import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, useColorScheme, View } from 'react-native';
import React from 'react';
import Icons from '@/constants/Icons';
import Colors from '@/constants/Colors';
import { useRouter } from 'expo-router';

export default function Four() {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme || 'light'];

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.content}>
        <Text style={[styles.message, { color: theme.text }]}>Congrats</Text>
        <View style={[styles.information]}>
          <View style={styles.iconView}>
            <Image source={Icons.time} style={[styles.icon, { tintColor: theme.tint }]} />
            <Text style={[styles.text, { color: theme.text }]}>00:12:34</Text>
          </View>
          <View style={styles.iconView}>
            <Image source={Icons.water} style={[styles.icon, { tintColor: theme.tint }]} />
            <Text style={[styles.text, { color: theme.text }]}>2.5L</Text>
          </View>
          <View style={styles.iconView}>
            <Image source={Icons.energy} style={[styles.icon, { tintColor: theme.tint }]} />
            <Text style={[styles.text, { color: theme.text }]}>120 cal</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={[styles.button, { backgroundColor: theme.tint }]} onPress={() => router.navigate('/Exercises')}>
        <Text style={[styles.buttonText, { color: theme.background }]}>START</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  message: {
    fontSize: 32,
    textAlign: 'center',
    marginBottom: 24,
  },
  information: {
    width: '100%',
    padding: 16,
    borderRadius: 16,
    justifyContent: 'space-evenly',
  },
  iconView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  icon: {
    width: 32,
    height: 32,
    marginRight: 16,
  },
  text: {
    fontSize: 24,
    flex: 1,
  },
  button: {
    position: 'absolute',
    bottom: 32,
    left: 16,
    right: 16,
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '600',
  },
});
