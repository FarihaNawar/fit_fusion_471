import React, { useState, useEffect } from "react";

function Shop() {
  const productData = [
    // Protein Products
    {
      _id: "protein1",
      name: "Optimum Nutrition Gold Standard Whey",
      category: "Protein",
      price: 5599,
      imageUrl: "https://i5.walmartimages.com/seo/Optimum-Nutrition-Gold-Standard-100-Whey-Protein-Powder-French-Vanilla-Creme-2-lb-29-Servings_d7f0bdcd-5f1f-4412-82a1-5432147c7abc_1.a4d5207909f2a0e605580e6b9b18ec1c.jpeg",
      buyLink: "https://www.gymsupplementscenterbangladesh.com/view/details/Protein/89",
    },
    {
      _id: "protein2",
      name: "Muscletech Nitrotech 100% Whey Gold",
      category: "Protein",
      price: 5500,
      imageUrl: "https://www.gymsupplementscenterbangladesh.com/uploads/product/057776be60caed1eb5d32011515b33f3.jpg",
      buyLink: "https://www.nutritiondepot.com.bd/product/muscletech-nitrotech-100-whey-gold-double-rich-chocolate-2-lbs/",
    },
    {
      _id: "protein3",
      name: "Dymatize ISO 100",
      category: "Protein",
      price: 5000,
      imageUrl: "https://www.powerbody.co.uk/media/catalog/product/cache/3/og_image/image_2017-11-15_5a0c194b990d2.jpg",
      buyLink: "https://gymsupplementsbd.com/product/dymatize-iso-100/",
    },
    // Vitamins Products
    {
      _id: "vitamin1",
      name: "Optimum Nutrition Opti-Men",
      category: "Vitamins",
      price: 3490,
      imageUrl: "https://www.gymsupplementscenterbangladesh.com/uploads/product/qqqq.jpg",
      buyLink: "https://bdsupplementstore.com/product/opti-men-multivitamin-in-bangladesh/",
    },
    {
      _id: "vitamin2",
      name: "Muscletech Platinum Multivitamin",
      category: "Vitamins",
      price: 1990,
      imageUrl: "https://www.muscletech.com/cdn/shop/files/mt-platinum-multi-vitamin-90-count.png?v=1742823408&width=1024",
      buyLink: "https://bdsupplementstore.com/product/muscletech-platinum-multivitamin-bd/",
    },
    {
      _id: "vitamin3",
      name: "Animal Pak",
      category: "Vitamins",
      price: 4300,
      imageUrl: "https://gymsupplementsbd.com/wp-content/uploads/2021/07/animal-pak-44-serving-06-600x600.jpg",
      buyLink: "https://authenticsupplementbd.com/product/animal-pak/",
    },
    // Pre-Workout Products
    {
      _id: "preworkout1",
      name: "Cellucor C4 Original",
      category: "Pre-Workout",
      price: 3199,
      imageUrl: "https://excartbd.com/cdn/shop/products/C4-Original-Pre-Workout-Powder-30-servings-icy-blue-razz-at-excartbd.com_700x700.jpg?v=1669142591",
      buyLink: "https://www.gymsupplementscenterbangladesh.com/view/details/Pre-Workout/41",
    },
    {
      _id: "preworkout2",
      name: "BSN N.O.-Xplode",
      category: "Pre-Workout",
      price: 3500,
      imageUrl: "https://gymsupplementsbd.com/wp-content/uploads/2021/07/no-xplode-30-serving-05-600x600.jpg",
      buyLink: "https://gymsupplementsbd.com/product/no-xplode/",
    },
    {
      _id: "preworkout3",
      name: "Muscletech Vapor X5",
      category: "Pre-Workout",
      price: 3500,
      imageUrl: "https://gymsupplementsbd.com/wp-content/uploads/2024/05/Muscletech-Vapor-X5-01-gymsupplementsbd.jpg",
      buyLink: "https://gymsupplementsbd.com/product/muscletech-vapor-x5-ripped/",
    },
  ];

  const [products] = useState(productData);
  const [filteredProducts, setFilteredProducts] = useState(productData);
  const [filters, setFilters] = useState({
    category: "All",
    priceRange: [0, 20000],
    search: "",
  });
  const [cart, setCart] = useState([]);

  useEffect(() => {
    let filtered = products;

    if (filters.category !== "All") {
      filtered = filtered.filter(
        (product) => product.category === filters.category
      );
    }

    filtered = filtered.filter(
      (product) =>
        product.price >= filters.priceRange[0] &&
        product.price <= filters.priceRange[1]
    );

    if (filters.search.trim() !== "") {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [filters, products]);

  const handleCategoryChange = (e) => {
    setFilters((prev) => ({ ...prev, category: e.target.value }));
  };

  const handlePriceChange = (e, type) => {
    const value = parseFloat(e.target.value) || 0;
    setFilters((prev) => ({
      ...prev,
      priceRange:
        type === "min"
          ? [value, prev.priceRange[1]]
          : [prev.priceRange[0], value],
    }));
  };

  const handleSearchChange = (e) => {
    setFilters((prev) => ({ ...prev, search: e.target.value }));
  };

  const addToCart = (productId) => {
    setCart((prev) => {
      const updatedCart = [...prev, productId];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const handleBuyNow = (buyLink) => {
    window.open(buyLink, "_blank");
  };

  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header>
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Gym Supplements
            </h2>
            <p className="mt-4 max-w-md text-gray-500">
              Discover our premium range of gym supplements to help you achieve your
              fitness goals. Whether you're bulking, cutting, or just staying healthy,
              we have the products you need.
            </p>
          </header>

          <div className="mt-8 flex items-center justify-between">
            <select
              className="border-gray-300 h-10 rounded"
              onChange={handleCategoryChange}
              value={filters.category}
            >
              <option value="All">All Categories</option>
              <option value="Protein">Protein</option>
              <option value="Vitamins">Vitamins</option>
              <option value="Pre-Workout">Pre-Workout</option>
            </select>

            <div className="flex gap-4">
              <input
                type="number"
                placeholder="Min Price"
                className="border-gray-300 rounded"
                onChange={(e) => handlePriceChange(e, "min")}
                value={filters.priceRange[0]}
              />
              <input
                type="number"
                placeholder="Max Price"
                className="border-gray-300 rounded"
                onChange={(e) => handlePriceChange(e, "max")}
                value={filters.priceRange[1]}
              />
            </div>

            <input
              type="text"
              placeholder="Search products..."
              className="border-gray-300 h-10 rounded"
              onChange={handleSearchChange}
              value={filters.search}
            />
          </div>

          <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <li
                key={product._id}
                className="p-4 rounded-lg group block overflow-hidden border-2 border-transparent hover:border-teal-700/30"
              >
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />
                <div className="relative pt-5">
                  <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    {product.name}
                  </h3>
                  <p className="mt-2 font-bold">
                    <span className="tracking-wider text-gray-900">
                      ৳{product.price.toLocaleString()}
                    </span>
                  </p>
                  <div className="mt-4 flex gap-2">
                    <button
                      onClick={() => addToCart(product._id)}
                      className="px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700"
                    >
                      Add to Cart
                    </button>
                    <button
                      onClick={() => handleBuyNow(product.buyLink)}
                      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Shop;