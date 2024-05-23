import AsyncStorage from "@react-native-async-storage/async-storage";
import { NativeModules } from "react-native";
import Reactotron from "reactotron-react-native";

Reactotron.setAsyncStorageHandler(AsyncStorage)
  .configure({ name: "ParentingPlus" })
  .useReactNative()
  .connect();

Reactotron.onCustomCommand({
  title: "Show Dev Menu",
  description: "Opens the React Native dev menu",
  command: "showDevMenu",
  handler: () => {
    Reactotron.log("Showing React Native dev menu");
    NativeModules.DevMenu.show();
  },
});

Reactotron.onCustomCommand({
  title: "Delete AsyncStorage",
  description: " Deletes all AsyncStorage data",
  command: " deleteAsyncStorage",
  handler: () => {
    Reactotron.log("Deleting AsyncStorage data");
    AsyncStorage.clear();
  },
});
