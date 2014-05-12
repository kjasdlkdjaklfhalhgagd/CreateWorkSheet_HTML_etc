// ページが読み込まれたら動かす（1つ目の質問を表示する）
$(function()
{
	addQuestion("div#q1");
});

/**
 * セレクトボックスが設定されたら呼び出される関数。
 * @param {object} セレクトボックスオブジェクト
 */
function changSelect(selectBox)
{
	var selectNum = selectBox.options[selectBox.selectedIndex].value;
}

/**
 * 質問を囲うdivを表示します。
 */
function addQuestionDiv()
{
	var MAX_QUESTION = 20;

	for(var i = 2; i <= MAX_QUESTION + 1; i++)
	{
		// 質問iが無かったら
		if(!(0 < $("div#q"+i).size()))
		{
			if(i == MAX_QUESTION + 1)
			{
				alert("20個以上質問は作れません");
			}
			else
			{
				var afterNum = i - 1;
				// 現在ある最後の質問の要素の後ろに新しく作る
				$("div#q"+afterNum).after("<div id='q"+i+"'></div>");
				addQuestion("div#q"+i);
			}
			break;
		}
	}
}

/**
 * 質問を追加します。
 * @param {String} 追加するdiv要素のid名
 */
function addQuestion(idName)
{
	// idNameから"div # q"を取り除いた物を数値にする = 質問番号
	var questionNum = parseInt(idName.replace(/div|#|q/g,""));

	/*
		質問設定画面を出力するhtml
		<br />
		質問1 : <input type='text' name='q1' /><br />
		質問タイプ : 
		<select name='qType' size='1' onchange='changSelect(this);'>
		<option value='1' label='ラジオボックス（どれか1つ回答）'>ラジオボックス（どれか1つ回答）</option>
		<option value='2' label='チェックボックス（複数回答）'>チェックボックス（複数回答）</option>
		<option value='3' label='自由回答（回答者が書き込む）'>自由回答（回答者が書き込む）</option>
		</select>
	*/
	var questinHTML = "<br />質問"+questionNum+" : <input type='text' name='q"+questionNum+"'/><br />質問タイプ : <select name='qType' size='1' onchange='changSelect(this);'><option value='1' label='ラジオボックス（どれか1つ回答）'>ラジオボックス（どれか1つ回答）</option><option value='2' label='チェックボックス（複数回答）'>チェックボックス（複数回答）</option><option value='3' label='自由回答（回答者が書き込む）'>自由回答（回答者が書き込む）</option></select>";

	$(idName).prepend(questinHTML);
}