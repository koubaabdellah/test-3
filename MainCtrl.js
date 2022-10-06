app.controller('MainCtrl', ['$scope', mainCtrl]);

function mainCtrl($scope) {
	var vm = this;

	angular.element(document).ready(function () {
		$scope.initilize();
	})

	$scope.initilize = function () {
		$scope.set_default();
		$scope.calulate_discount();
		$scope.$apply();

		window.addEventListener('message', function (e) {
			if (e.data === "reset") {
				console.log("reset");
				$scope.reset_click();
			}
		});
	}

	$scope.reset_click = function () {
		$scope.set_default();
		$scope.calulate_discount();
		$scope.$apply();
		$scope.post_height();
	}

	$scope.set_default = function () {
		$scope.num_of_line = 2;
        $scope.auto_pay = true;
        $scope.auto_pay_discount = 5;

		$scope.total_before_discount = 0;
		$scope.total_after_discount = 0;
		$scope.discount_amount = 0;
		$scope.annual_saving = 0;

		$scope.lines_array =
        [
            { price: 65, gb: -1, multi_line_discount: 0, active: true, discount_applied: true },
            { price: 65, gb: -1, multi_line_discount: 5, active: true, discount_applied: true },
            { price: 65, gb: -1, multi_line_discount: 10, active: false, discount_applied: true },
            { price: 65, gb: -1, multi_line_discount: 15, active: false, discount_applied: true },
            { price: 65, gb: -1, multi_line_discount: 20, active: false, discount_applied: true }
        ];
	}

	$scope.add_line_click = function () {
		for (var i = 0; i < $scope.lines_array.length; i++) {
			if ($scope.lines_array[i].active === false) {
				$scope.lines_array[i].active = true;
				$scope.num_of_line += 1;

				/*
				document.dispatchEvent(new CustomEvent('calculator:added', {
					'detail': { numOfLine: $scope.num_of_line }
				}));
				*/
				$(document).trigger('calculator:added', $scope.num_of_line);
				break;
			}
		}
		$scope.calulate_discount();

		$('#line-action').html('');
		window.setTimeout(function () {
			$('#line-action').html('<span role="alert">Line added</span>');
			$('#remove-line').focus();
			window.setTimeout(function () {
				$('#line-action').html('');
			}, 1000);
		}, 25);
		$scope.post_height();
	}

	$scope.post_height = function () {
        if (window.post_height) window.post_height();
	}

	$scope.remove_line_click = function (line) {
		/*
		document.dispatchEvent(new CustomEvent('calculator:removed', {
			'detail': { numOfLine: $scope.num_of_line-1 }
		}));
		*/
		$(document).trigger('calculator:removed', $scope.num_of_line-1);

		line.active = false;
		line.price = 65;
		line.gb = -1;
		$scope.num_of_line -= 1;
		$scope.calulate_discount();

		$('#line-action').html('');
		window.setTimeout(function () {
			$('#line-action').html('<span role="alert">Line removed</span>');
			$('#add-line').focus();
			window.setTimeout(function () {
				$('#line-action').html('');
			}, 1000);
		}, 25);
		$scope.post_height();
	}

	$scope.set_line_price = function (line, price, event) {
		line.price = price;

		if (price === 65) {
			line.gb = -1;
		}
		else if (price === 45) {
			line.gb = 6;
        }
        else if (price === 35) {
            line.gb = 1;
        }
		else {
            line.gb = 0;
		}

		$scope.calulate_discount();
	}

	$scope.auto_pay_click = function (event) {
		$scope.auto_pay = !$scope.auto_pay;
		$scope.lines_array[0].discount_applied = $(event.currentTarget).prop("checked");
		$scope.calulate_discount();

	}

	$scope.calulate_discount = function () {
		$scope.total_before_discount = 0;
		$scope.total_after_discount = 0;
		$scope.discount_amount = 0;

		for (var i = 1; i <= $scope.num_of_line; i++) {
            $scope.total_before_discount += $scope.lines_array[i - 1].price;
            if (!$scope.auto_pay) {
                $scope.auto_pay_discount = 0;
            }
            else {
                $scope.auto_pay_discount = 5;
            }
            if ($scope.lines_array[i - 1].discount_applied) {
				$scope.total_after_discount += $scope.lines_array[i - 1].price - $scope.lines_array[i - 1].multi_line_discount - $scope.auto_pay_discount;
				$scope.discount_amount += $scope.lines_array[i - 1].multi_line_discount + $scope.auto_pay_discount;
			}
			else {
				$scope.total_after_discount += $scope.lines_array[i - 1].price;
			}
        }
		$scope.annual_saving = $scope.discount_amount * 12;
	}

};