const sampleData = [
    {
      id: 1,
      dishname: "Spicy Ramen",
      dishimage: 'assets\dishImages\avocado-toast.jpg',
      label: "hot",
      description: "A rich and flavorful bowl of spicy ramen topped with fresh vegetables, tender pork slices, and a perfectly boiled egg.",
      comments: [
        { id: 1, user: "Alice", text: "This ramen was incredible! The broth had so much depth, and the spice was just right for me.", rating: 5 },
        { id: 2, user: "Bob", text: "While the noodles were cooked perfectly, the spice level was too overwhelming for my palate.", rating: 3 },
      ],
    },
    {
      id: 2,
      dishname: "Caesar Salad",
      dishimage: "https://www.simplyrecipes.com/thmb/kA6RS5olfrvF3LSuRb9xksC-dwA=/2000x1500/filters:no_upscale()/Simply-Recipes-Classic-Caesar-Salad-LEAD-2-05b0c82baaf14ef9a6933e3c28b8c9fc.jpg",
      label: "cold",
      description: "A classic Caesar salad with crisp romaine lettuce, creamy Caesar dressing, Parmesan cheese, and crunchy croutons.",
      comments: [
        { id: 1, user: "Charlie", text: "I loved how fresh and crunchy the lettuce was. The croutons were perfectly seasoned too.", rating: 4 },
        { id: 2, user: "Daisy", text: "The salad was great, but I think the dressing could have been a bit tangier for my taste.", rating: 3 },
      ],
    },
    {
      id: 3,
      dishname: "BBQ Chicken Pizza",
      dishimage: "https://www.cookingclassy.com/wp-content/uploads/2014/05/bbq-chicken-pizza-2.jpg",
      label: "hot",
      description: "A delicious BBQ chicken pizza with smoky sauce, melted mozzarella cheese, red onions, and fresh cilantro.",
      comments: [
        { id: 1, user: "Eve", text: "The BBQ flavor was perfectly balanced, and the chicken was so tender. My new favorite pizza!", rating: 5 },
        { id: 2, user: "Frank", text: "Great flavor, but the crust was a little thicker than I prefer.", rating: 4 },
      ],
    },
    {
      id: 4,
      dishname: "Tropical Smoothie",
      dishimage: "https://www.acouplecooks.com/wp-content/uploads/2021/03/Tropical-Smoothie-002.jpg",
      label: "cold",
      description: "A refreshing smoothie made with mango, pineapple, banana, and a splash of coconut milk, perfect for hot days.",
      comments: [
        { id: 1, user: "Grace", text: "This smoothie transported me to a tropical island. The flavors were so vibrant and fresh.", rating: 5 },
        { id: 2, user: "Hank", text: "A bit too sweet for me, but I can see why others would love it. Very refreshing!", rating: 3 },
      ],
    },
    {
      id: 5,
      dishname: "Grilled Salmon",
      dishimage: "https://www.jessicagavin.com/wp-content/uploads/2020/02/grilled-salmon-10-1200.jpg",
      label: "hot",
      description: "Perfectly grilled salmon fillet served with a side of roasted asparagus and lemon butter sauce.",
      comments: [
        { id: 1, user: "Ivy", text: "The salmon was so flavorful and juicy. The lemon butter sauce took it to the next level.", rating: 5 },
        { id: 2, user: "Jack", text: "Great dish, but I felt the portion size was a bit small for the price.", rating: 4 },
      ],
    },
    {
      id: 6,
      dishname: "Avocado Toast",
      dishimage: "https://cookieandkate.com/images/2021/03/best-avocado-toast-recipe.jpg",
      label: "cold",
      description: "Creamy avocado spread on artisan bread, topped with chili flakes and a drizzle of olive oil.",
      comments: [
        { id: 1, user: "Karen", text: "This was the best avocado toast I've ever had! The chili flakes added the perfect kick.", rating: 5 },
        { id: 2, user: "Leo", text: "The toast was good, but I would have liked a bit more avocado for a richer taste.", rating: 3 },
      ],
    },
    {
      id: 7,
      dishname: "Tomato Basil Soup",
      dishimage: "https://www.spendwithpennies.com/wp-content/uploads/2021/09/Homemade-Tomato-Soup-5-SpendWithPennies-1.jpg",
      label: "hot",
      description: "A creamy tomato basil soup served with a side of buttery garlic bread.",
      comments: [
        { id: 1, user: "Mona", text: "The soup was so comforting and rich. The garlic bread was a perfect accompaniment.", rating: 4 },
        { id: 2, user: "Nate", text: "I enjoyed the flavors, but the soup could have been a bit thicker for my preference.", rating: 3 },
      ],
    },
    {
      id: 8,
      dishname: "Berry Parfait",
      dishimage: "https://assets.epicurious.com/photos/5c3fa1b2e94d19195e63ef57/16:9/w_2560%2Cc_limit/Berry-Yogurt-Parfait-17112018.jpg",
      label: "cold",
      description: "A delightful dessert layered with fresh berries, creamy yogurt, and crunchy granola.",
      comments: [
        { id: 1, user: "Olive", text: "The berries were so fresh, and the granola added a nice crunch. A healthy and delicious treat!", rating: 5 },
        { id: 2, user: "Paul", text: "I loved it, but I think a drizzle of honey would have made it even better.", rating: 4 },
      ],
    },
    {
      id: 9,
      dishname: "Veggie Stir-fry",
      dishimage: "https://www.loveandlemons.com/wp-content/uploads/2021/04/vegetable-stir-fry.jpg",
      label: "hot",
      description: "A colorful medley of stir-fried vegetables tossed in a savory soy-ginger sauce.",
      comments: [
        { id: 1, user: "Quinn", text: "The vegetables were cooked perfectly, and the sauce had a great balance of flavors.", rating: 5 },
        { id: 2, user: "Rita", text: "It was good, but a bit too salty for my taste.", rating: 3 },
      ],
    },
    {
      id: 10,
      dishname: "Iced Coffee",
      dishimage: "../",
      label: "cold",
      description: "A refreshing iced coffee with a splash of milk and a hint of vanilla.",
      comments: [
        { id: 1, user: "Sam", text: "The coffee was smooth and refreshing, perfect for a hot summer day.", rating: 5 },
        { id: 2, user: "Tina", text: "Good, but I prefer a stronger coffee flavor.", rating: 4 },
      ],
    },
  ];
  