/** According to the project requirements:
 * storage_location - the name of a storage location in the kitchen
 * item_dictionaries - one or more an array of item types
 * item type - subcategory, the key name of each sub-array in the list
 *
 * The storage location is the item category, and the item type is its subcategory
 */
class GroceryList {
	constructor(storage_location, item_dictionaries) {
		this.location = storage_location;
		this.items = item_dictionaries;
		this.update_subsections()
	}

	get section() {
		return this.location;
	}

	get subsections() {
		return this.subsections;
	}

	update_subsections() {
		this.subsections = [];
		Object.keys(this.items).forEach((e) => {
			this.subsections.append(e);
		});
	}

	/** Used to update class items using the accumulator method.
	 *
	 * @param {Object} new_item
	 */
	update_items(new_item) {
		Object.keys(new_item).forEach(key => {
			new_item.key.forEach()
		})
		values = Object.values(new_item)
		this.items = {
			this.items,
			new_item
		}
		this.update_subsections()
	};
}

body = document.body;
grocery_list = document.createElement("div");
grocery_list_header = document.createElement("h1");

grocery_list_header.innerText = "A Convenient Way to Shop!";

list_items = [];

grocery_list.append(grocery_list_header);
body.append(grocery_list);
