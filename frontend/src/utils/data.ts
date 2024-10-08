import MemoAccount from "@/icons/Account";
import MemoBulb from "@/icons/Bulb";
import MemoBulb2 from "@/icons/Bulb2";
import MemoBusiness from "@/icons/Business";
import MemoChurch from "@/icons/Church";
import MemoDashboard from "@/icons/Dashboard";
import MemoDevices from "@/icons/Devices";
import MemoFactoryIcon from "@/icons/FactoryIcon";
import MemoHospitals from "@/icons/Hospitals";
import MemoHotels from "@/icons/Hotels";
import MemoHouseIcon from "@/icons/HouseIcon";
import MemoListing from "@/icons/Listing";
import MemoMarketplace from "@/icons/Marketplace";
import MemoPerformance from "@/icons/Performance";
import MemoPlug from "@/icons/Plug";
import MemoSchool from "@/icons/School";
import MemoWallet from "@/icons/Wallet";

export const navItems = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: MemoDashboard,
  },
  {
    name: "Devices",
    href: "/dashboard/devices",
    icon: MemoDevices,
  },
  {
    name: "Wallet",
    href: "/dashboard/wallet",
    icon: MemoWallet,
  },
  {
    name: "Marketplace",
    href: "/dashboard/marketplace",
    icon: MemoMarketplace,
  },
  {
    name: "My listing",
    href: "/dashboard/listing",
    icon: MemoListing,
  },
  {
    name: "Account information",
    href: "/dashboard/account",
    icon: MemoAccount,
  },
];

export const Statistics = [
  {
    icon: MemoPlug,
    title: "Active panels",
    value: 3,
    unit: "out of 5",
    extra: "+ Add panel",
    bgColor: "#FFEFEB",
    textColor: "#CD5334",
  },
  {
    icon: MemoBulb,
    title: "Energy generated",
    value: "54,6893",
    unit: "KWH",
    bgColor: "#E6F6E4",
  },
  {
    icon: MemoPerformance,
    title: "Performance",
    value: "99.9%",
    bgColor: "#EBE7F5",
  },
  {
    icon: MemoBulb2,
    title: "My contribution",
    value: "56%",
    extra: "Anambra",
    unit: "of energy shared",
    bgColor: "#EAF0FB",
    textColor: "#21250F",
  },
];

export const energyData = [
  {
    id: 1,
    savings: 10,
    rating: 4.5,
    price: "567 ENRG",
    distance: 10,
    quantity: 567,
    limit: { min: 57, max: 567 },
  },
  {
    id: 2,
    savings: 10,
    rating: 4.5,
    price: "567 ENRG",
    distance: 10,
    quantity: 567,
    limit: { min: 57, max: 567 },
  },
  {
    id: 3,
    savings: 10,
    rating: 4.5,
    price: "567 ENRG",
    distance: 10,
    quantity: 567,
    limit: { min: 57, max: 567 },
  },
  {
    id: 4,
    savings: 10,
    rating: 4.5,
    price: "567 ENRG",
    distance: 10,
    quantity: 567,
    limit: { min: 57, max: 567 },
  },
  {
    id: 5,
    savings: 10,
    rating: 4.5,
    price: "567 ENRG",
    distance: 10,
    quantity: 567,
    limit: { min: 57, max: 567 },
  },
  {
    id: 6,
    savings: 10,
    rating: 4.5,
    price: "567 ENRG",
    distance: 10,
    quantity: 567,
    limit: { min: 57, max: 567 },
  },
  {
    id: 7,
    savings: 10,
    rating: 4.5,
    price: "567 ENRG",
    distance: 10,
    quantity: 567,
    limit: { min: 57, max: 567 },
  },
  {
    id: 8,
    savings: 10,
    rating: 4.5,
    price: "567 ENRG",
    distance: 10,
    quantity: 567,
    limit: { min: 57, max: 567 },
  },
  {
    id: 9,
    savings: 10,
    rating: 4.5,
    price: "567 ENRG",
    distance: 10,
    quantity: 567,
    limit: { min: 57, max: 567 },
  },
  {
    id: 10,
    savings: 10,
    rating: 4.5,
    price: "567 ENRG",
    distance: 10,
    quantity: 567,
    limit: { min: 57, max: 567 },
  },
  {
    id: 11,
    savings: 10,
    rating: 4.5,
    price: "567 ENRG",
    distance: 10,
    quantity: 567,
    limit: { min: 57, max: 567 },
  },
  {
    id: 12,
    savings: 10,
    rating: 4.5,
    price: "567 ENRG",
    distance: 10,
    quantity: 567,
    limit: { min: 57, max: 567 },
  },
];

export const sellData = [
  {
    id: 1,
    savings: 10,
    rating: 4.5,
    price: "567 ENRG",
    distance: 10,
    quantity: 567,
    limit: { min: 57, max: 567 },
    type: "Home owner",
    icon: MemoHouseIcon,
    expires: "30D : 24H : 10M",
  },
  {
    id: 2,
    savings: 10,
    rating: 4.5,
    price: "567 ENRG",
    distance: 10,
    quantity: 567,
    limit: { min: 57, max: 567 },
    type: "Factory",
    icon: MemoFactoryIcon,
    expires: "30D : 24H : 10M",
  },
  {
    id: 3,
    savings: 10,
    rating: 4.5,
    price: "567 ENRG",
    distance: 10,
    quantity: 567,
    limit: { min: 57, max: 567 },
    type: "Small business",
    icon: MemoBusiness,
    expires: "30D : 24H : 10M",
  },
  {
    id: 4,
    savings: 10,
    rating: 4.5,
    price: "567 ENRG",
    distance: 10,
    quantity: 567,
    limit: { min: 57, max: 567 },
    type: "Church",
    icon: MemoChurch,
    expires: "30D : 24H : 10M",
  },
  {
    id: 5,
    savings: 10,
    rating: 4.5,
    price: "567 ENRG",
    distance: 10,
    quantity: 567,
    limit: { min: 57, max: 567 },
    type: "School",
    icon: MemoSchool,
    expires: "30D : 24H : 10M",
  },
  {
    id: 6,
    savings: 10,
    rating: 4.5,
    price: "567 ENRG",
    distance: 10,
    quantity: 567,
    limit: { min: 57, max: 567 },
    type: "Hotels / Guest homes",
    icon: MemoHotels,
    expires: "30D : 24H : 10M",
  },
  {
    id: 7,
    savings: 10,
    rating: 4.5,
    price: "567 ENRG",
    distance: 10,
    quantity: 567,
    limit: { min: 57, max: 567 },
    type: "Hospitals",
    icon: MemoHospitals,
    expires: "30D : 24H : 10M",
  },
  {
    id: 8,
    savings: 10,
    rating: 4.5,
    price: "567 ENRG",
    distance: 10,
    quantity: 567,
    limit: { min: 57, max: 567 },
    type: "Hotels / Guest homes",
    icon: MemoHotels,
    expires: "30D : 24H : 10M",
  },
  {
    id: 9,
    savings: 10,
    rating: 4.5,
    price: "567 ENRG",
    distance: 10,
    quantity: 567,
    limit: { min: 57, max: 567 },
    type: "School",
    icon: MemoSchool,
    expires: "30D : 24H : 10M",
  },
  {
    id: 10,
    savings: 10,
    rating: 4.5,
    price: "567 ENRG",
    distance: 10,
    quantity: 567,
    limit: { min: 57, max: 567 },
    type: "Hotels / Guest homes",
    icon: MemoHotels,
    expires: "30D : 24H : 10M",
  },
  {
    id: 11,
    savings: 10,
    rating: 4.5,
    price: "567 ENRG",
    distance: 10,
    quantity: 567,
    limit: { min: 57, max: 567 },
    type: "Hospitals",
    icon: MemoHospitals,
    expires: "30D : 24H : 10M",
  },
  {
    id: 12,
    savings: 10,
    rating: 4.5,
    price: "567 ENRG",
    distance: 10,
    quantity: 567,
    limit: { min: 57, max: 567 },
    type: "Hotels / Guest homes",
    icon: MemoHotels,
    expires: "30D : 24H : 10M",
  },
];
