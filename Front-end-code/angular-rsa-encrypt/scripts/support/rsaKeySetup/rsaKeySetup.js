/**
 * Created by Sourabh_Sethi on 4/22/2016.
 */


define(function (require, exports, module) {
    'use strict';

    var pubKey ="MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDO6KalTm3u3uY0PEK09Avglmk1eGMwMyeDbOui+BMXobJudaB11oZKf2um5DIV/c+sokm5JRLFt7r/LrRlmPqkaU3rFrGBkWQgjOqtaDpZg4vlE1GI2/SRAzcaiO0mS83aEXNWgXzpF58e8mKDYEh5wV2JX8cA6eaR4UKGyGB0WQIDAQAB";
    var exp = '010001';
    var mod = '8aca8887d77684064da0a7620abde009a6ad2f2688e54fdc8b6f719523a86ac1b5bad219199645902330151da22042587656dd5bf47e9022b593f02826ba73e0fd1d3117922be17e861817b3637b622a0b7ddc3dbc9711922410dec110f15ef48bde874a7fa17fab3655f430de52a7ccb76b33af0f8579c3e189a0318271cd7f';


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