// src/utils/utils.js
export function formatTimestamp(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleString(); // Formats the timestamp to a readable string
  }
  