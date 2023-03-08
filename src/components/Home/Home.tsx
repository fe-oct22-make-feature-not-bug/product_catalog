import React, { memo } from "react";
import { Banner } from "../Banner/Banner";
import { NewModelLayout } from "../NewModelLayout/NewModelLayout"; 
import { PageSection } from "../PageSection/PageSection";
import { Categories } from "../Categories/Categories";
import "./Home.scss";

export const Home: React.FC = memo(() => {
  return (
    <main className="main">
      <h1 className="h1 home-header">Welcome to Nice Gadgets store!</h1>
      <Banner />
      <div className="home-container">
        <PageSection sectionTitle="Brand new models">
          <NewModelLayout />
        </PageSection>

        <PageSection sectionTitle="Shop by category">
          <Categories />
        </PageSection>

        <PageSection sectionTitle="Hot prices">
          <NewModelLayout />
        </PageSection>
      </div>
    </main>
  );
});
