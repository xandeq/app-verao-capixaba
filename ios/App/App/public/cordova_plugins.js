
  cordova.define('cordova/plugin_list', function(require, exports, module) {
    module.exports = [
      {
          "id": "cordova-plugin-x-socialsharing.SocialSharing",
          "file": "plugins/cordova-plugin-x-socialsharing/www/SocialSharing.js",
          "pluginId": "cordova-plugin-x-socialsharing",
        "clobbers": [
          "window.plugins.socialsharing"
        ]
        }
    ];
    module.exports.metadata =
    // TOP OF METADATA
    {
      "cordova-plugin-x-socialsharing": "6.0.3"
    };
    // BOTTOM OF METADATA
    });
    