"use client";

import { useState } from "react";
import { StyleSheet, Image, Platform, Text } from "react-native";

import { PlatformPressable } from "@react-navigation/elements";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { IconSymbol } from "@/components/ui/IconSymbol";

import { getText } from "../../actions/server-funcs";

export default function TabTwoScreen() {
  const [tree, setTree] = useState<React.ReactNode>();

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }
    >
      <PlatformPressable
        onPress={async () => {
          setTree(await getText());
        }}
      >
        <Text>Press me</Text>
      </PlatformPressable>
      {tree}
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
