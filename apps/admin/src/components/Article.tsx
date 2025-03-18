interface IArticleProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function Article({ title, children, className }: IArticleProps) {
  return (
    <article className={className}>
      <h3 className="text-heading-6 md:text-heading-5 mb-24 font-semibold capitalize">
        {title}
      </h3>

      <div>{children}</div>
    </article>
  );
}
