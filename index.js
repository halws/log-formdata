module.exports = function logFormData(formData) {
    if (formData instanceof FormData) throw new TypeError("Isn't a FormData object!");

    for (var pair of formData.entries()) {
        console.log(pair[0] + ", " + pair[1]);
    }
}