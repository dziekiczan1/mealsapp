import { View, Text, StyleSheet } from "react-native";
import { MEALS } from "../data/data";

function MealsOverviewScreen({ route }) {
  const catId = route.params.categoryId; // params we defined in CategoriesScreen

  return (
    <View style={styles.container}>
      <Text>Meals Overview Screen - {catId}</Text>
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
