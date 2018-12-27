<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Calendar</title>

    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
          integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous">
    <link rel="stylesheet" href="cal.css">

</head>
<body>
	<div class="container col-sm-4 col-md-7 col-lg-4 mt-5">
		<h1>Calander</h1>
		
		<div class="card">
			<h3 class="card-header" id="monthAndYear">Month and Year</h3>	
			<table class="table table-bordered table-responsive-sm" >
				<thead id="calendar">
			
				</thead>
				<tbody id="calendar-body">
			
				</tbody>
			</table>	
			
			<div class="form-inline">
				<button class="btn btn-outline-primary col-sm-6" onclick="previous()">Previous</button>
				<button class="btn btn-outline-primary col-sm-6" onclick="next()">Next</button>
			</div>
		</div>
	</div>
	<div class="container">
		<div id="hidden">
		<table class="table table-bordered table-responsive-sm">
			<tbody id="body">
			</tbody>
		</table>
		</div>
	</div>
<!--<button name="jump" onclick="jump()">Go</button>-->
<script src="calendar.js"></script>

<!-- Optional JavaScript for bootstrap -->
<!-- jQuery first, then Popper.js, then Bootstrap JS -->
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js"
        integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ"
        crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js"
        integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm"
        crossorigin="anonymous"></script>


</body>
</html>