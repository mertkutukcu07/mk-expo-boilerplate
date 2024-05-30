import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { RouteNames } from "@/constants/RouteNames";
import { AppStackScreenProps } from "@/navigation/AppNavigator";
import { Screen } from "@/components";
import { useTheme } from "@/providers/ThemeProvider";
import { Colors } from "@/theme";

interface HomeScreenProps extends AppStackScreenProps<RouteNames.HOME> {}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const { theme, changeTheme } = useTheme();

  return (
    <Screen edges={["top", "bottom"]} preset="scroll">
      <View style={styles({ theme }).container}>
        <TouchableOpacity
          onPress={() => {
            changeTheme(theme === "dark" ? "light" : "dark");
          }}
        >
          <Text style={styles({ theme }).text}>fsdfs</Text>
        </TouchableOpacity>
      </View>
    </Screen>
  );
};

export default HomeScreen;

const styles = ({ theme }: { theme: "dark" | "light" }) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      fontSize: 20,
      fontWeight: "bold",
      color: Colors[theme].white,
    },
  });
