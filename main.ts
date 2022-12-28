/*******************************************************************************
 * Copyright (C) 2022 Gallium Studio LLC (Lawrence Lo). All rights reserved.
 *
 * This program is open source software: you can redistribute it and/or
 * modify it under the terms of the GNU General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * Alternatively, this program may be distributed and modified under the
 * terms of Gallium Studio LLC commercial licenses, which expressly supersede
 * the GNU General Public License and are specifically designed for licensees
 * interested in retaining the proprietary status of their code.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 * 
 * Contact information:
 * Website - https://www.galliumstudio.com
 * Source repository - https://github.com/galliumstudio
 * Email - admin@galliumstudio.com
 ******************************************************************************/

let testCnt = 0
let pixelCount = 2
let strip: neopixel.Strip = neopixel.create(DigitalPin.P9, pixelCount, NeoPixelMode.RGB)
enum Timeout {
    TEST_MS = 500,
}
enum Evt {
    // TIMER events
    TIMER_TEST,
    // INTERNAL events
    A_PRESSED,
    B_PRESSED,
    DONE,
    NEXT,
}
enum Region {
    MAIN,
}
enum MainState {
    ROOT
}

// LED functions.
function clearPixels () {
    for (let i = 0; i <= pixelCount - 1; i++) {
        strip.setPixelColor(i, 0)
    }
    strip.show()
}

// Enables external buttons.
input.onButtonPressed(Button.A, function () {
    event.send(Evt.A_PRESSED)
})
input.onButtonPressed(Button.B, function () {
    event.send(Evt.B_PRESSED)
})

// State functions
function inMainRoot () {
    return state.isIn(Region.MAIN, MainState.ROOT)
}

state.onEntry(Region.MAIN, MainState.ROOT, () => {
})

state.onExit(Region.MAIN, MainState.ROOT, () => {
})

event.on(Evt.A_PRESSED, () => {

})
event.on(Evt.B_PRESSED, () => {

})

strip.clear()
clearPixels()
strip.setPixelColor(0, 0xFF0000)
strip.setPixelColor(1, 0xFFFF00)
strip.show()
state.start(Region.MAIN, MainState.ROOT)
timer.run()
