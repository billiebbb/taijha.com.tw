<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'taijha');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '50505050');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'vDL 8O_?6*MH(oT7MgPRr(l]Td.`>+MrzH/>#EN,6%&]`5/[M^vp=dYY7V&.MpbO');
define('SECURE_AUTH_KEY',  ',Aaf(u6:602^TlEe!P}LO,.oKh:TPo?uRXFlz`J(pUpxJWcRnWI7h6D6m^O:l<I)');
define('LOGGED_IN_KEY',    '!LBD?xl81{UC)|e^kZ+1~T^c^XqKDO60s)D$t5#QO&wf3eEa:A4Y0#.) p>Y;r;G');
define('NONCE_KEY',        '_Qq7E9@W!;F:G]o9O{8`;N=NV.tK,Ad}/]*A8=>b&to@+~JYd3+w<B>DL?0X}L]B');
define('AUTH_SALT',        ',|ZEKY^(AiMvYh~yW@1ma^,KRDiPnSQ11hlo#7r$lU-**^0hB|2fq<7AC$jw=&mp');
define('SECURE_AUTH_SALT', '{NXSGD_ JW/C/($r}D<sG/&fKhHv0$59mC*LofpeyZe02p@dE$VGg77%|c;L$F=0');
define('LOGGED_IN_SALT',   'BZ7N1X1O-@a&YMe!Vp4i8DXIlgXcFFoqut7D.EJeDbBl&15]qS]y$8SL%+df=Mu<');
define('NONCE_SALT',       'e^MjoZBcHRpx4R9OB X=8Ei~1*@E(HmVC([j#Z;=(c,U Ox#o-vWmy!8$j$(Lu[4');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
