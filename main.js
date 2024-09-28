import './style.css'

//This is to import jquery (download using npm install jquery)
import $ from 'jquery'

import { setupCraps } from './craps'

import Chart from 'chart.js/auto'

let dicePage = `
<div>
    <section id="tossSection">
        <div class="headerTitle">
            <h1>CRAPS</h1>
        </div>
        <div class="diceNumbers">
            <div id="dice1" class="dice">D</div>
            <div id="dice2" class="dice">D</div>
        </div>
        <div class="buttonNumbers">
            <div class="buttonRow">
                <div id="button2" class="circleButton">2</div>
                <div id="button3" class="circleButton">3</div>
                <div id="button4" class="circleButton">4</div>
                <div id="button5" class="circleButton">5</div>
                <div id="button6" class="circleButton">6</div>
                <div id="button7" class="circleButton">7</div>
            </div>
            <div class="buttonRow">
                <div id="button8" class="circleButton">8</div>
                <div id="button9" class="circleButton">9</div>
                <div id="button10" class="circleButton">10</div>
                <div id="button11" class="circleButton">11</div>
                <div id="button12" class="circleButton">12</div>
            </div>
        </div>
    </section>
    <section id="histogramSection">
        <div class="histogram">
            <canvas id="myHistogram"></canvas>
        </div>
    </section>
</div>
`
$("#app").html(dicePage)
const dice = [$('#dice1'), $('#dice2')]
const buttons = [
    $('#button2'),
    $('#button3'),
    $('#button4'),
    $('#button5'),
    $('#button6'),
    $('#button7'),
    $('#button8'),
    $('#button9'),
    $('#button10'),
    $('#button11'),
    $('#button12')
]

/*
what i've done : 
instead of create the histogram in the craps.js, i create the object of histogram in main.js
why? cause many reason. 
Efficient to pass the object : JS pass by reference
*/

// const ctx = document.getElementById('myHistogram').getContext('2d')
const ctx = $('#myHistogram').get(0).getContext('2d')

const data = {
    labels: ['2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    datasets: [{
      label: 'FREQUENCY',
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: '#ffffff',
      borderWidth: 2
    }]
}

const config = {
    type: 'bar',
    data: data,
    options: {
      scales: {
        x: {
          title: {
            display: false,
            text: 'Values',
            color: '#ffffff'
          },
          ticks: {
            color: '#ffffff',
            font: {
              size: 14
            }
          },
          grid: {
            color: '#121212'
          }
        },
        y: {
          title: {
            display: false,
            text: 'Frequency',
            color: '#ffffff'
          },
          ticks: {
            display: false,
            color: '#ffffff',
            font: {
              size: 14
            }
          },
          grid: {
            color: '#121212'
          },
          beginAtZero: true
        }
      }
    }
  }

  const myChart = new Chart(ctx, config)


setupCraps(dice, buttons, myChart)



