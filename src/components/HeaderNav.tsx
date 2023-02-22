import { useState } from "react";
import Image from "next/image";
import MobileNavWindow from "./MobileNavWindow";
import Link from "next/link";

export default function HeaderNav() {
  const [menuVisible, setMenuVisible] = useState(false);
  return (
    <header className="my-6 flex items-center justify-between  md:my-20">
      <Link href={"/"}>
        <Image
          height={48}
          width={64}
          src={"/logo.svg"}
          className="h-12 w-16"
          alt="W with a full stop"
        />
      </Link>
      {!menuVisible && (
        <Image
          height={32}
          width={56}
          src={"/icon-menu.svg"}
          className="h-8 w-14 md:hidden"
          alt="Burger menu"
          onClick={() => setMenuVisible(!menuVisible)}
        />
      )}

      {menuVisible && (
        <MobileNavWindow
          menuVisible={menuVisible}
          setMenuVisible={setMenuVisible}
        />
      )}

      <div className="hidden flex-row text-2xl text-gray-400  md:flex md:space-x-10 lg:space-x-20 ">
        <Link href="/articles/category/all">
          <div className="uppercase hover:text-orange-400">All</div>
        </Link>
        <Link href="/articles/category/coding">
          <div className="uppercase hover:text-orange-400">Coding</div>
        </Link>
        <Link href="/articles/category/football">
          <div className="uppercase hover:text-orange-400">Football</div>
        </Link>
        <Link href="/articles/category/cooking">
          <div className="uppercase hover:text-orange-400">Cooking</div>
        </Link>
      </div>
    </header>
  );
}
