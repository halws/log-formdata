function logFormData(formData) {
    for (var pair of formData.entries()) {
        console.log(pair[0] + ", " + pair[1]);
    }
}

module.exports = logFormData