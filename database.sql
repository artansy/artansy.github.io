CREATE TABLE graduates (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    full_name TEXT NOT NULL,
    specialty TEXT NOT NULL,
    graduation_date DATE NOT NULL,
    document_type INTEGER NOT NULL,
    document_series TEXT NOT NULL,
    document_number TEXT NOT NULL,
    supervisor TEXT NOT NULL,
    hours INTEGER NOT NULL,
    document_file TEXT -- Новый столбец для файла документа
);

CREATE TABLE document_types (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    type TEXT NOT NULL
);

-- Предзаполните справочник видов документов
INSERT INTO document_types (type) VALUES ('Диплом');
INSERT INTO document_types (type) VALUES ('Сертификат');
INSERT INTO document_types (type) VALUES ('Удостоверение');

-- Вставьте тестовые данные
INSERT INTO graduates (full_name, specialty, graduation_date, document_type, document_series, document_number, supervisor, hours, document_file)
VALUES ('Иванов Иван Иванович', 'Бухгалтерия', '2024-05-20', 1, 'AA', '123456', 'Петров Петр Петрович', 252, 'http://example.com/documents/123456.docx');
