document.addEventListener("contextmenu", (event) => event.preventDefault());
document.addEventListener("keydown", (event) => {
    if (event.ctrlKey && (event.key === "u" || event.key === "U" || event.key === "s" || event.key === "S" || event.key === "i" || event.key === "I" || event.key === "j" || event.key === "J" || event.key === "c" || event.key === "C")) {
        event.preventDefault();
    }
});


function orderProduct(productName) {
            const phoneNumber = "+6282123178815"; 
            const message = `Halo, saya ingin memesan ${productName}.`;
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        }

        function toggleMenu() {
            const navUl = document.querySelector('nav ul');
            navUl.classList.toggle('active');
        }

        // Filter Products by Category
        const filterButtons = document.querySelectorAll('.filter-buttons button');
        const productCards = document.querySelectorAll('.product-card');

        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const category = button.getAttribute('data-category');

                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to the clicked button
                button.classList.add('active');

                // Filter products
                productCards.forEach(card => {
                    const cardCategory = card.getAttribute('data-category');
                    if (category === 'all' || cardCategory === category) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
