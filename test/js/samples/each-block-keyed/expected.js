/* generated by Svelte vX.Y.Z */
import { SvelteComponent as SvelteComponent_1, append, blankObject, createComment, createElement, createText, destroyBlock, detachNode, flush, init, insert, run, safe_not_equal, setData, updateKeyedEach } from "svelte/internal";

function get_each_context(ctx, list, i) {
	const child_ctx = Object.create(ctx);
	child_ctx.thing = list[i];
	return child_ctx;
}

// (1:0) {#each things as thing (thing.id)}
function create_each_block($$, key_1, ctx) {
	var div, text_value = ctx.thing.name, text;

	return {
		key: key_1,

		first: null,

		c() {
			div = createElement("div");
			text = createText(text_value);
			this.first = div;
		},

		m(target, anchor) {
			insert(target, div, anchor);
			append(div, text);
		},

		p(ctx) {
			if (text_value !== (text_value = ctx.thing.name)) {
				setData(text, text_value);
			}
		},

		d(detach) {
			if (detach) {
				detachNode(div);
			}
		}
	};
}

function create_fragment($$, ctx) {
	var each_blocks_1 = [], each_lookup = blankObject(), each_anchor, current;

	var each_value = ctx.things;

	const get_key = ctx => ctx.thing.id;

	for (var i = 0; i < each_value.length; i += 1) {
		let child_ctx = get_each_context(ctx, each_value, i);
		let key = get_key(child_ctx);
		each_blocks_1[i] = each_lookup[key] = create_each_block($$, key, child_ctx);
	}

	return {
		c() {
			for (i = 0; i < each_blocks_1.length; i += 1) each_blocks_1[i].c();

			each_anchor = createComment();
		},

		m(target, anchor) {
			for (i = 0; i < each_blocks_1.length; i += 1) each_blocks_1[i].m(target, anchor);

			insert(target, each_anchor, anchor);
			current = true;
		},

		p(ctx) {
			const each_value = ctx.things;
			each_blocks_1 = updateKeyedEach(each_blocks_1, $$, 0, get_key, 1, ctx, each_value, each_lookup, each_anchor.parentNode, destroyBlock, create_each_block, "m", each_anchor, get_each_context);
		},

		i(target, anchor) {
			if (current) return;
			this.m(target, anchor);
		},

		o: run,

		d(detach) {
			for (i = 0; i < each_blocks_1.length; i += 1) each_blocks_1[i].d(detach);

			if (detach) {
				detachNode(each_anchor);
			}
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { things } = $$props;

	$$self.$set = $$props => {
		if ('things' in $$props) $$invalidate('things', 0, things = $$props.things);
	};

	return { things };
}

class SvelteComponent extends SvelteComponent_1 {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal);
	}

	get things() {
		return this.$$.ctx.things;
	}

	set things(things) {
		this.$set({ things });
		flush();
	}
}

export default SvelteComponent;