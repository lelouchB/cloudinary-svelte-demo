<script>
	import { CldImage } from 'svelte-cloudinary';
</script>

<header class="p-4">
	<div class="max-w-7xl mx-auto flex items-center justify-between">
		<a href="/">
			<CldImage
				width={120}
				height={120}
				priority
				removeBackground
				src="uml3ohpiqrv20vbyxzc1"
				alt={'Desert Haven Logo'}
			/>
		</a>
	</div>
</header>
