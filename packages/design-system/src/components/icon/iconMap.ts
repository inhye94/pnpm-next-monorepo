import { lazy } from "react";

export const iconMap = {
  close: lazy(() =>
    import("react-icons/io").then((m) => ({ default: m.IoIosClose })),
  ),
  company: lazy(() =>
    import("react-icons/io").then((m) => ({ default: m.IoIosBusiness })),
  ),
  folder: lazy(() =>
    import("react-icons/io").then((m) => ({ default: m.IoIosFolderOpen })),
  ),
  hamburger: lazy(() =>
    import("react-icons/io").then((m) => ({ default: m.IoIosMenu })),
  ),
  link: lazy(() =>
    import("react-icons/io").then((m) => ({ default: m.IoIosLink })),
  ),
  rocket: lazy(() =>
    import("react-icons/io").then((m) => ({ default: m.IoIosRocket })),
  ),
  radioFilled: lazy(() =>
    import("react-icons/io").then((m) => ({ default: m.IoIosRadioButtonOn })),
  ),
  radioOutlined: lazy(() =>
    import("react-icons/io").then((m) => ({ default: m.IoIosRadioButtonOff })),
  ),
  checkboxFilled: lazy(() =>
    import("react-icons/io").then((m) => ({ default: m.IoIosCheckbox })),
  ),
  checkboxOutlined: lazy(() =>
    import("react-icons/io").then((m) => ({ default: m.IoIosCheckboxOutline })),
  ),
  checkboxGhost: lazy(() =>
    import("react-icons/io").then((m) => ({ default: m.IoIosCheckmark })),
  ),
  github: lazy(() =>
    import("react-icons/io").then((m) => ({ default: m.IoLogoGithub })),
  ),
  externalLink: lazy(() =>
    import("react-icons/fi").then((m) => ({ default: m.FiExternalLink })),
  ),
  velog: lazy(() =>
    import("react-icons/si").then((m) => ({ default: m.SiVelog })),
  ),
};
