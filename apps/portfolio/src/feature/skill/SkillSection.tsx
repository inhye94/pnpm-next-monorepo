import { getSkills, getStacks } from "./api/skill";

// 🔥 skills > content + experience 모두 넣어보고, 가독성이 나쁘면 내용 정리하기

export default async function SkillSection() {
  const skills = await getSkills();
  const stacks = await getStacks();

  return (
    <section>
      <h2>스킬들</h2>
      글자 리스트 쫘라락 출력 대표 4개
      <ul>{JSON.stringify(stacks)}</ul>
      <div>{JSON.stringify(skills)}</div>
    </section>
  );
}
