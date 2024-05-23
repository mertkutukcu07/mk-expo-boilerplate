import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { RouteNames } from "src/constants/RouteNames";
import { AppStackScreenProps } from "src/navigation/AppNavigator";
import { typography } from "../../theme/typography";

interface HomeScreenProps extends AppStackScreenProps<RouteNames.HOME> {}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
