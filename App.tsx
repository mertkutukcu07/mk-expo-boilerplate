if (__DEV__) {
  //@ts-ignore
  import("@/devtools/ReactotronConfig");
}
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { customFontstoLoad } from "./app/src/theme/typography";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { APIProvider } from "./app/src/service/ApiProvider";
import { AppNavigator } from "./app/src/navigation/AppNavigator";

export default function App() {
  const [loaded, error] = useFonts(customFontstoLoad);

  React.useEffect(() => {
    if (error) throw error;
  }, [error]);

  React.useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <APIProvider>
        <AppNavigator />
      </APIProvider>
    </SafeAreaProvider>
  );
}
