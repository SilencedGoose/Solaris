<script>
	import JobCard from "../components/JobCard.svelte";
    import ProjectCard from "../components/ProjectCard.svelte";
    import SocialButton from "../components/SocialButton.svelte";

    export const ssr = false;

    import { onDestroy, onMount } from 'svelte';
    // @ts-ignore
	import * as THREE from 'three';
    // @ts-ignore
	import NET from 'vanta/dist/vanta.net.min'

	// @ts-ignore
	let effect;

	onMount(async () => {
        import(/* @vite-ignore */NET)
		effect = NET({
		    // @ts-ignore
            THREE: THREE,
            el: '#main',
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

	onDestroy(() => {
		// @ts-ignore
		if (effect) effect.destroy()
	})

    const jobs = [
        new Map([["logo", "jobs/jpmorgan_logo.png"], ["company_name", "JPMorgan"], ["job_title", "Software Engineer"], ["timeframe", "September 2024 - Current"]]),
        new Map([["logo", "jobs/jpmorgan_logo.png"], ["company_name", "JPMorgan"], ["job_title", "Summer Analyst"], ["timeframe", "June 2023 - August 2023"]]),
        new Map([["logo", "jobs/sleepl_logo.png"], ["company_name", "Sleepl"], ["job_title", "Software Developer"], ["timeframe", "February 2022 - May 2022"]]),
    ]

    const projects = [
        new Map([["screenshot", "projects/iot_smart_campus.jpg"], ["project_name", "IoT Smart Campus"], ["description", "A simple IoT system intended to allow the building manager of a university building to track various environmental variables in each room, such as temperature and activity levels."], ["github_link", "https://github.com/SilencedGoose/Potato-Smart-Campus"], ["demo_link", ""]]),
        new Map([["screenshot", "projects/team_news.png"], ["project_name", "Team News"], ["description", "Made during the quarantine, to help teams stay emotionally connected with their distant colleagues by seeing their local events."], ["github_link", "https://github.com/SilencedGoose/Team-News"], ["demo_link", "https://team-news-3f573.web.app/"]]),
    ]
</script>

<div id="main">
    <div id="namebar">
        <h1>Solaris Li</h1>
        <div id="socials">
            <SocialButton link="https://github.com/SilencedGoose" img_link="socials/github.svg" img_desc="GitHub" />
            <SocialButton link="https://www.linkedin.com/in/solaris-li/" img_link="socials/linkedin.svg" img_desc="LinkedIn" />
            <SocialButton link="https://www.youtube.com/@SilencedGoose" img_link="socials/youtube.svg" img_desc="YouTube" />
            <SocialButton link="mailto:project.ocearia@gmail.com" img_link="socials/email.svg" img_desc="Email Address" />
        </div>
    </div>
    <div id="jobs">
        {#each jobs as job}
        <JobCard logo={job.get("logo")} company_name={job.get("company_name")} job_title={job.get("job_title")} timeframe={job.get("timeframe")} />
        {/each}
    </div>
    <div id="projects">
        {#each projects as project}
        <ProjectCard screenshot={project.get("screenshot")} project_name={project.get("project_name")} description={project.get("description")} github_link={project.get("github_link")} demo_link={project.get("demo_link")} />
        {/each}
    </div>
    <div id="footer">
        <p>Solaris Li, 2024</p>
        <a href="https://github.com/SilencedGoose/Solaris" target="_blank">View on GitHub</a>
    </div>
</div>

<style>
    #main {
        background-color: #22223B;
        width: 100vw;
        min-height: 100vh;
    }
    #namebar {
        height: 40vh;
        display: flex;
        flex-direction: column;
        justify-content: end;
        align-items: center;
        padding-bottom: 10vh;
        gap: 10px;
    }
    #socials {
        display: flex;
        justify-content: center;
        align-items: end;
        gap: 20px;
    }
    #namebar h1 {
        font-size: 4em;
    }

    #jobs, #projects {
        display: flex;
        justify-content: center;
        padding: 0 50px 50px 50px;
        gap: 20px;
        
    }

    #footer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
        padding-bottom: 20px;
        font-size: 0.9em;
    }

    #footer a {
        text-decoration: none;
    }
</style>


export const prerender = true;