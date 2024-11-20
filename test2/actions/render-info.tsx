"use server";

import { Text } from "react-native";

export default async function renderInfo({ name }) {
  // Securely fetch data from an API, and read environment variables...
  return <Text>Hello, {name}!</Text>;
}
