# kno-slider

Responsive Slider

![](https://media.giphy.com/media/SJXX9eiCtc8Tt1F1C8/giphy.gif)

## Get Started

### 1. Include JS/CSS

```html
<!-- include libraries(jQuery) -->
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script> 
<link rel="stylesheet" href="cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
<script type="text/javascript" src="dist/js/swipe.js"></script>

<!-- include kno-slider css/js-->
<link rel="stylesheet" href="dist/css/kno-slider.css">
<script type="text/javascript" src="dist/js/kno-slider.js"></script>
```

### 2. kno-slider it!

Then create the necessary tags in the `body` tag:

```html
<div class="slider-container">

        <div class="slids">
        
            <div class="item">

                <div class="caption">
                    <div class="head1"><span>...</span> ...</div>
                    <div class="head2">...</div>
                </div>

                <img src="...">

            </div>

        </div>
             
        <div class="navigation">
            <div class="next">
                <div class="icon"></div>
                <div class="img"></div>
            </div>
            <div class="prev">
                <div class="icon"></div>
                <div class="img"></div>
            </div>
        </div>

    </div>
```

That is all. There's nothing you need to do after that. The kno-slider will operate automatically.