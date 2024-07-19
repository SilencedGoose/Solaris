<script>
    export let screenshot
    export let project_name
    export let description
    export let github_link
    export let demo_link
</script>

<div id="card">
    <img id="screenshot" src={screenshot} alt="Screenshot of this project">
    <h1 id="project_name">{project_name}</h1>
    <h2 id="description">{description}</h2>
    <div id="buttons">
        <a href={github_link} id="github_link">View on GitHub</a>
        <a href={demo_link} id="demo_link">Live Demo</a>
    </div>
</div>

<style>
    #card {
        background-color: #656ca02f;
        backdrop-filter: blur(6px);
        width: 350px;
        border-radius: 4px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        word-wrap: break-word;
        gap: 20px;
        padding: 20px 0 30px 0;
    }
    #screenshot {
        max-width: 100px;
    }
    #project_name {
        font-size: 1.5em;
    }
    #description {
        font-size: 0.9em;
        text-align: center;
        padding: 0 30px 0 30px;
    }
    #buttons {
        display: flex;
        gap: 7px;
    }
    a {
        border: 1px solid #F2E9E4;
        border-radius: 4px;
        background-color: #22223B;
        padding: 8px 20px 8px 20px;
        font-size: 1em;
        text-decoration: none;
    }
</style>