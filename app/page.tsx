import Image from "next/image";
import Hello from "./components/hello";

export default function Home() {
  console.log("Where am I? Server or Client?");
  return (
    <>
      <Hello/>
      <h1 className="text-3xl">Welcome to Next.js</h1>
    </>
      
  );
}
