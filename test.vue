<template lang="pug">
.zxc-time-picker(lang="en" v-bind:show-hours="true" v-bind:show-minutes="true" v-bind:show-seconds="true")
    div(v-bind:class="['zxc-time-picker-overlay', { 'zxc-active': overlayActive }]")
        .zxc-time-picker
            .zxc-time-picker-pattern
                input(type="radio" v-model="selectedPattern" v-bind:id="patternId12" v-bind:name="patternName" value="12" v-bind:click="this.renderTime('h')")
                label(v-bind:for="patternId12") {{ showLanguage.pattern12H }}
                input(type="radio" v-model="selectedPattern" v-bind:id="patternId24" v-bind:name="patternName" value="24" v-bind:click="this.renderTime('h')")
                label(v-bind:for="patternId24") {{ showLanguage.pattern24H }}
            .zxc-time-picker-image(v-bind:class="{ 'zxc-time-picker-day': dayActive, 'zxc-time-picker-night': nightActive }")
                .zxc-time-picker-bg.zxc-time-picker-bg-day
                .zxc-time-picker-bg.zxc-time-picker-bg-night
                svg.zxc-time-picker-sun(viewBox="0 0 24 24")
                    path(d="M3.55,18.54L4.96,19.95L6.76,18.16L5.34,16.74M11,22.45C11.32,22.45 13,22.45 13,22.45V19.5H11M12,5.5A6,6 0 0,0 6,11.5A6,6 0 0,0 12,17.5A6,6 0 0,0 18,11.5C18,8.18 15.31,5.5 12,5.5M20,12.5H23V10.5H20M17.24,18.16L19.04,19.95L20.45,18.54L18.66,16.74M20.45,4.46L19.04,3.05L17.24,4.84L18.66,6.26M13,0.55H11V3.5H13M4,10.5H1V12.5H4M6.76,4.84L4.96,3.05L3.55,4.46L5.34,6.26L6.76,4.84Z")
                svg.zxc-time-picker-cloud(viewBox="0 0 24 24")
                    path(d="M19.35,10.03C18.67,6.59 15.64,4 12,4C9.11,4 6.6,5.64 5.35,8.03C2.34,8.36 0,10.9 0,14A6,6 0 0,0 6,20H19A5,5 0 0,0 24,15C24,12.36 21.95,10.22 19.35,10.03Z")
                svg.zxc-time-picker-moon(viewBox="0 0 24 24")
                    path(d="M10,2C8.18,2 6.47,2.5 5,3.35C8,5.08 10,8.3 10,12C10,15.7 8,18.92 5,20.65C6.47,21.5 8.18,22 10,22A10,10 0 0,0 20,12A10,10 0 0,0 10,2Z")
                svg.zxc-time-picker-star-1(viewBox="0 0 24 24")
                    path(d="M12,1L9,9L1,12L9,15L12,23L15,15L23,12L15,9L12,1Z")
                svg.zxc-time-picker-star-2(viewBox="0 0 24 24")
                    path(d="M12,1L9,9L1,12L9,15L12,23L15,15L23,12L15,9L12,1Z")
            .zxc-time-picker-values
                .zxc-time-picker-select(v-if="showHours" v-on:mousewheel="timeScroll(event, 'h')")
                    a(href="#" v-bind:class="['zxc-time-picker-nav', { 'zxc-time-picker-disabled': disabledStyle.up.h }]" v-on:mousedown="adjustTime(event, 'h', 'up')")
                        svg(viewBox="0 0 24 24")
                            path(d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z")
                    .zxc-time-picker-scroll
                        .zxc-time-picker-option(v-for="i in parseInt(selectedPattern)" v-bind:style="{ transform: transformStyle.h }") {{ (selectedPattern == 12) ? i : (i - 1) }}
                        .zxc-time-picker-selected
                    a(href="#" v-bind:class="['zxc-time-picker-nav', { 'zxc-time-picker-disabled': disabledStyle.down.h }]" v-on:mousedown="adjustTime(event, 'h', 'down')")
                        svg(viewBox="0 0 24 24")
                            path(d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z")
                .zxc-time-picker-select(v-if="showMinutes" v-on:mousewheel="timeScroll(event, 'm')")
                    a(href="#" v-bind:class="['zxc-time-picker-nav', { 'zxc-time-picker-disabled': disabledStyle.up.m }]" v-on:mousedown="adjustTime(event, 'm', 'up')")
                        svg(viewBox="0 0 24 24")
                            path(d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z")
                    .zxc-time-picker-scroll
                        .zxc-time-picker-option(v-for="i in 60" v-bind:style="{ transform: transformStyle.m }") {{ ('0' + (i - 1)).slice(-2) }}
                        .zxc-time-picker-selected
                    a(href="#" v-bind:class="['zxc-time-picker-nav', { 'zxc-time-picker-disabled': disabledStyle.down.m }]" v-on:mousedown="adjustTime(event, 'm', 'down')")
                        svg(viewBox="0 0 24 24")
                            path(d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58")
                .zxc-time-picker-select(v-if="showSeconds" v-on:mousewheel="timeScroll(event, 's')")
                    a(href="#" v-bind:class="['zxc-time-picker-nav', { 'zxc-time-picker-disabled': disabledStyle.up.s }]" v-on:mousedown="adjustTime(event, 's', 'up')")
                        svg(viewBox="0 0 24 24")
                            path(d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z")
                    .zxc-time-picker-scroll
                        .zxc-time-picker-option(v-for="i in 60" v-bind:style="{ transform: transformStyle.s }") {{ ('0' + (i - 1)).slice(-2) }}
                        .zxc-time-picker-selected
                    a(href="#" v-bind:class="['zxc-time-picker-nav', { 'zxc-time-picker-disabled': disabledStyle.down.s }]" v-on:mousedown="adjustTime(event, 's', 'down')")
                        svg(viewBox="0 0 24 24")
                            path(d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z")
                .zxc-time-picker-select(v-if="selectedPattern == 12" v-on:mousewheel="timeScroll(event, 'p')")
                    a(href="#" v-bind:class="['zxc-time-picker-nav', { 'zxc-time-picker-disabled': disabledStyle.up.p }]" v-on:mousedown="adjustTime(event, 'p', 'up')")
                        svg(viewBox="0 0 24 24")
                            path(d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z")
                    .zxc-time-picker-scroll
                        .zxc-time-picker-option(v-for="i in [showLanguage.amText, showLanguage.pmText]" v-bind:style="{ transform: transformStyle.p }") {{ i }}
                        .zxc-time-picker-selected
                    a(href="#" v-bind:class="['zxc-time-picker-nav', { 'zxc-time-picker-disabled': disabledStyle.down.p }]" v-on:mousedown="adjustTime(event, 'p', 'down')")
                        svg(viewBox="0 0 24 24")
                            path(d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z")
            .zxc-time-picker-footer
                button.zxc-time-picker-btn(v-on:click="timepickerCancel()") {{ showLanguage.cancelText }}
                button.zxc-time-picker-btn-primary(v-on:click="timepickerSubmit()") {{ showLanguage.okText }}
</template>

<script>

</script>

<style>
.zxc-time-picker-overlay {
  font-family: inherit;
  background-color: none;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: -100vh;
  left: -100vw;
}
.zxc-time-picker-overlay.zxc-active {
  background-color: rgba(0, 0, 0, 0.3);
  top: 0;
  left: 0;
}

.zxc-time-picker {
  font-family: inherit;
  width: 100%;
  max-width: 20em;
}

.zxc-time-picker-pattern {
  font-family: inherit;
  background-color: #2f2f2f;
  width: 100%;
  padding: 0.5em;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
}
.zxc-time-picker-pattern input[type=radio] {
  display: none;
}
.zxc-time-picker-pattern input[type=radio]:checked + label {
  background-color: #00569f;
}
.zxc-time-picker-pattern label {
  color: #ffffff;
  font-family: inherit;
  background-color: #0076db;
  display: inline-block;
  padding: 0.5em 0.9em;
  margin: 0;
  border: none;
  outline: none;
  user-select: none;
  transition: background-color 200ms ease-in-out;
  font-size: 0.85em;
}

.zxc-time-picker-image {
  width: 100%;
  height: 9em;
  position: relative;
  overflow: hidden;
}

.zxc-time-picker-day {
  transition: background-image 300ms linear;
}
.zxc-time-picker-day .zxc-time-picker-sun {
  animation: zxc-time-picker-sun-show 800ms ease-out forwards, zxc-time-picker-sun-animate 8000ms linear 1000ms infinite;
}
.zxc-time-picker-day .zxc-time-picker-cloud {
  animation: zxc-time-picker-cloud-show 500ms ease-out forwards, zxc-time-picker-cloud-animate 1500ms ease-in-out 1000ms infinite;
}
.zxc-time-picker-day .zxc-time-picker-moon {
  animation: zxc-time-picker-moon-hide 500ms ease-out forwards;
}
.zxc-time-picker-day .zxc-time-picker-star-1, .zxc-time-picker-day .zxc-time-picker-star-2 {
  animation: zxc-time-picker-star-hide 500ms ease-out forwards;
}
.zxc-time-picker-day .zxc-time-picker-bg-day {
  background-image: linear-gradient(#1878ef 20%, #72d2ff 90%);
  opacity: 1;
}

.zxc-time-picker-night .zxc-time-picker-sun {
  animation: zxc-time-picker-sun-hide 500ms ease-out forwards;
}
.zxc-time-picker-night .zxc-time-picker-cloud {
  animation: zxc-time-picker-cloud-hide 500ms ease-out forwards;
}
.zxc-time-picker-night .zxc-time-picker-moon {
  animation: zxc-time-picker-moon-show 800ms ease-out forwards, zxc-time-picker-moon-animate 8000ms linear 1000ms infinite;
}
.zxc-time-picker-night .zxc-time-picker-star-1 {
  animation: zxc-time-picker-star-show 800ms ease-out forwards, zxc-time-picker-star-animate 3000ms linear 1000ms infinite;
}
.zxc-time-picker-night .zxc-time-picker-star-2 {
  animation: zxc-time-picker-star-show 800ms ease-out forwards, zxc-time-picker-star-animate 2520ms linear 1000ms infinite;
}
.zxc-time-picker-night .zxc-time-picker-bg-night {
  background-image: linear-gradient(#130149 10%, #550086 80%);
  opacity: 1;
}

.zxc-time-picker-bg {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity 800ms ease-in-out;
}

.zxc-time-picker-sun {
  fill: #e2db00;
  width: 7em;
  height: 7em;
  position: absolute;
  transform: scale(0);
  top: calc(50% - 3.5em);
  right: 1.5em;
}

.zxc-time-picker-cloud {
  fill: #ffffff;
  width: 6em;
  height: 6em;
  position: absolute;
  transform: translateX(-100%);
  bottom: -0.2em;
  right: 5.5em;
  opacity: 0;
}

.zxc-time-picker-moon {
  fill: #fff74d;
  width: 7em;
  height: 7em;
  position: absolute;
  transform: rotate(155deg) scale(0);
  top: calc(50% - 3.5em);
  left: 0;
}

.zxc-time-picker-star-1 {
  fill: #f1ff21;
  width: 3em;
  height: 3em;
  position: absolute;
  transform: scale(0);
  top: 1em;
  left: 6.5em;
}
.zxc-time-picker-star-2 {
  fill: #f1ff21;
  width: 2em;
  height: 2em;
  position: absolute;
  transform: scale(0);
  top: 4em;
  left: 9em;
}

.zxc-time-picker-values {
  background-color: #ffffff;
  height: 10em;
  display: flex;
  justify-content: center;
}

.zxc-time-picker-select {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.zxc-time-picker-nav {
  background-color: #ffffff;
  width: 4.5em;
  height: 1.5em;
  display: block;
  text-align: center;
  transition: background-color 300ms ease-in-out;
}
.zxc-time-picker-nav:not(.zxc-time-picker-disabled):hover {
  background-color: #d9d9d9;
}
.zxc-time-picker-nav:not(.zxc-time-picker-disabled):active {
  background-color: #b3b3b3;
}
.zxc-time-picker-nav svg {
  fill: #a0a0a0;
  height: 1.5em;
}
.zxc-time-picker-nav.zxc-time-picker-disabled {
  cursor: default;
}
.zxc-time-picker-nav.zxc-time-picker-disabled svg {
  fill: lightgray;
}

.zxc-time-picker-scroll {
  height: 100%;
  overflow: hidden;
  position: relative;
}
.zxc-time-picker-scroll:before, .zxc-time-picker-scroll:after {
  content: "";
  width: 100%;
  height: 2em;
  position: absolute;
}
.zxc-time-picker-scroll:before {
  background-image: linear-gradient(#ffffff, transparent);
  top: 0;
  z-index: 1;
}
.zxc-time-picker-scroll:after {
  background-image: linear-gradient(to top, #ffffff, transparent);
  bottom: 0;
  z-index: 1;
}

.zxc-time-picker-option {
  color: #a0a0a0;
  font-size: 1.75em;
  font-weight: bold;
  text-align: center;
  user-select: none;
  transition: transform 300ms ease-in-out;
}
.zxc-time-picker-option:first-child {
  margin-top: 1.5em;
}

.zxc-time-picker-selected {
  background-color: #2f2f2f;
  width: 100%;
  height: 2em;
  position: absolute;
  top: calc(50% - 1em);
  left: 0;
  mix-blend-mode: difference;
}

.zxc-time-picker-footer {
  background-color: #2f2f2f;
  padding: 0.5em;
  display: flex;
  justify-content: space-between;
}

.zxc-time-picker-btn {
  color: #1f1f1f;
  font-family: inherit;
  background-color: #e4e4e4;
  display: inline-block;
  padding: 0.5em 0.9em;
  margin: 0;
  border: none;
  outline: none;
  user-select: none;
  transition: background-color 200ms ease-in-out;
}
.zxc-time-picker-btn:hover {
  background-color: #f8f8f8;
}
.zxc-time-picker-btn:active, .zxc-time-picker-btn:focus {
  background-color: #c4c4c4;
}
.zxc-time-picker-btn-primary {
  color: #ffffff;
  font-family: inherit;
  background-color: #0076db;
  display: inline-block;
  padding: 0.5em 0.9em;
  margin: 0;
  border: none;
  outline: none;
  user-select: none;
  transition: background-color 200ms ease-in-out;
}
.zxc-time-picker-btn-primary:hover {
  background-color: #1790f8;
}
.zxc-time-picker-btn-primary:active, .zxc-time-picker-btn-primary:focus {
  background-color: #00569f;
}

@keyframes zxc-time-picker-sun-show {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes zxc-time-picker-sun-animate {
  0% {
    transform: rotate(0deg);
  }
  15% {
    transform: rotate(-25deg);
  }
  20% {
    transform: rotate(-30deg);
  }
  25% {
    transform: rotate(-35deg);
  }
  65% {
    transform: rotate(25deg);
  }
  70% {
    transform: rotate(30deg);
  }
  75% {
    transform: rotate(35deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes zxc-time-picker-sun-hide {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes zxc-time-picker-cloud-show {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0%);
  }
}
@keyframes zxc-time-picker-cloud-animate {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes zxc-time-picker-cloud-hide {
  0% {
    opacity: 1;
    transform: translateX(0%);
  }
  100% {
    opacity: 0;
    transform: translateX(-100%);
  }
}
@keyframes zxc-time-picker-moon-show {
  0% {
    transform: rotate(155deg) scale(0);
  }
  100% {
    transform: rotate(155deg) scale(1);
  }
}
@keyframes zxc-time-picker-moon-animate {
  0% {
    transform: rotate(155deg);
  }
  15% {
    transform: rotate(150deg);
  }
  20% {
    transform: rotate(145deg);
  }
  25% {
    transform: rotate(140deg);
  }
  65% {
    transform: rotate(160deg);
  }
  70% {
    transform: rotate(165deg);
  }
  75% {
    transform: rotate(170deg);
  }
  100% {
    transform: rotate(155deg);
  }
}
@keyframes zxc-time-picker-moon-hide {
  0% {
    transform: rotate(155deg) scale(1);
  }
  100% {
    transform: rotate(155deg) scale(0);
  }
}
@keyframes zxc-time-picker-star-show {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes zxc-time-picker-star-animate {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes zxc-time-picker-star-hide {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0);
  }
}
@media (max-width: 20em) {
  .zxc-time-picker {
    font-size: 5vw;
  }
}
</style>