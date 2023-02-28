import React from "react";
import Page404 from '../../public/images/404.png';
import './PageNotFound.scss';

export const PageNotFound: React.FC = () => {
  return (
    <section className="pageNotFound">
      <h1 hidden>Page Not Found</h1>
      <img
        className="pageNotFound__image"
        src={Page404}
        alt="Page Not Found"
      />
    </section>
    
)
}