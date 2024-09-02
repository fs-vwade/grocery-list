/** According to the project requirements:
 * storage_location - the name of a storage location in the kitchen
 * item_dictionary - an array of item types
 * item type - subcategory, the key name of each sub-array in the list
 *
 * The storage location is the item category, and the item type is its subcategory
 */
class GroceryList {
	constructor(storage_location, item_dictionary) {
		this.location = storage_location;
		this.items = item_dictionary;
	}

	get section() {
		return this.location;
	}

	get subsections() {
		sections = [];
		tmp = {};
		tmp.this.items.forEach( => {});
	}
}

body = document.body;
grocery_list = document.createElement("div");
grocery_list_header = document.createElement("h1");

grocery_list_header.innerText = "A Convenient Way to Shop!";

list_items = [];

grocery_list.append(grocery_list_header);
body.append(grocery_list);
