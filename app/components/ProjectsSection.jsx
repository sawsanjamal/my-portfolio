"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectData = [
  {
    id: 1,
    title: "Bakery App",
    description:
      "A full stack Flutter application, where users can browse a menu, add addons, and items to their cart and checkout.",
    image: "/images/projects/1.png",
    tag: ["Flutter"],
    gitUrl: "https://github.com/sawsanjamal/advanced_bakery",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Stretching App",
    description:
      "A full-stack React web application, where users can subscribe to view and save stretches and health-related articles.",
    image: "/images/projects/2.png",
    tag: ["CSS", "React", "Javascript"],
    gitUrl: "https://github.com/sawsanjamal/my-stretching-app",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Job Board",
    description:
      "A full-stack React web application, where users can manage tasks and create/publish jobs.",
    image: "/images/projects/3.png",
    tag: ["Javascript", "React", "CSS", "Typescript"],
    gitUrl: "https://github.com/sawsanjamal/job-board",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Google Calendar Clone",
    description:
      "A full-stack Javascript calendar, where users can add events, delete events, and click to see more events.",
    image: "/images/projects/4.png",
    tag: ["Javascript", "HTML", "CSS"],
    gitUrl: "https://github.com/sawsanjamal/google-calendar-clone-js",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Pictionary Clone",
    description: "Online multiplayer Socket.io based Pictionary game",
    image: "/images/projects/5.png",
    tag: ["Javascript", "HTML", "CSS"],
    gitUrl: "https://github.com/sawsanjamal/PictionaryClone",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Recipes App",
    description:
      "Online application to access different recipes, filter recipes and favorite recipes.",
    image: "/images/projects/6.png",
    tag: ["Flutter"],
    gitUrl: "https://github.com/sawsanjamal/recipes-app",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Expenses App",
    description: "Online application to access add, and remove expenses.",
    image: "/images/projects/7.png",
    tag: ["Flutter"],
    gitUrl: "https://github.com/sawsanjamal/expenses-app",
    previewUrl: "/",
  },
];
const ProjectsSection = () => {
  const [tag, setTag] = useState("React");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectData.filter((project) =>
    project.tag.includes(tag)
  );
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="HTML"
          isSelected={tag === "HTML"}
        />

        <ProjectTag
          onClick={handleTagChange}
          name="Javascript"
          isSelected={tag === "Javascript"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="CSS"
          isSelected={tag === "CSS"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="React"
          isSelected={tag === "React"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Flutter"
          isSelected={tag === "Flutter"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Typescript"
          isSelected={tag === "Typescript"}
        />
      </div>
      <div>
        <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
          {filteredProjects.map((project, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectsSection;
