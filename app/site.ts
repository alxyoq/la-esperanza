export const site = {
  name: "La Esperanza",
  fullName: "La Esperanza Mexican Restaurant & Bar",
  tagline: "A taste of home, from our family to yours.",
  description:
    "Family-owned Mexican restaurant in Lindenwold, New Jersey serving home-cooked Mexican and Latin American specialties since 2002.",
  established: "2002",
  phoneDisplay: "(856) 782-7114",
  phoneHref: "+18567827114",
  email: "info@mexicanhope.com",
  cateringEmail: "Saul@mexicanhope.com",
  address: {
    street: "40 East Gibbsboro Road",
    city: "Lindenwold",
    state: "NJ",
    postalCode: "08021",
  },
  hours: [
    { label: "Monday", value: "Closed" },
    { label: "Tuesday–Thursday", value: "11:00 AM–9:00 PM" },
    { label: "Friday–Saturday", value: "11:00 AM–10:00 PM" },
    { label: "Sunday", value: "11:00 AM–8:00 PM" },
  ],
  social: {
    instagram: "https://www.instagram.com/mexicanhope/",
    facebook: "https://www.facebook.com/mexicanhope",
  },
  orderUrl:
    "https://www.grubhub.com/restaurant/la-esperanza-mexican-restaurant--bar-40-e-gibbsboro-rd-clementon/10888104",
  menuPdf:
    "https://mexicanhope.com/Our_Food_files/Take%20out%20menu2020.pdf",
  cateringPdf:
    "https://mexicanhope.com/Our_Food_files/FiestasdMenu.pdf",
} as const;

export const fullAddress = `${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.postalCode}`;

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  fullAddress,
)}`;

export const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  fullAddress,
)}&output=embed`;

export type MenuItem = {
  name: string;
  description: string;
  tags?: string[];
  featured?: boolean;
};

export type MenuSection = {
  id: string;
  label: string;
  eyebrow: string;
  description: string;
  items: MenuItem[];
};

export const menuSections: MenuSection[] = [
  {
    id: "favorites",
    label: "House Favorites",
    eyebrow: "Start here",
    description:
      "The dishes guests return for—from the Cordova family’s mole to the famously generous Fat Alex’s Burrito.",
    items: [
      {
        name: "Mole Poblano",
        description:
          "Chicken covered in the family’s traditional mole sauce and finished with roasted sesame seeds.",
        tags: ["Cordova family recipe"],
        featured: true,
      },
      {
        name: "Enchiladas de Mole Poblano",
        description:
          "Corn tortillas filled with cheese or meat, covered in mole poblano and garnished with cheese.",
        featured: true,
      },
      {
        name: "Fat Alex’s Burrito",
        description:
          "Tender steak wrapped with rice, beans, cheese and sour cream, then topped with melted cheese.",
        tags: ["Guest favorite"],
        featured: true,
      },
      {
        name: "Barbacoa",
        description:
          "Tender baked goat prepared with Pop’s special blend of herbs and spices.",
        tags: ["Traditional"],
      },
      {
        name: "Pipián Verde con Pollo",
        description:
          "Chicken served in a distinctive green pumpkin-seed sauce.",
      },
      {
        name: "Chile Relleno de Queso",
        description:
          "Roasted poblano pepper filled with cheese, fried in egg batter and covered with traditional chile relleno sauce.",
      },
    ],
  },
  {
    id: "antojitos",
    label: "Antojitos",
    eyebrow: "To share—or not",
    description:
      "Fresh, bright starters and handmade favorites for the table.",
    items: [
      {
        name: "Guacamole",
        description:
          "Fresh avocado, jalapeño, onion, cilantro and tomato, made and served in a molcajete.",
        tags: ["Vegetarian", "Made fresh"],
        featured: true,
      },
      {
        name: "Tamales",
        description:
          "Fresh homemade tamales—just like Mom makes, because she does. Choice of pork or chicken.",
      },
      {
        name: "Taquitos Fritos",
        description:
          "Hand-pulled seasoned chicken rolled in corn tortillas and fried, with lettuce, tomato, cheese and sour cream.",
      },
      {
        name: "Ensalada de Nopalitos",
        description:
          "Tender cactus strips seasoned with tomato, cilantro and onion.",
        tags: ["Vegetarian"],
      },
      {
        name: "Ceviche",
        description:
          "Shrimp with onion, tomato, cilantro and avocado in fresh lime juice with a dash of vinegar.",
      },
      {
        name: "Cóctel de Camarones",
        description:
          "Chilled shrimp, onion, tomato, cilantro and avocado in a lively cocktail sauce.",
      },
      {
        name: "Empanada",
        description:
          "A crisp fried pastry filled with stewed beef and potatoes.",
      },
      {
        name: "Tortilla Soup",
        description:
          "Crisp tortilla ribbons in a lightly spicy tomato broth.",
      },
    ],
  },
  {
    id: "combinations",
    label: "Combinations",
    eyebrow: "A little of everything",
    description:
      "House combinations pair La Esperanza favorites with rice and beans.",
    items: [
      {
        name: "Uno · Combo La Esperanza",
        description:
          "Chicken nachitos, taquitos fritos and a chicken quesadilla.",
      },
      {
        name: "Dos · Combo Puebla",
        description:
          "Chile relleno and enchilada de mole poblano with rice and beans.",
        featured: true,
      },
      {
        name: "Tres · Combo Vegetal",
        description:
          "Tostada con queso, taco de guacamole and enchilada de queso.",
        tags: ["Vegetarian"],
      },
      {
        name: "Cuatro · Combo Centro Americano",
        description: "Tender steak and garlic shrimp with rice and beans.",
      },
      {
        name: "Cinco · Combo Cinco de Mayo",
        description:
          "Cheese enchilada, chicken tostada and steak taco with rice and beans.",
      },
      {
        name: "Seis · Combo Gordo",
        description:
          "Fat Alex’s Burrito, steak taco and steak tostada for the serious appetite.",
      },
    ],
  },
  {
    id: "tacos-burritos",
    label: "Tacos & Burritos",
    eyebrow: "Wrapped with care",
    description:
      "Soft tacos and hearty burritos with choices for meat lovers and vegetarians.",
    items: [
      {
        name: "Tacos de Carne Asada",
        description: "Soft tacos filled with grilled steak.",
      },
      {
        name: "Tacos al Pastor",
        description: "Soft tacos filled with pork in chipotle sauce.",
      },
      {
        name: "Tacos de Pollo",
        description: "Soft tacos filled with grilled chicken.",
      },
      {
        name: "Tacos de Carnitas",
        description: "Soft tacos filled with slow-cooked, fried pork.",
      },
      {
        name: "Taco de Lengua",
        description: "Soft tacos with tender beef tongue.",
      },
      {
        name: "Tacos Vegetarianos",
        description: "Soft tacos with seasoned vegetables.",
        tags: ["Vegetarian"],
      },
      {
        name: "Burritos",
        description:
          "Choose steak, chicken, al pastor, carnitas, garlic shrimp, beans or seasoned vegetables.",
      },
    ],
  },
  {
    id: "fajitas",
    label: "Fajitas & Grill",
    eyebrow: "Sizzling from the kitchen",
    description:
      "Peppers, onions and tomatoes served hot with warm tortillas, rice and beans.",
    items: [
      {
        name: "Fajita de Lujo",
        description:
          "Steak, chicken, shrimp, zucchini, squash, onions, peppers, tomatoes and cheese.",
        featured: true,
      },
      {
        name: "Fajita Combinada",
        description: "Steak, chicken and shrimp with grilled vegetables.",
      },
      {
        name: "Fajita de Bistec",
        description: "Marinated steak with grilled peppers, onions and tomato.",
      },
      {
        name: "Fajita de Pechuga de Pollo",
        description:
          "Chicken breast with grilled peppers, onions and tomato.",
      },
      {
        name: "Fajita de Camarones",
        description: "Shrimp with grilled peppers, onions and tomato.",
      },
      {
        name: "Fajita Ranchera",
        description:
          "Fresh cactus strips cooked with onions, tomato, jalapeño and cheese.",
      },
      {
        name: "Fajita de Vegetales",
        description:
          "Zucchini, squash, peppers, onions and tomato smothered in cheese.",
        tags: ["Vegetarian"],
      },
    ],
  },
  {
    id: "mains",
    label: "Mains",
    eyebrow: "From land and sea",
    description:
      "Home-cooked meats, chicken, seafood and cactus dishes with bold regional flavor.",
    items: [
      {
        name: "Bistec a la Mexicana",
        description:
          "Marinated sliced steak with onion, jalapeño, tomato and cilantro in a spicy sauce.",
      },
      {
        name: "Bistec a la Criolla",
        description:
          "Grilled steak over sweet plantain with egg, avocado, rice and beans.",
      },
      {
        name: "Carnitas de Puerco",
        description:
          "Slow-cooked pork chunks fried to finish and served with rice and beans.",
      },
      {
        name: "Pechuga a la Mexicana",
        description:
          "Chicken breast with onion, jalapeño, tomato and cilantro in a spicy sauce.",
      },
      {
        name: "Pollo Salvadoreño",
        description:
          "Grilled chicken with seasoned onion, tomato and peppers, plus rice and beans.",
      },
      {
        name: "Camarones Enchilados",
        description:
          "Shrimp cooked with tomato, peppers and onions in chipotle salsa.",
      },
      {
        name: "Camarones al Mojo de Ajo",
        description:
          "Shrimp cooked in seasoned garlic sauce with rice and beans.",
      },
      {
        name: "Nopales a la Mexicana",
        description:
          "Fresh cactus, onion, tomato, jalapeño and cilantro in a spicy sauce.",
        tags: ["Vegetarian"],
      },
    ],
  },
  {
    id: "bar",
    label: "Bar & Desserts",
    eyebrow: "Salud",
    description:
      "Fresh margaritas, a deep tequila selection, beer, wine and a sweet finish.",
    items: [
      {
        name: "Original Fresh Margarita",
        description:
          "Fresh-squeezed lime, tequila and a touch of agave nectar.",
        featured: true,
      },
      {
        name: "Tequila",
        description:
          "A broad selection of blancos, reposados, añejos and extra añejos. Ask the bar for current pours.",
      },
      {
        name: "Cervezas & Vinos",
        description:
          "Mexican, domestic and local beers plus a selection of wines.",
      },
      {
        name: "El Imposible",
        description:
          "Chocolate cake and flan Napolitano together, finished with dulce de leche.",
      },
    ],
  },
];
