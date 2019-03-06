/* Create a table for all your star wars characters */
CREATE TABLE `burgers` (
	`id` Int( 11 ) AUTO_INCREMENT NOT NULL,
	`burger_name` VARCHAR( 255 ) NOT NULL,
	`devoured` BOOLEAN NOT NULL,
	/* Set ID as primary key */
	PRIMARY KEY ( `id` )
);


INSERT INTO burgers (burger_name, devoured)
VALUES ('The Hana', 0);

INSERT INTO burgers (burger_name, devoured)
VALUES ('The Blackcomb', 0);

INSERT INTO burgers (burger_name, devoured)
VALUES ('The Pharoh Burger', 0);