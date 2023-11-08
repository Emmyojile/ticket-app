"use client";
import { AiOutlineHome } from "react-icons/ai";
import { FaTicketAlt } from "react-icons";
import { faHome, faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex justify-between bg-nav p-4">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <FontAwesomeIcon icon={faHome} className="icon" />
        </Link>
        <Link href="/ticket/new">
          <FontAwesomeIcon icon={faTicket} className="icon" />
        </Link>
      </div>
      <div className="flex gap-4 items-center pr-8">
        <p className="text-default-text">emmyojile99@gmail.com</p>
        <Link className="text-default-text" href="/">
          Login
        </Link>
        <Link className="text-default-text" href="/">
          Logout
        </Link>

      </div>
    </nav>
  );
};

export default Nav;
