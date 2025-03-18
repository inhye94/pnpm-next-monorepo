import { createBrowserRouter } from "react-router";
import App from "../app/App";
import NotFound from "../app/error/NotFound";
import { skillLoader, stackLoader } from "../entity/loaders";
import SkillPage from "../feature/skill/SkillPage";
import StackPage from "../feature/stack/StackPage";
import SidebarLayout from "../layouts/SidebarLayout";
import { queryClient } from "../providers/QueryProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <SidebarLayout />,
        children: [
          {
            path: "career",
            children: [
              { index: true, element: <p>커리어</p> },
              { path: "edit", element: <p>커리어 - 수정</p> },
            ],
          },
          {
            path: "stack",
            loader: async () => stackLoader(queryClient),
            children: [
              { index: true, element: <StackPage /> },
              { path: "edit", element: <p>스텍 - 수정</p> },
            ],
          },
          {
            path: "skill",
            loader: async () => skillLoader(queryClient),
            children: [
              { index: true, element: <SkillPage /> },
              { path: "edit", element: <p>스킬 - 수정</p> },
            ],
          },
          {
            path: "project",
            children: [
              { index: true, element: <p>프로젝트</p> },
              { path: "edit", element: <p>프로젝트 - 수정</p> },
            ],
          },
        ],
      },
      {
        path: "*", // ❗ 잘못된 경로를 모두 처리
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
