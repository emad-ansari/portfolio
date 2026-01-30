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
		{ label: "Credentials", href: "#credentials" },
		{ label: "Skills", href: "#skills" },
		{ label: "Projects", href: "#projects" },
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
				name: "Certified UX Professional",
				issuer: "Nielsen Norman Group",
				date: "2022",
				logo: "/nng-logo.png",
			},
			{
				name: "Professional Product Designer",
				issuer: "Interaction Design Foundation",
				date: "2021",
				logo: "/generic-military-logo.png",
			},
			{
				name: "Design Leadership Certification",
				issuer: "IDEO",
				date: "2020",
				logo: "/ideo-logo.png",
			},
		],
		education: [
			{
				degree: "Master of Fine Arts in Design",
				institution: "Rhode Island School of Design",
				year: "2015-2017",
				logo: "/generic-art-school-logo.png",
			},
			{
				degree: "Bachelor of Arts in Visual Communication",
				institution: "California Institute of the Arts",
				year: "2011-2015",
				logo: "/calarts-logo.png",
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
