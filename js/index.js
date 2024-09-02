class GroceryItem {
	constructor(item_name, item_count) {
		this.item_name = item_name;
		this.item_count = item_count;
	}

	get name() {
		return this.item_name;
	}
	get count() {
		return this.item_count;
	}
}

/** According to the project requirements:
 * storage_location - the name of a storage location in the kitchen
 * item_dictionaries - one or more an array of item types
 *
 * struct item_dict {
 * 	item_type: [
 * 		{item_name: item_count},
 * 		...
 * 	],
 * 	...
 * }
 */
class GroceryList {
	constructor(storage_location, item_dictionaries) {
		this.location = storage_location;
		this.items = item_dictionaries;
		this.update_subsections();
	}

	get section() {
		return this.location;
	}

	get subsections() {
		return this.subsections;
	}

	update_subsections() {
		this.subsections = Object.keys(this.items);
	}

	/** Used to update class items using the push method.
	 *
	 * @param {Object} new_item
	 */
	update_items(new_item) {
		Object.keys(new_item).forEach((key) => {
			new_item[key].forEach((e) => {
				// push method
				this.items[key].push(e);
			});
		});
		this.update_subsections();
	}
}

body = document.body;
page_body = document.createElement("div");
page_header = document.createElement("h1");
content = document.createElement("div");

page_body.className = "main"; // main container
content.className = "content"; // section container

page_header.innerText = "A Convenient Way to Shop!";

/** Grocery subcategories
 * - perishables (milk, yogurt, juice, eggs, bacon)
 * - pantry (sugar, flour, beans, onions)
 * - frozen (waffles, ice cream, seafood)
 * - canned (soup, corn, carrots, milk, beans)
 * - spices (pepper, salt, thyme)
 */
list_items = [];

page_body.append(page_header);
page_body.append(content);
body.append(page_body);
