<?php
	$MAX_QUESTION = 20;

	// あるか確認
	for($i = 1; $i <= $MAX_QUESTION; $i++)
	{
		// あった
		if(@$_POST["q{$i}"])
		{
			echo $_POST["q{$i}"];
		}
		// なかった
		else
		{
			break;
		}
	}

