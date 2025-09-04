import React from 'react';

function TrackerCard() {
  return (
    <div className="my-8 px-4">
      {/* Title */}
      <h2 className="text-2xl font-bold text-teal-500 sm:text-3xl text-center mb-8">
        Track Your Progress
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Card 1: Calculate Your BMI */}
        <a href="/bmi" className="group relative block h-64 sm:h-80 lg:h-96">
          <span className="absolute inset-0 border-2 border-dashed border-black"></span>

          <div className="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
            <img 
              src="https://images.unsplash.com/photo-1470167290877-7d5d3446de4c?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Calculate Your BMI" 
              className="absolute inset-0 h-full w-full object-cover opacity-70 group-hover:opacity-100 transition-opacity"
            />
            <div className="p-4 !pt-0 z-10 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
              <h2 className="mt-4 text-xl font-medium sm:text-2xl">Calculate Your BMI</h2>
            </div>

            <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8 z-10">
              <h3 className="mt-4 text-xl font-medium sm:text-2xl">Calculate Your BMI</h3>
              <p className="mt-4 text-sm sm:text-base text-white">
                Determine your Body Mass Index (BMI) to assess your body weight relative to your height.
              </p>
              <p className="mt-8 font-bold">Start Now →</p>
            </div>
          </div>
        </a>

        {/* Card 2: Calculate Required Calories */}
        <a href="/caloriescalc" className="group relative block h-64 sm:h-80 lg:h-96">
          <span className="absolute inset-0 border-2 border-dashed border-black"></span>

          <div className="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
            <img 
              src="https://images.unsplash.com/photo-1629121958394-3be95d8c057c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Calculate Required Calories" 
              className="absolute inset-0 h-full w-full object-cover opacity-70 group-hover:opacity-100 transition-opacity"
            />
            <div className="p-4 !pt-0 z-10 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
              <h2 className="mt-4 text-xl font-medium sm:text-2xl">Calculate Required Calories</h2>
            </div>

            <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8 z-10">
              <h3 className="mt-4 text-xl font-medium sm:text-2xl">Calculate Required Calories</h3>
              <p className="mt-4 text-sm sm:text-base text-white">
                Find out how many calories your body needs daily to maintain your current weight.
              </p>
              <p className="mt-8 font-bold">Start Now →</p>
            </div>
          </div>
        </a>

        {/* Card 3: Calculate Burnt Calories */}
        <a href="/burntcal" className="group relative block h-64 sm:h-80 lg:h-96">
          <span className="absolute inset-0 border-2 border-dashed border-black"></span>

          <div className="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
            <img 
              src="https://images.unsplash.com/photo-1434596922112-19c563067271?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Calculate Burnt Calories" 
              className="absolute inset-0 h-full w-full object-cover opacity-70 group-hover:opacity-100 transition-opacity"
            />
            <div className="p-4 !pt-0 z-10 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
              <h2 className="mt-4 text-xl font-medium sm:text-2xl">Calculate Burnt Calories</h2>
            </div>

            <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8 z-10">
              <h3 className="mt-4 text-xl font-medium sm:text-2xl">Calculate Burnt Calories</h3>
              <p className="mt-4 text-sm sm:text-base text-white">
                Track the calories you've burned through workouts and activities.
              </p>
              <p className="mt-8 font-bold">Start Now →</p>
            </div>
          </div>
        </a>

        {/* Card 4: Calculate Calorie Intake */}
        <a href="/caltracker" className="group relative block h-64 sm:h-80 lg:h-96">
          <span className="absolute inset-0 border-2 border-dashed border-black"></span>

          <div className="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
            <img 
              src="https://images.unsplash.com/photo-1648421714382-70d47442b354?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Calculate Calorie Intake" 
              className="absolute inset-0 h-full w-full object-cover opacity-70 group-hover:opacity-100 transition-opacity"
            />
            <div className="p-4 !pt-0 z-10 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
              <h2 className="mt-4 text-xl font-medium sm:text-2xl">Calculate Calorie Intake</h2>
            </div>

            <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8 z-10">
              <h3 className="mt-4 text-xl font-medium sm:text-2xl">Calculate Calorie Intake</h3>
              <p className="mt-4 text-sm sm:text-base text-white">
                Monitor your daily calorie intake to stay on track with your fitness goals.
              </p>
              <p className="mt-8 font-bold">Start Now →</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default TrackerCard;
