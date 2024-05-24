import { NavigationContainer } from "@react-navigation/native";
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import { HomeScreen } from "@/screens";
import { RouteNames } from "@/constants/RouteNames";

export type AppStackParamList = {
  [RouteNames.HOME]: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={RouteNames.HOME} component={HomeScreen} />
    </Stack.Navigator>
  );
};

export interface NavigationProps
  extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export type AppStackScreenProps<T extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, T>;

export const AppNavigator = function AppNavigator(props: NavigationProps) {
  return (
    <NavigationContainer {...props}>
      <AppStack />
    </NavigationContainer>
  );
};
