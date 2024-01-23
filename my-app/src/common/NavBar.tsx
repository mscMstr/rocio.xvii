import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
} from '@chakra-ui/react';
import { Link } from "react-router-dom";
// import { IoHome } from "react-icons/io5";
import { ChevronRightIcon } from "@chakra-ui/icons";

interface NavBarProps {
    currentPage: string;
}

const NavBar: React.FC<NavBarProps> = (props) => {

  return (
    <div> 
      <Breadcrumb separator=" > " fontWeight="medium">
        <BreadcrumbItem isCurrentPage={"home"===props.currentPage}>
          <BreadcrumbLink as={Link} to="/">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage={"projects"===props.currentPage}>
          <BreadcrumbLink as={Link} to="/projects">
            Projects
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage={"photography"===props.currentPage}>
          <BreadcrumbLink as={Link} to="/photography">
            Photography
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
    )
}

export default NavBar;