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
        source={{
          uri: "https://images.unsplash.com/photo-1745776707319-c01d866ee6b6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
        }}
        contentFit="cover"
      />
    </View>
  );
}
