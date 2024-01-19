<script>
    import { onMount } from "svelte";
    import { page } from "$app/stores";
    import data from '../../data/data.json';
  
    let country = {};
    let id;
  
    $: id = $page.params.id;
  
  
  </script>
  
  <h1>{country.name}</h1>
  <h1>{country.symbol}</h1>