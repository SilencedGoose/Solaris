import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import type { VantaEffect } from 'vanta/dist/vanta.net.min';
import JobCard from './components/JobCard';
import ProjectCard from './components/ProjectCard';
import SocialButton from './components/SocialButton';
import { jobs, projects } from './data';

export default function App() {
	const mainRef = useRef<HTMLDivElement>(null);
	const effectRef = useRef<VantaEffect | null>(null);

	useEffect(() => {
		let cancelled = false;

		import('vanta/dist/vanta.net.min').then(({ default: NET }) => {
			if (cancelled || !mainRef.current) return;
			effectRef.current = NET({
				THREE,
				el: mainRef.current,
				mouseControls: false,
				touchControls: false,
				gyroControls: false,
				minHeight: 400.0,
				minWidth: 200.0,
				scale: 1.0,
				scaleMobile: 1.0,
				color: 0x4a4e69,
				backgroundColor: 0x22223b,
				points: 20.0,
				spacing: 15.0
			});
		});

		return () => {
			cancelled = true;
			effectRef.current?.destroy();
		};
	}, []);

	return (
		<div ref={mainRef} id="main" className="min-h-screen w-screen bg-[#22223b]">
			<div className="flex h-[40vh] flex-col items-center justify-end gap-[10px] pb-[10vh]">
				<h1 className="text-6xl">Solaris Li</h1>
				<div className="flex items-end justify-center gap-5">
					<SocialButton
						link="https://github.com/SilencedGoose"
						imgLink="socials/github.svg"
						imgDesc="GitHub"
					/>
					<SocialButton
						link="https://www.linkedin.com/in/solaris-li/"
						imgLink="socials/linkedin.svg"
						imgDesc="LinkedIn"
					/>
					<SocialButton
						link="https://www.youtube.com/@SilencedGoose"
						imgLink="socials/youtube.svg"
						imgDesc="YouTube"
					/>
					<SocialButton
						link="mailto:project.ocearia@gmail.com"
						imgLink="socials/email.svg"
						imgDesc="Email Address"
					/>
				</div>
			</div>
			<div className="flex justify-center gap-5 px-[50px] pb-[50px]">
				{jobs.map((job) => (
					<JobCard key={job.jobTitle} {...job} />
				))}
			</div>
			<div className="flex justify-center gap-5 px-[50px] pb-[50px]">
				{projects.map((project) => (
					<ProjectCard key={project.projectName} {...project} />
				))}
			</div>
			<div className="flex flex-col items-center justify-center gap-[10px] pb-5 text-[0.9em]">
				<p>Solaris Li, 2024</p>
				<a
					href="https://github.com/SilencedGoose/Solaris"
					target="_blank"
					rel="noreferrer"
					className="no-underline"
				>
					View on GitHub
				</a>
			</div>
		</div>
	);
}
