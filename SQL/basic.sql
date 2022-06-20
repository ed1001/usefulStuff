
-- Show columns for a table:

show columns from City;

-- Common Table Expresssions (CTEs)

with my_common_table_exp as (
select some_column
from some_table
)

-- IN
where some_column in ('asdf', 'qwer', 'tyui');

-- BETWEEN
where some_column between 100 and 200;

-- LIKE
where some_column like '%b'; -- ends with 'b'
where some_column like '___b'; -- can be 'dorb'

-- REGEX
where some_column regex '^b'; -- ends with 'b'

-- ORDER BY
order by some_column, another_column desc
order by 1, 2 -- column position
order by some_value * another_value -- expression

-- LIMIT
limit 10, 100 -- offset by 10 (skip first 10)

-- INNER JOIN (selects rows matching values on both tables)
join -- or
inner join another_table on some_table.some_column = another_table.some_column

-- SELF JOIN (if table references rows in same table)
from another_table as a1
join another_table as a2
on a1.some_column = a2.another_column

-- implicit JOIN (not recommended as makes a cross join if the where clause is absent)
from some_table, another_table
where some_table.some_column = another_table.some_column

-- OUTER JOIN (returns all rows from specified table and matching rows from the other)
from some_table as a1
left join another_table as a2
on a1.some_column = a2.another_column

-- USING (simplifies ON clause if columns are the same)
from some_table as a1
left join another_table as a2
using (some_column)
-- or for compound joins (match on multiple columns)
using (some_column, another_column)

-- CROSS JOIN (select every possible combination of rows from both tables)
from some_table as a1
cross join another_table as a2
-- or implicitly
join some_table, another_table

-- UNION (combine queries, column name based on first query)
select some_column, 'archived' as order_status from some_table where dob < '2020-01-01'
union
select some_column, 'active' from some_table where dob > '2020-01-01'


