<script>
  import Card from "../components/Card.svelte";
  import { UserData } from "./../routes/store";
</script>

<Card>
  <h1 slot="header">Hola?</h1>
  <p slot="main">
    {JSON.stringify($UserData, null, " ")}
  </p>
</Card>
