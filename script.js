
document.addEventListener('DOMContentLoaded', function() {
    console.log('JS Loaded'); // Debug

    const taskBox = document.querySelector('.task-box');

    // Menampilkan pesan tugas saat box diklik
    taskBox.addEventListener('click', function() {
        // Menampilkan pesan placeholder
        showTaskMessage();
    });
});

// Fungsi untuk membuka modal dan menampilkan iframe
function openModal(taskId) {
    const modal = document.getElementById("taskModal");
    const iframe = document.getElementById("taskIframe");

    modal.style.display = "block"; // Tampilkan modal
    iframe.src = taskId; // Menetapkan sumber iframe sesuai tugas yang diklik
}

// Fungsi untuk menutup modal
function closeModal() {
    const modal = document.getElementById("taskModal");
    const iframe = document.getElementById("taskIframe");

    modal.style.display = "none"; // Sembunyikan modal
    iframe.src = ""; // Hapus sumber iframe (untuk membersihkan konten sebelumnya)
}

// Ambil elemen modal dan tombol
const modal = document.getElementById("myModal");
const btn = document.getElementById("openModal");
const span = document.getElementsByClassName("close")[0];

// Ketika tombol diklik, buka modal
btn.onclick = function() {
  modal.style.display = "block";
  renderChart(); // Render grafik saat modal muncul
}

// Ketika tombol (X) diklik, tutup modal
span.onclick = function() {
  modal.style.display = "none";
}

// Ketika user mengklik di luar modal, tutup modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
function renderChart() {
    console.log("Rendering chart...");
    const ctx = document.getElementById('combinedChart').getContext('2d');
    const combinedChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['0', '100', '200', '300', '400', '500'], // contoh lintasan
        datasets: [
          {
            label: 'FCFS',
            data: [100, 150, 200, 250, 300, 350],
            borderColor: 'red',
            fill: false,
            tension: 0.3
          },
          {
            label: 'SSTF',
            data: [100, 130, 170, 210, 260, 300],
            borderColor: 'blue',
            fill: false,
            tension: 0.3
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true
          },
          title: {
            display: true,
            text: 'Grafik Gabungan 7 Algoritma'
          }
        },
        scales: {
          y: {
            title: {
              display: true,
              text: 'Track Number'
            }
          },
          x: {
            title: {
              display: true,
              text: 'Urutan Servis'
            }
          }
        }
      }
    });
  }
  