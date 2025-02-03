import Link from "next/link";

export default function Logo() {
  return (
    <h1 className="text-heading-4 lg:text-heading-3 text-neutral-99 flex items-center whitespace-nowrap">
      <Link href="/">Inhye&apos;s Portfolio</Link>
    </h1>
  );
}
