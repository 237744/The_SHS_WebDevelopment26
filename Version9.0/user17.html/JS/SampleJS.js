const animalDatabase = {
  'dog': { name: 'Dog', type: 'Mammal', habitat: 'Worldwide', description: 'Mans best friend. Dogs are loyal companions domesticated thousands of years ago. They come in many breeds and sizes. Dogs are known for their strong bonds with humans.', image: 'images/Dog.png' },
  'cat': { name: 'Cat', type: 'Mammal', habitat: 'Worldwide', description: 'Independent feline. Cats are popular pets known for their grace and independence. They are skilled hunters with excellent night vision. Cats communicate through meows and body language.', image: 'images/Cat.png' },
  'bird': { name: 'Bird', type: 'Bird', habitat: 'Worldwide', description: 'Master of the sky. Birds come in thousands of species with diverse colors and abilities. Many migrate vast distances. Birds sing and communicate with complex vocalizations.', image: 'images/a3.jpg' },
  'fish': { name: 'Fish', type: 'Aquatic', habitat: 'Water', description: 'Water dwellers. Fish are aquatic vertebrates that breathe through gills. They come in thousands of species with varied colors and sizes. Fish play important roles in water ecosystems.', image: 'images/a4.jpg' },
  'rabbit': { name: 'Rabbit', type: 'Mammal', habitat: 'Worldwide', description: 'Hopping herbivore. Rabbits are small mammals with long ears and powerful hind legs. They are known for their speed and agility. Many people keep rabbits as pets.', image: 'images/a5.jpg' },
  'squirrel': { name: 'Squirrel', type: 'Mammal', habitat: 'Worldwide', description: 'Acrobatic climber. Squirrels are agile tree-dwelling rodents. They gather and store nuts for winter. Squirrels are known for their bushy tails and quick movements.', image: 'images/a6.jpg' },
  'lion': { name: 'Lion', type: 'Mammal', habitat: 'Africa', description: 'The king of the jungle. Lions are large felines found in Africa. They live in pride groups and are known for their powerful roars. Males have distinctive manes.', image: 'images/Lion.png' },
  'elephant': { name: 'Elephant', type: 'Mammal', habitat: 'Africa/Asia', description: 'Largest land mammal. Elephants are highly intelligent herbivores. They are known for their memory, empathy, and strong social bonds within their herds.', image: 'images/Elephant.png' },
  'giraffe': { name: 'Giraffe', type: 'Mammal', habitat: 'Africa', description: 'Tallest land animal. Can reach heights of 18 feet. They use their long necks to eat leaves from tall trees in Africa. Their pattern is unique to each individual.', image: 'images/Giraffe.png' },
  'penguin': { name: 'Penguin', type: 'Bird', habitat: 'Antarctica', description: 'Exceptional swimmers of the Southern Hemisphere. Penguins are perfectly adapted to ice and ocean environments. They huddle together for warmth in colonies.', image: 'images/Penguin.png' },
  'dolphin': { name: 'Dolphin', type: 'Mammal', habitat: 'Ocean', description: 'Highly intelligent ocean-dwelling mammals. Dolphins are known for their playful behavior and complex communication. They hunt cooperatively in pods.', image: 'images/Dolphin.png' },
  'panda': { name: 'Panda', type: 'Mammal', habitat: 'China', description: 'Gentle giant of the forest. Giant pandas are endangered bears native to China. They primarily eat bamboo but are classified as carnivores.', image: 'images/Panda.png' },
  'tiger': { name: 'Tiger', type: 'Mammal', habitat: 'Asia', description: 'Silent hunter of Asia. Tigers are the largest cats in the world. Each tiger has a unique stripe pattern like a fingerprint. They are solitary hunters.', image: 'images/Tiger.png' },
  'eagle': { name: 'Eagle', type: 'Bird', habitat: 'Various', description: 'King of the birds. Powerful birds of prey with incredible vision. They can spot fish from miles away. Eagles are symbols of strength and freedom.', image: 'images/Eagle.png' },
  'butterfly': { name: 'Butterfly', type: 'Insect', habitat: 'Various', description: 'Delicate insect of wonder. Butterflies undergo metamorphosis from caterpillar to winged adult. Some species migrate thousands of miles.', image: 'images/butterfly.png' },
  'whale': { name: 'Whale', type: 'Mammal', habitat: 'Ocean', description: 'Largest animal ever. Blue whales are the largest animals to ever live. They are intelligent filter feeders. Despite their size, they eat tiny krill.', image: 'images/Whale.png' },
  'bear': { name: 'Bear', type: 'Mammal', habitat: 'Various', description: 'Powerful forest dweller. Bears are found across many regions. They are generally solitary and have a strong sense of smell. Some hibernate in winter.', image: 'images/a17.jpg' },
  'deer': { name: 'Deer', type: 'Mammal', habitat: 'Various', description: 'Graceful herbivore. Deer are found in forests and grasslands worldwide. Males grow antlers which they shed each year. They are prey for larger predators.', image: 'images/a18.jpg' },
  'monkey': { name: 'Monkey', type: 'Mammal', habitat: 'Tropical regions', description: 'Intelligent primates. Monkeys are found in tropical forests and savannas. They are highly social and communicate with complex vocalizations. Many are endangered by habitat loss.', image: 'images/a19.jpg' },
  'zebra': { name: 'Zebra', type: 'Mammal', habitat: 'Africa', description: 'Striped equine. Zebras are wild horses with distinctive black and white stripes. Each zebra has a unique stripe pattern. They live in herds for protection and grassland grazing.', image: 'images/a20.jpg' }
};

function getCurrentPageId() {
  const pathname = window.location.pathname;
  const parts = pathname.split('/');
  const page = parts[parts.length - 1].replace('.html', '');
  if (!page || page === 'index') return 'home';
  return page;
}

function setActivePage() {
  const currentPage = getCurrentPageId();
  document.querySelectorAll('.nav-link').forEach((link) => {
    const dataPage = link.getAttribute('data-page');
    if (dataPage === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

function getGreetingMessage() {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good morning';
  if (hour < 18) return 'Good afternoon';
  return 'Good evening';
}

function updateHeroMessage() {
  const greeting = getGreetingMessage();
  const heroGreeting = document.getElementById('heroGreeting');
  if (heroGreeting && heroGreeting.textContent === 'Animals') {
    heroGreeting.textContent = greeting;
  }
}

function toggleDetails(detailsId) {
  const details = document.getElementById(detailsId);
  if (!details) return;
  details.classList.toggle('show');
}

function showStatus(message, isError = false) {
  const status = document.getElementById('statusMessage');
  if (!status) return;
  status.textContent = message;
  status.className = isError ? 'status error mt-3' : 'status mt-3';
}

function searchAnimal(query) {
  if (!query || !query.trim()) {
    showStatus('Please enter an animal name to search.', true);
    return;
  }

  const container = document.getElementById('animalResults');
  if (!container) return;

  showStatus('Searching...');
  
  const results = [];
  const lowerQuery = query.toLowerCase().trim();
  
  Object.entries(animalDatabase).forEach(([key, data]) => {
    if (key.includes(lowerQuery) || data.name.toLowerCase().includes(lowerQuery) || data.type.toLowerCase().includes(lowerQuery)) {
      results.push(data);
    }
  });
  
  if (results.length === 0) {
    container.innerHTML = '<div class="col-12"><p class="empty">No results for "' + query + '". Try: dog, cat, lion, elephant, panda, dolphin, tiger, eagle, bird, fish, or any other animal.</p></div>';
    showStatus('No animals found for: ' + query, true);
    return;
  }

  renderSearchResults(results);
  showStatus('Found ' + results.length + ' result(s).');
}

function renderSearchResults(results) {
  const container = document.getElementById('animalResults');
  if (!container) return;

  container.innerHTML = '';

  results.forEach((animal, index) => {
    const detailsId = 'result-details-' + index;
    
    const card = document.createElement('div');
    card.className = 'col-md-6';
    card.innerHTML = '<article class="animal-card"><img src="' + animal.image + '" alt="' + animal.name + '" style="width: 100%; height: 300px; object-fit: contain; background-color: #f5f5f5; border-radius: 0.5rem;"><div class="card-body"><h2>' + animal.name + '</h2><p class="meta">' + animal.type + ' • ' + animal.habitat + '</p><div class="button-row"><button class="btn btn-outline-light btn-sm" onclick="toggleDetails(\'' + detailsId + '\')">Learn more</button></div><div id="' + detailsId + '" class="details mt-3"><p>' + animal.description + '</p></div></div></article>';

    container.appendChild(card);
  });
}

function fetchRandomFact() {
  const factElement = document.getElementById('randomFact');
  if (!factElement) return;
  
  factElement.textContent = 'Loading a random fact...';
  
  fetch('https://catfact.ninja/fact')
    .then(response => response.json())
    .then(data => {
      factElement.textContent = data.fact;
    })
    .catch(error => {
      factElement.textContent = 'Could not load fact at this time. Try again later!';
      console.error('API Error:', error);
    });
}

document.addEventListener('DOMContentLoaded', function() {
  updateHeroMessage();
  setActivePage();
  fetchRandomFact();
});
function getAnimalFact() {
    fetch("https://catfact.ninja/fact")
        .then(response => response.json())
        .then(data => {
            document.getElementById("animalFact").innerHTML = data.fact;
        })
        .catch(error => {
            document.getElementById("animalFact").innerHTML =
                "Unable to load a fact right now.";
            console.log(error);
        });
}