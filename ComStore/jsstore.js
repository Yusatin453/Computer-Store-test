document.addEventListener('DOMContentLoaded', () => {
    // --- JavaScript untuk Carousel Gambar ---
    const carouselSlide = document.querySelector('.carousel-slide');
    const carouselImages = [
        // Ganti URL placeholder ini dengan URL gambar Anda
        'pcgaming.jpg',
        'monitor4k.jpg',
        'omen_victus_heroImage1.avif',
        'keyboardred.avif',
        'headsetgming.jpg'
    ];
    let currentIndex = 0;

    // Fungsi untuk memuat gambar ke carousel
    function loadCarouselImages() {
        carouselSlide.innerHTML = ''; // Kosongkan slide sebelumnya
        carouselImages.forEach(imageSrc => {
            const img = document.createElement('img');
            img.src = imageSrc;
            img.alt = 'Produk Unggulan'; // Ganti dengan alt text yang lebih deskriptif
            carouselSlide.appendChild(img);
        });
        updateCarouselPosition(); // Posisikan carousel setelah gambar dimuat
    }

    // Fungsi untuk memperbarui posisi carousel
    function updateCarouselPosition() {
        // Lebar setiap gambar (akan sama dengan lebar carousel-slide)
        const imageWidth = carouselSlide.children[0].clientWidth;
        // Geser slide ke posisi gambar saat ini
        carouselSlide.style.transform = `translateX(${-currentIndex * imageWidth}px)`;
    }

    // Fungsi untuk geser ke gambar berikutnya
    function nextSlide() {
        currentIndex = (currentIndex + 1) % carouselImages.length;
        updateCarouselPosition();
    }

    // Fungsi untuk geser ke gambar sebelumnya
    function prevSlide() {
        currentIndex = (currentIndex - 1 + carouselImages.length) % carouselImages.length;
        updateCarouselPosition();
    }

    // Event Listeners untuk tombol navigasi
    document.querySelector('.carousel-btn.next').addEventListener('click', nextSlide);
    document.querySelector('.carousel-btn.prev').addEventListener('click', prevSlide);

    // Otomatis geser setiap 5 detik (opsional)
    // setInterval(nextSlide, 5000);

    // Panggil fungsi untuk memuat gambar saat halaman pertama kali dimuat
    loadCarouselImages();

    // Pastikan posisi carousel benar saat ukuran window berubah
    window.addEventListener('resize', updateCarouselPosition);


    // --- JavaScript untuk Fitur Lain (Contoh: Notifikasi "Tambah ke Keranjang") ---
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const productName = event.target.closest('.product-item').querySelector('h3').textContent;
            alert(`${productName} telah ditambahkan ke keranjang! (Ini hanya simulasi)`);
            // Di sini Anda bisa menambahkan logika yang sebenarnya untuk keranjang belanja,
            // seperti menyimpan ke localStorage atau mengirim ke server.
        });
    });

    // --- JavaScript untuk Smooth Scrolling (jika navigasi menggunakan #id) ---
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Mencegah perilaku default link

            const targetId = this.getAttribute('href').substring(1); // Ambil ID target
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - (document.querySelector('header').offsetHeight), // Sesuaikan dengan tinggi header
                    behavior: 'smooth' // Efek scroll halus
                });
            }
        });
    });

}); // Akhir dari DOMContentLoaded