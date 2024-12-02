 import { Tabs } from 'expo-router';
import { Image, Platform, StyleSheet, Text, View } from 'react-native';

import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { icons } from '../../constants';

// Define the TabIcon props
type TabIconProps = {
  icon: any; // Update the type if you have specific types for your icons
  color: string;
  name: string;
  focused: boolean;
};

// TabIcon Component
const TabIcon: React.FC<TabIconProps> = ({ icon, color, name, focused }) => {
  return (
    <View
      style={[
        {
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2,
          height: 50,
          width: 50,
          borderRadius: 25,
          marginTop: '30%',
        },
        focused && { backgroundColor: '#0A2EE2' },
      ]}
    >
      <Image
        source={icon}
        resizeMode="contain"
        style={{
          width: '70%',
          height: '70%',
          marginTop: '40%',
          tintColor: focused ? '#F1F2F3' : undefined,
        }}
      />
      <Text
        style={{
          color: '#F1F2F3',
        }}
      >
        {name}
      </Text>
    </View>
  );
};

// TabLayout Component
const TabLayout: React.FC = () => {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: styles.container,
        tabBarItemStyle: styles.tabItem,
        tabBarActiveTintColor: Colors['light'].tint,
        tabBarInactiveTintColor: '#A4A4A4',
        tabBarLabelStyle: styles.label,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="home/index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon={icons.home} color={color} name="" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="send/index"
        options={{
          title: 'Send',
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.sendIcon}
              color={color}
              name=""
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search/index"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.searchIcon}
              color={color}
              name=""
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;

// Styles
const styles = StyleSheet.create({
  tabItem: {
    // paddingVertical: 12,
  },
  container: {
    backgroundColor: '#F1F2F3',
    borderRadius: 12,
    width: '60%',
    alignSelf: 'center',
    maxHeight: '9%',
    marginBottom: '20%',
    borderBottomEndRadius: 30,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  label: {
    textTransform: 'capitalize',
    fontSize: 12,
    marginBottom: 7,
  },
});
