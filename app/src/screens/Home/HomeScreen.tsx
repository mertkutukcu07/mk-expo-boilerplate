import { StyleSheet, View } from "react-native";
import React from "react";
import { RouteNames } from "@/constants/RouteNames";
import { AppStackScreenProps } from "@/navigation/AppNavigator";
import { Button, Text } from "@/components";
interface HomeScreenProps extends AppStackScreenProps<RouteNames.HOME> {}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  return (
    <View style={styles.container}>
      <Button text="Go to Details" onPress={() => {}} size="md" />
    </View>
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
