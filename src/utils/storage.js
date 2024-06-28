const STORAGE_KEY = 'diaryEntries';

// Save entries array to localStorage
export const saveEntries = (entries) => {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
    } catch (error) {
        console.error('Error saving to localStorage:', error);
    }
};

// Fetch all entries from localStorage
export const fetchEntries = () => {
    try {
        const entries = localStorage.getItem(STORAGE_KEY);
        return entries ? JSON.parse(entries) : [];
    } catch (error) {
        console.error('Error fetching from localStorage:', error);
        return [];
    }
};


export const validateEntryDate = () => {
    const entries = fetchEntries();
    const options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    };
    if (entries.length === 0) {
        return true;
    }
    const result =  entries.filter(entry => entry.date === 
    new Date().toLocaleString('de-DE', options));
    if (result.length > 0) {
        return false;
    }
    return true;
};

// Add a new entry to the array in localStorage
export const addEntry = (newEntry) => {
    try {
        const entries = fetchEntries();
        entries.unshift(newEntry); // Add new entry to the beginning of the array
        saveEntries(entries); // Save the updated array to localStorage
        return true;
    } catch (error) {
        console.error('Error adding entry:', error);
        return false;
    }
};