import Header from "@/components/Header/Header";
import { RegisterForm } from "@/components/Register/RegisterForm";
import Image from "next/image";

export default function Home() {
  return (
    <main>
     <Header/>
     <RegisterForm/>
    </main>
  );
}
