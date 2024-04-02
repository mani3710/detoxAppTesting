import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Screens from './screens';
import * as Routes from './routes';
import { Text, Button } from 'react-native';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const HomeStackNav = ({ navigation }) => {
    return (
        <Stack.Navigator >
            <Stack.Screen
                //  options={{
                //     headerShown: false,
                // }}
                name={Routes.APP} component={Screens.App} />
            <Stack.Screen
                //  options={{
                //     headerShown: false,
                // }}
                name={Routes.Home} component={Screens.Home} />
            <Stack.Screen
                //  options={{
                //     headerShown: false,
                // }}
                name={Routes.Cities} component={Screens.Cities} />
            <Stack.Screen
                options={{

                    headerTitle: (props) => <Text {...props} testID='MemberHeaderId' />,
                    headerRight: () => (
                        <Button
                            onPress={() => {
                                navigation.navigate(Routes.AddMember)
                            }}
                            title="Add"
                            color="#000"
                            testID='MemberHeaderAddMemberButton'


                        />
                    ),
                }}
                name={Routes.MemberList} component={Screens.MemberList} />
            <Stack.Screen
                options={{
                    tabBarAccessibilityLabel: "MemberListBack"
                }}
                name={Routes.AddMember} component={Screens.AddMember} />
        </Stack.Navigator>
    );
}
const App = () => {
    return (
        <NavigationContainer>

            <Tab.Navigator>
                <Tab.Screen
 
                    options={{
                        headerShown: false,
                        tabBarAccessibilityLabel: "HomeNav"
                    }}
                    name={Routes.HomeStackNav} component={HomeStackNav} />
                <Tab.Screen

                    options={{ 
                        headerShown: false,
                        tabBarAccessibilityLabel: "CitiesNavigation",
                      
                    }}
                    name={Routes.Cities} component={Screens.Cities} />
            </Tab.Navigator>

        </NavigationContainer>
    );
}

export default App;