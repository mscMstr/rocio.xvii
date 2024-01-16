import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
  } from '@chakra-ui/react';
  import { Link } from "react-router-dom";

export default function NavBar(currentPage: string) {

    return (
        <Breadcrumb>
            <BreadcrumbItem isCurrentPage={"home"===currentPage}>
                <BreadcrumbLink as={Link} to="/">
                Home
                </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage={"projects"===currentPage}>
                <BreadcrumbLink as={Link} to="/projects">
                Projects
                </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage={"photography"===currentPage}>
                <BreadcrumbLink>
                Photography
                </BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
    )
}