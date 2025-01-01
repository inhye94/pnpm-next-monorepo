import "@workspace/design-system/src/styles/main.css";
import BaseButton from "@workspace/design-system/src/components/button/BaseButton";

export default function Home() {
  return (
    <main className="text-body">
      <h1 className="text-heading-1">Project 1</h1>
      <h2>title2</h2>
      <h3>title3</h3>
      <h4>title4</h4>
      <h5 className="text-label-disable">title5</h5>
      <p>잘 되네용</p>
      <BaseButton>
        나오는데 스타일이 적용 안된다?<span>adsf</span>
      </BaseButton>
      <BaseButton variant="ghost">
        나오는데 스타일이 적용 안된다?<span>adsf</span>
      </BaseButton>
      <BaseButton variant="outlined">
        나오는데 스타일이 적용 안된다?<span>adsf</span>
      </BaseButton>
    </main>
  );
}
