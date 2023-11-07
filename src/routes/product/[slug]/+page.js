import { error } from '@sveltejs/kit';
import { products } from '$lib/products.js';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	const slug = params.slug;

	const product = products.find((product) => product.slug === slug);

	if (product) {
		return product;
	}

	throw error(404, 'Not found');
}
