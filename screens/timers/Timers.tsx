import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Cronometro from '../cronometro/Cronometro';
import Pomodoro from '../pomodoro/Pomodoro';

const Tab = createBottomTabNavigator();

export default function Timers() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#111' },
        headerTintColor: '#fff',
        tabBarStyle: { backgroundColor: '#111' },
        tabBarActiveTintColor: '#1e90ff',
        tabBarInactiveTintColor: '#aaa',
      }}
    >
      <Tab.Screen name="Cronômetro" component={Cronometro} />
      <Tab.Screen name="Pomodoro" component={Pomodoro} />
    </Tab.Navigator>
  );
}
