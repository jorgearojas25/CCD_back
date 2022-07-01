-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema ccddb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `ccddb` ;

-- -----------------------------------------------------
-- Schema ccddb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `ccddb` DEFAULT CHARACTER SET utf8 ;
USE `ccddb` ;

-- -----------------------------------------------------
-- Table `ccddb`.`rol`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ccddb`.`rol` ;

CREATE TABLE IF NOT EXISTS `ccddb`.`rol` (
  `id_rol` INT NOT NULL AUTO_INCREMENT,
  `rol` VARCHAR(30) NOT NULL,
  `activo` TINYINT NOT NULL DEFAULT 1,
  PRIMARY KEY (`id_rol`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ccddb`.`usuario`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ccddb`.`usuario` ;

CREATE TABLE IF NOT EXISTS `ccddb`.`usuario` (
  `id_usuario` INT NOT NULL AUTO_INCREMENT,
  `documento` VARCHAR(15) NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  `contrasenia` VARCHAR(45) NOT NULL,
  `activo` TINYINT NOT NULL DEFAULT 1,
  `id_rol` INT NULL,
  `cuenta_pago` VARCHAR(45) NULL,
  PRIMARY KEY (`id_usuario`),
  INDEX `fk_usuario_rol1_idx` (`id_rol` ASC) VISIBLE,
  CONSTRAINT `fk_usuario_rol1`
    FOREIGN KEY (`id_rol`)
    REFERENCES `ccddb`.`rol` (`id_rol`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ccddb`.`ingrediente`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ccddb`.`ingrediente` ;

CREATE TABLE IF NOT EXISTS `ccddb`.`ingrediente` (
  `id_ingrediente` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `descripcion` VARCHAR(45) NOT NULL,
  `imagen` VARCHAR(200) NULL,
  `activo` TINYINT NOT NULL DEFAULT 1,
  `valor` DOUBLE NOT NULL DEFAULT 0,
  PRIMARY KEY (`id_ingrediente`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ccddb`.`tipo_producto`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ccddb`.`tipo_producto` ;

CREATE TABLE IF NOT EXISTS `ccddb`.`tipo_producto` (
  `id_tipo_producto` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `activo` TINYINT NOT NULL DEFAULT 1,
  PRIMARY KEY (`id_tipo_producto`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ccddb`.`restaurante`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ccddb`.`restaurante` ;

CREATE TABLE IF NOT EXISTS `ccddb`.`restaurante` (
  `id_restaurante` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `documento` VARCHAR(15) NOT NULL,
  `constrasenia` VARCHAR(45) NOT NULL,
  `imagen` VARCHAR(45) NULL,
  `activo` TINYINT NOT NULL DEFAULT 1,
  `cuenta_pago` VARCHAR(45) NULL,
  PRIMARY KEY (`id_restaurante`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ccddb`.`producto`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ccddb`.`producto` ;

CREATE TABLE IF NOT EXISTS `ccddb`.`producto` (
  `id_producto` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `descripcion` VARCHAR(45) NOT NULL,
  `imagen` VARCHAR(200) NULL,
  `activo` TINYINT NOT NULL DEFAULT 1,
  `valor` DOUBLE NOT NULL DEFAULT 0,
  `id_tipo_producto` INT NOT NULL,
  `id_restaurante` INT NOT NULL,
  PRIMARY KEY (`id_producto`),
  INDEX `fk_producto_tipo_producto1_idx` (`id_tipo_producto` ASC) VISIBLE,
  INDEX `fk_producto_restaurante1_idx` (`id_restaurante` ASC) VISIBLE,
  CONSTRAINT `fk_producto_tipo_producto1`
    FOREIGN KEY (`id_tipo_producto`)
    REFERENCES `ccddb`.`tipo_producto` (`id_tipo_producto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_producto_restaurante1`
    FOREIGN KEY (`id_restaurante`)
    REFERENCES `ccddb`.`restaurante` (`id_restaurante`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ccddb`.`menu`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ccddb`.`menu` ;

CREATE TABLE IF NOT EXISTS `ccddb`.`menu` (
  `id_menu` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `descripcion` VARCHAR(45) NOT NULL,
  `imagen` VARCHAR(45) NULL,
  `activo` TINYINT NOT NULL DEFAULT 1,
  `id_restaurante` INT NOT NULL,
  PRIMARY KEY (`id_menu`),
  INDEX `fk_menu_restaurante1_idx` (`id_restaurante` ASC) VISIBLE,
  CONSTRAINT `fk_menu_restaurante1`
    FOREIGN KEY (`id_restaurante`)
    REFERENCES `ccddb`.`restaurante` (`id_restaurante`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ccddb`.`compra`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ccddb`.`compra` ;

CREATE TABLE IF NOT EXISTS `ccddb`.`compra` (
  `id_compra` INT NOT NULL AUTO_INCREMENT,
  `fecha` DATETIME NOT NULL,
  `valor_total` DOUBLE NOT NULL,
  `id_usuario` INT NOT NULL,
  PRIMARY KEY (`id_compra`),
  INDEX `fk_compra_usuario1_idx` (`id_usuario` ASC) VISIBLE,
  CONSTRAINT `fk_compra_usuario1`
    FOREIGN KEY (`id_usuario`)
    REFERENCES `ccddb`.`usuario` (`id_usuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ccddb`.`producto_menu`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ccddb`.`producto_menu` ;

CREATE TABLE IF NOT EXISTS `ccddb`.`producto_menu` (
  `id_producto_menu` INT NOT NULL AUTO_INCREMENT,
  `id_producto` INT NOT NULL,
  `id_menu` INT NOT NULL,
  `cantidad` INT NOT NULL,
  `editable` TINYINT NOT NULL DEFAULT 0,
  PRIMARY KEY (`id_producto_menu`),
  INDEX `fk_productos_menu_producto1_idx` (`id_producto` ASC) VISIBLE,
  INDEX `fk_productos_menu_menu1_idx` (`id_menu` ASC) VISIBLE,
  CONSTRAINT `fk_productos_menu_producto1`
    FOREIGN KEY (`id_producto`)
    REFERENCES `ccddb`.`producto` (`id_producto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_productos_menu_menu1`
    FOREIGN KEY (`id_menu`)
    REFERENCES `ccddb`.`menu` (`id_menu`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ccddb`.`ingrediente_menu`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ccddb`.`ingrediente_menu` ;

CREATE TABLE IF NOT EXISTS `ccddb`.`ingrediente_menu` (
  `id_ingrediente_menu` INT NOT NULL AUTO_INCREMENT,
  `cantidad` INT NOT NULL,
  `editable` TINYINT NOT NULL DEFAULT 0,
  `id_menu` INT NOT NULL,
  `id_ingrediente` INT NOT NULL,
  PRIMARY KEY (`id_ingrediente_menu`),
  INDEX `fk_ingredientes_menu_menu1_idx` (`id_menu` ASC) VISIBLE,
  INDEX `fk_ingredientes_menu_ingrediente1_idx` (`id_ingrediente` ASC) VISIBLE,
  CONSTRAINT `fk_ingredientes_menu_menu1`
    FOREIGN KEY (`id_menu`)
    REFERENCES `ccddb`.`menu` (`id_menu`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_ingredientes_menu_ingrediente1`
    FOREIGN KEY (`id_ingrediente`)
    REFERENCES `ccddb`.`ingrediente` (`id_ingrediente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ccddb`.`factura`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ccddb`.`factura` ;

CREATE TABLE IF NOT EXISTS `ccddb`.`factura` (
  `id_factura` INT NOT NULL AUTO_INCREMENT,
  `cantidad` INT NOT NULL,
  `valor_total` DOUBLE NOT NULL DEFAULT 0,
  `id_compra` INT NOT NULL,
  `id_producto_menu` INT NOT NULL,
  `id_ingrediente_menu` INT NOT NULL,
  `es_producto` TINYINT NOT NULL,
  PRIMARY KEY (`id_factura`),
  INDEX `fk_factura_compra1_idx` (`id_compra` ASC) VISIBLE,
  INDEX `fk_factura_producto_menu1_idx` (`id_producto_menu` ASC) VISIBLE,
  INDEX `fk_factura_ingrediente_menu1_idx` (`id_ingrediente_menu` ASC) VISIBLE,
  CONSTRAINT `fk_factura_compra1`
    FOREIGN KEY (`id_compra`)
    REFERENCES `ccddb`.`compra` (`id_compra`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_factura_producto_menu1`
    FOREIGN KEY (`id_producto_menu`)
    REFERENCES `ccddb`.`producto_menu` (`id_producto_menu`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_factura_ingrediente_menu1`
    FOREIGN KEY (`id_ingrediente_menu`)
    REFERENCES `ccddb`.`ingrediente_menu` (`id_ingrediente_menu`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
