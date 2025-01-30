// type
interface IOuterNavMenu {
  id: string;
  text: string;
  url: string;
}

// data
const outerNav: IOuterNavMenu[] = [
  {
    id: "outerNav-1",
    text: "깃허브",
    url: "https://github.com/inhye94",
  },
  {
    id: "outerNav-2",
    text: "블로그",
    url: "https://velog.io/@inhye94/posts",
  },
];

// component
export default function OuterNav() {
  return (
    <nav className="ml-auto">
      <h2 className="visually-hidden">외부 링크</h2>

      <ul className="flex items-center gap-16">
        {outerNav.map((menu) => (
          <li
            key={menu.id}
            className="relative after:absolute after:bottom-0 after:left-1/2 after:block after:h-1 after:w-0 after:-translate-x-1/2 after:bg-white after:transition-all after:content-[''] hover:after:w-full"
          >
            <a
              className="text-neutral-99 text-14 inline-block py-4 font-light whitespace-nowrap"
              href={menu.url}
              target="_blank"
            >
              {menu.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
