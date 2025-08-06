import { SignedIn, SignedOut, useUser } from "@clerk/clerk-expo";
import { Link } from "expo-router";
import { Text, View } from "react-native";
import { SignOutButton } from "@/components/SignOutButton";
import { useTransactions } from "../../hooks/useTransactions";
import { useEffect } from "react";

export default function Page() {
  const { user } = useUser();
  const { useTransactions, summary, isLoading, loading, deleteTransaction } =
    useTransactions(user.id);
  useEffect(() => {
    loadData();
  }, [loadData]);
  return (
    <View>
      <SignedIn>
        {user?.emailAddresses?.[0]?.emailAddress ? (
          <Text>Hello {user.emailAddresses[0].emailAddress}</Text>
        ) : (
          <Text>Loading...</Text>
        )}
        <SignOutButton />
      </SignedIn>

      <SignedOut>
        <Link href="/(auth)/sign-in">
          <Text>Sign in</Text>
        </Link>
        <Link href="/(auth)/sign-up">
          <Text>Sign up</Text>
        </Link>
      </SignedOut>
    </View>
  );
}
