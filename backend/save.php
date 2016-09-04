<?php

	$filename = 'data.json';

	if (!file_exists($filename)) {
		die('File not found!');
	} else {
		echo "File found!\r\n";
	}

	try {
		$postData = array(
			'lat' => $_GET['lat'],
			'lng' => $_GET['lng'],
			'tag' => $_GET['tag'],
			'reference' => $_GET['reference'],
			'time' => time()
		);

		$fileContent = file_get_contents($filename);
		$arr_fileContent = json_decode($fileContent, true);
		print_r($fileContent);
		print_r($arr_fileContent);
		print_r($postData);
		array_push($arr_fileContent, $postData);
		$jsonData = json_encode($arr_fileContent, JSON_PRETTY_PRINT);

		if (file_put_contents($filename, $jsonData)) {
		 	echo 'Data successfully written to ' . $filename;
		} else {
			echo 'error';
		}
	} catch (Exception $e) {
		echo 'Exception: ' . $e->getMessage();
	}

?>