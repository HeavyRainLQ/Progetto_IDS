-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-05-2019 a las 14:02:05
-- Versión del servidor: 5.7.25-log
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
-- Estructura de tabla para la tabla `ruolo`
--

CREATE TABLE `ruolo` (
  `id_ruolo` int(11) NOT NULL,
  `nome` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `ruolo`
--

INSERT INTO `ruolo` (`id_ruolo`, `nome`) VALUES
(1, 'direttore'),
(2, 'stazione_appaltante');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `stato_user`
--

CREATE TABLE `stato_user` (
  `id_stato` int(11) NOT NULL,
  `nome_stato` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `stato_user`
--

INSERT INTO `stato_user` (`id_stato`, `nome_stato`) VALUES
(1, 'attivo'),
(2, 'inattivo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_user`
--

CREATE TABLE `tipo_user` (
  `id_tipo_user` int(11) NOT NULL,
  `nome` varchar(29) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tipo_user`
--

INSERT INTO `tipo_user` (`id_tipo_user`, `nome`) VALUES
(1, 'amministratore'),
(2, 'visitatore');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `id_user` int(11) NOT NULL,
  `c_identita` int(11) NOT NULL,
  `nome` varchar(30) NOT NULL,
  `cognome` varchar(30) NOT NULL,
  `cod_fiscale` varchar(25) NOT NULL,
  `d_nascita` varchar(20) NOT NULL,
  `luogo_nascita` varchar(30) NOT NULL,
  `cap` varchar(30) NOT NULL,
  `residenza` varchar(30) NOT NULL,
  `tipo_user` int(11) NOT NULL,
  `ruolo` int(11) NOT NULL,
  `stato_user` int(11) NOT NULL,
  `user` varchar(25) NOT NULL,
  `password` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`id_user`, `c_identita`, `nome`, `cognome`, `cod_fiscale`, `d_nascita`, `luogo_nascita`, `cap`, `residenza`, `tipo_user`, `ruolo`, `stato_user`, `user`, `password`) VALUES
(1, 6832438, 'jose junior', 'paricagua siñani', 'PRCJ1JP49AUE', '08/09/94', 'cochabamba, Bolivia', '60128', 'Ancona', 1, 1, 1, 'admin', '080994');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `ruolo`
--
ALTER TABLE `ruolo`
  ADD PRIMARY KEY (`id_ruolo`);

--
-- Indices de la tabla `stato_user`
--
ALTER TABLE `stato_user`
  ADD PRIMARY KEY (`id_stato`);

--
-- Indices de la tabla `tipo_user`
--
ALTER TABLE `tipo_user`
  ADD PRIMARY KEY (`id_tipo_user`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `ruolo`
--
ALTER TABLE `ruolo`
  MODIFY `id_ruolo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `stato_user`
--
ALTER TABLE `stato_user`
  MODIFY `id_stato` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `tipo_user`
--
ALTER TABLE `tipo_user`
  MODIFY `id_tipo_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
