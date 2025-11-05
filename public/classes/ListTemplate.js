/**
 * ListTemplate class manages rendering items to a HTML unordered list
 * Takes any object that implements HasFormatter interface and displays it as a list item
 */
export class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    // now lets render the item to the list
    render(item, heading, pos) {
        //now lets create the list item element
        const li = document.createElement('li');
        //now lets create the heading element
        const h4 = document.createElement('h4');
        //here we set the text of the heading to the provided heading from render method
        h4.innerText = heading;
        li.appendChild(h4); //append puts the h4 inside the li
        //now lets create the paragraph element to hold the formatted item details
        const p = document.createElement('p');
        p.innerText = item.format(); //using the format method from HasFormatter interface
        li.appendChild(p); //append puts the p inside the li
        //now lets insert the list item into the container at the specified position
        if (pos === 'start') {
            this.container.prepend(li); //adds to the start of the list
        }
        else {
            this.container.appendChild(li); //adds to the end of the list
        }
    }
}
