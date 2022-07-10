import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import ProductGrid from "./ItemGrid";
import { db } from "../../firebase/config";
import { collection, query, where, getDocs, doc } from "firebase/firestore";
import { itemsArr } from "../../mockdata";
import { useAuth } from "../../context/AuthContext";

export default function MyItems() {
  const [items, setItems] = useState(itemsArr);
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    const getUserItems = async () => {
      const userDocRef = doc(db, "users", user?.uid);
      const q = query(
        collection(db, "items"),
        where("owner", "==", userDocRef)
      );
      const querySnapshot = await getDocs(q);
      const itemsList = querySnapshot.docs.map((doc) => doc.data());
      setItems(itemsList);
    };
    getUserItems();
  }, [user]);

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
