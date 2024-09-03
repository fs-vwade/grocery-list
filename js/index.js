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
	}

	get section() {
		return this.location;
	}

	get subsections() {
		return Object.keys(this.items);
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
//vertical_content = document.createElement("section");

page_body.className = "main"; // main container
page_body_left.className = "main-left"; // main container
page_body_right.className = "main-right"; // main container
page_header.className = "header"; // main container
page_footer.className = "footer"; // main container
page_content.className = "content"; // section container
page_sidebar.className = "main sidebar"; // sidebar
//vertical_content.className = "vertical-bar"; // sidebar

page_header.innerText = "A Convenient Way to Shop!";

/** Grocery subcategories
 * - perishables (milk, yogurt, juice, eggs, bacon)
 * - pantry (sugar, flour, beans, onions)
 * - frozen (waffles, ice cream, seafood)
 * - canned (soup, corn, carrots, milk, beans)
 * - spices (pepper, salt, thyme)
 */
list_items = [
	new GroceryList("Pantry", {
		canned: [],
		dry: [],
	}),
	new GroceryList("Freezer", {
		frozen: [],
	}),
	new GroceryList("Refrigerator", {
		perishables: { milk: 1, yogurt: 12, eggs: 12 },
		fruit: [],
		meat: [],
	}),
	new GroceryList("Cabinet", {
		spices: [],
		dry: [],
	}),
];
list_items = {
	pantry: {
		canned: {},
		dry: {}
	},
	freezer: {
		frozen: {},
		meat: {}
	},
	refrigerator: {
		perishables: {
			milk: 1,
			yogurt: 8,
			eggs: 12,
		},
		fruit: {}
		meat: {}
	},
	pantry: {
		canned: {},
		dry: {}
	},
};

Object.entries(list_items).forEach((e) => {
	const new_section = document.createElement("section");
	const new_section_header = document.createElement("h2");
	const new_section_thumbnail = document.createElement("img");
	const new_section_subsections = document.createElement("div");

	new_section_header.innerText = e.location;

	new_section.prepend(new_section_header);
	//new_section.append(new_section_subsections);

	//console.log("what object?", Object.entries(e.items))
	Object.entries(e.items).forEach((e) => {
		subsection = document.createElement("div");
		subsection_header = document.createElement("h3");
		subsection_list = document.createElement("ul");

		subsection.className = "subsection";

		subsection_header.innerText = e[0];

		Object.keys(e[1]).forEach((e) => {
			list_element = document.createElement("li");
			list_element.innerText = e;

			subsection_list.append(list_element);
		});

		subsection.append(subsection_header);
		subsection.append(subsection_list);
		//new_section_subsections.append(subsection);
		new_section.append(subsection);

		console.log(e[0], "/", ...Object.keys(e[1]));
	});

	page_content.append(new_section);
	//page_content.append(e);
});

//page_content.append(vertical_content);

page_body.append(page_body_left);
page_body.append(page_body_right);
page_body_left.append(page_header);
page_body_left.append(page_content);
page_body_left.append(page_footer);
//page_body_right.append(page_sidebar);
body.append(page_body);
