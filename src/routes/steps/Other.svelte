<script>
  import Card from "../components/Card.svelte";
  import { UserData } from "../store";

  console.log($UserData)
</script>

<Card>
  <h1 slot="header">Hola?</h1>
  <p slot="main">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo aliquid
    ratione, iusto nesciunt, eius rem quae doloremque odio neque voluptatem
    adipisci? Sed rerum accusantium libero labore repellendus obcaecati!
    Reprehenderit, deserunt.
  </p>
</Card>
