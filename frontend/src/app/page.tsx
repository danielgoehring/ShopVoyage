"use client";

import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <main className="flex justify-center p-4">
        <ProductGrid />
      </main>
      {/* <Footer /> */}
    </div>
  );
}
