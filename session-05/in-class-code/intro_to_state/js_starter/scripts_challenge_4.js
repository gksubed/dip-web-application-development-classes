// Challenge - Stage 4
import data from "./userobjects.js";
/**
 * State-based UI Component
* @param {String} selector The selector for the target elementent
* @param {Object} options  Component options
*/
let UserComponent = function (selector, options) {
    this.element = document.querySelector(selector);
    this.data = options.data;
    this.template = options.template;
    
};

/**
 * Render a new UI
*/
UserComponent.prototype.render = function () {
    this.element.innerHTML = this.template(this.data);
};


// The list of books
let app = new UserComponent("#app", {
    data,
    template: (props) => {
        const items = props
        .map(
            (prop) => 
            `<li>${prop.firstName} ${prop.lastName}, Age: ${prop.age}</li>` 
        )
        .john("");
        return `<section class="news-article"><ol>${items}</ol><section>`;
    },
    // data: {
    //     books: ['Harry Potter I', 'Harry Potter II', 'Harry Potter III'],
    // },
    // template: function (props) {
    //     console.log(props);
	//     let html =
	//     "<ul>" +

	//     props.books
	//         .map (function (book){
	// 	        return "<li>" + book + "</li>";

	// })
	// .join("") + 
	// "</ul>";
	// return html;
    // },
});

// Render the list
app.render();

// Update the UI
data.books.push("Harry Potter IV");
data.books.push("Harry Potter V");
app.innerHTML = template(data);



