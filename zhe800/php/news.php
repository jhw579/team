<?php
  header('content-type:text/html;charset=utf-8');

	$url = "https://m.api.zhe800.com/homepromotion/pintuan/v1.jsonp?user_typ=1&user_role=4&paid=0&_=1526738547645&callback=home_promotion_success";

    $content = file_get_contents($url);
	
	echo $content;

?>



