
// グローバル変数
var MAX_QUESTION = 20;


// ページが読み込まれたら動かす（1つ目の質問を表示する）
$(function()
{
	$("div#q1").hide();
	addQuestion("div#q1");
});

/**
 * Enter押されてもsubmitされないようにする
 * @param e {object} イベントハンドラ
 */
 function checkEnter(e)
 {
 	if (!e) var e = window.event;
 
    if(e.keyCode == 13)
    {
        return false;
    }
 }

/**
 * セレクトボックスが設定されたら呼び出される関数。
 * @param {object} セレクトボックスオブジェクト
 */
function changSelect(selectBox)
{
	// 選んだ回答タイプ
	var selectNum = selectBox.options[selectBox.selectedIndex].value;
	// どこのセレクトボックスか
	var selectBoxName = "#qType"+parseInt(selectBox.name.replace(/qType/g,""));

	// 既に表示していたら消す
	if(0 < $(selectBoxName+" div").size())
	{
		$(selectBoxName+" div").fadeOut("fast",function(e){ $(this).remove(); });
	}

	// チェックボックス
	if(selectNum == 1)
	{
		viewCheckBoxField(selectBoxName);
	}
	// ラジオボタン
	else if(selectNum == 2)
	{
		viewRadioButtonField(selectBoxName);
	}
}

/**
 * チェックボックス設定画面を表示。
 * @param {string} idName 表示する場所のid名	
 */
function viewCheckBoxField(idName)
{
	var html = "<div>"+
			   "チェックボックスの数 : <input type='text' name='checkBoxNum' value='4' size='1' maxlength='2' onKeyPress='return checkEnter(event);' />"+
			   "<input type='button' value='表示する' onclick='alert('a');' />"+
			   "<div id=''></div>"+
			   "</div>";

	$(idName).prepend(html).hide().fadeIn("fast");
}

/**
 * チェックボックス設定画面を表示。
 * @param {string} idName 表示する場所のid名	
 */
function viewRadioButtonField(idName)
{
	
}

/**
 * 質問を囲うdivを表示します。
 */
function addQuestionDiv()
{

	for(var i = 2; i <= MAX_QUESTION + 1; i++)
	{
		// 前のクイズdiv要素
		var afterQuestionDivName = "div#q"+(i - 1);
		// 次のクイズdiv
		var nextQuestionDivName = "div#q"+i;

		// 次の質問が無かったら
		if(!(0 < $(nextQuestionDivName).size()))
		{
			if(i == MAX_QUESTION + 1)
			{
				alert("20個以上質問は作れません");
			}
			else
			{
				// 現在ある最後の質問の要素の後ろに新しく作る
				$(afterQuestionDivName).after("<div id='q"+i+"'></div>");

				// フェードインさせたいので非表示にする
				$(nextQuestionDivName).hide();

				addQuestion(nextQuestionDivName);
			}
			break;
		}
	}
}

/**
 * 質問を囲うdivを削除します。
 */
 function killQuestionDiv()
 {
 	for(var i = 1; i <= MAX_QUESTION + 1; i++)
	{
		var nextQDivName = "div#q"+i;
		if(!(0 < $(nextQDivName).size()))
		{
			// 最初の要素は消せないので抜け出す
			if((i-1) == 1)
			{
				alert("削除できません");
			}
			else
			{
				// 1個前の要素を削除
				$("div#q"+(i-1)).fadeOut("fast",function(e){$(this).remove();});
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

	var questinHTML = "<br />質問"+questionNum+" : <input type='text' name='q"+questionNum+"'/><br />"+
					  "質問タイプ : "+
					  "<select name='qType"+questionNum+"' size='1' onchange='changSelect(this);'>"+
					  "<option value='1' label='ラジオボックス（どれか1つ回答）'>ラジオボックス（どれか1つ回答）</option>"+
					  "<option value='2' label='チェックボックス（複数回答）'>チェックボックス（複数回答）</option>"+
					  "<option value='3' label='自由回答（回答者が書き込む）'>自由回答（回答者が書き込む）</option>"+
					  "</select><br />"+
					  "<div id='qType"+questionNum+"'></div>";

	$(idName).prepend(questinHTML).fadeIn("fast");
	viewCheckBoxField("#qType"+questionNum);
}