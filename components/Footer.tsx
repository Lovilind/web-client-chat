import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="mx-auto border-t px-6 py-12">
      <Link href={'/'}>
        <p className="text-start font-sans md:text-center md:text-lg">
          copyright © 2024 Lovelined Inc. All rights reserved.
        </p>
      </Link>
    </footer>
  );
};

export default Footer;
