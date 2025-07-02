export type AsPropType<T extends React.ElementType> = {
  as?: T;
};

export type PolymorphicComponentProps<
  T extends React.ElementType,
  Props extends object = Record<string, unknown>,
> = AsPropType<T> &
  Props &
  Omit<React.ComponentPropsWithoutRef<T>, keyof Props | "as">;
