CREATE TABLE `JEADAN_ITEM` (
  `NO` int(11) NOT NULL AUTO_INCREMENT,
  `PRODUCT` varchar(50) NOT NULL,
  `CREATE_DATE` date NOT NULL DEFAULT current_timestamp(),
  `WONDAN_CODE` varchar(50) DEFAULT NULL,
  `WONDAN_STORE_NO` varchar(50) DEFAULT NULL,
  `LOT` varchar(50) NOT NULL,
  `LENGTH` int(10) DEFAULT NULL,
  `Y_COUNT` int(10) DEFAULT NULL,
  `MARKS` int(10) DEFAULT NULL,
  `COUNT` int(10) DEFAULT NULL,
  `DEFECTIVE` int(10) DEFAULT NULL,
  `WORK_DATE` date DEFAULT NULL,
  `STATE` int(10) DEFAULT NULL,
  PRIMARY KEY (`NO`),
  FOREIGN KEY (`PRODUCT`) REFERENCES `PRODUCT`(`PD_NAME`),
  FOREIGN KEY (`WONDAN_CODE`) REFERENCES `WONDAN`(`WONDAN_CODE`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- 생성 시간: 24-05-12 01:05
-- 서버 버전: 10.3.32-MariaDB
-- PHP 버전: 8.0.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 데이터베이스: `fineerptestdb`
--

-- --------------------------------------------------------

--
-- 테이블 구조 `JEADAN_ITEM`
--

CREATE TABLE `JEADAN_ITEM` (
  `NO` int(11) NOT NULL,
  `PRODUCT` varchar(50) NOT NULL,
  `CREATE_DATE` date NOT NULL DEFAULT current_timestamp(),
  `WONDAN_CODE` varchar(50) DEFAULT NULL,
  `WONDAN_STORE_NO` varchar(50) DEFAULT NULL,
  `LOT` varchar(50) NOT NULL,
  `LENGTH` int(10) DEFAULT NULL,
  `Y_COUNT` int(10) DEFAULT NULL,
  `MARKS` int(10) DEFAULT NULL,
  `COUNT` int(10) DEFAULT NULL,
  `DEFECTIVE` int(10) DEFAULT NULL,
  `WORK_DATE` date DEFAULT NULL,
  `STATE` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 테이블의 덤프 데이터 `JEADAN_ITEM`
--

INSERT INTO `JEADAN_ITEM` (`NO`, `PRODUCT`, `CREATE_DATE`, `WONDAN_CODE`, `WONDAN_STORE_NO`, `LOT`, `LENGTH`, `Y_COUNT`, `MARKS`, `COUNT`, `DEFECTIVE`, `WORK_DATE`, `STATE`) VALUES
(1, 'CAB TAP', '2024-05-12', '4K', NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2, 'CAB 인어백', '2024-05-12', 'SR', NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3, 'CENTER 메인', '2024-05-12', 'H2', NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4, 'DAB Rear', '2024-05-12', '49', NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(5, 'DABFront', '2024-05-12', 'H2', NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(6, 'KAB 메인', '2024-05-12', 'H2', NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(7, 'KAB 테더', '2024-05-12', 'H2', NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(8, 'PAB', '2024-05-12', 'NK', NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(9, 'PAB UC', '2024-05-12', 'NK', NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(10, 'SAB LH 메인', '2024-05-12', 'H2', NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(11, 'SAB RH 메인', '2024-05-12', 'H2', NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(12, 'SAB 테더', '2024-05-12', '53', NULL, '', NULL, NULL, NULL, NULL, NULL, NULL, NULL);

--
-- 덤프된 테이블의 인덱스
--

--
-- 테이블의 인덱스 `JEADAN_ITEM`
--
ALTER TABLE `JEADAN_ITEM`
  ADD PRIMARY KEY (`NO`),
  ADD KEY `PRODUCT` (`PRODUCT`),
  ADD KEY `WONDAN_CODE` (`WONDAN_CODE`);

--
-- 덤프된 테이블의 AUTO_INCREMENT
--

--
-- 테이블의 AUTO_INCREMENT `JEADAN_ITEM`
--
ALTER TABLE `JEADAN_ITEM`
  MODIFY `NO` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- 덤프된 테이블의 제약사항
--

--
-- 테이블의 제약사항 `JEADAN_ITEM`
--
ALTER TABLE `JEADAN_ITEM`
  ADD CONSTRAINT `JEADAN_ITEM_ibfk_1` FOREIGN KEY (`PRODUCT`) REFERENCES `PRODUCT` (`PD_NAME`),
  ADD CONSTRAINT `JEADAN_ITEM_ibfk_2` FOREIGN KEY (`WONDAN_CODE`) REFERENCES `WONDAN` (`WONDAN_CODE`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
