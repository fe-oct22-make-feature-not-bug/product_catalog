import React from "react";
import "./PageSection.scss";

interface Props {
  sectionTitle: string;
  children: React.ReactNode;
}

export const PageSection: React.FC<Props> = ({ sectionTitle, children }) => {
  return (
    <section className="section">
      <h1 className="section-title h2">{sectionTitle}</h1>
      {children}
    </section>
  );
};
