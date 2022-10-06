"use strict";angular.module("ng").filter("tel",function(){return function(tel){if(!tel)return"";var value=tel.toString().trim().replace(/[^\d]+/g,"");if(value.match(/[^0-9]/))return tel;var country,city,number,phone;return country=value.slice(0,3),number=value.slice(3),city=number.slice(0,3),phone=number.slice(3),(country+"."+city+"."+phone).trim()}}),angular.module("ng").filter("attClear",function(){return function(input){if(input)return input.replace(/[^0-9]/g,"")}}),angular.module("ng").filter("mOrderNum",function(){return function(mOrderNum){if(!mOrderNum)return"";var value=mOrderNum.toString().trim().replace(/^\+/,"");if(value.match(/[^0-9]/))return mOrderNum;var mOrderNumP1,mOrderNumP2,number,mOrderNumP3;return mOrderNumP1=value.slice(0,3),number=value.slice(3),mOrderNumP2=number.slice(0,3),mOrderNumP3=number.slice(3),(mOrderNumP1+" "+mOrderNumP2+" "+mOrderNumP3).trim()}}),angular.module("ng").filter("groupBy",function(){var results={};return function(data,key){if(data&&key){var result;if(this.$id){var scopeId=this.$id;results[scopeId]||(results[scopeId]={},this.$on("$destroy",function(){delete results[scopeId]})),result=results[scopeId]}else result={};for(var groupKey in result)result[groupKey].splice(0,result[groupKey].length);for(var i=0;i<data.length;i++)result[data[i][key]]||(result[data[i][key]]=[]),"true"===data[i].consentRequired&&"productStatus"!==key?(result[data[i].yodaLineId]=[],result[data[i].yodaLineId].push(data[i])):result[data[i][key]].push(data[i]);for(var keys=Object.keys(result),k=0;k<keys.length;k++)0===result[keys[k]].length&&delete result[keys[k]];return result}}}),angular.module("ng").filter("groupByWLSItems",function(){var results={};return function(data,key){if(data&&key){var result;if(this.$id){var scopeId=this.$id;results[scopeId]||(results[scopeId]={},this.$on("$destroy",function(){delete results[scopeId]})),result=results[scopeId]}else result={};for(var groupKey in result)result[groupKey].splice(0,result[groupKey].length);for(var i=0;i<data.length;i++)result[data[i][key]]||(result[data[i][key]]=[]),"true"===data[i].consentRequired&&"statusSortCode"!==key?(result[data[i].yodaLineId]=[],result[data[i].yodaLineId].push(data[i])):result[data[i][key]].push(data[i]);for(var keys=Object.keys(result),k=0;k<keys.length;k++)0===result[keys[k]].length&&delete result[keys[k]];return result}}}),angular.module("ng").filter("groupBySDItems",function(){var results={};return function(data,key){if(data&&key){var result;if(this.$id){var scopeId=this.$id;results[scopeId]||(results[scopeId]={},this.$on("$destroy",function(){delete results[scopeId]})),result=results[scopeId]}else result={};for(var groupKey in result)result[groupKey].splice(0,result[groupKey].length);for(var i=0;i<data.length;i++)result[data[i][key]]||(result[data[i][key]]=[]),"true"===data[i].consentRequired&&"statusSortCode"!==key?(result[data[i].yodaLineId]=[],result[data[i].yodaLineId].push(data[i])):result[data[i][key]].push(data[i]);for(var keys=Object.keys(result),k=0;k<keys.length;k++)0===result[keys[k]].length&&delete result[keys[k]];return result}}}),angular.module("ng").filter("groupByShippedSort",function(){var results={};return function(data,key){if(data&&key){var result;if(this.$id){var scopeId=this.$id;results[scopeId]||(results[scopeId]={},this.$on("$destroy",function(){delete results[scopeId]})),result=results[scopeId]}else result={};for(var groupKey in result)result[groupKey].splice(0,result[groupKey].length);for(var i=0;i<data.length;i++)result[data[i][key]]||(result[data[i][key]]=[]),result[data[i][key]].push(data[i]);for(var keys=Object.keys(result),k=0;k<keys.length;k++)0===result[keys[k]].length&&delete result[keys[k]];return result}}}),angular.module("ng").filter("groupShippedBy",function(){var results={};return function(data,key){if(data&&key){var result;if(this.$id){var scopeId=this.$id;results[scopeId]||(results[scopeId]={},this.$on("$destroy",function(){delete results[scopeId]})),result=results[scopeId]}else result={};for(var groupKey in result)result[groupKey].splice(0,result[groupKey].length);for(var i=0;i<data.length;i++)result[data[i][key]]||(result[data[i][key]]=[]),"true"===data[i].consentRequired&&"trackingNumSort"!==key?(result[data[i].yodaLineId]=[],result[data[i].yodaLineId].push(data[i])):result[data[i][key]].push(data[i]);for(var keys=Object.keys(result),k=0;k<keys.length;k++)0===result[keys[k]].length&&delete result[keys[k]];return result}}}),angular.module("ng").filter("groupMessageBy",function(){var results={};return function(data,key){if(data&&key){var result;if(this.$id){var scopeId=this.$id;results[scopeId]||(results[scopeId]={},this.$on("$destroy",function(){delete results[scopeId]})),result=results[scopeId]}else result={};for(var groupKey in result)result[groupKey].splice(0,result[groupKey].length);for(var i=0;i<data.length;i++)result[data[i][key]]||(result[data[i][key]]=[]);for(var keys=Object.keys(result),k=0;k<keys.length;k++)0===result[keys[k]].length&&delete result[keys[k]];return result}}}),angular.module("ng").filter("groupByItemStatusAppMarket",function(){return function(list,group_by){var results=[],prev_item=null,group_changed=!1,new_field=group_by+"_grp";return angular.forEach(list,function(item){group_changed=!1,null!==prev_item?prev_item[group_by]!==item[group_by]&&(group_changed=!0):group_changed=!0,item[new_field]=!!group_changed,results.push(item),prev_item=item}),results}});