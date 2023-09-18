<script lang="ts">
  import { createEventDispatcher, onDestroy, onMount } from "svelte";
  import Card from "../../components/Card.svelte";
  import type { FormDataType, FormErrors } from "./types";
  import { writable } from "svelte/store";

  let formData: FormDataType = {
    username: "",
    email: "",
    phone: "",
  };

  let errors = writable<FormErrors>({});
  let dispatch = createEventDispatcher();

  onMount(() => {
    dispatch("formsubmit", {
      formData,
      errors,
    });
  });

  onDestroy(() => {
    dispatch = () => false;
  });
</script>

<Card>
  <div slot="header">
    <h1 class="font-bold text-marine-blue text-2xl pb-2">Personal Info</h1>
    <p class="text-cool-gray">
      Please provide your name, email address, and phone number
    </p>
  </div>
  <div class="flex flex-col gap-4" slot="main">
    <div class="flex flex-col">
      <div class="form-label">
        <lable to="name" class="text-marine-blue">Name</lable>
        {#if $errors.username}
          <span class="error-message">{$errors.username}</span>
        {/if}
      </div>
      <input
        id="name"
        class={$errors.username && "border-strawberry-red"}
        type="text"
        placeholder="e.g. Stephen Howking"
        bind:value={formData.username}
      />
    </div>
    <div class="flex flex-col">
      <div class="form-label">
        <lable class="text-marine-blue" to="email">Email Address</lable>
        {#if $errors.email}
          <span class="error-message">{$errors.email}</span>
        {/if}
      </div>
      <input
        class={$errors.email && "border-strawberry-red"}
        id="email"
        placeholder="e.g. StephenHowking@email.com"
        bind:value={formData.email}
      />
    </div>
    <div class="flex flex-col">
      <div class="form-label">
        <lable to="phone" class="text-marine-blue">Phone Number</lable>
        {#if $errors.phone}
          <span class="error-message">{$errors.phone}</span>
        {/if}
      </div>
      <input
        id="phone"
        class={$errors.phone && "border-strawberry-red"}
        placeholder="e.g. +1 215 1456 875"
        bind:value={formData.phone}
      />
    </div>
  </div>
</Card>

<style>
  .form-label {
    @apply flex justify-between items-center;
  }

  .error-message {
    @apply text-strawberry-red font-bold;
  }
</style>
