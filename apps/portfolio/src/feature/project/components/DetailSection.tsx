/**
 * DetailSection 컴포넌트
 *
 * @param {string} 상세 제목
 * @param {React.ReactNode} 상세 내용
 */

// type
interface IDetailSectionProps {
  title: string;
  children: React.ReactNode;
}

// component
export default function DetailSection({
  children,
  title,
}: IDetailSectionProps) {
  return (
    <section>
      <h4 className="text-heading-5 lg:text-heading-4 text-neutral-10 mb-12">
        {title}
      </h4>

      <div className="text-neutral-20 text-16">{children}</div>
    </section>
  );
}
