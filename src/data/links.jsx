import { FiGithub, FiInstagram, FiCodepen } from "react-icons/fi";
import { FaLinkedinIn, FaPhoneAlt, FaBirthdayCake } from "react-icons/fa";
import { FaCalendarDays, FaLocationDot } from "react-icons/fa6";
import { ImOpera } from "react-icons/im";
import { HiMail } from "react-icons/hi";
import { BiSolidUser, BiWorld, BiSolidCity } from "react-icons/Bi";
import { MdFamilyRestroom, MdOutlineWork } from "react-icons/Md";
import { Bs123 } from "react-icons/Bs";

export const Typelinks = {
  INTERN: "intern",
  EXTERN: "extern",
};

export const Links = [
  {
    label: "home",
    url: "/",
    type: "intern",
  },
  {
    label: "employee",
    url: "/employee",
    type: "intern",
  },
];

export const Form = [
  {
    type: "text",
    icon: { icon: BiSolidUser },
    text: "First Name",
  },
  {
    type: "text",
    icon: { icon: MdFamilyRestroom },
    text: "Last Name",
  },
  {
    type: "text",
    icon: { icon: FaBirthdayCake },
    text: "Date of Birth",
  },
  {
    type: "text",
    icon: { icon: FaCalendarDays },
    text: "Start Date",
  },
  {
    type: "text",
    icon: { icon: MdOutlineWork },
    text: "Department",
  },
  {
    type: "text",
    icon: { icon: FaLocationDot },
    text: "Street",
  },
  {
    type: "text",
    icon: { icon: BiSolidCity },
    text: "City",
  },
  {
    type: "text",
    icon: { icon: Bs123 },
    text: "Zip Code",
  },
  {
    type: "text",
    icon: { icon: BiWorld },
    text: "State",
  },
];

export const S_thibaut  = {
    nav: [
      {
        label: "home",
        url: "/1337",
        type: "intern",
      },
    ],
  
    links: [
      {
        label: "phone",
        title: "07.70.39.00.83",
        url: "0770390083",
        type: "extern",
        icon: { icon: FaPhoneAlt },
        special: "tel",
        infos: "Appeler",
      },
      {
        label: "mail",
        title: "senechal.thibaut@hotmail.fr",
        url: "senechal.thibaut@hotmail.fr",
        type: "extern",
        icon: { icon: HiMail },
        special: "mail",
        infos: (<>Contacter</>),
      },
      {
        label: "site",
        title: "senechal-thibaut.netlify.app",
        url: "https://senechal-thibaut.netlify.app/",
        type: "extern",
        icon: { icon: ImOpera },
        infos: (<>Découvrir</>),
      },
      {
        label: "github",
        title: "Nerion-1337",
        url: "https://github.com/Nerion-1337",
        type: "extern",
        icon: { icon: FiGithub },
        infos: (<>Découvrir</>),
      },
      {
        label: "codepen",
        title: "Nerion1337",
        url: "https://codepen.io/Nerion1337",
        type: "extern",
        icon: { icon: FiCodepen },
        infos: (<>Découvrir</>),
      },
      {
        label: "insta",
        title: "personnel_perf",
        url: "https://www.instagram.com/personnel_perf/",
        type: "extern",
        icon: { icon: FiInstagram },
        infos: (<>Découvrir</>),
      },
      {
        label: "linkedin",
        title: "Senechal Thibaut",
        url: "https://www.linkedin.com/in/thibaut-senechal-aabbbb199/",
        type: "extern",
        icon: { icon: FaLinkedinIn },
        infos: (<>Ajouter</>),
      },
    ],
  };