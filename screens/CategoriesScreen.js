import { FlatList } from "react-native";
import { CATEGORIES } from "../data/data";

function renderCategoryItem(item) {
  return;
}

function CategoriesScreen() {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
    />
  );
}

export default CategoriesScreen;
