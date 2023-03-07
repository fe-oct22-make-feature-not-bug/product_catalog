import React, { memo } from "react";
import { Banner } from "../Banner/Banner";
import "./Home.scss";

export const Home: React.FC = memo(() => {
  return (
    <main className="main">
      <h1 className="h1 home-header">Welcome to Nice Gadgets store!</h1>
      <Banner />
    </main>
  );
});
