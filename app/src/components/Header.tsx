import { StyleSheet, View } from "react-native";
import React from "react";
import { colors } from "@/theme/colors";
import { scale, verticalScale } from "@/utils/WindowSize";
import Icon, { IconTypes } from "./Icon";
import { Text } from ".";

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
  return (
    <View style={styles.container}>
      <View style={styles.leftIcon}>
        {leftIcon && <Icon icon={leftIcon} size={25} onPress={onLeftPress} />}
      </View>
      <View style={styles.title}>
        <Text
          text={title}
          size="lg"
          color={colors.white}
          fontFamily="semiBold"
        />
      </View>
      <View style={styles.rightIcon}>
        {rightIcon && <Icon icon={rightIcon} onPress={onRightPress} />}
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
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
