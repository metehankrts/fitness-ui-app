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

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => router.back()} 
        >
          <Image 
            source={Icons.back}
            style={[styles.backIcon, { tintColor: 'white' }]}
          />
        </TouchableOpacity>
        
        <Image 
          source={Images.example1}
          style={styles.image}
          resizeMode="cover"
        />
        
        <View style={[styles.content, { backgroundColor: theme.background }]}>
          <Text style={[styles.header, { color: theme.text }]}>Cardio Boxing</Text>
          
          <View style={styles.infoContainer}>
            <IconAndText icon={Icons.time} text="20 min" color={theme.tint} borderColor={theme.tint} />
            <IconAndText icon={Icons.energy} text="72 cal" color={theme.tint} borderColor={theme.tint} />
            <IconAndText icon={Icons.water} text="2 mil" color={theme.tint} borderColor={theme.tint} />
          </View>
          
          <Text style={[styles.definition, { color: theme.text }]}>
            Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum loremipsum loremipsum.
          </Text>
          
          <View style={styles.equipmentContainer}>
            <Image
              source={Icons.equipment}
              style={[styles.equipmentIcon, { tintColor: theme.text }]}
            />
            <Text style={[styles.equipmentText, { color: theme.text }]}>No equipment needed</Text>
          </View>
          
          <Text style={[styles.sets, { color: theme.text }]}>Set 1 (3 Times)</Text>
          
          <View style={styles.exerciseList}>
            <ExerciseItem 
              image={Images.example4} 
              name="Forward Kick" 
              time="00:20" 
              color={theme.text}
            />
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity style={[styles.button, { backgroundColor: theme.tint }]} onPress={() => router.push('/Exercises/three')}>
        <Text style={[styles.buttonText, { color: theme.background }]}>START</Text>
      </TouchableOpacity>
    </View>
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

function ExerciseItem({ image, name, time, color }) {
  return (
    <View style={styles.exercise}>
      <Image source={image} style={styles.exerciseImage} />
      <View style={styles.exerciseRight}>
        <Text style={[styles.exerciseName, { color }]}>{name}</Text>
        <Text style={[styles.exerciseTime, { color }]}>{time}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 80,
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
  equipmentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  equipmentIcon: {
    height: 32,
    width: 32,
  },
  equipmentText: {
    fontSize: 16,
    paddingLeft: 8,
  },
  sets: {
    fontSize: 20,
    fontWeight: '500',
    paddingVertical: 16,
  },
  exerciseList: {
    flexDirection: 'column',
  },
  exercise: {
    flexDirection: 'row',
    marginVertical: 16,
  },
  exerciseImage: {
    width: 90,
    height: 90,
  },
  exerciseRight: {
    flex: 1,
    paddingLeft: 16,
    justifyContent: 'center',
  },
  exerciseName: {
    fontSize: 20,
  },
  exerciseTime: {
    fontSize: 16,
  },
  button: {
    position: 'absolute',
    bottom: '4%',
    left: '4%',
    right: '4%',
    paddingVertical: '5%',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '600',
  },
});
