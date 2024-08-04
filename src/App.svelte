<script>
  import svelteLogo from "./assets/svelte.svg";
  import viteLogo from "/vite.svg";
  import Counter from "./lib/Counter.svelte";
import Comp from './lib/comp.svelte'

  // import app from './main';
  export let name;
  let child_height = 120;
  let val =20;
</script>

<main>
  {name}
  <div>

<Comp --marginleft={val}/>
<Comp --marginleft={val+25}/>

 
<input type="number" bind:value={val}>
  <div class="card">
    <Counter />
  </div>

  <div class="parent" style="height: --child_height;">
    <div class="child1">1</div>
    <div class="child2">2</div>
    <div class="hght" style='width:25%'>3</div>

  </div>


<div style='--child-height: {val};padding:5px; min-width: 50px;min-height:50px;border:1px solid silver;' class ='container'>
<div class="zero">0</div>
  <div class='one' style='padding:5px; width: 100%;height:100%'>222</div>
  <div class='one' style='padding:5px; width: 100%;height:100%'>222</div>

</div>



</main>

<style>

.container {
  --main-bg-color: cornflowerblue;
   --mymargin:30;
}

/* For each class, set some colors */
.zero{
  height: calc(var(--child-height)*1px);
}
.one {
  background-color: var(--main-bg-color);
  margin: calc(var(--child-height)+1px);

}


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
