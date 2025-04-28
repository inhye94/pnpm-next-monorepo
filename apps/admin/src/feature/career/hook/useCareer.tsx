import { ICareerItem } from "@workspace/utils/types";
import { ChangeEvent, useCallback, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function useCareer(careers: ICareerItem[]) {
  const [careerDatas, setCareerDatas] = useState(careers);

  const updateCareer = useCallback(
    (e: ChangeEvent<HTMLInputElement>, id: string) => {
      const { name } = e.target;
      const newState = careerDatas.map((career) => {
        return career.id === id
          ? { ...career, [name]: e.target.value.trim() }
          : career;
      });

      setCareerDatas(newState);
    },
    [careerDatas],
  );

  const addCareerItem = useCallback(() => {
    const newCareer = {
      id: crypto.randomUUID(),
      corp: "",
      period: "",
      summary: "",
      roles: [{ id: uuidv4(), content: "" }],
    };

    setCareerDatas((prev) => [...prev, newCareer]);
  }, [careerDatas]);

  const removeCareerItem = useCallback(
    (id: string) => {
      setCareerDatas((prev) => prev.filter((item) => item.id !== id));
    },
    [careerDatas],
  );

  const addRole = useCallback(
    (id: string) => {
      setCareerDatas((prev) =>
        prev.map((item) =>
          item.id === id
            ? {
                ...item,
                roles: [...item.roles, { id: uuidv4(), content: "" }],
              }
            : item,
        ),
      );
    },
    [careerDatas],
  );

  const updateRole = useCallback(
    (e: ChangeEvent<HTMLInputElement>, careerId: string, roleId: string) => {
      const newState = careerDatas.map((item) => {
        if (item.id === careerId) {
          const newRole = item.roles.map((role) => {
            return role.id === roleId
              ? { ...role, content: e.target.value.trim() }
              : role;
          });
          return { ...item, roles: newRole };
        }

        return item;
      });

      setCareerDatas(newState);
    },
    [careerDatas],
  );

  const removeRole = useCallback(
    (careerId: string, roleId: string) => {
      const newState = careerDatas.map((item) => {
        return item.id === careerId
          ? {
              ...item,
              roles: item.roles.filter((role) => role.id !== roleId),
            }
          : item;
      });

      setCareerDatas(newState);
    },
    [careerDatas],
  );

  return {
    updateCareer,
    addCareerItem,
    removeCareerItem,
    addRole,
    updateRole,
    removeRole,
    careerDatas,
  };
}
