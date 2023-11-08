<script>
	import { CldImage, CldOgImage } from 'svelte-cloudinary';

	export let data;

	$: ({ name, id, image, price, slug, description, longDescription } = data);
</script>

<svelte:head>
	<title>
		{name} | Cloudinary SvelteKit demo
	</title>
	<meta name="description" content={description} />
</svelte:head>

<CldOgImage
	src={image}
	overlays={[
		{
			publicId: `pfdisarufkbbbcd3jv9m`,
			position: {
				x: 10,
				y: 10,
				gravity: 'south_east'
			},
			effects: [
				{
					crop: 'fill',
					gravity: 'auto',
					width: 300,
					height: 300
				}
			]
		},
		{
			position: {
				x: 0,
				y: 0,
				gravity: 'north_west'
			},
			effects: [
				{
					background: 'black'
				}
			],

			text: {
				color: 'white',
				fontFamily: 'Open Sans',
				fontSize: 64,
				fontWeight: 'bold',
				text: `${name}`
			}
		}
	]}
	alt={`${name} | Cloudinary Svelte Demo`}
	twitterTitle={`${name} | Cloudinary Svelte Demo`}
/>

<div class="max-w-5xl mx-auto p-4">
	<div class="grid md:grid-cols-2 gap-24">
		<div class="">
			<CldImage
				crop="fill"
				width={600}
				height={600}
				gravity="auto"
				priority
				src={data.image}
				alt={data.name}
				effects={[
					{
						radius: 16
					}
				]}
			/>
		</div>
		<div class="">
			<div class="flex items-center justify-between">
				<h1 class="text-3xl font-bold text-[#373567]">
					{name}
				</h1>
				<span class="text-xl font-bold text-gray-900">
					$ {price}
				</span>
			</div>
			<p class="mt-4 text-gray-600">
				{longDescription}
			</p>
			<button
				class="mt-4 px-4 py-2 text-white bg-gray-900 rounded-md hover:bg-gray-800"
				on:click={() => {
					//  Add to Cart Fn
				}}
			>
				Add to cart
			</button>
		</div>
	</div>
</div>
