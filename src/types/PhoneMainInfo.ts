export interface PhoneMainInfo {
  id: string;
  category: string;
  phoneId: string;
  itemId: string;
  name: string;
  priceRegular: number;
  priceDiscount: number;
  screen: string;
  capacity: string;
  color: string;
  ram: string;
  year: number;
  image: string;
  createdAt: Date;
  quantity: number; //
  inCart: boolean | undefined; //
}
