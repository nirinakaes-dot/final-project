# Between Lines — Personal Journal App

A browser-based personal journaling app with mood tracking, search, and a timeline view. No backend required — all data is stored locally in the browser.


## Features

- **Write entries** with a title, date, mood (multi-select), and freetext body
- **Persistent storage** — entries are saved to `localStorage` and survive page refresh
- **Search** — filter entries by keyword (matches title and body text)
- **Delete entries** — with a confirmation prompt before removing
- **Entry count** — live total displayed on the timeline page


## File Overview

### `index.html`
The main entry point. Contains the landing text and the journal entry form with fields for title, date, mood checkboxes, and a textarea. 

### `2ndPage.html`
The timeline view. Displays all saved entries, a keyword search bar, and a mood filter dropdown. Entries can be deleted from this page.

### `java.js`
Handles all app logic:

### `style.css`
Bold editorial design:


## Known Limitations

- Data is browser-local only — no sync across devices
- No edit functionality — entries can only be added or deleted

## Technologies used
-JavaScript
-HTML
-CSS

## License
This project is licensed by MIT

## Live link to the site
