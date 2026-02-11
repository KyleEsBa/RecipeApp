// Mock recipe data for the Recipe App
// Each recipe contains id, title, description, ingredients, instructions, prepTime, cookTime, servings, image, and category

const recipes = [
  {
    id: 1,
    title: "Classic Pancakes",
    description: "Fluffy pancakes perfect for breakfast.",
    ingredients: [
      { name: "Flour", quantity: "1 1/2 cups" },
      { name: "Milk", quantity: "1 1/4 cups" },
      { name: "Egg", quantity: "1" },
      { name: "Baking Powder", quantity: "3 1/2 tsp" },
      { name: "Salt", quantity: "1/2 tsp" },
      { name: "Sugar", quantity: "1 tbsp" },
      { name: "Butter", quantity: "3 tbsp, melted" }
    ],
    instructions: [
      "In a bowl, mix flour, baking powder, salt, and sugar.",
      "Add milk, egg, and melted butter; mix until smooth.",
      "Heat a lightly oiled griddle over medium-high heat.",
      "Pour batter onto the griddle; brown on both sides and serve hot."
    ],
    prepTime: "10 min",
    cookTime: "15 min",
    servings: 4,
    image: "https://www.inspiredtaste.net/wp-content/uploads/2025/07/Pancake-Recipe-1.jpg",
    category: "breakfast"
  },
  {
    id: 2,
    title: "Spaghetti Bolognese",
    description: "A classic Italian pasta dish with rich meat sauce.",
    ingredients: [
      { name: "Spaghetti", quantity: "400g" },
      { name: "Ground Beef", quantity: "500g" },
      { name: "Onion", quantity: "1, chopped" },
      { name: "Garlic", quantity: "2 cloves, minced" },
      { name: "Tomato Sauce", quantity: "2 cups" },
      { name: "Olive Oil", quantity: "2 tbsp" },
      { name: "Salt", quantity: "to taste" },
      { name: "Pepper", quantity: "to taste" }
    ],
    instructions: [
      "Cook spaghetti according to package instructions.",
      "In a pan, heat olive oil and sauté onion and garlic.",
      "Add ground beef and cook until browned.",
      "Pour in tomato sauce, season, and simmer for 20 minutes.",
      "Serve sauce over spaghetti."
    ],
    prepTime: "10 min",
    cookTime: "30 min",
    servings: 4,
    image: "https://www.slimmingeats.com/blog/wp-content/uploads/2010/04/spaghetti-bolognese-36.jpg",
    category: "dinner"
  },
  {
    id: 3,
    title: "Chicken Caesar Salad",
    description: "Crisp romaine lettuce with grilled chicken and Caesar dressing.",
    ingredients: [
      { name: "Romaine Lettuce", quantity: "1 head" },
      { name: "Chicken Breast", quantity: "2, grilled and sliced" },
      { name: "Parmesan Cheese", quantity: "1/4 cup, grated" },
      { name: "Croutons", quantity: "1 cup" },
      { name: "Caesar Dressing", quantity: "1/3 cup" }
    ],
    instructions: [
      "Chop romaine lettuce and place in a large bowl.",
      "Add grilled chicken, parmesan, and croutons.",
      "Drizzle with Caesar dressing and toss to combine."
    ],
    prepTime: "15 min",
    cookTime: "10 min",
    servings: 2,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqSRxye2TDzRDi_QOgeILnJMO6U3cEWJw6Fw&s",
    category: "lunch"
  },
  {
    id: 4,
    title: "Chocolate Chip Cookies",
    description: "Chewy and delicious chocolate chip cookies.",
    ingredients: [
      { name: "Flour", quantity: "2 1/4 cups" },
      { name: "Butter", quantity: "1 cup, softened" },
      { name: "Sugar", quantity: "3/4 cup" },
      { name: "Brown Sugar", quantity: "3/4 cup" },
      { name: "Eggs", quantity: "2" },
      { name: "Vanilla Extract", quantity: "1 tsp" },
      { name: "Baking Soda", quantity: "1 tsp" },
      { name: "Salt", quantity: "1/2 tsp" },
      { name: "Chocolate Chips", quantity: "2 cups" }
    ],
    instructions: [
      "Preheat oven to 375°F (190°C).",
      "Cream together butter, sugar, and brown sugar.",
      "Beat in eggs and vanilla.",
      "Mix in flour, baking soda, and salt.",
      "Stir in chocolate chips.",
      "Drop by spoonfuls onto baking sheet and bake for 8-10 minutes."
    ],
    prepTime: "15 min",
    cookTime: "10 min",
    servings: 24,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGAlvNFw1tAWlucyIEC5TDb6k1gPLKkeuqnw&s",
    category: "dessert"
  },
  {
    id: 5,
    title: "Vegetable Stir Fry",
    description: "A quick and healthy vegetable stir fry.",
    ingredients: [
      { name: "Broccoli", quantity: "1 cup, florets" },
      { name: "Carrot", quantity: "1, sliced" },
      { name: "Bell Pepper", quantity: "1, sliced" },
      { name: "Soy Sauce", quantity: "2 tbsp" },
      { name: "Garlic", quantity: "1 clove, minced" },
      { name: "Olive Oil", quantity: "1 tbsp" }
    ],
    instructions: [
      "Heat oil in a wok or large pan.",
      "Add garlic and sauté for 1 minute.",
      "Add vegetables and stir fry for 5-7 minutes.",
      "Add soy sauce and cook for another 2 minutes."
    ],
    prepTime: "10 min",
    cookTime: "10 min",
    servings: 2,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbpF2WOuRiLHOhs8yeU5VV4fr1TC5KGFGz9g&s",
    category: "dinner"
  }
];

export default recipes;
