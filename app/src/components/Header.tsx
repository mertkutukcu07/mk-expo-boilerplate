import { StyleSheet, View } from "react-native";
import React from "react";
import { scale, verticalScale } from "@/utils/WindowSize";
import Icon, { IconTypes } from "./Icon";
import { Text } from ".";
import { useTheme } from "@/providers/ThemeProvider";
import { Colors } from "@/theme";

interface HeaderProps {
  leftIcon?: IconTypes;
  rightIcon?: IconTypes;
  title: string;
  onRightPress?: () => void;
  onLeftPress?: () => void;
}

const Header = ({
  leftIcon,
  rightIcon,
  title,
  onRightPress,
  onLeftPress,
}: HeaderProps) => {
  const { theme } = useTheme();
  return (
    <View style={styles({ theme }).container}>
      <View style={styles({ theme }).leftIcon}>
        {leftIcon && <Icon icon={leftIcon} size={25} onPress={onLeftPress} />}
      </View>
      <View style={styles({ theme }).title}>
        <Text
          text={title}
          size="lg"
          color={Colors[theme].themeColor}
          fontFamily="semiBold"
        />
      </View>
      <View style={styles({ theme }).rightIcon}>
        {rightIcon && <Icon icon={rightIcon} onPress={onRightPress} />}
      </View>
    </View>
  );
};

export default Header;

const styles = ({ theme }: { theme: "dark" | "light" }) =>
  StyleSheet.create({
    container: {
      backgroundColor: Colors[theme].themeColor,
      height: verticalScale(100),
      flexDirection: "row",
      alignItems: "center",
      paddingTop: verticalScale(50),
      justifyContent: "space-between",
      paddingHorizontal: scale(20),
    },
    leftIcon: {
      flex: 1,
      alignItems: "flex-start",
    },
    title: {
      flex: 3,
      alignItems: "center",
    },
    rightIcon: {
      flex: 1,
      alignItems: "flex-end",
    },
  });
