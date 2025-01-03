// Checkbox Item Styles
export const CHECKBOX_ITEM_STYLE = "flex items-center";

export const CHECKBOX_INDICATOR_STYLE = `
  flex
  items-center
  justify-center
  w-[3.2rem] h-[3.2rem]
  text-[1.8rem]
`;

export const CHECKBOX_UNCHECKED_STYLE = `
  relative

  disabled:cursor-not-allowed
  disabled:text-label-disable

  peer
`;
export const CHECKBOX_CHECKED_STYLE = `
  absolute
  left-0
  top-0
`;
