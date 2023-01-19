import "./src/lib/dayjs"

import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
} from "@expo-google-fonts/inter";
import Loading from "./src/components/Loading";
import Home from "./src/screens/Home";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
  });

  if (!fontsLoaded)
    return (
      <View className="flex-1 bg-background items-center justify-center">
        <Loading />
      </View>
    );

  return (
    <>
      <Home />
      <StatusBar style="light" backgroundColor="transparent" translucent />
    </>
  );
}
