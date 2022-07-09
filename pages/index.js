import Head from "next/head";
import Image from "next/image";
import Example from "../components/Example";
import styles from "../styles/Home.module.css";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Example />
      <Footer />
    </div>
  );
}
