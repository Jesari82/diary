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

// Add a new entry to the array in localStorage
export const addEntry = (newEntry) => {
    try {
        const entries = fetchEntries();
        entries.unshift(newEntry); // Add new entry to the beginning of the array
        saveEntries(entries);
        return true;
    } catch (error) {
        console.error('Error adding entry:', error);
        return false;
    }
};