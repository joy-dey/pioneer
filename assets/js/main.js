const navElement = `

<nav class="navbar navbar-dark navbar-expand-lg bg-primary p-3">
	<div class="container-fluid">
		<a class="navbar-brand" href="#">
			<i class="fas fa-check-circle mr-2"></i>Celebrating 23 Years of Trust
		</a>
		<button data-toggle="collapse" class="navbar-toggler" data-target="#navcol-1">
			<span class="sr-only">Toggle navigation</span>
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navcol-1">
			<ul class="nav navbar-nav ml-auto">
				<li class="nav-item" role="presentation">
					<a class="nav-link active" href="#">Home</a>
				</li>
				<li class="nav-item dropdown">
					<a class="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="#">About us</a>
					<div class="dropdown-menu" role="menu">
						<a class="dropdown-item" role="presentation" href="history.html">Our History</a>
						<a class="dropdown-item" role="presentation" href="history.html">Our Vision</a>
						<a class="dropdown-item" role="presentation" href="history.html">Our Mission</a>
						<a class="dropdown-item" role="presentation" href="history.html">Our Values</a>
						<a class="dropdown-item" role="presentation" href="history.html">Success Story</a>
						<a class="dropdown-item" role="presentation" href="history.html">Accademic Team</a>
						<a class="dropdown-item" role="presentation" href="history.html">Management Team</a>
						<a class="dropdown-item" role="presentation" href="history.html">Why Pioneer Classes</a>
					</div>
				</li>
				<li class="nav-item" role="presentation">
					<a class="nav-link" href="#">Blog</a>
				</li>
				<li class="nav-item" role="presentation">
					<a class="nav-link" href="contactus.html">Contact Us</a>
				</li>
				<li class="nav-item" role="presentation">
					<a class="nav-link" href="applyonline.html">Apply Online</a>
				</li>
			</ul>
		</div>
	</div>
</nav>
<section class="container my-4">
	<div class="row">
		<div class="col-12 col-lg-6">
			<a href="index.html"><img class="img-fluid logo" src="http://pioneerclasses.in/wp-content/uploads/2018/09/logo.png"></a>
			</div>
			<div class="col-12 col-lg-6 align-items-center d-flex justify-content-end">
				<h5 class="text-primary">
					<i class="fas fa-phone mr-2"></i>Helpline No- +911234567890
				</h5>
			</div>
		</div>
	</section>
	<div class="container-fluid mt-4 navholder">
		<nav class="navbar navbar-dark navbar-expand-md bg-primary">
			<div class="container-fluid">
				<a class="navbar-brand d-md-none d-sm-block" href="#">MENU</a>
				<button data-toggle="collapse" class="navbar-toggler" data-target="#navcol-2">
					<span class="sr-only">Toggle navigation</span>
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navcol-2">
					<ul class="nav navbar-nav text-white mx-auto">
						<li class="nav-item dropdown">
							<a class="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="#">Medical Program</a>
							<div class="dropdown-menu" role="menu">
								<a class="dropdown-item" role="presentation" href="medicalprograms.html">Foundation Program</a>
								<a class="dropdown-item" role="presentation" href="medicalprograms.html">Target Program</a>
                                <a class="dropdown-item" role="presentation" href="medicalprograms.html">Fresher Program</a>
                                <a class="dropdown-item" role="presentation" href="medicalprograms.html">Achiever Program</a>
                                <a class="dropdown-item" role="presentation" href="medicalprograms.html">Test Program</a>
							</div>
						</li>
						<li class="nav-item dropdown">
							<a class="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="#">Engg Program</a>
							<div class="dropdown-menu" role="menu">
								<a class="dropdown-item" role="presentation" href="#">Foundatiopn Program for Enginnering</a>
								<a class="dropdown-item" role="presentation" href="#">Target Program for Enginnering</a>
							</div>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">Pre Foundation</a>
							
						</li>
						<li class="nav-item dropdown">
							<a class="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="#">Success Story</a>
							<div class="dropdown-menu" role="menu">
								<a class="dropdown-item" role="presentation" href="#">Total Selections 2018</a>
                                <a class="dropdown-item" role="presentation" href="#">Total Selections 2017</a>
                                <a class="dropdown-item" role="presentation" href="#">Total Selections 2016</a>
                                <a class="dropdown-item" role="presentation" href="#">Total Selections 2015</a>
                                <a class="dropdown-item" role="presentation" href="#">Total Selections 2014</a>
                                <a class="dropdown-item" role="presentation" href="#">Pioneer Alumni</a>
							</div>
						</li>
						<li class="nav-item dropdown">
							<a class="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="#">Gallery</a>
							<div class="dropdown-menu" role="menu">
								<a class="dropdown-item" role="presentation" href="#">Pioneer Media</a>
								<a class="dropdown-item" role="presentation" href="#">Alumni Meet</a>
                                <a class="dropdown-item" role="presentation" href="#">Award & Accolades</a>
                                <a class="dropdown-item" role="presentation" href="#">Annual Feliciation Function</a>
                                <a class="dropdown-item" role="presentation" href="#">Teachers Day</a>
                                <a class="dropdown-item" role="presentation" href="#">Special Events</a>
							</div>
						</li>
						<li class="nav-item dropdown">
							<a class="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="#">Student Zone</a>
							<div class="dropdown-menu" role="menu">
                                <a class="dropdown-item" role="presentation" href="#">Programme Results</a>
                                <a class="dropdown-item" role="presentation" href="#">Engineering Class Joining Process</a>
                                <a class="dropdown-item" role="presentation" href="#">Download Question Paper</a>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</div>

`;

document.querySelector(".navElement").innerHTML = navElement;

const footerElement = `

<div class="container">
<div class="row">
    <div class="col-md-3 text-white">
        <h5>About Pioneer</h5>
        <ul class="list-unstyled small">
            <li class="mb-1">Introduction</li>
            <li class="mb-1">Director Desk</li>
            <li class="mb-1">Pioneer Mentors</li>
            <li>Pioneer Team</li>
        </ul>
    </div>
    <div class="col-md-3 text-white">
        <h5>Pioneer Program</h5>
        <ul class="list-unstyled small">
            <li class="mb-1">Engg Foundation Program</li>
            <li class="mb-1">Engg Target Program</li>
            <li class="mb-1">Foundation Program</li>
            <li class="mb-2">Apply Online</li>
            <li class="mb-2">Target Program</li>
            <li class="mb-2">Fresher Program</li>
            <li class="mb-2">Achiever Program</li>
            <li class="mb-2">Test Program</li>
        </ul>
    </div>
    <div class="col-md-3 text-white">
        <h5>Pioneer Advantage</h5>
        <ul class="list-unstyled small">
            <li class="mb-1">Pioneer Care</li>
            <li class="mb-1">Challenger Program</li>
            <li class="mb-1">Scholarship Program</li>
            <li>Motivational Program</li>
            <li class="mt-2">College Counselling</li>
        </ul>
    </div>
    <div class="col-md-3 text-white">
        <h5>Contact us</h5>
        <ul class="list-unstyled small">
            <li class="mb-1">Helpline:- +911234567890</li>
            <li class="mb-1">Email:- pioneerclasses@gmail.com</li>
            <li class="mb-1">Website: www.pioneerclasses.in</li>
        </ul>
        <ul class="list-inline">
            <li class="list-inline-item mr-2"><a class="text-white" href="#"><i class="fab fa-facebook fa-2x"></i></a></li>
            <li class="list-inline-item mr-2"><a class="text-white" href="#"><i class="fab fa-twitter-square fa-2x"></i></a></li>
            <li class="list-inline-item mr-2"><a class="text-white" href="#"><i class="fab fa-linkedin fa-2x"></i></a></li>
            <li class="list-inline-item mr-2"><a class="text-white" href="#"><i class="fab fa-google-plus-square fa-2x"></i></a></li>
            <li class="list-inline-item mr-2"><a class="text-white" href="#"><i class="fab fa-youtube-square fa-2x"></i></a></li>
        </ul>
    </div>
</div>
<hr>
</div>
<div class="container">
<p class="text-white text-center small">Copyright (c) 2020. Pioneer Classes. All Rights Reserved.</p>
</div>

`;

document.querySelector(".footerElement").innerHTML = footerElement;