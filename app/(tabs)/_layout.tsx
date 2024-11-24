import React from 'react';
import { Image, StyleSheet, Pressable } from 'react-native';
import { Link, Tabs } from 'expo-router';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import Icons from '@/constants/Icons';

export default function TabLayout() {
  /* const colorScheme = useColorScheme(); */
  const colorScheme = useColorScheme() ?? 'light';


  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tabIconSelected,
        tabBarInactiveTintColor: Colors[colorScheme].tabIconDefault,
        headerStyle: {
          backgroundColor: Colors[colorScheme].background,
          borderBottomWidth: 0,
          shadowOpacity: 0,
          elevation: 0,
        },
        headerTitleAlign: 'left',
        headerTitleStyle: {
          color: Colors[colorScheme].text,
          fontSize: 24,
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarStyle: {
          paddingBottom: 8,
          backgroundColor: Colors[colorScheme].background,
        },
      }}
    >   
      <Tabs.Screen
        name="index"
        options={{
          title: 'Exercises',
          tabBarIcon: ({ color }) => (
            <Image source={Icons.exercises} style={[styles.icon, { tintColor: color }]} />
          ),
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <Image
                    source={Icons.info}
                    style={[
                      styles.headerIcon,
                      { opacity: pressed ? 0.5 : 1, tintColor: Colors[colorScheme].text },
                    ]}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Meals',
          tabBarIcon: ({ color }) => (
            <Image source={Icons.meals} style={[styles.icon, { tintColor: color }]} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 28,
    height: 28,
    marginBottom: 4,
  },
  headerIcon: {
    width: 24,
    height: 24,
    marginRight: 15,
  },
});
