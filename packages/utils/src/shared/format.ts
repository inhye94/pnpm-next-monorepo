// 첫글자 대문자 표기
export const capitalizeFirstLetter = (val: string) => {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
};
