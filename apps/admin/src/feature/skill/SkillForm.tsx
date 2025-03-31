import { useMutation } from "@tanstack/react-query";
import {
  BaseButton,
  IconButton,
  TextField,
} from "@workspace/design-system/components";
import { useToastContext } from "@workspace/design-system/providers";
import { updateSkills } from "@workspace/utils/apis";
import { ISkillType } from "@workspace/utils/types";
import { useCallback } from "react";
import { useNavigate } from "react-router";
import AddedAnimation from "../../components/AddedAnimation";
import Empty from "../../components/Empty";
import { portfolioQueries } from "../../entity/portfolioQueries";
import { queryClient } from "../../providers/QueryProvider";
import { useSkill } from "./hook/useSkill";

export default function SkillForm({ skills }: { skills: ISkillType[] }) {
  const navigate = useNavigate();
  const { showToast } = useToastContext();
  const {
    skillDatas,
    addSkillItem,
    removeSkill,
    updateSkill,
    addExperience,
    updateExperience,
    removeExperience,
  } = useSkill(skills);

  const { mutate } = useMutation({
    mutationFn: () => updateSkills(skillDatas),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [...portfolioQueries.skillKey()],
      });

      showToast("수정이 완료되었습니다.", "info");
      navigate("/skill");
    },
  });

  const submitSkillForm = useCallback(() => {
    if (confirm("수정하시겠습니까?")) {
      mutate();
    }
  }, []);

  return (
    <form className="grid gap-12">
      {skillDatas.length === 0 && <Empty />}
      {skillDatas.length > 0 &&
        skillDatas.map((skill) => (
          <AddedAnimation
            key={skill.id}
            className="rounded-12 bg-background-gray relative grid gap-24 px-24 pt-48 pb-24"
          >
            <TextField
              label="스킬명"
              defaultValue={skill.title}
              name="title[]"
              onChange={(e) => updateSkill(e, skill.id)}
              required
            />

            <TextField
              label="스킬 역량"
              defaultValue={skill.content}
              name="content[]"
              onChange={(e) => updateSkill(e, skill.id)}
              required
            />

            <div className="grid gap-12">
              {skill.experience.map((exp, index) => (
                <div key={exp.id} className="flex items-end gap-8">
                  <TextField
                    label={index === 0 ? "사용 경험 및 성과" : ""}
                    defaultValue={exp.content}
                    name="experience[]"
                    onChange={(e) => updateExperience(e, skill.id, exp.id)}
                    required={index === 0}
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
                </div>
              ))}

              <div>
                <BaseButton
                  type="button"
                  size="small"
                  onClick={() => addExperience(skill.id)}
                >
                  <span aria-hidden>+</span>경험 추가하기
                </BaseButton>
              </div>
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

      <BaseButton type="button" onClick={addSkillItem}>
        <span aria-hidden>+</span>스킬 추가하기
      </BaseButton>

      <BaseButton type="button" onClick={submitSkillForm}>
        저장하기
      </BaseButton>
    </form>
  );
}
