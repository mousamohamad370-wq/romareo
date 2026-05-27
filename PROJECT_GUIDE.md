Romario Digital Marketplace
Project Overview

Romario is a modern digital marketplace platform built using React and Vite.
The platform allows users to browse and purchase digital services such as:

Game top-ups
Digital subscriptions
Social media services
Gift cards
Virtual numbers

The project was designed with a scalable architecture using reusable components and Context API state management.

Tech Stack
Frontend
React
Vite
SCSS
React Router DOM
Framer Motion
React Hot Toast
React Icons
Project Architecture

The project follows a reusable scalable structure.

Main Folders
src/
Important Directories
components/

Reusable components shared across the entire project.

Examples:

Navbar
Sidebar
Buttons
Inputs
Empty states
Checkout drawer
Modals
sections/

Contains all page sections and page content components.

Examples:

Hero section
Marketplace section
Auth pages
Dashboard pages
pages/

Main route pages connected to React Router.

Examples:

Home
Marketplace
Login
Register
Wallet
Orders
Profile
context/

Global state management using Context API.

Current contexts:

AuthContext
WalletContext
styles/

Global SCSS architecture.

Contains:

globals.scss
variables
reusable ui styles
Routing System

Routing is handled using:

react-router-dom

Main routes:

/

Home page

/marketplace

Marketplace page

/service/:id

Service details page

/login

Login page

/register

Register page

/wallet

Wallet dashboard

/orders

Orders dashboard

/profile

Profile page

UI System

A reusable UI architecture was created to avoid duplicated code.

Button Component

File:

src/components/ui/Button.jsx

Purpose:

Reusable button component used across the entire project.

Supports:

Variants
Sizes
Icons
Full width
Disabled state

Used in:

Auth
Checkout
Dashboard
Forms
Empty states
Input Component

File:

src/components/ui/Input.jsx

Purpose:

Reusable input system for forms.

Supports:

Labels
Icons
Placeholder
Disabled
Readonly
Required
Controlled inputs

Used in:

Login
Register
Add Balance Modal
EmptyState Component

File:

src/components/ui/EmptyState.jsx

Purpose:

Reusable empty UI states.

Examples:

No orders
No results
No services
No transactions
Authentication System

Current status:

Mock authentication system using Context API.

File:

src/context/AuthContext.jsx

Features:

Login
Register
Logout
Store user state
Global auth access

Current state:

Frontend-only authentication.

Future upgrade:

Firebase Authentication integration.

Wallet System

File:

src/context/WalletContext.jsx

Features:

Wallet balance
Transactions
Purchase system
Orders system
Add balance
Checkout handling

Current state:

Mock wallet system.

Future upgrade:

Realtime Firestore integration.

Marketplace System

Features:

Dynamic services listing
Search system
Filters
Sorting
Service cards
Marketplace navigation

Files:

src/sections/marketplace/
Service Details System

Features:

Dynamic service details
Quantity selection
Total price calculation
Checkout integration

Files:

src/sections/service-details/
Checkout System

Component:

src/components/checkout/CheckoutDrawer.jsx

Features:

Balance validation
Order confirmation
Purchase logic
Success state
Wallet integration
Orders System

Features:

Dynamic order rendering
Order statuses
Empty states
Status icons

Supported statuses:

Processing
Completed
Rejected
Add Balance System

Component:

src/components/modals/AddBalanceModal.jsx

Features:

Balance request
Transaction ID
Wish Money support
Manual review flow
User ID integration

Current state:

Frontend-only mock implementation.

Sidebar System

Component:

src/components/dashboard/DashboardSidebar.jsx

Features:

Responsive sidebar
Mobile menu
Navigation system
Logout button
User card
Navbar System

Component:

src/components/layout/Navbar.jsx

Features:

Responsive navigation
Mobile menu
Search shortcut
Scroll animations
Framer Motion integration
Styling System

SCSS architecture was organized into reusable layers.

Example:

styles/ui/

Contains:

_button.scss
_input.scss
_empty-state.scss

Imported globally through:

globals.scss
Animations

Animations are handled using:

framer-motion

Used in:

Hero section
Floating cards
Navbar
Mobile menu
Interactive UI elements
Current Project Status
Completed
Frontend architecture
UI system
Marketplace
Auth pages
Wallet
Orders
Checkout flow
Reusable components
Responsive design
State management
Remaining Main Tasks
Firebase Integration

Planned:

Firebase Auth
Firestore Database
Firebase Storage
Realtime updates
Admin Dashboard

Planned features:

Add services
Edit services
Delete services
Manage orders
Approve balance requests
User management
Security

Planned:

Protected routes
Role system
Admin permissions
Firestore rules
Deployment

Planned deployment platforms:

Firebase Hosting
Vercel
Development Rules
Important Rules
Always use reusable UI components
Avoid duplicated code
Use Context API for global state
Keep components modular
Maintain clean folder structure
Use reusable SCSS architecture
Future Improvements

Potential future upgrades:

Dark/Light mode
Notifications system
Real payment gateways
Arabic/English language system
Realtime admin panel
Analytics dashboard
Coupons system
Reviews system
Favorites system
Notes For Future Developers

This project currently works as a fully functional frontend MVP.

Most systems are already prepared for Firebase backend integration.

The architecture was intentionally designed to scale easily into a production-ready marketplace platform.