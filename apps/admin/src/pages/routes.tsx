import { createBrowserRouter } from "react-router";
import App from "../App";
import { skillLoader, stackLoader } from "../entity/loaders";
import { queryClient } from "../providers/QueryProvider";
import NotFound from "./NotFound";
import SidebarLayout from "./SidebarLayout";
import SkillEditPage from "./SkillEditPage";
import SkillPage from "./SkillPage";
import StackEditPage from "./StackEditPage";
import StackPage from "./StackPage";

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
              { path: "edit", element: <StackEditPage /> },
            ],
          },
          {
            path: "skill",
            loader: async () => skillLoader(queryClient),
            children: [
              { index: true, element: <SkillPage /> },
              { path: "edit", element: <SkillEditPage /> },
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
