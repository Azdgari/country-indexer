<script>
  import data from '../data/data.json'

  let selectedRegion = '';
  let regions = ['None', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  let search = '';

  const filteredCountries = (selectedRegion, search) => {
    if (!data) return [];

    let result = data;

    if (selectedRegion !== 'None' && selectedRegion !== '') {
     result = result.filter((item) => item.region === selectedRegion)
    }
      if (search !== '') {
        result = result.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
      }
      return result
  }

  
</script>

<main>
  <header class="flex justify-between px-14 py-5 bg-dark-mode-elements">
    <h1 class="font-bold text-dark-mode-text">Where in the world?</h1>
    <button class="btn-ghost">Dark Mode</button>
  </header>

<section class="mx-14">
  <div class="filter justify-between my-10 md:flex gap-10">
    <input class="input input-bordered flex-2 min-w-96 px-8 h-12 bg-dark-mode-elements rounded-sm" type="text" bind:value={search} placeholder="Search for a country..." />

    <select bind:value={selectedRegion} class="dropdown select mt-8 md:mt-0 select-bordered w-72 max-w-xs bg-dark-mode-elements rounded-sm" >
      <option value="" disabled selected>Filter by Region</option>
      {#each regions as region}
      <option>{region}</option>
      {/each}
      
    </select>

  </div>
    <section class="md:flex flex-wrap gap-20">

      {#each filteredCountries(selectedRegion, search) as item (item.name)}
  <div class="card w-72 flex h-96 flex-col bg-dark-mode-elements shadow-xl rounded-md">
      <img  width={320} height={213} class="h-full w-full rounded-t-md object-cover aspect-[320/213]" src="{item.flags.png}" alt="flag">
      <div class="card-body h-1/2">
        <h2 class="card-title">{item.name}</h2>
        <p><strong>Population:</strong> {item.population.toLocaleString("en-US")}</p>
        <p><strong>Region:</strong> {item.region}</p>
        <p><strong>Capital:</strong> {item.capital}</p>
      </div>
  </div>
{/each}
  </section>
</section>
</main>
