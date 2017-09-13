function solonumeros(e)
{
    var keynum = window.event ? window.event.keyCode : e.which;
    if ((keynum == 42) || (keynum == 43) || (keynum == 45) || (keynum == 47))
        return operador_tec(String.fromCharCode(keynum));
    else if((keynum == 46))
    	return punto_tec(String.fromCharCode(keynum));
    else if((keynum == 61))
    {
    	document.calculator.ans.value=eval(document.calculator.ans.value);
    	return false;
    }
    return /\d/.test(String.fromCharCode(keynum));

}

function operador_tec(op)
{
	var total = document.getElementById("total").value;
	if(total=='' && op!= '-')
	{
		alert("ingrese un numero");
		return false;
	}
	else
	{
		var last_char = total.substring(total.length-1);
		if(total.length != 1 || !isNaN(last_char))
		{
			if((last_char == '+') || (last_char == '-') || (last_char == '*') || (last_char == '/'))
			{
				var exp = total.substring(0,total.length-1);
				document.getElementById("total").value = exp;
				return true;
			}
			else
			{
				return true;
			}
		}
		else
		{
			alert("ingrese un numero");
			return false;
		}
		
	}	
}

function punto_tec(op)
{
	var total = document.getElementById("total").value;
	var last_char = total.substring(total.length-1);
	if((total == '') || (last_char== '+') || (last_char== '-') || (last_char== '*') || (last_char== '/'))
	{
		document.getElementById("total").value += '0';
		return true;
	}
	else if (!isNaN(last_char))
	{
		var cont2 = 0; 
		var cont3 = 0;
		for(var i in total)
		{
			if((total[i] == '+') || (total[i] == '-') || (total[i] == '*') || (total[i] == '/'))
			{
				cont2 = i;
			}
		}
		var exp = total.substring(cont2);
		for (var i in exp)
		{
			if (exp[i] == '.')
				cont3++;
		}
		if(cont3 == 0)
		{
			return true;
		}
		return false;
	}
	return false;
}

function operador(op)
{
	var total = document.getElementById("total").value;
	if(total=='' && op!= '-')
	{
		alert("ingrese un numero");
	}
	else
	{
		var last_char = total.substring(total.length-1);
		if(total.length != 1 || !isNaN(last_char))
		{
			if((last_char == '+') || (last_char == '-') || (last_char == '*') || (last_char == '/'))
			{
				var exp = total.substring(0,total.length-1);
				exp += op;
				document.getElementById("total").value = exp;
			}
			else
			{
				document.getElementById("total").value += op;
			}
		}
		else
		{
			alert("ingrese un numero");
		}
		
	}	
}

function punto(op)
{
	var total = document.getElementById("total").value;
	var last_char = total.substring(total.length-1);
	if((total == '') || (last_char== '+') || (last_char== '-') || (last_char== '*') || (last_char== '/'))
	{
		document.getElementById("total").value += '0' + op;
	}
	else if (!isNaN(last_char))
	{
		var cont2 = 0; 
		var cont3 = 0;
		for(var i in total)
		{
			if((total[i] == '+') || (total[i] == '-') || (total[i] == '*') || (total[i] == '/'))
			{
				cont2 = i;
			}
		}
		var exp = total.substring(cont2);
		for (var i in exp)
		{
			if (exp[i] == '.')
				cont3++;
		}
		if(cont3 == 0)
		{
			document.getElementById("total").value += op;
		}
	}
}
