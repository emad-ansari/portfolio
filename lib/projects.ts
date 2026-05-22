export interface ProjectGalleryImage {
	url: string;
	caption?: string;
}

export interface RelatedProject {
	slug: string;
	title: string;
	category: string;
	image: string;
}

export interface Project {
	id: number;
	slug: string;
	title: string;
	category: string;
	shortDescription: string;
	description: string[];
	features: string[];
	technologies: string[];
	coverImage: string;
	thumbnailImage: string;
	gallery?: ProjectGalleryImage[];
	client?: string;
	timeline?: string;
	role?: string;
	liveUrl?: string;
	githubUrl?: string;
	relatedProjects?: RelatedProject[];
}

const projects: Project[] = [
	{
		id: 1,
		slug: "teamforge",
		title: "TeamForge",
		category: "Project Management Platform",

		shortDescription:
			"A modern collaborative project management platform that helps teams manage projects, tasks, members, and workflow in one place.",

		description: [
			"TeamForge is a full-stack collaborative project management platform built for teams to efficiently manage projects, tasks, invitations, and team workflows.",
			"It provides secure authentication, project collaboration, task assignment, dashboard analytics, and email-based invitation flow for seamless teamwork.",
			"The platform focuses on scalability, clean architecture, and a smooth user experience while maintaining a modern and responsive interface.",
		],

		features: [
			"JWT-based authentication and protected routes for secure access",
			"Create, update, and manage projects with team collaboration support",
			"Invite team members via email with secure token-based invitation flow",
			"Task management system with assignment, status tracking, labels, and due dates",
			"Personalized 'My Tasks' dashboard for assigned tasks overview",
			"Dashboard analytics with task statistics, recent activities, and active projects",
			"Activity logs to track important project and task actions",
			"Role-based access control with Admin and Member permissions",
			"Responsive and clean user interface optimized for smooth workflow management",
		],

		technologies: [
			"React",
			"TypeScript",
			"Node.js",
			"Express.js",
			"PostgreSQL",
			"Drizzle ORM",
			"JWT Authentication",
			"Zustand",
			"Tailwind CSS",
			"Nodemailer",
			"NeonDB",
		],

		coverImage: "/projects-gallery/teamforge/home.png",

		thumbnailImage: "/projects-gallery/teamforge/thumbnail.png",

		gallery: [
			{
				url: "/projects-gallery/teamforge/home.png",
				caption: "Dashboard Overview",
			},
			{
				url: "/projects-gallery/teamforge/projects.png",
				caption: "Projects Management",
			},
			{
				url: "/projects-gallery/teamforge/tasks.png",
				caption: "Task Management",
			},
			{
				url: "/projects-gallery/teamforge/my-tasks.png",
				caption: "My Tasks Screen",
			},
		],

		liveUrl: "https://team-forge-snowy.vercel.app/",

		githubUrl: "https://github.com/emad-ansari/TeamForge",
	},
	{
		id: 2,
		slug: "code.io",
		title: "code.io",
		category: "Web Application",
		shortDescription:
			"A clean and modern online code editor built with React and Monaco, designed for a smooth and responsive coding experience",
		description: [
			"Code.io is a clean and modern online code editor built for students and developers who want a smooth, distraction-free coding experience directly in the browser.",
			"It supports multiple programming languages and provides instant code execution with real-time output.",
			"The platform focuses on simplicity, performance, and a beautiful user interface to help users learn and practice coding efficiently.",
		],

		features: [
			"Multi-language support for writing and running code in different programming languages",
			"Clean and distraction-free user interface for focused coding",
			"Monaco code editor with smart syntax highlighting and editor features",
			"Instant code execution with real-time output console",
			"Responsive design that works well on desktop and mobile devices",
			"Dark mode support for a comfortable coding experience",
		],
		technologies: [
			"React",
			"TypeScript",
			"Tailwind CSS",
			"Shadcn UI",
			"Monaco Editor",
			"Node.js",
			"Express",
			"PostgreSQL",
			"Prisma",
			"Zod",
		],
		coverImage: "/projects-gallery/codeio/home.png",
		thumbnailImage: "/projects-gallery/codeio/thumbnail.png",
		gallery: [
			{
				url: "/projects-gallery/codeio/home.png",
				caption: "Home Screen",
			},
			{
				url: "/projects-gallery/codeio/problem-set.png",
				caption: "Problem Challenges View",
			},
			{
				url: "/projects-gallery/codeio/problems.png",
				caption: "Problem List View",
			},
			{
				url: "/projects-gallery/codeio/code-playground.png",
				caption: "Coding Playground",
			},
			{
				url: "/projects-gallery/codeio/profile.png",
				caption: "User Profile",
			},
		],
		liveUrl: "http://codeio-tawny.vercel.app/",
		githubUrl: "https://github.com/emad-ansari/code.io",
		// timeline: "3 months (Q2 2023)",
		// role: "Lead Product Designer",
		// relatedProjects: [
		// 	{
		// 		slug: "finance-dashboard",
		// 		title: "Finance Dashboard",
		// 		category: "Web Application",
		// 		image: "/modern-finance-overview.png",
		// 	},
		// 	{
		// 		slug: "ecommerce-redesign",
		// 		title: "E-Commerce Redesign",
		// 		category: "UX Case Study",
		// 		image: "/modern-apparel-storefront.png",
		// 	},
		// ],
	},
	{
		id: 3,
		slug: "blood-bank",
		title: "Blood Bank Management System",
		category: "Web Application",
		shortDescription:
			"A centralized blood bank management platform that connects donors, hospitals, and blood banks to manage blood inventory, donations, and distribution efficiently.",
		description: [
			"The Blood Bank Management System is a centralized web platform designed to streamline blood donation, storage, and distribution processes across hospitals and blood banks.",
			"The application connects donors, hospitals, blood banks, and administrators, enabling smooth coordination and real-time access to critical blood-related information.",
			"It focuses on reliability, scalability, and security by using modern technologies like Next.js, TypeScript, Prisma, Clerk, and AWS services.",
		],

		features: [
			"Real-time blood inventory tracking with automatic expiry alerts",
			"Blood component separation and cross-matching verification",
			"Donor eligibility checks, appointment scheduling, and donation history tracking",
			"Health screening records and donor reward management",
			"Emergency and regular blood request handling for hospitals",
			"Patient blood type matching and blood usage reporting",
			"Transport coordination for blood delivery",
			"Detailed reports on collection, distribution, wastage, and participation metrics",
		],

		technologies: [
			"Next.js",
			"TypeScript",
			"Tailwind CSS",
			"Prisma",
			"PostgreSQL",
			"Clerk",
		],
		coverImage: "/projects-gallery/bloodbank/home.png",
		thumbnailImage: "/projects-gallery/bloodbank/donation-info.png",
		gallery: [
			{
				url: "/projects-gallery/bloodbank/home.png",
				caption: "Home Page",
			},
			{
				url: "/projects-gallery/bloodbank/stock-availability.png",
				caption: "Blood Bank Stock Availibility",
			},
			{
				url: "/projects-gallery/bloodbank/donation-info.png",
				caption: "Donation Info",
			},
			{
				url: "/projects-gallery/bloodbank/blood-bank-register.png",
				caption: "Register Blood Bank Form",
			},
		],
		liveUrl: "https://blood-bank-orcin.vercel.app/",
		githubUrl: "https://github.com/emad-ansari/Blood-Bank",
		// timeline: "4 months (Q3-Q4 2022)",
		// role: "UX/UI Designer & Frontend Developer",
		relatedProjects: [
			{
				slug: "job-finder-app",
				title: "Job Finder App",
				category: "Mobile App",
				image: "/modern-finance-app.png",
			},
			{
				slug: "ecommerce-redesign",
				title: "E-Commerce Redesign",
				category: "UX Case Study",
				image: "/modern-apparel-storefront.png",
			},
		],
	},
	{
		id: 4,
		slug: "balance-tree-visualizer",
		title: "Balance Tree Visualizer",
		category: "Web Application",
		shortDescription:
			"An interactive visual tool to learn and explore balanced binary search trees like AVL and Red-Black trees through real-time animations.",

		description: [
			"The Balanced Tree Visualizer is an interactive web application built to help students and developers understand balanced binary search trees in a visual and intuitive way.",
			"It allows users to explore how AVL and Red-Black trees work by visually demonstrating insertions, deletions, searches, and balancing operations.",
			"With smooth animations and traversal visualizations, the tool makes complex tree concepts easier to learn and remember.",
		],

		features: [
			"Real-time visualization of balanced binary search trees with smooth animations",
			"Support for multiple tree types including AVL and Red-Black trees",
			"Insert, delete, and search operations with instant visual feedback",
			"Visualization of in-order, pre-order, post-order, and level-order traversals",
			"Custom animation controls to adjust speed, pause, resume, or reset",
			"Interactive canvas with pan and zoom support for large trees",
			"Fully responsive design for desktop and mobile devices",
			"Dark and light mode toggle for comfortable viewing",
		],

		technologies: [
			"React",
			"TypeScript",
			"Node.js",
			"PostgreSQL",
			"Chart.js",
			"Framer Motion",
		],
		coverImage: "/projects-gallery/balance-tree/cover-image.png",
		thumbnailImage: "/projects-gallery/balance-tree/home.png",
		// gallery: [
		// 	{
		// 		url: "/ecommerce-redesign-screen1.png",
		// 		caption: "Homepage Design",
		// 	},
		// 	{
		// 		url: "/ecommerce-redesign-screen2.png",
		// 		caption: "Product Category Page",
		// 	},
		// 	{
		// 		url: "/ecommerce-redesign-screen3.png",
		// 		caption: "Product Detail Page",
		// 	},
		// 	{
		// 		url: "/ecommerce-redesign-screen4.png",
		// 		caption: "Checkout Process",
		// 	},
		// ],
		// client: "Fashion Retailer Inc.",
		// timeline: "6 months (Q1-Q2 2022)",
		// role: "Lead UX Designer",
		liveUrl: "https://balanced-tree-visualizer.vercel.app/",
		githubUrl: "https://github.com/Ideation-X/balanced-tree-visualizer",
	},
	{
		id: 5,
		slug: "daily-xp",
		title: "Daily-xp",
		category: "Web Application",
		shortDescription:
			"A gamified productivity web application that motivates users to build habits, complete tasks, and stay consistent using XP rewards and progress tracking.",
		description: [
			"This is a modern web application designed to improve daily productivity by turning routine activities into a fun and engaging experience.",
			"Users earn experience points (XP) by completing habits, tasks, journaling, and tracking their mood, which helps maintain motivation and consistency.",
			"The application focuses on simplicity, visual feedback, and progress tracking to encourage long-term personal growth.",
		],

		features: [
			"Gamification system with XP rewards and level progression",
			"Visual XP progress bar and achievement milestones",
			"Daily habit and task tracking with completion status",
			"Streak tracking to encourage consistency",
			"Daily mood logging with mood history and trend visualization",
			"Simple and fast daily journaling with XP rewards",
			"Clean and modern UI with responsive design",
			"Dark mode support for better user experience",
			"JWT-based authentication and secure user data handling",
			"Protected API endpoints for application security",
		],

		technologies: [
			"Next.js",
			"TypeScript",
			"Tailwind CSS",
			"Shadcn UI",
			"Node.js",
			"MongoDB",
		],
		coverImage: "/projects-gallery/balance-tree/cover-image.png",
		thumbnailImage: "/projects-gallery/daily-xp/login.png",
		// gallery: [
		// 	{
		// 		url: "/ecommerce-redesign-screen1.png",
		// 		caption: "Homepage Design",
		// 	},
		// 	{
		// 		url: "/ecommerce-redesign-screen2.png",
		// 		caption: "Product Category Page",
		// 	},
		// 	{
		// 		url: "/ecommerce-redesign-screen3.png",
		// 		caption: "Product Detail Page",
		// 	},
		// 	{
		// 		url: "/ecommerce-redesign-screen4.png",
		// 		caption: "Checkout Process",
		// 	},
		// ],
		// client: "Fashion Retailer Inc.",
		// timeline: "6 months (Q1-Q2 2022)",
		// role: "Lead UX Designer",
		liveUrl: "https://daily-xp.vercel.app/",
		githubUrl: "https://github.com/emad-ansari/Gamified-User-Dashboard",
	},
];

export { projects };

// Add these functions after the projects array export

export function getAllProjects(): Project[] {
	return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
	return projects.find((project) => project.slug === slug);
}

export function getRelatedProjects(
	currentSlug: string,
	limit = 2,
): RelatedProject[] {
	const currentProject = getProjectBySlug(currentSlug);
	if (!currentProject || !currentProject.relatedProjects) {
		// If no related projects defined, return random projects
		return projects
			.filter((project) => project.slug !== currentSlug)
			.slice(0, limit)
			.map((project) => ({
				slug: project.slug,
				title: project.title,
				category: project.category,
				image: project.thumbnailImage,
			}));
	}

	return currentProject.relatedProjects.slice(0, limit);
}
