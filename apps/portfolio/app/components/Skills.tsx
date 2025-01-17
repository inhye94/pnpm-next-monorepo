export interface IStackType {
  id: string;
  content: string;
}

export interface ISkillType {
  id: string;
  title: string;
  content: string;
  experience: IStackType[];
}

// 🔥 skills > content + experience 모두 넣어보고, 가독성이 나쁘면 내용 정리하기

const Skills = () => {
  return (
    <section>
      <h2>스킬들</h2>
      글자 리스트 쫘라락 출력 대표 4개
      <ul>
        {/* {stacks.map(({ id, content }) => (
          <li key={id}>{content}</li>
        ))} */}
      </ul>
      <div>
        {/* {skills.map((skill) => (
          <article key={skill.id}>
            <h4>{skill.title}</h4>
            <p>{skill.content}</p>
            <ul>
              {skill.experience.map((item) => (
                <li key={item.id}>{item.content}</li>
              ))}
            </ul>
          </article>
        ))} */}
      </div>
    </section>
  );
};

export default Skills;
