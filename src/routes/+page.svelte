<script>
  import "../app.css";
  import Card from "./Card.svelte";

  import { StepsStore } from "./steps";

  let entries = Object.values(StepsStore);

  $: componentToRender = 0; // default

  function GoBack() {
    componentToRender -= 1;
  }

  function GoForward() {
    componentToRender += 1;
  }

  function SetComponentToRender(e) {
    const value = e.target.value;
    componentToRender = value - 1; // index of the Array<entries>;
  }
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>
<div class="bg-alabaster h-screen relative">
  <main>
    <div class="flex flex-col">
      <div
        class="bg-purplish-blue text-white flex justify-center gap-8 pb-24 py-8 px-2"
      >
        {#each entries as step, i}
          <div id={step.title}>
            <button
              on:click={SetComponentToRender}
              value={i + 1}
              class="{componentToRender === i + 1
                ? 'bg-light-blue'
                : ''} w-8 h-8 font-semibold rounded-full grid place-items-center border-solid border-[1px] border-white"
            >
              {i + 1}
            </button>
            <div class="hidden">
              <p>Step {i + 1}</p>
              <span>{step.title}</span>
            </div>
          </div>
        {/each}
      </div>
      <Card>
        <svelte:component this={entries[componentToRender].component} />
      </Card>
    </div>
  </main>
  <footer
    class="bg-white p-4 absolute bottom-0 left-0 right-0 flex flex-row-reverse justify-between"
  >
    <button
      on:click={GoForward}
      disabled={componentToRender > entries.length - 1}
      class="bg-marine-blue text-white py-2 px-4 rounded-md">Next Step</button
    >
    {#if componentToRender > 0}
      <button on:click={GoBack}>Go Back</button>
    {/if}
  </footer>
</div>
