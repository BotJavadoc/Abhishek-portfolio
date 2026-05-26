import Image from "next/image";
import Link from "next/link";

import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full items-center px-4 md:px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-row justify-between items-center py-4 lg:py-8">
          {/* logo */}
          <Link href="/">
            <Image
              src="/abhishek-logo.png"
              alt="Abhishek G Logo"
              width={230}
              height={50}
              priority
              className="w-[150px] md:w-[230px] h-auto hover:scale-105 transition-all duration-300"
            />
          </Link>

          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
