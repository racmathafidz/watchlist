/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import Link from 'next/link';

export default function BrandIcon({ footer }) {
  if (footer === true) {
    return (
      <Link href="/">
        <a className="mt-1">
          <h1 className="text-red-700 text-2xl sm:text-3xl font-title font-semibold">Watch</h1>
          <h2 className="text-right text-lg sm:text-xl font-title font-light leading-none">list.</h2>
        </a>
      </Link>
    );
  }

  return (
    <Link href="/">
      <a>
        <h1 className="text-red-700 text-3xl font-title font-semibold">Watch</h1>
        <h2 className="text-right text-xl font-title font-light leading-none">list.</h2>
      </a>
    </Link>
  );
}
