create table med_services (
  m_service_id int not null generated by default as identity primary key,
  m_service_name varchar(48) not null
);

create table sub_med_services (
  sub_m_service_id int not null generated by default as identity primary key,
  sub_m_service_name varchar(48),
  m_service_id int not null references med_services (m_service_id)
);

create table clinica (
  clinica_id int not null generated by default as identity primary key,
  clinica_name varchar(24),
  clinica_address varchar(64),
  clinica_phone_number varchar(24),
  clinica_user varchar(24) not null,
  clinica_password varchar(72) not null
);

create table clinica_message (
  clinica_message_id int not null generated by default as identity primary key,
  clinica_message_text text not null,
  clinica_message_cost varchar(24) not null,
  m_service_id int not null references med_services(m_service_id),
  clinica_id int not null references clinica(clinica_id),
  sub_m_service_id int default null references sub_med_services(sub_m_service_id)
);