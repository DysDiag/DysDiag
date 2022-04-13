const image_input = document.querySelector("#image_input");
let uploaded_image;

image_input.addEventListener('change', function() {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
        uploaded_image = reader.result;
        document.querySelector("#display_image").style.backgroundImage = `url(${uploaded_image})`;
        document.getElementById("pre_results").src = uploaded_image;
        run()
    });
    reader.readAsDataURL(this.files[0]);
});