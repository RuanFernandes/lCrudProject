CREATE DATABASE `db01` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

CREATE TABLE `menu_nav` (
  `id` int NOT NULL AUTO_INCREMENT,
  `text` varchar(32) NOT NULL,
  `href` varchar(100) NOT NULL,
  `deletable` char(1) DEFAULT 'S',
  `disabled` char(1) DEFAULT 'N',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO db01.menu_nav
(id, `text`, href, deletable, disabled)
VALUES(1, 'Home', '/', 'N', 'N');

INSERT INTO db01.menu_nav
(id, `text`, href, deletable, disabled)
VALUES(2, 'PlaceHolder', '/', 'N', 'S');
