<script lang="ts">
  import { createEventDispatcher, onDestroy } from "svelte";

  export let key: number;
  key = key + 1;

  export let subscription;
  export let type: SubscriptionType;
  export let handleSelectionChange: (key: number) => void;

  const name = subscription[0];
  const SubscriptionValue = subscription[1];

  export let optionSelected: number;
  $: isSelected = optionSelected === key;

  let dispatch = createEventDispatcher();
  function handleSelection(selection: Subscription) {
    dispatch("formsubmit", {
      formData: selection,
      errors: {},
    });
  }

  onDestroy(() => {
    dispatch = () => false;
  });
</script>

<di
  id={name}
  class="flex gap-4 p-3 border-[1px] rounded-md {isSelected
    ? 'border-purplish-blue bg-pastel-blue'
    : 'border-light-gray'}"
  role="button"
  tabindex="0"
  on:click={() => {
    handleSelection({
      name,
      price: SubscriptionValue.price[type],
      type,
    });

    handleSelectionChange(key);
  }}
  on:keydown={(event) => {
    if (event.key === "Enter") {
      handleSelectionChange(key);
    }
  }}
>
  <div>
    <img src={SubscriptionValue.iconPath} alt={name} width="40" height="40" />
  </div>
  <div>
    <p class="font-semibold text-marine-blue">{name}</p>
    <p class="text-cool-gray text-sm font-semibold">
      ${SubscriptionValue.price[type]}/{type === "monthly" ? "mo" : "yr"}
    </p>
    {#if type === "yearly"}
      <p class="text-[12px] text-marine-blue font-semibold">2 months free</p>
    {/if}
  </div>
</di>
