-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : mar. 20 fév. 2024 à 15:49
-- Version du serveur :  5.7.31
-- Version de PHP : 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

USE papeterie;

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `papeterie`
--

-- --------------------------------------------------------

--
-- Structure de la table `produits`
--

DROP TABLE IF EXISTS `produits`;
CREATE TABLE IF NOT EXISTS `produits` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Nom` varchar(255) NOT NULL,
  `Texture` varchar(255) NOT NULL,
  `Grammage` int(11) NOT NULL,
  `Prix` decimal(10,2) NOT NULL,
  `Couleur` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=20 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `produits`
--

-- INSERT INTO `produits` (`Id`, `Nom`, `Texture`, `Grammage`, `Prix`, `Couleur`) VALUES
-- (1, 'aaaaa', 'Ordinaire', 80, '3.00', NULL),
-- (3, 'Papier glacé', 'Lisse', 100, '5.00', 'Blanc'),
-- (4, 'Papier recyclé', 'Granuleux', 90, '4.00', 'Vert'),
-- (5, 'Papier calque', 'Transparent', 50, '1.80', NULL),
-- (6, 'Papier cartonné', 'Épais', 150, '3.50', 'Bleu'),
-- (7, 'Papier toilé', 'Texturé', 80, '4.20', 'Rose'),
-- (8, 'Papier de soie', 'Délicat', 30, '2.00', 'Jaune'),
-- (9, 'Papier parchemin', 'Vieux', 70, '6.00', NULL),
-- (10, 'Papier métallisé', 'Brillant', 80, '7.50', 'Argent')
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
