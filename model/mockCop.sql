insert into med_services(m_service_name) values
('mrt'),
('kt'),
('Rengen'),
('Densitometriya'),
('Lazernaya terapiya'),
('Mammografiya'),
('EKG'),
('Esteticheskaya ginekologiya'),
('GSG'),
('Endoskopiya'),
('Funksionalnaya diag'),
('Kolposkopiya'),
('Uzi'),
('Exokordiologiya'),
('Vaksinariya'),
('Inyeksiya'),
('Prochie uslugi');

insert into sub_med_services(sub_m_service_name, m_service_id) values
('Mrt vnutrennix organov', 1),
('Мrt golovi', 1),
('Mrt myagkix tkaney', 1),
('Mrt perifericheskoy', 1),
('Mrt pri beremonnosti', 1),
('Mrt pozvonochnika', 1),
('Mrt sustavov', 1),
('Mrt kontrastom', 1),
('Dopolnitelnie uslugi', 1),
('KT golovi', 2),
('KT konstrastom', 2),
('KT pozvonochnika', 2),
('KT sustavov i kostey', 2),
('KT vnutrennix organov', 2),
('KT myagxkiy tkaney', 2),
('Dopolnitelnie uslugi', 2),
('Rentgen golovi', 3),
('Rentgen tela', 3),
('Rentgen sustavov kostey', 3),
('Dopolnitelnie uslugi', 3),
('Gastroskopiya', 10),
('Kolonoskopiya', 10),
('Rektosigmoskopiya', 10),
('Polinektomiya', 10),
('Uzi pri beremennosti', 13),
('Uzi predostavlennoy', 13),
('Uzi pediatrii', 13),
('Uzi sosudov', 13),
('Uzi mochvidelennoy', 13),
('Uzi shitevoy zeleji', 13),
('Uzi organov polosti', 13),
('Uzi organov malogo taza', 13),
('Mammologicheskogo obsledivaniya', 13),
('Prochie isledovaniya', 13);

insert into clinica(clinica_name, clinica_address, clinica_phone_number, clinica_user, clinica_password) values
('Shox med', 'Mirobod', '8888', 'alish', '6665'),
('Akfa Med Line', 'Beruniy', '1111', 'karim', '5566'),
('Darmon service', 'Chilonzor', '5555', 'said', '6666');

insert into clinica_message(clinica_message_text, clinica_message_cost, m_service_id, clinica_id, sub_m_service_id) values
('Bizlarda MRT zo''r ishlaydi', '80 000 so''m', 1, 1, 9),
('Hammasi qimmat bizlarda', '1 000 000 so''m', 7, 2, null),
('Lazer terapiya arzon', '50 000 so''m', 5, 3, null);

insert into clinica_message(clinica_message_text, clinica_message_cost, m_service_id, clinica_id, sub_m_service_id) values
('Homiladorlar uchun zararsiz UZI xizmati', '95 000 so''m', 13, 2, 25);

insert into clinica_message(clinica_message_text, clinica_message_cost, m_service_id, clinica_id, sub_m_service_id) values
('Homiladorlik paytida mrt bizda zararsiz', '120 000 so''m', 1, 3, 5);

insert into clinica(clinica_user, clinica_password) values
('ali', '8888');