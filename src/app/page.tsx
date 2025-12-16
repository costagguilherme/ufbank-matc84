// app/page.tsx
"use client";


import { Header } from "../components/organism/Header";
import { Hero } from "../components/organism/Hero";
import { Features } from "../components/organism/Features";
import { CTA } from "../components/organism/CTA";
import { Contact } from "../components/organism/Contact";
import { Footer } from "../components/organism/Footer";


export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}