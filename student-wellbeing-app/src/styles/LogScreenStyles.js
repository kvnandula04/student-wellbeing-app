import { StyleSheet } from "react-native";
import colors from "./Colors";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.PRIMARYCOLOR,
    },
    input: {
        marginHorizontal: "5%",
        marginTop: "5%",
        padding: "3%",
        borderWidth: 0.5,
        borderColor: "grey",
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    button: {
        backgroundColor: colors.CARDCOLOR,
        marginHorizontal: "5%",
        marginTop: "5%",
        padding: "3%",
        borderRadius: 10,
        justifyContent: "center",
    },
    text: {
        fontWeight: "bold",
        textAlign: "center",
        textTransform: "uppercase",
    },
});
