<script lang="ts">
  import { createEventDispatcher, onDestroy, onMount } from "svelte";
  import Card from "../../components/Card.svelte";
  import AddOnItem from "./AddOnItem.svelte";
  import { AddOns } from "./data";

  let addOns: any = [];

  function addItem(addon: any) {
    addOns.push(addon);
  }

  function removeItem(addon: any) {
    const index = addOns.indexOf(addon);

    if (index < 0) return

    addOns.splice(index, 1);
  }

  let dispatch = createEventDispatcher();

  onMount(() => {
    dispatch("formsubmit", {
      formdata: addOns,
      errors: {},
    });
  });

  onDestroy(() => {
    dispatch = () => false;
  });
</script>

<Card>
  <div slot="header">
    <h1 class="font-bold text-marine-blue text-2xl pb-2">Pick add-ons</h1>
    <p class="text-cool-gray">Add-ons help enhance your gaming experience.</p>
  </div>
  <div slot="main">
    {#each Object.entries(AddOns) as AddOn}
      <AddOnItem AddOn={AddOn[1]} add={addItem} remove={removeItem} />
    {/each}
  </div>
</Card>
