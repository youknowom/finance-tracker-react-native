import React from "react";
import { View, Alert, TouchableOpacity } from "react-native";
import { useClerk } from "@clerk/clerk-expo";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../../assets/styles/home.styles";
import { COLORS } from "../../constants/colors";

const SignOutButton = () => {
  const { signOut } = useClerk();

  const handleSignOut = async () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      { text: "Cancel", style: "cancel" },
      { text: "Logout", style: "destructive", onPress: signOut },
    ]);
  };

  return (
    <View>
      <TouchableOpacity style={styles.logoutButton} onPress={handleSignOut}>
        <Ionicons name="log-out-outline" size={22} color={COLORS.text} />
      </TouchableOpacity>
    </View>
  );
};

export default SignOutButton;
