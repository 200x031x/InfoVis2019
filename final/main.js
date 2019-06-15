function main()
{
    var volume = new KVS.LobsterData();
    var screen = new KVS.THREEScreen();

    screen.init(volume, {
    width: window.innerWidth * 0.5,
    height: window.innerHeight,
    targetDom: document.getElementById('display'),
    enableAutoResize: false
    });

    var bounds = Bounds( volume );
    screen.scene.add( bounds );

    var isovalue = 128;
    var surfaces = Isosurfaces( volume, isovalue, screen);
    screen.scene.add( surfaces );

    document.addEventListener( 'mousemove', function() {
        screen.light.position.copy( screen.camera.position );
    });

    window.addEventListener( 'resize', function() {
        screen.resize([ window.innerWidth * 0.5, window.innerHeight ]);
    });
    screen.loop();

    var reflection="Phong";
    var interpolate="Basic";




    var slider = document.querySelector("[type=range]");
    slider.addEventListener("change", function() {
      screen.scene.remove(surfaces);
      isovalue = document.getElementById('isovalue').value;
      surfaces = Isosurfaces(volume, isovalue, screen,reflection,interpolate);
      screen.scene.add(surfaces);
    });



}
