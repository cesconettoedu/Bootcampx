-- SELECT cohorts.name as name, avg(assistance_requests.completed_at - assistance_requests.started_at) as average_assistance_time 
-- FROM cohorts 
-- JOIN students ON cohort_id = cohorts.id
-- JOIN assistance_requests ON assistance_requests.student_id = students.id
-- GROUP BY cohorts.name
-- ORDER BY average_assistance_time 
-- ;

SELECT cohorts.name, avg(completed_at - started_at) as average_assistance_time
FROM assistance_requests 
JOIN students ON students.id = assistance_requests.student_id
JOIN cohorts ON cohorts.id = cohort_id
GROUP BY cohorts.name
ORDER BY average_assistance_time;