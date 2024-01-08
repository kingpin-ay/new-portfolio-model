import {
  home,
  logoStackoverflow,
  planet,
  school,
  people,
  hammer,
} from "ionicons/icons";

export const routeCollection: Route[] = [
  {
    address: "/",
    name: "Home",
    iconText: home,
  },
  {
    address: "/routes/techs",
    name: "What I use",
    iconText: logoStackoverflow,
  },
  {
    address: "/routes/projects",
    name: "Project Showcase",
    iconText: planet,
  },
  {
    address: "/routes/current",
    name: "Currently What I am working on",
    iconText: hammer,
  },
  {
    address: "/routes/qualification",
    name: "Qualification",
    iconText: school,
  },
  {
    address: "/routes/contacts",
    name: "Contacts",
    iconText: people,
  },
];

export interface Route {
  name: string;
  address: string;
  iconText: string;
}
