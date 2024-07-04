
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('enrollForm');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const course = document.getElementById('course').value;

            if (name && email && phone && course) {
                alert('Спасибо за вашу заявку!');
                form.reset();
            } else {
                alert('Пожалуйста, заполните все поля.');
            }
        });
    }


    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // предотвращаем отправку для обработки через JS

            const formData = new FormData(form);

            fetch(form.action, {
                method: form.method,
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    alert('Спасибо за вашу заявку!');
                    form.reset(); // очищаем форму
                } else {
                    response.json().then(data => {
                        if (data.errors) {
                            alert(data.errors.map(error => error.message).join(", "));
                        }
                    });
                }
            })
            .catch(error => {
                alert('Произошла ошибка при отправке формы.');
                console.error('Ошибка:', error);
            });
        });
    }

    const tableBody = document.querySelector('#graduatesTable tbody');

    function fetchGraduates() {
        fetch('http://127.0.0.1:5000/api/graduates')
            .then(response => response.json())
            .then(data => {
                tableBody.innerHTML = ''; // Очистить таблицу перед добавлением данных
                data.forEach(graduate => {
                    const row = document.createElement('tr');

                    Object.values(graduate).forEach(value => {
                        const cell = document.createElement('td');
                        cell.textContent = value;
                        row.appendChild(cell);
                    });

                    tableBody.appendChild(row);
                });
            })
            .catch(error => console.error('Ошибка при загрузке данных:', error));
    }

    fetchGraduates();

const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
let currentIndex = 0;
const totalSlides = slide.length;

function nextSlide() {
    currentIndex++;
    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }
    updateSlidePosition();
}

function updateSlidePosition() {
    slides.style.transform = 'translateX(' + (-currentIndex * 100) + '%)';
}

// Change slide every 4 seconds
setInterval(nextSlide, 4000);


document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".program-card");

    cards.forEach(card => {
        card.addEventListener("click", () => {
            const content = card.querySelector(".program-content");
            if (content.style.display === "none") {
                content.style.display = "block";
            } else {
                content.style.display = "none";
            }
        });
    });
});


});

