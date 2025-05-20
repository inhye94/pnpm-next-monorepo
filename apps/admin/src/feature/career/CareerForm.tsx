import { useMutation } from "@tanstack/react-query";
import {
  BaseButton,
  IconButton,
  TextField,
} from "@workspace/design-system/components";
import { useToastContext } from "@workspace/design-system/providers";
import { updateCareers } from "@workspace/utils/apis";
import { ICareerItem } from "@workspace/utils/types";
import { useCallback } from "react";
import { useNavigate } from "react-router";
import AddedAnimation from "../../components/AddedAnimation";
import Empty from "../../components/Empty";
import { portfolioQueries } from "../../entity/portfolioQueries";
import { queryClient } from "../../providers/QueryProvider";
import useCareer from "./hook/useCareer";

export default function CareerForm({ careers }: { careers: ICareerItem[] }) {
  const navigate = useNavigate();
  const { showToast } = useToastContext();
  const {
    updateCareer,
    addCareerItem,
    removeCareerItem,
    addRole,
    updateRole,
    removeRole,
    careerDatas,
  } = useCareer(careers);

  const { mutate } = useMutation({
    mutationFn: () => updateCareers(careerDatas),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [...portfolioQueries.careerKey()],
      });

      showToast("수정이 완료되었습니다.", "info");
      navigate("/career");
    },
  });

  const submitCareerForm = useCallback(() => {
    if (confirm("수정하시겠습니까?")) {
      mutate();
    }
  }, []);

  return (
    <form className="grid gap-12">
      {careerDatas.length === 0 && <Empty />}
      {careerDatas.length > 0 &&
        careerDatas.map((career) => (
          <AddedAnimation
            key={career.id}
            className="rounded-12 bg-background-gray relative grid gap-24 px-24 pt-48 pb-24"
          >
            <TextField
              label="회사명"
              placeholder="회사명을 입력하세요"
              defaultValue={career.corp}
              name="corp[]"
              onChange={(e) => updateCareer(e, career.id)}
              required
            />

            <TextField
              label="근무 기간"
              placeholder="근무 기간을 입력하세요"
              defaultValue={career.period}
              name="period[]"
              onChange={(e) => updateCareer(e, career.id)}
              required
            />

            <div className="grid gap-12">
              <TextField
                label="주요 성과"
                placeholder="주요 성과를 입력하세요"
                defaultValue={career.summary}
                name="summary[]"
                onChange={(e) => updateCareer(e, career.id)}
                required
              />

              {career.roles.map((role, index) => (
                <div key={role.id} className="flex items-end gap-8">
                  <TextField
                    label={index === 0 ? "상세 내용" : ""}
                    placeholder="상세 내용을 입력하세요"
                    defaultValue={role.content}
                    name="role[]"
                    onChange={(e) => updateRole(e, career.id, role.id)}
                    required
                  />

                  <IconButton
                    type="button"
                    icon="close"
                    variant="ghost"
                    label="상세 성과 삭제하기"
                    className="h-40 w-40 shrink-0"
                    onClick={() => removeRole(career.id, role.id)}
                    disabled={index === 0}
                  />
                </div>
              ))}

              <div>
                <BaseButton
                  type="button"
                  size="small"
                  onClick={() => addRole(career.id)}
                >
                  <span aria-hidden>+</span>성과 추가하기
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
                onClick={() => removeCareerItem(career.id)}
              />
            </div>
          </AddedAnimation>
        ))}

      <BaseButton type="button" onClick={addCareerItem}>
        <span aria-hidden>+</span>경력 추가하기
      </BaseButton>

      <BaseButton type="button" onClick={submitCareerForm}>
        저장하기
      </BaseButton>
    </form>
  );
}
