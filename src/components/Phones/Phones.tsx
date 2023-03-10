/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom"; 
import { client } from "../../utils/fetchClient";
import "./Phones.scss";
import { PhoneMainInfo } from "../../types/PhoneMainInfo";
import { Card } from "../Card/Card";
import Dropdown from "../Dropdown/Dropdown";
import { Navigation } from "../Navigation/Navigation";
import { Pagination } from "../Pagination/Pagination";

interface ApiResponse {
  items: PhoneMainInfo[];
  totalPages: number;
}

export const getPhones = (url: string) => {
  return client.get<ApiResponse>(url);
};

const sortOptions: string[] = ["Newest", "Cheapest", "Alphabetically"];
const amountOptions: string[] = ["16", "8", "4"];

export const Phones: React.FC = () => {
  const [phones, setPhones] = useState<PhoneMainInfo[]>([]);

  const [sortOrder, setSortOrder] = useState("Newest");
  const [cardsPerPage, setCardsPerPage] = useState("16");

  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams({ page: '1' });

  const toggleDropdown1 = () => setIsOpen1(!isOpen1);
  const toggleDropdown2 = () => setIsOpen2(!isOpen2);

  const phonesAmount = phones.length || 0;

  useEffect(() => {
    const page = searchParams.get('page') || '1';

    getPhones(`phones?page=${page}&items=${cardsPerPage}&sortBy=${sortOrder.toLowerCase()}`)
      .then((data) => {
        setPhones(data.items);
        setPageNumber(+data.totalPages);
      })
      .catch(() => {
        setPhones([]);
        // showError();
      });
  }, [phonesAmount, searchParams, currentPage, setSearchParams, sortOrder, cardsPerPage]);

  // const itemsPerPage = +cardsPerPage;
  // const totalPages = Math.ceil(phonesAmount / +itemsPerPage);
  // const startIndex = (currentPage - 1) * +itemsPerPage;
  // const endIndex = startIndex + itemsPerPage;

  // function sortGoods(sortCondition: string) {
  //   const sortedPhones = [...phones];

  //   switch (sortCondition) {
  //     case "Newest":
  //       sortedPhones.sort((a, b) => b.year - a.year);
  //       break;
  //     case "Alphabetically":
  //       sortedPhones.sort((a, b) => a.name.localeCompare(b.name));
  //       break;
  //     case "Cheapest":
  //       sortedPhones.sort((a, b) => a.price - b.price);
  //       break;
  //     default:
  //       break;
  //   }

  //   return sortedPhones;
  // }

  const sortedPhones = [...phones]; /* sortGoods(sortOrder).slice(startIndex, +endIndex); */

  return (
    <>
      <div className="phones__top-actions">
        <Navigation />

        <h1 className="h1 phones__header">Mobile phones</h1>
        <p className="phones__amount">{phonesAmount} models</p>

        <div className="phones__dropdowns">
          <div className="phones__dropdown">
            <p className="phones__dropdowns-label text-small">Sort by</p>

            <Dropdown
              onChange={setSortOrder}
              options={sortOptions}
              isOpen={isOpen1}
              toggleDropdown={toggleDropdown1}
            />
          </div>

          <div className="phones__dropdown">
            <p className="phones__dropdowns-label text-small">Items on page</p>

            <Dropdown
              onChange={setCardsPerPage}
              options={amountOptions}
              isOpen={isOpen2}
              toggleDropdown={toggleDropdown2}
            />
          </div>
        </div>
      </div>

      <div className="phones__catalog">
        {sortedPhones.map((phone) => (
          <Card key={phone.id} phone={phone} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={pageNumber}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};
