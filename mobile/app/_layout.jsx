import { ClerkProvider } from "@clerk/clerk-expo";
import { tokenCache } from "@clerk/clerk-expo/token-cache";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import SafeScreen from "./components/SafeScreen";

export default function RootLayout() {
  return (
    <ClerkProvider
      tokenCache={tokenCache}
      publishableKey="pk_test_ZW5hYmxpbmctZ3J1Yi04LmNsZXJrLmFjY291bnRzLmRldiQ"
      expoRouterProxyUrl="https://mobile.expo.dev"
    >
      <SafeScreen>
        <StatusBar style="auto" />
        <Slot />
      </SafeScreen>
    </ClerkProvider>
  );
}
