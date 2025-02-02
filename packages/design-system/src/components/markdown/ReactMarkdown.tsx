import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

/**
 * Markdown 컴포넌트
 * @param {boolean} list 리스트 형태로 출력
 * @param {string} children 마크다운 언어
 */

// type
interface IReactMarkdownProps {
  list?: boolean;
  children: string;
}

// component
export default function ReactMarkdown({ list, children }: IReactMarkdownProps) {
  let markdown = String(children);

  if (list) {
    markdown = `- ${markdown}`;
  }

  return (
    <Markdown className="markdown" remarkPlugins={[remarkGfm]}>
      {markdown}
    </Markdown>
  );
}
