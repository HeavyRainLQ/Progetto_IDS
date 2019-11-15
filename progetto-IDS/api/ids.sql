-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-11-2019 a las 09:02:56
-- Versión del servidor: 10.1.37-MariaDB
-- Versión de PHP: 7.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `ids`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `attrezzatura`
--

CREATE TABLE `attrezzatura` (
  `id_attr` int(11) NOT NULL,
  `nome_attr` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `attrezzatura`
--

INSERT INTO `attrezzatura` (`id_attr`, `nome_attr`) VALUES
(1, 'attrezzatura 1'),
(2, 'attrezzatura 2'),
(3, 'attrezzatura 3');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria_contabile`
--

CREATE TABLE `categoria_contabile` (
  `id` int(11) NOT NULL,
  `nomeCat` varchar(100) NOT NULL,
  `codiceTariffa` varchar(20) NOT NULL,
  `descrizione` varchar(3000) NOT NULL,
  `u_m` varchar(10) NOT NULL,
  `prezzo` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `categoria_contabile`
--

INSERT INTO `categoria_contabile` (`id`, `nomeCat`, `codiceTariffa`, `descrizione`, `u_m`, `prezzo`) VALUES
(1, 'Struttura di fondazione', '01.01.001', 'Trasporto e approntamento dell attrezzatura di perforazione a rotazione. Trasporto dell attrezzatura di perforazione a rotazione. Sono compresi: il trasporto di andata e ritorno, dalla sede legale al cantiere; l approntamento dell attrezzatura di perforazione a rotazione; il carico, lo scarico; il personale necessario.', 'cad', 50000),
(4, 'Struttura di elevazione', '01.01.002 001', 'Installazione di attrezzatura per sondaggio. Installazione di attrezzatura per sondaggio, a rotazione in corrispondenza di ciascun punto di perforazione, compreso il primo, su aree accessibili alle attrezzature di perforazione, compreso l onere per lo spostamento da un foro al successivo. E  compreso quanto occorre per dare l installazione completa. Per ogni installazione compresa la prima e l ultima. Per distanza fino a m 300.', 'cad', 202.88),
(6, 'colonnato', '01.01.003 001', 'Perforazione ad andamento verticale eseguita in terreni a granulometria fine. Perforazione ad andamento verticale eseguita a rotazione a carotaggio continuo, anche di tipo Wireline, con carotieri di diametro minimo mm 85, in terreni a granulometria fine quali argille, limi, limi sabbiosi e rocce tenere tipo tufiti. E\' compreso quanto altro occorre per dare la perforazione completa e la restituzione grafica dei dati. Per ogni metro e per profondità misurate a partire dal piano di campagna.Da m 0 a m 20. Con percentuale di carotaggio superiore al 90%.', 'm', 62.43),
(9, 'pavimentazione', '01.01.004 001', 'Perforazione ad andamento verticale eseguita in terreni a granulometria media. Perforazione ad andamento verticale eseguita a rotazione a carotaggio continuo, anche di tipo Wireline, con carotieri di diametro minimo mm 85, in terreni a granulometria media costituiti da sabbie ghiaiose anche con qualche ciottolo, ed in rocce di durezza media che non richiedono l\'uso del diamante. E\' compreso l\'uso di tutti gli attrezzi e gli accorgimenti necessari ad ottenere la percentuale di carotaggio richiesta e comunque non inferiore al 75%. E\' inoltre compreso quanto altro occorre per dare la perforazione completa. Per ogni metro e per profondità misurate a partire dal piano di campagna.Da m 0 a m 20.', 'm', 79.07);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lavori`
--

CREATE TABLE `lavori` (
  `idLavori` int(11) NOT NULL,
  `descrizione` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `lavori`
--

INSERT INTO `lavori` (`idLavori`, `descrizione`) VALUES
(1, 'Fabbricato A'),
(2, 'Fabbricato B'),
(3, 'Fabbricato C'),
(4, 'Fabbricato D');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `misura`
--

CREATE TABLE `misura` (
  `idMisura` int(11) NOT NULL,
  `codTariffa` varchar(300) NOT NULL,
  `catContabile` int(11) NOT NULL,
  `desLavoro` int(11) NOT NULL,
  `percentuale` int(11) NOT NULL,
  `riserva` varchar(100) NOT NULL,
  `aprovaz` tinyint(1) NOT NULL,
  `valid` tinyint(1) NOT NULL,
  `approva_sal` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `operai`
--

CREATE TABLE `operai` (
  `id_operaio` int(11) NOT NULL,
  `nome` varchar(30) NOT NULL,
  `cognome` varchar(30) NOT NULL,
  `qualifica` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `qualifica`
--

CREATE TABLE `qualifica` (
  `id_qualifica` int(11) NOT NULL,
  `nome_qual` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `qualifica`
--

INSERT INTO `qualifica` (`id_qualifica`, `nome_qual`) VALUES
(1, 'operaio comune'),
(2, 'direttore tecnico'),
(3, 'coordinatore sicurezza');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sal`
--

CREATE TABLE `sal` (
  `id_sal` int(11) NOT NULL,
  `cod_sal` int(11) DEFAULT NULL,
  `data` varchar(30) DEFAULT NULL,
  `cat_contabile` int(11) DEFAULT NULL,
  `des_lavoro` int(11) DEFAULT NULL,
  `percentuale` decimal(10,4) DEFAULT NULL,
  `prezzo_per` decimal(10,4) DEFAULT NULL,
  `debito` decimal(10,4) DEFAULT NULL,
  `debito_per` decimal(10,4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `soglia`
--

CREATE TABLE `soglia` (
  `id_soglia` int(11) NOT NULL,
  `valore` decimal(10,4) DEFAULT NULL,
  `superata` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `soglia`
--

INSERT INTO `soglia` (`id_soglia`, `valore`, `superata`) VALUES
(1, '10000.0000', 0),
(2, '20000.0000', 0),
(3, '40000.0000', 0),
(4, '60000.0000', 0),
(5, '80000.0000', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_user`
--

CREATE TABLE `tipo_user` (
  `id_tipo_user` int(11) NOT NULL,
  `nome_tipo` varchar(29) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tipo_user`
--

INSERT INTO `tipo_user` (`id_tipo_user`, `nome_tipo`) VALUES
(1, 'amministratore'),
(2, 'stazione appaltante'),
(3, 'direttore'),
(4, 'ditta appaltatrice');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
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
  `id_user` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`hash_wallet`, `nome`, `cognome`, `cod_fiscale`, `d_nascita`, `luogo_nascita`, `cap`, `residenza`, `tipo_user`, `stato_user`, `username`, `password`, `email`, `id_user`) VALUES
('0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1', 'Admin', 'Admin', 'HAJHS232KSJA', '1984-05-15', 'Milano', '9087', 'Ancona', 1, 1, 'admin', '$2y$10$HbOJNa/5Z.ZGcDGJvq11Y.vwL3kRXBRamSb5jPaX9OXxnLfuwLegG', NULL, 1),
('0xFFcf8FDEE72ac11b5c542428B35EEF5769C409f0', 'Cristiano', 'Mangiolio', 'CEOW42MD19', '1973-06-19', 'Milano', '545467', 'Ancona', 3, 1, 'angelo', '$2y$10$./eIG/RwJlr35kELe3lKiOs0ecaLs7WKscw.cnqG47jRYxOLiBOOm', NULL, 2),
('0x22d491Bde2303f2f43325b2108D26f1eAbA1e32b', 'Ercole', 'Ercole', 'PRCJDASIDU', '1984-06-13', 'Milano', '24343', 'Ancona', 2, 1, 'elia', '$2y$10$S3JBPcf1hN2XpO3AmvEyDecwjf5xC0XZsvwxB0wE1mG2CYGkplRVm', NULL, 3),
('0xE11BA2b4D45Eaed5996Cd0823791E0C93114882d', 'Simone', 'Simone', 'ASFKJA98439AS', '1982-06-07', 'Milano', '454436', 'Anncona', 4, 1, 'luca', '$2y$10$EGncIN.h6FBEz2Y9TkYnMeYlGDxTrXE2eelQAcSxu4o9gKx2aFfMK', NULL, 4);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `attrezzatura`
--
ALTER TABLE `attrezzatura`
  ADD PRIMARY KEY (`id_attr`);

--
-- Indices de la tabla `categoria_contabile`
--
ALTER TABLE `categoria_contabile`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `codice_tariffa` (`codiceTariffa`);

--
-- Indices de la tabla `lavori`
--
ALTER TABLE `lavori`
  ADD PRIMARY KEY (`idLavori`);

--
-- Indices de la tabla `misura`
--
ALTER TABLE `misura`
  ADD PRIMARY KEY (`idMisura`),
  ADD KEY `categoriaCont` (`catContabile`),
  ADD KEY `descrizioneLav` (`desLavoro`);

--
-- Indices de la tabla `operai`
--
ALTER TABLE `operai`
  ADD PRIMARY KEY (`id_operaio`),
  ADD KEY `qualifica` (`qualifica`);

--
-- Indices de la tabla `qualifica`
--
ALTER TABLE `qualifica`
  ADD PRIMARY KEY (`id_qualifica`);

--
-- Indices de la tabla `sal`
--
ALTER TABLE `sal`
  ADD PRIMARY KEY (`id_sal`);

--
-- Indices de la tabla `soglia`
--
ALTER TABLE `soglia`
  ADD PRIMARY KEY (`id_soglia`);

--
-- Indices de la tabla `tipo_user`
--
ALTER TABLE `tipo_user`
  ADD PRIMARY KEY (`id_tipo_user`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id_user`),
  ADD UNIQUE KEY `nome_utente` (`username`),
  ADD UNIQUE KEY `wallet` (`hash_wallet`),
  ADD UNIQUE KEY `indirizzo_email` (`email`),
  ADD KEY `tipologia_user` (`tipo_user`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `attrezzatura`
--
ALTER TABLE `attrezzatura`
  MODIFY `id_attr` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `categoria_contabile`
--
ALTER TABLE `categoria_contabile`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `lavori`
--
ALTER TABLE `lavori`
  MODIFY `idLavori` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `misura`
--
ALTER TABLE `misura`
  MODIFY `idMisura` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `operai`
--
ALTER TABLE `operai`
  MODIFY `id_operaio` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `qualifica`
--
ALTER TABLE `qualifica`
  MODIFY `id_qualifica` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `sal`
--
ALTER TABLE `sal`
  MODIFY `id_sal` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `soglia`
--
ALTER TABLE `soglia`
  MODIFY `id_soglia` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `tipo_user`
--
ALTER TABLE `tipo_user`
  MODIFY `id_tipo_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `misura`
--
ALTER TABLE `misura`
  ADD CONSTRAINT `categoriaCont` FOREIGN KEY (`catContabile`) REFERENCES `categoria_contabile` (`id`),
  ADD CONSTRAINT `descrizioneLav` FOREIGN KEY (`desLavoro`) REFERENCES `lavori` (`idLavori`);

--
-- Filtros para la tabla `operai`
--
ALTER TABLE `operai`
  ADD CONSTRAINT `qualifica` FOREIGN KEY (`qualifica`) REFERENCES `qualifica` (`id_qualifica`);

--
-- Filtros para la tabla `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `tipologia_user` FOREIGN KEY (`tipo_user`) REFERENCES `tipo_user` (`id_tipo_user`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
