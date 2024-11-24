import React from 'react';
import { Image, Platform, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '@/components/Themed';
import { useColorScheme } from '@/components/useColorScheme';
import Colors from '@/constants/Colors';
import Icons from '@/constants/Icons';
import Images from '@/constants/Images';
import { useRouter } from 'expo-router';

export default function index() {
  const colorScheme = useColorScheme() ?? 'light';
  const theme = Colors[colorScheme || 'light'];
  const router = useRouter();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: Colors[colorScheme].background }]} >
      <View style={styles.topView}>
      <TouchableOpacity onPress={() => router.back()}>
      <Image source={Icons.back} style={[styles.back, { tintColor: Colors[colorScheme].text }]} />
      </TouchableOpacity>
      <Text style={styles.header}>
        Boxes
      </Text>
      </View>
      
      <ScrollView
        style={[styles.scrollView, { backgroundColor: Colors[colorScheme].background }]}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {lessonData.map((lesson, index) => (
          <TouchableOpacity key={index} style={styles.lessonView} activeOpacity={1} onPress={() => router.push('/Exercises/two')}>
            <Image source={lesson.image} style={styles.lessonImage} />
            <View style={styles.definition}>
            <Text style={[styles.lessonText, { color: Colors[colorScheme].text }]}>{lesson.title}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const lessonData = [
  { image: Images.example1, title: 'Cardio Boxing'},
  { image: Images.example1, title: 'Cardio Boxing'},
  { image: Images.example1, title: 'Cardio Boxing'},
  { image: Images.example1, title: 'Cardio Boxing'},
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 16,
    paddingTop: Platform.OS === 'ios' ? 40 : 16,
  },
  topView:{
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
  },
  header:{
    flex:1,
    fontSize: 24,
    fontWeight: '600'
  },
  icon: {
    width: 24,
    height: 24,
  },
  scrollView: {
    paddingHorizontal: 8,
  },
  scrollContent: {
    alignItems: 'center',
    paddingBottom: 16,
  },
  lessonView: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingTop: 24,
  },
  lessonImage: {
    width: 326,
    height: 180,
    borderRadius: 16,
  },
  lessonText: {
    flex: 1,
    fontSize: 20,
    fontWeight: '500',
  },
  definition:{
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
  },
  time:{
    fontSize: 16,
    fontWeight: '500'
  },
  back:{
    width: 24,
    height: 24,
    marginHorizontal: 16,
  }
});
