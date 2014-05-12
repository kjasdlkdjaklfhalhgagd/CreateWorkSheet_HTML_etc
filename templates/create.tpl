<html>
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
	アンケートの名前を入力してください : <input type="text" name="name" /><br />
	<div id="q1"></div><br />
	<input type="button" value="質問を追加する" onclick="addQuestionDiv();"><br />
	<br />
	<input type="submit" value="送信" />
	<input type="button" value="最後の質問を削除" onclick="killQuestionDiv();" />
</form>

</body>
</html>