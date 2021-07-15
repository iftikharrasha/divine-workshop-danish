const toggleBars = () => {
    const bars = document.getElementById("toggler-bars");
    const sidebar = document.getElementById("sidenav-main");
    const opacity = document.getElementById("mainContent");
    const brand = document.getElementById("brand");
    
    bars.classList.toggle('active');
    sidebar.classList.toggle('nav-open');
    opacity.classList.toggle('opacity-on');
    brand.classList.toggle('brand-fly');
}