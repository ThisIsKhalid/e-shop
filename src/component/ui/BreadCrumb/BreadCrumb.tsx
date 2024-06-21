import React from "react";
import { Link, useLocation } from "react-router-dom";

interface BreadCrumbProps {
  className?: string;
}

const BreadCrumb: React.FC<BreadCrumbProps> = ({ className = "" }) => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);
//   console.log(pathSegments);

  const breadcrumbLinks = pathSegments.map((segment, index) => {
    const href = "/" + pathSegments.slice(0, index + 1).join("/");
    const isLast = index === pathSegments.length - 1;

    return (
      <React.Fragment key={index}>
        <li>
          <Link to={href} className={isLast ? "text-primary" : ""}>
            {segment}
          </Link>
        </li>
        {index < pathSegments.length - 1 && <span>/</span>}
      </React.Fragment>
    );
  });

  return (
    <div className={`text-sm font-medium breadcrumbs capitalize ${className}`}>
      <ul className="flex gap-2">
        <li>
          <Link to="/">Home</Link>
        </li>
        {pathSegments.length > 0 && <span>/</span>}
        {breadcrumbLinks}
      </ul>
    </div>
  );
};

export default BreadCrumb;
