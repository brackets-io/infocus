/**
 * InFocus - Brackets extension
 * https://github.com/a-bakos/infocus
 */

define(function (require, exports, module) {
  "use strict";

  var CommandManager    = brackets.getModule("command/CommandManager"),
      Menus             = brackets.getModule("command/Menus"),
      WorkspaceManager  = brackets.getModule("view/WorkspaceManager"),
      //PanelManager = brackets.getModule("view/PanelManager"),
      ExtensionUtils    = brackets.getModule("utils/ExtensionUtils"),
      AppInit           = brackets.getModule("utils/AppInit");

  var INFOCUS_SHOW      = "infocus.show",
      COMMAND_ID        = "InFocus",
      // Get the path of the extension:
      infocusExtPath    = ExtensionUtils.getModulePath(module),
      panel,
      panelHtml         = require("text!infocus.html");

  // Function for setting the paths for each channel.
  // This will go through each audio <source> tags,
  // and set their src attributes accordingly.
  function getChannelPath() {
    var i,
        soundPath,
        fullChannelPath;

    for (i = 0; i < channelsArray.length; i++) {
      soundPath = "sounds/infocus-" + channelsArray[i] + ".ogg";
      fullChannelPath = infocusExtPath + soundPath;

      document.getElementById('sound-' + channelsArray[i] + '-src').setAttribute("src", fullChannelPath);
    }
  }

  function handle() {
    if (panel.isVisible()) {
      panel.hide();
      CommandManager.get(INFOCUS_SHOW).setChecked(false);
    }
    else {
      panel.show();
      CommandManager.get(INFOCUS_SHOW).setChecked(true);
    }
  }

  AppInit.appReady(function () {
    // Load the stylesheet:
    ExtensionUtils.loadStyleSheet(module, "style.css");
    // Register the name:
    CommandManager.register(COMMAND_ID, INFOCUS_SHOW, handle);
    // Add it to menu with key combination:
    var menu = Menus.getMenu(Menus.AppMenuBar.NAVIGATE_MENU);
    menu.addMenuItem(INFOCUS_SHOW, "Ctrl-Alt-.");
    // Create the bottom panel:
    panel = WorkspaceManager.createBottomPanel(INFOCUS_SHOW, $(panelHtml), 75);

    // Close the panel by clicking on X
    $('#infocus-panel .close').click(function () {
      handle();
    });

    getChannelPath();
  });

});