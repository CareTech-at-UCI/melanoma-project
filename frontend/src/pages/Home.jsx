import React from "react";
import { Hero } from "../components/home/Hero";
import { WhyWeMatter } from "../components/home/WhyWeMatter";
import { HowProjectBuilt } from "../components/home/HowProjectBuilt";

export const Home = () => {
  return (
    // Base styling for the page container
    <main className="font-gantari bg-background-beige">
      <Hero />
      <WhyWeMatter />
      <HowProjectBuilt />
    </main>
  );
};
