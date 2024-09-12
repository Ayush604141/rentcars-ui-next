import Link from "next/link";
import Image from "next/image";
import Button from "./Button";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="mx-auto flex flex-between max-w-[1440px] items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex items-center justify-center">
          <Image
            src="/logo.svg"
            alt="Rent Cars logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>
        <Button
          title="Sign in"
          containerStyle="text-primary-blue rounded-full bg-white min-w-[130px]"
          buttonType="button"
        />
      </nav>
    </header>
  );
};

export default Navbar;
