<script lang="ts">
  import { createEventDispatcher, onMount } from "svelte";

  import Card from "../../components/Card.svelte";
  import AddOnItem from "./AddOnItem.svelte";
  import { AddOns } from "./data";

  let addOns: Array<{ [key: string]: AddOnsType }> = [];

  let dispatch = createEventDispatcher();
  onMount(() => {
    dispatch("formsubmit", {
      formData: addOns,
      errors: {},
    });
  });
</script>

<Card>
  <div slot="header">
    <h1 class="font-bold text-marine-blue text-2xl pb-2">Pick add-ons</h1>
    <p class="text-cool-gray">Add-ons help enhance your gaming experience.</p>
  </div>
  <div slot="main">
    <div class="flex gap-3 flex-col">
      {#each Object.entries(AddOns) as AddOn}
        <AddOnItem AddOn={AddOn[1]} AddOns={addOns} />
      {/each}
    </div>
  </div>
</Card>
