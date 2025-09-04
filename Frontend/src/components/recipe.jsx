import React from 'react';

const recipes = [
  {
    title: "Lemon-Garlic Chicken with Green Beans",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgYRSeVPryBM7q31x3E8dWxsWaEtMM2g21gA&s",
    description: "Simple pan-seared chicken with bright lemon and garlic.",
    instructions: "1. Season chicken with salt, pepper, garlic. 2. Sear in olive oil. 3. Add lemon juice and green beans. 4. Cook until chicken is done."
  },
  {
    title: "Spinach & Mushroom Quiche",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZCWWUldPfPWn-elhe6j10ls4zBhM_heoh2g&s ",
    description: "Healthy breakfast or dinner option full of vegetables.",
    instructions: "1. Preheat oven to 375°F. 2. Sauté mushrooms and spinach. 3. Whisk eggs and milk. 4. Combine and pour into crust. 5. Bake for 35 mins."
  },
  {
    title: "Chickpea Salad Sandwich",
    image: "https://www.simplyrecipes.com/thmb/ndLcT6uW2fMh3p7o3jUY-72p01g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2020__04__Chickpea-Salad-Sandwiches-LEAD-3b-641ebb0556ed423a8dd463040bbf36ee.jpg",
    description: "A vegetarian protein-packed sandwich for lunch.",
    instructions: "1. Mash chickpeas. 2. Mix with yogurt, mustard, celery, onion. 3. Serve on whole-grain bread with lettuce and tomato."
  },
  {
    title: "Turkey Taco Lettuce Wraps",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb6DldSY1WIhEYGKf7sKqAXYMKwJP62DwGkQ&s",
    description: "Low-carb tacos using lettuce wraps instead of tortillas.",
    instructions: "1. Brown turkey with taco seasoning. 2. Serve in romaine lettuce leaves. 3. Top with salsa, avocado, and cheese."
  },
  {
    title: "Salmon & Asparagus Sheet Pan",
    image: "https://www.wyseguide.com/wp-content/uploads/2022/05/Sheet-Pan-Salmon-Asparagus-31.jpg",
    description: "A full meal cooked on one pan in under 30 minutes.",
    instructions: "1. Place salmon and asparagus on sheet. 2. Drizzle with olive oil and lemon juice. 3. Bake at 400°F for 20 mins."
  },
  {
    title: "Quinoa & Black Bean Bowl",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGx41tO1hZ00UK1r1aWmcL-yDxNlda2GgNnA&s",
    description: "A vegetarian power bowl loaded with protein and fiber.",
    instructions: "1. Cook quinoa. 2. Mix with black beans, corn, tomato. 3. Top with lime juice and avocado slices."
  },
  {
    title: "Greek Yogurt Chicken Salad",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgyiZ4p9Jgz6rCxdS0CBo2iLJVUvV0cPI9Og&s",
    description: "Classic chicken salad lightened up with Greek yogurt.",
    instructions: "1. Shred cooked chicken. 2. Mix with Greek yogurt, celery, grapes, and almonds. 3. Chill and serve in lettuce cups or bread."
  },
  {
    title: "Shrimp Stir-Fry",
    image: "https://www.allrecipes.com/thmb/KHlZo_h4JG_qqprsQynZDlbLub4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ALR-231681-shrimp-stir-fry-VAT-4x3-2-a15b87781ad0438c9d1f90769e734cb4.jpg",
    description: "Quick and colorful shrimp stir-fry with veggies.",
    instructions: "1. Sauté shrimp in sesame oil. 2. Add bell peppers, broccoli, soy sauce. 3. Cook for 5-7 mins. Serve over brown rice."
  },
  {
    title: "Zucchini Noodles with Pesto",
    image: "https://www.plantbasedcooking.com/wp-content/uploads/2023/10/Zucchini-Noodles-with-Pesto-480x270.jpg",
    description: "Low-carb noodles made from zucchini with fresh pesto.",
    instructions: "1. Spiralize zucchini. 2. Sauté lightly. 3. Toss with homemade or store-bought pesto. 4. Serve warm."
  },
  {
    title: "Vegetable Soup",
    image: "https://downshiftology.com/wp-content/uploads/2023/09/Vegetable-Soup-main-500x375.jpg",
    description: "Hearty, healthy soup loaded with seasonal vegetables.",
    instructions: "1. Sauté onions and garlic. 2. Add carrots, potatoes, tomatoes. 3. Add broth and simmer 30 mins. 4. Add spinach at end."
  },
  {
    title: "Tuna Avocado Salad",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQeI378uiSwSQGNYXQLfEpAB2cGD8BR3u0mw&s",
    description: "A no-mayo, low-carb tuna salad.",
    instructions: "1. Mix tuna with avocado, cucumber, lime juice. 2. Add salt, pepper. 3. Serve chilled on lettuce or toast."
  },
  {
    title: "Grilled Chicken Caesar Salad",
    image: "https://www.midwestliving.com/thmb/0zoWWlqQHVMXtKOewJh6IS2xMZM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/KH_011924_MDWL0184_preview-fd69d6e536bc4bda94d2fc1ceee434d9.jpg",
    instructions: "1. Grill chicken. 2. Toss romaine, croutons, and dressing. 3. Top with sliced chicken and Parmesan."
  },
  {
    title: "Stuffed Bell Peppers",
    image: "https://www.allrecipes.com/thmb/YT42IgbDvUCYnjxj2ycN21Vr628=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-236359-beef-and-rice-stuffed-bell-peppers-DDMFS-4x3-beauty-dd9458de98884d4eb362354ee626d70e.jpg",
    description: "Peppers filled with turkey, rice, and veggies.",
    instructions: "1. Cook ground turkey. 2. Mix with rice and tomato. 3. Stuff into halved peppers. 4. Bake 25 mins at 375°F."
  },
  {
    title: "Oatmeal Energy Balls",
    image: "https://www.eatingwell.com/thmb/W2iHiPHxci5CfSjD3KFQxTKR2NI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/258084-peanut-butter-energy-balls-beauty-742f9126aa1e43f785920d9d5a47a1c3.jpg",
    description: "No-bake, high-protein snack for on-the-go.",
    instructions: "1. Mix oats, peanut butter, honey, chocolate chips. 2. Roll into balls. 3. Chill in fridge for 30 mins."
  },
  {
    title: "Egg Muffins with Veggies",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiDefxx3gw2WpvcA_wfJS49f3mImRioitOxg&s",
    description: "Meal-prep breakfast muffins loaded with veggies.",
    instructions: "1. Whisk eggs with milk. 2. Add diced peppers, spinach, onion. 3. Pour into muffin tin. 4. Bake 20 mins at 375°F."
  },
  {
    title: "Sweet Potato Tacos",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrV1szZHL0jTVlrmNGMQUpZB_0R0O0h7GxFQ&s",
    description: "Tacos with roasted sweet potatoes and black beans.",
    instructions: "1. Roast cubed sweet potatoes. 2. Warm tortillas. 3. Fill with beans, sweet potatoes, avocado, and salsa."
  },
  {
    title: "Asian Chicken Lettuce Cups",
    image: "https://joyfoodsunshine.com/wp-content/uploads/2016/02/asian-chicken-lettuce-wraps-2-e1564869964220.jpg",
    description: "Low-carb lettuce cups with savory Asian chicken.",
    instructions: "1. Sauté ground chicken with soy sauce, ginger, garlic. 2. Spoon into lettuce leaves. 3. Garnish with green onions."
  },
  {
    title: "Baked Tilapia with Veggies",
    image: "https://images.getrecipekit.com/20240130185719-baked-tilapia-veggies.jpg?width=650&quality=90&",
    description: "Easy sheet-pan meal with fish and vegetables.",
    instructions: "1. Place tilapia and veggies on tray. 2. Add olive oil and herbs. 3. Bake at 375°F for 20 mins."
  },
  {
    title: "Protein Smoothie Bowl",
    image: "https://bakerita.com/wp-content/uploads/2017/03/Chocolate-Peanut-Butter-Smoothie-Bowl-10.jpg",
    description: "Thick smoothie bowl with protein and fruit toppings.",
    instructions: "1. Blend banana, spinach, yogurt, protein powder. 2. Pour into a bowl. 3. Top with berries, seeds, and granola."
  },
  {
    title: "Lentil Soup",
    image: "https://www.allrecipes.com/thmb/UeFtapHyGFBo4Lx-72GxgjrOGnk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/13978-lentil-soup-DDMFS-4x3-edfa47fc6b234e6b8add24d44c036d43.jpg",
    description: "Warming, protein-rich vegetarian lentil soup.",
    instructions: "1. Sauté garlic, onion, carrot. 2. Add lentils, broth, tomato paste. 3. Simmer for 40 mins. 4. Serve with lemon wedge."
  }
];

const Recipe = () => {
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {recipes.map((recipe, index) => (
        <div key={index} className="bg-white rounded-2xl shadow-md p-4">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-48 object-cover rounded-xl mb-3"
          />
          <h2 className="text-xl font-semibold mb-1">{recipe.title}</h2>
          <p className="text-gray-700 mb-2">{recipe.description}</p>
          <h3 className="font-bold mt-2">Instructions:</h3>
          <p className="text-sm text-gray-600 whitespace-pre-line">{recipe.instructions}</p>
        </div>
      ))}
    </div>
  );
};

export default Recipe;
