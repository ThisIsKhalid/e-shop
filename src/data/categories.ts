export const categories = [
  {
    id: 1,
    name: "Food",
    icon: "sun",
    subCategories: [
      {
        id: 11,
        name: "Fruits & Vegetables",
        subSubCategories: [
          {
            id: 111,
            name: "Fruits",
          },
          {
            id: 112,
            name: "Vegetables",
          },
        ],
      },
      {
        id: 12,
        name: "Meat & Fish",
        subSubCategories: [
          {
            id: 121,
            name: "Meat",
          },
          {
            id: 122,
            name: "Fish",
          },
        ],
      },
      {
        id: 13,
        name: "Dairy",
        subSubCategories: [
          {
            id: 131,
            name: "Milk",
          },
          {
            id: 132,
            name: "Cheese",
          },
        ],
      },
    ],
  },

  {
    id: 2,
    name: "Popular",
    icon: "fire",
  },
  {
    id: 3,
    name: "Personal Care",
    icon: "heart",
    subCategories: [
      {
        id: 31,
        name: "Skin Care",
        subSubCategories: [
          {
            id: 311,
            name: "Face",
          },
          {
            id: 312,
            name: "Body",
          },
        ],
      },
      {
        id: 32,
        name: "Hair Care",
        subSubCategories: [
          {
            id: 321,
            name: "Shampoo",
          },
          {
            id: 322,
            name: "Conditioner",
          },
        ],
      },
    ],
  },
];
