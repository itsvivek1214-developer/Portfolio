import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { useState } from "react";

const projects = [

  {
  name: "TaskForge Full Stack Task Management App ",
  link: "https://github.com/itsvivek1214-developer/TaskForge-backend.git",
  tech: ["Java", "Spring Boot", "REST API", "JWT", "MySQL"],
  idea: "Built and deployed a full-stack task management app with JWT authentication, role-based access, and Kanban workflow. Developed RESTful APIs with validation, error handling, and clean MVC architecture.",
},
{
  name: "QuizMaster  Full Stack Quiz Platform",
  // link: "",
  tech: ["Java", "Spring MVC", "REST API", "MySQL", "JavaScript"],
  idea: "Developed a configurable quiz platform with real-time scoring, dynamic question sets, and session management. Integrated third-party APIs with retry logic and fallback mechanisms for high availability.Developed a configurable quiz platform with real-time scoring, dynamic question sets, and session management. Integrated third-party APIs with retry logic and fallback mechanisms for high availability.",
},
{
  name: "Employee Management System",
  // link: "",
  tech: ["Java", "Hibernate", "JDBC", "MySQL", "Collections Framework"],
  idea: "Engineered a console-based CRUD application using Hibernate ORM and Java Collections for persistent employee record management, covering add, update, view, and delete operations",
},
{
  name: "Non-Germinoma Brain Tumour Detection",
  // link: "",
  tech: [ "Python", "CNN", "Deep Learning", "OpenCV"],
  idea: "Built a CNN model to classify non-germinoma brain tumours from MRI images, focusing on preprocessing pipelines, feature extraction, and optimizing classification accuracy.",
}

];

const ProjectsSection = () => {
  const [showMore, setShowMore] = useState(false);

  // Show only 5 projects initially
  const visibleProjects = showMore ? projects : projects.slice(0, 5);

  return (
    <div
      id="projects"
      className="flex flex-col items-center mt-16 lg:mt-24 px-6 text-center"
    >
      {/* Section Title */}
      <motion.h2
        className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Projects
      </motion.h2>

      {/* Projects Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
        {visibleProjects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-neutral-900 rounded-2xl p-6 border border-neutral-700 shadow-md shadow-black hover:shadow-lg hover:shadow-white/20 transition flex flex-col items-start text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">
              {project.name}
            </h3>
            <p className="text-sm text-neutral-400 mb-3">
              <span className="font-semibold text-neutral-300">Tech:</span>{" "}
              {project.tech.join(", ")}
            </p>
            <p className="text-sm text-neutral-400 mb-4 leading-relaxed">
              {project.idea}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-xl font-medium shadow-md hover:bg-neutral-200 transition self-center mt-auto"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </motion.div>
        ))}
      </div>

      {/* Show More Button */}
      {projects.length > 5 && (
        <motion.button
          onClick={() => setShowMore(!showMore)}
          className="mt-8 px-6 py-3 bg-transparent border-2 border-white text-white font-medium rounded-xl hover:bg-white hover:text-black transition"
          whileHover={{ scale: 1.05 }}
        >
          {showMore ? "Show Less" : "Show More"}
        </motion.button>
      )}
    </div>
  );
};

export default ProjectsSection;
