import { Text, Image, View } from "react-native";

import { MEALS } from "../data/data";

function MealDetailScreen({ route }) {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return (
    <View>
      <Image source={{ uri: selectedMeal.imageUrl }} />
      <Text>{selectedMeal.title}</Text>
      <View></View>
      <Text>Ingredients</Text>
      <Text>Steps</Text>
    </View>
  );
}

export default MealDetailScreen;
