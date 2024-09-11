
document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const dropdown = document.querySelector('.dropdown-content');

    menuIcon.addEventListener('click', function() {
        dropdown.classList.toggle('show');
    });

    //  clicked outside
    document.addEventListener('click', function(event) {
        const isClickInside = dropdown.contains(event.target) || menuIcon.contains(event.target);

        if (!isClickInside && dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
        }
    });
});
