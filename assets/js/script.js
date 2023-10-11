var swiper = new Swiper(".mySwiperPopuler", {
    grabCursor: true,
    spaceBetween: 20,
    centeredSlides: false,
    slidesPerView: "auto",
    navigation: {
        nextEl: ".bx-chevron-right-circle",
        prevEl: ".bx-chevron-left-circle",
    },

});

document.getElementById("lihatSemuaKos").addEventListener("click", function() {
    window.location.href = "sebelum-login/lihat_semua.html";
});

// Fungsi yang akan dijalankan ketika tombol "Masuk" ditekan
document.getElementById("masukButton").addEventListener('click', function() {
    window.location.href = "masuk-login/login.html"; // Gantilah URL_TUJUAN dengan URL yang Anda inginkan
});

// Fungsi yang akan dijalankan ketika tombol "Masuk" ditekan
document.getElementById("favorit").addEventListener('click', function() {
    window.location.href = "favorit/favorit.html"; // Gantilah URL_TUJUAN dengan URL yang Anda inginkan
});



// simpan dan hapus pada filter

// $(document).ready(function () {
//     // Mengatur event handler untuk tombol Simpan
//     $("#simpanBtn").click(function () {
//         var selectedOptions = [];

//         // Mendapatkan nilai checkbox yang dicentang
//         $(".dropdown-item input:checked").each(function () {
//             selectedOptions.push($(this).val());
//         });

//         // Menyimpan nilai-nilai yang dipilih
//         console.log("Pilihan yang dipilih: " + selectedOptions.join(", "));
//     });

//     // Mengatur event handler untuk tombol Hapus
//     $("#hapusBtn").click(function () {
//         // Menghapus centang dari semua checkbox
//         $(".dropdown-item input:checked").prop("checked", false);
//     });
// });


// filter harga kos
// $(document).ready(function() {
//     // Mengatur event handler untuk tombol Simpan
//     $("#simpanBtn").click(function() {
//         var minVal = $("#minInput").val();
//         var maxVal = $("#maxInput").val();
//         $("#minValue").text(minVal + " ribu");
//         $("#maxValue").text(maxVal / 1000000 + " juta");
//     });

//     // Mengatur event handler untuk tombol Hapus
//     $("#hapusBtn").click(function() {
//         $("#minInput").val(10000); // Mengembalikan nilai minimal ke default
//         $("#maxInput").val(10000000); // Mengembalikan nilai maksimal ke default
//         $("#minValue").text("10 ribu"); // Mengembalikan teks minimal ke default
//         $("#maxValue").text("10,00 juta"); // Mengembalikan teks maksimal ke default
//     });
// });



// AOS
AOS.init();


document.addEventListener('DOMContentLoaded', function () {
    const chatOverlay = document.getElementById('chat-overlay');
    const chatToggle = document.getElementById('chat-toggle');
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');
    const chatIcon = document.getElementById("chat-icon");
    const closeChatButton = document.getElementById("close-chat-overlay");
    const chatMessages = document.getElementById("chat-messages");

    // Event handler untuk menampilkan atau menyembunyikan chat overlay
    chatToggle.addEventListener('click', function () {
        if (chatOverlay.style.right === '0px' || chatOverlay.style.right === '') {
            chatOverlay.style.right = '-400px'; // Menyembunyikan chat
        } else {
            chatOverlay.style.right = '0px'; // Menampilkan chat
        }
    });

    sendButton.addEventListener('click', function () {
        const message = messageInput.value.trim();

        if (message !== '') {
            appendMessage('you', message);
            // Kirim pesan ke backend atau pemilik kos di sini
            messageInput.value = '';
        }
    });

    function appendMessage(sender, text) {
        const messageElement = document.createElement('div');
        messageElement.innerHTML = `<strong>${sender}:</strong> ${text}`;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // JavaScript untuk menutup chat overlay saat tombol "X" diklik
    closeChatButton.addEventListener("click", function() {
        chatOverlay.style.right = '-400px';
    });

    // Saat tombol ikon chat diklik, tampilkan chat overlay
    chatIcon.addEventListener("click", function() {
        chatOverlay.style.right = '0px';
    });
});
