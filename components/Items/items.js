import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import ProductGrid from "./ItemGrid";
import { db } from "../../firebase/config";
import { collection, getDocs } from "firebase/firestore";
import { itemsArr } from "../../mockdata";
import { useSelector } from "react-redux";

export default function Items() {
  const [items, setItems] = useState(itemsArr);
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    const getItems = async () => {
      const itemsSnapshot = await getDocs(collection(db, "items"));
      const itemsList = itemsSnapshot.docs.map((doc) => doc.data());
      itemsSnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
      });
      setItems(itemsList);
    };
    getItems();
  }, []);

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
              address={user?.address}
              description={item.description}
              title={item.title}
              expiry={item.expiryDate?.toDate().toISOString().substring(0, 10)}
              imageUrl={item.photoURL}
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
