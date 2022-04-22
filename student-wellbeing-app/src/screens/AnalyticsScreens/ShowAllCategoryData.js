import React, { useState, useEffect } from "react";
import { Text, View, ScrollView, FlatList, StyleSheet } from "react-native";
import { getAllCategoryData } from "../../utils/GetAllCategoryDataDB";
import LogScreenStyles from "../../styles/LogScreenStyles";
import { EmptyCard } from "../../components/EmptyCard";
// import { FlatList } from "react-native-web";

export default function ShowAllData({ route, navigation }) {
  const [DATA, setData] = useState([]);

  useEffect(() => {
    getAllCategoryData(route.params.category, setData);
  }, []);

  // depends on category

  // data shown depends on category
  const Item = ({ data }) => (
    <View>
      <EmptyCard
        style={{
          marginHorizontal: "5%",
          marginTop: "3%",
          padding: "7%",
          justifyContent: "flex-start",
        }}
      >
        <View>
          {/* Conditional rendering of Titles */}
          {data.Subject != undefined ? (
            <Text style={styles.title}>Subject: {data.Subject}</Text>
          ) : (
            <></>
          )}
          {data.Activity != undefined ? (
            <Text style={styles.title}>Activity: {data.Activity}</Text>
          ) : (
            <></>
          )}
          {data.FoodName != undefined ? (
            <Text style={styles.title}>Food: {data.FoodName}</Text>
          ) : (
            <></>
          )}

          {/* Conditional rendering of SubTitle 1 */}
          {data.Length != undefined ? (
            <Text style={styles.subTitle}>Length: {data.Length} minutes</Text>
          ) : (
            <></>
          )}

          {data.TimeHours != undefined ? (
            <Text style={styles.subTitle}>
              Length: {data.TimeHours}hr {data.TimeMinutes}
            </Text>
          ) : (
            <></>
          )}

          {/* Conditional rendering of SubTitle 2 */}
          {data.Rating != undefined ? (
            <Text style={styles.subTitle}>Rating: {data.Rating}</Text>
          ) : (
            <></>
          )}

          {data.Calories != undefined ? (
            <Text style={styles.subTitle}>Calories: {data.Calories}</Text>
          ) : (
            <></>
          )}

          {/* Conditional rendering of SubTitle 3 */}
          {data.Journal != undefined ? (
            <Text style={styles.subTitle}>{data.Journal}</Text>
          ) : (
            <></>
          )}

          {/* Conditional rendering of final SubTitle */}
          {data.Date != undefined ? (
            <Text style={styles.subTitle}>Date: {data.Date}</Text>
          ) : (
            <></>
          )}

          {data.Time != undefined ? (
            <Text style={styles.subTitle}>Time: {data.Time}</Text>
          ) : (
            <></>
          )}
        </View>
      </EmptyCard>
    </View>
  );

  const renderItem = ({ item }) => (
    <View style={{ marginBottom: "3%" }}>
      <Item data={item} />
    </View>
  );

  return (
    <View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.ID}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    marginLeft: "5%",
    fontSize: 20,
  },
  subTitle: {
    marginLeft: "10%",
    fontSize: 12,
    paddingTop: 5,
  },
});
