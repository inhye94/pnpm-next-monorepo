import classNames from "classnames";

/**
 * Container 컴포넌트
 *
 * 특징:
 * 1. 최대 1200px 너비에 가운데 정렬이 되는 레이아웃 컴포넌트
 *
 * @param {React.ReactNode} children 콘텐츠
 */

interface IContainerProps {
  className?: string;
  children: React.ReactNode;
}

const Container = ({ children, className }: IContainerProps) => {
  return (
    <div className="container">
      <div className={classNames("wrapper", className)}>{children}</div>
    </div>
  );
};

export default Container;
