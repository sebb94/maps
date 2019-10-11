<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Maps</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" media="screen" href="main.css" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <script
		    src="https://code.jquery.com/jquery-3.4.1.min.js"
			integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
            crossorigin="anonymous">
    </script>
    <?php //include('../maps/maps.php');?>
    <?php// include('../maps/key.php');?>
    <script>
// let key = "<?php// echo $GLOBALS['key']; ?>";
    </script>
    <script src="main.js"></script>
</head>
<body>
<div class="jumbotron text-center">
      <h1>Distance beetween cities app</h1>
    <h2> Our app will help you calculate traveling distance</h2>
    <form id="cityForm">
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">From : </label>
    <div class="col-sm-10">
      <input type="text" placeholder="..." id="origin">
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword" class="col-sm-2 col-form-label">To :</label>
    <div class="col-sm-10">
      <input type="text" placeholder="..." id="to">
    </div>
  </div>
</form>
  
  <button class="btn btn-info btn-lg" id="calcRoute">Find Route!</button>
</div>


    <div id="map"></div>
    <div class="jumbotron result text-center">
    <div id="output">

  <div class="alert alert-success alert-dismissible fade show" role="alert">
    <div class="alert-message">
          
    </div>
</div>      

<div class="alert alert-danger alert-dismissible fade show" role="alert">
    <div class="alert-message">
         
    </div>
</div>

    </div>
    </div>



  

</body>
</html>