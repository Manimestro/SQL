/*
! SQL Statement Classes
SQL schema statements --> define data structures stored in the database
ex: 
    CREATE TABLE phonebook
    (id SMALLINT, name VARCHAR(30),
    CONSTRAINT pk_phonebook  PRIMARY KEY (corp_id)
    );
SQL data statements  --> manipulate the data structures previously defined using SQL schema statements
ex:
    INSERT INTO phonebook (id,name)
    VALUES (1,'Mani');
    
    SELECT name FROM phonebook 
    WHERE id=1;
SQL transaction statements --> begin, end, and roll back transactions

*/