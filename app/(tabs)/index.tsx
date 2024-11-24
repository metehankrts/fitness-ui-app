import { StyleSheet, SafeAreaView, View, ScrollView, ImageBackground, Text, useColorScheme, TouchableOpacity } from 'react-native';
import Images from '@/constants/Images';
import Colors from '@/constants/Colors';
import { useRouter } from 'expo-router';

export default function TabOneScreen() {
  const colorScheme = useColorScheme() ?? 'dark';
  const router = useRouter();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: Colors[colorScheme].background }]}>
      <ScrollView
        style={[styles.scrollView, { backgroundColor: Colors[colorScheme].background }]}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
       /*  bounces={false} */
      >
        <TouchableOpacity style={styles.categoryView} activeOpacity={1} onPress={() => router.push('/Exercises')}>
          <ImageBackground
            source={Images.example1}
            style={styles.image}
            resizeMode='cover'
          >
            <Text style={[styles.title]}>Boxes</Text>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryView} activeOpacity={1} onPress={() => router.push('/_sitemap')}>
          <ImageBackground
            source={Images.example2}
            style={styles.image}
            resizeMode='cover'
          >
            <Text style={[styles.title]}>Breakfast</Text>
          </ImageBackground>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  categoryView: {
    width: 326,
    height: 150,
    borderRadius: 16,
    overflow: 'hidden',
    marginVertical: 16,
  },
  image: {
    flex: 1,
    justifyContent: 'flex-start',
    borderRadius: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    padding: 16,
    color: 'white',
  },
  scrollView: {
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
  scrollContent: {
    alignItems: 'center',
    paddingBottom: 16,
  },
});
