"use strict";

var mongoose = require("mongoose");
var Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  kinh: {
    type: String,
    required: true
  },
  viDo: {
    type: String,
    required: true
  },
  doAm: {
    type: String,
    required: true
  },
  doAm_1: {
    type: String,
    required: true
  },
  luongMua: {
    type: String,
    required: true
  },
  satLo: {
    type: String,
    required: true
  },
  thoiGianMua: {
    type: String,
    required: true
  },
  doNghieng: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});
module.exports = mongoose.model("Home", Schema);
