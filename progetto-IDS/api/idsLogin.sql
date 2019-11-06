-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versione server:              10.1.21-MariaDB - mariadb.org binary distribution
-- S.O. server:                  Win32
-- HeidiSQL Versione:            10.1.0.5464
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dump della struttura del database ids
CREATE DATABASE IF NOT EXISTS `ids` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `ids`;

-- Dump della struttura di tabella ids.attrezzatura
CREATE TABLE IF NOT EXISTS `attrezzatura` (
  `id_attr` int(11) NOT NULL AUTO_INCREMENT,
  `nome_attr` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id_attr`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- Dump dei dati della tabella ids.attrezzatura: ~3 rows (circa)
/*!40000 ALTER TABLE `attrezzatura` DISABLE KEYS */;
INSERT INTO `attrezzatura` (`id_attr`, `nome_attr`) VALUES
	(1, 'attrezzatura 1'),
	(2, 'attrezzatura 2'),
	(3, 'attrezzatura 3');
/*!40000 ALTER TABLE `attrezzatura` ENABLE KEYS */;

-- Dump della struttura di tabella ids.categoria_contabile
CREATE TABLE IF NOT EXISTS `categoria_contabile` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nomeCat` varchar(100) NOT NULL,
  `codiceTariffa` varchar(20) NOT NULL,
  `descrizione` varchar(3000) NOT NULL,
  `u_m` varchar(10) NOT NULL,
  `prezzo` double NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `codice_tariffa` (`codiceTariffa`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

-- Dump dei dati della tabella ids.categoria_contabile: ~4 rows (circa)
/*!40000 ALTER TABLE `categoria_contabile` DISABLE KEYS */;
INSERT INTO `categoria_contabile` (`id`, `nomeCat`, `codiceTariffa`, `descrizione`, `u_m`, `prezzo`) VALUES
	(1, 'Struttura di fondazione', '01.01.001', 'Trasporto e approntamento dell attrezzatura di perforazione a rotazione. Trasporto dell attrezzatura di perforazione a rotazione. Sono compresi: il trasporto di andata e ritorno, dalla sede legale al cantiere; l approntamento dell attrezzatura di perforazione a rotazione; il carico, lo scarico; il personale necessario.', 'cad', 50000),
	(4, 'Struttura di elevazione', '01.01.002 001', 'Installazione di attrezzatura per sondaggio. Installazione di attrezzatura per sondaggio, a rotazione in corrispondenza di ciascun punto di perforazione, compreso il primo, su aree accessibili alle attrezzature di perforazione, compreso l onere per lo spostamento da un foro al successivo. E  compreso quanto occorre per dare l installazione completa. Per ogni installazione compresa la prima e l ultima. Per distanza fino a m 300.', 'cad', 202.88),
	(6, 'colonnato', '01.01.003 001', 'Perforazione ad andamento verticale eseguita in terreni a granulometria fine. Perforazione ad andamento verticale eseguita a rotazione a carotaggio continuo, anche di tipo Wireline, con carotieri di diametro minimo mm 85, in terreni a granulometria fine quali argille, limi, limi sabbiosi e rocce tenere tipo tufiti. E\' compreso quanto altro occorre per dare la perforazione completa e la restituzione grafica dei dati. Per ogni metro e per profondità misurate a partire dal piano di campagna.Da m 0 a m 20. Con percentuale di carotaggio superiore al 90%.', 'm', 62.43),
	(9, 'pavimentazione', '01.01.004 001', 'Perforazione ad andamento verticale eseguita in terreni a granulometria media. Perforazione ad andamento verticale eseguita a rotazione a carotaggio continuo, anche di tipo Wireline, con carotieri di diametro minimo mm 85, in terreni a granulometria media costituiti da sabbie ghiaiose anche con qualche ciottolo, ed in rocce di durezza media che non richiedono l\'uso del diamante. E\' compreso l\'uso di tutti gli attrezzi e gli accorgimenti necessari ad ottenere la percentuale di carotaggio richiesta e comunque non inferiore al 75%. E\' inoltre compreso quanto altro occorre per dare la perforazione completa. Per ogni metro e per profondità misurate a partire dal piano di campagna.Da m 0 a m 20.', 'm', 79.07);
/*!40000 ALTER TABLE `categoria_contabile` ENABLE KEYS */;

-- Dump della struttura di tabella ids.lavori
CREATE TABLE IF NOT EXISTS `lavori` (
  `idLavori` int(11) NOT NULL AUTO_INCREMENT,
  `descrizione` varchar(300) NOT NULL,
  PRIMARY KEY (`idLavori`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- Dump dei dati della tabella ids.lavori: ~4 rows (circa)
/*!40000 ALTER TABLE `lavori` DISABLE KEYS */;
INSERT INTO `lavori` (`idLavori`, `descrizione`) VALUES
	(1, 'Fabbricato A'),
	(2, 'Fabbricato B'),
	(3, 'Fabbricato C'),
	(4, 'Fabbricato D');
/*!40000 ALTER TABLE `lavori` ENABLE KEYS */;

-- Dump della struttura di tabella ids.misura
CREATE TABLE IF NOT EXISTS `misura` (
  `idMisura` int(11) NOT NULL AUTO_INCREMENT,
  `codTariffa` varchar(300) NOT NULL,
  `catContabile` int(11) NOT NULL,
  `desLavoro` int(11) NOT NULL,
  `percentuale` int(11) NOT NULL,
  `riserva` varchar(100) NOT NULL,
  `aprovaz` tinyint(1) NOT NULL,
  `valid` tinyint(1) NOT NULL,
  `approva_sal` tinyint(1) NOT NULL,
  PRIMARY KEY (`idMisura`),
  KEY `categoriaCont` (`catContabile`),
  KEY `descrizioneLav` (`desLavoro`),
  CONSTRAINT `categoriaCont` FOREIGN KEY (`catContabile`) REFERENCES `categoria_contabile` (`id`),
  CONSTRAINT `descrizioneLav` FOREIGN KEY (`desLavoro`) REFERENCES `lavori` (`idLavori`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- Dump dei dati della tabella ids.misura: ~2 rows (circa)
/*!40000 ALTER TABLE `misura` DISABLE KEYS */;
INSERT INTO `misura` (`idMisura`, `codTariffa`, `catContabile`, `desLavoro`, `percentuale`, `riserva`, `aprovaz`, `valid`, `approva_sal`) VALUES
	(1, '01.01.001', 1, 1, 20, 'ciao', 1, 1, 1),
	(2, '01.01.001', 1, 3, 20, 'ciaooo', 1, 1, 1);
/*!40000 ALTER TABLE `misura` ENABLE KEYS */;

-- Dump della struttura di tabella ids.operai
CREATE TABLE IF NOT EXISTS `operai` (
  `id_operaio` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(30) NOT NULL,
  `cognome` varchar(30) NOT NULL,
  `qualifica` int(11) NOT NULL,
  PRIMARY KEY (`id_operaio`),
  KEY `qualifica` (`qualifica`),
  CONSTRAINT `qualifica` FOREIGN KEY (`qualifica`) REFERENCES `qualifica` (`id_qualifica`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- Dump dei dati della tabella ids.operai: ~4 rows (circa)
/*!40000 ALTER TABLE `operai` DISABLE KEYS */;
INSERT INTO `operai` (`id_operaio`, `nome`, `cognome`, `qualifica`) VALUES
	(1, 'elia', 'alesiani', 3),
	(2, 'josè', 'paricagua', 2),
	(3, 'luca', 'quercetti', 1),
	(4, 'juan', 'quintereos', 3);
/*!40000 ALTER TABLE `operai` ENABLE KEYS */;

-- Dump della struttura di tabella ids.qualifica
CREATE TABLE IF NOT EXISTS `qualifica` (
  `id_qualifica` int(11) NOT NULL AUTO_INCREMENT,
  `nome_qual` varchar(50) NOT NULL,
  PRIMARY KEY (`id_qualifica`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- Dump dei dati della tabella ids.qualifica: ~3 rows (circa)
/*!40000 ALTER TABLE `qualifica` DISABLE KEYS */;
INSERT INTO `qualifica` (`id_qualifica`, `nome_qual`) VALUES
	(1, 'operaio comune'),
	(2, 'direttore tecnico'),
	(3, 'coordinatore sicurezza');
/*!40000 ALTER TABLE `qualifica` ENABLE KEYS */;

-- Dump della struttura di tabella ids.sal
CREATE TABLE IF NOT EXISTS `sal` (
  `id_sal` int(11) NOT NULL AUTO_INCREMENT,
  `cod_sal` int(11) DEFAULT NULL,
  `data` varchar(30) DEFAULT NULL,
  `cat_contabile` int(11) DEFAULT NULL,
  `des_lavoro` int(11) DEFAULT NULL,
  `percentuale` decimal(10,4) DEFAULT NULL,
  `prezzo_per` decimal(10,4) DEFAULT NULL,
  `debito` decimal(10,4) DEFAULT NULL,
  `debito_per` decimal(10,4) DEFAULT NULL,
  PRIMARY KEY (`id_sal`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- Dump dei dati della tabella ids.sal: ~2 rows (circa)
/*!40000 ALTER TABLE `sal` DISABLE KEYS */;
INSERT INTO `sal` (`id_sal`, `cod_sal`, `data`, `cat_contabile`, `des_lavoro`, `percentuale`, `prezzo_per`, `debito`, `debito_per`) VALUES
	(1, 1, '05/11/2019', 1, 1, 20.0000, 50.0000, 10000.0000, 10.0000),
	(2, 1, '05/11/2019', 1, 3, 20.0000, 50.0000, 10000.0000, 10.0000);
/*!40000 ALTER TABLE `sal` ENABLE KEYS */;

-- Dump della struttura di tabella ids.soglia
CREATE TABLE IF NOT EXISTS `soglia` (
  `id_soglia` int(11) NOT NULL AUTO_INCREMENT,
  `valore` decimal(10,4) DEFAULT NULL,
  `superata` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id_soglia`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

-- Dump dei dati della tabella ids.soglia: ~5 rows (circa)
/*!40000 ALTER TABLE `soglia` DISABLE KEYS */;
INSERT INTO `soglia` (`id_soglia`, `valore`, `superata`) VALUES
	(1, 10000.0000, 0),
	(2, 20000.0000, 0),
	(3, 40000.0000, 0),
	(4, 60000.0000, 0),
	(5, 80000.0000, 0);
/*!40000 ALTER TABLE `soglia` ENABLE KEYS */;

-- Dump della struttura di tabella ids.tipo_user
CREATE TABLE IF NOT EXISTS `tipo_user` (
  `id_tipo_user` int(11) NOT NULL AUTO_INCREMENT,
  `nome_tipo` varchar(29) NOT NULL,
  PRIMARY KEY (`id_tipo_user`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- Dump dei dati della tabella ids.tipo_user: ~4 rows (circa)
/*!40000 ALTER TABLE `tipo_user` DISABLE KEYS */;
INSERT INTO `tipo_user` (`id_tipo_user`, `nome_tipo`) VALUES
	(1, 'amministratore'),
	(2, 'stazione appaltante'),
	(3, 'direttore'),
	(4, 'ditta appaltatrice');
/*!40000 ALTER TABLE `tipo_user` ENABLE KEYS */;

-- Dump della struttura di tabella ids.user
CREATE TABLE IF NOT EXISTS `user` (
  `hash_wallet` varchar(100) DEFAULT NULL,
  `nome` varchar(30) NOT NULL,
  `cognome` varchar(30) NOT NULL,
  `cod_fiscale` varchar(25) NOT NULL,
  `d_nascita` varchar(20) NOT NULL,
  `luogo_nascita` varchar(30) NOT NULL,
  `cap` varchar(30) NOT NULL,
  `residenza` varchar(30) NOT NULL,
  `tipo_user` int(11) NOT NULL DEFAULT '1',
  `stato_user` tinyint(1) NOT NULL DEFAULT '1',
  `username` varchar(25) NOT NULL,
  `password` varchar(258) NOT NULL,
  `email` varchar(30) DEFAULT NULL,
  `id_user` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id_user`),
  UNIQUE KEY `nome_utente` (`username`),
  UNIQUE KEY `wallet` (`hash_wallet`),
  UNIQUE KEY `indirizzo_email` (`email`),
  KEY `tipologia_user` (`tipo_user`),
  CONSTRAINT `tipologia_user` FOREIGN KEY (`tipo_user`) REFERENCES `tipo_user` (`id_tipo_user`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=latin1;

-- Dump dei dati della tabella ids.user: ~7 rows (circa)
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (`hash_wallet`, `nome`, `cognome`, `cod_fiscale`, `d_nascita`, `luogo_nascita`, `cap`, `residenza`, `tipo_user`, `stato_user`, `username`, `password`, `email`, `id_user`) VALUES
	('0xf987654321', 'fabio', 'russo', 'asdfghjkl', '12/05/1990', 'amatrice', '63025', 'ancona', 4, 1, 'ruxo91', '1991', 'ruxo91@gmail.com', 1),
	('0xf436285302', 'angelo', 'serafini', 'assadassososososl', '25/09/1994', 'giulianova', '64222', 'giulianova', 4, 1, 'elindor', 'elindor', 'elindor@gmail.com', 2),
	('oxf128392198391283', 'elia', 'alesiani', 'lsnlei93m03i348b', '03/08/1993', 'sant\'omero', '64010', 'torano nuovo', 3, 1, 'eliosco', 'eliosco', 'elia.alesiani@gmail.com', 3),
	('', 'jose junior', 'paricagua sinani', 'PRCJDASIDU', '1994-08-09', 'cochabamba', '60168', 'ANCONA', 1, 1, 'admin', '$2y$10$giWH90B0yGKDAkjqJs/cr.YfV0aVVhiqhJDAqtOfWngUmCG.E7c.m', 'jojupasi@hotmail.com', 4),
	('0xf123456789', 'luca', 'quercetti', 'qrclcu93a22g157u', '22/01/1993', 'ancona', '60125', 'osimo', 2, 1, 'ciccio', 'ciccio', 'lucaquercetti@gmail.com', 5),
	(NULL, 'lol', 'lol', 'aasaasas', '2019-11-21', 'qui', '60027', 'qui', 4, 1, 'lollo', '$2y$10$M8FuTpVELEoG1HYYLCyZ4OSMsWNnVzDKm2dGhMJbdgQThbxHtdLFC', NULL, 19),
	(NULL, 'ddedd', 'deede', 'dedede', '2019-11-21', 'qui', '60027', 'qui', 3, 1, 'ggg', '$2y$10$giWH90B0yGKDAkjqJs/cr.YfV0aVVhiqhJDAqtOfWngUmCG.E7c.m', NULL, 20);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
