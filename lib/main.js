/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
const data = require("self").data;
var r_nots = require("notifications");
var panel = require("panel").Panel({
  width: 500,
  height: 455,
  contentURL: data.url("index.html"),
  onHide: function () {
    panel.contentURL = data.url("index.html");
  }
});
require("widget").Widget({
  id: "mozillahispano",
  label: "Centro de Mozilla Hispano",
  contentURL: data.url("mh.png"),
  onMouseover: function() {
    this.contentURL = data.url("mh2.png");
	},
	  onMouseout: function() {
    this.contentURL = data.url("mh.png");
  },
  panel: panel,
  onClick: function() {
    panel.contentURL = data.url("index.html");
  }
});
r_nots.notify({
  title: "Centro de Mozilla Hispano",
  text: "El centro de Mozilla Hispano esta listo."
});
