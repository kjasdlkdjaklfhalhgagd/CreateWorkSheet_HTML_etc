<?php /* Smarty version Smarty-3.1.18, created on 2014-05-16 08:54:49
         compiled from "./templates/create.tpl" */ ?>
<?php /*%%SmartyHeaderCode:338402269536e71ea99eaf5-07853752%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'ade51b064c166bfc6cce06f12c20ce3ffb268155' => 
    array (
      0 => './templates/create.tpl',
      1 => 1400223202,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '338402269536e71ea99eaf5-07853752',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1.18',
  'unifunc' => 'content_536e71ea9cac57_49350325',
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_536e71ea9cac57_49350325')) {function content_536e71ea9cac57_49350325($_smarty_tpl) {?><html>
<head>
<title>アンケート作成</title>
<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js"></script>
<script type="text/javascript" src="action.js"></script>
</head>
<body>
<br />
<h1>アンケートを作ります</h1>
<br />
<form action="dataView.php" method="post">
	アンケートの名前を入力してください : <input type="text" name="name" onKeyPress="return checkEnter(event);" /><br />
	<div id="q1"></div><br />
	<input type="button" value="質問を追加する" onclick="addQuestionDiv();" />
	<input type="button" value="最後の質問を削除" onclick="killQuestionDiv();" /><br />
	<br />
	<input type="submit" value="送信" />
</form>

</body>
</html><?php }} ?>
