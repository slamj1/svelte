/* generated by Svelte vX.Y.Z */
import { SvelteComponent as SvelteComponent_1, addListener, createElement, detachNode, flush, init, insert, run, safe_not_equal, setAttribute } from "svelte/internal";

function create_fragment($$, ctx) {
	var input, current, dispose;

	return {
		c() {
			input = createElement("input");
			setAttribute(input, "type", "checkbox");
			dispose = addListener(input, "change", ctx.input_change_handler);
		},

		m(target, anchor) {
			insert(target, input, anchor);

			input.checked = ctx.foo;

			current = true;
		},

		p(ctx) {
			input.checked = ctx.foo;
		},

		i(target, anchor) {
			if (current) return;
			this.m(target, anchor);
		},

		o: run,

		d(detach) {
			if (detach) {
				detachNode(input);
			}

			dispose();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { foo } = $$props;

	function input_change_handler() {
		foo = this.checked;
		$$invalidate('foo', 0, foo);
	}

	$$self.$set = $$props => {
		if ('foo' in $$props) $$invalidate('foo', 0, foo = $$props.foo);
	};

	return { foo, input_change_handler };
}

class SvelteComponent extends SvelteComponent_1 {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal);
	}

	get foo() {
		return this.$$.ctx.foo;
	}

	set foo(foo) {
		this.$set({ foo });
		flush();
	}
}

export default SvelteComponent;