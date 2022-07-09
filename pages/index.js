import Footer from "../components/Footer";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";
import { useAuth } from "../context/AuthContext";
import WithSubnavigation from "../components/Navbar";

export default function Home() {
  return (
    <>
      <WithSubnavigation />
      <Footer />
    </>
  );
}
