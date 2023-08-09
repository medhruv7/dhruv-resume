"use client";
import Acheivements from "@/components/Acheivements";
import Education from "@/components/Education";
import Experience from "@/components/ExperienceScreen";
import HomeScreen from "@/components/HomeScreen";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Technologies from "@/components/Technologies";
import { useRef } from "react";

export default function Home() {
  const homeRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const technologiesRef = useRef(null);
  const educationRef = useRef(null);
  const acheivementsRef = useRef(null);

  return (
    <>
      <Navbar
        homeRef={homeRef}
        experienceRef={experienceRef}
        projectsRef={projectsRef}
        technologiesRef={technologiesRef}
        educationRef={educationRef}
        acheivementsRef={acheivementsRef}
      />
      <HomeScreen homeRef={homeRef} />
      <Experience experienceRef={experienceRef} />
      <Projects projectsRef={projectsRef} />
      <Technologies technologiesRef={technologiesRef} />
      <Education educationRef={educationRef} />
      <Acheivements acheivementsRef={acheivementsRef} />
    </>
  );
}
