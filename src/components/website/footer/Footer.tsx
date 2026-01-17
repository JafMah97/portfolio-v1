import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className=" border-t h-16 bg-primary/20 ">
      <div className="container max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center ">
          <div className="mb-4 md:mb-0 ">
            <Link href={"/"} className="text-xl font-bold text-primary ">
              Devfolio&trade;
            </Link>
            <p className="text-sm text-secondary mt-2">
              &copy;{new Date().getFullYear()} Devfolio. All right Reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <Link
              className="text-2xl hover:text-3xl text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300"
              href={"https://github.com/JafMah97"}
            >
              <FaGithub />
            </Link>
            <Link
              className="text-2xl hover:text-3xl text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300"
              href={"https://www.linkedin.com/in/jafar-mah-124447303/"}
            >
              <FaLinkedin />
            </Link>
            <Link
              className="text-2xl hover:text-3xl text-gray-600 dark:text-gray-300 hover:text-primary transition-colors duration-300"
              href={"https://twitter.com/JafMah97"}
            >
              <FaTwitter />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
