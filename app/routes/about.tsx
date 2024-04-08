import { Link } from "@remix-run/react";

export default function About() {
  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <ul className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <li>
            <Link to="/" className="md:text-xl font-bold">
              Young.Han
            </Link>
          </li>
          <div className="hidden w-full md:block md:w-auto">
            <li>
              <Link to="about" className="md:text-xl font-bold">
                About
              </Link>
            </li>
            <li>
              <Link to="blog" className="md:text-xl font-bold">
                Blog
              </Link>
            </li>
            <li>
              <Link to="contactme" className="md:text-xl font-bold ">
                Contact Me
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
}
