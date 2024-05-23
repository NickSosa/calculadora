/* Función borrar */
function backspace(calc) {											
    size = calc.display.value.length;
    calc.display.value = calc.display.value.substring(0, size-1);
}

/* Calcular */
function calculate(calc) {
        //Reemplazar la parte visual con funcional
        calc.display.value = calc.display.value.replace("sin(", "Math.sin(");
        calc.display.value = calc.display.value.replace("cos(", "Math.cos(");
        calc.display.value = calc.display.value.replace("tan(", "Math.tan(");
        calc.display.value = calc.display.value.replace("E", "Math.E");
        calc.display.value = calc.display.value.replace("π", "Math.PI");
        calc.display.value = calc.display.value.replace("^", "**");
        calc.display.value = calc.display.value.replace("log(", "Math.log10(");
        if(calc.display.value.includes("√")){
            calc.display.value = calc.display.value.replace("√", "Math.sqrt(") + ")";}
        calc.display.value = calc.display.value.replace("exp(", "Math.exp(");
        console.log(calc.display.value)
    
    //Factorial
    if(calc.display.value.includes("!")) {
        
        size = calc.display.value.length;
        n = Number(calc.display.value.substring(0, size-1));
        f = 1;
        
        for(i = 2; i <= n; i++)
            f = f*i;
        calc.display.value = f;
    }
    
    //Porcentaje
    else if(calc.display.value.includes("%")) {
        
        size = calc.display.value.length;
        n = Number(calc.display.value.substring(0, size-1));
        calc.display.value = n/100;
    }

    else
        //Ejecutar
        calc.display.value = eval(calc.display.value);
}