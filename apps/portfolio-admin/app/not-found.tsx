import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Not found",
};

export default function NotFound() {
  return (
    <div>
      <h2>Not Found!</h2>
      <Link href="/">Return Home</Link>
    </div>
  );
}
