import {
  BaseBadge,
  BaseButton,
  BaseInput,
  TextField,
} from "@workspace/design-system/components";
import "@workspace/design-system/styles.css";

export default function Home() {
  return (
    <main>
      <h1 className="text-heading-1">Project 1</h1>
      <h2>title2</h2>
      <h3>title3</h3>
      <h4>title4</h4>
      <h5 className="text-label-disable">title5</h5>
      <h6 className="text-primary">title6</h6>

      <BaseBadge>asdf</BaseBadge>

      <BaseButton>
        나오는데 스타일이 적용 안된다?<span>adsf</span>
      </BaseButton>
      <BaseButton variant="ghost">
        나오는데 스타일이 적용 안된다?<span>adsf</span>
      </BaseButton>
      <BaseButton variant="outlined">
        나오는데 스타일이 적용 안된다?<span>adsf</span>
      </BaseButton>
      <TextField label="foo" placeholder="안뇽하세요!" />
      <BaseInput placeholder="바보" />
      <p>테스트</p>
    </main>
  );
}
