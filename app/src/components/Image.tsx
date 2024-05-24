import React, { useMemo, useState } from "react";
import {
  Image,
  ImageSourcePropType,
  LayoutChangeEvent,
  StyleSheet,
  View,
} from "react-native";

interface ResponsiveImageProps {
  src: ImageSourcePropType;
  srcWidth: number;
  srcHeight: number;
  resizeMode?: "cover" | "contain" | "stretch" | "repeat" | "center";
}

const ResponsiveImage = ({
  src,
  srcWidth,
  srcHeight,
  resizeMode = "contain",
}: ResponsiveImageProps) => {
  const [containerWidth, setContainerWidth] = useState(0);

  const handleViewLayoutChange = ({
    nativeEvent: {
      layout: { width },
    },
  }: LayoutChangeEvent) => {
    setContainerWidth(width);
  };

  const imageStyles = useMemo(() => {
    const ratio = containerWidth / srcWidth;
    return {
      width: containerWidth,
      height: srcHeight * ratio,
      resizeMode,
    };
  }, [containerWidth, srcWidth, srcHeight]);

  return (
    <View style={styles.container} onLayout={handleViewLayoutChange}>
      <Image source={src} style={imageStyles} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { width: "100%" },
});

export default ResponsiveImage;
