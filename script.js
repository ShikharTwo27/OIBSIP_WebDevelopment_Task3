function convertTemperature() {

    const temp =
        parseFloat(
            document.getElementById("temperature").value
        );

    const from =
        document.getElementById("fromUnit").value;

    const to =
        document.getElementById("toUnit").value;

    const resultBox =
        document.getElementById("result");

    if (isNaN(temp)) {

        resultBox.innerHTML =
            "⚠️ Please enter a valid temperature.";

        return;
    }

    let celsius;

    if (from === "celsius") {
        celsius = temp;
    }

    else if (from === "fahrenheit") {
        celsius = (temp - 32) * 5 / 9;
    }

    else if (from === "kelvin") {
        celsius = temp - 273.15;
    }

    let result;

    if (to === "celsius") {
        result = celsius;
    }

    else if (to === "fahrenheit") {
        result = (celsius * 9 / 5) + 32;
    }

    else if (to === "kelvin") {
        result = celsius + 273.15;
    }

    resultBox.innerHTML =
        `✅ ${temp} ${from}
         = ${result.toFixed(2)} ${to}`;
}

function clearFields() {

    document.getElementById("temperature").value = "";

    document.getElementById("fromUnit").selectedIndex = 0;

    document.getElementById("toUnit").selectedIndex = 0;

    document.getElementById("result").innerHTML =
        "Result will appear here";
}