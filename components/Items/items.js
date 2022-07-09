import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import ProductGrid from "./ItemGrid";

const itemsArr = [
  {
    name: "Apples",
    expiry: "14/07/2022",
    distance: "1000m",
    title: "Apples rotting soon!",
    description:
      "A super long diwahdoiahdw dahwoidhwa dadw wdihwao dhawoidha wdaih oda",
    imageUrl: "/images/milk.jpg",
  },
  {
    name: "Apples",
    expiry: "14/07/2022",
    imageUrl: "/images/milk.jpg",
    distance: "1000m",
    title: "Apples rotting soon!",
    description:
      "A super long diwahdoiahdw dahwoidhwa dadw wdihwao dhawoidha wdaih oda",
  },
  {
    name: "Apples",
    expiry: "14/07/2022",
    imageUrl: "/images/milk.jpg",
    distance: "1000m",
    title: "Apples rotting soon!",
    description:
      "A super long diwahdoiahdw dahwoidhwa dadw wdihwao dhawoidha wdaih oda",
  },
  {
    imageUrl: "/images/milk.jpg",
    name: "Apples",
    expiry: "14/07/2022",
    distance: "1000m",
    title: "Apples rotting soon!",
    description:
      "A super long diwahdoiahdw dahwoidhwa dadw wdihwao dhawoidha wdaih oda",
  },
  {
    imageUrl: "/images/milk.jpg",
    name: "Apples",
    expiry: "14/07/2022",
    distance: "1000m",
    title: "Apples rotting soon!",
    description:
      "A super long diwahdoiahdw dahwoidhwa dadw wdihwao dhawoidha wdaih oda",
  },
  {
    name: "Apples",
    imageUrl: "/images/milk.jpg",
    expiry: "14/07/2022",
    distance: "1000m",
    title: "Apples rotting soon!",
    description:
      "A super long diwahdoiahdw dahwoidhwa dadw wdihwao dhawoidha wdaih oda",
  },
];

export default function Items() {
  const [items, setItems] = useState(itemsArr);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => setItems(itemsArr), []);

  console.log(items);

  return (
    <Box
      width="inherit"
      mx="auto"
      px={{ base: "4", md: "8", lg: "12" }}
      py={{ base: "6", md: "8", lg: "12" }}
    >
      <ProductGrid>
        {items.map((item, index) => {
          return (
            <ItemCard
              key={index}
              name={item.name}
              distance={item.distance}
              description={item.description}
              title={item.title}
              expiry={item.expiry}
              imageUrl={item.imageUrl}
              isOpen={isOpen}
              onClose={() => setIsOpen(false)}
              onClick={() => setIsOpen(true)}
            />
          );
        })}
      </ProductGrid>
    </Box>
  );
}
