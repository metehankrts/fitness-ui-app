import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, useColorScheme } from 'react-native';
import React from 'react';
import Images from '@/constants/Images';
import Icons from '@/constants/Icons';
import Colors from '@/constants/Colors';
import { useRouter } from 'expo-router';

export default function RecipeDetail() {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme || 'light'];
  const router = useRouter();

  const ingredients = [
    { text: '3x lemon', description: ' - dilimlenmiş' },
    { text: '2x sugar', description: ' - toz halinde' },
    { text: '1x butter', description: ' - eritilmiş' },
  ];

  const steps = [
    'Hamuru açın ve ince bir tabaka halinde serin.',
    'Tüm malzemeleri eşit şekilde hamurun üzerine yayın.',
    '180 derece fırında 20 dakika pişirin.',
    '180 derece fırında 20 dakika pişirin.',
    '180 derece fırında 20 dakika pişirin.',
    '180 derece fırında 20 dakika pişirin.',
  ];

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.background }]} showsVerticalScrollIndicator={false}>
     <TouchableOpacity 
        style={styles.backButton} 
        onPress={() => router.back()}
      >
        <Image 
          source={Icons.back}
          style={[styles.backIcon, { tintColor: 'white'}]}
        />
      </TouchableOpacity>
      <Image 
        source={Images.example1}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={[styles.content, { backgroundColor: theme.background }]}>
        <Text style={[styles.header, { color: theme.text }]}>Katmer</Text>
        <View style={styles.infoContainer}>
          <IconAndText icon={Icons.time} text="20 min" color={theme.tint} borderColor={theme.tint} />
          <IconAndText icon={Icons.energy} text="72 cal" color={theme.tint} borderColor={theme.tint} />
        </View>
        <Text style={[styles.definition, { color: theme.text }]}>
          Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum loremipsum loremipsum.
        </Text>
        <Text style={[styles.subheader, { color: theme.tint }]}>Ingredients</Text>
        {ingredients.map((item, index) => (
          <View key={index} style={styles.list}>
            <Text style={[styles.listText, { color: theme.text }]}>
              {item.text} <Text style={styles.listTextParanthesis}>{item.description}</Text>
            </Text>
          </View>
        ))}
        <Text style={[styles.subheader, { color: theme.tint }]}>How to</Text>
        {steps.map((step, index) => (
          <View key={index} style={styles.list}>
            <Text style={[styles.listText, { color: theme.text }]}>{`${index + 1}. ${step}`}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

function IconAndText({ icon, text, color, borderColor }) {
  return (
    <View style={[styles.iconView, { borderColor }]}>
      <Image source={icon} style={[styles.icon, { tintColor: color }]} />
      <Text style={[styles.iconText, { color }]}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 300,
  },
  backButton: {
    position: 'absolute',
    top: 64,
    left: 16,
    zIndex: 1,
  },
  backIcon: {
    height: 24,
    width: 24,
  },
  content: {
    marginTop: -40,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    flex: 1,
    paddingHorizontal: 16,
    paddingBottom: 48,
  },
  header: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '400',
    paddingVertical: 16,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  iconView: {
    flexDirection: 'column',
    width: 114,
    height: 68,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
  },
  icon: {
    height: 32,
    width: 32,
  },
  iconText: {
    marginTop: 2,
    fontSize: 14,
  },
  definition: {
    fontWeight: '400',
    fontSize: 16,
    paddingVertical: 16,
  },
  subheader: {
    fontSize: 20,
    fontWeight: '500',
    paddingVertical: 16,
  },
  list: {
    paddingVertical: 16,
  },
  listText: {
    fontSize: 16,
  },
  listTextParanthesis: {
    fontSize: 14,
    color: '#888',
  },
});
