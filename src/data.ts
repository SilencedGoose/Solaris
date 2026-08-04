export interface Job {
	logo: string;
	companyName: string;
	jobTitle: string;
	timeframe: string;
}

export interface Project {
	screenshot: string;
	projectName: string;
	description: string;
	githubLink: string;
	demoLink: string;
}

export const jobs: Job[] = [
	{
		logo: 'jobs/jpmorgan_logo.png',
		companyName: 'JPMorgan',
		jobTitle: 'Software Engineer',
		timeframe: 'September 2024 - Current'
	},
	{
		logo: 'jobs/jpmorgan_logo.png',
		companyName: 'JPMorgan',
		jobTitle: 'Summer Analyst',
		timeframe: 'June 2023 - August 2023'
	},
	{
		logo: 'jobs/sleepl_logo.png',
		companyName: 'Sleepl',
		jobTitle: 'Software Developer',
		timeframe: 'February 2022 - May 2022'
	}
];

export const projects: Project[] = [
	{
		screenshot: 'projects/iot_smart_campus.jpg',
		projectName: 'IoT Smart Campus',
		description:
			'A simple IoT system intended to allow the building manager of a university building to track various environmental variables in each room, such as temperature and activity levels.',
		githubLink: 'https://github.com/SilencedGoose/Potato-Smart-Campus',
		demoLink: ''
	},
	{
		screenshot: 'projects/team_news.png',
		projectName: 'Team News',
		description:
			'Made during the quarantine, to help teams stay emotionally connected with their distant colleagues by seeing their local events.',
		githubLink: 'https://github.com/SilencedGoose/Team-News',
		demoLink: 'https://team-news-3f573.web.app/'
	}
];
