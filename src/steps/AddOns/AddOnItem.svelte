<script lang="ts">
  import { UserData } from "../../routes/store";

  export let AddOn: AddOn;
  export let remove: any;
  export let add: any;

  let isChecked = false;

  // let price =
  //   ($UserData.subscription?.type === "monthly"
  //     ? AddOn.price.month
  //     : AddOn.price.year) || 0;

  // $: {
  //   isChecked ? add(finalAddon) : remove(finalAddon);
  // }

  // let finalAddon: { [key: string]: AddOnsType } = {
  //   [AddOn.name]: {
  //     active: isChecked,
  //     price,
  //   },
  // };
</script>

<div>
  <div>
    <input type="checkbox" bind:checked={isChecked} />
  </div>
  <div>
    <div>
      <h3>{AddOn.name}</h3>
      <p>{AddOn.description}</p>
    </div>
    <div>
      {console.log($UserData)}
    </div>
    <!-- <div>
      +${price}/{$UserData.subscription?.type === "monthly" ? "mo" : "yr"}
    </div> -->
  </div>
</div>
