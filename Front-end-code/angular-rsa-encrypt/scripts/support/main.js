/**
 * Created by Sourabh_Sethi on 4/22/2016.
 */


define(function (require, exports, module) {
    'use strict';


    var FingerPrintItems1 = require('./angular-rsa-encrypt.js');
    var fingerPrintFactory,encodeString;

    fingerPrintFactory = {

        default: function () {
            return new FingerPrintItems1.RSAEncrypt();
        }
    };

    function setEncodeDevice(Key,mod,exp) {
               fingerPrintFactory.default().setKey(Key,mod,exp);
    }

    function encrptDevice(Value) {
        encodeString =  fingerPrintFactory.default().encrypt(Value);
        return encodeString;
    }


    exports.setEncodeKey = function (Key,mod,exp) {
         setEncodeDevice(Key,mod,exp);
    };

    exports.setEncrpt = function (Value) {
       return encrptDevice(Value);
    };

});

