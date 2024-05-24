import React from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  StyleProp,
  ViewStyle,
} from "react-native";
import { CustomTextProps, Sizes } from "./Text";
import { colors } from "@/theme/colors";
import { Text } from ".";
import { moderateScale, scale, verticalScale } from "@/utils/WindowSize";

interface ButtonProps {
  size?: "sm" | "md" | "lg";
  text?: CustomTextProps["text"];
  style?: StyleProp<ViewStyle>;
  pressedStyle?: StyleProp<ViewStyle>;
  textStyle?: CustomTextProps["style"];
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  children?: React.ReactNode;
  loading?: boolean;
  onPress?: () => void;
  disabled?: boolean;
}

const Button = ({
  size = "md",
  text,
  style,
  pressedStyle,
  textStyle,
  rightIcon,
  leftIcon,
  children,
  loading,
  onPress,
  disabled,
}: ButtonProps) => {
  const getSizeStyle = React.useCallback(
    (size: Sizes) => {
      switch (size) {
        case "xs":
          return styles.xs;
        case "sm":
          return styles.sm;
        case "md":
          return styles.md;
        case "lg":
          return styles.lg;
        default:
          return styles.md;
      }
    },
    [size]
  );

  return (
    <TouchableOpacity
      disabled={disabled || loading}
      onPress={onPress}
      style={[styles.baseStyle, getSizeStyle(size), style, pressedStyle]}
    >
      {loading ? (
        <ActivityIndicator size="small" color={colors.white} />
      ) : (
        <>
          {leftIcon && !loading && <View>{leftIcon}</View>}
          <Text
            text={text}
            style={[styles.textStyle, textStyle]}
            color={colors.white}
          />
          {rightIcon && !loading && <View>{rightIcon}</View>}
          {children}
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  baseStyle: {
    backgroundColor: colors.primary,
    borderRadius: moderateScale(7),
    paddingVertical: verticalScale(8),
    paddingHorizontal: scale(10),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    flex: 1,
    color: colors.white,
    textAlign: "center",
  },
  xs: {
    width: scale(50),
  },
  sm: {
    width: scale(100),
  },
  md: {
    width: scale(200),
  },
  lg: {
    width: scale(300),
  },
});

export default Button;
