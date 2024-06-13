-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 12, 2024 at 06:26 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `shopmalexdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `administrateurs`
--

CREATE TABLE `administrateurs` (
  `idpers` int(11) NOT NULL,
  `droit` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `avis`
--

CREATE TABLE `avis` (
  `idavis` int(11) NOT NULL,
  `commentaire` text DEFAULT NULL,
  `note` decimal(10,1) DEFAULT NULL,
  `idprod` int(11) DEFAULT NULL,
  `idpers` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `avis`
--

INSERT INTO `avis` (`idavis`, `commentaire`, `note`, `idprod`, `idpers`, `createdAt`, `updatedAt`) VALUES
(1, 'not that bad', 5.0, 1, 1, '2024-05-29 12:00:08', '2024-05-29 12:00:08'),
(2, 'impressive', 5.0, 1, 1, '2024-05-29 12:22:58', '2024-05-29 12:22:58'),
(3, 'cool\n\n', 5.0, 1, 1, '2024-05-29 12:44:40', '2024-05-29 12:44:40');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `codcat` int(11) NOT NULL,
  `libcat` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`codcat`, `libcat`, `createdAt`, `updatedAt`) VALUES
(1, 'Céréales et Grains', '2024-05-27 16:03:25', '2024-05-27 16:03:25'),
(2, 'Légumes', '2024-05-27 16:03:26', '2024-05-27 16:03:26'),
(3, 'Fruits', '2024-05-27 16:03:26', '2024-05-27 16:03:26'),
(4, 'Légumineuses', '2024-05-27 16:03:27', '2024-05-27 16:03:27'),
(5, 'Oléagineux', '2024-05-27 16:03:28', '2024-05-27 16:03:28'),
(6, 'Tubercules', '2024-05-27 16:03:28', '2024-05-27 16:03:28');

-- --------------------------------------------------------

--
-- Table structure for table `clients`
--

CREATE TABLE `clients` (
  `idpers` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `clients`
--

INSERT INTO `clients` (`idpers`, `createdAt`, `updatedAt`) VALUES
(1, '2024-05-29 11:57:06', '2024-05-29 11:57:06');

-- --------------------------------------------------------

--
-- Table structure for table `commandes`
--

CREATE TABLE `commandes` (
  `idcom` int(11) NOT NULL,
  `datecom` datetime DEFAULT NULL,
  `montant` int(11) NOT NULL,
  `idpers` int(11) DEFAULT NULL,
  `statuscom` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE `images` (
  `codeimage` int(11) NOT NULL,
  `cheminacces` varchar(255) NOT NULL,
  `libelle` varchar(255) DEFAULT NULL,
  `idprod` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `images`
--

INSERT INTO `images` (`codeimage`, `cheminacces`, `libelle`, `idprod`, `createdAt`, `updatedAt`) VALUES
(6, '/uploads/74_images-1717593316099-85071502.jpeg', 'libelle_6', 6, '0000-00-00 00:00:00', '2024-06-05 13:15:16'),
(7, '/uploads/118_dataUrl__image_jpeg-1717599869686-383715629.jpeg', 'libelle_7', 7, '0000-00-00 00:00:00', '2024-06-05 15:04:29'),
(8, '/uploads/64_images-1717600018571-788925704.jpeg', 'libelle_8', 8, '0000-00-00 00:00:00', '2024-06-05 15:06:58'),
(9, '/uploads/59_images-1717600118201-149239540.jpeg', 'libelle_9', 9, '0000-00-00 00:00:00', '2024-06-05 15:08:38'),
(10, '/uploads/73_dataUrl__image_jpeg-1717600271195-613102680.jpeg', 'libelle_10', 10, '0000-00-00 00:00:00', '2024-06-05 15:11:11'),
(11, '/uploads/27_images-1717600395829-415846747.jpeg', 'libelle_11', 11, '0000-00-00 00:00:00', '2024-06-05 15:13:15'),
(12, '/uploads/90_images-1717600531412-874066687.jpeg', 'libelle_12', 12, '0000-00-00 00:00:00', '2024-06-05 15:15:31'),
(13, '/uploads/111_dataUrl__image_jpeg-1717600797435-641758761.jpeg', 'libelle_13', 13, '0000-00-00 00:00:00', '2024-06-05 15:19:57'),
(14, '/uploads/119_dataUrl__image_jpeg-1717600907084-93119382.jpeg', 'libelle_14', 14, '0000-00-00 00:00:00', '2024-06-05 15:21:47'),
(15, '/uploads/64_images-1717601054052-549289100.jpeg', 'libelle_15', 15, '0000-00-00 00:00:00', '2024-06-05 15:24:14'),
(16, '/uploads/141_dataUrl__image_jpeg-1717601249076-426377794.jpeg', 'libelle_16', 16, '0000-00-00 00:00:00', '2024-06-05 15:27:29'),
(17, '/uploads/107_images-1717601285927-921409312.jpeg', 'libelle_17', 17, '0000-00-00 00:00:00', '2024-06-05 15:28:05'),
(18, '/uploads/47_images-1717601488780-111390139.jpeg', 'libelle_18', 18, '0000-00-00 00:00:00', '2024-06-05 15:31:28'),
(19, '/uploads/143_dataUrl__image_jpeg-1717601679657-809300326.jpeg', 'libelle_19', 19, '0000-00-00 00:00:00', '2024-06-05 15:34:39'),
(20, '/uploads/106_dataUrl__image_jpeg-1717601898858-987718415.jpeg', 'libelle_20', 20, '0000-00-00 00:00:00', '2024-06-05 15:38:18'),
(21, '/uploads/61_images-1717601971577-648188793.jpeg', 'libelle_21', 21, '0000-00-00 00:00:00', '2024-06-05 15:39:31'),
(22, '/uploads/104_dataUrl__image_jpeg-1717602146046-920611389.jpeg', 'libelle_22', 22, '0000-00-00 00:00:00', '2024-06-05 15:42:26'),
(23, '/uploads/92_images-1717602236039-75878062.jpeg', 'libelle_23', 23, '0000-00-00 00:00:00', '2024-06-05 15:43:56'),
(24, '/uploads/67_images-1717602368981-775118016.jpeg', 'libelle_24', 24, '0000-00-00 00:00:00', '2024-06-05 15:46:09'),
(25, '/uploads/67_images-1717602495645-694272447.jpeg', 'libelle_25', 25, '0000-00-00 00:00:00', '2024-06-05 15:48:15'),
(26, '/uploads/101_images-1717602632333-245491884.jpeg', 'libelle_26', 26, '0000-00-00 00:00:00', '2024-06-05 15:50:32'),
(27, '/uploads/116_dataUrl__image_jpeg-1717602758275-567090131.jpeg', 'libelle_27', 27, '0000-00-00 00:00:00', '2024-06-05 15:52:38'),
(28, '/uploads/149_images-1717602892427-332883501.jpeg', 'libelle_28', 28, '0000-00-00 00:00:00', '2024-06-05 15:54:52'),
(29, '/uploads/122_dataUrl__image_jpeg (copie)-1717603110415-329425894.jpeg', 'libelle_29', 29, '0000-00-00 00:00:00', '2024-06-05 15:58:30'),
(30, '/uploads/87_images-1717603228513-894752415.jpeg', 'libelle_30', 30, '0000-00-00 00:00:00', '2024-06-05 16:00:28'),
(31, '/uploads/76_dataUrl__image_jpeg-1717603347448-719861485.jpeg', 'libelle_31', 31, '0000-00-00 00:00:00', '2024-06-05 16:02:27'),
(32, '/uploads/248_images-1717603543388-146927892.jpeg', 'libelle_32', 32, '0000-00-00 00:00:00', '2024-06-05 16:05:43'),
(33, '/uploads/97_dataUrl__image_jpeg-1717607151531-182535302.jpeg', 'libelle_33', 33, '0000-00-00 00:00:00', '2024-06-05 17:05:51'),
(34, 'placeholder.png', 'libelle_34', 34, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(35, '/uploads/8_images-1717605981470-203239932.jpeg', 'libelle_35', 35, '0000-00-00 00:00:00', '2024-06-05 16:46:21'),
(36, '/uploads/155_dataUrl__image_jpeg-1717604120523-507104511.jpeg', 'libelle_36', 36, '0000-00-00 00:00:00', '2024-06-05 16:15:20'),
(37, '/uploads/109_dataUrl__image_jpeg-1717604319680-876391533.jpeg', 'libelle_37', 37, '0000-00-00 00:00:00', '2024-06-05 16:18:39'),
(38, '/uploads/64_images-1717604426780-632711262.jpeg', 'libelle_38', 38, '0000-00-00 00:00:00', '2024-06-05 16:20:26'),
(39, '/uploads/91_images-1717604710676-433864577.jpeg', 'libelle_39', 39, '0000-00-00 00:00:00', '2024-06-05 16:25:10'),
(40, '/uploads/15_images-1717604833760-598612024.jpeg', 'libelle_40', 40, '0000-00-00 00:00:00', '2024-06-05 16:27:13'),
(41, '/uploads/41_images-1717604915655-560595444.jpeg', 'libelle_41', 41, '0000-00-00 00:00:00', '2024-06-05 16:28:35'),
(42, '/uploads/70_images-1717605025879-437754138.jpeg', 'libelle_42', 42, '0000-00-00 00:00:00', '2024-06-05 16:30:25'),
(43, 'placeholder.png', 'libelle_43', 43, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(44, '/uploads/166_images-1717605192480-337558031.jpeg', 'libelle_44', 44, '0000-00-00 00:00:00', '2024-06-05 16:33:12'),
(45, '/uploads/137_images-1717605352606-143021965.jpeg', 'libelle_45', 45, '0000-00-00 00:00:00', '2024-06-05 16:35:52'),
(46, '/uploads/45_images-1717605540249-177558202.jpeg', 'libelle_46', 46, '0000-00-00 00:00:00', '2024-06-05 16:39:00'),
(47, 'placeholder.png', 'libelle_47', 47, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(48, '/uploads/563_dataUrl__image_jpeg-1717605767848-759259291.jpeg', 'libelle_48', 48, '0000-00-00 00:00:00', '2024-06-05 16:42:47'),
(53, '/uploads/95_dataUrl__image_jpeg-1717599539940-33423864.jpeg', 'libelle_53', 5, '0000-00-00 00:00:00', '2024-06-05 14:58:59'),
(54, '/uploads/86_dataUrl__image_jpeg-1717593346127-898491208.jpeg', 'libelle_54', 6, '0000-00-00 00:00:00', '2024-06-05 13:15:46'),
(55, '/uploads/111_dataUrl__image_jpeg-1717599892769-226195539.jpeg', 'libelle_55', 7, '0000-00-00 00:00:00', '2024-06-05 15:04:52'),
(56, '/uploads/83_dataUrl__image_jpeg-1717600035329-699520067.jpeg', 'libelle_56', 8, '0000-00-00 00:00:00', '2024-06-05 15:07:15'),
(57, '/uploads/79_images-1717600133591-997804280.jpeg', 'libelle_57', 9, '0000-00-00 00:00:00', '2024-06-05 15:08:53'),
(58, '/uploads/83_dataUrl__image_jpeg-1717600284857-164813247.jpeg', 'libelle_58', 10, '0000-00-00 00:00:00', '2024-06-05 15:11:24'),
(59, '/uploads/69_images-1717600424770-12338462.jpeg', 'libelle_59', 11, '0000-00-00 00:00:00', '2024-06-05 15:13:44'),
(60, '/uploads/103_dataUrl__image_jpeg-1717600545743-25277681.jpeg', 'libelle_60', 12, '0000-00-00 00:00:00', '2024-06-05 15:15:45'),
(61, '/uploads/99_dataUrl__image_jpeg-1717600809564-252212510.jpeg', 'libelle_61', 13, '0000-00-00 00:00:00', '2024-06-05 15:20:09'),
(62, '/uploads/109_dataUrl__image_jpeg-1717600932674-936307843.jpeg', 'libelle_62', 14, '0000-00-00 00:00:00', '2024-06-05 15:22:12'),
(63, '/uploads/77_images-1717601071485-684548806.jpeg', 'libelle_63', 15, '0000-00-00 00:00:00', '2024-06-05 15:24:31'),
(64, '/uploads/161_dataUrl__image_jpeg-1717601219620-5430671.jpeg', 'libelle_64', 16, '0000-00-00 00:00:00', '2024-06-05 15:26:59'),
(65, '/uploads/369_dataUrl__image_jpeg-1717601447951-850690516.jpeg', 'libelle_65', 17, '0000-00-00 00:00:00', '2024-06-05 15:30:47'),
(66, '/uploads/75_images-1717601504838-793512113.jpeg', 'libelle_66', 18, '0000-00-00 00:00:00', '2024-06-05 15:31:44'),
(67, '/uploads/91_images-1717601614145-977952308.jpeg', 'libelle_67', 19, '0000-00-00 00:00:00', '2024-06-05 15:33:34'),
(68, '/uploads/138_dataUrl__image_jpeg-1717601753750-663896088.jpeg', 'libelle_68', 20, '0000-00-00 00:00:00', '2024-06-05 15:35:53'),
(69, '/uploads/99_images-1717601992942-285010108.jpeg', 'libelle_69', 21, '0000-00-00 00:00:00', '2024-06-05 15:39:52'),
(70, '/uploads/132_dataUrl__image_jpeg-1717602158276-330267017.jpeg', 'libelle_70', 22, '0000-00-00 00:00:00', '2024-06-05 15:42:38'),
(71, '/uploads/49_images-1717602249221-243887107.jpeg', 'libelle_71', 23, '0000-00-00 00:00:00', '2024-06-05 15:44:09'),
(72, '/uploads/98_images (copie)-1717602392125-82345509.jpeg', 'libelle_72', 24, '0000-00-00 00:00:00', '2024-06-05 15:46:32'),
(73, '/uploads/88_dataUrl__image_jpeg-1717602509004-617826969.jpeg', 'libelle_73', 25, '0000-00-00 00:00:00', '2024-06-05 15:48:29'),
(74, '/uploads/142_images-1717602653960-661146216.jpeg', 'libelle_74', 26, '0000-00-00 00:00:00', '2024-06-05 15:50:54'),
(75, '/uploads/134_dataUrl__image_jpeg-1717602772044-401023283.jpeg', 'libelle_75', 27, '0000-00-00 00:00:00', '2024-06-05 15:52:52'),
(76, '/uploads/279_images-1717602950097-394893477.jpeg', 'libelle_76', 28, '0000-00-00 00:00:00', '2024-06-05 15:55:50'),
(77, '/uploads/143_dataUrl__image_jpeg-1717603134136-623757467.jpeg', 'libelle_77', 29, '0000-00-00 00:00:00', '2024-06-05 15:58:54'),
(78, '/uploads/130_dataUrl__image_jpeg-1717603243602-631182510.jpeg', 'libelle_78', 30, '0000-00-00 00:00:00', '2024-06-05 16:00:43'),
(79, '/uploads/94_dataUrl__image_jpeg-1717603361247-866928035.jpeg', 'libelle_79', 31, '0000-00-00 00:00:00', '2024-06-05 16:02:41'),
(80, '/uploads/298_images-1717603579799-646656900.jpeg', 'libelle_80', 32, '0000-00-00 00:00:00', '2024-06-05 16:06:19'),
(81, '/uploads/74_dataUrl__image_jpeg-1717607307973-509343080.jpeg', 'libelle_81', 33, '0000-00-00 00:00:00', '2024-06-05 17:08:28'),
(82, 'placeholder.png', 'libelle_82', 34, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(83, '/uploads/161_images-1717603865576-689893634.jpeg', 'libelle_83', 35, '0000-00-00 00:00:00', '2024-06-05 16:11:05'),
(84, '/uploads/163_dataUrl__image_jpeg-1717604136591-941112175.jpeg', 'libelle_84', 36, '0000-00-00 00:00:00', '2024-06-05 16:15:36'),
(85, '/uploads/113_dataUrl__image_jpeg-1717604331654-725089168.jpeg', 'libelle_85', 37, '0000-00-00 00:00:00', '2024-06-05 16:18:51'),
(86, '/uploads/126_images-1717604444283-769843420.jpeg', 'libelle_86', 38, '0000-00-00 00:00:00', '2024-06-05 16:20:44'),
(87, '/uploads/68_images-1717604722014-608667812.jpeg', 'libelle_87', 39, '0000-00-00 00:00:00', '2024-06-05 16:25:22'),
(88, '/uploads/77_images-1717604851954-678620837.jpeg', 'libelle_88', 40, '0000-00-00 00:00:00', '2024-06-05 16:27:31'),
(89, '/uploads/137_dataUrl__image_jpeg-1717604950205-278927542.jpeg', 'libelle_89', 41, '0000-00-00 00:00:00', '2024-06-05 16:29:10'),
(90, '/uploads/85_images-1717605043076-693704580.jpeg', 'libelle_90', 42, '0000-00-00 00:00:00', '2024-06-05 16:30:43'),
(91, 'placeholder.png', 'libelle_91', 43, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(92, '/uploads/14_images-1717605212100-380168426.jpeg', 'libelle_92', 44, '0000-00-00 00:00:00', '2024-06-05 16:33:32'),
(93, '/uploads/155_images-1717605369009-564194464.jpeg', 'libelle_93', 45, '0000-00-00 00:00:00', '2024-06-05 16:36:09'),
(94, '/uploads/76_images-1717605552977-848175850.jpeg', 'libelle_94', 46, '0000-00-00 00:00:00', '2024-06-05 16:39:13'),
(95, 'placeholder.png', 'libelle_95', 47, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(96, '/uploads/20_images-1717605680723-475211941.jpeg', 'libelle_96', 48, '0000-00-00 00:00:00', '2024-06-05 16:41:20'),
(99, '/uploads/2_dataUrl__image_jpeg-1717511891890-311841044.jpeg', 'libelle_99', 3, '0000-00-00 00:00:00', '2024-06-04 14:38:11'),
(100, '/uploads/81_dataUrl__image_jpeg-1717512568692-300340438.jpeg', 'libelle_100', 4, '0000-00-00 00:00:00', '2024-06-04 14:49:28'),
(102, '/uploads/114_dataUrl__image_jpeg-1717593442633-433348729.jpeg', 'libelle_102', 6, '0000-00-00 00:00:00', '2024-06-05 13:17:22'),
(103, '/uploads/85_images-1717599919520-395427614.jpeg', 'libelle_103', 7, '0000-00-00 00:00:00', '2024-06-05 15:05:19'),
(104, '/uploads/62_images-1717600055661-31627232.jpeg', 'libelle_104', 8, '0000-00-00 00:00:00', '2024-06-05 15:07:35'),
(105, '/uploads/93_dataUrl__image_jpeg-1717600159446-620903764.jpeg', 'libelle_105', 9, '0000-00-00 00:00:00', '2024-06-05 15:09:19'),
(106, '/uploads/91_dataUrl__image_jpeg-1717600300492-869857598.jpeg', 'libelle_106', 10, '0000-00-00 00:00:00', '2024-06-05 15:11:40'),
(107, '/uploads/175_dataUrl__image_jpeg-1717600452149-270399710.jpeg', 'libelle_107', 11, '0000-00-00 00:00:00', '2024-06-05 15:14:12'),
(108, '/uploads/124_dataUrl__image_jpeg-1717600566101-162690871.jpeg', 'libelle_108', 12, '0000-00-00 00:00:00', '2024-06-05 15:16:06'),
(109, '/uploads/105_dataUrl__image_jpeg-1717600823369-405034126.jpeg', 'libelle_109', 13, '0000-00-00 00:00:00', '2024-06-05 15:20:23'),
(110, '/uploads/113_dataUrl__image_jpeg-1717600997217-774678855.jpeg', 'libelle_110', 14, '0000-00-00 00:00:00', '2024-06-05 15:23:17'),
(111, '/uploads/34_images-1717601085329-992435678.jpeg', 'libelle_111', 15, '0000-00-00 00:00:00', '2024-06-05 15:24:45'),
(112, '/uploads/72_images-1717601159624-512873758.jpeg', 'libelle_112', 16, '0000-00-00 00:00:00', '2024-06-05 15:25:59'),
(113, '/uploads/256_images-1717601324066-276483418.jpeg', 'libelle_113', 17, '0000-00-00 00:00:00', '2024-06-05 15:28:44'),
(114, '/uploads/140_dataUrl__image_jpeg-1717601528789-872645025.jpeg', 'libelle_114', 18, '0000-00-00 00:00:00', '2024-06-05 15:32:08'),
(115, '/uploads/147_dataUrl__image_jpeg-1717601631156-39394722.jpeg', 'libelle_115', 19, '0000-00-00 00:00:00', '2024-06-05 15:33:51'),
(116, '/uploads/126_dataUrl__image_jpeg-1717601773041-907170436.jpeg', 'libelle_116', 20, '0000-00-00 00:00:00', '2024-06-05 15:36:13'),
(117, '/uploads/142_dataUrl__image_jpeg-1717602014131-811714069.jpeg', 'libelle_117', 21, '0000-00-00 00:00:00', '2024-06-05 15:40:14'),
(118, '/uploads/77_images-1717602171069-223146620.jpeg', 'libelle_118', 22, '0000-00-00 00:00:00', '2024-06-05 15:42:51'),
(119, '/uploads/112_dataUrl__image_jpeg-1717602281091-83729889.jpeg', 'libelle_119', 23, '0000-00-00 00:00:00', '2024-06-05 15:44:41'),
(120, '/uploads/116_images (copie)-1717602410190-371453112.jpeg', 'libelle_120', 24, '0000-00-00 00:00:00', '2024-06-05 15:46:50'),
(121, '/uploads/114_dataUrl__image_jpeg-1717602550612-911545965.jpeg', 'libelle_121', 25, '0000-00-00 00:00:00', '2024-06-05 15:49:10'),
(122, '/uploads/183_dataUrl__image_jpeg-1717602675677-712687985.jpeg', 'libelle_122', 26, '0000-00-00 00:00:00', '2024-06-05 15:51:15'),
(123, '/uploads/146_dataUrl__image_jpeg-1717602788117-64940560.jpeg', 'libelle_123', 27, '0000-00-00 00:00:00', '2024-06-05 15:53:08'),
(124, '/uploads/333_images-1717602981341-806530602.jpeg', 'libelle_124', 28, '0000-00-00 00:00:00', '2024-06-05 15:56:21'),
(125, '/uploads/34_images (copie)-1717603147799-195845601.jpeg', 'libelle_125', 29, '0000-00-00 00:00:00', '2024-06-05 15:59:07'),
(126, '/uploads/143_dataUrl__image_jpeg-1717603260915-380207795.jpeg', 'libelle_126', 30, '0000-00-00 00:00:00', '2024-06-05 16:01:00'),
(127, '/uploads/80_dataUrl__image_jpeg-1717603407684-901119691.jpeg', 'libelle_127', 31, '0000-00-00 00:00:00', '2024-06-05 16:03:27'),
(128, '/uploads/8_images-1717603588087-541259175.jpeg', 'libelle_128', 32, '0000-00-00 00:00:00', '2024-06-05 16:06:28'),
(129, '/uploads/59_images-1717607269113-97694086.jpeg', 'libelle_129', 33, '0000-00-00 00:00:00', '2024-06-05 17:07:49'),
(130, 'placeholder.png', 'libelle_130', 34, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(131, '/uploads/139_images-1717606011415-238088041.jpeg', 'libelle_131', 35, '0000-00-00 00:00:00', '2024-06-05 16:46:51'),
(132, '/uploads/179_dataUrl__image_jpeg-1717604195550-996725149.jpeg', 'libelle_132', 36, '0000-00-00 00:00:00', '2024-06-05 16:16:35'),
(133, '/uploads/136_dataUrl__image_jpeg-1717604347037-663137071.jpeg', 'libelle_133', 37, '0000-00-00 00:00:00', '2024-06-05 16:19:07'),
(134, '/uploads/92_images-1717604496137-929090206.jpeg', 'libelle_134', 38, '0000-00-00 00:00:00', '2024-06-05 16:21:36'),
(135, '/uploads/64_images-1717604779303-119545092.jpeg', 'libelle_135', 39, '0000-00-00 00:00:00', '2024-06-05 16:26:19'),
(136, '/uploads/120_images-1717604870383-896445968.jpeg', 'libelle_136', 40, '0000-00-00 00:00:00', '2024-06-05 16:27:50'),
(137, '/uploads/87_images-1717604963787-649508766.jpeg', 'libelle_137', 41, '0000-00-00 00:00:00', '2024-06-05 16:29:23'),
(138, '/uploads/287_images-1717605077385-482463566.jpeg', 'libelle_138', 42, '0000-00-00 00:00:00', '2024-06-05 16:31:17'),
(139, 'placeholder.png', 'libelle_139', 43, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(140, '/uploads/71_images-1717605228163-566848713.jpeg', 'libelle_140', 44, '0000-00-00 00:00:00', '2024-06-05 16:33:48'),
(141, '/uploads/199_images-1717605406852-276121133.jpeg', 'libelle_141', 45, '0000-00-00 00:00:00', '2024-06-05 16:36:46'),
(142, '/uploads/93_images-1717605569229-283129541.jpeg', 'libelle_142', 46, '0000-00-00 00:00:00', '2024-06-05 16:39:29'),
(143, 'placeholder.png', 'libelle_143', 47, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(144, '/uploads/71_images-1717605693615-291334910.jpeg', 'libelle_144', 48, '0000-00-00 00:00:00', '2024-06-05 16:41:33'),
(147, '/uploads/14_dataUrl__image_jpeg-1717511899711-221722284.jpeg', 'libelle_147', 3, '0000-00-00 00:00:00', '2024-06-04 14:38:19'),
(148, '/uploads/75_dataUrl__image_jpeg-1717512536244-641392738.jpeg', 'libelle_148', 4, '0000-00-00 00:00:00', '2024-06-04 14:48:56'),
(149, '/uploads/112_dataUrl__image_jpeg-1717599594273-605007633.jpeg', 'libelle_149', 5, '0000-00-00 00:00:00', '2024-06-05 14:59:54'),
(150, '/uploads/89_dataUrl__image_jpeg-1717593478817-757672105.jpeg', 'libelle_150', 6, '0000-00-00 00:00:00', '2024-06-05 13:17:59'),
(151, '/uploads/147_dataUrl__image_jpeg-1717599948599-753071738.jpeg', 'libelle_151', 7, '0000-00-00 00:00:00', '2024-06-05 15:05:48'),
(152, '/uploads/85_dataUrl__image_jpeg-1717600078475-182306598.jpeg', 'libelle_152', 8, '0000-00-00 00:00:00', '2024-06-05 15:07:58'),
(153, '/uploads/118_dataUrl__image_jpeg-1717600182293-54755501.jpeg', 'libelle_153', 9, '0000-00-00 00:00:00', '2024-06-05 15:09:42'),
(154, '/uploads/99_dataUrl__image_jpeg-1717600346152-929409397.jpeg', 'libelle_154', 10, '0000-00-00 00:00:00', '2024-06-05 15:12:26'),
(155, '/uploads/165_dataUrl__image_jpeg-1717600481512-341197976.jpeg', 'libelle_155', 11, '0000-00-00 00:00:00', '2024-06-05 15:14:41'),
(156, '/uploads/63_images-1717600610290-265541061.jpeg', 'libelle_156', 12, '0000-00-00 00:00:00', '2024-06-05 15:16:50'),
(157, '/uploads/109_dataUrl__image_jpeg-1717600846214-38176320.jpeg', 'libelle_157', 13, '0000-00-00 00:00:00', '2024-06-05 15:20:46'),
(158, '/uploads/48_images-1717601009194-732599565.jpeg', 'libelle_158', 14, '0000-00-00 00:00:00', '2024-06-05 15:23:29'),
(159, '/uploads/109_dataUrl__image_jpeg-1717601101941-391186739.jpeg', 'libelle_159', 15, '0000-00-00 00:00:00', '2024-06-05 15:25:01'),
(160, '/uploads/157_dataUrl__image_jpeg-1717601187690-281071737.jpeg', 'libelle_160', 16, '0000-00-00 00:00:00', '2024-06-05 15:26:27'),
(161, '/uploads/371_dataUrl__image_jpeg-1717601423201-939681155.jpeg', 'libelle_161', 17, '0000-00-00 00:00:00', '2024-06-05 15:30:23'),
(162, '/uploads/81_images-1717601564408-405173713.jpeg', 'libelle_162', 18, '0000-00-00 00:00:00', '2024-06-05 15:32:44'),
(163, '/uploads/119_dataUrl__image_jpeg-1717601652652-954743506.jpeg', 'libelle_163', 19, '0000-00-00 00:00:00', '2024-06-05 15:34:12'),
(164, '/uploads/132_dataUrl__image_jpeg-1717601816616-558325506.jpeg', 'libelle_164', 20, '0000-00-00 00:00:00', '2024-06-05 15:36:56'),
(165, '/uploads/146_dataUrl__image_jpeg-1717602057531-203767145.jpeg', 'libelle_165', 21, '0000-00-00 00:00:00', '2024-06-05 15:40:57'),
(166, '/uploads/108_dataUrl__image_jpeg-1717602192233-484245668.jpeg', 'libelle_166', 22, '0000-00-00 00:00:00', '2024-06-05 15:43:12'),
(167, '/uploads/127_dataUrl__image_jpeg-1717602301415-884856199.jpeg', 'libelle_167', 23, '0000-00-00 00:00:00', '2024-06-05 15:45:01'),
(168, '/uploads/102_images-1717602430626-725742573.jpeg', 'libelle_168', 24, '0000-00-00 00:00:00', '2024-06-05 15:47:10'),
(169, '/uploads/108_dataUrl__image_jpeg-1717602574119-972223110.jpeg', 'libelle_169', 25, '0000-00-00 00:00:00', '2024-06-05 15:49:34'),
(170, '/uploads/177_dataUrl__image_jpeg-1717602704675-911072250.jpeg', 'libelle_170', 26, '0000-00-00 00:00:00', '2024-06-05 15:51:44'),
(171, '/uploads/118_dataUrl__image_jpeg-1717602811841-444317344.jpeg', 'libelle_171', 27, '0000-00-00 00:00:00', '2024-06-05 15:53:31'),
(172, '/uploads/383_dataUrl__image_jpeg-1717603007079-166505755.jpeg', 'libelle_172', 28, '0000-00-00 00:00:00', '2024-06-05 15:56:47'),
(173, '/uploads/66_images (copie)-1717603180857-494470695.jpeg', 'libelle_173', 29, '0000-00-00 00:00:00', '2024-06-05 15:59:40'),
(174, '/uploads/126_dataUrl__image_jpeg-1717603281444-89395027.jpeg', 'libelle_174', 30, '0000-00-00 00:00:00', '2024-06-05 16:01:21'),
(175, '/uploads/84_dataUrl__image_jpeg-1717603447120-742670265.jpeg', 'libelle_175', 31, '0000-00-00 00:00:00', '2024-06-05 16:04:07'),
(176, '/uploads/355_dataUrl__image_jpeg-1717603625748-837619540.jpeg', 'libelle_176', 32, '0000-00-00 00:00:00', '2024-06-05 16:07:05'),
(177, '/uploads/78_dataUrl__image_jpeg-1717607292491-955946855.jpeg', 'libelle_177', 33, '0000-00-00 00:00:00', '2024-06-05 17:08:12'),
(178, 'placeholder.png', 'libelle_178', 34, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(179, '/uploads/309_images-1717603996594-435800049.jpeg', 'libelle_179', 35, '0000-00-00 00:00:00', '2024-06-05 16:13:16'),
(180, '/uploads/149_dataUrl__image_jpeg-1717604246432-584419262.jpeg', 'libelle_180', 36, '0000-00-00 00:00:00', '2024-06-05 16:17:26'),
(181, '/uploads/101_dataUrl__image_jpeg-1717604364789-781465274.jpeg', 'libelle_181', 37, '0000-00-00 00:00:00', '2024-06-05 16:19:24'),
(182, '/uploads/175_dataUrl__image_jpeg-1717604623822-348131352.jpeg', 'libelle_182', 38, '0000-00-00 00:00:00', '2024-06-05 16:23:43'),
(183, '/uploads/77_images-1717604797020-108424976.jpeg', 'libelle_183', 39, '0000-00-00 00:00:00', '2024-06-05 16:26:37'),
(184, '/uploads/4_images-1717604879308-25640286.jpeg', 'libelle_184', 40, '0000-00-00 00:00:00', '2024-06-05 16:27:59'),
(185, '/uploads/158_dataUrl__image_jpeg-1717604986018-46150198.jpeg', 'libelle_185', 41, '0000-00-00 00:00:00', '2024-06-05 16:29:46'),
(186, '/uploads/377_dataUrl__image_jpeg-1717605109301-822756898.jpeg', 'libelle_186', 42, '0000-00-00 00:00:00', '2024-06-05 16:31:49'),
(187, 'placeholder.png', 'libelle_187', 43, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(188, '/uploads/181_images-1717605252388-525682147.jpeg', 'libelle_188', 44, '0000-00-00 00:00:00', '2024-06-05 16:34:12'),
(189, '/uploads/350_images-1717605506284-299193454.jpeg', 'libelle_189', 45, '0000-00-00 00:00:00', '2024-06-05 16:38:26'),
(190, '/uploads/372_dataUrl__image_jpeg-1717605602780-650630381.jpeg', 'libelle_190', 46, '0000-00-00 00:00:00', '2024-06-05 16:40:02'),
(191, 'placeholder.png', 'libelle_191', 47, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(192, '/uploads/135_images-1717605712178-97052833.jpeg', 'libelle_192', 48, '0000-00-00 00:00:00', '2024-06-05 16:41:52'),
(194, '/uploads/2_41915869-cuisine-et-de-l-alimentation-sur-fond-de-non-cuites-blanc-riz-long-riz-basmati-ou-riz-au-jasmin-1717511649722-570935212.jpeg', 'libelle_194', 2, '0000-00-00 00:00:00', '2024-06-04 14:34:09'),
(195, '/uploads/25_dataUrl__image_jpeg-1717511907469-378662121.jpeg', 'libelle_195', 3, '0000-00-00 00:00:00', '2024-06-04 14:38:27'),
(196, '/uploads/67_dataUrl__image_jpeg-1717512522539-856797557.jpeg', 'libelle_196', 4, '0000-00-00 00:00:00', '2024-06-04 14:48:42'),
(197, '/uploads/89_dataUrl__image_jpeg-1717599648969-661920076.jpeg', 'libelle_197', 5, '0000-00-00 00:00:00', '2024-06-05 15:00:49'),
(243, '/uploads/12_dataUrl__image_jpeg-1717511932884-201498338.jpeg', 'libelle_243', 3, '0000-00-00 00:00:00', '2024-06-04 14:38:52'),
(245, '/uploads/63_dataUrl__image_jpeg-1717599724571-442677960.jpeg', 'libelle_245', 5, '0000-00-00 00:00:00', '2024-06-05 15:02:04'),
(249, '/uploads/5_33960868-close-up-phot-beaucoup-de-riz-blanc-1717511659319-914100788.jpeg', 'Libeleplaceholder', 2, '2024-06-04 12:43:42', '2024-06-04 14:34:19'),
(250, '/uploads/5_holding-des-mains-de-lagriculteur-r_colte-mas-grain-1717511580221-430700985.jpeg', 'Libeleplaceholder', 1, '2024-06-04 12:52:35', '2024-06-04 14:33:00'),
(251, '/uploads/7_graines-de-mas-fond-couleur-naturel-et-textur_-gros-plan-image-1717511598438-538334288.jpeg', 'Libeleplaceholder', 1, '2024-06-04 13:12:29', '2024-06-04 14:33:18'),
(252, '/uploads/17_pop-corn-avec-les-kernels-1717511617153-327432478.jpeg', 'Libeleplaceholder', 1, '2024-06-04 14:32:31', '2024-06-04 14:33:37'),
(253, '/uploads/37_tas-de-mas--_clater-1717511632900-753552048.jpeg', 'Libeleplaceholder', 1, '2024-06-04 14:33:45', '2024-06-04 14:33:52'),
(254, '/uploads/4_187700378-pile-of-raw-rice-1717511665478-177202741.jpeg', 'Libeleplaceholder', 2, '2024-06-04 14:34:25', '2024-06-04 14:34:25'),
(255, '/uploads/7_23828811-le-riz-blanc-1717511677616-141036020.jpeg', 'Libeleplaceholder', 2, '2024-06-04 14:34:37', '2024-06-04 14:34:37'),
(256, '/uploads/60_dataUrl__image_jpeg-1717512504613-248283482.jpeg', 'Libeleplaceholder', 4, '2024-06-04 14:48:24', '2024-06-04 14:48:24');

-- --------------------------------------------------------

--
-- Table structure for table `ligne_commandes`
--

CREATE TABLE `ligne_commandes` (
  `idcom` int(11) NOT NULL,
  `idprod` int(11) NOT NULL,
  `qteprocom` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `mode_paiements`
--

CREATE TABLE `mode_paiements` (
  `codemode` int(11) NOT NULL,
  `libmode` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `paiements`
--

CREATE TABLE `paiements` (
  `idpaie` int(11) NOT NULL,
  `montpaie` int(11) NOT NULL,
  `datepaie` datetime NOT NULL,
  `idcom` int(11) DEFAULT NULL,
  `codemode` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personnes`
--

CREATE TABLE `personnes` (
  `idpers` int(11) NOT NULL,
  `nompers` varchar(255) DEFAULT NULL,
  `prenom` varchar(255) NOT NULL,
  `sexe` char(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `telephone` varchar(255) DEFAULT NULL,
  `adresse` text DEFAULT NULL,
  `motdepasse` varchar(255) NOT NULL,
  `verified` tinyint(1) DEFAULT 0,
  `role` varchar(255) NOT NULL,
  `age` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `personnes`
--

INSERT INTO `personnes` (`idpers`, `nompers`, `prenom`, `sexe`, `email`, `telephone`, `adresse`, `motdepasse`, `verified`, `role`, `age`, `createdAt`, `updatedAt`) VALUES
(1, 'Aderomor', 'Marihab', NULL, 'min@gmail.com', NULL, NULL, '$2b$10$jC83ayb21aREf3YPeb1vvOGzYa/SYuPNzMM0X0A6fs/jhaJPZl0AG', 0, 'client', NULL, '2024-05-29 11:57:05', '2024-05-29 11:57:05');

-- --------------------------------------------------------

--
-- Table structure for table `produits`
--

CREATE TABLE `produits` (
  `idprod` int(11) NOT NULL,
  `libelleprod` varchar(255) NOT NULL,
  `prixprod` int(11) NOT NULL,
  `qtestock` int(11) NOT NULL,
  `description` text DEFAULT NULL,
  `datecreation` datetime DEFAULT NULL,
  `codcat` int(11) DEFAULT NULL,
  `parkilo` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `produits`
--

INSERT INTO `produits` (`idprod`, `libelleprod`, `prixprod`, `qtestock`, `description`, `datecreation`, `codcat`, `parkilo`, `createdAt`, `updatedAt`) VALUES
(1, 'Maïs', 200, 74, 'Maïs - Céréale riche en fibres et vitamines, parfaite pour une alimentation équilibrée et pour préparer des plats délicieux et sains.', '2024-05-27 16:03:25', 1, 0, '2024-05-27 16:03:25', '2024-05-27 16:03:25'),
(2, 'Riz', 500, 23, 'Riz - Riz de qualité supérieure, idéal pour accompagner tous vos plats préférés, garantissant une texture parfaite et un goût délicieux.', '2024-05-27 16:03:25', 1, 1, '2024-05-27 16:03:25', '2024-05-27 16:03:25'),
(3, 'Sorgho', 250, 39, 'Sorgho - Grain ancien riche en protéines et antioxydants, excellent pour la santé et idéal pour des repas nutritifs.', '2024-05-27 16:03:25', 1, 0, '2024-05-27 16:03:25', '2024-05-27 16:03:25'),
(4, 'Mil', 300, 41, 'Mil - Céréale nutritive, idéale pour des repas sains et équilibrés, apportant une saveur unique à vos plats.', '2024-05-27 16:03:25', 1, 0, '2024-05-27 16:03:25', '2024-05-27 16:03:25'),
(5, 'Blé', 400, 33, 'Blé - Blé de première qualité, parfait pour la boulangerie et la cuisine, assurant des résultats exceptionnels dans toutes vos recettes.', '2024-05-27 16:03:25', 1, 1, '2024-05-27 16:03:25', '2024-05-27 16:03:25'),
(6, 'Fonio', 350, 15, 'Fonio - Petit grain aux grandes vertus nutritionnelles, sans gluten et riche en minéraux, parfait pour des repas sains.', '2024-05-27 16:03:25', 1, 0, '2024-05-27 16:03:25', '2024-05-27 16:03:25'),
(7, 'Avoine', 450, 59, 'Avoine - Avoine entière, parfaite pour des petits déjeuners sains et énergétiques, riche en fibres et en nutriments essentiels.', '2024-05-27 16:03:25', 1, 0, '2024-05-27 16:03:25', '2024-05-27 16:03:25'),
(8, 'Orge', 300, 88, 'Orge - Grain polyvalent riche en fibres, excellent pour les soupes, les salades et les plats mijotés, ajoutant une texture délicieuse.', '2024-05-27 16:03:25', 1, 1, '2024-05-27 16:03:25', '2024-05-27 16:03:25'),
(9, 'Tomates', 600, 47, 'Tomates - Tomates fraîches et juteuses, idéales pour les salades, les sauces et les plats cuisinés, apportant une saveur naturelle.', '2024-05-27 16:03:26', 2, 0, '2024-05-27 16:03:26', '2024-05-27 16:03:26'),
(10, 'Carottes', 500, 78, 'Carottes - Carottes croquantes et sucrées, parfaites pour les collations, les salades et les plats cuisinés, riches en vitamines et minéraux.', '2024-05-27 16:03:26', 2, 1, '2024-05-27 16:03:26', '2024-05-27 16:03:26'),
(11, 'Pommes de terre', 400, 68, 'Pommes de terre - Pommes de terre de qualité, idéales pour toutes vos recettes de cuisine, garantissant des plats savoureux et nutritifs.', '2024-05-27 16:03:26', 2, 1, '2024-05-27 16:03:26', '2024-05-27 16:03:26'),
(12, 'Oignons', 300, 17, 'Oignons - Oignons savoureux, essentiels pour rehausser la saveur de vos plats, parfaits pour les soupes, les sauces et les sautés.', '2024-05-27 16:03:26', 2, 0, '2024-05-27 16:03:26', '2024-05-27 16:03:26'),
(13, 'Choux', 200, 47, 'Choux - Choux frais, parfaits pour les salades et les plats mijotés, riches en vitamines et en fibres, apportant une touche croquante à vos repas.', '2024-05-27 16:03:26', 2, 1, '2024-05-27 16:03:26', '2024-05-27 16:03:26'),
(14, 'Gombo', 700, 77, 'Gombo - Légume riche en fibres et en vitamines, idéal pour les plats traditionnels, apportant une texture unique et un goût délicieux.', '2024-05-27 16:03:26', 2, 0, '2024-05-27 16:03:26', '2024-05-27 16:03:26'),
(15, 'Laitues', 250, 33, 'Laitues - Laitues croquantes, idéales pour des salades fraîches et saines, riches en fibres et en vitamines, parfaites pour une alimentation équilibrée.', '2024-05-27 16:03:26', 2, 1, '2024-05-27 16:03:26', '2024-05-27 16:03:26'),
(16, 'Piments', 800, 99, 'Piments - Piments forts et épicés, parfaits pour ajouter du piquant à vos plats, apportant une saveur intense et une touche exotique.', '2024-05-27 16:03:26', 2, 1, '2024-05-27 16:03:26', '2024-05-27 16:03:26'),
(17, 'Bananes plantains', 150, 11, 'Bananes plantains - Bananes plantains mûres, parfaites pour la friture ou la cuisson, apportant une douceur naturelle à vos plats.', '2024-05-27 16:03:26', 3, 0, '2024-05-27 16:03:26', '2024-05-27 16:03:26'),
(18, 'Oranges', 350, 51, 'Oranges - Oranges juteuses et sucrées, riches en vitamine C, parfaites pour les jus, les desserts et les collations saines.', '2024-05-27 16:03:26', 3, 1, '2024-05-27 16:03:26', '2024-05-27 16:03:26'),
(19, 'Mangues', 400, 31, 'Mangues - Mangues fraîches et savoureuses, idéales pour les desserts, les smoothies et les salades, riches en vitamines et en fibres.', '2024-05-27 16:03:26', 3, 0, '2024-05-27 16:03:26', '2024-05-27 16:03:26'),
(20, 'Papayes', 300, 96, 'Papayes - Papayes sucrées et juteuses, parfaites pour une collation saine, riches en vitamines et en antioxydants, idéales pour les desserts.', '2024-05-27 16:03:26', 3, 1, '2024-05-27 16:03:26', '2024-05-27 16:03:26'),
(21, 'Ananas', 500, 69, 'Ananas - Ananas frais et sucrés, riches en vitamines et en minéraux, parfaits pour les desserts, les jus et les salades.', '2024-05-27 16:03:26', 3, 1, '2024-05-27 16:03:26', '2024-05-27 16:03:26'),
(22, 'Citrons', 250, 90, 'Citrons - Citrons acides et juteux, parfaits pour les jus, les marinades et les desserts, apportant une touche de fraîcheur.', '2024-05-27 16:03:26', 3, 1, '2024-05-27 16:03:26', '2024-05-27 16:03:26'),
(23, 'Avocats', 1000, 27, 'Avocats - Avocats crémeux et savoureux, riches en bonnes graisses, parfaits pour les salades, les toasts et les smoothies.', '2024-05-27 16:03:27', 3, 0, '2024-05-27 16:03:27', '2024-05-27 16:03:27'),
(24, 'Pamplemousses', 450, 23, 'Pamplemousses - Pamplemousses frais et juteux, parfaits pour les salades de fruits, les jus et les collations saines, riches en vitamine C.', '2024-05-27 16:03:27', 3, 0, '2024-05-27 16:03:27', '2024-05-27 16:03:27'),
(25, 'Niébé', 600, 62, 'Niébé - Légume sec riche en protéines, idéal pour les régimes végétariens, apportant une texture et une saveur unique à vos plats.', '2024-05-27 16:03:27', 4, 1, '2024-05-27 16:03:27', '2024-05-27 16:03:27'),
(26, 'Soja', 200, 3, 'Soja - Grain de soja riche en protéines, parfait pour une alimentation équilibrée, idéal pour les recettes végétariennes et véganes.', '2024-05-27 16:03:27', 4, 0, '2024-05-27 16:03:27', '2024-05-27 16:03:27'),
(27, 'Pois chiches', 700, 37, 'Pois chiches - Légumineuse riche en protéines et en fibres, idéale pour les salades, les houmous et les plats mijotés, apportant une texture crémeuse.', '2024-05-27 16:03:27', 4, 0, '2024-05-27 16:03:27', '2024-05-27 16:03:27'),
(28, 'Arachides', 400, 20, 'Arachides - Arachides fraîches et croquantes, parfaites pour les collations et la cuisine, riches en protéines et en bonnes graisses.', '2024-05-27 16:03:27', 4, 1, '2024-05-27 16:03:27', '2024-05-27 16:03:27'),
(29, 'Lentilles', 800, 35, 'Lentilles - Lentilles riches en protéines et en fibres, parfaites pour les soupes, les plats mijotés et les salades, apportant une texture et une saveur unique.', '2024-05-27 16:03:27', 4, 1, '2024-05-27 16:03:27', '2024-05-27 16:03:27'),
(30, 'Haricots rouges', 600, 67, 'Haricots rouges - Haricots rouges nutritifs, excellents pour les plats traditionnels, riches en protéines et en fibres, parfaits pour des repas sains.', '2024-05-27 16:03:28', 4, 1, '2024-05-27 16:03:28', '2024-05-27 16:03:28'),
(31, 'Voandzou', 550, 81, 'Voandzou - Légumineuse riche en protéines et en fibres, idéale pour les repas sains, apportant une texture et une saveur unique.', '2024-05-27 16:03:28', 4, 1, '2024-05-27 16:03:28', '2024-05-27 16:03:28'),
(32, 'Pois d’Angole', 500, 31, 'Pois d’Angole - Légumineuse nutritive, parfaite pour les plats traditionnels, apportant une texture crémeuse et une saveur riche.', '2024-05-27 16:03:28', 4, 1, '2024-05-27 16:03:28', '2024-05-27 16:03:28'),
(33, 'Noix de cajou', 1000, 16, 'Noix de cajou - Noix de cajou croquantes et savoureuses, riches en bonnes graisses, parfaites pour les collations et la cuisine.', '2024-05-27 16:03:28', 5, 1, '2024-05-27 16:03:28', '2024-05-27 16:03:28'),
(34, 'Soja', 200, 28, 'Soja - Grain de soja riche en protéines, parfait pour une alimentation équilibrée, idéal pour les recettes végétariennes et véganes.', '2024-05-27 16:03:28', 5, 0, '2024-05-27 16:03:28', '2024-05-27 16:03:28'),
(35, 'Noix de palmiste', 300, 28, 'Noix de palmiste - Noix de palmiste savoureuses, riches en nutriments, parfaites pour les collations et la cuisine.', '2024-05-27 16:03:28', 5, 0, '2024-05-27 16:03:28', '2024-05-27 16:03:28'),
(36, 'Noix de coco', 150, 60, 'Noix de coco - Noix de coco fraîches, parfaites pour les desserts, la cuisine exotique et les collations, riches en vitamines et en minéraux.', '2024-05-27 16:03:28', 5, 0, '2024-05-27 16:03:28', '2024-05-27 16:03:28'),
(37, 'Sésame', 700, 54, 'Sésame - Graines de sésame riches en calcium et en fer, idéales pour les salades, les plats asiatiques et les collations saines.', '2024-05-27 16:03:28', 5, 1, '2024-05-27 16:03:28', '2024-05-27 16:03:28'),
(38, 'Karité', 500, 86, 'Karité - Noix de karité, parfaites pour les soins de la peau et la cuisine, apportant des propriétés hydratantes et nutritives.', '2024-05-27 16:03:28', 5, 1, '2024-05-27 16:03:28', '2024-05-27 16:03:28'),
(39, 'Tournesol', 400, 55, 'Gingembre - Gingembre frais, parfait pour les tisanes, les marinades et les plats asiatiques, apportant une touche épicée et bénéfique pour la santé.', '2024-05-27 16:03:28', 5, 1, '2024-05-27 16:03:28', '2024-05-27 16:03:28'),
(40, 'Noix', 800, 11, 'Piments - Piments forts et épicés, parfaits pour ajouter du piquant à vos plats, apportant une saveur intense et une touche exotique.', '2024-05-27 16:03:28', 5, 0, '2024-05-27 16:03:28', '2024-05-27 16:03:28'),
(41, 'Manioc', 200, 93, 'Racine de manioc riche en glucides, idéale pour les plats traditionnels.', '2024-05-27 16:03:29', 6, 1, '2024-05-27 16:03:29', '2024-05-27 16:03:29'),
(42, 'Igname', 300, 68, 'Tubercule nutritif, parfait pour les plats mijotés et les frites.', '2024-05-27 16:03:29', 6, 0, '2024-05-27 16:03:29', '2024-05-27 16:03:29'),
(43, 'Pommes de terre', 400, 2, 'Pommes de terre de qualité, idéales pour toutes vos recettes de cuisine.', '2024-05-27 16:03:29', 6, 1, '2024-05-27 16:03:29', '2024-05-27 16:03:29'),
(44, 'Patates douces', 350, 2, 'Patates douces sucrées et riches en vitamines, parfaites pour les desserts et les plats principaux.', '2024-05-27 16:03:29', 6, 0, '2024-05-27 16:03:29', '2024-05-27 16:03:29'),
(45, 'Taro', 300, 31, 'Tubercule savoureux, idéal pour les plats traditionnels.', '2024-05-27 16:03:29', 6, 0, '2024-05-27 16:03:29', '2024-05-27 16:03:29'),
(46, 'Patate douce violette', 400, 93, 'Patate douce violette, riche en antioxydants, idéale pour des plats colorés.', '2024-05-27 16:03:29', 6, 1, '2024-05-27 16:03:29', '2024-05-27 16:03:29'),
(47, 'Arachide', 400, 22, 'Arachides fraîches et croquantes, parfaites pour les collations et la cuisine.', '2024-05-27 16:03:29', 6, 1, '2024-05-27 16:03:29', '2024-05-27 16:03:29'),
(48, 'Chou de Chine', 250, 72, 'Chou de Chine frais, parfait pour les plats asiatiques et les salades.', '2024-05-27 16:03:29', 6, 1, '2024-05-27 16:03:29', '2024-05-27 16:03:29');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `administrateurs`
--
ALTER TABLE `administrateurs`
  ADD PRIMARY KEY (`idpers`);

--
-- Indexes for table `avis`
--
ALTER TABLE `avis`
  ADD PRIMARY KEY (`idavis`),
  ADD KEY `idprod` (`idprod`),
  ADD KEY `idpers` (`idpers`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`codcat`);

--
-- Indexes for table `clients`
--
ALTER TABLE `clients`
  ADD PRIMARY KEY (`idpers`);

--
-- Indexes for table `commandes`
--
ALTER TABLE `commandes`
  ADD PRIMARY KEY (`idcom`),
  ADD KEY `idpers` (`idpers`);

--
-- Indexes for table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`codeimage`),
  ADD KEY `idprod` (`idprod`);

--
-- Indexes for table `ligne_commandes`
--
ALTER TABLE `ligne_commandes`
  ADD PRIMARY KEY (`idcom`,`idprod`),
  ADD KEY `idprod` (`idprod`);

--
-- Indexes for table `mode_paiements`
--
ALTER TABLE `mode_paiements`
  ADD PRIMARY KEY (`codemode`);

--
-- Indexes for table `paiements`
--
ALTER TABLE `paiements`
  ADD PRIMARY KEY (`idpaie`),
  ADD KEY `idcom` (`idcom`),
  ADD KEY `codemode` (`codemode`);

--
-- Indexes for table `personnes`
--
ALTER TABLE `personnes`
  ADD PRIMARY KEY (`idpers`);

--
-- Indexes for table `produits`
--
ALTER TABLE `produits`
  ADD PRIMARY KEY (`idprod`),
  ADD KEY `codcat` (`codcat`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `avis`
--
ALTER TABLE `avis`
  MODIFY `idavis` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `codcat` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `commandes`
--
ALTER TABLE `commandes`
  MODIFY `idcom` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `images`
--
ALTER TABLE `images`
  MODIFY `codeimage` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=257;

--
-- AUTO_INCREMENT for table `mode_paiements`
--
ALTER TABLE `mode_paiements`
  MODIFY `codemode` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `paiements`
--
ALTER TABLE `paiements`
  MODIFY `idpaie` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `personnes`
--
ALTER TABLE `personnes`
  MODIFY `idpers` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `produits`
--
ALTER TABLE `produits`
  MODIFY `idprod` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=97;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `administrateurs`
--
ALTER TABLE `administrateurs`
  ADD CONSTRAINT `administrateurs_ibfk_1` FOREIGN KEY (`idpers`) REFERENCES `personnes` (`idpers`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `avis`
--
ALTER TABLE `avis`
  ADD CONSTRAINT `avis_ibfk_1` FOREIGN KEY (`idprod`) REFERENCES `produits` (`idprod`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `avis_ibfk_2` FOREIGN KEY (`idpers`) REFERENCES `personnes` (`idpers`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `clients`
--
ALTER TABLE `clients`
  ADD CONSTRAINT `clients_ibfk_1` FOREIGN KEY (`idpers`) REFERENCES `personnes` (`idpers`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `commandes`
--
ALTER TABLE `commandes`
  ADD CONSTRAINT `commandes_ibfk_1` FOREIGN KEY (`idpers`) REFERENCES `clients` (`idpers`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `images`
--
ALTER TABLE `images`
  ADD CONSTRAINT `images_ibfk_1` FOREIGN KEY (`idprod`) REFERENCES `produits` (`idprod`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `ligne_commandes`
--
ALTER TABLE `ligne_commandes`
  ADD CONSTRAINT `ligne_commandes_ibfk_1` FOREIGN KEY (`idcom`) REFERENCES `commandes` (`idcom`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `ligne_commandes_ibfk_2` FOREIGN KEY (`idprod`) REFERENCES `produits` (`idprod`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `paiements`
--
ALTER TABLE `paiements`
  ADD CONSTRAINT `paiements_ibfk_1` FOREIGN KEY (`idcom`) REFERENCES `commandes` (`idcom`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `paiements_ibfk_2` FOREIGN KEY (`codemode`) REFERENCES `mode_paiements` (`codemode`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `produits`
--
ALTER TABLE `produits`
  ADD CONSTRAINT `produits_ibfk_1` FOREIGN KEY (`codcat`) REFERENCES `categories` (`codcat`) ON DELETE NO ACTION ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
