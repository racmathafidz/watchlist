import Link from 'next/link'

export default function BrandIcon() {
    return (
        <Link href="/">
            <a>
                <h1 className="text-red-700 text-3xl font-title font-semibold">Watch</h1>
                <h2 className="text-right text-xl font-title font-light leading-none">list.</h2>
            </a>
        </Link>
    )
}
