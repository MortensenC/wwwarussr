import Home from "../app/home/components/home";
import DevOps from "../app/devops/components/devops";
import CustomSoftware from "../app/custom-software/components/custom-software";
import Blockchain from "../app/blockchain/components/blockchain";
import Agile from "../app/agile/components/agile";

const routes = [
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    path: "/devops",
    component: DevOps
  },
  {
    path: "/custom-software",
    component: CustomSoftware
  },
  {
    path: "/blockchain",
    component: Blockchain
  },
  {
    path: "/agile",
    component: Agile
  }
];

export default routes;
