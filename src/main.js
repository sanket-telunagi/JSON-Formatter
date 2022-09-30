// the input and output fields
const input_area = document.querySelector(".large-area--input");
const output_area = document.querySelector(".large-area--output");

// buttons
const format_btn = document.querySelector(".control_buttons--format");
const minify_btn = document.querySelector(".control_buttons--minify");

format_btn.addEventListener("click", () => {
    // "4" is indentation
    const formated_text = JSON.stringify(JSON.parse(input_area.value),null,4);

    // output formatted text
    output_area.value = formated_text ;
})

minify_btn.addEventListener("click", () => {

    const minified_text = JSON.stringify(JSON.parse(input_area.value));

    // Output the minified text
    output_area.value = minified_text ;
})