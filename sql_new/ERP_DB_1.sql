-----------------------

--
-- 테이블 구조 `ACCOUNT`
--

CREATE TABLE `ACCOUNT` (
  `NO` int(11) NOT NULL,
  `ID` varchar(11) NOT NULL,
  `NAME` varchar(30) NOT NULL,
  `PASSWORD` varchar(30) DEFAULT NULL,
  `CREATE_DATE` date NOT NULL DEFAULT current_timestamp(),
  `ACCOUNT_STATE` int(11) NOT NULL DEFAULT 1 COMMENT '사용자 상태',
  `LEVEL` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 테이블의 덤프 데이터 `ACCOUNT`
--

INSERT INTO `ACCOUNT` (`NO`, `ID`, `NAME`, `PASSWORD`, `CREATE_DATE`, `ACCOUNT_STATE`, `LEVEL`) VALUES
(1, 'ADMIN', 'ADMIN', NULL, '2024-05-14', 1, 10);

-- --------------------------------------------------------

--
-- 테이블 구조 `ASSY_PART`
--

CREATE TABLE `ASSY_PART` (
  `ID` int(11) NOT NULL,
  `ASSY_PART_NAME` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 테이블의 덤프 데이터 `ASSY_PART`
--

INSERT INTO `ASSY_PART` (`ID`, `ASSY_PART_NAME`) VALUES
(2, 'CAB'),
(3, 'CENTER'),
(1, 'DAB'),
(4, 'KAB'),
(6, 'PAB'),
(5, 'SAB');

-- --------------------------------------------------------

--
-- 테이블 구조 `ASSY_SUB_PART`
--

CREATE TABLE `ASSY_SUB_PART` (
  `ID` int(11) NOT NULL,
  `ASSY_SUB_NAME` varchar(30) NOT NULL,
  `CUSIN_NO` varchar(30) NOT NULL,
  `FOLDING_NO` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 테이블의 덤프 데이터 `ASSY_SUB_PART`
--

INSERT INTO `ASSY_SUB_PART` (`ID`, `ASSY_SUB_NAME`, `CUSIN_NO`, `FOLDING_NO`) VALUES
(1, 'TDCV', 'AAA', NULL),
(2, 'EU', 'AAA', NULL),
(3, 'VN', 'BBB', NULL);

-- --------------------------------------------------------

--
-- 테이블 구조 `CAR`
--

CREATE TABLE `CAR` (
  `ID` int(10) NOT NULL,
  `CAR_NAME` varchar(30) NOT NULL,
  `CAR_DESCRIPTION` varchar(30) DEFAULT NULL,
  `CAR_CODE` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 테이블의 덤프 데이터 `CAR`
--

INSERT INTO `CAR` (`ID`, `CAR_NAME`, `CAR_DESCRIPTION`, `CAR_CODE`) VALUES
(1, 'TDCV', NULL, NULL),
(2, 'VF33', NULL, NULL),
(3, '34', NULL, NULL),
(4, 'VF35', NULL, NULL),
(5, 'VF36', NULL, NULL);

-- --------------------------------------------------------

--
-- 테이블 구조 `JAEDAN_PART`
--

CREATE TABLE `JAEDAN_PART` (
  `ID` int(10) NOT NULL,
  `JAEDAN_PART_NAME` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 테이블의 덤프 데이터 `JAEDAN_PART`
--

INSERT INTO `JAEDAN_PART` (`ID`, `JAEDAN_PART_NAME`) VALUES
(5, 'CAB TAP'),
(4, 'CAB 인어백'),
(6, 'CENTER 메인'),
(7, 'CENTER 테더'),
(3, 'DAB FRONT'),
(2, 'DAB REAR'),
(8, 'KAB 메인'),
(9, 'KAB 테더'),
(1, 'LD LAB'),
(13, 'PAB SR'),
(14, 'PABAB 메인'),
(10, 'SAB LH 메인'),
(12, 'SAB LH 태더'),
(11, 'SAB RH 메인');

-- --------------------------------------------------------

--
-- 테이블 구조 `JAEDAN_REGIST`
--

CREATE TABLE `JAEDAN_REGIST` (
  `NO` int(11) NOT NULL,
  `WORK_ORDER_NO` int(10) NOT NULL,
  `WONDAN_STORE` int(10) NOT NULL,
  `WONDAN_MANAGER_NO` varchar(10) NOT NULL,
  `Y_COUNT` int(10) NOT NULL,
  `MARKS` int(10) NOT NULL,
  `COUNT` int(10) NOT NULL,
  `DEFECTIVE` int(10) NOT NULL,
  `CREATE_DATE` date NOT NULL DEFAULT current_timestamp(),
  `WORK_DATE` date NOT NULL DEFAULT current_timestamp(),
  `REG_ACCOUNT` int(10) NOT NULL,
  `STATE` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 테이블의 덤프 데이터 `JAEDAN_REGIST`
--

INSERT INTO `JAEDAN_REGIST` (`NO`, `WORK_ORDER_NO`, `WONDAN_STORE`, `WONDAN_MANAGER_NO`, `Y_COUNT`, `MARKS`, `COUNT`, `DEFECTIVE`, `CREATE_DATE`, `WORK_DATE`, `REG_ACCOUNT`, `STATE`) VALUES
(1, 1, 1, '1', 1, 1, 1, 1, '2024-05-14', '2024-05-14', 1, 0);

-- --------------------------------------------------------

--
-- 테이블 구조 `WONDAN`
--

CREATE TABLE `WONDAN` (
  `ID` int(10) NOT NULL,
  `WONDAN_NAME` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 테이블의 덤프 데이터 `WONDAN`
--

INSERT INTO `WONDAN` (`ID`, `WONDAN_NAME`) VALUES
(6, 'SR4K'),
(2, 'SRH2'),
(3, 'SRLT'),
(1, 'UC49'),
(5, 'UC53'),
(7, 'UCNK'),
(4, 'UCTA');

-- --------------------------------------------------------

--
-- 테이블 구조 `WONDAN_STORE`
--

CREATE TABLE `WONDAN_STORE` (
  `NO` int(11) NOT NULL,
  `REG_DATE` date NOT NULL,
  `WONDAN_NAME` varchar(50) NOT NULL,
  `LOT_NO` varchar(50) NOT NULL,
  `LENGTH` int(11) NOT NULL,
  `REAL_LENGTH` int(11) NOT NULL,
  `SUPPLY` varchar(50) DEFAULT NULL,
  `REG_ACCOUNT` varchar(50) DEFAULT NULL,
  `DEFECTIVE_LENGTH` int(11) DEFAULT NULL,
  `STATE` int(11) NOT NULL DEFAULT 0,
  `STATE_DATE` date NOT NULL,
  `ETC` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 테이블의 덤프 데이터 `WONDAN_STORE`
--

INSERT INTO `WONDAN_STORE` (`NO`, `REG_DATE`, `WONDAN_NAME`, `LOT_NO`, `LENGTH`, `REAL_LENGTH`, `SUPPLY`, `REG_ACCOUNT`, `DEFECTIVE_LENGTH`, `STATE`, `STATE_DATE`, `ETC`) VALUES
(1, '2024-05-01', 'SR4K', 'afdasfasf', 1, 1, NULL, NULL, NULL, 0, '2024-05-14', NULL);

-- --------------------------------------------------------

--
-- 테이블 구조 `WORKING_ORDER`
--

CREATE TABLE `WORKING_ORDER` (
  `NO` int(10) NOT NULL,
  `WORKING_PART` int(10) NOT NULL,
  `COUNT` int(10) NOT NULL,
  `CREATE_DATA` date NOT NULL DEFAULT current_timestamp(),
  `STATE` int(10) NOT NULL DEFAULT 1,
  `ORDER_ACCOUNT` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 테이블의 덤프 데이터 `WORKING_ORDER`
--

INSERT INTO `WORKING_ORDER` (`NO`, `WORKING_PART`, `COUNT`, `CREATE_DATA`, `STATE`, `ORDER_ACCOUNT`) VALUES
(1, 6, 1, '2024-05-14', 1, 'ADMIN'),
(2, 6, 1, '2024-05-14', 1, 'ADMIN');

-- --------------------------------------------------------

--
-- 테이블 구조 `WORKING_PART`
--

CREATE TABLE `WORKING_PART` (
  `ID` int(10) NOT NULL,
  `ASSY_PART_NAME` varchar(30) NOT NULL,
  `ASSY_SUB_PART_NAME` varchar(30) NOT NULL,
  `C_PUMBUN` varchar(30) DEFAULT NULL,
  `F_PUMBUN` varchar(30) DEFAULT NULL,
  `JAEDAN_PART_NAME` varchar(30) NOT NULL,
  `WONDAN_NAME` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 테이블의 덤프 데이터 `WORKING_PART`
--

INSERT INTO `WORKING_PART` (`ID`, `ASSY_PART_NAME`, `ASSY_SUB_PART_NAME`, `C_PUMBUN`, `F_PUMBUN`, `JAEDAN_PART_NAME`, `WONDAN_NAME`) VALUES
(1, 'DAB', 'TDCV', NULL, NULL, 'LD LAB', 'UC49'),
(2, 'DAB', 'VN', NULL, NULL, 'DAB REAR', 'UC49'),
(3, 'DAB', 'VN', NULL, NULL, 'DAB FRONT', 'UC49'),
(4, 'DAB', 'EU', NULL, NULL, 'DAB FRONT', 'SRH2'),
(5, 'DAB', 'EU', NULL, NULL, 'DAB REAR', 'UC49'),
(6, 'CAB', 'EU', NULL, NULL, 'CAB 인어백', 'SRLT'),
(7, 'CAB', 'EU', NULL, NULL, 'CAB TAP', 'UCTA'),
(8, 'CENTER', 'EU', NULL, NULL, 'CENTER 메인', 'SRH2'),
(9, 'CENTER', 'EU', NULL, NULL, 'CENTER 테더', 'UC53'),
(10, 'KAB', 'EU', NULL, NULL, 'KAB 메인', 'SRH2'),
(11, 'KAB', 'EU', NULL, NULL, 'KAB 테더', 'UC49'),
(12, 'SAB', 'EU', NULL, NULL, 'SAB LH 메인', 'SRH2'),
(13, 'SAB', 'EU', NULL, NULL, 'SAB RH 메인', 'UC53'),
(14, 'SAB', 'EU', NULL, NULL, 'SAB LH 태더', 'UC53'),
(15, 'PAB', 'EU', NULL, NULL, 'PABAB 메인', 'UCNK'),
(16, 'PAB', 'EU', NULL, NULL, 'PAB SR', 'SR4K');

--
-- 덤프된 테이블의 인덱스
--

--
-- 테이블의 인덱스 `ACCOUNT`
--
ALTER TABLE `ACCOUNT`
  ADD PRIMARY KEY (`NO`),
  ADD UNIQUE KEY `ACCOUNT_ID` (`ID`);

--
-- 테이블의 인덱스 `ASSY_PART`
--
ALTER TABLE `ASSY_PART`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `ASSY_PART_NAME` (`ASSY_PART_NAME`);

--
-- 테이블의 인덱스 `ASSY_SUB_PART`
--
ALTER TABLE `ASSY_SUB_PART`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `ASY_SUB_NAME` (`ASSY_SUB_NAME`),
  ADD KEY `FOLDING_NO` (`FOLDING_NO`) USING BTREE,
  ADD KEY `CUSIN_NO` (`CUSIN_NO`);

--
-- 테이블의 인덱스 `CAR`
--
ALTER TABLE `CAR`
  ADD PRIMARY KEY (`ID`);

--
-- 테이블의 인덱스 `JAEDAN_PART`
--
ALTER TABLE `JAEDAN_PART`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `JAEDAN` (`JAEDAN_PART_NAME`) USING BTREE;

--
-- 테이블의 인덱스 `JAEDAN_REGIST`
--
ALTER TABLE `JAEDAN_REGIST`
  ADD PRIMARY KEY (`NO`),
  ADD KEY `WORK_ORDER_NO` (`WORK_ORDER_NO`);

--
-- 테이블의 인덱스 `WONDAN`
--
ALTER TABLE `WONDAN`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `WONDAN_NAME` (`WONDAN_NAME`);

--
-- 테이블의 인덱스 `WONDAN_STORE`
--
ALTER TABLE `WONDAN_STORE`
  ADD PRIMARY KEY (`NO`),
  ADD KEY `WONDAN_NAME` (`WONDAN_NAME`);

--
-- 테이블의 인덱스 `WORKING_ORDER`
--
ALTER TABLE `WORKING_ORDER`
  ADD PRIMARY KEY (`NO`),
  ADD KEY `WORKING_ORDER_ACCOUNT` (`ORDER_ACCOUNT`),
  ADD KEY `WORKING_PART` (`WORKING_PART`);

--
-- 테이블의 인덱스 `WORKING_PART`
--
ALTER TABLE `WORKING_PART`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `FK_ASSY_PART_NAME` (`ASSY_PART_NAME`),
  ADD KEY `FK_ASSY_SUB_PART_NAME` (`ASSY_SUB_PART_NAME`),
  ADD KEY `FK_ASSY_C_PUMBUN` (`C_PUMBUN`),
  ADD KEY `FK_ASSY_F_PUMBUN` (`F_PUMBUN`),
  ADD KEY `FK_JAEDAN_PART_NAME` (`JAEDAN_PART_NAME`),
  ADD KEY `FK_WONDAN_NAME` (`WONDAN_NAME`),
  ADD KEY `WORKING_PART` (`ID`);

--
-- 덤프된 테이블의 AUTO_INCREMENT
--

--
-- 테이블의 AUTO_INCREMENT `ACCOUNT`
--
ALTER TABLE `ACCOUNT`
  MODIFY `NO` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- 테이블의 AUTO_INCREMENT `ASSY_PART`
--
ALTER TABLE `ASSY_PART`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- 테이블의 AUTO_INCREMENT `ASSY_SUB_PART`
--
ALTER TABLE `ASSY_SUB_PART`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- 테이블의 AUTO_INCREMENT `CAR`
--
ALTER TABLE `CAR`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- 테이블의 AUTO_INCREMENT `JAEDAN_PART`
--
ALTER TABLE `JAEDAN_PART`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- 테이블의 AUTO_INCREMENT `JAEDAN_REGIST`
--
ALTER TABLE `JAEDAN_REGIST`
  MODIFY `NO` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- 테이블의 AUTO_INCREMENT `WONDAN`
--
ALTER TABLE `WONDAN`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- 테이블의 AUTO_INCREMENT `WONDAN_STORE`
--
ALTER TABLE `WONDAN_STORE`
  MODIFY `NO` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- 테이블의 AUTO_INCREMENT `WORKING_ORDER`
--
ALTER TABLE `WORKING_ORDER`
  MODIFY `NO` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- 테이블의 AUTO_INCREMENT `WORKING_PART`
--
ALTER TABLE `WORKING_PART`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- 덤프된 테이블의 제약사항
--

--
-- 테이블의 제약사항 `JAEDAN_REGIST`
--
ALTER TABLE `JAEDAN_REGIST`
  ADD CONSTRAINT `WORK_ORDER_NO` FOREIGN KEY (`WORK_ORDER_NO`) REFERENCES `WORKING_ORDER` (`NO`);

--
-- 테이블의 제약사항 `WONDAN_STORE`
--
ALTER TABLE `WONDAN_STORE`
  ADD CONSTRAINT `WONDAN_NAME` FOREIGN KEY (`WONDAN_NAME`) REFERENCES `WONDAN` (`WONDAN_NAME`);

--
-- 테이블의 제약사항 `WORKING_ORDER`
--
ALTER TABLE `WORKING_ORDER`
  ADD CONSTRAINT `ACCOUNT` FOREIGN KEY (`ORDER_ACCOUNT`) REFERENCES `ACCOUNT` (`ID`),
  ADD CONSTRAINT `WORKING_PART` FOREIGN KEY (`WORKING_PART`) REFERENCES `WORKING_PART` (`ID`);

--
-- 테이블의 제약사항 `WORKING_PART`
--
ALTER TABLE `WORKING_PART`
  ADD CONSTRAINT `FK_ASSY_C_PUMBUN` FOREIGN KEY (`C_PUMBUN`) REFERENCES `ASSY_SUB_PART` (`CUSIN_NO`),
  ADD CONSTRAINT `FK_ASSY_F_PUMBUN` FOREIGN KEY (`F_PUMBUN`) REFERENCES `ASSY_SUB_PART` (`FOLDING_NO`),
  ADD CONSTRAINT `FK_ASSY_PART_NAME` FOREIGN KEY (`ASSY_PART_NAME`) REFERENCES `ASSY_PART` (`ASSY_PART_NAME`),
  ADD CONSTRAINT `FK_ASSY_SUB_PART_NAME` FOREIGN KEY (`ASSY_SUB_PART_NAME`) REFERENCES `ASSY_SUB_PART` (`ASSY_SUB_NAME`),
  ADD CONSTRAINT `FK_JAEDAN_PART_NAME` FOREIGN KEY (`JAEDAN_PART_NAME`) REFERENCES `JAEDAN_PART` (`JAEDAN_PART_NAME`),
  ADD CONSTRAINT `FK_WONDAN_NAME` FOREIGN KEY (`WONDAN_NAME`) REFERENCES `WONDAN` (`WONDAN_NAME`);
