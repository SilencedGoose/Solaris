import type { Project } from '../data';

export default function ProjectCard({
	screenshot,
	projectName,
	description,
	githubLink,
	demoLink
}: Project) {
	return (
		<div className="flex w-[350px] flex-col items-center justify-center gap-5 break-words rounded bg-[#656ca02f] py-5 backdrop-blur-md">
			<img src={screenshot} alt="Screenshot of this project" className="max-w-[100px]" />
			<h2 className="text-2xl">{projectName}</h2>
			<h3 className="px-[30px] text-center text-sm">{description}</h3>
			<div className="flex gap-[7px]">
				<a
					href={githubLink}
					className="rounded border border-[#f2e9e4] bg-[#22223b] px-5 py-2 no-underline"
				>
					View on GitHub
				</a>
				<a
					href={demoLink}
					className="rounded border border-[#f2e9e4] bg-[#22223b] px-5 py-2 no-underline"
				>
					Live Demo
				</a>
			</div>
		</div>
	);
}
