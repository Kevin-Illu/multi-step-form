<script lang="ts">
  import { UserData } from "../../routes/store";

  export let AddOn: AddOn;
  export let AddOns: Array<{ [key: string]: AddOnsType }>;

  let isChecked = $UserData.addOns[AddOn.name]?.active || false;

  let price =
    ($UserData.subscription?.type === "monthly"
      ? AddOn.price.month
      : AddOn.price.year) || 0;

  function handleChange(e: Event) {
    if (isChecked) {
      AddOns.push({
        [AddOn.name]: {
          active: isChecked,
          price: price,
        },
      });
    } else {
      const indexToRemove = AddOns.findIndex(
        (addon) => addon[AddOn.name]?.active
      );
      AddOns.splice(indexToRemove, 1);
      delete $UserData.addOns[AddOn.name];
    }
  }
</script>

<div
  class="flex gap-4 items-center {!isChecked
    ? 'border-cool-gray'
    : 'border-purplish-blue bg-pastel-blue'}  border-solid border-[1px] rounded-md px-4 py-3"
>
  <div class="">
    <input
      type="checkbox"
      bind:checked={isChecked}
      on:change={handleChange}
      class="accent-purplish-blue"
    />
  </div>
  <div class="flex justify-between w-full items-center">
    <div>
      <h3 class="font-semibold text-marine-blue text-sm">{AddOn.name}</h3>
      <p class="text-xs text-cool-gray">{AddOn.description}</p>
    </div>
    <p class="text-purplish-blue text-xs font-semibold">
      +${price}/{$UserData.subscription?.type === "monthly" ? "mo" : "yr"}
    </p>
  </div>
</div>
