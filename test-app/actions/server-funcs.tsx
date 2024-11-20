"use server";

import { Text } from "react-native";

export async function getText() {
  try {
    console.log(process.env.COMMAND_MODE);
    console.log("On the server");
  } catch (e) {
    console.error(e);
  }
  return <Text style={{ color: "red" }}>Yo, this is cooler</Text>;
}
