define(function(require, exports, module) {

  var CommandManager =  brackets.getModule("command/CommandManager"),
      Menus =           brackets.getModule("command/Menus"),
      PanelManager =    brackets.getModule("view/PanelManager"),
      ExtensionUtils =  brackets.getModule("utils/ExtensionUtils"),
      AppInit =         brackets.getModule("utils/AppInit");

  var FOCUS_SHOW = "focus.show";
  var COMMAND_ID = "focustest";

  var panel;
  var panelHtml = require("text!focus.html");

   function handle() {

    if(panel.isVisible()) {
      panel.hide();
      CommandManager.get(FOCUS_SHOW);
    }
    else {
      panel.show();
      CommandManager.get(FOCUS_SHOW);
    }
  }

  AppInit.appReady(function () {
    // Load the stylesheet:
    ExtensionUtils.loadStyleSheet(module, "style.css");
    // Register the name:
    CommandManager.register(COMMAND_ID, FOCUS_SHOW, handle);
    // Add it to menu with key combination:
    var menu = Menus.getMenu(Menus.AppMenuBar.NAVIGATE_MENU);
    menu.addMenuItem(FOCUS_SHOW, "Ctrl-Alt-.");
    // Create the bottom panel:
    panel = PanelManager.createBottomPanel(FOCUS_SHOW, $(panelHtml),200);
  });

});