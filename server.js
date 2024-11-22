// Data tugas yang akan ditampilkan
const taskDetails = {
    task1: {
        title: "Tugas Projek 1",
        images: [
            "image/WhatsApp Image 2024-11-22 at 10.14.08_975dff1e.jpg",  // Gambar pertama
            "path/to/image1_2.jpg",  // Gambar kedua
            "path/to/image1_3.jpg"   // Gambar ketiga
        ]
    },
    task2: {
        title: "Tugas Projek 2",
        images: [
            "path/to/image2_1.jpg",  // Gambar pertama
            "path/to/image2_2.jpg",  // Gambar kedua
            "path/to/image2_3.jpg"   // Gambar ketiga
        ]
    }
};

// Fungsi untuk membuka modal dan menampilkan gambar tugas
function openTaskDetails(taskId) {
    const modal = document.getElementById('task-modal');
    const taskTitle = document.getElementById('task-title');
    const taskImagesContainer = document.getElementById('task-images');
    
    // Menampilkan judul tugas
    taskTitle.textContent = taskDetails[taskId].title;

    // Menambahkan gambar tugas ke dalam modal
    taskImagesContainer.innerHTML = ''; // Hapus konten lama
    taskDetails[taskId].images.forEach(image => {
        const img = document.createElement('img');
        img.src = image;
        taskImagesContainer.appendChild(img);
    });

    // Menampilkan modal
    modal.style.display = 'flex';
}

// Fungsi untuk menutup modal
function closeModal() {
    document.getElementById('task-modal').style.display = 'none';
}
