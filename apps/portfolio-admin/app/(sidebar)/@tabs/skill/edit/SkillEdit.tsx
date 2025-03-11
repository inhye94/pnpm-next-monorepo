"use client";

import AddedAnimation from "@/components/AddedAnimation";
import Article from "@/components/Article";
import {
  BaseButton,
  IconButton,
  TextField,
} from "@workspace/design-system/components";
import { ISkillType, IStackType } from "@workspace/utils/types";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const newSkillTemplate: ISkillType = {
  id: "",
  title: "",
  content: "",
  experience: [
    {
      id: "",
      content: "",
    },
  ],
};

const newExperienceTemplate: IStackType = {
  id: "",
  content: "",
};

export default function SkillEdit({ skills }: { skills?: ISkillType[] }) {
  const [skillDatas, setSkillDatas] = useState<ISkillType[]>([]);

  useEffect(() => {
    setSkillDatas(skills ?? []);
  }, []);

  const addSkill = useCallback(() => {
    setSkillDatas((prev) => prev.concat({ ...newSkillTemplate, id: uuidv4() }));
  }, []);

  const removeSkill = useCallback((id: string) => {
    setSkillDatas((prev) => prev.filter((skill) => skill.id != id));
  }, []);

  const updateSkill = useCallback(
    (e: ChangeEvent<HTMLInputElement>, id: string) => {
      const newState = skillDatas.map((skill) => {
        const { name } = e.target;
        if (skill.id === id) {
          return { ...skill, [name]: e.target.value.trim() };
        } else {
          return skill;
        }
      });

      setSkillDatas(newState);
    },
    [skillDatas],
  );

  const addExperience = useCallback(
    (skillId: string) => {
      const newState = skillDatas.map((skill) => {
        if (skill.id === skillId) {
          return {
            ...skill,
            experience: skill.experience.concat({
              ...newExperienceTemplate,
              id: uuidv4(),
            }),
          };
        } else {
          return skill;
        }
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

  const updateExperience = useCallback(
    (e: ChangeEvent<HTMLInputElement>, skillId: string, expId: string) => {
      const newState = skillDatas.map((skill) => {
        if (skill.id === skillId) {
          const newExp = skill.experience.map((exp) => {
            if (exp.id === expId) {
              return { ...exp, content: e.target.value.trim() };
            } else {
              return exp;
            }
          });
          return { ...skill, experience: newExp };
        } else {
          return skill;
        }
      });

      setSkillDatas(newState);
    },
    [skillDatas],
  );

  return (
    <Article title="Skills">
      <div className="flex flex-col gap-16">
        {skillDatas?.map((skill) => (
          <AddedAnimation
            key={skill.id}
            className="bg-background-gray rounded-16 relative flex flex-col gap-16 p-16 pt-48 md:p-24 md:pt-60"
          >
            <TextField
              label="스킬명"
              placeholder="스킬명을 입력해주세요"
              name="title"
              value={skill.title}
              onChange={(e) => updateSkill(e, skill.id)}
              required
            />

            <TextField
              label="스킬 능력"
              placeholder="스킬 능력을 입력해주세요"
              name="content"
              value={skill.content}
              onChange={(e) => updateSkill(e, skill.id)}
              required
            />

            <div>
              {skill.experience.map((exp, index) => (
                <AddedAnimation
                  key={exp.id}
                  className="flex items-end gap-8 py-8"
                >
                  <TextField
                    label={index === 0 ? "경험" : ""}
                    placeholder="스택을 사용한 경험을 입력해주세요"
                    name="experience[]"
                    value={exp.content}
                    onChange={(e) => updateExperience(e, skill.id, exp.id)}
                    required
                  />

                  <IconButton
                    type="button"
                    icon="close"
                    variant="ghost"
                    label="경험 삭제하기"
                    className="h-40 w-40 shrink-0"
                    onClick={() => removeExperience(skill.id, exp.id)}
                    disabled={index === 0}
                  />
                </AddedAnimation>
              ))}

              <BaseButton
                type="button"
                size="small"
                onClick={() => addExperience(skill.id)}
              >
                <i aria-hidden>+</i>경험 추가하기
              </BaseButton>
            </div>

            <div className="absolute top-12 right-12">
              <IconButton
                type="button"
                icon="close"
                variant="ghost"
                label="스킬 삭제하기"
                className="text-24"
                onClick={() => removeSkill(skill.id)}
              />
            </div>
          </AddedAnimation>
        ))}
      </div>

      <div className="mt-24">
        <BaseButton type="button" size="small" onClick={addSkill}>
          <i aria-hidden>+</i>스킬 추가하기
        </BaseButton>
      </div>
    </Article>
  );
}
