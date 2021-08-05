insert into med_services(m_service_name) values
('МРТ'),
('КТ'),
('Рентген'),
('Денситометрия'),
('Лазерная терапия в гинекологии'),
('Маммография'),
('ЭКГ'),
('Эстетическая гинекология'),
('ГСГ'),
('Эндоскопия'),
('Функциональная диагностика'),
('Кольпоскопия'),
('УЗИ'),
('Эхокардиография'),
('Вакцинация'),
('Инъекции'),
('Прочие услуги');

insert into sub_med_services(sub_m_service_name, m_service_id) values
('МРТ внутренних органов', 1),
('МРТ головы', 1),
('МРТ мягких тканей', 1),
('МРТ периферической нервной системы', 1),
('МРТ при беременности', 1),
('МРТ позвоночника', 1),
('МРТ суставов', 1),
('МРТ с контрастом', 1),
('Дополнительные услуги', 1),
('КТ головы', 2),
('КТ с констрастом', 2),
('КТ позвоночника', 2),
('КТ суставов и костей', 2),
('КТ внутренних органов', 2),
('КТ мягких тканей', 2),
('Дополнительные услуги', 2),
('Рентген головы', 3),
('Рентген тела', 3),
('Рентген суставов костей', 3),
('Дополнительные услуги', 3),
('Гастроскопия', 10),
('Колоноскопия', 10),
('Ректосигмоскопия', 10),
('Полипэктомия', 10),
('УЗИ при беременности', 13),
('УЗИ предстательной железы', 13),
('УЗИ в педиатрии', 13),
('УЗИ сосудов', 13),
('УЗИ мочевыделительной системы', 13),
('УЗИ щитовидной железы', 13),
('УЗИ органов брюшной полости', 13),
('УЗИ органов малого таза', 13),
('Маммологическое обследование', 13),
('Прочие исследования', 13);

insert into clinica(clinica_name, clinica_address, clinica_phone_number) values
('Shox med', 'Mirobod', '8888'),
('Akfa Med Line', 'Beruniy', '1111'),
('Darmon service', 'Chilonzor', '5555');

insert into clinica_message(clinica_message_text, clinica_message_cost, m_service_id, clinica_id, sub_m_service_id) values
('Bizlarda MRT zo''r ishlaydi', '80 000 so''m', 1, 1, 9),
('Hammasi qimmat bizlarda', '1 000 000 so''m', 7, 2, null),
('Lazer terapiya arzon', '50 000 so''m', 5, 3, null);

insert into clinica_message(clinica_message_text, clinica_message_cost, m_service_id, clinica_id, sub_m_service_id) values
('Homiladorlar uchun zararsiz UZI xizmati', '95 000 so''m', 13, 2, 25);



insert into med_services(m_service_name) values
('Абдулазиз');