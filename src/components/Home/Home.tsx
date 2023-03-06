import React, { memo } from "react";
import { Banner } from "../Banner/Banner";
import "./Home.scss";

export const Home: React.FC = memo(() => {
  return (
    <main className="main">
      
      <Banner />
    </main>
  );
});
