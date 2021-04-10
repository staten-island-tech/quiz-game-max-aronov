// Alerts before page leave / reload
window.addEventListener("beforeunload", (event) => {
    event.preventDefault();
    event.returnValue = '';
});