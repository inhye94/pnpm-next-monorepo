// Raio Item Styles
export const RADIO_ITEM_STYLE = "flex items-center";

export const RADIO_UNCHECKED_STYLE = `
  relative
  flex
  items-center
  justify-center
  shrink-0
  grow-0
  w-[1.6rem] h-[1.6rem]
  m-[0.8rem]
  bg-common-100
  border-solid
  border
  border-secondary
  rounded-full
  cursor-pointer
  shadow-lg
  shadow-gray-400
  transition-colors

  enabled:hover:bg-blue-200
  enabled:active:bg-blue-400
  disabled:cursor-not-allowed
  disabled:text-label-disable

  peer
`;

export const RADIO_CHECKED_STYLE = `
  absolute
  flex
  items-center
  justify-center
  w-full
  h-full
  bg-primary
  rounded-full

  after:absolute
  after:w-[0.6rem]
  after:h-[0.6rem]
  after:bg-common-100
  after:rounded-full
`;

export const RADIO_LABEL_STYLE = `
  text-caption break-keep
  peer-disabled:text-label-disable
`;
