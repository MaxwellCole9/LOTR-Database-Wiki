SET FOREIGN_KEY_CHECKS=0;
SET AUTOCOMMIT = 0;

-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: classmysql.engr.oregonstate.edu    Database: cs340_swaimn
-- ------------------------------------------------------
-- Server version	5.5.5-10.6.16-MariaDB-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Categories`
--

DROP TABLE IF EXISTS `Categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Categories` (
  `categoryID` int(11) NOT NULL AUTO_INCREMENT,
  `category` varchar(45) DEFAULT NULL,
  `categoryDescription` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`categoryID`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Categories`
--

LOCK TABLES `Categories` WRITE;
/*!40000 ALTER TABLE `Categories` DISABLE KEYS */;
INSERT INTO `Categories` VALUES (1,'short-range combat','Effective at close range.'),(2,'long-range combat','Effective at long range.'),(3,'healing','Effective at healing lost HP.'),(4,'food','Effective at temporarily incerasing health and dexterity.'),(5,'defensive combat','Effective reducing the effect of enemy attacks.');
/*!40000 ALTER TABLE `Categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `CharacterSkills`
--

DROP TABLE IF EXISTS `CharacterSkills`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `CharacterSkills` (
  `characterID` int(11) NOT NULL,
  `skillID` int(11) NOT NULL,
  PRIMARY KEY (`characterID`,`skillID`),
  KEY `skillID` (`skillID`),
  CONSTRAINT `CharacterSkills_ibfk_1` FOREIGN KEY (`characterID`) REFERENCES `Characters` (`characterID`),
  CONSTRAINT `CharacterSkills_ibfk_2` FOREIGN KEY (`skillID`) REFERENCES `Skills` (`skillID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `CharacterSkills`
--

LOCK TABLES `CharacterSkills` WRITE;
/*!40000 ALTER TABLE `CharacterSkills` DISABLE KEYS */;
INSERT INTO `CharacterSkills` VALUES (1,3),(2,2),(3,1);
/*!40000 ALTER TABLE `CharacterSkills` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Characters`
--

DROP TABLE IF EXISTS `Characters`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Characters` (
  `characterID` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(128) NOT NULL,
  `characterDescription` varchar(500) DEFAULT NULL,
  `health` int(11) NOT NULL,
  `dexterity` int(11) NOT NULL,
  `defense` int(11) DEFAULT NULL,
  `attack` int(11) DEFAULT NULL,
  PRIMARY KEY (`characterID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Characters`
--

LOCK TABLES `Characters` WRITE;
/*!40000 ALTER TABLE `Characters` DISABLE KEYS */;
INSERT INTO `Characters` VALUES (1,'Gandalf the Grey','He always arrives late - er, precisely when he means to - but he sure does know a thing or two',200,125,300,300),(2,'Frodo Baggins','A hobbit who until recently did not leave the shire much.',100,50,50,50),(3,'Legolas','An elf with insanely good archery skills and a striking resemblance to Orlando Bloom',200,300,250,250);
/*!40000 ALTER TABLE `Characters` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ItemCategories`
--

DROP TABLE IF EXISTS `ItemCategories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ItemCategories` (
  `itemID` int(11) NOT NULL,
  `categoryID` int(11) NOT NULL,
  PRIMARY KEY (`itemID`,`categoryID`),
  KEY `categoryID` (`categoryID`),
  CONSTRAINT `ItemCategories_ibfk_1` FOREIGN KEY (`itemID`) REFERENCES `Items` (`itemID`),
  CONSTRAINT `ItemCategories_ibfk_2` FOREIGN KEY (`categoryID`) REFERENCES `Categories` (`categoryID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ItemCategories`
--

LOCK TABLES `ItemCategories` WRITE;
/*!40000 ALTER TABLE `ItemCategories` DISABLE KEYS */;
INSERT INTO `ItemCategories` VALUES (1,2),(3,1),(3,5);
/*!40000 ALTER TABLE `ItemCategories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Items`
--

DROP TABLE IF EXISTS `Items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Items` (
  `itemID` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(128) DEFAULT NULL,
  `itemDescription` varchar(500) DEFAULT NULL,
  `levelRequired` int(11) NOT NULL,
  PRIMARY KEY (`itemID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Items`
--

LOCK TABLES `Items` WRITE;
/*!40000 ALTER TABLE `Items` DISABLE KEYS */;
INSERT INTO `Items` VALUES (1,'Legolas\'s bow','It is not the quality of the bow, but the quality of its master, that determines its effecitveness.',5),(2,'The One Ring','The ring that was forged in the fires of Mount Doom. A little underwhelming if I do say so myself. I was at least expecting a Silmaril or something.',1),(3,'Gandalf\'s Sword','He does not miss, he swings precisely where he means to.',10);
/*!40000 ALTER TABLE `Items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `QuestRequirements`
--

DROP TABLE IF EXISTS `QuestRequirements`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `QuestRequirements` (
  `questID` int(11) NOT NULL,
  `characterID` int(11) NOT NULL,
  PRIMARY KEY (`questID`,`characterID`),
  KEY `characterID` (`characterID`),
  CONSTRAINT `QuestRequirements_ibfk_1` FOREIGN KEY (`questID`) REFERENCES `Quests` (`questID`),
  CONSTRAINT `QuestRequirements_ibfk_2` FOREIGN KEY (`characterID`) REFERENCES `Characters` (`characterID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `QuestRequirements`
--

LOCK TABLES `QuestRequirements` WRITE;
/*!40000 ALTER TABLE `QuestRequirements` DISABLE KEYS */;
INSERT INTO `QuestRequirements` VALUES (1,1),(1,2),(2,1),(2,2),(2,3);
/*!40000 ALTER TABLE `QuestRequirements` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Quests`
--

DROP TABLE IF EXISTS `Quests`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Quests` (
  `questID` int(11) NOT NULL AUTO_INCREMENT,
  `questTitle` varchar(45) DEFAULT NULL,
  `questDescription` varchar(256) DEFAULT NULL,
  `questLocation` varchar(45) DEFAULT NULL,
  `questStatus` int(11) NOT NULL,
  `levelRequired` int(11) NOT NULL,
  PRIMARY KEY (`questID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Quests`
--

LOCK TABLES `Quests` WRITE;
/*!40000 ALTER TABLE `Quests` DISABLE KEYS */;
INSERT INTO `Quests` VALUES (1,'Birthday time!','Help your suspiciouslly old uncle celebrate his birthday.','The Shire',1,1),(2,'Balrog Ball','Oooo imagine not listening to the wizard with literal centuries of experience and ending up fighting a giant flame monster in the Mines of Moria!','The Mines of Moria',0,10),(3,'Yeet the Ring','It\'s like that toxic relationship you can\'t seem to give up, but you just have to go cold turkey, or, in this case, lose a finger...','Mount Doom',0,25);
/*!40000 ALTER TABLE `Quests` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SkillCategories`
--

DROP TABLE IF EXISTS `SkillCategories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `SkillCategories` (
  `skillID` int(11) NOT NULL,
  `categoryID` int(11) NOT NULL,
  PRIMARY KEY (`skillID`,`categoryID`),
  KEY `categoryID` (`categoryID`),
  CONSTRAINT `SkillCategories_ibfk_1` FOREIGN KEY (`skillID`) REFERENCES `Skills` (`skillID`),
  CONSTRAINT `SkillCategories_ibfk_2` FOREIGN KEY (`categoryID`) REFERENCES `Categories` (`categoryID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SkillCategories`
--

LOCK TABLES `SkillCategories` WRITE;
/*!40000 ALTER TABLE `SkillCategories` DISABLE KEYS */;
INSERT INTO `SkillCategories` VALUES (1,2),(2,5),(3,1),(3,5);
/*!40000 ALTER TABLE `SkillCategories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Skills`
--

DROP TABLE IF EXISTS `Skills`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Skills` (
  `skillID` int(11) NOT NULL AUTO_INCREMENT,
  `skillName` varchar(45) DEFAULT NULL,
  `skillDescription` varchar(256) DEFAULT NULL,
  `skillEffect` varchar(128) DEFAULT NULL,
  `levelRequired` int(11) NOT NULL,
  PRIMARY KEY (`skillID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Skills`
--

LOCK TABLES `Skills` WRITE;
/*!40000 ALTER TABLE `Skills` DISABLE KEYS */;
INSERT INTO `Skills` VALUES (1,'Archery','You can take a piece of wood and string and shoot a pointy stick really fast.','+5 long-range combat',2),(2,'Ring Bearer','Not the ring by spring you wanted....','-5 teamwork',1),(3,'Swordsmanship','Stick \'em with the pointy end.','+5 short-range combat',5);
/*!40000 ALTER TABLE `Skills` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-08 16:21:49

SET FOREIGN_KEY_CHECKS=1;
COMMIT;
