# Student Records Management System

A modern, responsive web application for managing student information with a clean and intuitive interface. This system allows you to add, edit, and delete student records with persistent local storage.

## Features

- **Student Information Management**: Add new student records with Name, Class, Division, and Roll Number
- **Data Persistence**: All records are stored locally in the browser using localStorage
- **Edit Functionality**: Update existing student records seamlessly
- **Delete Operations**: Remove student records with confirmation
- **Responsive Design**: Mobile-friendly interface that works on all device sizes
- **Modern UI**: Clean, professional design with smooth animations and transitions

## Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with CSS Grid, Flexbox, and custom properties
- **JavaScript (ES5)**: Client-side functionality and DOM manipulation
- **Bootstrap 5.3.3**: Responsive framework and UI components
- **Google Fonts**: Inter font family for improved typography

## File Structure

```
Student Records/
├── project.html          # Main HTML file with embedded CSS and JavaScript
├── project-copy.js       # Standalone JavaScript file (backup)
└── README.md            # Project documentation
```

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional software or dependencies required

### Installation

1. Clone or download the repository to your local machine
2. Navigate to the project directory
3. Open `project.html` in your web browser

### Usage

1. **Adding a Student**: Fill in the student information form with:
   - Name
   - Class
   - Division
   - Roll Number
   - Click "Submit" to add the record

2. **Editing a Student**: 
   - Click the "Edit" button next to any student record
   - Modify the information in the form fields
   - Click "Update" to save changes

3. **Deleting a Student**:
   - Click the "Delete" button next to any student record
   - The record will be immediately removed

## Technical Details

### Data Storage

The application uses browser localStorage to persist data. All student records are stored as JSON in the `tableData` key. Data persists across browser sessions until manually cleared.

### Key Functions

- **Dynamic Form Generation**: Input fields are created dynamically based on the student data structure
- **Table Management**: Student records are displayed in a responsive table with action buttons
- **Local Storage Integration**: Automatic saving and loading of student data
- **Edit Mode Toggle**: Submit button changes to "Update" when editing existing records

### Browser Compatibility

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Styling Features

- **CSS Custom Properties**: Consistent color scheme and design tokens
- **Responsive Grid Layout**: Adaptive form layout for different screen sizes
- **Smooth Animations**: Subtle fade-in effects and hover transitions
- **Modern Typography**: Inter font family with proper font weights
- **Color-coded Actions**: Different button colors for different operations

## Development Notes

The application is built as a single-page application with all functionality contained within the HTML file. The JavaScript code handles:

- DOM manipulation for dynamic form and table creation
- Event handling for form submission and button clicks
- Local storage operations for data persistence
- Edit mode management and UI state updates

## Future Enhancements

Potential improvements for future versions:

- Form validation and error handling
- Search and filter functionality
- Data export capabilities (CSV, PDF)
- Student photo upload
- Grade/marks management
- Database integration for multi-user support

## License

This project is open source and available under the MIT License.

## Support

For questions or issues with this project, please create an issue in the repository or contact the developer.
