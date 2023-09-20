<script lang="ts">
  import { createEventDispatcher, onMount } from "svelte";

  import { UserData } from "../../routes/store";
  import Card from "../../components/Card.svelte";
  import { subscriptions } from "./data";
  import SubscriptionItem from "./SubscriptionItem.svelte";

  let selection: Subscription = {
    name: $UserData.subscription.name || "Arcade",
    type: $UserData.subscription.type ?? "monthly",
    price: $UserData.subscription.price || 9,
  };

  let isChecked = selection.type === "yearly";
  let dispatch = createEventDispatcher();

  onMount(() => {
    dispatch("formsubmit", {
      formData: selection,
      errors: {},
    });
  });

  function handleChange(e: Event) {
    const selectedType: SubscriptionType = isChecked ? "yearly" : "monthly";
    const selectedPrice = subscriptions[selection.name].price[selectedType]

    selection.type = selectedType;
    selection.price = selectedPrice;
  }
</script>

<Card>
  <div slot="header">
    <h1 class="font-bold text-marine-blue text-2xl pb-2">Select your plan</h1>
    <p class="text-cool-gray">
      You have the option of monthly or yearly billing.
    </p>
  </div>

  <div slot="main">
    <!-- list of subscriptions -->
    <div class="flex flex-col gap-3">
      {#each Object.entries(subscriptions) as s, i}
        <SubscriptionItem
          subscription={s}
          key={i}
          bind:selection
          on:formsubmit
        />
      {/each}
    </div>

    <!-- switch component -->
    <div
      class="bg-alabaster font-semibold flex items-center justify-center gap-4 px-2 py-3 rounded-md mt-4"
    >
      <p class={!isChecked ? "text-marine-blue" : "text-cool-gray"}>Monthly</p>
      <label class="switch">
        <input
          type="checkbox"
          bind:checked={isChecked}
          on:change={handleChange}
        />
        <span class="slider round" />
      </label>
      <p class={isChecked ? "text-marine-blue" : "text-cool-gray"}>Yearly</p>
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
