//animacja przedstawiająca sposób działania algorytmu sita Eratostenesa
var canvas = document.getElementById('cnv');
var context = canvas.getContext('2d'); 
var numbers = 81; // must be the square of a natural number, works for two digit-numbers
var amount = Math.sqrt(numbers); // square of numbers
var square_size = canvas.height/amount;
var correction = square_size/2; // for correct display
var current_number; // iterator
var current_erased_number; // second iterator
var sito_array = new Array(numbers+1)
var finded = 0; //finded prime numbers
var frame_width = 3; // for correct display


function mark_number(number)
{
    var x = (number-1) % (amount);
    var y = Math.floor((number-1) / amount);

    context.fillStyle = 'green';
    context.fillRect((x)*square_size, (y)*square_size, square_size, frame_width);
    context.fillRect((x)*square_size, (y)*square_size, frame_width, square_size);
    context.fillRect((x+1)*square_size-frame_width, (y)*square_size, frame_width, square_size);
    context.fillRect((x)*square_size, (y+1)*square_size-frame_width, square_size, frame_width);
    
    context.fillStyle = 'blue';
    context.font = "bold 22px sans-serif";
    context.textBaseline = "middle";
    context.fillText(number, canvas.height + (canvas.width-canvas.height)/4 + (canvas.width-canvas.height)/2 * (finded%2) , correction + square_size*0.8 * Math.floor(finded/2));
}

function erase_number(number)
{
    var x = (number-1) % (amount);
    var y = Math.floor((number-1) / amount);

    context.beginPath();
    context.moveTo(x*square_size, y*square_size);
    context.lineTo((x+1)*square_size, (y+1)*square_size);
    context.strokeStyle = "#d00";
    context.lineWidth = 3;
    context.stroke();
    
}

function animate() 
{
    var time = 600;
    var dzialanie = 1;
    while(dzialanie == 1)
    {
        if(current_erased_number == 0)
        {
            current_number = current_number+1;
            if(current_number >= numbers)
            {
                setTimeout(initiate(), time);
                return;
            }
            else if(sito_array[current_number] == 0)
            {
                mark_number(current_number);
                finded = finded +1;
                dzialanie = 0;
                current_erased_number = current_number;
                time = time * 3;
            }
        }
        else
        {
            current_erased_number = current_erased_number + current_number;
            if(current_erased_number > numbers)
            {
                current_erased_number = 0;
            }
            else
            {
                if(sito_array[current_erased_number] == 0)
                {
                    erase_number(current_erased_number);
                    sito_array[current_erased_number] = 1;
                    dzialanie = 0;
                }
            }
        }
    }

    setTimeout(animate, time);
}

function initiate()
{
    current_number = 1;
    current_erased_number = 0;
    finded = 0;
    context.clearRect(0, 0, canvas.width, canvas.height);   
    context.font = "bold 20px sans-serif";
    context.fillStyle = 'black';
    context.textBaseline = "middle";
    context.beginPath();
    for (var i = 0; i < amount; i++) 
    {
        for(var j = 0; j < amount; j++)
        {
            context.fillText(i*amount+j+1, square_size*j + correction - 5, square_size*i + correction + 3);
        }
    }

    for(var i = 0; i < numbers+1; i++)
    {
        sito_array[i] = 0;
    }



    setTimeout(animate, 33);
}

initiate();