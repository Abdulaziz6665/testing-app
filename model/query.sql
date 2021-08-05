select
  med.m_service_name,
  sub.sub_m_service_name
from sub_med_services as sub
join med_services as med on sub.m_service_id = med.m_service_id and med.m_service_name = 'МРТ';


select
  ms.m_service_name,
  sms.sub_m_service_name,
  c.clinica_name,
  cm.clinica_message_text,
  cm.clinica_message_cost
from clinica_message as cm
join med_services as ms on cm.m_service_id = ms.m_service_id
left join sub_med_services as sms on cm.sub_m_service_id = sms.sub_m_service_id
join clinica as c on cm.clinica_id = c.clinica_id;


select
  ms.m_service_name,
  sms.sub_m_service_name,
  c.clinica_name,
  cm.clinica_message_text,
  cm.clinica_message_cost
from clinica_message as cm
join med_services as ms on cm.m_service_id = ms.m_service_id and ms.m_service_name = 'МРТ'
left join sub_med_services as sms on cm.sub_m_service_id = sms.sub_m_service_id and sms.sub_m_service_name = 'Дополнительные услуги'
join clinica as c on cm.clinica_id = c.clinica_id;