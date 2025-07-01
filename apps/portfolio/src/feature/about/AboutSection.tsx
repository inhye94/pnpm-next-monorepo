"use client";

import ShakingText from "@/components/animation/Shaking";
import Stagger from "@/components/animation/Stagger";
import Section from "@/components/layout/Section";
import React from "react";

// data
interface IAboutText {
  id: string;
  title: string;
  icon?: React.ReactNode;
}

const ABOUT_TEXT: IAboutText[] = [
  { id: "about-1", title: "안녕하세요!", icon: <ShakingText>👋</ShakingText> },
  { id: "about-2", title: "사용자 피드백을 바탕으로" },
  { id: "about-3", title: "사용자 경험(UX)을 개선하는" },
  { id: "about-4", title: "프론트엔드 개발자" },
  { id: "about-5", title: "박인혜입니다" },
];

// component
export default function AboutSection() {
  return (
    <Section
      title="About"
      id="about"
      className="bg-primary flex aspect-square max-h-400 min-h-300 w-full items-center"
      hideTitle
    >
      <Stagger
        staggerTime={1}
        className="text-20 lg:text-30 text-center text-white lg:font-light"
      >
        {ABOUT_TEXT.map((text) => (
          <Stagger.Item key={text.id}>
            {text.title}
            {text.icon}
          </Stagger.Item>
        ))}
      </Stagger>
    </Section>
  );
}
