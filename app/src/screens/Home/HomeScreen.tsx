import { StyleSheet, View } from "react-native";
import React from "react";
import { RouteNames } from "@/constants/RouteNames";
import { AppStackScreenProps } from "@/navigation/AppNavigator";
import { Screen } from "@/components";

interface HomeScreenProps extends AppStackScreenProps<RouteNames.HOME> {}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  return (
    <Screen edges={["top", "bottom"]} preset="scroll">
      <View style={styles.container}></View>
    </Screen>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
