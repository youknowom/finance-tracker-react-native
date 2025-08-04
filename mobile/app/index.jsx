import { Image } from "expo-image";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "purple",
        borderRadius: 10,
      }}
    >
      <Text>Hello</Text>
      <Image
        style={{ width: 150, height: 150, borderRadius: 10 }}
        source={require("@/assets/images/pfp.jpg")}
      />
    </View>
  );
}
