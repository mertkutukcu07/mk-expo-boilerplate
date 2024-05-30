import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import { moderateScale, scale, verticalScale } from "@/utils/WindowSize";
import { getFontSize } from "@/hooks/useResponsiveText";
import { typography } from "@/theme/typography";
import Icon, { IconTypes } from "./Icon";
import { useTheme } from "@/providers/ThemeProvider";
import colors from "@/theme/colors";

interface TextFieldProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  secureTextEntry?: boolean;
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
  autoCorrect?: boolean;
  autoFocus?: boolean;
  multiline?: boolean;
  numberOfLines?: number;
  maxLength?: number;
  style?: object;
  containerStyle?: object;
  inputStyle?: object;
  label?: string;
  rightIcon?: IconTypes;
  leftIcon?: IconTypes;
  rightIconPress?: () => void;
  leftIconPress?: () => void;
  error?: string;
  editable?: boolean;
  onBlur?: () => void;
  onFocus?: () => void;
  onEndEditing?: () => void;
  onSubmitEditing?: () => void;
  returnKeyType?: "done" | "go" | "next" | "search" | "send";
}

const TextField = (props: TextFieldProps) => {
  const {
    value,
    onChangeText,
    placeholder,
    secureTextEntry,
    keyboardType,
    autoCapitalize,
    autoCorrect,
    autoFocus,
    multiline,
    numberOfLines,
    maxLength,
    style,
    containerStyle,
    inputStyle,
    label,
    rightIcon,
    leftIcon,
    rightIconPress,
    leftIconPress,
    error,
    editable,
    onBlur,
    onFocus,
    onEndEditing,
    onSubmitEditing,
    returnKeyType,
  } = props;

  const handleRightIconPress = () => {
    if (rightIconPress) {
      rightIconPress();
    }
  };

  const handleLeftIconPress = () => {
    if (leftIconPress) {
      leftIconPress();
    }
  };

  const { theme } = useTheme();

  return (
    <React.Fragment>
      {label && <Text style={styles({ theme }).label}>{label}</Text>}
      <View style={[styles({ theme }).container, containerStyle]}>
        {leftIcon && (
          <Icon
            icon={leftIcon}
            onPress={handleLeftIconPress}
            style={styles({ theme }).icon}
          />
        )}
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          autoCorrect={autoCorrect}
          autoFocus={autoFocus}
          multiline={multiline}
          placeholderTextColor={colors[theme].commonBlack}
          numberOfLines={numberOfLines}
          maxLength={maxLength}
          style={[styles({ theme }).input, inputStyle, style]}
          editable={editable}
          onBlur={onBlur}
          onFocus={onFocus}
          onEndEditing={onEndEditing}
          onSubmitEditing={onSubmitEditing}
          returnKeyType={returnKeyType}
        />
        {rightIcon && <Icon icon={rightIcon} onPress={handleRightIconPress} />}
      </View>
      {error && <Text style={styles({ theme }).error}>{error}</Text>}
    </React.Fragment>
  );
};

const styles = ({ theme }: { theme: "dark" | "light" }) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      borderWidth: 1.5,
      borderColor: colors[theme].commonBlack,
      borderRadius: moderateScale(8),
      width: "100%",
      paddingHorizontal: scale(10),
      paddingVertical: verticalScale(10),
    },
    input: {
      flex: 1,
      fontSize: getFontSize(14),
      fontFamily: typography.fonts.regular,
      color: colors[theme].commonBlack,
    },
    label: {
      alignSelf: "flex-start",
      fontSize: getFontSize(15),
      fontFamily: typography.fonts.semiBold,
      color: colors[theme].commonBlack,
      marginBottom: verticalScale(10),
    },
    error: {
      fontSize: getFontSize(12),
      fontFamily: typography.fonts.regular,
      color: colors[theme].sky,
      marginTop: verticalScale(5),
      alignSelf: "flex-start",
    },
    icon: {
      marginHorizontal: scale(5),
    },
  });

export default TextField;
