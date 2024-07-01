document.addEventListener("DOMContentLoaded", function() {
    const tableBody = document.querySelector('#graduatesTable tbody');

    function fetchGraduates() {
        fetch('http://127.0.0.1:5000/api/graduates')
        
            .then(response => response.json())
            .then(data => {
                tableBody.innerHTML = ''; // Очистить таблицу перед добавлением данных
                if (data.length > 0) {
                    data.forEach(graduate => {
                        const row = document.createElement('tr');

                        // ФИО
                        const fullNameCell = document.createElement('td');
                        fullNameCell.textContent = graduate.full_name;
                        row.appendChild(fullNameCell);

                        // Специальность
                        const specialtyCell = document.createElement('td');
                        specialtyCell.textContent = graduate.specialty;
                        row.appendChild(specialtyCell);

                        // Дата выпуска (пример преобразования даты)
                        const graduationDateCell = document.createElement('td');
                        // Предположим, что дата приходит в формате YYYY-MM-DD
                        const formattedDate = new Date(graduate.graduation_date).toLocaleDateString('ru-RU');
                        graduationDateCell.textContent = formattedDate;
                        row.appendChild(graduationDateCell);

                        // Вид документа
                        const documentTypeCell = document.createElement('td');
                        documentTypeCell.textContent = graduate.document_type;
                        row.appendChild(documentTypeCell);

                        // Серия документа
                        const documentSeriesCell = document.createElement('td');
                        documentSeriesCell.textContent = graduate.document_series;
                        row.appendChild(documentSeriesCell);

                        // Номер документа
                        const documentNumberCell = document.createElement('td');
                        documentNumberCell.textContent = graduate.document_number;
                        row.appendChild(documentNumberCell);

                        // Руководитель
                        const supervisorCell = document.createElement('td');
                        supervisorCell.textContent = graduate.supervisor;
                        row.appendChild(supervisorCell);

                        // Количество часов
                        const hoursCell = document.createElement('td');
                        hoursCell.textContent = graduate.hours;
                        row.appendChild(hoursCell);

                        // Документ (.docx)
                        const documentCell = document.createElement('td');
                        if (graduate.document_file && graduate.document_file.trim() !== '') {
                            const link = document.createElement('a');
                            link.href = graduate.document_file;
                            link.textContent = 'Скачать';
                            documentCell.appendChild(link);
                        } else {
                            documentCell.textContent = 'Нет файла';
                        }
                        row.appendChild(documentCell);
                        console.log('Значение document_file:', graduate.document_file);

                        tableBody.appendChild(row);
                    });
                } else {
                    const row = document.createElement('tr');
                    const cell = document.createElement('td');
                    cell.colSpan = 9;
                    cell.textContent = 'Данные отсутствуют';
                    row.appendChild(cell);
                    tableBody.appendChild(row);
                }
            })
            .catch(error => console.error('Ошибка при загрузке данных:', error));
    }

    fetchGraduates();
});
