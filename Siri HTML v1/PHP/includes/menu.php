<?php
/**
 * Created by PhpStorm.
 * User: ubekwenisha
 * Date: 23-Jun-15
 * Time: 17:39
 */

$current = basename( $_SERVER['PHP_SELF'] );
?>
<nav class="st-menu left st-effect-4 scroll-pane">
    <!--[if IE 8]>
    <div class="menu-greyscale"></div><![endif]-->
    <div class="st-menu-inner">
        <a href="index.php">
            <img class="logo-menu logo" src="theme/images/logo2.png" alt="logo">
        </a>

        <div class="menu-nav-inner">
            <div class="menu-side-menu-container">
                <ul id="menu-side-menu" class="menu">
                    <li class="menu-item <?php if ($current == 'index.php') { echo ' current_page_item'; } ?>">
                        <a href="index.php">Home</a>
                    </li>
                    <li class=" menu-item"><a href="portfolio.php">Portfolio</a>
                        <ul class="sub-menu">
                            <li class="menu-item">
                                <a href="portfolio-image.php">Image</a>
                            </li>
                        </ul>
                    </li>
                    <li class="team menu-item"> <a href="team.php">Team</a>
                       <ul class="sub-menu">
                          <li class="menu-item">
                             <a href="team-image.php">Image</a>
                          </li>
                       </ul>
                    </li>
                    <li class="menu-item"><a href="">Pages</a>
                        <ul class="sub-menu">
                            <li class="menu-item">
                                <a href="about.php">About</a>
                            </li>
                            <li class="menu-item">
                                <a href="sidebar.php">Sidebar</a>
                            </li>

                            <li class="menu-item">
                                <a href="full-width.php">Full Width</a>
                            </li>
                            <li class="menu-item">
                                <a href="archives.php">Archives</a>
                            </li>
                        </ul>
                    </li>

                    <li class="menu-item">
                        <a href="contact.php">Contact</a>
                    </li>
                    <li class="menu-item">
                        <a href="blog.php">Blog</a>
                    </li>
                </ul>
            </div>

            <div class="social-links-center">
                <ul class="social-links">
                    <li><a href="#"><span class="index green"><i class="fa fa-envelope-o"></i></span></a></li>
                    <li><a href="#"><span class="index twit"><i class="fa fa-twitter"></i></span></a></li>
                    <li><a href="#"><span class="index fb"><i class="fa fa-facebook"></i></span></a></li>
                    <li><a href="#"><span class="index goog"><i class="fa fa-google-plus"></i></span></a></li>
                    <li><a href="#"><span class="index pint"><i class="fa fa-pinterest"></i></span></a></li>
                    <li><a href="#"><span class="index yt"><i class="fa fa-youtube"></i></span></a></li>
                    <li><a href="#"><span class="index vimeo"><i class="fa fa-vimeo-square"></i></span></a></li>
                    <li><a href="#"><span class="index linked"><i class="fa fa-linkedin"></i></span></a></li>
                    <li><a href="#"><span class="index git"><i class="fa fa-github"></i></span></a></li>
                    <li><a href="#"><span class="index fours"><i class="fa fa-foursquare"></i></span></a></li>
                    <li><a href="#"><span class="index insta"><i class="fa fa-instagram"></i></span></a></li>
                    <li><a href="#"><span class="index flickr"><i class="fa fa-flickr"></i></span></a></li>
                </ul>
                <div class="clear-float"></div>
            </div>
        </div>
    </div>
</nav>