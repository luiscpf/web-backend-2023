CREATE DATABASE backend8;

USE backend8;

CREATE TABLE persons(
id INT AUTO_INCREMENT NOT NULL,
firstname VARCHAR(45) NULL,
lastname VARCHAR(45) NULL, 
profession VARCHAR(45) NULL,
age INT NULL,
PRIMARY KEY(id)
);

INSERT INTO `backend8`.`persons` (`id`, `firstname`, `lastname`, `profession`, `age`) 
VALUES ('1', 'Luis', 'Pinto', 'Programmer', '24');
INSERT INTO `backend8`.`persons` (`id`, `firstname`, `lastname`, `profession`, `age`) 
VALUES ('2', 'Milana', 'Pinto', 'Blogger', '20');
INSERT INTO `backend8`.`persons` (`id`, `firstname`, `lastname`, `profession`, `age`) 
VALUES ('3', 'Maia', 'Segda', 'Creater', '30');

set sql_safe_updates = 0;

insert into persons (firstname, lastname, profession, age)

values("Luna","Maria","Mimada", '3'),
("Palmira", "Pereira", "Administrativa", '54');

set sql_safe_updates = 1;

SELECT * FROM backend8.persons;