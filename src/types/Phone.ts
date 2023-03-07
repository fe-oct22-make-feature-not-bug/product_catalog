export interface Phone {
  id: string;
  category: string;
  phoneId: string;
  itemId: string;
  name: string;
  priceRegular: string;
  priceDiscount: string;
  screen: string;
  capacity: string;
  color: string;
  camera: string;
  ram: string;
  year: number;
  images: string[];
  createdAt: string;
  namespaceId: string;
  processor: string;
  zoom: string;
  resolution: string;
}

// capacityAvailable  - ['64GB', '128GB', '256GB']

// cell ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE']

// colorsAvailable ['black', 'green', 'yellow', 'white', 'purple', 'red']

// description [{… }, {… }, {… }]

// images ['img/phones/apple-iphone-11/black/00.jpg', 'img/phones/apple-iphone-11/black/01.jpg', 'img/phones/apple-iphone-11/black/02.jpg', 'img/phones/apple-iphone-11/black/03.jpg', 'img/phones/apple-iphone-11/black/04.jpg']
