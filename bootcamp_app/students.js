const { Pool } = require('pg');

const process = require('process');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});
              // this will put a default if dont have any arguments
let cohort = typeof process.argv[2] === 'undefined' ? 'FEB12' : process.argv[2]            
let limit = typeof process.argv[3] === 'undefined' ? 5 : process.argv[3] 

pool.query(`
SELECT students.id as student_id, students.name as name, cohorts.name as cohort
FROM students
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name LIKE $1
LIMIT $2;
`, [cohort, limit])

.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.name} has an id of ${user.student_id} and was in the ${user.cohort} cohort`);
  })
})
.catch(err => console.error('query error', err.stack));