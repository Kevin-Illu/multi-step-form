<script lang="ts">
  import Card from "../components/Card.svelte";
  import { PageIndex, UserData } from "../routes/store";

  let total: number = 0;
  let count = Object.values($UserData.addOns).length;

  Object.values($UserData.addOns).forEach((addon) => {
    total += addon.price;
  });

  total += $UserData.subscription?.price;
</script>

<Card>
  <div slot="header">
    <h1 class="font-bold text-marine-blue text-2xl pb-2">Finishing up</h1>
    <p class="text-cool-gray">
      Double-check everything looks OK before confirming.
    </p>
  </div>
  <div slot="main">
    <div class="bg-alabaster p-4 rounded-md">
      <div
        class="flex {count > 0 &&
          'pb-2 border-b-[1px]'} border-light-gray items-center justify-between"
      >
        <div>
          <h2 class="text-marine-blue font-semibold">
            {$UserData.subscription?.name} ({$UserData.subscription?.type})
          </h2>
          <button
            on:click={() => {
              $PageIndex = 1;
            }}
            class="text-cool-gray underline">Change</button
          >
        </div>
        <div>
          <p class="font-bold text-marine-blue text-sm">
            ${$UserData.subscription.price}/{$UserData.subscription.type ===
            "monthly"
              ? "mo"
              : "yr"}
          </p>
        </div>
      </div>

      {#if count > 0}
        <div class="flex flex-col gap-2 pt-4">
          {#each Object.entries($UserData.addOns) as [name, value]}
            <div class="flex justify-between">
              <p class="text-cool-gray">{name}</p>
              <p class="text-sm text-marine-blue-light font-semibold">
                +${value.price}/{$UserData.subscription.type === "monthly"
                  ? "mo"
                  : "yr"}
              </p>
            </div>
          {/each}
        </div>
      {/if}
    </div>

    <div class="pt-6 pb-2 px-4 flex items-center justify-between">
      <p class="text-cool-gray">
        Total (per {$UserData.subscription?.type === "monthly"
          ? "month"
          : "year"})
      </p>
      <p class="text-purplish-blue font-bold">
        +${total}/{$UserData.subscription.type === "monthly" ? "mo" : "yr"}
      </p>
    </div>
  </div>
</Card>
