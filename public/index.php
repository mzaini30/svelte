<?php
	$judul = 'Svelte Template';
	$deskripsi = 'Starter tools for building amazing site!';
	$cover = 'https://saitama.my.id/dist/jean.jpg'; // harus link lengkap
	$icon = '/dist/ungu.png';
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset='utf-8'>
	<meta name='viewport' content='width=device-width,initial-scale=1'>

	<title><?= $judul ?></title>
	<meta name="description" content="<?= $deskripsi ?>">
	<meta property="og:image" content="<?= $cover ?>">
	<link rel='icon' type='image/png' href='<?= $icon ?>'>
	
	<meta name="twitter:card" content="summary_large_image">
	<meta name="twitter:site" content="@blogodop">
	<meta name="twitter:creator" content="@blogodop">
	<meta name="twitter:title" content="<?= $judul ?>">
	<meta name="twitter:description" content="<?= $deskripsi ?>">
	<meta name="twitter:image" content="<?= $cover ?>">

	<script defer src='/main.js?<?= md5(rand()) ?>' type="module"></script>
</head>
<body>
</body>
</html>
