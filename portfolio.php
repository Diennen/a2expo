<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<?php
	include 'php/head.php';
	?>
	<link rel="stylesheet" href="styles/css/header-for-portfolio.css">
	<link rel="stylesheet" href="styles/css/portfolio-section.css">
	<title>A2EXPO - Creating layouts, stands, assembling advertisements</title>
	<meta name="description" content="Creating layouts, stands, assembling advertisements">
	<meta name="keywords" content="a2expo, expo, creation, layouts, stands, advertising assembly, web design, online advertising, advertising graphics, ad creation, advertising services, trade show stands, ad assembly, advertising campaigns">
</head>

<body>
	<div class="wrapper">

		<?php
		include 'php/header.php';
		?>

		<main class="main">

			<section class="portfolio">
				<div class="portfolio-container container">
					<div class="portfolio-elements">
						<div class="portfolio-top">
							<div class="portfolio-texts">
								<div class="section-title-container">
									<p class="portfolio-title section-title lng-portfolio-title">Portfolio</p>
								</div>
								<p class="potfolio-subtitle section-subtitle lng-potfolio-subtitle">Visualizing our creativity and expertise. Each project is a unique piece of art, embodying our commitment to perfection. Immerse yourself in the world of our solutions and appreciate the quality that makes us your ideal partner in achieving your goals.</p>
							</div>

							<div class="portfolio-choise">
								<button class="portfolio-choise-element lng-portfolio-choise-element-1" data-tab-id="stands">Stands</button>
								<button class="portfolio-choise-element lng-portfolio-choise-element-2" data-tab-id="mockups"> Mockups</button>
							</div>
						</div>

					</div>
				</div>
			</section>

		</main>

		<?php
		include 'php/footer.php';
		?>

	</div>

	<?php
	include 'php/script.php';
	?>

	<script src="script/portfolioChoise.js"></script>

</body>

</html>