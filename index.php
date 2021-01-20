<!doctype html>

<html lang="en">

    <head>
        <meta charset="utf-8">

        <title>G-tutkimus</title>
        <meta name="description" content="The HTML5 Herald">
        <meta name="author" content="SitePoint">

        <link rel="stylesheet" href="css/styles.css?v=1.0">

        <!--<script src="js/ScrollMagic.min.js"></script>-->

        <script src="//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/debug.addIndicators.min.js"></script>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/animation.gsap.min.js"></script>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.0/gsap.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.0/ScrollToPlugin.min.js"></script>

    </head>

    <body id="container">

        <!--
        <div class="previous-scene-container">
            <a id="previous-scene" href="#scene-0">PREVIOUS</a>
        </div>
        -->

        <?php
        include './scenes/scene_1.php';
        include './scenes/scene_2.php';
        include './scenes/scene_3.php';
        include './scenes/scene_4.php';
        ?>

        <!--
        <div class="next-scene-container">
            <a id="next-scene" href="#scene-2">NEXT</a>
        </div>
        -->

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script> 
        <script src="js/scripts.js"></script>

    </body>

</html>