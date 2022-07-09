import Footer from "../components/Footer";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";
import { useAuth } from "../context/AuthContext";
import WithSubnavigation from "../components/Navbar";

export default function Home() {
  const { user } = useAuth();
  const [email, setEmail] = useState(null);
  const [registered, setRegistered] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const getUserInformation = async () => {
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const userData = docSnap.data();
        setEmail(userData.email);
        setRegistered(
          userData.registeredAt.toDate().toISOString().substring(0, 10)
        );
      } else {
        console.log("This document does not exists");
      }
    };
    getUserInformation();
  }, []);

  return (
    <>
      <WithSubnavigation />
      <Footer />
    </>
  );
}
