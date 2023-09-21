<script lang="ts">
  export let selection: Subscription;
  export let key: number;
  key = key + 1;

  export let subscription;
  const name = subscription[0];
  const subscriptionInfo = subscription[1];
</script>

<div
  id={name}
  class="flex gap-4 p-3 border-[1px] rounded-md {selection.name === name
    ? 'border-purplish-blue bg-pastel-blue'
    : 'border-light-gray'} lg:flex-col lg:w-full lg:gap-12"
  role="button"
  tabindex="0"
  on:click={() => {
    selection.name = name;

    if (selection.type) {
      selection.price = subscriptionInfo.price[selection.type];
    }
  }}
  on:keydown={(event) => {
    if (event.key !== "Enter") return;

    selection.name = name;

    if (selection.type) {
      selection.price = subscriptionInfo.price[selection.type];
    }
  }}
>
  <div>
    <img src={subscriptionInfo.iconPath} alt={name} width="40" height="40" />
  </div>
  <div>
    <p class="font-semibold text-marine-blue">{name}</p>
    <p class="text-cool-gray text-sm font-semibold">
      ${subscriptionInfo.price[selection.type]}/{selection.type === "monthly"
        ? "mo"
        : "yr"}
    </p>
    {#if selection.type === "yearly"}
      <p class="text-[12px] text-marine-blue font-semibold">2 months free</p>
    {/if}
  </div>
</div>
