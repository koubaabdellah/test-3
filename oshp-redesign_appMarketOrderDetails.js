var appOrderDetailsCtrl=["$scope","$rootScope","$log","OSHPService","ReportInterfaceAngular","appdetails",function($scope,$rootScope,$log,OSHPService,ReportInterfaceAngular,appdetails){$log.log("entering appOrderDetails Controller");var current=$rootScope.current;$scope.newOrderMulItems={},$scope.newOrderSingleItem={},$scope.multipleStatusFlag=!1,$scope.noOfItemsToDisplay=0,$rootScope.appMarketOrderTypesConstant={newOrder:"New",changeOrder:"Change product",increaseQuantity:"Increase licenses",decreaseQuantity:"Decrease licenses",cancelSubscription:"Cancel licenses"},current||(current=$rootScope.current=SessionKeeper.read()),$rootScope.$on("$routeChangeSuccess",function(){window.scrollTo(0,0),$("html, body").animate({scrollTop:0},200)});var additionalData=current.appMarketOrderReportingData;if(ReportInterfaceAngular.setSystemEventTrack("CMO_System_Order_Mgmt_Details_Display","0","1",additionalData),current.isLucyFlow=!0,$rootScope.setPageContent(),$scope.$watch("content",function(){$rootScope.content&&($rootScope.glossary=$rootScope.prepareOrderStatusJson($rootScope.content.Common_AppMarket_Order_Details.Glossary.FieldLabels),$rootScope.headingMessage=$rootScope.content.M_7_70_5_App_Marketplace_Order_Details.PageTitle+" "+$rootScope.content.M_7_70_5_App_Marketplace_Order_Details.PageLevelItems.FieldLabels.ItemLeftParen.Label+$scope.noOfItemsToDisplay+" "+($scope.noOfItemsToDisplay>1?$rootScope.content.M_7_70_5_App_Marketplace_Order_Details.PageLevelItems.FieldLabels.MultipleItems.Label:$rootScope.content.M_7_70_5_App_Marketplace_Order_Details.PageLevelItems.FieldLabels.SingleItem.Label)+$rootScope.content.M_7_70_5_App_Marketplace_Order_Details.PageLevelItems.FieldLabels.ItemRightParen.Label)}),current.appMarketOrderDetails&&current.appMarketOrderDetails.appMarketLine){var listAppMarketProduct=current.appMarketOrderDetails.appMarketLine.listAppMarketProduct,appMarketLine=current.appMarketOrderDetails.appMarketLine;if($scope.appMarketLine=appMarketLine,$scope.appMarketOrderDetails=current.appMarketOrderDetails,listAppMarketProduct.length>1){for(var prev_item=null,list=listAppMarketProduct,i=0;i<list.length;i++){if(null!==prev_item&&prev_item.itemStatus!==list[i].itemStatus){$scope.multipleStatusFlag=!0;break}prev_item=list[i]}$scope.newOrderSingleItem={},$scope.newOrderMulItems=listAppMarketProduct}else $scope.newOrderSingleItem=listAppMarketProduct[0],$scope.newOrderMulItems={};if(null!=listAppMarketProduct&&listAppMarketProduct.length>0)for(var i=0;i<listAppMarketProduct.length;i++)appMarketLine.orderSubType&&(appMarketLine.orderSubType===$rootScope.appMarketOrderTypesConstant.newOrder?$scope.noOfItemsToDisplay=eval($scope.noOfItemsToDisplay)+eval(listAppMarketProduct[i].netLicenseQuantity):appMarketLine.orderSubType===$rootScope.appMarketOrderTypesConstant.changeOrder?$scope.noOfItemsToDisplay=eval($scope.noOfItemsToDisplay)+eval(listAppMarketProduct[i].netLicenseQuantity):appMarketLine.orderSubType===$rootScope.appMarketOrderTypesConstant.increaseQuantity?$scope.noOfItemsToDisplay=eval($scope.noOfItemsToDisplay)+eval(listAppMarketProduct[i].increasedLicenseQuantity):appMarketLine.orderSubType===$rootScope.appMarketOrderTypesConstant.decreaseQuantity?$scope.noOfItemsToDisplay=eval($scope.noOfItemsToDisplay)+eval(listAppMarketProduct[i].reducedLicenseQuantity):appMarketLine.orderSubType===$rootScope.appMarketOrderTypesConstant.cancelSubscription&&($scope.noOfItemsToDisplay=eval($scope.noOfItemsToDisplay)+eval(appMarketLine.noOfItems)))}try{isTCinitialized&&(isTCinitialized=!1,Inq.reinitChat())}catch(e){console.warn("inqFrame","failed!")}$scope.backToSearch=function(){var linkName=$rootScope.content.M_7_70_5_App_Marketplace_Order_Details.PageLevelItems.Links.SearchPageLink.Label;ReportInterfaceAngular.setLinkTrack(linkName,"Body","/checkmyorder/omhub.rt"),$scope.setView("omhub")}}];