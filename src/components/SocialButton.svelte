<script>
    export let link;
    export let img_link;
    export let img_desc;
</script>

<div id="container">
    <a href={link} target="_blank">
        <img src={img_link} alt={img_desc} />
    </a>
</div>

<style>
    #container {
        border-top: 4px solid #9A8C98;
        width: fit-content;
        padding: 2px 5px 5px 5px;
        background-color: #F2E9E4;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    a {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    img {
        width: 30px;
    }
</style>