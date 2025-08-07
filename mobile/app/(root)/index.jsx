import { SignedIn, SignedOut, useUser } from "@clerk/clerk-expo";
import { Link } from "expo-router";
import { Text, View } from "react-native";
import { SignOutButton } from "@/components/SignOutButton";
import { useTransactions } from "../../hooks/useTransactions";
import { useEffect } from "react";
import PageLoader from "../components/PageLoader";
import { styles } from "../../assets/styles/home.styles";

export default function Page() {
  const { user } = useUser();

  const { transactions, summary, isLoading, deleteTransaction, loadData } =
    useTransactions(user?.id);

  useEffect(() => {
    if (loadData) {
      loadData();
    }
  }, [loadData]);
  if (isLoading) return <PageLoader />;
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* //header */}
        <View style={styles.header}>
          {/* //left */}
          <View style={styles.headerLeft}>
            <Image
              source={require("../../assets/images/logo.png")}
              style={styles.headerLogo}
              resizeMode="contain"
            />
            <View style={styles.welcomeContainer}>
              <Text style={styles.welcomeText}>Welcome,</Text>
              <Text style={styles.usernameText}>
                {user?.emailAddresses[0]?.emailAddress.split("@")[0]}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
