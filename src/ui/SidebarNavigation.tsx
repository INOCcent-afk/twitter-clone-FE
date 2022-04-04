import Link from "next/link";
import React, { useState } from "react";

const mainPages = [
  { path: "/", name: "Home" },
  { path: "/", name: "Explore" },
  { path: "/", name: "Notifications" },
  { path: "/", name: "Messages" },
  { path: "/", name: "Bookmarks" },
  { path: "/", name: "Lists" },
  { path: "/", name: "Profile" },
];

const secondaryPages = [
  { path: "/", name: "Topics" },
  { path: "/", name: "Moments" },
  { path: "/", name: "Newsletters" },
  { path: "/", name: "Twitter for Professionals" },
  { path: "/", name: "Twitter Ads" },
  { path: "/", name: "Analytics" },
];

const displayPages = [
  { path: "/", name: "Settings and privacy" },
  { path: "/", name: "Help Center" },
  { path: "/", name: "Display" },
  { path: "/", name: "Keyboard shorcuts" },
];

export const SidebarNavigation = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <aside>
      <nav>
        <ul>
          {mainPages.map((link) => (
            <>
              <li key={link.name}>
                <Link href={link.path}>
                  <a>{link.name}</a>
                </Link>
              </li>
            </>
          ))}
          <li>
            <button onClick={() => setIsDropdownOpen(true)}>More</button>
          </li>
          {isDropdownOpen && (
            <div>
              {secondaryPages.map((link) => (
                <li key={link.name}>
                  <Link href={link.path}>
                    <a>{link.name}</a>
                  </Link>
                </li>
              ))}
            </div>
          )}
        </ul>
      </nav>
    </aside>
  );
};
