<!DOCTYPE html>

<html lang="en-GB" class="js no-touch skrollr skrollr-desktop"><!--<![endif]-->
<head>
    <?php include( 'includes/header.php' ); ?>
</head>

<body>

<div class="loading-nologo fa-spin"></div>
<div class="site-container">
    <div id="st-container" class="st-container">
        <?php include( 'includes/menu.php' ); ?>

		<!-- content push wrapper -->
		<!--[if !IE]><!-->
		<div class="st-pusher left">
			<!--<![endif]-->
			<!--[if IE]>
			<div class="st-pusher left st-pusher-ie"><![endif]-->
			<div class="st-content"><!-- this is the wrapper for the content -->
				<div class="st-content-inner entry-content"><!-- extra div for emulating position:fixed of the menu -->
					<div class="video-shade"></div>
					<div id="search-content" class="site-shade-content">
						<div class="site-shade-content-inner">
							<form role="search" method="get" class="search-form" action="#">
								<i class="fa fa-search search-icon-form"></i>
								<input type="search" class="search-field"  name="s" autofocus>
							</form>
						</div>
					</div>
					<div id="search-shade" class="site-shade"></div>

					<div id="share-content" class="share-links-site">
						<a class="mail" href="#"><i
								class="fa fa-envelope-o"></i></a>

						<a class="goog" href="#"
						   onclick="window.open(this.href,
      '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;"><i
								class="fa fa-google-plus"></i></a>
						<a class="twit" href="#"
						   onclick="window.open(this.href,
      '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=260,width=600');return false;"><i
								class="fa fa-twitter"></i></a>
						<a class="fb" href="#"
						   onclick="window.open(this.href,
      '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=220,width=600');return false;"><i
								class="fa fa-facebook"></i></a>

						<div class="clear-float"></div>
					</div>
					<div id="share-shade" class="site-shade"></div>
					<div class="bottom-nav-short">

						<a class="bottom-logo-container" href="#">
							<img class="bottom-logo"
							     src="theme/images/logo-dark1.png" alt="logo">
						</a>

						<div class="menu-bars-bottom st-trigger-effects">
							<div class="menu-close-dark"></div>
							<button type="button" id="menu-nav-footer" class="navbar-toggle button-menu"
							        data-effect="st-effect-4">
								<span class="icon-bar dark"></span>
								<span class="icon-bar dark"></span>
								<span class="icon-bar dark"></span>
							</button>
						</div>

						<div class="horiz-nav-bottom">
							<ul class="menu bottom-menu">
								<li class="menu-item search-prompt">Search</li>

								<li class="menu-item share-prompt">Share</li>

								<li class="menu-item top-ani">Top</li>
								<li class="footer-show menu-item">Footer
									<i class="footer-show-arrow fa fa-chevron-down" ></i>
								</li>

							</ul>
							<ul class="menu mobile-bottom-menu">
								<li class="menu-item search-prompt"><i class="fa fa-search"></i></li>

								<li class="menu-item share-prompt"><i class="fa fa-share-alt"></i></li>

								<li class="menu-item top-ani"><i class="fa fa-chevron-up"></i></li>
								<li class="footer-show menu-item">
									<i class="footer-show-arrow fa fa-chevron-down"></i>
								</li>
							</ul>
						</div>
					</div>
					<!-- .bottom-nav -->
					<div class="po-portfolio-slider-profile white-content">


						<div class="po-column menu-bars st-trigger-effects" data-delay="2200"
						     data-animation="move-down-short">
							<div class="menu-close"></div>
							<button type="button" class="navbar-toggle button-menu" data-effect="st-effect-4">
								<span class="icon-bar"></span>
								<span class="icon-bar"></span>
								<span class="icon-bar"></span>
							</button>
						</div>

						<div class="po-column top-logo-outer" data-delay="2200" data-animation="move-down-short">
							<div class="top-logo-container">
								<a href="#">

									<img class="logo"
									     src="theme/images/logo2.png"
									     alt="logo">

								</a>
							</div>
						</div>


						<div class="po-section section-video contact-video">
							<div class="section-video-content">

								<div class="team-caption">
									<h1 class="text-center">Contact</h1>
								</div>
								<div class="po-slider-bottom-button top_contact">
									<i class="fa fa-angle-down site-show text-white cursor_point"></i>
								</div>
							</div>
							<video autoplay loop class="po-background-video">
								<source src="theme/images/jogging.webmhd.webm"
								        type="video/webm">
								<source src="theme/images/jogging.mp4"
								        type="video/mp4">
								<source src="theme/images/jogging.ogv"
								        type="video/ogg">
							</video>

						</div>
						<div class="top-page-anchor">
							<div class="arrow-container">
								<div class="arrow-container-inner">
									<div class="transparent-triangle-container">
										<table >
											<tr>
												<td class="transparent-triangle-left-white black-background"></td>
												<td class="transparent-triangle-left-triangle-container">
													<div class="transparent-triangle-left-triangle black-backgroud-border-left"></div>
												</td>
												<td class="transparent-triangle-right-triangle-container">
													<div class="transparent-triangle-right-triangle black-backgroud-border-right"></div>
												</td>
												<td class="transparent-triangle-right-white black-background"></td>
											</tr>
										</table>

									</div>
								</div>
							</div>

							<div class="po-page po-blog">


								<div>
									<div>
										<div class="padding">

											<div class="entry-content">
												<!-- Google Map -->
												<div class="po-section section-background-dark padding10Bott">

													<div class="container">
														<div class="row">
															<div class="po-column col-sm-8 col-sm-offset-0 paddingTop"
															      data-animation="fade-in">
																<div class="po-column po-header-top col-sm-12 padding"
																     data-delay="0" data-animation="fade-in"><h3 class="standard-header"
																                            >
																		Leave a message</h3>

																	<div class="header-line-left"></div>
																</div>
																<div class="clearfix"></div>
																<div role="form" class="formoids" id="formoids-f501-p724-o1"
																     dir="ltr">
																	<div class="screen-reader-response"></div>
																	<form  action="#"
																	       class="formoids-form"
																	      novalidate="novalidate">
																		<div class="no_display">
																			<input type="hidden" name="_formoids"
																			       value="501"/>
																			<input type="hidden" name="_formoids_version"
																			       value="4.2"/>
																			<input type="hidden" name="_formoids_locale"
																			       />
																			<input type="hidden" name="_formoids_unit_tag"
																			       value="formoids-f501-p724-o1"/>
																			<input type="hidden" name="_wpnonce"
																			       value="94afab5df3"/>
																		</div>
																		<p>
                                                                            <span class="formoids-form-control-wrap your-name">
                                                                                <input type="text" name="your-name" size="40" placeholder="Name"/>
                                                                            </span>
                                                                        </p>

																		<p>
                                                                            <span class="formoids-form-control-wrap your-email">
                                                                                <input type="email" name="your-email" size="40" placeholder="Email"/>
                                                                            </span>
                                                                        </p>

																		<p>
                                                                            <span class="formoids-form-control-wrap your-subject">
                                                                                <input type="text" name="your-subject" size="40" placeholder="Subject"/>
                                                                            </span>
                                                                        </p>

																		<p>
                                                                            <span class="formoids-form-control-wrap your-message">
                                                                                <textarea name="your-message" cols="40" rows="10" class="area" placeholder="Message"></textarea>
                                                                            </span>
																		</p>

																		<p><input type="submit" value="Send"
																		          class="formoids-submit"/>
																		</p>

																		<div
																			class="formoids-response-output formoids-display-none"></div>
																	</form>
																</div>
																<br/>
															</div>
															<div class="po-column col-sm-4 col-sm-offset-0 paddingTop"
															      data-animation="fade-in">
																<div class="po-column col-md-12 col-md-offset-0 padding"
																      data-animation="fade-in">
																	<div class="po-column po-header-top col-sm-12 padding"
																	     data-delay="0" data-animation="fade-in"><h3 class="standard-header"
																	                            >
																			Our office</h3>

																		<div class="header-line-left"></div>
																	</div>
																	<div class="clearfix"></div>
																	<p class="textblock textblock-left"></p>

																	<p>Ebor Street, Shoreditch<br/>
																		London E1 6AW<br/>
																		United Kingdom</p>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div id="2" class="googleMap full_width_contact"></div>

												<div class="clearfix"></div>
											</div>
											<!-- .entry-content -->


										</div>
									</div>
								</div>


								<?php include( 'footer.php' ); ?>
							</div>
						</div>
						</div>
						</div>

					</div>
					<!-- /st-content-inner -->
				</div>
				<!-- /st-content -->
			</div>
			<!-- /st-pusher -->
		</div>
		<!-- /st-container -->


        <?php include('includes/scripts.php') ?>
<script type="text/javascript">
	$(document).ready(function () {
		function initializeGoogleMap() {

			var styles = [
				{
					stylers: [
						{hue:""},
						{saturation: -20}
					]
				}, {
					featureType:"road",
					elementType:"geometry",
					stylers: [
						{lightness: 100},
						{visibility:"simplified"}
					]
				}, {
					featureType:"road",
					elementType:"labels",
					stylers: [
						{visibility:"simplified"}
					]
				}
			];

			var styledMap = new google.maps.StyledMapType(styles,
				{name:"Styled Map"});

			var myLatlng = new google.maps.LatLng(51.524334, -0.075955);
			var myOptions = {
				center: myLatlng,
				zoom: 12,
				scrollwheel: false,
				navigationControl: false,
				mapTypeControl: false,
				scaleControl: false,
				draggable: false,
				mapTypeId: google.maps.MapTypeId.SATELLITE
			};
			var map = new google.maps.Map(document.getElementById("2"), myOptions);

			var contentString ="We're here!";
			var infowindow = new google.maps.InfoWindow({
				content: contentString
			});

			var marker = new google.maps.Marker({
				position: myLatlng,
				animation: google.maps.Animation.DROP,
				icon:"theme/images/map-marker.png"
			});

			google.maps.event.addListener(marker,"click", function () {
				infowindow.open(map, marker);
			});

			marker.setMap(map);

			map.mapTypes.set("2", styledMap);
			map.setMapTypeId("2");

		}

		initializeGoogleMap();

	});
</script>
</body>
</html>