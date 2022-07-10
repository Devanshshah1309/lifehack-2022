import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import ProductGrid from "./ItemGrid";
import { db } from "../../firebase/config";
import { collection, doc, getDocs } from "firebase/firestore";
import { itemsArr } from "../../mockdata";

export default function Items() {
  const [items, setItems] = useState(itemsArr);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const getItems = async () => {
      const itemsSnapshot = await getDocs(collection(db, "items"));
      // const itemsList = itemsSnapshot.docs.map((doc) => doc.data());
      const itemList = itemsSnapshot.forEach((doc) => doc.data());
      setItems(itemsList);
    };
    getItems();
  }, []);

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
            !item.onTrade && (
              <ItemCard
                key={index}
                name={item.name}
                distance={item.distance}
                description={item.description}
                title={item.title}
                expiry={item.expiryDate
                  ?.toDate()
                  .toISOString()
                  .substring(0, 10)}
                imageUrl={item.photoURL}
                owner={item.owner}
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                onClick={() => setIsOpen(true)}
              />
            )
          );
        })}
      </ProductGrid>
    </Box>
  );
}
