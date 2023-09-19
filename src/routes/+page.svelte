<script lang="ts">
  import "../app.css";
  import { Steps } from "./steps";

  // current step is the index of the list of steps
  let currentStep = 0; // default
  const stepsList = Object.values(Steps);
  let childData: any = {};

  function GoBack() {
    currentStep -= 1;
  }

  function GoForward() {
    const step = currentStep + 1;

    if (Steps[step].formValidator(childData)) {
      Steps[step].saveData(childData.formData);
      currentStep += 1;
    }
  }

  function handleChildData(e: any) {
    childData = e.detail;
  }
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="bg-magnolia h-screen relative">
  <main>
    <div class="flex flex-col">
      <div
        class="bg-purplish-blue text-white flex justify-center gap-4 pb-24 py-8 px-2"
      >
        {#each stepsList as step, i}
          <div id={step.title}>
            <span
              class="{currentStep === i
                ? 'bg-light-blue text-marine-blue border-light-blue'
                : 'border-white'} w-8 h-8 font-semibold rounded-full grid place-items-center border-solid border-[1px]"
            >
              {i + 1}
            </span>
            <div class="hidden">
              <p>Step {i + 1}</p>
              <span>{step.title}</span>
            </div>
          </div>
        {/each}
      </div>

      <svelte:component
        this={stepsList[currentStep].component}
        on:formsubmit={handleChildData}
      />
    </div>
  </main>

  <footer
    class="bg-white py-4 px-4 absolute bottom-0 left-0 right-0 flex flex-row-reverse justify-between"
  >
    <button
      on:click={GoForward}
      disabled={currentStep >= stepsList.length - 1}
      class="bg-marine-blue text-white py-2 px-4 rounded-md hover:bg-marine-blue-light focus:bg-marine-blue-light"
    >
      Next Step
    </button>

    {#if currentStep > 0}
      <button
        on:click={GoBack}
        class="text-cool-gray hover:text-marine-blue focus:text-marine-blue focus:outline-none font-semibold"
        >Go Back</button
      >
    {/if}
  </footer>
</div>
