import { FiGithub, FiInstagram, FiCodepen } from "react-icons/fi";
import { FaLinkedinIn, FaPhoneAlt, FaBirthdayCake } from "react-icons/fa";
import { FaCalendarDays, FaLocationDot } from "react-icons/fa6";
import { ImOpera } from "react-icons/im";
import { HiMail } from "react-icons/hi";
import { BiSolidUser, BiWorld, BiSolidCity, BiSearch } from "react-icons/Bi";
import { MdFamilyRestroom, MdOutlineWork } from "react-icons/Md";
import { Bs123 } from "react-icons/Bs";
import { TbSort09 } from "react-icons/Tb";

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
    type: "number",
    icon: { icon: Bs123 },
    text: "Zip Code",
  },
  {
    type: "text",
    icon: { icon: BiWorld },
    text: "State",
  },
  {
    type: "search",
    icon: { icon: BiSearch },
    text: "Search",
  },
  {
    type: "tnumber",
    icon: { icon: TbSort09 },
    text: "Show Entries",
  },
];

export const ShowEntrie = [
{
  name: "10",
  abbreviation: "10"
},
{
  name: "25",
  abbreviation: "25"
},
{
  name: "50",
  abbreviation: "50"
},
{
  name: "100",
  abbreviation: "100"
}
]

export const Departments = [
  {
      name: "Sales",
      abbreviation: "sales"
  },
  {
      name: "Marketing",
      abbreviation: "marketing"
  },
  {
      name: "Engineering",
      abbreviation: "engineering"
  },
  {
      name: "Human Resources",
      abbreviation: "human-resources"
  },
  {
      name: "Legal",
      abbreviation: "legal"
  }
]

export const States = [
  {
      name: "Alabama",
      abbreviation: "AL"
  },
  {
      name: "Alaska",
      abbreviation: "AK"
  },
  {
      name: "American Samoa",
      abbreviation: "AS"
  },
  {
      name: "Arizona",
      abbreviation: "AZ"
  },
  {
      name: "Arkansas",
      abbreviation: "AR"
  },
  {
      name: "California",
      abbreviation: "CA"
  },
  {
      name: "Colorado",
      abbreviation: "CO"
  },
  {
      name: "Connecticut",
      abbreviation: "CT"
  },
  {
      name: "Delaware",
      abbreviation: "DE"
  },
  {
      name: "District Of Columbia",
      abbreviation: "DC"
  },
  {
      name: "Federated States Of Micronesia",
      abbreviation: "FM"
  },
  {
      name: "Florida",
      abbreviation: "FL"
  },
  {
      name: "Georgia",
      abbreviation: "GA"
  },
  {
      name: "Guam",
      abbreviation: "GU"
  },
  {
      name: "Hawaii",
      abbreviation: "HI"
  },
  {
      name: "Idaho",
      abbreviation: "ID"
  },
  {
      name: "Illinois",
      abbreviation: "IL"
  },
  {
      name: "Indiana",
      abbreviation: "IN"
  },
  {
      name: "Iowa",
      abbreviation: "IA"
  },
  {
      name: "Kansas",
      abbreviation: "KS"
  },
  {
      name: "Kentucky",
      abbreviation: "KY"
  },
  {
      name: "Louisiana",
      abbreviation: "LA"
  },
  {
      name: "Maine",
      abbreviation: "ME"
  },
  {
      name: "Marshall Islands",
      abbreviation: "MH"
  },
  {
      name: "Maryland",
      abbreviation: "MD"
  },
  {
      name: "Massachusetts",
      abbreviation: "MA"
  },
  {
      name: "Michigan",
      abbreviation: "MI"
  },
  {
      name: "Minnesota",
      abbreviation: "MN"
  },
  {
      name: "Mississippi",
      abbreviation: "MS"
  },
  {
      name: "Missouri",
      abbreviation: "MO"
  },
  {
      name: "Montana",
      abbreviation: "MT"
  },
  {
      name: "Nebraska",
      abbreviation: "NE"
  },
  {
      name: "Nevada",
      abbreviation: "NV"
  },
  {
      name: "New Hampshire",
      abbreviation: "NH"
  },
  {
      name: "New Jersey",
      abbreviation: "NJ"
  },
  {
      name: "New Mexico",
      abbreviation: "NM"
  },
  {
      name: "New York",
      abbreviation: "NY"
  },
  {
      name: "North Carolina",
      abbreviation: "NC"
  },
  {
      name: "North Dakota",
      abbreviation: "ND"
  },
  {
      name: "Northern Mariana Islands",
      abbreviation: "MP"
  },
  {
      name: "Ohio",
      abbreviation: "OH"
  },
  {
      name: "Oklahoma",
      abbreviation: "OK"
  },
  {
      name: "Oregon",
      abbreviation: "OR"
  },
  {
      name: "Palau",
      abbreviation: "PW"
  },
  {
      name: "Pennsylvania",
      abbreviation: "PA"
  },
  {
      name: "Puerto Rico",
      abbreviation: "PR"
  },
  {
      name: "Rhode Island",
      abbreviation: "RI"
  },
  {
      name: "South Carolina",
      abbreviation: "SC"
  },
  {
      name: "South Dakota",
      abbreviation: "SD"
  },
  {
      name: "Tennessee",
      abbreviation: "TN"
  },
  {
      name: "Texas",
      abbreviation: "TX"
  },
  {
      name: "Utah",
      abbreviation: "UT"
  },
  {
      name: "Vermont",
      abbreviation: "VT"
  },
  {
      name: "Virgin Islands",
      abbreviation: "VI"
  },
  {
      name: "Virginia",
      abbreviation: "VA"
  },
  {
      name: "Washington",
      abbreviation: "WA"
  },
  {
      name: "West Virginia",
      abbreviation: "WV"
  },
  {
      name: "Wisconsin",
      abbreviation: "WI"
  },
  {
      name: "Wyoming",
      abbreviation: "WY"
  }
]
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