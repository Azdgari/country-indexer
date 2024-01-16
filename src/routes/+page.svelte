<script>
  import { onMount } from "svelte";
    /** @type {import('./$types').PageData} */

  // let data = [];

  // onMount(async () => {
  //   const response = await fetch('$lib/data.json')
  //   if (response.ok) {
  //    data = await response.json()
  //   } else {
  //     console.log('Fetch error', response.statusText)
  //   }
  //   })


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

    <div class="card w-72 bg-base-100 shadow-xl rounded-md">
      <figure><img src="https://flagcdn.com/bs.svg" alt="flag"></figure>
      <div class="card-body">
        <h2 class="card-title">Bahamia</h2>
        <h1>{data.post.title}</h1>
        <div>{@html data.post.content}</div>
        <p><strong>Population:</strong> 27657145</p>
        <p><strong>Region:</strong> Asia</p>
        <p><strong>Capital:</strong> Kabul</p>
      </div>
    </div>

    <div class="card w-72 bg-base-100 shadow-xl rounded-md">
      <figure><img src="https://flagcdn.com/bs.svg" alt="flag"></figure>
      <div class="card-body">
        <h2 class="card-title">Bahamia</h2>
        <p><strong>Population:</strong> 27657145</p>
        <p><strong>Region:</strong> Asia</p>
        <p><strong>Capital:</strong> Kabul</p>
      </div>
    </div>

    <div class="card w-72 bg-base-100 shadow-xl rounded-md">
      <figure><img src="https://flagcdn.com/bs.svg" alt="flag"></figure>
      <div class="card-body">
        <h2 class="card-title">Bahamia</h2>
        <p><strong>Population:</strong> 27657145</p>
        <p><strong>Region:</strong> Asia</p>
        <p><strong>Capital:</strong> Kabul</p>
      </div>
    </div>

    <div class="card w-72 bg-base-100 shadow-xl rounded-md">
      <figure><img src="https://flagcdn.com/bs.svg" alt="flag"></figure>
      <div class="card-body">
        <h2 class="card-title">Bahamia</h2>
        <p><strong>Population:</strong> 27657145</p>
        <p><strong>Region:</strong> Asia</p>
        <p><strong>Capital:</strong> Kabul</p>
      </div>
    </div>

    <div class="card w-72 bg-base-100 shadow-xl rounded-md">
      <figure><img src="https://flagcdn.com/bs.svg" alt="flag"></figure>
      <div class="card-body">
        <h2 class="card-title">Bahamia</h2>
        <p><strong>Population:</strong> 27657145</p>
        <p><strong>Region:</strong> Asia</p>
        <p><strong>Capital:</strong> Kabul</p>
      </div>
    </div>

    <div class="card w-72 bg-base-100 shadow-xl rounded-md">
      <figure><img src="https://flagcdn.com/bs.svg" alt="flag"></figure>
      <div class="card-body">
        <h2 class="card-title">Bahamia</h2>
        <p><strong>Population:</strong> 27657145</p>
        <p><strong>Region:</strong> Asia</p>
        <p><strong>Capital:</strong> Kabul</p>
      </div>
    </div>

    



  </section>
</section>

</main>
