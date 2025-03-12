document.addEventListener('DOMContentLoaded', function() {
    fetch('https://raw.githubusercontent.com/artansy/artansy/main/graduates.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const tableBody = document.querySelector('#graduatesTable tbody');
            data.forEach(item => {
                const tr = document.createElement('tr');
                Object.values(item).forEach((value, index) => {
                    const td = document.createElement('td');
                    if (index === Object.values(item).length - 1 && index === 8) { // Последняя колонка - URL
                        const link = document.createElement('a');
                        link.href = value.trim();
                        link.textContent = 'Ссылка';
                        link.target = '_blank';
                        td.appendChild(link);
                    } else {
                        td.textContent = value.trim();
                    }
                    tr.appendChild(td);
                });
                tableBody.appendChild(tr);
            });
        })
        .catch(error => console.error('Ошибка загрузки файла:', error));
});

