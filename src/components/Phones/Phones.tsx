/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-console */
import React, { memo, useState, useEffect } from "react";
import { client } from "../../utils/fetchClient";
import "./Phones.scss";
import { PhoneMainInfo } from "../../types/PhoneMainInfo";
import { Card } from "../Card/Card";
import { Navigation } from "../Navigation/Navigation";
import { Pagination } from "../Pagination/Pagination";

export const getPhones = () => {
  return client.get<PhoneMainInfo[]>("phones");
};

export const Phones: React.FC = memo(() => {
  const [phones, setPhones] = useState<PhoneMainInfo[]>([]);
  const [sortOrder, setSortOrder] = useState("newest");
  const [currentPage, setCurrentPage] = useState(1);

  const phonesAmount = phones.length;

  console.log(phones.length);
  useEffect(() => {
    getPhones()
      .then(setPhones)
      .catch(() => {
        setPhones([]);
        // showError();
      });
  }, [phones.length]);

  const itemsPerPage = 16;
  const totalPages = Math.ceil(phonesAmount / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  function sortGoods(sortCondition: string) {
    const sortedPhones = [...phones];

    switch (sortCondition) {
      case "newest":
        sortedPhones.sort((a, b) => b.year - a.year);
        break;
      case "alphabetically":
        sortedPhones.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "cheapest":
        sortedPhones.sort((a, b) => a.price - b.price);
        break;
      default:
        break;
    }

    return sortedPhones;
  }

  const sortedPhones = sortGoods(sortOrder).slice(startIndex, endIndex);

  return (
    <>
      <div className="phones__top-actions">
        <Navigation />

        <h1 className="h1 phones__header">Mobile phones</h1>
        <p>{phonesAmount} models</p>

        <div className="phones__dropdowns">
          <p className="phones__dropdowns-label">Sort by</p>

          <select
            className="select"
            value={sortOrder}
            onChange={(event) => setSortOrder(event.target.value)}
          >
            <option className="option" value="newest">
              Newest
            </option>
            <option disabled></option>
            <option className="option" value="alphabetically">
              Alphabetically
            </option>
            <option disabled></option>
            <option className="option" value="cheapest">
              Cheapest
            </option>
          </select>
        </div>

        {/* <div className="phones__dropdowns">
        <p className="phones__dropdowns-label">Sort by</p>

        <select className="select" value={sortOrder} onChange={(event) => setSortOrder(event.target.value)}>
          <option className="option" value="newest">Newest</option>
          <option className="option" value="alphabetically">Alphabetically</option>
          <option className="option" value="cheapest">Cheapest</option>
        </select>
      </div> */}
      </div>

      <div className="phones__catalog">
        {sortedPhones.map((phone) => (
          <Card key={phone.id} phone={phone} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
});
