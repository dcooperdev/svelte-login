<script>
    import HamburguerButton from './hamburguer-button.svelte'
    import NavBarButton from './navbar-button.svelte'
    export let menu;
</script>

<style>
    nav {
        top: 0;
        left: 0;
        position: fixed;
        text-align: center;
        float: left;
        max-width: fit-content;
        width: 100%;
        height: 100%;
        background: #2a2e35;
        box-shadow: 4px 0 10px -3px #010101;
        z-index: 99;
        transition: left .3s ease;
    }
    nav ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    nav ul li {
        font-size: 32px;
        padding: 15px;
        cursor: pointer;
    }
</style>

<nav id="navbar-right">
    <ul>
        <li>
            <HamburguerButton />
        </li>
        {#each menu as item}
            <li>
                <NavBarButton
                    url={item.url}
                    icon={item.icon}
                    message={item.message}
                />
            </li>
	    {/each}
    </ul>
</nav>