<?php
session_start();
$order = array ();
foreach ($_POST as $key => $value) {
	if ($value != '') {
		$order[$key] = $value;
	}
}
$order['is_smart_form'] = true;
// Define ip
if (!empty($_SERVER['HTTP_CF_CONNECTING_IP'])) {
$ip =  $_SERVER['HTTP_CF_CONNECTING_IP'];
}  elseif (!empty($_SERVER['HTTP_X_REAL_IP'])) {
$ip =  $_SERVER['HTTP_X_REAL_IP'];
} elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
$ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
} else {
$ip =  $_SERVER['REMOTE_ADDR'];
}

$ips = explode(",", $ip);
$order['ip'] = trim($ips[0]);
$order['sid4'] = $_SERVER['HTTP_HOST'];

$parsed_referer = parse_url($_SERVER['HTTP_REFERER'], PHP_URL_QUERY);
parse_str($parsed_referer, $referer_query);

$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, 'https://tracker.everad.com/conversion/new' );
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1 );
curl_setopt($ch, CURLOPT_POST,           1 );
curl_setopt($ch, CURLOPT_POSTFIELDS,     http_build_query(array_merge($referer_query, $order)) );
curl_setopt($ch, CURLOPT_HTTPHEADER,     array('Content-Type: application/x-www-form-urlencoded'));

$result = curl_exec ($ch);

if ($result === 0) {
echo "Timeout! Everad CPA API didn't respond within default period!";
} else {
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
if ($httpCode === 400) {
echo "Order data is invalid! Order is not accepted!";
} else if ($httpCode === 401) {
echo "Order is not accepted! No campaign_id.";
} else if ($httpCode === 403) {
echo "Order is not accepted! Restricted GEO. Please submit your order from another GEO.";
} else if ($httpCode !== 200) {
echo "Order is not accepted! Invalid or incomplete data. Please contact support.";
} else {
    foreach (json_decode($result, true) as $key => $value) {
  		if ($key === "id") {
		    $params = [
		      "conversion_id" => $value,
		      "name" => $_POST['name'],
		      "phone" => $_POST['phone'],
		      "pixel_id" => $_POST['pixel_id']
		    ];
        header("Location: /order/thankyou-id.php?".http_build_query($params), true, 302);
        exit();
  	  }
	  }
  }
}
?>