// Raio Item Styles
export const RADIO_ITEM_STYLE = "flex items-center";

export const RADIO_INDICATOR_STYLE = `
  flex
  items-center
  justify-center
  w-32 h-32
  text-30
`;

export const RADIO_UNCHECKED_STYLE = `
  relative

  disabled:cursor-not-allowed
  disabled:text-label-disable

  peer
`;

export const RADIO_CHECKED_STYLE = `
  absolute
  left-0
  top-0
`;

export const LABEL_STYLE = `
  text-caption break-keep
  peer-disabled:text-label-disable
  peer-disabled:line-through
  peer-disabled:cursor-not-allowed
`;
