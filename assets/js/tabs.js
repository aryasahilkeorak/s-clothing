document.addEventListener("DOMContentLoaded", function () {
    let tabLinks = document.querySelectorAll(".sc-tabs .sc-navlink");

    tabLinks.forEach(function (tab) {
        tab.addEventListener("click", function (event) {
            event.preventDefault();

            // Get target tab ID from href attribute
            let targetTabId = tab.getAttribute("href");

            // Remove active class from all tab links
            document.querySelectorAll(".sc-tabs .sc-navlink").forEach(link => link.classList.remove("active"));

            // Remove show and active classes from all tab panes
            document.querySelectorAll(".sc-tab-pane").forEach(content => content.classList.remove("show", "active"));

            // Add active class to the clicked tab
            tab.classList.add("active");

            // Add show & active class to the corresponding tab content
            let targetTab = document.querySelector(targetTabId);
            if (targetTab) {
                targetTab.classList.add("show", "active");
            }
        });
    });
});
