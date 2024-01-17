<script>
  import { onMount } from "svelte";
  import { page } from "$app/stores";

  let country = {};
  let id;

  $: id = $page.params.id;

  onMount(async () => {
    const response = await fetch('https://restcountries.com/v3.1/name/${id}')
    if (response.ok) {
      country = await response.json()
    }
  })
</script>

<h1>{country.name}</h1>
<h1>{country.symbol}</h1>