import './assets/style.css';
import Logo from './assets/images/logo.png'

const URL = 'http://api.weatherapi.com/v1/forecast.json?key=0512e4ab4e7644bb96901409230210&q=London&days=7&aqi=no&alerts=no'

const requestHandler = (() => {
    const generateURL = (query) => {
        return `http://api.weatherapi.com/v1/forecast.json?key=0512e4ab4e7644bb96901409230210&q=${query}&days=7&aqi=no&alerts=no`
    };
    const basicRequest = async function (query) {
        const response = await fetch(this.generateURL(query), {mode: 'cors'});
        const weatherData = await response.json();
        return weatherData.forecast.forecastday;
    };

    const getCelsius = async function (day, query) {
        const rv = [];
        const data = await this.basicRequest(query);
        console.log(data);
        for(let i=0; i<24;i++) {
            rv.push(data[day].hour[i].temp_c);
        }
        return rv;
    };

    const getFahrenheit = async function (day, query) {
        const rv = [];
        const data = await this.basicRequest(query);
        console.log(data);
        for(let i=0; i<24; i++) {
            rv.push(data[day].hour[i].temp_f);
        }
        return rv;
    }
    return {basicRequest, getCelsius, getFahrenheit, generateURL};
})();

const displayHandler = (() => {
    let mode = 'F';
    let location = 'London';
    const dt = new Date();
    const cd = dt.getDay();
    const dayMap = {0: 'Sunday', 1: 'Monday', 2: 'Tuesday', 3: 'Wednesday', 4: 'Thursday', 5: 'Friday', 6: 'Saturday',
                    7: 'Sunday', 8: 'Monday', 9: 'Tuesday', 10: 'Wednesday', 11: 'Thursday', 12: 'Friday', 13: 'Saturday'};
    
    const displayAll = () => {
        displayHandler.displayCells(displayHandler.mode, displayHandler.location);
        displayHandler.displayLocationForm();
        displayHandler.displayToggleForm();
        displayHandler.displayHeader();
    };
    const generateCell = async function (day, mode, query) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        const forecast = document.createElement('ul');
        forecast.classList.add('forecast');
        let data = [];
        if (mode == 'C') {
            data = String(await requestHandler.getCelsius(day, query)).split(',');
        }
        else {
            data = String(await requestHandler.getFahrenheit(day, query)).split(',');           
        }
        let header = document.createElement('p');
        header.classList.add('cellHeader');
        header.textContent = dayMap[day+cd];
        cell.appendChild(header);
        for(let i=0;i<24;i++) {
            let li = document.createElement('li');
            li.classList.add('forecastItem');
            li.textContent = `${data[i]}º`;
            forecast.appendChild(li);
        }
        cell.appendChild(forecast);
        return cell;
    };

    const generateFirstCell = () => {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        let times = document.createElement('ul');
        times.classList.add('times');
        let header = document.createElement('p');
        header.classList.add('cellHeader');
        header.textContent = 'Time';
        cell.appendChild(header);
        for(let i=0;i<24;i++){
            let li = document.createElement('li');
            li.textContent = `${i}:00`;
            times.appendChild(li);
        }
        cell.appendChild(times);
        return cell;
    }

    const displayCells = async function (mode, query) {
        console.log(query);
        const wrapper = document.querySelector('div#cells');
        const newWrapper = document.createElement('div');
        newWrapper.id = 'cells';
        const first = this.generateFirstCell();
        newWrapper.appendChild(first);
        for(let i=0;i<7;i++) {
            let cell = await this.generateCell(i, mode, query);
            newWrapper.appendChild(cell);
        }
        wrapper.replaceWith(newWrapper);

        
    };

    const displayLocationForm = () => {
        const newLocationForm = (new locationForm()).form;
        if(document.querySelector('.locationform')) {
            const currentLocationForm = document.querySelector('.locationform');
            currentLocationForm.replaceWith(newLocationForm);
        }
        else {
            const sidebar = document.querySelector('#sidebar');
            sidebar.appendChild(newLocationForm);
        }
        
    }

    const displayToggleForm = (mode, location) => {
        let f = new toggleForm(mode, location);
        f = f.form;
        if(document.querySelector('.toggleform')) {
            const current = document.querySelector('.toggleform');
            current.replaceWith(f);
        }
        else {
            const sidebar = document.querySelector('#sidebar');
            sidebar.appendChild(f);
        }
        
    }

    const displayHeader = () => {
        const logo = document.querySelector('.left>img');
        logo.src = Logo;
        const locationDisplay = document.querySelector('.locationDisplay');
        locationDisplay.textContent = `Displaying forecast for: ${displayHandler.location} in º${displayHandler.mode}`;
    }
    
    return {displayAll, generateCell, displayCells, displayLocationForm, generateFirstCell, displayToggleForm, displayHeader, mode, location};
})();

class locationForm {
    constructor() {
        this.form = this.generateForm();
    }

    get form() {
        return this._form;
    }
    set form(form) {
        this._form = form;
    }

    generateForm(mode) {
        console.log("generating form");
        //create form
        let form = document.createElement("form");
        form.setAttribute("method", "post");
        form.setAttribute("action", "submit.php");
        form.classList.add('locationform');

        //create label
        let label = document.createElement('label');
        label.setAttribute('for', 'location');
        label.textContent = 'Search weekly forecast\n ';

        //create input element for todo title
        let LOCATION = document.createElement("input");
        LOCATION.setAttribute("type", "text");
        LOCATION.setAttribute("name", "location");
        LOCATION.setAttribute("placeholder", "ex. London");

        //create a submit button
        let s = document.createElement("input");
        s.setAttribute("type", "button");
        s.setAttribute("name", "button");
        s.setAttribute("value", "Search forecast");
        s.addEventListener("click", function (e) {
            displayHandler.location = this.form.location.value;
            displayHandler.displayAll(displayHandler.mode, displayHandler.location);
        });
        form.appendChild(label);
        form.appendChild(LOCATION);
        form.appendChild(s);
        return form;
    }
}

class toggleForm {
    constructor() {
        this.form = this.generateForm();
    }

    get form() {
        return this._form;
    }
    set form(form) {
        this._form = form;
    }
    generateForm(current, location) {
        console.log("generating form");
        //create form
        let form = document.createElement("form");
        form.setAttribute("method", "post");
        form.setAttribute("action", "submit.php");
        form.classList.add('toggleform');
        //create a toggle button
        let s = document.createElement("input");
        s.setAttribute("type", "button");
        s.setAttribute("name", "button");
        s.setAttribute("value", "Toggle ºC - ºF");
        s.addEventListener("click", function (e) {
            if(displayHandler.mode == 'F'){
                displayHandler.mode = 'C';
                displayHandler.displayAll(displayHandler.mode, displayHandler.location);
            }
            else {
                displayHandler.mode = 'F';
                displayHandler.displayAll(displayHandler.mode, displayHandler.location);  
            }
        });

        form.appendChild(s);
        return form;
    }

}

const dt = new Date();
console.log(dt.getDay());
displayHandler.displayAll();