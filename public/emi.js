<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EMI Calculator</title>
    <link rel="stylesheet" href="../node_modules/bootstrap-icons/font/bootstrap-icons.css">
    <link rel="stylesheet" href="../node_modules/bootstrap/dist/css/bootstrap.css">
    <script src="../node_modules/bootstrap/dist/js/bootstrap.bundle.js"></script>
    <script src="../src/scripts/emi.js"></script>
</head>
<body class="bg-secondary">
    <div class="m-4 p-4 bg-light">
        <h2 class="text-center">Personal Loan EMI Calculator</h2>
        <div class="row my-4">
            <div class="col text-center">
                Amount you need <input id="txtAmount" size="16" type="text">
            </div>
            <div class="col text-center">
                for <input size="2" id="txtYears" type="text"> years
            </div>
            <div class="col text-center">
                interest rate <input id="txtRate" type="text" size="2"> %
            </div>
        </div>
        <div class="row my-4">
            <div class="col">
                <input type="range" step="10000" onchange="AmountChange()" id="rangeAmount" min="100000" max="1000000" value="100000" class="w-100 form-range">
                <div>
                    <span>&#8377; 1,00,000</span>
                    <span class="float-end">&#8377; 10,00,000</span>
                </div>
            </div>
            <div class="col">
                <input type="range" onchange="YearChange()" min="1" max="5" value="1" id="rangeYear" class="w-100 form-range">
                <div>
                    <span>1 Year</span>
                    <span class="float-end">5 Years</span>
                </div>
            </div>
            <div class="col">
                <input type="range" onchange="RateChange()" id="rangeRate" min="10.45" max="18.45" step="0.01" value="10.45" class="w-100 form-range">
                <div>
                    <span>10.45%</span>
                    <span class="float-end">18.45%</span>
                </div>
            </div>
        </div>
        <div class="row my-4">
            <div class="col text-end">
                <button onclick="CalculateClick()" class="btn btn-primary">Calculate</button>
            </div>
        </div>
        <div class="row my-3">
            <div class="col text-center">
                <span class="fs-3" id="lblResult"></span>
            </div>
        </div>
    </div>
</body>
</html>
