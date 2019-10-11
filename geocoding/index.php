<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Maps</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="main.css" />
    <script
		    src="https://code.jquery.com/jquery-3.4.1.min.js"
			integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
            crossorigin="anonymous">
    </script>
    <?php include('../maps/maps.php');?>
    <?php include('../maps/key.php');?>
    <script>
  //  let key = "<?php //echo $GLOBALS['key']; ?>";
    </script>
    <script src="main.js"></script>
</head>
<body>
    
    <div id="map"></div>

    <div class="show-buttons">
        <input type="text" id="address" placeholder="address">
        <button id="geocodeAdress">Geocode address</button>
        <button id="geocodeAdressFull">Geocode address full</button>   
    </div>

    <div id="output">a</div>
<script>

</script>
</body>
</html>