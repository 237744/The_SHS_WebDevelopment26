-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: May 21, 2026
-- Server version: 8.0.17
-- PHP Version: 7.2.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";

-- Your personalized user database
CREATE DATABASE IF NOT EXISTS user42;

-- Assignment specific database for your weather project
CREATE DATABASE IF NOT EXISTS weather_app;

-- Other standard development databases
CREATE DATABASE IF NOT EXISTS demo;
CREATE DATABASE IF NOT EXISTS shoes;
CREATE DATABASE IF NOT EXISTS wordpress;

COMMIT;