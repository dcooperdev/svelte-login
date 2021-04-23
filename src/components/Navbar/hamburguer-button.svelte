<script>
    import { hmenu } from '../../stores';
    const updateHmenu = () => {
      hmenu.update(hmenu => hmenu = !hmenu);
    }
</script>

<style>
    .container {
        cursor: pointer;
        display: flex;
        height: 32px;
        flex-direction: column;
        justify-content: space-between;
        align-content: center;
        flex-wrap: wrap;
    }
    
    .bar1, .bar2, .bar3 {
      width: 90%;
      height: 5px;
      background-color: #f2f2f2;
      transition: 0.4s;
    }
    
    .change .bar1 {
      -webkit-transform: rotate(-45deg) translate(-12px, 10px);
      transform: rotate(-45deg) translate(-12px, 10px);
    }
    
    .change .bar2 {opacity: 0;}
    
    .change .bar3 {
      -webkit-transform: rotate(45deg) translate(-8px, -8px);
      transform: rotate(45deg) translate(-8px, -8px);
    }
</style>

<div class="container" class:change={$hmenu} on:click={updateHmenu}>
    <div class="bar1"></div>
    <div class="bar2"></div>
    <div class="bar3"></div>
</div>