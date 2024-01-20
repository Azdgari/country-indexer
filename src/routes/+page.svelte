<script>
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';
	import data from '../data/data.json';
	import ThemeSwap from '../lib/components/darkMode.svelte';

	let selectedRegion = '';
	let regions = ['None', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
	let search = '';

	onMount(() => {
		themeChange(false);
	});

	const filteredCountries = (selectedRegion, search) => {
		if (!data) return [];

		let result = data;

		if (selectedRegion !== 'None' && selectedRegion !== '') {
			result = result.filter((item) => item.region === selectedRegion);
		}
		if (search !== '') {
			result = result.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
		}
		return result;
	};

	let myModal;
	let selectedCountry = null;

	function openModal(country) {
		selectedCountry = country;
		if (myModal) {
			myModal.showModal();
		}
	}
</script>

<main>
	<header class="flex justify-between px-14 py-5 bg-dark-mode-elements">
		<h1 class="font-bold text-dark-mode-text">Where in the world?</h1>
		<ThemeSwap />
	</header>

	<section class="mx-14">
		<div class="filter justify-between my-10 md:flex gap-10">
			<input
				class="input input-bordered flex-2 min-w-96 px-8 h-12 bg-dark-mode-elements rounded-sm"
				type="text"
				bind:value={search}
				placeholder="Search for a country..."
			/>

			<select
				bind:value={selectedRegion}
				class="dropdown select mt-8 md:mt-0 select-bordered w-72 max-w-xs bg-dark-mode-elements rounded-sm"
			>
				<option value="" disabled selected>Filter by Region</option>
				{#each regions as region}
					<option>{region}</option>
				{/each}
			</select>
		</div>
		<section class="md:flex flex-wrap gap-20">
			{#each filteredCountries(selectedRegion, search) as item (item.name)}
				<button
					on:click={() => openModal(item)}
					class="card w-72 flex h-96 flex-col shadow-xl rounded-md cursor-pointer"
				>
					<img
						width={320}
						height={213}
						class="h-full w-full rounded-t-md object-cover aspect-[320/213]"
						src={item.flags.png}
						alt="flag"
					/>
					<div class="card-body text-left h-1/2">
						<h2 class="card-title">{item.name}</h2>
						<p><strong>Population:</strong> {item.population.toLocaleString('en-US')}</p>
						<p><strong>Region:</strong> {item.region}</p>
						<p><strong>Capital:</strong> {item.capital}</p>
					</div>
				</button>
			{/each}
		</section>
	</section>

	<dialog bind:this={myModal} class="modal w-full">
		{#if selectedCountry}
			<div class="modal-box h-full max-w-full">
				<form method="dialog">
					<button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
				</form>
				<h3 class="font-bold text-lg">Hello!</h3>
				<p class="py-4">Press ESC key or click outside to close</p>
				<h2 class="card-title">{selectedCountry.name}</h2>
				<p><strong>Population:</strong> {selectedCountry.population.toLocaleString('en-US')}</p>

				<p><strong>Region:</strong> {selectedCountry.region}</p>
				<p><strong>Capital:</strong> {selectedCountry.capital}</p>
				<img
					class=" rounded-t-md object-cover aspect-[320/213]"
					src={selectedCountry.flags.png}
					alt="flag"
				/>
			</div>
		{/if}
		<form method="dialog" class="modal-backdrop">
			<button>close</button>
		</form>
	</dialog>
</main>
