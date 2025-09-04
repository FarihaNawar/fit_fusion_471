import React, { useState } from 'react';

const DietChart = () => {
  const [calories, setCalories] = useState(2000); // Default calorie intake
  const [dietPlan, setDietPlan] = useState([]);

  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  // Updated Meal Plans with additional calorie data
  const mealPlans = [
    {
      meal: "Breakfast",
      options: [
        { item: "Oatmeal with fruits", calories: 300, protein: 10, carbs: 50, fat: 5, image: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { item: "Scrambled eggs with toast", calories: 350, protein: 20, carbs: 30, fat: 15, image: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { item: "Smoothie with nuts", calories: 250, protein: 8, carbs: 35, fat: 10, image: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { item: "Avocado Toast", calories: 380, protein: 9, carbs: 35, fat: 20, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc9AIvAc6dkD5GTVhVASi91F4Jc4n7AbOFhw&s" },
        { item: "Greek Yogurt Parfait", calories: 320, protein: 15, carbs: 45, fat: 10, image: "https://tealnotes.com/wp-content/uploads/2023/05/Greek-Yogurt-Parfait-1.jpg" }
      ]
    },
    {
      meal: "Lunch",
      options: [
        { item: "Grilled chicken with quinoa", calories: 500, protein: 40, carbs: 45, fat: 10, image: "https://images.unsplash.com/photo-1591120583691-49d2741e55da?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { item: "Vegetable stir-fry with rice", calories: 400, protein: 15, carbs: 60, fat: 8, image: "https://images.unsplash.com/photo-1591120583691-49d2741e55da?q=80&w=1936&auto=format&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { item: "Salmon with sweet potato", calories: 450, protein: 35, carbs: 40, fat: 15, image: "https://images.unsplash.com/photo-1591120583691-49d2741e55da?q=80&w=1936&auto=format&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { item: "Chicken Caesar Salad", calories: 550, protein: 35, carbs: 25, fat: 28, image: "https://images.unsplash.com/photo-1582034986517-30d163aa1da9?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { item: "Turkey Avocado Wrap", calories: 420, protein: 30, carbs: 40, fat: 15, image: "https://californiaavocado.com/wp-content/uploads/2020/07/Turkey-California-Avocado-Lavosh-Wrap-1.jpeg" }
      ]
    },
    {
      meal: "Dinner",
      options: [
        { item: "Grilled vegetables with tofu", calories: 400, protein: 20, carbs: 40, fat: 10, image: "https://images.unsplash.com/photo-1528216142275-f64d7a59d8d5?q=80&w=2094&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { item: "Pasta with marinara sauce", calories: 350, protein: 12, carbs: 55, fat: 8, image: "https://images.unsplash.com/photo-1528216142275-f64d7a59d8d5?q=80&w=2094&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { item: "Soup with whole-grain bread", calories: 300, protein: 10, carbs: 45, fat: 5, image: "https://images.unsplash.com/photo-1528216142275-f64d7a59d8d5?q=80&w=2094&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { item: "Beef Stir Fry with Veggies", calories: 500, protein: 40, carbs: 50, fat: 15, image: "https://www.allrecipes.com/thmb/7N-Xq1XMMJw8G0KJv2e0ETUYB2I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/228823-quick-beef-stir-fry-DDMFS-4x3-1f79b031d3134f02ac27d79e967dfef5.jpg" },
        { item: "Chicken Fajitas with Guacamole", calories: 600, protein: 45, carbs: 45, fat: 20, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEmJLe06HNezAS0C0SEkCn4tK5hjG9_iUTbQ&s" }
      ]
    },
    {
      meal: "Snacks",
      options: [
        { item: "Yogurt with granola", calories: 150, protein: 6, carbs: 20, fat: 4, image: "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=1600&auto=format&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { item: "Almonds (1 oz)", calories: 160, protein: 6, carbs: 6, fat: 14, image: "https://images.unsplash.com/photo-1590080876351-941da357bde6?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { item: "Apple with peanut butter", calories: 250, protein: 6, carbs: 30, fat: 14, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShIx_p4oK_6zy9ouB6dRSysUiy1U9sB16UBA&s" },
        { item: "Hard-boiled eggs (2)", calories: 140, protein: 12, carbs: 1, fat: 10, image: "https://www.southernliving.com/thmb/QMMXuEZuKQm68Eq2FG_xiHi-uxg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-989213926-2000-6dd8cb1d388b425fac753292031410c9.jpg" },
        { item: "Protein bar", calories: 200, protein: 20, carbs: 15, fat: 8, image: "https://media.self.com/photos/61b225b86013c481c4864f0c/2:1/w_2580,c_limit/1-Coconut-Chocolate-Peanut-Butter-Protein-Bars.jpg" }
      ]
    }
  ];

  const generateDietPlan = () => {
    const weeklyPlan = [];

    // Loop through each day
    for (let i = 0; i < 7; i++) {
      let totalCaloriesForDay = 0; // Reset calories for each day

      const dailyPlan = mealPlans.map((meal) => {
        const option = meal.options[Math.floor(Math.random() * meal.options.length)];
        totalCaloriesForDay += option.calories;

        return {
          meal: meal.meal,
          ...option
        };
      });

      // Push the daily plan to the weekly plan
      weeklyPlan.push(dailyPlan);
    }

    setDietPlan(weeklyPlan);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Custom Diet Planner</h1>

      {/* User Input Form */}
      <div className="p-4 mb-6 bg-white rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <label htmlFor="gender" className="block text-lg font-medium mb-2">Gender:</label>
            <select id="gender" className="w-full p-2 border border-gray-300 rounded-md">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div>
            <label htmlFor="age" className="block text-lg font-medium mb-2">Age:</label>
            <input type="number" id="age" className="w-full p-2 border border-gray-300 rounded-md" />
          </div>
          <div>
            <label htmlFor="height" className="block text-lg font-medium mb-2">Height (in cm):</label>
            <input type="number" id="height" className="w-full p-2 border border-gray-300 rounded-md" />
          </div>
          <div>
            <label htmlFor="weight" className="block text-lg font-medium mb-2">Weight (in kg):</label>
            <input type="number" id="weight" className="w-full p-2 border border-gray-300 rounded-md" />
          </div>
          <div>
            <label htmlFor="activity" className="block text-lg font-medium mb-2">Activity Level:</label>
            <select id="activity" className="w-full p-2 border border-gray-300 rounded-md">
              <option value="sedentary">Sedentary</option>
              <option value="light">Lightly Active</option>
              <option value="moderate">Moderately Active</option>
              <option value="very">Very Active</option>
            </select>
          </div>
          <div>
            <label htmlFor="goal" className="block text-lg font-medium mb-2">Weight Goal:</label>
            <select id="goal" className="w-full p-2 border border-gray-300 rounded-md">
              <option value="lose">Lose Weight</option>
              <option value="maintain">Maintain Weight</option>
              <option value="gain">Gain Weight</option>
            </select>
          </div>
        </div>
      </div>

      <button onClick={generateDietPlan} className="w-full bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600">Generate Diet Chart</button>

      {dietPlan.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-4">Your Weekly Meal Plan</h2>
          {dietPlan.map((dayPlan, dayIndex) => (
            <div key={dayIndex} className="mb-6">
              <h3 className="text-lg font-bold mb-4 bg-teal-500 text-white p-2 rounded-lg">{daysOfWeek[dayIndex]}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {dayPlan.map((meal, idx) => (
                  <div key={idx} className="p-4 border border-gray-300 rounded-lg">
                    <img src={meal.image} alt={meal.item} className="w-full h-32 object-cover rounded-md mb-2" />
                    <h4 className="text-md font-bold mb-2">{meal.meal}</h4>
                    <p>{meal.item}</p>
                    <div className="text-sm text-gray-500 mt-2">
                      <p>Calories: {meal.calories}</p>
                      <p>Protein: {meal.protein}g</p>
                      <p>Carbs: {meal.carbs}g</p>
                      <p>Fat: {meal.fat}g</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DietChart;
