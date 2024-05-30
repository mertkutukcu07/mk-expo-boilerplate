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
import { Text } from ".";
import { moderateScale, scale, verticalScale } from "@/utils/WindowSize";
import { useTheme } from "@/providers/ThemeProvider";
import colors from "@/theme/colors";

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
  const { theme } = useTheme();
  const getSizeStyle = React.useCallback(
    (size: Sizes) => {
      switch (size) {
        case "xs":
          return styles({ theme }).xs;
        case "sm":
          return styles({ theme }).sm;
        case "md":
          return styles({ theme }).md;
        case "lg":
          return styles({ theme }).lg;
        default:
          return styles({ theme }).md;
      }
    },
    [size]
  );

  return (
    <TouchableOpacity
      disabled={disabled || loading}
      onPress={onPress}
      style={[
        styles({ theme }).baseStyle,
        getSizeStyle(size),
        style,
        pressedStyle,
      ]}
    >
      {loading ? (
        <ActivityIndicator size="small" color={colors[theme].commonBlack} />
      ) : (
        <React.Fragment>
          {leftIcon && !loading && <View>{leftIcon}</View>}
          <Text
            text={text}
            style={[styles({ theme }).textStyle, textStyle]}
            color={colors[theme].commonWhite}
          />
          {rightIcon && !loading && <View>{rightIcon}</View>}
          {children}
        </React.Fragment>
      )}
    </TouchableOpacity>
  );
};

const styles = ({ theme }: { theme: "dark" | "light" }) =>
  StyleSheet.create({
    baseStyle: {
      backgroundColor: colors[theme].themeColor,
      borderRadius: moderateScale(7),
      paddingVertical: verticalScale(8),
      paddingHorizontal: scale(10),
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    textStyle: {
      flex: 1,
      color: colors[theme].commonBlack,
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
