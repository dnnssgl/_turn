<?php

	$filename = 'data.json';

	if (!file_exists($filename)) {
		die('File not found!');
	} else {
		echo "File found!\r\n";
	}

	try {
		$postData = array(
			'lat' => $_POST['lat'],
			'lng' => $_POST['lng'],
			'tag' => $_POST['tag'],
			'reference' => $_POST['reference'],
			'time' => time()
		);
		print_r($postData);
		$fileContent = file_get_contents($filename);
		$arr_fileContent = json_decode($fileContent, true);
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