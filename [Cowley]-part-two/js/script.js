var weather_prompt = ('What is the temperature outside? For example... 55');
var tempFahr = prompt(weather_prompt);
var temp = tempFahr;

if(temp <= 54){
	temp = ('a coat');
} else if(temp > 54 && temp < 70){
	temp = ('a jacket');
} else if(temp > 70){
	temp = ('no jacket');
}

var event_prompt = ('What is the style of event? casual, semi-formal, or formal?')
var eventType = prompt(event_prompt);
var event = eventType;

if(event == 'casual'){
    event = ('something comfy');
} else if(event == 'semi-formal'){
    event = ('a polo');
} else if(event == 'formal'){
    event = ('a suit');
}

var result = console.log('Since it is ' + tempFahr + ' degrees and you are going to a ' + eventType + ' event you should wear ' + event + ' and ' + temp + '.');
    
