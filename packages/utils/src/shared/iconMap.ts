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
  externalLink: lazy(() =>
    import("react-icons/fi").then((m) => ({ default: m.FiExternalLink })),
  ),
  tool: lazy(() =>
    import("react-icons/fa").then((m) => ({ default: m.FaTools })),
  ),
  email: lazy(() =>
    import("react-icons/md").then((m) => ({ default: m.MdEmail })),
  ),
  birth: lazy(() =>
    import("react-icons/fa").then((m) => ({ default: m.FaBirthdayCake })),
  ),
  phone: lazy(() =>
    import("react-icons/md").then((m) => ({ default: m.MdPhoneIphone })),
  ),
  school: lazy(() =>
    import("react-icons/md").then((m) => ({ default: m.MdSchool })),
  ),
  person: lazy(() =>
    import("react-icons/md").then((m) => ({ default: m.MdPerson })),
  ),
  doubleArrow: lazy(() =>
    import("react-icons/pi").then((m) => ({ default: m.PiCaretDoubleUpBold })),
  ),
  chevron: lazy(() =>
    import("react-icons/io5").then((m) => ({ default: m.IoChevronBack })),
  ),
  document: lazy(() =>
    import("react-icons/io5").then((m) => ({ default: m.IoDocumentText })),
  ),

  // social
  github: lazy(() =>
    import("react-icons/io").then((m) => ({ default: m.IoLogoGithub })),
  ),
  velog: lazy(() =>
    import("react-icons/si").then((m) => ({ default: m.SiVelog })),
  ),

  // stack
  react: lazy(() =>
    import("react-icons/fa").then((m) => ({ default: m.FaReact })),
  ),
  next: lazy(() =>
    import("react-icons/ri").then((m) => ({ default: m.RiNextjsFill })),
  ),
  typescript: lazy(() =>
    import("react-icons/si").then((m) => ({ default: m.SiTypescript })),
  ),
  javascript: lazy(() =>
    import("react-icons/si").then((m) => ({ default: m.SiJavascript })),
  ),
  storybook: lazy(() =>
    import("react-icons/si").then((m) => ({ default: m.SiStorybook })),
  ),
  tailwindcss: lazy(() =>
    import("react-icons/si").then((m) => ({ default: m.SiTailwindcss })),
  ),
  scss: lazy(() =>
    import("react-icons/si").then((m) => ({ default: m.SiSass })),
  ),
  emotion: lazy(() =>
    import("react-icons/gi").then((m) => ({ default: m.GiHarryPotterSkull })),
  ),
  pnpm: lazy(() =>
    import("react-icons/si").then((m) => ({ default: m.SiPnpm })),
  ),
  husky: lazy(() =>
    import("react-icons/pi").then((m) => ({ default: m.PiDogFill })),
  ),
  vite: lazy(() =>
    import("react-icons/si").then((m) => ({ default: m.SiVite })),
  ),
  radix: lazy(() =>
    import("react-icons/si").then((m) => ({ default: m.SiRadixui })),
  ),
  lighthouse: lazy(() =>
    import("react-icons/si").then((m) => ({ default: m.SiLighthouse })),
  ),
  tanstack: lazy(() =>
    import("react-icons/lu").then((m) => ({ default: m.LuTreePalm })),
  ),
  css: lazy(() =>
    import("react-icons/si").then((m) => ({ default: m.SiCss3 })),
  ),
  yarn: lazy(() =>
    import("react-icons/si").then((m) => ({ default: m.SiYarn })),
  ),
  node: lazy(() =>
    import("react-icons/io5").then((m) => ({ default: m.IoLogoNodejs })),
  ),
  express: lazy(() =>
    import("react-icons/si").then((m) => ({ default: m.SiExpress })),
  ),
  socket: lazy(() =>
    import("react-icons/tb").then((m) => ({ default: m.TbBrandSocketIo })),
  ),
  firebase: lazy(() =>
    import("react-icons/si").then((m) => ({ default: m.SiFirebase })),
  ),
  cloudinary: lazy(() =>
    import("react-icons/si").then((m) => ({ default: m.SiCloudinary })),
  ),
};
