import { Github, Linkedin, Twitter } from "lucide-react";

export const portfolioData = {
	meta: {
		title: "Mohammad Emad | Software Developer",
		description:
			"Portfolio website showcasing product design work and skills",
	},

	personal: {
		name: "Mohammad Emad",
		title: "Software Developer",
		location: "Greater Noida, UP",
		avatar: "/confident-professional.png",
		email: "emadansari2323@gmail.com",
		availableForWork: true,
		badges: ["Full Stack", "MERN", "DSA"],
		social: [
			{
				platform: "GitHub",
				url: "https://github.com/emad-ansari",
				icon: Github,
			},
			{
				platform: "LinkedIn",
				url: "https://www.linkedin.com/in/mohammad-emad-ab4688304/",
				icon: Linkedin,
			},
			{
				platform: "Twitter",
				url: "https://x.com/Emad_dev_",
				icon: Twitter,
			},
		],
	},

	about: {
		bio: "I build things with code and enjoy learning fast. I like solving problems and working on projects that help me grow as a software developer. I believe in consistent learning and improving step by step. Still learning, still growing.",
		focus: [
			"Building strong fundamentals in full-stack development",
			"Writing clean and maintainable code",
			"Improving problem-solving skills through consistent practice",
		],
		languages: [
			{
				name: "English",
				proficiency: "Intermediate",
				level: 100,
				flag: "🇺🇸",
			},
		],
		interests: [
			"Design Systems",
			"Accessibility",
			"Typography",
			"Motion Design",
			"Photography",
		],
	},

	navigation: [
		{ label: "Home", href: "/" },
		{ label: "Skills", href: "#skills" },
		{ label: "Projects", href: "#projects" },
		{ label: "Credentials", href: "#credentials" },
	],

	experience: [
		{
			title: "Senior Product Designer",
			company: "TechCorp Inc.",
			period: "2021 - Present",
			description:
				"Lead the design of flagship products, managing a team of 3 designers. Implemented a design system that reduced design inconsistencies by 60% and improved development time by 40%.",
			achievements: [
				"Redesigned the main dashboard, increasing user engagement by 35%",
				"Led 3 major feature launches, increasing user retention by 25%",
				"Established strong design processes for better collaboration",
			],
			technologies: ["Figma", "Adobe XD", "Prototyping", "User Research"],
		},
		{
			title: "UX Designer",
			company: "Design Studio X",
			period: "2018 - 2021",
			description:
				"Worked with cross-functional teams to design intuitive web and mobile experiences.",
			achievements: [
				"Designed 12+ client projects",
				"Improved conversion rates by 22%",
				"Mentored junior designers",
			],
			technologies: [
				"Sketch",
				"InVision",
				"User Testing",
				"Information Architecture",
			],
		},
		{
			title: "UI/UX Intern",
			company: "Creative Solutions",
			period: "2017 - 2018",
			description:
				"Supported design teams in creating UI assets and interface components.",
			achievements: [
				"Redesigned company website",
				"Built a reusable component library",
				"Conducted competitive analysis",
			],
			technologies: ["Adobe Creative Suite", "HTML/CSS", "Wireframing"],
		},
	],

	credentials: {
		certifications: [
			{
				name: "Software Engineering",
				link: "https://drive.google.com/file/d/1ULU9n-VxOdZRVgFE-bVXVDrIgEGYx8RO/view",
				issuer: "NPTEL",
				date: "2024",
				logo: "/nptel-logo.jpg",
			},
			{
				name: "Compiler Design",
				link: "https://drive.google.com/file/d/1muhRqsC5CgM9TNhlgKKxheNGFwYE8jCX/view",
				issuer: "NPTEL",
				date: "2025",
				logo: "/nptel-logo.jpg",
			},
		],
		education: [
			{
				degree: "Bachelor of technology",
				institution: "Galgotias University",
				year: "2022-2026",
				logo: "/university.png",
			},
		],
		skills: [
			"UI Design",
			"UX Research",
			"Design Systems",
			"Wireframing",
			"Prototyping",
			"User Testing",
			"Accessibility",
			"Design Thinking",
		],
	},

	technicalSkills: {
		frontend: [
			"React.js",
			"Next.js",
			"Redux Toolkit",
			"Tailwind CSS",
			"Shadcn UI",
			"HTML5",
			"CSS3",
			"JavaScript",
			"Tyepscript",
		],
		backend: [
			"Node.js",
			"Express.js",
			"REST API",
			"Prisma ORM",
			"JWT Authentication",
			"MongoDB",
			"PostgreSQL",
			"MySQL",
		],
		softSkills: [
			"Communication",
			"Team Collaboration",
			"Problem Solving",
			"Quick Learner",
		],
		tools: ["Git", "GitHub", "Postman", "VS Code", "Chrome DevTools"],
	},
} as const;
