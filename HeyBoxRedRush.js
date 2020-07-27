auto();
events.observeKey();
events.onKeyDown("volume_down", function(event)
{
    threads.shutDownAll();
    exit();
});

events.onKeyDown("volume_up", function(event)
{
    threads.start(function() 
    { 
        while(true)
        {
            requestScreenCapture();
            var img = captureScreen();
            var color1 = images.pixel(img, 205,1737);
            var color2= images.pixel(img, 205,1364);
            var color3= images.pixel(img, 205,1045);
            var color4= images.pixel(img, 205,672);
            var color5= images.pixel(img, 205,328);
            var str="#ffb0c0c0";
            if(colors.toString(color1)==str)
            {
                click(1000,2600);
            }else
            {
                click(400,2600);
            }

            if(colors.toString(color2)==str)
            {
                click(1000,2600);
            }else
            {
                click(400,2600);
            }

            if(colors.toString(color3)==str)
            {
                click(1000,2600);
            }else
            {
                click(400,2600);
            }

            if(colors.toString(color4)==str)
            {
                click(1000,2600);
            }else
            {
                click(400,2600);
            }

            if(colors.toString(color5)==str)
            {
                click(1000,2600);
            }else
            {
                click(400,2600);
            }
        sleep(100);
        }
    });
});