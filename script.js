const g = e => document.getElementById(e)
const c = e => document.querySelector('.' + e)

let cView = ''

const bRight = c('right')
const bLeft = c('left')
const bUp = c('up')
const bDown = c('down')
const bBack = c('back')

const bts = [bRight, bLeft, bUp, bDown, bBack]

function clear () {
  bts.forEach(btn => btn?.classList.remove('v'))
  g('top-left').classList.remove('act')
  g('top-right').classList.remove('act')
  g('bot-left').classList.remove('act')
  g('bot-right').classList.remove('act')
}

function sv (v) {
  cView = v
  g('thing').className = v
  clear()

  if (v === 'tl') {
    bRight?.classList.add('v')
    bDown?.classList.add('v')
    bBack?.classList.add('v')
    g('top-left').classList.add('act')
  } else if (v === 'tr') {
    bLeft?.classList.add('v')
    bDown?.classList.add('v')
    bBack?.classList.add('v')
    g('top-right').classList.add('act')
  } else if (v === 'bl') {
    bUp?.classList.add('v')
    bRight?.classList.add('v')
    bBack?.classList.add('v')
    g('bot-left').classList.add('act')
  } else if (v === 'br') {
    bUp?.classList.add('v')
    bLeft?.classList.add('v')
    bBack?.classList.add('v')
    g('bot-right').classList.add('act')
  }
}

function move (d) {
  if (cView == 'tl') {
    if (d == 'right') sv('tr')
    if (d == 'down') sv('bl')
  } else if (cView == 'tr') {
    if (d == 'left') sv('tl')
    if (d == 'down') sv('br')
  } else if (cView == 'bl') {
    if (d == 'up') sv('tl')
    if (d == 'right') sv('br')
  } else if (cView == 'br') {
    if (d == 'up') sv('tr')
    if (d == 'left') sv('bl')
  }
}

document.addEventListener('DOMContentLoaded', () => {
  g('lid').addEventListener('click', () => {
    g('lid').classList.toggle('out')
    sv('')
  })

  g('top-left').addEventListener('click', () => sv('tl'))
  g('top-right').addEventListener('click', () => sv('tr'))
  g('bot-left').addEventListener('click', () => sv('bl'))
  g('bot-right').addEventListener('click', () => sv('br'))

  bRight?.addEventListener('click', () => move('right'))
  bLeft?.addEventListener('click', () => move('left'))
  bUp?.addEventListener('click', () => move('up'))
  bDown?.addEventListener('click', () => move('down'))

  bBack?.addEventListener('click', () => sv(''))
})
