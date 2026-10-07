import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Operacoes from '../operacoes/Operacoes';
import Imc from '../imc/Imc';
import Baskara from '../baskara/Baskara';

const Tab = createBottomTabNavigator();

export default function Ferramentas() {
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
      <Tab.Screen name="Operações" component={Operacoes} />
      <Tab.Screen name="IMC" component={Imc} />
      <Tab.Screen name="Bhaskara" component={Baskara} />
    </Tab.Navigator>
  );
}
