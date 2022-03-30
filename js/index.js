const grassEmojis = [
  '🌱',
  '🌿',
  '☘️',
  '🍀',
  '🌾' 
]

const plantEmojis = [
  '🌷',
  '🌹',
  '🥀',
  '🌺',
  '🌸',
  '🌼',
  '🌻',
  '🌲',
  '🌳',
  '🌴'
]

const animalEmojis = [
  '🐿',
  '🦔',
  '🐇',
  '🐄',
  '🐑'
]

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)]
}

function matrixToString(matrix) {
  let result = '';
  matrix.forEach(row => {
    row.forEach(emoji => {
      result += emoji;
    })
    result += '\n'
  })

  return result;
}

function createMeadow () {
  const meadow = [];
  const grassEmoji = getRandomElement(grassEmojis);
  const emojis = [
    grassEmoji,
    grassEmoji,
    grassEmoji,
    grassEmoji,
    grassEmoji,
    getRandomElement(plantEmojis),
    getRandomElement(plantEmojis),
    getRandomElement(animalEmojis),
    getRandomElement(animalEmojis)
  ]

  for ( let row = 0; row < 9; row++) {
    for( let column = 0; column < 7; column++ ) {
      if (!meadow[row]) {
        meadow[row] = []
      }
      meadow[row][column] = getRandomElement(emojis)
    }
  }

  return meadow
}

const randomButton = document.getElementById('randomButton');
const meadowContainer = document.getElementById('meadowContainer');
const shareButton = document.getElementById('shareButton');

meadowContainer.innerHTML = matrixToString(createMeadow());

randomButton.addEventListener('click', () => {
  meadowContainer.innerHTML = matrixToString(createMeadow());
})

shareButton.addEventListener('click', async () => {
  if (!navigator.share) {
    alert('Share options are not available for this device');
  }

  await navigator.share({
    title: 'Random Meadow',
    text: `Check out this Random Meadow!\n\n${meadowContainer.innerHTML}`,
    url: window.location.href
  })
});