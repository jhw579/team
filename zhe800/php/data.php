<?php
	header('content-type:text/html;charset=utf-8');

	$url = "https://m.api.zhe800.com/list/deals/v2?user_id=&user_type=1&user_role=4&limit=20&offset=20&visit_bit=null&cookie_id=&client_type=3&image_type=si1&url_name=wireless1002&min_price=&max_price=&order=&shop_type=&callback=m_datacenter_api";



    $content = file_get_contents($url);
	
	echo $content;
?>