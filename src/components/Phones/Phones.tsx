import React, { memo, useState, useEffect } from "react";
import { client } from "../../utils/fetchClient";
import "./Phones.scss";
import { Phone } from "../../types/Phone";
import { Card } from "../Card/Card";

export const getPhones = () => {
  return client.get<Phone[]>("phones");
};

type Props ={
  showPhoneDetails: boolean;
  handleClick: (newValue: boolean) => void;
};

export const Phones: React.FC<Props> = memo(({showPhoneDetails, handleClick}: Props) => {
  const [phones, setPhones] = useState<Phone[]>([]);

  useEffect(() => {
    getPhones()
      .then(setPhones)
      .catch(() => {
        setPhones([]);
        // showError();
      });
  }, [phones.length]);

  return (
    <div className="phone__catalog">
      {phones.map((phone) => (
        <Card phone={phone} showPhoneDetails={showPhoneDetails} handleClick={handleClick}/>
      ))}
    </div>
  );
});
