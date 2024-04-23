import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../views/Home';
import Search from '../views/Search';
import HomeStack from './HomeStack';
import Splash from '../views/Splash';
import { Badge, IconButton } from 'react-native-paper';
import { View } from 'react-native';

const Tab = createMaterialBottomTabNavigator();



export default function BottomTabs() {
    return (
        <Tab.Navigator
            initialRouteName="HomeStack"
            activeColor="#9e33cc"
            barStyle={{ backgroundColor: 'white' }}
        >
            <Tab.Screen
                name="HomeStack"
                component={HomeStack}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home-outline" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="AppoimentsStack"
                component={Home}
                options={{
                    tabBarLabel: 'Appoiments',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="calendar-blank-outline" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="InboxStack"
                component={Home}
                options={{
                    tabBarLabel: 'Inbox',
                    tabBarIcon: ({ color }) => (
                        <View style={{ flexDirection: 'row', alignItems: 'center', position: 'relative' }}>
                            <MaterialCommunityIcons name="message-text-outline" color={color} size={26} />
                            <Badge style={{ position: 'absolute', top: -5, right: -8 }}>99</Badge>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="SettingsStack"
                component={Home}
                options={{
                    tabBarLabel: 'Settings',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="cog" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
