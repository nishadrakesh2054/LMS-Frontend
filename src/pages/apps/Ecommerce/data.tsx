import product1 from "../../../assets/images/products/product-1.png";
import product2 from "../../../assets/images/products/product-2.png";
import product3 from "../../../assets/images/products/product-3.png";
import product4 from "../../../assets/images/products/product-4.png";
import product5 from "../../../assets/images/products/product-5.png";
import product6 from "../../../assets/images/products/product-6.png";
import product7 from "../../../assets/images/products/product-7.png";
import product8 from "../../../assets/images/products/product-8.png";

export interface ProductItemTypes {
  id: number;
  name: string;
  image: string;
  rating: number;
  price: number;
  quantity: number;
  status: boolean;
}

interface CustomersItemTypes {
  id: number;
  name: string;
  phone: string;
  balance: string;
  orders: number;
  last_order: {
    date: string;
    time: string;
  };
  avatar: string;
  status: string;
}

interface StudentItemTypes {
  roll: number;
  name: string;
  phone: string;
  age: number;
  dob: string;
  grade: string;
  gender: string;
  avatar: string;
}

interface SellersItemTypes {
  id: number;
  name: string;
  store: string;
  ratings: number;
  products: number;
  balance: string;
  created_on: string;
  revenue: string;
  image: string;
}

const products: ProductItemTypes[] = [
  {
    id: 1,
    name: "Men's sport T-shirt",
    image: product1,
    rating: 3,
    price: 39,
    quantity: 98,
    status: true,
  },
  {
    id: 2,
    name: "Jack & Jones Men's T-shirt (Red)",
    image: product2,
    rating: 2,
    price: 98,
    quantity: 23,
    status: true,
  },
  {
    id: 3,
    name: "Women's Marron Tshirt",
    image: product3,
    rating: 5,
    price: 49,
    quantity: 235,
    status: true,
  },
  {
    id: 4,
    name: "Jack & Jones Men's T-shirt (Sky Blue)",
    image: product4,
    rating: 3,
    price: 29,
    quantity: 385,
    status: false,
  },
  {
    id: 5,
    name: "Soft Green Tshirt",
    image: product5,
    rating: 4,
    price: 49,
    quantity: 25,
    status: false,
  },
  {
    id: 6,
    name: "Jack & Jones Men's Jacket",
    image: product6,
    rating: 5,
    price: 19,
    quantity: 19,
    status: true,
  },
  {
    id: 7,
    name: "Women's Soft Green Tshirt",
    image: product7,
    rating: 5,
    price: 99,
    quantity: 36,
    status: false,
  },
  {
    id: 8,
    name: "Roadster Long Sleeves T-shirt",
    image: product8,
    rating: 1,
    price: 29,
    quantity: 128,
    status: true,
  },
];

const customers: CustomersItemTypes[] = [
  {
    id: 1,
    name: "Paul J. Friend",
    phone: "050 414 8778",
    balance: "$12,874.82",
    orders: 43,
    last_order: {
      date: "August 05 2019",
      time: "10:29 PM",
    },
    avatar: "https://robohash.org/laborevoluptateeaque.png?size=60x60&set=set1",
    status: "Active",
  },
  {
    id: 2,
    name: "Bryan J. Luellen",
    phone: "215-302-3376",
    balance: "$874.25",
    orders: 220,
    last_order: {
      date: "August 04 2019",
      time: "08:18 AM",
    },
    avatar:
      "https://robohash.org/voluptatemeligendisint.png?size=60x60&set=set1",
    status: "Active",
  },
  {
    id: 3,
    name: "Kathryn S. Collier",
    phone: "828-216-2190",
    balance: "$125.78",
    orders: 841,
    last_order: {
      date: "November 04 2019",
      time: "10:29 PM",
    },
    avatar: "https://robohash.org/etidsapiente.png?size=60x60&set=set1",
    status: "Blocked",
  },
  {
    id: 4,
    name: "Timothy Kauper",
    phone: "(216) 75 612 706",
    balance: "$561.25",
    orders: 62,
    last_order: {
      date: "February 01 2019",
      time: "07:22 AM",
    },
    avatar: "https://robohash.org/pariaturharumquas.png?size=60x60&set=set1",
    status: "Blocked",
  },
  {
    id: 5,
    name: "Zara Raws",
    phone: "(02) 75 150 655",
    balance: "$2147.84",
    orders: 9,
    last_order: {
      date: "February 01 2019",
      time: "07:22 AM",
    },
    avatar: "https://robohash.org/quodfugiatquae.png?size=60x60&set=set1",
    status: "Active",
  },
  {
    id: 6,
    name: "Annette P. Kelsch",
    phone: "(+15) 73 483 758",
    balance: "$451.28",
    orders: 25,
    last_order: {
      date: "September 07 2019",
      time: "07:22 AM",
    },
    avatar: "https://robohash.org/sapientenonomnis.png?size=60x60&set=set1",
    status: "Active",
  },
  {
    id: 7,
    name: "Jenny C. Gero",
    phone: "078 7173 9261",
    balance: "$965.20",
    orders: 214,
    last_order: {
      date: "November 14 2019",
      time: "07:22 AM",
    },
    avatar: "https://robohash.org/autvelitest.png?size=60x60&set=set1",
    status: "Blocked",
  },
  {
    id: 8,
    name: "Edward Roseby",
    phone: "078 6013 3854",
    balance: "$71584.2",
    orders: 365,
    last_order: {
      date: "February 09 2019",
      time: "07:22 AM",
    },
    avatar: "https://robohash.org/exsuscipitcorporis.png?size=60x60&set=set1",
    status: "Active",
  },
  {
    id: 9,
    name: "Anna Ciantar",
    phone: "(216) 76 298 896",
    balance: "$5482.00",
    orders: 921,
    last_order: {
      date: "September 12 2019",
      time: "07:22 AM",
    },
    avatar: "https://robohash.org/consectetureiuset.png?size=60x60&set=set1",
    status: "Active",
  },
  {
    id: 10,
    name: "Dean Smithies",
    phone: "077 6157 4248",
    balance: "$482.15",
    orders: 68,
    last_order: {
      date: "October 09 2019",
      time: "07:22 AM",
    },
    avatar: "https://robohash.org/aspernaturlaborumab.png?size=60x60&set=set1",
    status: "Active",
  },
  {
    id: 11,
    name: "Labeeb Ghali",
    phone: "050 414 8778",
    balance: "$7852.3",
    orders: 475,
    last_order: {
      date: "October 27 2019",
      time: "07:22 AM",
    },
    avatar: "https://robohash.org/veroinciduntfacere.png?size=60x60&set=set1",
    status: "Active",
  },
  {
    id: 12,
    name: "Rory Seekamp",
    phone: "078 5054 8877",
    balance: "$3365.12",
    orders: 25,
    last_order: {
      date: "April 21 2019",
      time: "07:22 AM",
    },
    avatar:
      "https://robohash.org/cumvoluptatibusreprehenderit.png?size=60x60&set=set1",
    status: "Blocked",
  },
];

const sellers: SellersItemTypes[] = [
  {
    id: 1,
    name: "Hayward Billo",
    store: "Boehm-Cremin",
    ratings: 4.9,
    products: 747,
    balance: "$1621.73",
    created_on: "07/18/2019",
    revenue: "$258.26k",
    image: "https://robohash.org/voluptateesseaut.png?size=100x100&set=set1",
  },
  {
    id: 2,
    name: "Adler Villa",
    store: "Hettinger, Shields and Pollich",
    ratings: 3.5,
    products: 883,
    balance: "$20343.72",
    created_on: "07/03/2019",
    revenue: "$152.3k",
    image: "https://robohash.org/pariaturfacilisrem.png?size=100x100&set=set1",
  },
  {
    id: 3,
    name: "Janna MacFayden",
    store: "Fay, Batz and O'Conner",
    ratings: 4.1,
    products: 579,
    balance: "$29121.64",
    created_on: "07/11/2019",
    revenue: "$178.6k",
    image: "https://robohash.org/laborehicvitae.png?size=100x100&set=set1",
  },
  {
    id: 4,
    name: "Ludovika Ryle",
    store: "Adams, Schuppe and Daugherty",
    ratings: 4.9,
    products: 353,
    balance: "$49595.04",
    created_on: "07/12/2019",
    revenue: "$368.2k",
    image:
      "https://robohash.org/laboriosamvoluptatemet.png?size=100x100&set=set1",
  },
  {
    id: 5,
    name: "Jamal Stopper",
    store: "Dooley-Koss",
    ratings: 5.0,
    products: 662,
    balance: "$42698.10",
    created_on: "07/02/2019",
    revenue: "$89.5k",
    image: "https://robohash.org/repellatdelenitinon.png?size=100x100&set=set1",
  },
  {
    id: 6,
    name: "Ralf Orcott",
    store: "Renner Group",
    ratings: 4.0,
    products: 453,
    balance: "$9943.45",
    created_on: "07/24/2019",
    revenue: "$597.8k",
    image: "https://robohash.org/delectusquodquo.png?size=100x100&set=set1",
  },
  {
    id: 7,
    name: "Bevin Weatherhogg",
    store: "Feil-McDermott",
    ratings: 2.6,
    products: 801,
    balance: "$8067.89",
    created_on: "07/25/2019",
    revenue: "$29.3k",
    image: "https://robohash.org/ipsaestad.png?size=100x100&set=set1",
  },
  {
    id: 8,
    name: "Emalia Oglevie",
    store: "Schaefer and Sons",
    ratings: 4.0,
    products: 280,
    balance: "$43724.29",
    created_on: "07/28/2019",
    revenue: "$48.6k",
    image:
      "https://robohash.org/reprehenderitofficiisqui.png?size=100x100&set=set1",
  },
  {
    id: 9,
    name: "Shelley Tyrer",
    store: "Dooley-Lind",
    ratings: 4.3,
    products: 619,
    balance: "$3242.86",
    created_on: "07/16/2019",
    revenue: "$12.1k",
    image: "https://robohash.org/expeditadictaitaque.png?size=100x100&set=set1",
  },
  {
    id: 10,
    name: "Faustine Swine",
    store: "Ledner Inc",
    ratings: 5.0,
    products: 829,
    balance: "$32115.41",
    created_on: "07/16/2019",
    revenue: "$78.2k",
    image: "https://robohash.org/laboreetnisi.png?size=100x100&set=set1",
  },
  {
    id: 11,
    name: "Jilly Gladstone",
    store: "Kuphal, Bartell and Marquardt",
    ratings: 2.7,
    products: 546,
    balance: "$10625.78",
    created_on: "07/05/2019",
    revenue: "$121",
    image:
      "https://robohash.org/velnecessitatibusofficiis.png?size=100x100&set=set1",
  },
  {
    id: 12,
    name: "Erwin Malin",
    store: "Marquardt, Littel and Kuhn",
    ratings: 4.9,
    products: 668,
    balance: "$24499.65",
    created_on: "07/29/2019",
    revenue: "$78.2k",
    image:
      "https://robohash.org/quiperspiciatismollitia.png?size=100x100&set=set1",
  },
  {
    id: 13,
    name: "Nancey Whelan",
    store: "Shields, Wunsch and Becker",
    ratings: 4.8,
    products: 579,
    balance: "$36498.86",
    created_on: "07/09/2019",
    revenue: "$258.26k",
    image: "https://robohash.org/sequicumqueeos.png?size=100x100&set=set1",
  },
  {
    id: 14,
    name: "Riva Henighan",
    store: "Hayes-Nicolas",
    ratings: 3.7,
    products: 719,
    balance: "$11551.96",
    created_on: "07/08/2019",
    revenue: "$152.3k",
    image: "https://robohash.org/etadfuga.png?size=100x100&set=set1",
  },
  {
    id: 15,
    name: "Patience Topling",
    store: "Gerlach, Mayert and Hirthe",
    ratings: 4.6,
    products: 501,
    balance: "$30146.93",
    created_on: "07/26/2019",
    revenue: "$178.6k",
    image: "https://robohash.org/fugiataperferendis.png?size=100x100&set=set1",
  },
  {
    id: 16,
    name: "Rahal Syseland",
    store: "Zieme, Boehm and Kshlerin",
    ratings: 4.9,
    products: 693,
    balance: "$7211.03",
    created_on: "07/24/2019",
    revenue: "$368.2k",
    image: "https://robohash.org/minusquoeos.png?size=100x100&set=set1",
  },
  {
    id: 17,
    name: "Isabel Seamen",
    store: "Dickens-Orn",
    ratings: 3.5,
    products: 153,
    balance: "$34067.95",
    created_on: "07/27/2019",
    revenue: "$89.5k",
    image: "https://robohash.org/enimnequeexplicabo.png?size=100x100&set=set1",
  },
  {
    id: 18,
    name: "Shermy Meas",
    store: "Roob, Jerde and Lynch",
    ratings: 4.1,
    products: 805,
    balance: "$20601.07",
    created_on: "07/04/2019",
    revenue: "$597.8k",
    image:
      "https://robohash.org/corporisetrecusandae.png?size=100x100&set=set1",
  },
  {
    id: 19,
    name: "Eartha Giotto",
    store: "Rodriguez, Hyatt and Sanford",
    ratings: 2.8,
    products: 426,
    balance: "$25690.56",
    created_on: "07/15/2019",
    revenue: "$29.3k",
    image: "https://robohash.org/omnisessenon.png?size=100x100&set=set1",
  },
  {
    id: 20,
    name: "Wenona Lightowlers",
    store: "Goodwin, Rempel and MacGyver",
    ratings: 5.0,
    products: 706,
    balance: "$22481.32",
    created_on: "07/09/2019",
    revenue: "$48.6k",
    image: "https://robohash.org/impeditaiste.png?size=100x100&set=set1",
  },
  {
    id: 21,
    name: "Silvano Milne",
    store: "Kshlerin-Tillman",
    ratings: 4.0,
    products: 461,
    balance: "$45809.60",
    created_on: "07/14/2019",
    revenue: "$12.1k",
    image:
      "https://robohash.org/voluptasperspiciatisrem.png?size=100x100&set=set1",
  },
  {
    id: 22,
    name: "Mal Stendell",
    store: "Kunze-Fritsch",
    ratings: 5.0,
    products: 361,
    balance: "$1277.01",
    created_on: "07/02/2019",
    revenue: "$78.2k",
    image: "https://robohash.org/autdolorvero.png?size=100x100&set=set1",
  },
  {
    id: 23,
    name: "Annora McGilleghole",
    store: "Toy, Stamm and Crona",
    ratings: 4.0,
    products: 326,
    balance: "$37087.49",
    created_on: "07/20/2019",
    revenue: "$121",
    image: "https://robohash.org/sunteligendiamet.png?size=100x100&set=set1",
  },
  {
    id: 24,
    name: "Odey Lemanu",
    store: "Parker Inc",
    ratings: 4.3,
    products: 134,
    balance: "$35535.66",
    created_on: "07/09/2019",
    revenue: "$78.2k",
    image:
      "https://robohash.org/dolorumrepellatvelit.png?size=100x100&set=set1",
  },
  {
    id: 25,
    name: "Maximo Vear",
    store: "Hintz, Schumm and Gleichner",
    ratings: 5.0,
    products: 481,
    balance: "$12509.21",
    created_on: "07/13/2019",
    revenue: "$258.26k",
    image:
      "https://robohash.org/etdoloremconsequatur.png?size=100x100&set=set1",
  },
  {
    id: 26,
    name: "Lila Blazy",
    store: "Wintheiser, Kulas and Waelchi",
    ratings: 2.7,
    products: 126,
    balance: "$33284.96",
    created_on: "07/08/2019",
    revenue: "$152.3k",
    image: "https://robohash.org/etdoloremad.png?size=100x100&set=set1",
  },
  {
    id: 27,
    name: "Felic Bake",
    store: "Stehr Inc",
    ratings: 4.9,
    products: 544,
    balance: "$7772.79",
    created_on: "07/29/2019",
    revenue: "$178.6k",
    image: "https://robohash.org/voluptatemestat.png?size=100x100&set=set1",
  },
  {
    id: 28,
    name: "Brietta Gogarty",
    store: "Bartell, Gislason and Shields",
    ratings: 4.8,
    products: 381,
    balance: "$40363.11",
    created_on: "07/05/2019",
    revenue: "$368.2k",
    image: "https://robohash.org/nonexplicaboveniam.png?size=100x100&set=set1",
  },
  {
    id: 29,
    name: "Courtney Dellenbrook",
    store: "Vandervort-Ritchie",
    ratings: 3.7,
    products: 611,
    balance: "$45479.53",
    created_on: "07/23/2019",
    revenue: "$89.5k",
    image: "https://robohash.org/illumautnam.png?size=100x100&set=set1",
  },
  {
    id: 30,
    name: "Lauryn Foucar",
    store: "Treutel, Heidenreich and Boehm",
    ratings: 4.6,
    products: 227,
    balance: "$47753.18",
    created_on: "07/08/2019",
    revenue: "$597.8k",
    image: "https://robohash.org/suntillodolores.png?size=100x100&set=set1",
  },
  {
    id: 31,
    name: "Deeann Jennemann",
    store: "Will-Dicki",
    ratings: 4.9,
    products: 501,
    balance: "$3064.35",
    created_on: "07/06/2019",
    revenue: "$29.3k",
    image:
      "https://robohash.org/remplaceatreiciendis.png?size=100x100&set=set1",
  },
  {
    id: 32,
    name: "Nixie Merrilees",
    store: "Nolan-Marvin",
    ratings: 3.5,
    products: 185,
    balance: "$37305.56",
    created_on: "07/19/2019",
    revenue: "$48.6k",
    image: "https://robohash.org/temporedoloresenim.png?size=100x100&set=set1",
  },
  {
    id: 33,
    name: "Daisi Corss",
    store: "Monahan, Nikolaus and Lueilwitz",
    ratings: 4.1,
    products: 610,
    balance: "$22613.61",
    created_on: "07/25/2019",
    revenue: "$12.1k",
    image: "https://robohash.org/aperiamrerumest.png?size=100x100&set=set1",
  },
  {
    id: 34,
    name: "Reynard Pledge",
    store: "Marquardt Group",
    ratings: 4.9,
    products: 213,
    balance: "$15564.63",
    created_on: "07/26/2019",
    revenue: "$78.2k",
    image:
      "https://robohash.org/doloribusrationeodit.png?size=100x100&set=set1",
  },
  {
    id: 35,
    name: "Peirce MacTimpany",
    store: "Zieme and Sons",
    ratings: 5.0,
    products: 574,
    balance: "$2227.09",
    created_on: "07/12/2019",
    revenue: "$121",
    image: "https://robohash.org/solutaautnam.png?size=100x100&set=set1",
  },
  {
    id: 36,
    name: "Ingaborg Grelka",
    store: "Bergnaum, Miller and Grimes",
    ratings: 4.0,
    products: 225,
    balance: "$11645.39",
    created_on: "07/08/2019",
    revenue: "$78.2k",
    image:
      "https://robohash.org/possimusdoloremducimus.png?size=100x100&set=set1",
  },
  {
    id: 37,
    name: "Johan Yeeles",
    store: "Kovacek-Bogan",
    ratings: 5.0,
    products: 535,
    balance: "$7310.28",
    created_on: "07/29/2019",
    revenue: "$258.26k",
    image: "https://robohash.org/sitassumendaaliquam.png?size=100x100&set=set1",
  },
  {
    id: 38,
    name: "Tarrance Kulver",
    store: "Smith, Roob and Schultz",
    ratings: 4.0,
    products: 798,
    balance: "$13193.06",
    created_on: "07/23/2019",
    revenue: "$152.3k",
    image:
      "https://robohash.org/aspernaturvoluptasaut.png?size=100x100&set=set1",
  },
  {
    id: 39,
    name: "Sharleen Tustin",
    store: "Leuschke, Willms and Simonis",
    ratings: 4.3,
    products: 447,
    balance: "$2827.36",
    created_on: "07/29/2019",
    revenue: "$178.6k",
    image: "https://robohash.org/maioresmollitiaiure.png?size=100x100&set=set1",
  },
  {
    id: 40,
    name: "Natal Jacobowits",
    store: "Rodriguez-Heathcote",
    ratings: 5.0,
    products: 216,
    balance: "$31236.57",
    created_on: "07/25/2019",
    revenue: "$368.2k",
    image: "https://robohash.org/etrepellendusquia.png?size=100x100&set=set1",
  },
  {
    id: 41,
    name: "Loraine De Moreno",
    store: "Schuppe-MacGyver",
    ratings: 2.7,
    products: 257,
    balance: "$40410.89",
    created_on: "07/01/2019",
    revenue: "$89.5k",
    image: "https://robohash.org/nostrumesseunde.png?size=100x100&set=set1",
  },
  {
    id: 42,
    name: "Hermann Quin",
    store: "O'Reilly, Berge and Goyette",
    ratings: 4.9,
    products: 616,
    balance: "$22091.40",
    created_on: "07/24/2019",
    revenue: "$597.8k",
    image:
      "https://robohash.org/temporedoloreoccaecati.png?size=100x100&set=set1",
  },
  {
    id: 43,
    name: "Skippie Hawton",
    store: "Ruecker-Jenkins",
    ratings: 4.8,
    products: 648,
    balance: "$22037.81",
    created_on: "07/11/2019",
    revenue: "$29.3k",
    image: "https://robohash.org/doloremqueistealias.png?size=100x100&set=set1",
  },
  {
    id: 44,
    name: "Charlena Filipponi",
    store: "Dietrich-Treutel",
    ratings: 3.7,
    products: 896,
    balance: "$1560.22",
    created_on: "07/03/2019",
    revenue: "$48.6k",
    image: "https://robohash.org/molestiaevelanimi.png?size=100x100&set=set1",
  },
  {
    id: 45,
    name: "Titus Whorf",
    store: "Beahan and Sons",
    ratings: 4.6,
    products: 458,
    balance: "$47518.74",
    created_on: "07/24/2019",
    revenue: "$12.1k",
    image: "https://robohash.org/nihiltemporesoluta.png?size=100x100&set=set1",
  },
  {
    id: 46,
    name: "Phillipp Vicker",
    store: "Nikolaus-Wiegand",
    ratings: 4.9,
    products: 184,
    balance: "$26574.25",
    created_on: "07/18/2019",
    revenue: "$78.2k",
    image: "https://robohash.org/fugaeumex.png?size=100x100&set=set1",
  },
  {
    id: 47,
    name: "Yves Trattles",
    store: "Lakin Inc",
    ratings: 3.5,
    products: 583,
    balance: "$43339.94",
    created_on: "07/19/2019",
    revenue: "$121",
    image: "https://robohash.org/harumdolorofficiis.png?size=100x100&set=set1",
  },
  {
    id: 48,
    name: "Valli Puttick",
    store: "Ward Group",
    ratings: 4.1,
    products: 243,
    balance: "$30841.74",
    created_on: "07/24/2019",
    revenue: "$78.2k",
    image: "https://robohash.org/etdoloruminventore.png?size=100x100&set=set1",
  },
  {
    id: 49,
    name: "Harley Moralas",
    store: "Dibbert-Koch",
    ratings: 4.9,
    products: 387,
    balance: "$24170.76",
    created_on: "07/22/2019",
    revenue: "$258.26k",
    image:
      "https://robohash.org/temporibusdoloresexpedita.png?size=100x100&set=set1",
  },
  {
    id: 50,
    name: "Dane Poor",
    store: "Schaefer, Baumbach and Rogahn",
    ratings: 5.0,
    products: 700,
    balance: "$43686.45",
    created_on: "07/26/2019",
    revenue: "$152.3k",
    image: "https://robohash.org/asequiaccusamus.png?size=100x100&set=set1",
  },
  {
    id: 51,
    name: "Byran Temple",
    store: "Mann-Farrell",
    ratings: 4.0,
    products: 716,
    balance: "$4893.32",
    created_on: "07/18/2019",
    revenue: "$178.6k",
    image: "https://robohash.org/etnequerepudiandae.png?size=100x100&set=set1",
  },
  {
    id: 52,
    name: "Merralee Lefridge",
    store: "Gutmann-Bednar",
    ratings: 5.0,
    products: 474,
    balance: "$23137.50",
    created_on: "07/07/2019",
    revenue: "$368.2k",
    image: "https://robohash.org/suntoptioet.png?size=100x100&set=set1",
  },
  {
    id: 53,
    name: "Becki Sambals",
    store: "Pacocha, Beier and Koch",
    ratings: 4.0,
    products: 176,
    balance: "$29240.97",
    created_on: "07/26/2019",
    revenue: "$89.5k",
    image: "https://robohash.org/etquiaccusantium.png?size=100x100&set=set1",
  },
  {
    id: 54,
    name: "L;urette Chastanet",
    store: "Veum LLC",
    ratings: 4.3,
    products: 788,
    balance: "$45908.04",
    created_on: "07/24/2019",
    revenue: "$597.8k",
    image: "https://robohash.org/estexut.png?size=100x100&set=set1",
  },
  {
    id: 55,
    name: "Gerri Methley",
    store: "Champlin, Jones and Bosco",
    ratings: 5.0,
    products: 301,
    balance: "$25934.40",
    created_on: "07/11/2019",
    revenue: "$29.3k",
    image: "https://robohash.org/autemquaeratnumquam.png?size=100x100&set=set1",
  },
  {
    id: 56,
    name: "Etienne Aldrick",
    store: "Dare Inc",
    ratings: 2.7,
    products: 197,
    balance: "$23307.73",
    created_on: "07/02/2019",
    revenue: "$48.6k",
    image:
      "https://robohash.org/temporeexpeditabeatae.png?size=100x100&set=set1",
  },
  {
    id: 57,
    name: "Lida Garrigan",
    store: "Streich-Langworth",
    ratings: 4.9,
    products: 523,
    balance: "$3418.92",
    created_on: "07/09/2019",
    revenue: "$12.1k",
    image: "https://robohash.org/doloribusoditvitae.png?size=100x100&set=set1",
  },
  {
    id: 58,
    name: "Gerald Vlasenko",
    store: "Towne, Nader and Emard",
    ratings: 4.8,
    products: 549,
    balance: "$39865.90",
    created_on: "07/29/2019",
    revenue: "$78.2k",
    image:
      "https://robohash.org/doloribusvoluptatumet.png?size=100x100&set=set1",
  },
  {
    id: 59,
    name: "Atalanta Linford",
    store: "Franecki, Harris and VonRueden",
    ratings: 3.7,
    products: 263,
    balance: "$10741.61",
    created_on: "07/14/2019",
    revenue: "$121",
    image: "https://robohash.org/illoomnisvoluptas.png?size=100x100&set=set1",
  },
  {
    id: 60,
    name: "Norrie Drayn",
    store: "Stokes-Runolfsdottir",
    ratings: 4.6,
    products: 109,
    balance: "$26179.10",
    created_on: "07/11/2019",
    revenue: "$78.2k",
    image:
      "https://robohash.org/dolorconsectetureligendi.png?size=100x100&set=set1",
  },
  {
    id: 61,
    name: "Del Hutcheons",
    store: "Kilback-Crona",
    ratings: 4.9,
    products: 769,
    balance: "$41994.30",
    created_on: "07/22/2019",
    revenue: "$89.5k",
    image:
      "https://robohash.org/laborumpraesentiumquibusdam.png?size=100x100&set=set1",
  },
  {
    id: 62,
    name: "Toinette Mate",
    store: "Jenkins, O'Kon and Erdman",
    ratings: 3.5,
    products: 321,
    balance: "$5173.07",
    created_on: "07/12/2019",
    revenue: "$597.8k",
    image:
      "https://robohash.org/autemblanditiisquaerat.png?size=100x100&set=set1",
  },
  {
    id: 63,
    name: "Cheslie Bamber",
    store: "Krajcik Group",
    ratings: 4.1,
    products: 852,
    balance: "$48425.48",
    created_on: "07/12/2019",
    revenue: "$29.3k",
    image:
      "https://robohash.org/similiqueplaceatexcepturi.png?size=100x100&set=set1",
  },
  {
    id: 64,
    name: "Emma Frusher",
    store: "Ziemann-Toy",
    ratings: 4.9,
    products: 883,
    balance: "$22458.90",
    created_on: "07/29/2019",
    revenue: "$48.6k",
    image: "https://robohash.org/etrerumminima.png?size=100x100&set=set1",
  },
  {
    id: 65,
    name: "Ardella Dummer",
    store: "Block Group",
    ratings: 5.0,
    products: 325,
    balance: "$1809.30",
    created_on: "07/06/2019",
    revenue: "$12.1k",
    image: "https://robohash.org/nihilharumqui.png?size=100x100&set=set1",
  },
  {
    id: 66,
    name: "Adore Sidwick",
    store: "Kulas LLC",
    ratings: 4.0,
    products: 756,
    balance: "$2309.66",
    created_on: "07/10/2019",
    revenue: "$78.2k",
    image: "https://robohash.org/insolutanumquam.png?size=100x100&set=set1",
  },
  {
    id: 67,
    name: "Tiler Veevers",
    store: "Cassin, Feest and Abernathy",
    ratings: 5.0,
    products: 506,
    balance: "$21046.26",
    created_on: "07/19/2019",
    revenue: "$121",
    image:
      "https://robohash.org/sintinventorereiciendis.png?size=100x100&set=set1",
  },
  {
    id: 68,
    name: "Marylin Hurdiss",
    store: "Yost Inc",
    ratings: 4.0,
    products: 644,
    balance: "$19214.19",
    created_on: "07/10/2019",
    revenue: "$78.2k",
    image: "https://robohash.org/etexplicaboitaque.png?size=100x100&set=set1",
  },
  {
    id: 69,
    name: "Gunther Atyea",
    store: "Fahey and Sons",
    ratings: 4.3,
    products: 372,
    balance: "$8185.24",
    created_on: "07/29/2019",
    revenue: "$258.26k",
    image: "https://robohash.org/possimusdolorevero.png?size=100x100&set=set1",
  },
  {
    id: 70,
    name: "Giovanna Roskelly",
    store: "Mitchell-Stiedemann",
    ratings: 5.0,
    products: 593,
    balance: "$39492.73",
    created_on: "07/20/2019",
    revenue: "$152.3k",
    image: "https://robohash.org/atiditaque.png?size=100x100&set=set1",
  },
  {
    id: 71,
    name: "Martina Martina",
    store: "Bruen and Sons",
    ratings: 2.7,
    products: 270,
    balance: "$15813.98",
    created_on: "07/23/2019",
    revenue: "$89.5k",
    image: "https://robohash.org/saepeestrem.png?size=100x100&set=set1",
  },
  {
    id: 72,
    name: "Emmit Tolcharde",
    store: "Roob and Sons",
    ratings: 4.9,
    products: 786,
    balance: "$4310.84",
    created_on: "07/21/2019",
    revenue: "$597.8k",
    image: "https://robohash.org/occaecatisedrem.png?size=100x100&set=set1",
  },
  {
    id: 73,
    name: "Freeman Hoopper",
    store: "Reynolds-Wuckert",
    ratings: 4.8,
    products: 615,
    balance: "$27106.74",
    created_on: "07/24/2019",
    revenue: "$29.3k",
    image:
      "https://robohash.org/molestiasvelitdebitis.png?size=100x100&set=set1",
  },
  {
    id: 74,
    name: "Gustavo Yellowlees",
    store: "Anderson-Hickle",
    ratings: 3.7,
    products: 884,
    balance: "$28237.31",
    created_on: "07/13/2019",
    revenue: "$48.6k",
    image: "https://robohash.org/porroquidemut.png?size=100x100&set=set1",
  },
  {
    id: 75,
    name: "Zach Piel",
    store: "Bode, O'Kon and Murphy",
    ratings: 4.6,
    products: 338,
    balance: "$45261.76",
    created_on: "07/15/2019",
    revenue: "$12.1k",
    image:
      "https://robohash.org/blanditiisautdolorem.png?size=100x100&set=set1",
  },
  {
    id: 76,
    name: "Reube Bratton",
    store: "Bartoletti and Sons",
    ratings: 4.6,
    products: 387,
    balance: "$14127.50",
    created_on: "07/29/2019",
    revenue: "$78.2k",
    image: "https://robohash.org/idomnisab.png?size=100x100&set=set1",
  },
  {
    id: 77,
    name: "Jerrie Levee",
    store: "Hauck-Heidenreich",
    ratings: 4.9,
    products: 483,
    balance: "$29745.67",
    created_on: "07/07/2019",
    revenue: "$121",
    image:
      "https://robohash.org/temporibusdoloremquecupiditate.png?size=100x100&set=set1",
  },
  {
    id: 78,
    name: "Brooks Preshaw",
    store: "Hudson-Rowe",
    ratings: 3.5,
    products: 778,
    balance: "$6157.00",
    created_on: "07/23/2019",
    revenue: "$78.2k",
    image: "https://robohash.org/evenietveroat.png?size=100x100&set=set1",
  },
  {
    id: 79,
    name: "Aaren Studholme",
    store: "Koepp-Barrows",
    ratings: 4.1,
    products: 573,
    balance: "$27603.34",
    created_on: "07/20/2019",
    revenue: "$258.26k",
    image: "https://robohash.org/doloremquismaiores.png?size=100x100&set=set1",
  },
  {
    id: 80,
    name: "Edythe Filipson",
    store: "Murazik Inc",
    ratings: 4.9,
    products: 153,
    balance: "$30666.98",
    created_on: "07/29/2019",
    revenue: "$152.3k",
    image:
      "https://robohash.org/mollitiarepellatperferendis.png?size=100x100&set=set1",
  },
  {
    id: 81,
    name: "Sigrid Bartozzi",
    store: "Crist Group",
    ratings: 5.0,
    products: 533,
    balance: "$12180.60",
    created_on: "07/24/2019",
    revenue: "$89.5k",
    image: "https://robohash.org/suntsitofficia.png?size=100x100&set=set1",
  },
  {
    id: 82,
    name: "Lorain French",
    store: "Langworth, Reichel and Labadie",
    ratings: 4.0,
    products: 587,
    balance: "$2267.88",
    created_on: "07/08/2019",
    revenue: "$597.8k",
    image:
      "https://robohash.org/nobisvoluptatesdolorem.png?size=100x100&set=set1",
  },
  {
    id: 83,
    name: "Court Gulley",
    store: "Hickle, Runolfsdottir and Bosco",
    ratings: 5.0,
    products: 275,
    balance: "$16333.17",
    created_on: "07/17/2019",
    revenue: "$29.3k",
    image: "https://robohash.org/maioreseteos.png?size=100x100&set=set1",
  },
  {
    id: 84,
    name: "Pacorro Sarfatti",
    store: "Hegmann, Fahey and Williamson",
    ratings: 4.0,
    products: 370,
    balance: "$41618.98",
    created_on: "07/21/2019",
    revenue: "$48.6k",
    image: "https://robohash.org/quosfugaquod.png?size=100x100&set=set1",
  },
  {
    id: 85,
    name: "Jaime Calendar",
    store: "Kulas-Klocko",
    ratings: 4.3,
    products: 704,
    balance: "$38722.94",
    created_on: "07/10/2019",
    revenue: "$12.1k",
    image: "https://robohash.org/aliasesseiusto.png?size=100x100&set=set1",
  },
  {
    id: 86,
    name: "Leslie Strognell",
    store: "Cruickshank-Gibson",
    ratings: 5.0,
    products: 253,
    balance: "$47561.04",
    created_on: "07/28/2019",
    revenue: "$78.2k",
    image: "https://robohash.org/sedpossimuset.png?size=100x100&set=set1",
  },
  {
    id: 87,
    name: "Mattheus Covil",
    store: "Runolfsson, Swaniawski and Bauch",
    ratings: 4.6,
    products: 799,
    balance: "$39170.91",
    created_on: "07/05/2019",
    revenue: "$121",
    image:
      "https://robohash.org/voluptatempraesentiumrem.png?size=100x100&set=set1",
  },
  {
    id: 88,
    name: "Roxi Briereton",
    store: "Donnelly-O'Connell",
    ratings: 4.9,
    products: 407,
    balance: "$39625.51",
    created_on: "07/08/2019",
    revenue: "$78.2k",
    image: "https://robohash.org/voluptasipsamiste.png?size=100x100&set=set1",
  },
  {
    id: 89,
    name: "Ricca Hanning",
    store: "Kulas, Doyle and Bradtke",
    ratings: 3.5,
    products: 757,
    balance: "$47445.38",
    created_on: "07/05/2019",
    revenue: "$258.26k",
    image: "https://robohash.org/cumquemodiut.png?size=100x100&set=set1",
  },
  {
    id: 90,
    name: "Minnie Doggett",
    store: "Hammes Group",
    ratings: 4.1,
    products: 609,
    balance: "$2969.51",
    created_on: "07/16/2019",
    revenue: "$152.3k",
    image: "https://robohash.org/etvoluptateslibero.png?size=100x100&set=set1",
  },
  {
    id: 91,
    name: "Roch Heyball",
    store: "Nicolas, Funk and Brown",
    ratings: 4.9,
    products: 701,
    balance: "$40481.67",
    created_on: "07/01/2019",
    revenue: "$89.5k",
    image:
      "https://robohash.org/temporanesciuntdolor.png?size=100x100&set=set1",
  },
  {
    id: 92,
    name: "Nate Buddell",
    store: "O'Keefe and Sons",
    ratings: 5.0,
    products: 161,
    balance: "$13665.71",
    created_on: "07/15/2019",
    revenue: "$597.8k",
    image:
      "https://robohash.org/etarchitectoaccusantium.png?size=100x100&set=set1",
  },
  {
    id: 93,
    name: "Jammie Silveston",
    store: "Klocko-Okuneva",
    ratings: 4.0,
    products: 860,
    balance: "$30771.86",
    created_on: "07/03/2019",
    revenue: "$29.3k",
    image: "https://robohash.org/veniamofficiisad.png?size=100x100&set=set1",
  },
  {
    id: 94,
    name: "Valentine Eddoes",
    store: "Hettinger, Stracke and Cronin",
    ratings: 5.0,
    products: 217,
    balance: "$16216.20",
    created_on: "07/08/2019",
    revenue: "$48.6k",
    image:
      "https://robohash.org/eumquibusdaminventore.png?size=100x100&set=set1",
  },
  {
    id: 95,
    name: "Eryn Mobberley",
    store: "Raynor Group",
    ratings: 4.0,
    products: 419,
    balance: "$24074.71",
    created_on: "07/28/2019",
    revenue: "$12.1k",
    image: "https://robohash.org/quaedolorembeatae.png?size=100x100&set=set1",
  },
  {
    id: 96,
    name: "Randall MacCracken",
    store: "Windler, Blanda and Tremblay",
    ratings: 4.3,
    products: 462,
    balance: "$43974.13",
    created_on: "07/18/2019",
    revenue: "$78.2k",
    image:
      "https://robohash.org/explicaborecusandaeet.png?size=100x100&set=set1",
  },
  {
    id: 97,
    name: "Loraine Filipowicz",
    store: "Collier-Gleason",
    ratings: 5.0,
    products: 567,
    balance: "$41706.66",
    created_on: "07/21/2019",
    revenue: "$121",
    image:
      "https://robohash.org/facerenecessitatibusquis.png?size=100x100&set=set1",
  },
  {
    id: 98,
    name: "Kylen Fosse",
    store: "Zulauf Inc",
    ratings: 4.7,
    products: 294,
    balance: "$26964.69",
    created_on: "07/24/2019",
    revenue: "$78.2k",
    image: "https://robohash.org/maximelaudantiumaut.png?size=100x100&set=set1",
  },
  {
    id: 99,
    name: "Rochell Blythe",
    store: "Hauck, O'Keefe and Walker",
    ratings: 4.0,
    products: 885,
    balance: "$20913.92",
    created_on: "07/18/2019",
    revenue: "$258.26k",
    image: "https://robohash.org/iustoetut.png?size=100x100&set=set1",
  },
  {
    id: 100,
    name: "Lavena Cleife",
    store: "Ward-Orevenue",
    ratings: 4.1,
    products: 642,
    balance: "$29126.84",
    created_on: "07/18/2019",
    revenue: "$78.2k",
    image:
      "https://robohash.org/evenietquaeconsequuntur.png?size=100x100&set=set1",
  },
];

const students: StudentItemTypes[] = [
  {
    roll: 1,
    name: "Aarav Sharma",
    phone: "9876543210",
    age: 16,
    grade: "10th",
    gender: "Male",
    dob: "1998-jan-28",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    roll: 2,
    name: "Ishika Verma",
    phone: "9876543211",
    age: 15,
    grade: "9th",
    dob: "1998-jan-28",
    gender: "Female",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    roll: 3,
    name: "Rohan Gupta",
    phone: "9876543212",
    age: 17,
    grade: "11th",
    gender: "Male",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    dob: "1998-jan-28",
  },
  {
    roll: 4,
    name: "Simran Kaur",
    phone: "9876543213",
    age: 16,
    grade: "10th",
    gender: "Female",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    dob: "1998-jan-28",
  },
  {
    roll: 5,
    name: "Kabir Mehta",
    phone: "9876543214",
    age: 18,
    grade: "12th",
    gender: "Male",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    dob: "1998-jan-28",
  },
  {
    roll: 6,
    name: "Neha Patil",
    phone: "9876543215",
    age: 17,
    grade: "11th",
    gender: "Female",
    avatar: "https://randomuser.me/api/portraits/women/6.jpg",
    dob: "1998-jan-28",
  },
];

export { products, customers, sellers, students };
