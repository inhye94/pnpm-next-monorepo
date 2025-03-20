import { IconButton } from "@workspace/design-system/components";
import { useNavigate } from "react-router";

export interface IArticleProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  goBackButton?: boolean;
  form?: boolean;
}

export default function Article({
  title,
  children,
  className,
  goBackButton,
  form,
}: IArticleProps) {
  const navigate = useNavigate();
  const goBack = () => {
    if (!form) {
      navigate(-1);
      return;
    }

    if (window.confirm("수정 내용은 삭제될 수 있습니다.")) {
      navigate(-1);
    }
  };

  return (
    <article className={className}>
      <div className="mb-24 flex h-44 items-center gap-12">
        {goBackButton && (
          <IconButton
            icon="chevron"
            label="뒤로가기"
            variant="ghost"
            onClick={goBack}
          />
        )}
        <h3 className="text-heading-6 md:text-heading-5 font-semibold capitalize">
          {title}
        </h3>
      </div>

      <div>{children}</div>
    </article>
  );
}
