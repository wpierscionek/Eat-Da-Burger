
CREATE DATABASE  `burgers_db`;
USE `burgers_db`;

CREATE TABLE `burgers` (
	`id` Int( 11 ) AUTO_INCREMENT NOT NULL,
	`name` VARCHAR( 255 ) NOT NULL,
	`devoured` VARCHAR( 255 ) NOT NULL,
	`date` Int(11) NOT NULL,

	PRIMARY KEY ( `id` ) );