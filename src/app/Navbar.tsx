import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          logo
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/about">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about">
              About us
            </Link>
          </li>
          <li>
            <Link href="/training">
              Training
            </Link>
          </li>
          <li>
            <Link href="/ecommerce">
              Ecommerce
            </Link>
          </li>
          <li>
            <Link href="/portfolio">
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="/services">
              Services
            </Link>
            <ul className="absolute left-0 mt-8 bg-white p-2 hidden">
              <li>
                <Link href="/services/web-development">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/mobile-application">
                  Mobile Application
                </Link>
              </li>
              <li>
                <Link href="/services/digital-marketing">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/services/seo-sem">
                  SEO/SEM
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
