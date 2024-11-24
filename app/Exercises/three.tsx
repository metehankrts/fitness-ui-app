import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, Dimensions, useColorScheme } from 'react-native';
import { useRouter } from 'expo-router';
import Icons from '@/constants/Icons';
import Images from '@/constants/Images';
import Colors from '@/constants/Colors';

const { width, height } = Dimensions.get('window');

export default function Three() {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme || 'light'];

  const [isPaused, setIsPaused] = useState(true);

  const togglePlayPause = () => {
    setIsPaused(!isPaused);
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.content}>
        
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => router.back()}>
            <Image source={Icons.close} style={[styles.closeIcon, { tintColor: theme.tint }]} />
          </TouchableOpacity>
        </View>

        <View style={styles.timeContainer}>
          <Text style={[styles.timeText, { color: theme.text }]}>00:11</Text>
        </View>

        <View style={styles.videoWrapper}>
          <View style={styles.videoContainer}>
            <Image source={Images.example1} style={styles.video} resizeMode="cover" />
          </View>
        </View>

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={[styles.header, { color: theme.text }]}>Cardio Boxing</Text>
        </View>

        <View style={styles.controlsContainer}>
          <TouchableOpacity>
            <Image source={Icons.back} style={[styles.controlIcon, { tintColor: theme.tint }]} />
          </TouchableOpacity>
          <TouchableOpacity onPress={togglePlayPause}>
            <Image
              source={isPaused ? Icons.pause : Icons.play}
              style={[styles.controlIcon, { tintColor: theme.tint }]}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push('/Exercises/four')}>
            <Image source={Icons.next} style={[styles.controlIcon, { tintColor: theme.tint }]} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  closeIcon: {
    width: 32,
    height: 32,
  },
  timeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeText: {
    fontSize: 36,
    fontWeight: '600',
  },
  videoWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoContainer: {
    width: '100%',
    aspectRatio: 16 / 9,
    alignItems: 'center',
  },
  video: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  header: {
    fontSize: 24,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 16,
  },
  controlsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  controlIcon: {
    width: 32,
    height: 32,
  },
});
