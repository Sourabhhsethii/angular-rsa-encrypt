/**
 * Created by Sourabh_Sethi on 4/22/2016.
 */


define(function (require, exports, module) {
    'use strict';

    var pubKey ="MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDO6KalTm3u3uY0PEK09Avglmk1eGMwMyeDbOui+BMXobJudaB11oZKf2um5DIV/c+sokm5JRLFt7r/LrRlmPqkaU3rFrGBkWQgjOqtaDpZg4vlE1GI2/SRAzcaiO0mS83aEXNWgXzpF58e8mKDYEh5wV2JX8cA6eaR4UKGyGB0WQIDAQAB";
    var exp = '010002';
    var mod = 'b2c0e160cd17f8d7038c4f20119ae73cfd426d86ce5a58215786c01c7c46ca5360bd44523111bd35e04441282b2a7892a3aefc5d552965a28d3c057d3ec910b7d4bdb2301211ecf2f30c6eaa32e0a0262089a38b387450d00b20263ca71471ea65564c12a50d7efeb8c5734501ad330f2597e54ee3dda5b20b07ce4e3e4636b5';


    function getValue(Value) {

        if(Value === 'publicKeyValue'){

            return pubKey;

        } else if(Value === 'mod'){

            return mod;

        } else if(Value === 'exp'){

            return exp;
        }
        return 0;
    }

    exports.getValues = function (Value) {
        return getValue(Value);
    };


});