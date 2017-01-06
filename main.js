define(function(require, exports, module) {

  var CommandManager    = brackets.getModule("command/CommandManager"),
      Menus             = brackets.getModule("command/Menus"),
      PanelManager      = brackets.getModule("view/PanelManager"),
      ExtensionUtils    = brackets.getModule("utils/ExtensionUtils"),
      AppInit           = brackets.getModule("utils/AppInit");

  var INFOCUS_SHOW = "infocus.show";
  var COMMAND_ID = "InFocus";

  // Get the path of the extension
  var infocusPath = ExtensionUtils.getModulePath(module);
  //var cafeup;
  var sound;
  var path;

  var panel;
  var panelHtml = require("text!infocus.html");

  // Function for setting the channels' paths
  function getChannelPath() {
    for (var i = 0; i < channelsArray.length; i++) {
      sound = "sounds/infocus-" + channelsArray[i] + ".ogg";
      path = infocusPath + sound;
      document.getElementById('sound-' + channelsArray[i] + '-src').setAttribute("src", path);
    }
  }

  function handle() {
    if(panel.isVisible()) {
      panel.hide();
      CommandManager.get(INFOCUS_SHOW);
    }
    else {
      panel.show();
      CommandManager.get(INFOCUS_SHOW);
    }
  }

  AppInit.appReady(function() {
    // Load the stylesheet:
    ExtensionUtils.loadStyleSheet(module, "style.css");
    // Register the name:
    CommandManager.register(COMMAND_ID, INFOCUS_SHOW, handle);
    // Add it to menu with key combination:
    var menu = Menus.getMenu(Menus.AppMenuBar.NAVIGATE_MENU);
    menu.addMenuItem(INFOCUS_SHOW, "Ctrl-Alt-.");
    // Create the bottom panel:
    panel = PanelManager.createBottomPanel(INFOCUS_SHOW, $(panelHtml),200);

    //cafeup = document.getElementById('sound-cafe-src').setAttribute("src", cafepath);
    // ha ide teszek egy valtozot amit a htmlben deklaraltam
    // es kiiratom az erteket akkor megjelenik no problem.
    // tehat egy function ben lehet alkalmazni a channelArray elemeit!! 
    getChannelPath();
  });

});