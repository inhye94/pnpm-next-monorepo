import classNames from "classnames";

interface IContainerProps {
  className?: string;
  children: React.ReactNode;
}

const Container = ({ children, className }: IContainerProps) => {
  return (
    <div className="flex w-full flex-col items-center gap-8">
      <div className={classNames("w-full max-w-1200 px-8", className)}>
        {children}
      </div>
    </div>
  );
};

export default Container;
