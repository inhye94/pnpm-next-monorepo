import Link from "next/link";

export interface IDetailSectionProps {
  title: string;
  children: React.ReactNode;
  subject: string;
  className?: string;
}

export default function DetailSection({
  title,
  children,
  subject,
  className,
}: IDetailSectionProps) {
  return (
    <section className={className}>
      <header className="bg-background-gray rounded-12 mb-12 flex items-center justify-between p-8 md:p-12">
        <h2 className="text-heading-6 md:text-heading-4">🚀 {title}</h2>

        <Link href={`/${subject}/edit`}>수정하기</Link>
      </header>

      <div className="py-12 md:py-24">{children}</div>
    </section>
  );
}
