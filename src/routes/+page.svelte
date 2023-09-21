<script lang="ts">
  import "../app.css";
  import { Steps } from "./steps";
  import { PageIndex } from "./store";

  // current step is the index of the list of steps
  let currentStep = PageIndex; // default
  const stepsList = Object.values(Steps);
  let childData: any = {};

  function GoBack() {
    $currentStep -= 1;
  }

  function GoForward() {
    const step = $currentStep + 1;

    if (Steps[step].formValidator(childData)) {
      Steps[step].saveData(childData.formData);
      $currentStep += 1;
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

<div class="bg-magnolia h-screen relative w-screen">
  <main class="md:grid md:grid-cols-12 md:h-full md:w-full md:grid-rows-6">
    <div
      class="md:col-start-2 md:col-end-12 2xl:col-start-4 2xl:col-end-10 md:row-start-2 2xl:row-start-2 md:row-end-6 2xl-row-end-6 md:h-full md:bg-white md:p-4 md:rounded-md flex flex-col md:flex-row z-20"
    >
      <div
        class="nav-bar bg-purplish-blue text-white flex justify-center gap-4 pb-24 py-8 px-2 md:flex md:flex-col md:p-8 md:justify-start md:gap-8 md:rounded-md md:w-[24rem]"
      >
        {#each stepsList as step, i}
          {#if stepsList.length !== i + 1}
            <div id={step.title} class="md:flex md:gap-4">
              <span
                class="{$currentStep === i
                  ? 'bg-light-blue text-marine-blue border-light-blue'
                  : 'border-white'} w-8 h-8 font-semibold rounded-full grid place-items-center border-solid border-[1px]"
              >
                {i + 1}
              </span>
              <div class="hidden md:inline-block">
                <p>Step {i + 1}</p>
                <span>{step.title}</span>
              </div>
            </div>
          {/if}
        {/each}
      </div>

      <div
        class="md:grow container my-0 mx-auto w-[90%] md:w-full relative bg-none z-40"
      >
        <svelte:component
          this={stepsList[$currentStep].component}
          on:formsubmit={handleChildData}
        />
        <footer
          class="hidden md:flex bg-white py-4 px-4 absolute bottom-0 left-0 right-0 flex-row-reverse justify-between {$currentStep ===
            stepsList.length - 1 && 'md:hidden'} md:w-[86%] mx-auto my-0"
        >
          <button
            on:click={GoForward}
            class="text-white py-2 px-4 rounded-md {$currentStep ===
            stepsList.length - 2
              ? 'bg-purplish-blue'
              : 'hover:bg-marine-blue-light focus:bg-marine-blue-light bg-marine-blue'}"
          >
            {$currentStep === stepsList.length - 2 ? "Confirm" : "Next Step"}
          </button>

          {#if $currentStep > 0}
            <button
              on:click={GoBack}
              class="text-cool-gray hover:text-marine-blue focus:text-marine-blue focus:outline-none font-semibold"
              >Go Back</button
            >
          {/if}
        </footer>
      </div>
    </div>
  </main>

  <footer
    class="md:hidden bg-white py-4 px-4 absolute bottom-0 left-0 right-0 flex flex-row-reverse justify-between {$currentStep ===
      stepsList.length - 1 && 'hidden'}"
  >
    <button
      on:click={GoForward}
      class="text-white py-2 px-4 rounded-md {$currentStep ===
      stepsList.length - 2
        ? 'bg-purplish-blue'
        : 'hover:bg-marine-blue-light focus:bg-marine-blue-light bg-marine-blue'}"
    >
      {$currentStep === stepsList.length - 2 ? "Confirm" : "Next Step"}
    </button>

    {#if $currentStep > 0}
      <button
        on:click={GoBack}
        class="text-cool-gray hover:text-marine-blue focus:text-marine-blue focus:outline-none font-semibold"
        >Go Back</button
      >
    {/if}
  </footer>
</div>

<style>
  .nav-bar {
    z-index: 10;
    position: relative;
    overflow: hidden;
  }

  .nav-bar::before {
    content: url("images/bg-sidebar-mobile.svg");
    position: absolute;
    bottom: 0;
    left: 0;
    right: 16rem;
    z-index: -1;
    transform: scale(1.6);
  }

  @media (min-width: 468px) {
    .nav-bar::before {
      right: 40rem;
    }
  }

  @media (min-width: 580px) {
    .nav-bar::before {
      display: none;
    }
  }

  @media (min-width: 768px) {
    .nav-bar::before {
      display: none;
    }

    .nav-bar::after {
      content: url("images/bg-sidebar-desktop.svg");
      position: absolute;
      z-index: -1;
      bottom: 4rem;
      transform: scale(1.4);
      left: 0;
      right: 0;
    }
  }
</style>
