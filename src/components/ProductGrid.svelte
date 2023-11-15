<script>
	import { products } from '$lib/products.js';
	import { CldImage } from 'svelte-cloudinary';
	import Carousel from 'svelte-carousel';
	import { browser } from '$app/environment';
</script>

<div class="max-w-5xl mx-auto">
	<div class="rounded-lg mb-12">
		{#if browser}
			<Carousel autoplay let:loaded autoplayDuration={3000} infinite pauseOnFocus arrows={false}>
				{#each products as { name, id, image }, index (id)}
					<div class="h-full">
						{#if loaded.includes(index)}
							<div class="w-full h-full rounded-lg overflow-hidden">
								<CldImage
									fillBackground
									width={1440}
									height={600}
									priority
									format="webp"
									src={image}
									alt={name}
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
													width: 120,
													height: 120
												}
											]
										}
									]}
								/>
							</div>
						{/if}
					</div>
				{/each}
			</Carousel>
		{/if}
	</div>

	<div class="grid grid-cols-1 md:grid-cols-3 gap-12">
		{#each products as { name, id, image, price, slug, sale }, index (id)}
			<div class="w-full h-full rounded-lg overflow-hidden bg-[#F0EFEB]">
				<a href={`/product/${slug}`}>
					<CldImage
						crop="fill"
						width={500}
						format="webp"
						height={300}
						gravity="auto"
						src={image}
						alt={name}
						overlays={sale
							? [
									{
										width: 130,
										crop: 'fit',
										position: {
											x: 0,
											y: 0,
											gravity: 'north_west'
										},

										effects: [
											{
												background: 'red'
											}
										],

										text: {
											color: 'white',
											fontFamily: 'Lato',
											fontSize: 32,
											fontWeight: 'bold',
											text: sale
										}
									}
							  ]
							: []}
					/>
					<span class="p-4">
						<span />
						<h3 class="text-xl font-semibold text-[#373567]">{name}</h3>

						<span class="mt-1 text-gray-500">
							${price}
						</span>
					</span>
				</a>
			</div>
		{/each}
	</div>
</div>
