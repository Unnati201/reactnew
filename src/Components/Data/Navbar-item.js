import { AiOutlineClockCircle, AiFillCloud } from "react-icons/ai";
import { SiGooglepodcasts } from "react-icons/si";

export const routes = [

  {
    id:1,
    title:"Home",
    path:"./",
    cName:"nav-item",
  },

  {
    id:1,
    //name: "Service",
    title:"Serives",
    path: "./service",
     //className
    cName:"nav-item",
  },
  {
    id:2,
    title:"Industry",
    //name: "Industry",
    path: "./inustry",
    cName:"nav-item",
  },

  {
    id:3,
    //name: "Career",
    title:"Career",
    path: "./career",
    cName:"nav-item",
  },

  {
    id:4,
   title:"Success Stories",
    //name: "Success Stories",
    path: "./success-stories",
    cName:"nav-item",
  },

  {
    id:5,
    title: "Blog",
   // name: "Blog",
    path: "./blog",
    cName:"nav-item",
  },
  {
    id:6,
    title: "About Us",
    //name: "About Us",
    path: "./about",
   cName:"nav-item",
  },


 /* {
    id:7,
    name: "Contact",
    path: "./contact",
    //className
    cName:"nav-item",
  },*/
];

export const analytics = [
  {
    name: "Active users",
    desc: "12M",
  },
  {
    name: "Languages",
    desc: "16",
  },
  {
    name: "Support",
    desc: "24/7",
  },
];

export const features = [
  "Choose a view",
  "Meet your new butler",
  "Dive into the details",
  "Power up",
];

export const controls = [
  {
    name: "Structured Reports",
    icon: SiGooglepodcasts,
  },
  {
    name: "Cloud System",
    icon: AiFillCloud,
  },
  {
    name: "24/7 Support",
    icon: AiOutlineClockCircle,
  },
];


export const serviceDropdown = [

  {
    id: 1,
    title: "Data Engineer",
    path: "./data",
    cName: "submenu-item",
  },

  {
    id: 2,
    title: "CLoud Engineer",
    path: "./cloud",
    cName: "submenu-item",
  },
  {
    id: 3,
    title: "Consulting",
    path: "./consulting",
    cName: "submenu-item",
  },
  {
    id: 4,
    title: "Design",
    path: "./design",
    cName: "submenu-item",
  },
 
];