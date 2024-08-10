// Import stylesheets
import './style.css';

// Get the form element
const form = document.querySelector('#defineform') as HTMLFormElement;

// Event listener for form submission
form.onsubmit = async (event) => {
  event.preventDefault(); // Prevent form submission from reloading the page

  // Get the search input value
  const searchInput = document.querySelector('#searchinput') as HTMLInputElement;
  const searchWord = searchInput.value;

  // Call the dictionary function with the search word
  await fetchDictionary(searchWord);
};

// Function to fetch dictionary data for a given word
// Function to fetch dictionary data for a given word
const fetchDictionary = async (word: string) => {
  try {
    // Make the API request
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`, {
      method: 'GET',
      headers: {},
    });

    // Check if the request was successful
    if (response.ok) {
      // Parse the response as JSON
      const dictionaryResponse = await response.json();

      // Get the unordered list element in the HTML file
      const list = document.querySelector('#definition-list') as HTMLUListElement;

      // Iterate over the definitions and create new list items dynamically
      dictionaryResponse.meanings.forEach((meaning: any) => {
        meaning.definitions.forEach((definition: any) => {
          const listItem = document.createElement('li');
          listItem.textContent = definition.definition;
          list.appendChild(listItem);
        });
      });
    }
  } catch (error) {
    // Log any errors that occurred during the request
    console.error(error);
  }
};

    // Check if the request was successful
    if (response.ok) {
      // Parse the response as JSON
      const dictionaryResponse = await response.json();

      // Log the dictionary response
      console.log(dictionaryResponse);
    }
  } catch (error) {
    // Log any errors that occurred during the request
    console.error(error);
  }
};

// Check if the module is being run directly
if (import.meta.url === globalThis.location.href) {
  // Add your main code here
  console.log('This module is being run directly');
} else {
  // Add your code to be executed when imported as a dependency
  console.log('This module is being imported as a dependency');
}