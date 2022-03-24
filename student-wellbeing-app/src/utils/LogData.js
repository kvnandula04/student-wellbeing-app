import { Alert } from "react-native";

export const logProductivityData = (subject, length, rating) => {
  Alert.alert(`Subject: ${subject}, Rating: ${rating}, Length: ${length}`);
};
