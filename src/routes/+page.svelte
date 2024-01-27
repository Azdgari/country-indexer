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

	function resetFilters() {
		selectedRegion = '';
		search = '';
	}
</script>

<main>
	<header class="flex justify-between px-14 py-5 bg-dark-mode-elements">
		<button on:click={() => resetFilters()} class="font-bold text-dark-mode-text"
			>Country Indexer</button
		>
		<ThemeSwap />
	</header>

	<section class="mx-14">
		<div class="filter justify-between my-10 md:flex gap-10">
			<!-- country search -->
			<input
				class="input input-bordered flex-2 min-w-96 px-8 h-12 bg-dark-mode-elements rounded-sm"
				type="text"
				bind:value={search}
				placeholder="Search for a country..."
			/>

			<!-- region filter -->
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

		<!-- countries list -->
		<section class="flex flex-wrap gap-20 justify-center">
			{#each filteredCountries(selectedRegion, search) as item (item.name)}
				<button
					on:click={() => openModal(item)}
					class="card w-72 flex h-96 flex-col shadow-xl rounded-md cursor-pointer"
				>
					<div class="w-full relative">
						<img
							width={264}
							height={160}
							class="h-full w-full rounded-t-md object-cover aspect-[264/160]"
							src={item.flags.png}
							alt="flag"
						/>
					</div>
					<div class="card-body text-left h-1/2">
						<h2 class="card-title">{item.name}</h2>
						<p><strong>Population:</strong> {item.population.toLocaleString('en-US')}</p>
						<p><strong>Region:</strong> {item.region}</p>
						<p>
							<strong>Capital:</strong>
							{#if item.capital !== undefined}
								{item.capital}
							{:else}
								N/A
							{/if}
						</p>
					</div>
				</button>
			{/each}
		</section>
	</section>

	<!-- modal -->
	<dialog bind:this={myModal} class="modal w-full">
		{#if selectedCountry}
			<div class="modal-box h-full max-w-full">
				<form method="dialog">
					<button class="btn btn-md btn-circle btn-ghost absolute right-4 top- md:text-xl">✕</button
					>
				</form>
				<div
					class="flex flex-col lg:gap-40 md:flex-row gap-20 items-center h-full w-full justify-center"
				>
					<img
						width={560}
						height={401}
						class="rounded-t-md object-cover max-w-96 min-w-96"
						src={selectedCountry.flags.png}
						alt="flag"
					/>
					<div>
						<div>
							<span>
								<h2 class="card-title mb-3 text-2xl font-bold">{selectedCountry.name}</h2>
							</span>
							<span class="sm:flex gap-5">
								<div>
									<p class="py-1"><strong>Native Name:</strong> {selectedCountry.nativeName}</p>
									<p class="py-1">
										<strong>Population:</strong>
										{selectedCountry.population.toLocaleString('en-US')}
									</p>
									<p class="py-1"><strong>Region:</strong> {selectedCountry.region}</p>
									<p class="py-1"><strong>Sub Region:</strong> {selectedCountry.subregion}</p>
									<p class="py-1">
										<strong>Capital:</strong>
										{#if selectedCountry.capital !== undefined}
											{selectedCountry.capital}
										{:else}
											N/A
										{/if}
									</p>
								</div>
								<div>
									<p class="py-1">
										<strong>Top Level Domain:</strong>
										{selectedCountry.topLevelDomain}
									</p>
									<p class="py-1">
										<strong>Currencies:</strong>
										{selectedCountry.currencies[0].name}
									</p>
									<p class="py-1">
										<strong>Languages:</strong>
										{selectedCountry.languages[0].name}
									</p>
								</div>
							</span>
						</div>
					</div>
				</div>
			</div>
		{/if}
		<form method="dialog" class="modal-backdrop">
			<button>close</button>
		</form>
	</dialog>
</main>
