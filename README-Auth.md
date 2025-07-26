# Programming Series Hub - Authentication System

## Overview
This authentication system adds login/signup functionality to your Programming Series Hub. Users must authenticate before accessing the content, and you have an admin panel to manage all users.

## Files Added:
1. `auth.html` - Login/Signup page
2. `admin.html` - Admin dashboard to view all users
3. `auth-protection.js` - Script to protect other pages

## How to Use:

### For Users:
1. Users must visit `auth.html` to login or create an account
2. After successful authentication, they are redirected to `index.html`
3. User session is maintained until they logout

### For Admin:
1. **Admin Password:** `admin123` (You can change this in `auth.html`)
2. Click "Admin Login" on the login page
3. Enter the admin password to access the admin dashboard
4. View all registered users, their details, and manage them

### Admin Features:
- View total users count
- See today's and this week's signups
- Search users by name or email
- Delete users
- Real-time user statistics

### To Protect Other Pages:
Add this line to the `<head>` section of any page you want to protect:
```html
<script src="auth-protection.js"></script>
```

This will automatically redirect unauthenticated users to the login page.

## Data Storage:
- User data is stored in browser's localStorage
- Data includes: name, email, password, registration date
- Data persists until browser storage is cleared

## Security Notes:
- This is a client-side authentication system
- For production use, implement server-side authentication
- Change the admin password in `auth.html` (line 101)
- Consider adding password hashing for better security

## Customization:
- Change admin password in `auth.html`
- Modify user data fields as needed
- Customize the UI colors and styling
- Add additional user management features

## Usage Example:
1. Open `auth.html` in your browser
2. Create a new account or login with existing credentials
3. For admin access, use password: `admin123`
4. Access the admin panel to see all registered users

## Login Flow:
1. User visits any protected page
2. If not authenticated → redirected to `auth.html`
3. User logs in or signs up
4. Successful auth → redirected to `index.html`
5. User can now access all content

## Admin Access:
1. Click "Admin Login" on `auth.html`
2. Enter admin password: `admin123`
3. Access admin dashboard at `admin.html`
4. View and manage all users

The system is now ready to use!
