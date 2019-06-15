function main()
{
    var volume = new KVS.LobsterData();
    var screen = new KVS.THREEScreen();

    screen.init( volume, {
        width: window.innerWidth * 0.5,
        height: window.innerHeight,
        enableAutoResize: false
    });

    var bounds = Bounds( volume );
    screen.scene.add(bounds);
    
    var isovalue = 128;

    var surfaces = Isosurfaces( volume, isovalue );
    screen.scene.add( surfaces );

    
    var elem = document.getElementById('isovalue');
    elem.addEventListener( 'input', function() {
        isovalue = elem.value;
        screen.scene.remove(surfaces);
        surfaces = Isosurfaces(volume, isovalue);
        screen.scene.add( surfaces );

    });
    
    document.addEventListener('mousemove', function () {
        screen.light.position.copy( screen.camera.position );
    });

    window.addEventListener( 'resize', function() {
        screen.resize( [ window.innerWidth*0.5, window.innerHeight ] );
    });



    screen.loop();
}
function btn6Click(){
    screen.scene.remove(surfaces);
    colormap=2;
    surfaces=Isosurfaces(volume,isovalue,screen,1,2);
    screen.scene.add(surfaces);
    }