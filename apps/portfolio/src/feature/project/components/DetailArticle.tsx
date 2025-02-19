/**
 * DetailArticle 컴포넌트
 *
 * 특징: title은 하나인데, contents가 1개 이상 있을 때 사용
 *
 * @param {string} 소제목
 * @param {React.ReactNode} 주제에 대한 내용 (1개 이상)
 */

// type
interface IDetailArticleProps {
  title: string;
  children: React.ReactNode;
}

// component
export default function DetailArticle({
  title,
  children,
}: IDetailArticleProps) {
  return (
    <article className="not-last:mb-12">
      <h5 className="bg-background-gray mb-4 p-4 font-semibold">{title}</h5>
      {children}
    </article>
  );
}
