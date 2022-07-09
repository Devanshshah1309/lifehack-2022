import { SimpleGrid } from "@chakra-ui/react";
import ItemCard from "./ItemCard";
export default function Items(items) {
  // const img = require("../assets/fruits.jpeg");
  // get all available items from the firebase (render them in the following way)
  items = [
    {
      name: "Apples",
      expiry: "14/07/2022",
      distance: "1000m",
    },
    {
      name: "Apples",
      expiry: "14/07/2022",
      distance: "1000m",
    },
    {
      name: "Apples",
      expiry: "14/07/2022",
      distance: "1000m",
    },
    {
      name: "Apples",
      expiry: "14/07/2022",
      distance: "1000m",
    },
    {
      name: "Apples",
      expiry: "14/07/2022",
      distance: "1000m",
    },
    {
      name: "Apples",
      expiry: "14/07/2022",
      distance: "1000m",
    },
  ];
  return (
    <SimpleGrid columns={3} spacing={3}>
      {items.map((item, index) => (
        <ItemCard
          key={index}
          name={item.name}
          distance={item.distance}
          expiry={item.expiry}
        />
      ))}
    </SimpleGrid>
  );
}
