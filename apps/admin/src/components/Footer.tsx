import { Container, IconButton } from "@workspace/design-system/components";

export default function Footer() {
  return (
    <footer className="bg-background-gray">
      <Container>
        <div className="grid grid-cols-1 gap-12 py-32 md:grid-cols-4">
          <div className="flex items-center gap-8 md:col-span-1">
            <IconButton
              icon="github"
              label="깃허브"
              className="h-32 w-32"
              variant="ghost"
              onClick={() => openInNewTab("https://github.com/inhye94")}
            />

            <IconButton
              icon="velog"
              label="벨로그"
              className="h-32 w-32"
              variant="ghost"
              onClick={() => openInNewTab("https://velog.io/@inhye94/posts")}
            />
          </div>
          <div className="md:col-span-3">
            <div className="flex items-center gap-12">
              <div className="relative h-60 w-60 overflow-hidden rounded-full">
                <img
                  src="https://res.cloudinary.com/dn9hy4vyn/image/upload/v1740722488/imhsy9xcmxmq9b2kvuwf.jpg"
                  alt="멋쟁이 개발자 박인혜"
                  className="object-cover"
                />
              </div>

              <p className="text-neutral-50">
                Copyright 2025. Inhye. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

function openInNewTab(url: string) {
  if (typeof window !== "undefined") {
    const newWindow = window.open(url, "_blank");

    if (newWindow) {
      newWindow.focus();
    }
  }
}
