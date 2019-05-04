-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema clothes
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `clothes` ;

-- -----------------------------------------------------
-- Schema clothes
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `clothes` DEFAULT CHARACTER SET utf8 ;
USE `clothes` ;

-- -----------------------------------------------------
-- Table `clothes`.`precipitation`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `clothes`.`precipitation` ;

CREATE TABLE IF NOT EXISTS `clothes`.`precipitation` (
  `precipID` INT(11) NOT NULL AUTO_INCREMENT,
  `precipType` VARCHAR(50) NULL DEFAULT NULL,
  `precipRec` VARCHAR(50) NULL,
  `precipRange` VARCHAR(45) NULL,
  PRIMARY KEY (`precipID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `clothes`.`temperature`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `clothes`.`temperature` ;

CREATE TABLE IF NOT EXISTS `clothes`.`temperature` (
  `tempID` INT(11) NOT NULL AUTO_INCREMENT,
  `tempDesc` VARCHAR(50) NULL DEFAULT NULL,
  `tempRange` VARCHAR(45) NULL,
  PRIMARY KEY (`tempID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `clothes`.`wind`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `clothes`.`wind` ;

CREATE TABLE IF NOT EXISTS `clothes`.`wind` (
  `windID` INT(11) NOT NULL AUTO_INCREMENT,
  `windType` VARCHAR(50) NULL DEFAULT NULL,
  `windRec` VARCHAR(45) NULL,
  `windRange` VARCHAR(45) NULL,
  PRIMARY KEY (`windID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `clothes`.`tops`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `clothes`.`tops` ;

CREATE TABLE IF NOT EXISTS `clothes`.`tops` (
  `topID` INT NOT NULL AUTO_INCREMENT,
  `topRec` VARCHAR(45) NULL,
  `temperature_tempID` INT(11) NOT NULL,
  PRIMARY KEY (`topID`, `temperature_tempID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `clothes`.`bottoms`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `clothes`.`bottoms` ;

CREATE TABLE IF NOT EXISTS `clothes`.`bottoms` (
  `bottomID` INT NOT NULL AUTO_INCREMENT,
  `bottomRec` VARCHAR(45) NULL,
  `temperature_tempID` INT(11) NOT NULL,
  PRIMARY KEY (`bottomID`, `temperature_tempID`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;



INSERT INTO precipitation (precipType,precipRec,precipRange)VALUES ('no rain', 'no rain', '0'), 
('light rain','bring an umbrella','0.098'), 
('moderate rain','bring an umbrella or raincoat', '0.098-0.39'),
('heavy rain', 'bring a raincoat or poncho', '0.39-2.0'),
('violent rain', 'do not go outside', '>2.0');

INSERT INTO wind (windType,windRec,windRange) VALUES ('calm', 'low winds', '0-12'),
('moderate breeze', 'wear something wind resistant, or dress warmer', '12-24'),
('high wind', 'wear something wind resistant', '24-38'),
('Gale', 'wear something wind resistant, be careful of twigs. Recommended not to go out', '39-46'),
('Severe gale/Storm', 'do not go out', 47-73);

INSERT INTO temperature(tempDesc,tempRange) VALUES('freezing', '<0'),
('cold', '0-7.5'),
('warm', '7.5-15.5'),
('hot', '>15.5');

INSERT INTO tops(topRec,temperature_tempID) VALUES('wear long sleeves, multiple layers, and a winter coat', 1),
('wear layers and a fall or winter coat', 2),
('wear a short sleeve or long sleeved shirt and a light jacket', 3),
('wear short sleeves', 4);

INSERT INTO bottoms(bottomRec,temperature_tempID) VALUES('wear warm long pants', 1),
('wear long pants', 2),
('wear shorts or long pants', 3),
('wear shorts', 4);





