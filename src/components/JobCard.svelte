<script>
    export let logo
    export let company_name
    export let job_title
    export let timeframe
</script>

<div id="card">
    <img id="logo" src={logo} alt={company_name}>
    <h1 id="job-title">{job_title}</h1>
    <h2 id="timeframe">{timeframe}</h2>
    <!-- <button id="more-info">More Info</button> -->
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
    #logo {
        height: 50px;
        max-width: 200px;
    }
    #job-title {
        font-size: 1.5em;
    }
    #timeframe {
        font-size: 0.9em;
        font-style: italic;
    }
    button {
        border: 1px solid #F2E9E4;
        border-radius: 4px;
        background-color: #22223B;
        padding: 8px 20px 8px 20px;
        font-size: 1em;
    }
</style>