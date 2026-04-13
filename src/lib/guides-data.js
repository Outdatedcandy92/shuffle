import { marked } from 'marked';

import gettingStartedMarkdown from '$lib/guides/getting-started.md?raw';
import tutorialMarkdown from '$lib/guides/tutorial.md?raw';
import journallingMarkdown from '$lib/guides/journalling.md?raw';
import polishingYourProjectMarkdown from '$lib/guides/polishing-your-project.md?raw';
import submittingMarkdown from '$lib/guides/submitting.md?raw';

/**
 * @param {string} slug
 */
function titleFromSlug(slug) {
	return slug
		.split(/[-_]/g)
		.map((part) => part.charAt(0).toUpperCase() + part.slice(1))
		.join(' ');
}

/**
 * @param {string} text
 */
function slugify(text) {
	return text
		.toLowerCase()
		.replace(/<[^>]*>/g, '')
		.replace(/[^a-z0-9\s-]/g, '')
		.trim()
		.replace(/\s+/g, '-');
}

/**
 * @param {string} base
 * @param {Map<string, number>} seen
 */
function uniqueId(base, seen) {
	const current = seen.get(base) ?? 0;
	seen.set(base, current + 1);
	return current === 0 ? base : `${base}-${current}`;
}

/**
 * @typedef {{id: string, text: string, depth: number}} GuideHeading
 */

/**
 * @param {string} slug
 * @param {string} markdown
 * @param {number} order
 */
function createGuide(slug, markdown, order) {
	const seen = new Map();
	/** @type {GuideHeading[]} */
	const headings = [];
	const renderer = new marked.Renderer();

	renderer.heading = function ({ tokens, depth }) {
		const content = this.parser.parseInline(tokens);
		const text = content.replace(/<[^>]*>/g, '').trim();
		const baseId = slugify(text) || `section-${depth}`;
		const id = uniqueId(baseId, seen);

		headings.push({ id, text, depth });

		return `<h${depth} id="${id}">${content}</h${depth}>`;
	};

	return {
		slug,
		title: titleFromSlug(slug),
		html: marked.parse(markdown, { renderer }),
		headings,
		order
	};
}

export const guides = [
	createGuide('getting-started', gettingStartedMarkdown, 0),
	createGuide('tutorial', tutorialMarkdown, 1),
	createGuide('journalling', journallingMarkdown, 2),
	createGuide('polishing-your-project', polishingYourProjectMarkdown, 3),
	createGuide('submitting', submittingMarkdown, 4)
];
