/*
SQLyog Ultimate v11.5 (32 bit)
MySQL - 10.1.22-MariaDB : Database - hrportal
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`hrportal` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `hrportal`;

/*Table structure for table `roles` */

DROP TABLE IF EXISTS `roles`;

CREATE TABLE `roles` (
  `role_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `created` datetime NOT NULL,
  `created_by` char(40) NOT NULL,
  `last_updated` datetime NOT NULL,
  `last_updated_by` char(40) NOT NULL,
  `deleted` tinyint(1) DEFAULT '0',
  `guid` char(40) NOT NULL,
  `check_sum` bigint(8) DEFAULT '0',
  PRIMARY KEY (`role_id`),
  UNIQUE KEY `guid` (`guid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `roles` */

insert  into `roles`(`role_id`,`name`,`description`,`created`,`created_by`,`last_updated`,`last_updated_by`,`deleted`,`guid`,`check_sum`) values (1,'admin','All privileges to handle the users','2017-06-10 20:34:42','3fc65a80bfe945338d2367184a8eab06','2017-06-10 20:34:42','3fc65a80bfe945338d2367184a8eab06',0,'a45d7625d55e4643acc290576e310c1e',0),(2,'user','user under the control of admin','2017-06-10 20:34:42','3fc65a80bfe945338d2367184a8eab06','2017-06-10 20:34:42','3fc65a80bfe945338d2367184a8eab06',0,'da6fbe58e70b40c6bad023521d5750c5',0);

/*Table structure for table `user` */

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `email` char(144) DEFAULT NULL,
  `emp_id` varchar(255) DEFAULT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT '',
  `password` varchar(255) NOT NULL,
  `created` datetime NOT NULL,
  `created_by` char(40) NOT NULL,
  `last_updated` datetime NOT NULL,
  `last_updated_by` char(40) NOT NULL,
  `deleted` tinyint(1) DEFAULT '0',
  `guid` char(40) NOT NULL,
  `check_sum` bigint(8) DEFAULT '0',
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `guid` (`guid`),
  KEY `emp_id` (`emp_id`),
  KEY `username` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `user` */

insert  into `user`(`user_id`,`email`,`emp_id`,`firstname`,`lastname`,`name`,`password`,`created`,`created_by`,`last_updated`,`last_updated_by`,`deleted`,`guid`,`check_sum`) values (1,'sbala.1989@outlook.com','H1008','Balasubramanian','Sivakumar','H1008','40be4e59b9a2a2b5dffb918c0e86b3d7','2017-06-10 20:34:52','3fc65a80bfe945338d2367184a8eab06','2017-06-10 20:34:52','3fc65a80bfe945338d2367184a8eab06',0,'3fc65a80bfe945338d2367184a8eab06',0);

/*Table structure for table `user_profile` */

DROP TABLE IF EXISTS `user_profile`;

CREATE TABLE `user_profile` (
  `user_profile_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_guid` char(40) NOT NULL,
  `picture` varchar(400) DEFAULT NULL,
  `dob` varchar(255) DEFAULT NULL,
  `blood_group` varchar(255) DEFAULT NULL,
  `marital_status` varchar(255) DEFAULT NULL,
  `gender` enum('male','female','unspecified') NOT NULL,
  `present_address1` varchar(255) DEFAULT NULL,
  `present_address2` varchar(255) DEFAULT NULL,
  `present_city` varchar(255) DEFAULT NULL,
  `present_state` varchar(255) DEFAULT NULL,
  `present_pincode` varchar(255) DEFAULT NULL,
  `permanent_address1` varchar(255) DEFAULT NULL,
  `permanent_address2` varchar(255) DEFAULT NULL,
  `permanent_city` varchar(255) DEFAULT NULL,
  `permanent_state` varchar(255) DEFAULT NULL,
  `permanent_pincode` varchar(255) DEFAULT NULL,
  `aadhar_id` varchar(255) DEFAULT NULL,
  `pan_number` varchar(255) DEFAULT NULL,
  `mobile_number` varchar(15) DEFAULT NULL,
  `phone_number` varchar(15) DEFAULT NULL,
  `created` datetime NOT NULL,
  `created_by` char(40) NOT NULL,
  `last_updated` datetime NOT NULL,
  `last_updated_by` char(40) NOT NULL,
  `deleted` tinyint(1) DEFAULT '0',
  `guid` char(40) NOT NULL,
  `check_sum` bigint(8) DEFAULT '0',
  PRIMARY KEY (`user_profile_id`),
  UNIQUE KEY `guid` (`guid`),
  KEY `user_guid` (`user_guid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `user_profile` */

insert  into `user_profile`(`user_profile_id`,`user_guid`,`picture`,`dob`,`blood_group`,`marital_status`,`gender`,`present_address1`,`present_address2`,`present_city`,`present_state`,`present_pincode`,`permanent_address1`,`permanent_address2`,`permanent_city`,`permanent_state`,`permanent_pincode`,`aadhar_id`,`pan_number`,`mobile_number`,`phone_number`,`created`,`created_by`,`last_updated`,`last_updated_by`,`deleted`,`guid`,`check_sum`) values (1,'3fc65a80bfe945338d2367184a8eab06','3fc65a80bfe945338d2367184a8eab06.jpg','13-11-1989','A+ve','Single','male','801, 48th Cross Street, Thiruvalluvar Nagar','Thiruvanmiyur','Chennai','Tamilnadu','600041','801, 48th Cross Street, Thiruvalluvar Nagar','Thiruvanmiyur','Chennai','Tamilnadu','600041','677680258044','BEKPP9612N','9047649692','1234567890','2017-06-10 20:36:18','3fc65a80bfe945338d2367184a8eab06','2017-06-10 20:36:18','3fc65a80bfe945338d2367184a8eab06',0,'e6c32b4e265947edb2efaee6aadbc34d',0);

/*Table structure for table `user_role` */

DROP TABLE IF EXISTS `user_role`;

CREATE TABLE `user_role` (
  `user_role_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_guid` char(40) NOT NULL,
  `role_guid` char(40) NOT NULL,
  `created` datetime NOT NULL,
  `created_by` char(40) NOT NULL,
  `last_updated` datetime NOT NULL,
  `last_updated_by` char(40) NOT NULL,
  `deleted` tinyint(1) DEFAULT '0',
  `guid` char(40) NOT NULL,
  `check_sum` bigint(8) DEFAULT '0',
  PRIMARY KEY (`user_role_id`),
  UNIQUE KEY `guid` (`guid`),
  KEY `role_guid` (`role_guid`),
  KEY `user_guid` (`user_guid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `user_role` */

insert  into `user_role`(`user_role_id`,`user_guid`,`role_guid`,`created`,`created_by`,`last_updated`,`last_updated_by`,`deleted`,`guid`,`check_sum`) values (1,'3fc65a80bfe945338d2367184a8eab06','a45d7625d55e4643acc290576e310c1e','2017-06-10 20:35:00','3fc65a80bfe945338d2367184a8eab06','2017-06-10 20:35:00','3fc65a80bfe945338d2367184a8eab06',0,'31c16f5902ad46fe8a47d089cc757f93',0);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
