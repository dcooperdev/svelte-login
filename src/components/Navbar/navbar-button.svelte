<script>
    import { link } from "svelte-navigator";
    export let url;
    export let icon;
    export let message;
</script>

<style>
    a {
        text-decoration: none;
    }
    a span {
        opacity: 0;
        visibility: hidden;
        position: absolute;
        background-color: #333;
        color: #fff;
        padding: 5px 10px;
        border-radius: 5px;
        width: max-content;
    }

    a span:before {
        position: absolute;
        z-index: -1;
        content: "";
        transition: transform 0ms ease-in;
    }

    a:hover span {
        z-index: 10;
        opacity: 1;
        visibility: visible;
        transform: translate(25px, 0);
        transition: all 0.5s cubic-bezier(0.75, 0.7, 0.2, 0.97);
    }
</style>

<a href="{url}" use:link>
    {icon}
    <span>{message}</span>
</a>