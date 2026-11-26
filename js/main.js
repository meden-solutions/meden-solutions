
// MEDEN SOLUTIONS
// Mobilni navigacijski meni

function toggleMenu() {
    const navigation = document.getElementById("navigation");
    const menuButton = document.querySelector(".menu-btn");

    if (!navigation || !menuButton) {
        return;
    }

    navigation.classList.toggle("active");

    const isOpen = navigation.classList.contains("active");

    menuButton.setAttribute("aria-expanded", isOpen);
    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Zapri meni" : "Odpri meni"
    );
}
