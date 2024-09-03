class GroceryItem {
	constructor(item_name, item_count, item_type) {
		this.item_name = item_name;
		this.item_count = item_count;
		this.item_type = item_type;
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
page_body_left = document.createElement("div");
page_body_right = document.createElement("div");
page_header = document.createElement("h1");
page_footer = document.createElement("div");
page_content = document.createElement("div");
page_sidebar = document.createElement("div");
vertical_content = document.createElement("section");

page_body.className = "main"; // main container
page_body_left.className = "main-left"; // main container
page_body_right.className = "main-right"; // main container
page_header.className = "header"; // main container
page_footer.className = "footer"; // main container
page_content.className = "content"; // section container
page_sidebar.className = "main sidebar"; // sidebar
vertical_content.className = "vertical-bar"; // sidebar

page_header.innerText = "A Convenient Way to Shop!";

/** Grocery subcategories
 * - perishables (milk, yogurt, juice, eggs, bacon)
 * - pantry (sugar, flour, beans, onions)
 * - frozen (waffles, ice cream, seafood)
 * - canned (soup, corn, carrots, milk, beans)
 * - spices (pepper, salt, thyme)
 */
list_items = [];

list_items.forEach((e) => {
	page_content.append(e);
});

page_content.append(vertical_content);

page_body.append(page_body_left);
page_body.append(page_body_right);
page_body_left.append(page_header);
page_body_left.append(page_content);
page_body_left.append(page_footer);
//page_body_right.append(page_sidebar);
body.append(page_body);
