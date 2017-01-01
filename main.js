define(function(require, exports, module) {

  var CommandManager    = brackets.getModule("command/CommandManager"),
      Menus             = brackets.getModule("command/Menus"),
      PanelManager      = brackets.getModule("view/PanelManager"),
      ExtensionUtils    = brackets.getModule("utils/ExtensionUtils"),
      AppInit           = brackets.getModule("utils/AppInit");

  var INFOCUS_SHOW = "infocus.show";
  var COMMAND_ID = "InFocus";

  var panel;
  var panelHtml = require("text!infocus.html");

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
  });

});