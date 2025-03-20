import { ISkillType, IStackType } from "@workspace/utils/types";
import { ChangeEvent, useCallback, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const newExperienceTemplate: IStackType = {
  id: "",
  content: "",
};

const newSkillTemplate: ISkillType = {
  id: "",
  title: "",
  content: "",
  experience: [{ id: "", content: "" }],
};

export function useSkill(skills: ISkillType[]) {
  const [skillDatas, setSkillDatas] = useState<ISkillType[]>(skills);

  const addSkillItem = useCallback(() => {
    setSkillDatas((prev) => prev.concat({ ...newSkillTemplate, id: uuidv4() }));
  }, [skillDatas]);

  const removeSkill = useCallback(
    (id: string) => {
      setSkillDatas((prev) => prev.filter((skill) => skill.id !== id));
    },
    [skillDatas],
  );

  const updateSkill = useCallback(
    (e: ChangeEvent<HTMLInputElement>, id: string) => {
      const newState = skillDatas.map((skill) => {
        const { name } = e.target;
        return skill.id === id
          ? { ...skill, [name]: e.target.value.trim() }
          : skill;
      });

      setSkillDatas(newState);
    },
    [skillDatas],
  );

  const addExperience = useCallback(
    (skillId: string) => {
      const newState = skillDatas.map((skill) => {
        return skill.id === skillId
          ? {
              ...skill,
              experience: skill.experience.concat({
                ...newExperienceTemplate,
                id: uuidv4(),
              }),
            }
          : skill;
      });

      setSkillDatas(newState);
    },
    [skillDatas],
  );

  const updateExperience = useCallback(
    (e: ChangeEvent<HTMLInputElement>, skillId: string, expId: string) => {
      const newState = skillDatas.map((skill) => {
        if (skill.id === skillId) {
          const newExp = skill.experience.map((exp) => {
            return exp.id === expId
              ? { ...exp, content: e.target.value.trim() }
              : exp;
          });
          return { ...skill, experience: newExp };
        }

        return skill;
      });

      setSkillDatas(newState);
    },
    [skillDatas],
  );

  const removeExperience = useCallback(
    (skillId: string, expId: string) => {
      const newState = skillDatas.map((skill) => {
        if (skill.id === skillId) {
          return {
            ...skill,
            experience: skill.experience.filter((exp) => exp.id !== expId),
          };
        } else {
          return skill;
        }
      });

      setSkillDatas(newState);
    },
    [skillDatas],
  );

  return {
    addSkillItem,
    skillDatas,
    removeSkill,
    updateSkill,
    addExperience,
    updateExperience,
    removeExperience,
  };
}
