import "@workspace/design-system/src/styles/main.css";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main>
        <h1 className="text-heading-1">Project 1</h1>
        <h2>title2</h2>
        <h3>title3</h3>
        <h4>title4</h4>
        <h5 className="text-primary">title5</h5>
        <p>잘 되네용</p>
      </main>
    </div>
  );
}
