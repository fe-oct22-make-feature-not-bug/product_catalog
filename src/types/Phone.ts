export interface Phone {
  id: string;
  category: string;
  capacityAvailable: string[];
  phoneId: string;
  itemId: string;
  name: string;
  description: About[];
  priceRegular: string;
  priceDiscount: string;
  screen: string;
  capacity: string;
  color: string;
  cell: string[];
  camera: string;
  ram: string;
  year: number;
  images: string[];
  createdAt: string;
  namespaceId: string;
  processor: string;
  zoom: string;
  resolution: string;
  colorsAvailable: string[];
  quantity: number;
}

type About = {
  title: string;
  text: string[];
};
