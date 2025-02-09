# Personal Library Organizer
### Developer: Krritin Keshan (24BCS10122)

## 📚 Project Overview
Personal Library Organizer is a web-based application that helps users manage their book collection, track reading progress, and discover new books. The application features a secure login system and integrates with the OpenLibrary API for comprehensive book data.

## 🌟 Features

### Authentication
- Secure login system with email validation
- Session management using localStorage
- Protected routes for authenticated users

### Book Management
- Search and discover books using OpenLibrary API
- Organize books into different categories:
  - Currently Reading
  - To Read
  - Completed
- Track reading progress for each book
- Filter books by genre and reading status

### User Interface
- Clean and responsive design
- Progress tracking visualization
- Easy-to-use navigation
- Genre-based filtering
- Reading status management

## 🛠️ Technical Stack
- HTML5
- CSS3
- Vanilla JavaScript
- Local Storage API
- OpenLibrary API

## 📂 Project Structure
```
personal-library/
├── index.html        # Login page
├── library.html      # Main application page
└── README.md        # Project documentation
```

## 🚀 Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone [repository-url]
   cd personal-library
   ```

2. **File Setup**
   - Ensure all files are in the same directory
   - No additional setup or installation required

3. **Running the Application**
   - Open `index.html` in a modern web browser
   - Login with valid email format (e.g., user@example.com)
   - Access the main library interface

## 💻 Usage Guide

### Login
1. Open the application in a web browser
2. Enter your email address (must be valid format)
3. Enter any password (no validation in demo)
4. Click "Login" to access the library

### Library Management
1. Search for books using the search bar
2. Use filters to sort by genre or reading status
3. Add books to your library using action buttons
4. Track reading progress for current books
5. Categorize books as "To Read," "Reading," or "Completed"

## 🔐 Email Validation
The login system validates email addresses using the following regex pattern:
```javascript
/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
```

Valid email formats:
- basic@example.com
- user.name@domain.com
- user-name@subdomain.domain.co.uk

## 🎨 Styling
- Modern, clean interface
- Responsive design for all screen sizes
- Color scheme:
  - Primary: #0C1B33
  - Secondary: #B2AA8E
  - Text Light: #FFFFFF
  - Error: #FF4444

## 🔄 API Integration
The application integrates with the OpenLibrary API:
- Book search functionality
- Cover image retrieval
- Author and publication information
- Genre categorization

## 💾 Data Storage
- User authentication status stored in localStorage
- Reading progress persistence
- Book categorization data
- Personal library data

## 🚧 Future Enhancements
1. Enhanced security features
   - Password hashing
   - JWT authentication
   - Session management
2. Social features
   - Book recommendations
   - Reading groups
   - Book reviews
3. Advanced tracking
   - Reading time statistics
   - Goal setting
   - Achievement system

## ⚠️ Known Limitations
1. Demo uses localStorage for data persistence
2. Password validation not implemented
3. Limited to OpenLibrary API data
4. No backup/sync functionality

## 🤝 Contributing
1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push to the branch
5. Create a Pull Request

## 📝 License
This project is licensed under the MIT License

## 👨‍💻 Developer Contact
- Name: Krritin Keshan
- Roll Number: 24BCS10122

## 🙏 Acknowledgments
- OpenLibrary API for book data
- Modern web development community
- Educational resources and documentation

---
*Last Updated: February 09, 2025*
