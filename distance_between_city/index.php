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
 //let key = "<?php// echo $GLOBALS['key']; ?>";
    </script>
    <script src="main.js"></script>
</head>
<body>
    <h1>Distance beetween cities app</h1>
    <h2> Our app will help you calculate travveling distance</h2>
    
    From : <input type="text" placeholder="Origin..." id="origin"><br><br><br>
    To: <input type="text" placeholder="To..." id="to"><br><br><br>
    <button id="calcRoute">Submit</button><br><br><br>

    <div id="map"></div>


    <div id="output"></div>
<script>

</script>
</body>
</html>