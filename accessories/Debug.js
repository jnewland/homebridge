var types = require("../lib/HAP-NodeJS/accessories/types.js");

function Debug(log, config) {
  this.log = log;
  this.name = config["name"];
}

Debug.prototype = {
  getServices: function() {
    var that = this;
    return [{
      sType: types.ACCESSORY_INFORMATION_STYPE,
      characteristics: [{
        cType: types.NAME_CTYPE,
        onUpdate: null,
        perms: ["pr"],
        format: "string",
        initialValue: "Debug",
        supportEvents: false,
        supportBonjour: false,
        manfDescription: "Bla",
        designedMaxLength: 255
      },{
        cType: types.MANUFACTURER_CTYPE,
        onUpdate: null,
        perms: ["pr"],
        format: "string",
        initialValue: "nodejs",
        supportEvents: false,
        supportBonjour: false,
        manfDescription: "Bla",
        designedMaxLength: 255
      },{
        cType: types.MODEL_CTYPE,
        onUpdate: null,
        perms: ["pr"],
        format: "string",
        initialValue: "0.0.1",
        supportEvents: false,
        supportBonjour: false,
        manfDescription: "Bla",
        designedMaxLength: 255
      },{
        cType: types.SERIAL_NUMBER_CTYPE,
        onUpdate: null,
        perms: ["pr"],
        format: "string",
        initialValue: "0123456789",
        supportEvents: false,
        supportBonjour: false,
        manfDescription: "Bla",
        designedMaxLength: 255
      },{
        cType: types.IDENTIFY_CTYPE,
        onUpdate: null,
        perms: ["pw"],
        format: "bool",
        initialValue: false,
        supportEvents: false,
        supportBonjour: false,
        manfDescription: "Identify Accessory",
        designedMaxLength: 1
      }]
    },
    {
      sType: types.LIGHTBULB_STYPE,
      characteristics: [{
        cType: types.NAME_CTYPE,
        onUpdate: null,
        perms: ["pr"],
        format: "string",
        initialValue: "Debug",
        supportEvents: false,
        supportBonjour: false,
        manfDescription: "Bla",
        designedMaxLength: 255
      },{
        cType: types.POWER_STATE_CTYPE,
        onUpdate: function(value) { that.log("Debug", "light service", value); },
        perms: ["pw","pr","ev"],
        format: "bool",
        initialValue: false,
        supportEvents: false,
        supportBonjour: false,
        manfDescription: "Turn On the Light",
        designedMaxLength: 1
      },{
        cType: types.HUE_CTYPE,
        onUpdate: function(value) { that.log("Debug", "Light - Hue", value); },
        perms: ["pw","pr","ev"],
        format: "int",
        initialValue: 0,
        supportEvents: false,
        supportBonjour: false,
        manfDescription: "Adjust Hue of Light",
        designedMinValue: 0,
        designedMaxValue: 360,
        designedMinStep: 1,
        unit: "arcdegrees"
      },{
        cType: types.BRIGHTNESS_CTYPE,
        onUpdate: function(value) { that.log("Debug", "Light - Brightness", value); },
        perms: ["pw","pr","ev"],
        format: "int",
        initialValue: 0,
        supportEvents: false,
        supportBonjour: false,
        manfDescription: "Adjust Brightness of Light",
        designedMinValue: 0,
        designedMaxValue: 100,
        designedMinStep: 1,
        unit: "%"
      },{
        cType: types.SATURATION_CTYPE,
        onUpdate: function(value) { that.log("Debug", "Light - Saturation", value); },
        perms: ["pw","pr","ev"],
        format: "int",
        initialValue: 0,
        supportEvents: false,
        supportBonjour: false,
        manfDescription: "Adjust Saturation of Light",
        designedMinValue: 0,
        designedMaxValue: 100,
        designedMinStep: 1,
        unit: "%"
      }]
    }];
  }
};

module.exports.accessory = Debug;
