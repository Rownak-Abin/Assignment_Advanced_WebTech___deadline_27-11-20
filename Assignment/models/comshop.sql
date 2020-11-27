-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 27, 2020 at 05:54 PM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.1.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `comshop`
--

-- --------------------------------------------------------

--
-- Table structure for table `components`
--

CREATE TABLE `components` (
  `id` int(50) NOT NULL,
  `Cname` varchar(500) NOT NULL,
  `Pname` varchar(500) NOT NULL,
  `Bname` varchar(500) NOT NULL,
  `category` varchar(500) NOT NULL,
  `subcategory` varchar(500) NOT NULL,
  `review` varchar(500) NOT NULL,
  `price` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `components`
--

INSERT INTO `components` (`id`, `Cname`, `Pname`, `Bname`, `category`, `subcategory`, `review`, `price`) VALUES
(1, 'Storage', 'Adata fast New', 'ASUS', 'Portable', 'Pen Drive', '5 star', '500'),
(2, 'Storage', 'Best carry', 'LENOVO', 'Portable', 'Pen Drive', 'Nice Product', '900'),
(3, 'Storage', 'Black Carry', 'DELL', 'Portable', 'Pen Drive', 'Great', '800'),
(4, 'Storage', 'Seagate New', 'LENOVO', 'Portable', 'Portable HDD', 'Excellent Product', '6000'),
(5, 'Storage', 'New Light Storage', 'DELL', 'Portable', 'Portable HDD', 'Great', '9000'),
(6, 'Storage', 'Metal Case', 'ASUS', 'Portable', 'Portable HDD', 'Best Product ever', '6000'),
(7, 'Storage', 'Adata New', 'LENOVO', 'Permanent', 'Hard DIsk', 'Great', '5000'),
(8, 'Storage', 'Bubble Disk', 'DELL', 'Permanent', 'Hard DIsk', 'Super quality Product', '9000'),
(9, 'Storage', 'Metal disk', 'ASUS', 'Permanent', 'Hard DIsk', 'Best Product', '6000'),
(10, 'Storage', 'Strong cage', 'LENOVO', 'Permanent', 'SSD', 'Super quality Product', '9000'),
(11, 'Storage', 'Black Chest', 'DELL', 'Permanent', 'SSD', 'Great', '9000'),
(12, 'Storage', 'Chest metal', 'ASUS', 'Permanent', 'SSD', 'Best Product', '6000'),
(13, 'Monitor', 'Bravia Sony', 'SONY', 'LCD Monitor', 'Filend Emission FPD', 'Feels like super amoled', '60000'),
(14, 'Monitor', 'Thin TV', 'ASUS', 'LCD Monitor', 'Filend Emission FPD', 'Best Product', '90000'),
(15, 'Monitor', 'Spuer dell', 'DELL', 'LCD Monitor', 'Filend Emission FPD', 'Great experience', '120000'),
(16, 'Monitor', '3D tv', 'SONY', 'LCD Monitor', 'Plasma FPD', 'Great experience', '9000'),
(17, 'Monitor', 'Ultra HD plus', 'ASUS', 'LCD Monitor', 'Plasma FPD', 'Most popular Product', '70000'),
(18, 'Monitor', '4k HD plus', 'DELL', 'LCD Monitor', 'Plasma FPD', 'Feels like super amoled', '90000');

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `id` int(11) NOT NULL,
  `uname` varchar(500) NOT NULL,
  `password` varchar(500) NOT NULL,
  `type` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`id`, `uname`, `password`, `type`) VALUES
(1, 'rownak', '123', 'admin'),
(2, 'abin', '789', 'user');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `components`
--
ALTER TABLE `components`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `components`
--
ALTER TABLE `components`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
