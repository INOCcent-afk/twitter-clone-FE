import { logout } from "@/services/resources/auth";
import Link from "next/link";
import React, { FC } from "react";

export const Footer: FC = () => {
  return (
    <footer className="text-graySecondary mt-3">
      <nav>
        <ul className="flex gap-y-0 gap-2 flex-wrap">
          <li>
            <Link href="/">
              <a className="text-xs leading-[0px]">Terms of Service</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className="text-xs leading-[0px]">Privacy Policy</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className="text-xs leading-[0px]">Cookie Policy</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className="text-xs leading-[0px]">Accesibility</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className="text-xs leading-[0px]">Ads info</a>
            </Link>
          </li>
          <li>
            <button className="text-xs leading-[0px]">More</button>
          </li>
        </ul>
      </nav>
      <small className="text-xs">© 2022 Twitter, Inc.</small>
      <small onClick={logout} className="text-primary cursor-pointer">
        {" "}
        Logout
      </small>
    </footer>
  );
};
