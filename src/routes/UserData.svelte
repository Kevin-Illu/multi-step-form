<header>
  <h1 class="font-bold text-marine-blue text-2xl pb-2">Personal Info</h1>
  <p class="text-cool-gray">Please provide your name, email address, and phone number</p>
</header>
<main class="pt-4">
    <form class="flex flex-col gap-4">
        <div class="flex flex-col">
            <lable to="name" class="text-marine-blue">Name</lable>
            <input id="name" class="rounded-md border-[1px] border-solid border-light-gray px-4 py-2" type="text" placeholder="e.g. Stephen Howking" />
        </div>
        <div class="flex flex-col">
            <lable class="text-marine-blue" to="email">Email Address</lable>
            <input id="email" class="rounded-md border-[1px] border-solid border-light-gray px-4 py-2" type="email" placeholder="e.g. StephenHowking@email.com" />
        </div>
        <div class="flex flex-col">
            <lable to="phone" class="text-marine-blue">Phone Number</lable>
            <input id="phone" class="rounded-md border-[1px] border-solid border-light-gray px-4 py-2" type="number" placeholder="e.g. +1 215 1456 875" />
        </div>
    </form>
</main>
