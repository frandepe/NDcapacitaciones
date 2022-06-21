import { GrCertificate } from "react-icons/gr";
import { MdLocalHospital } from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";

export const DataDashboard = [
  {
    icon: <GrCertificate />,
    title: "Cursos",
    link: "/backoffice/cursos",
  },
  {
    icon: <MdLocalHospital />,
    title: "Capacitaciones *No funciona",
    link: "/backoffice/capacitaciones",
  },
  {
    icon: <FaHandsHelping />,
    title: "Aval",
    link: "/backoffice/aval",
  },
];
