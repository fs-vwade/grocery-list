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
list_items = {
	pantry: {
		canned: {},
		dry: {},
	},
	freezer: {
		frozen: {},
		meat: {},
	},
	refrigerator: {
		perishables: {
			milk: 1,
			yogurt: 8,
			eggs: 12,
		},
		fruit: {},
		meat: {},
	},
	pantry: {
		canned: {},
		dry: {},
	},
};

String.prototype.capitalize = function () {
	return this.replace(this.trim()[0], (c) => {
		return String(c).toUpperCase();
	});
};

function ft_capitalize(s) {
	return String(s).replace(s[0], (c) => {
		return String(c).toUpperCase();
	});
}

Object.entries(list_items).forEach((e) => {
	const new_section = document.createElement("section");
	const new_section_header = document.createElement("h2");
	const new_section_thumbnail = document.createElement("img");
	const new_section_subsections = document.createElement("div");

	/** Get header from key name */
	new_section_header.innerText = String(e[0]).capitalize();

	new_section.prepend(new_section_header);
	//new_section.append(new_section_subsections);

	// Get items from key value
	Object.entries(e[1]).forEach((e) => {
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
	console.log(e[0], "/", ...Object.keys(e[1]));

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
