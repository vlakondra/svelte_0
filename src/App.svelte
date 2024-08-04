<script>
  import svelteLogo from "./assets/svelte.svg";
  import viteLogo from "/vite.svg";
  import Counter from "./lib/Counter.svelte";
  // import app from './main';
  export let name;
  let child_height = 120;
</script>

<main>
  {name}
  <div>

  <h1>Vite + Svelte</h1>

  <div class="card">
    <Counter />
  </div>

  <div class="parent" style="height: --child_height;">
    <div style='height:{child_height}%' class="child1">1</div>
    <div class="child2">2</div>
    <div class="hght" style='width:25%'>3</div>

  </div>
</main>

<style>
  .parent {
    display: flex;
    align-items: flex-end;
    background: rgb(237, 231, 231);
    border: 1px solid gray;
    height: 200px;
  }

  .hght{
   height: var(--child_height,'%');
   background:blue;
  }

  .child1 {
    width: 25%;
    height: 40%;
    background-color: beige;
  }
  .child2 {
    width: 25%;
    height: 110%;
    background-color: rgb(141, 141, 49);
  }


  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
