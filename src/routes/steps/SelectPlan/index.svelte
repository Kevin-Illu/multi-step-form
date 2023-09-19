<script lang="ts">
  import { onMount } from "svelte";
  import Card from "../../components/Card.svelte";
  import { subscriptions } from "./data";

  let subscription = {
    name: "",
    price: 0,
  };
  
  let selectedSubscription: number | null;
  let isSuscriptionPerMonth = false;
  let typeOfSubscription: SubscriptionType = "monthly";
  $: {
    typeOfSubscription = isSuscriptionPerMonth ? "yearly" : "monthly";
  }

  function selectSubscription(subscription: number) {
    selectedSubscription = subscription;
  }

  onMount(() => {
    selectSubscription(1);
  });
</script>

<Card>
  <div slot="header">
    <h1 class="font-bold text-marine-blue text-2xl pb-2">Select your plan</h1>
    <p class="text-cool-gray">
      You have the option of monthly or yearly billing.
    </p>
  </div>
  <div slot="main">
    <div class="flex flex-col gap-3">
      {#each Object.entries(subscriptions) as subscription, i}
        <div
          id={subscription[0]}
          class="flex gap-4 p-3 border-[1px] rounded-md {selectedSubscription ===
          i + 1
            ? 'border-purplish-blue bg-pastel-blue'
            : 'border-light-gray'}"
          role="button"
          tabindex="0"
          on:click={() => selectSubscription(i + 1)}
          on:keydown={(event) => {
            if (event.key === "Enter") {
              selectSubscription(i + 1);
            }
          }}
        >
          <div class="">
            <img
              src={subscription[1].iconPath}
              alt={subscription[0]}
              width="40"
              height="40"
            />
          </div>
          <div>
            <p class="font-semibold text-marine-blue">{subscription[0]}</p>
            <p class="text-cool-gray text-sm font-semibold">
              ${subscription[1].price[
                typeOfSubscription
              ]}/{typeOfSubscription === "monthly" ? "mo" : "yr"}
            </p>
            {#if typeOfSubscription === "yearly"}
              <p class="text-[12px] text-marine-blue font-semibold">
                2 months free
              </p>
            {/if}
          </div>
        </div>
      {/each}
    </div>

    <div
      class="bg-alabaster font-semibold flex items-center justify-center gap-4 px-2 py-3 rounded-md mt-4"
    >
      <p class={!isSuscriptionPerMonth ? "text-marine-blue" : "text-cool-gray"}>
        Monthly
      </p>
      <label class="switch">
        <input type="checkbox" bind:checked={isSuscriptionPerMonth} />
        <span class="slider round" />
      </label>
      <p class={isSuscriptionPerMonth ? "text-marine-blue" : "text-cool-gray"}>
        Yearly
      </p>
    </div>
  </div>
</Card>

<style>
  .switch {
    position: relative;
    display: inline-block;
    width: 38px;
    height: 18px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    @apply bg-marine-blue;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 10px;
    width: 10px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    @apply bg-marine-blue;
  }

  input:focus + .slider {
    @apply bg-marine-blue;
  }

  input:checked + .slider:before {
    transform: translateX(20px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
</style>
