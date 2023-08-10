document.addEventListener('DOMContentLoaded', function() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const imageContainer = document.getElementById('dog-image-container');

    fetch(imgUrl)
        .then(response => response.json())
        .then(data => {
            data.message.forEach(imageUrl => {
                const img = document.createElement('img');
                img.src = imageUrl;
                img.alt = "Dog Image";
                imageContainer.appendChild(img);
            });
        })
        .catch(error => {
            console.error("Error fetching images:", error);
        });

    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    const list = document.getElementById('dog-breeds');

    fetch(breedUrl)
    .then(response => response.json())
    .then(data => {
        for (let breed in data.message) {
            const li = document.createElement('li');
            li.innerText = breed;
            li.className = 'dogbreed';
            list.appendChild(li);
        }
    });

    //3
    const dogBreeds = document.querySelectorAll('.dogbreed');

    dogBreeds.forEach(dogBreed => {
        dogBreed.addEventListener('click', handleClickBreed);
    });
    //4
    let selectLetter = document.getElementById('breed-dropdown');
    let listItems = document.querySelectorAll('#dog-breeds li');
    
    console.log('Number of list items:', listItems.length); // Debug: Check how many items are selected
    
    selectLetter.addEventListener('change', function() {
        const selectedLetter = selectLetter.value.toLowerCase();
        console.log('Selected letter:', selectedLetter);
        
        const listItems = document.querySelectorAll('#dog-breeds li'); // Select list items here
        
        listItems.forEach(item => {
            const itemName = item.textContent.toLowerCase();
            console.log('Item name:', itemName);
            
            if (itemName.startsWith(selectedLetter)) {
                console.log('Match:', itemName);
                item.style.display = 'block'; // Show the item
            } else {
                console.log('No match:', itemName);
                item.style.display = 'none';  // Hide the item
            }
        });
    });
    
});




