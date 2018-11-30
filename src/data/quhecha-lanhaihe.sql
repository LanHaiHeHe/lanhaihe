/*
Navicat MySQL Data Transfer

Source Server         : mydatabase
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : quhecha-lanhaihe

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-11-30 14:13:02
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for order_inf
-- ----------------------------
DROP TABLE IF EXISTS `order_inf`;
CREATE TABLE `order_inf` (
  `id` int(11) NOT NULL,
  `shopname` varchar(255) DEFAULT NULL,
  `tu1` varchar(255) DEFAULT NULL,
  `nowprice` decimal(10,2) DEFAULT NULL,
  `markprice` decimal(10,2) DEFAULT NULL,
  `num` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of order_inf
-- ----------------------------
INSERT INTO `order_inf` VALUES ('14', '【奇松】一级轩辕峰雨前有机黄山毛峰礼盒300g', 'shop12_tu1.jpg', '228.00', '300.00', '1');
INSERT INTO `order_inf` VALUES ('24', '【奇松】一级轩辕峰雨前有机黄山毛峰礼盒300g', 'shop12_tu1.jpg', '228.00', '300.00', '2');

-- ----------------------------
-- Table structure for shop_inf
-- ----------------------------
DROP TABLE IF EXISTS `shop_inf`;
CREATE TABLE `shop_inf` (
  `id` int(255) NOT NULL,
  `shopname` varchar(255) NOT NULL,
  `nowprice` float(10,2) DEFAULT NULL,
  `hechaprice` varchar(255) DEFAULT NULL,
  `markprice` varchar(255) DEFAULT NULL,
  `tu1` varchar(255) DEFAULT NULL,
  `tu2` varchar(255) DEFAULT NULL,
  `tu3` varchar(255) DEFAULT NULL,
  `tu4` varchar(255) DEFAULT NULL,
  `tu5` varchar(255) DEFAULT NULL,
  `pnum` int(10) DEFAULT NULL,
  `salenum` int(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of shop_inf
-- ----------------------------
INSERT INTO `shop_inf` VALUES ('1', '【趣呵茶】迷你自助机', '3980.00', '3980', '4980', 'shop1_tu1.jpg', 'shop1_tu2.jpg', 'shop1_tu3.jpg', 'shop1_tu4.jpg', 'shop1_tu5.jpg', '4', '23');
INSERT INTO `shop_inf` VALUES ('2', '【趣呵茶】时尚商务机', '4980.00', '4980', '5980', 'shop2_tu1.jpg', 'shop2_tu2.jpg', 'shop2_tu3.jpg', 'shop2_tu4.jpg', 'shop2_tu5.jpg', '7', '35');
INSERT INTO `shop_inf` VALUES ('3', '【趣呵茶】现调机', '4981.00', '4981', '5981', 'shop1_tu1.jpg', 'shop1_tu2.jpg', 'shop1_tu3.jpg', 'shop1_tu4.jpg', 'shop1_tu5.jpg', '10', '47');
INSERT INTO `shop_inf` VALUES ('4', '【趣呵茶】茶饮机', '4982.00', '4982', '5982', 'shop2_tu1.jpg', 'shop2_tu2.jpg', 'shop2_tu3.jpg', 'shop2_tu4.jpg', 'shop2_tu5.jpg', '13', '59');
INSERT INTO `shop_inf` VALUES ('5', '【和茶原叶】私享新会小青柑罐装100g*2', '175.00', '198', '298', 'shop3_tu1.jpg', 'shop3_tu2.jpg', 'shop3_tu3.jpg', 'shop3_tu4.jpg', 'shop3_tu5.jpg', '16', '13');
INSERT INTO `shop_inf` VALUES ('6', '【滋恩】御品大红袍礼盒62.5g*2', '99.00', '175', '298', 'shop4_tu1.jpg', 'shop4_tu2.jpg', 'shop4_tu3.jpg', 'shop4_tu4.jpg', 'shop4_tu5.jpg', '19', '83');
INSERT INTO `shop_inf` VALUES ('7', '【和茶原叶】私享铁观音清香型盒装500g', '128.00', '188', '198', 'shop5_tu1.jpg', 'shop5_tu2.jpg', 'shop5_tu3.jpg', 'shop5_tu4.jpg', 'shop5_tu5.jpg', '22', '74');
INSERT INTO `shop_inf` VALUES ('8', '【滋恩】一级水仙 长圆罐礼袋装 150g*2', '169.00', '178', '450', 'shop6_tu1.jpg', 'shop6_tu2.jpg', 'shop6_tu3.jpg', 'shop6_tu4.jpg', 'shop6_tu5.jpg', '25', '107');
INSERT INTO `shop_inf` VALUES ('9', '和茶原叶 贵州绿茶绿明珠 尊品礼盒 150g*2', '233.00', '388', '485', 'shop7_tu1.jpg', 'shop7_tu2.jpg', 'shop7_tu3.jpg', 'shop7_tu4.jpg', 'shop7_tu5.jpg', '28', '56');
INSERT INTO `shop_inf` VALUES ('10', '【和茶原叶】碧螺春绿茶2罐装250g', '128.00', '188', '198', 'shop8_tu1.jpg', 'shop8_tu2.jpg', 'shop8_tu3.jpg', 'shop8_tu4.jpg', 'shop8_tu5.jpg', '31', '131');
INSERT INTO `shop_inf` VALUES ('11', '【滋恩】一级碧螺春罐装70g', '45.00', '68', '138', 'shop9_tu1.jpg', 'shop9_tu2.jpg', 'shop9_tu3.jpg', 'shop9_tu4.jpg', 'shop9_tu5.jpg', '34', '143');
INSERT INTO `shop_inf` VALUES ('12', '【和茶原叶】贵州绿茶绿明珠罐装200g', '98.00', '188', '198', 'shop10_tu1.jpg', 'shop10_tu2.jpg', 'shop10_tu3.jpg', 'shop10_tu4.jpg', 'shop10_tu5.jpg', '37', '57');
INSERT INTO `shop_inf` VALUES ('13', '【滋恩】特级茉莉花茶 长圆罐礼袋装 125g*2', '99.00', '158', '398', 'shop11_tu1.jpg', 'shop11_tu2.jpg', 'shop11_tu3.jpg', 'shop11_tu4.jpg', 'shop11_tu5.jpg', '40', '167');
INSERT INTO `shop_inf` VALUES ('14', '【奇松】一级轩辕峰雨前有机黄山毛峰礼盒300g', '228.00', '268', '300', 'shop12_tu1.jpg', 'shop12_tu2.jpg', 'shop12_tu3.jpg', 'shop12_tu4.jpg', 'shop12_tu5.jpg', '43', '179');
INSERT INTO `shop_inf` VALUES ('15', '【和茶原叶】私享新会小青柑罐装100g*2', '175.00', '198', '298', 'shop3_tu1.jpg', 'shop3_tu2.jpg', 'shop3_tu3.jpg', 'shop3_tu4.jpg', 'shop3_tu5.jpg', '46', '323');
INSERT INTO `shop_inf` VALUES ('16', '【滋恩】御品大红袍礼盒62.5g*2', '99.00', '175', '298', 'shop4_tu1.jpg', 'shop4_tu2.jpg', 'shop4_tu3.jpg', 'shop4_tu4.jpg', 'shop4_tu5.jpg', '49', '203');
INSERT INTO `shop_inf` VALUES ('17', '【和茶原叶】私享铁观音清香型盒装500g', '128.00', '188', '198', 'shop5_tu1.jpg', 'shop5_tu2.jpg', 'shop5_tu3.jpg', 'shop5_tu4.jpg', 'shop5_tu5.jpg', '52', '78');
INSERT INTO `shop_inf` VALUES ('18', '【滋恩】一级水仙 长圆罐礼袋装 150g*2', '169.00', '178', '450', 'shop6_tu1.jpg', 'shop6_tu2.jpg', 'shop6_tu3.jpg', 'shop6_tu4.jpg', 'shop6_tu5.jpg', '55', '227');
INSERT INTO `shop_inf` VALUES ('19', '和茶原叶 贵州绿茶绿明珠 尊品礼盒 150g*2', '233.00', '388', '485', 'shop7_tu1.jpg', 'shop7_tu2.jpg', 'shop7_tu3.jpg', 'shop7_tu4.jpg', 'shop7_tu5.jpg', '58', '68');
INSERT INTO `shop_inf` VALUES ('20', '【和茶原叶】碧螺春绿茶2罐装250g', '128.00', '188', '198', 'shop8_tu1.jpg', 'shop8_tu2.jpg', 'shop8_tu3.jpg', 'shop8_tu4.jpg', 'shop8_tu5.jpg', '61', '671');
INSERT INTO `shop_inf` VALUES ('21', '【滋恩】一级碧螺春罐装70g', '45.00', '68', '138', 'shop9_tu1.jpg', 'shop9_tu2.jpg', 'shop9_tu3.jpg', 'shop9_tu4.jpg', 'shop9_tu5.jpg', '64', '263');
INSERT INTO `shop_inf` VALUES ('22', '【和茶原叶】贵州绿茶绿明珠罐装200g', '98.00', '188', '198', 'shop10_tu1.jpg', 'shop10_tu2.jpg', 'shop10_tu3.jpg', 'shop10_tu4.jpg', 'shop10_tu5.jpg', '67', '336');
INSERT INTO `shop_inf` VALUES ('23', '【滋恩】特级茉莉花茶 长圆罐礼袋装 125g*2', '99.00', '158', '398', 'shop11_tu1.jpg', 'shop11_tu2.jpg', 'shop11_tu3.jpg', 'shop11_tu4.jpg', 'shop11_tu5.jpg', '70', '287');
INSERT INTO `shop_inf` VALUES ('24', '【奇松】一级轩辕峰雨前有机黄山毛峰礼盒300g', '228.00', '268', '300', 'shop12_tu1.jpg', 'shop12_tu2.jpg', 'shop12_tu3.jpg', 'shop12_tu4.jpg', 'shop12_tu5.jpg', '73', '57');

-- ----------------------------
-- Table structure for user_inf
-- ----------------------------
DROP TABLE IF EXISTS `user_inf`;
CREATE TABLE `user_inf` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `loginname` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=29 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_inf
-- ----------------------------
INSERT INTO `user_inf` VALUES ('27', '15361375830', '123456', '2018-11-28 10:39:33', 'hahha');
INSERT INTO `user_inf` VALUES ('28', '15361375831', '123456', '2018-11-29 16:54:36', '朱俊涛');
SET FOREIGN_KEY_CHECKS=1;
