import classNames from "classnames";

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
