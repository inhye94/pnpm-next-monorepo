import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

/**
 * Markdown 컴포넌트
 * @param {React.ReactNode} children 마크다운 언어
 * 
 * @example - 리스트 출력
<Markdown>
  {project.highlights
    ?.map((highlight) => `- ${highlight.content}\n`)
    .join("")}
</Markdown>
 * @example - 일반
<Markdown>
안녕하세요. 저는 **세상에서 제일 멋진 프론트엔드 개발자**에요.  
제가 잘 하는 건 `긍정으로 이겨내고 성장하기`입니다!
</Markdown>
 */

// type
interface IReactMarkdownProps {
  children: React.ReactNode;
}

// component
export default function ReactMarkdown({ children }: IReactMarkdownProps) {
  return (
    <Markdown className="markdown" remarkPlugins={[remarkGfm]}>
      {String(children)}
    </Markdown>
  );
}
