import * as React from "react";
import {
  SafeAreaView,
  SafeAreaViewProps,
  Edge,
} from "react-native-safe-area-context";
import { ScrollView, StyleSheet, ViewStyle } from "react-native";
import { useTheme } from "@/providers/ThemeProvider";
import { Colors } from "@/theme";

interface ScreenProps extends SafeAreaViewProps {
  children: React.ReactNode;
  edges?: ReadonlyArray<Edge>;
  color?: string;
  style?: ViewStyle;
  preset?: "fixed" | "scroll";
}

const FixedScreen: React.FC<ScreenProps> = ({
  children,
  edges,
  style,
  ...rest
}) => (
  <SafeAreaView edges={edges} style={style} {...rest}>
    {children}
  </SafeAreaView>
);

const ScrollScreen: React.FC<ScreenProps> = ({
  children,
  edges,
  style,
  ...rest
}) => (
  <SafeAreaView edges={edges} style={style} {...rest}>
    <ScrollView contentContainerStyle={styles.scrollContent}>
      {children}
    </ScrollView>
  </SafeAreaView>
);

const Screen: React.FC<ScreenProps> = ({
  children,
  edges = ["top", "bottom"],
  color,
  style,
  preset = "fixed",
  ...rest
}) => {
  const { theme } = useTheme();
  const combinedStyle = [
    styles.container,
    { backgroundColor: Colors[theme].themeColor },
    style,
  ] as ViewStyle;

  if (preset === "scroll") {
    return (
      <ScrollScreen edges={edges} style={combinedStyle} {...rest}>
        {children}
      </ScrollScreen>
    );
  }

  return (
    <FixedScreen edges={edges} style={combinedStyle} {...rest}>
      {children}
    </FixedScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
});

export default Screen;
