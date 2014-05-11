<?php
require(dirname( __FILE__ ).'/../Smarty/libs/Smarty.class.php');

$smarty = new Smarty();

$smarty->display('create.tpl');