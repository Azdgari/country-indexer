<script>

  import data from '../data/data.json'

</script>

<main>
  <header class="flex justify-between px-14 py-5 bg-dark-mode-elements">
    <h1 class="font-bold text-dark-mode-text">Where in the world?</h1>
    <button class="btn-ghost">Dark Mode</button>
  </header>

<section class="mx-14">
  <div class="filter justify-between my-10 md:flex gap-10">
    <input class="flex-2 min-w-96 px-8 h-12 bg-dark-mode-elements rounded-sm" type="text" placeholder="Search for a country..." />
    <select class="dropdown select mt-8 md:mt-0 select-bordered w-72 max-w-xs bg-dark-mode-elements rounded-sm" >
      <option value="" disabled selected>Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="America">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>

  </div>
    <section class="md:flex flex-wrap gap-20">

      {#each data as item (item.name)}
    <div class="card w-72 bg-base-100 shadow-xl rounded-md">
      <figure><img src="https://flagcdn.com/bs.svg" alt="flag"></figure>
      <div class="card-body">
        <h2 class="card-title">{item.name}</h2>
        <p><strong>Population:</strong> {item.population}</p>
        <p><strong>Region:</strong> {item.region}</p>
        <p><strong>Capital:</strong> {item.capital}</p>
      </div>
    </div>
    {/each}



  
  
  </section>
</section>

</main>
