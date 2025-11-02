# TaskFlow Wireframes

This directory contains wireframes and design mockups for the TaskFlow application.

## Wireframe Files

### 1. login-page.png
**Description:** Login page wireframe showing the authentication interface

**Key Elements:**
- TaskFlow branding/logo
- Email input field
- Password input field
- "Sign In" button
- "Don't have an account? Sign up" link
- Gradient background (purple to blue)
- Centered card layout

**Responsive Considerations:**
- Mobile: Full width card with padding
- Desktop: Max-width centered card (400-500px)

---

### 2. dashboard.png
**Description:** Main dashboard view after login

**Key Elements:**
- **Top Navigation Bar:**
  - TaskFlow logo (left)
  - Navigation links (Dashboard, All Tasks)
  - Notification bell with badge
  - User avatar with dropdown menu

- **Stats Cards (4 columns):**
  - Total Tasks (gray)
  - To Do (gray)
  - In Progress (blue)
  - Completed (green)

- **Action Section:**
  - "Tasks" heading
  - "+ New Task" button (primary color)

- **Task Creation Form** (when "New Task" clicked):
  - Title input
  - Description textarea
  - Priority dropdown
  - Status dropdown
  - Assign To dropdown
  - Due Date picker
  - "Create Task" button

- **Filter Section:**
  - Search input
  - Status dropdown filter
  - Priority dropdown filter
  - Assignee dropdown filter
  - "Clear Filters" button

- **Task List:**
  - Card-based layout
  - Each task card shows:
    - Title
    - Priority badge (color-coded)
    - Status badge
    - Description excerpt
    - Assigned user with avatar
    - Due date with calendar icon
    - Comment count
    - Action buttons (Start/Complete/Reopen)

**Responsive Considerations:**
- Mobile: Single column stats, stacked filters
- Tablet: 2 column stats
- Desktop: 4 column stats, inline filters

---

### 3. task-detail.png
**Description:** Individual task detail view

**Key Elements:**
- **Header:**
  - Back button
  - Task title
  - Priority badge
  - Status badge

- **Task Information:**
  - Description
  - Created by (user avatar + name)
  - Assigned to (user avatar + name)
  - Due date
  - Created date
  - Last updated

- **Actions:**
  - Edit button
  - Delete button (admin only)
  - Status change buttons

- **Comments Section:**
  - "Add Comment" input
  - Comment list showing:
    - User avatar
    - User name
    - Comment text
    - Timestamp
  
**Responsive Considerations:**
- Mobile: Stacked layout
- Desktop: Sidebar + main content

---

## Design System

### Colors
- **Primary:** #6366F1 (Indigo)
- **Secondary:** #64748B (Slate Gray)
- **Success:** #10B981 (Green)
- **Warning:** #F59E0B (Amber)
- **Danger:** #EF4444 (Red)
- **Background:** #F9FAFB (Gray 50)

### Priority Colors
- **High:** Red badge (#FEE2E2 bg, #991B1B text)
- **Medium:** Yellow badge (#FEF3C7 bg, #92400E text)
- **Low:** Blue badge (#DBEAFE bg, #1E40AF text)

### Status Colors
- **Todo:** Gray badge (#F3F4F6 bg, #374151 text)
- **In Progress:** Blue badge (#DBEAFE bg, #1E40AF text)
- **Completed:** Green badge (#D1FAE5 bg, #065F46 text)

### Typography
- **Headings:** Inter, sans-serif
- **Body:** Inter, sans-serif
- **Font Sizes:**
  - H1: 2rem (32px)
  - H2: 1.5rem (24px)
  - H3: 1.25rem (20px)
  - Body: 1rem (16px)
  - Small: 0.875rem (14px)

### Spacing
- Container padding: 1rem - 2rem
- Card padding: 1.5rem
- Element spacing: 0.5rem - 1rem
- Section spacing: 2rem - 3rem

### Components
- **Buttons:** Rounded corners (8px), padding 12px 24px
- **Cards:** White background, shadow, rounded 12px
- **Inputs:** Border, rounded 8px, focus ring
- **Badges:** Rounded full, padding 4px 12px

### Layout
- **Max Width:** 1280px (7xl)
- **Breakpoints:**
  - Mobile: < 640px
  - Tablet: 640px - 1024px
  - Desktop: > 1024px

---

## User Flow Diagrams

### Authentication Flow
```
Landing Page → Login Page → Dashboard
              ↓
         Register Page → Dashboard
```

### Task Management Flow
```
Dashboard → Click "New Task" → Fill Form → Submit → Task Created
          ↓
    View Task List → Click Task → Task Detail → Edit/Update
                   ↓
              Filter Tasks → Filtered Results
```

### Notification Flow
```
Task Assigned → Email Sent + In-App Notification
             ↓
User Clicks Bell → Notification List → Mark as Read
                 ↓
            Click Notification → Navigate to Task
```

---

## Accessibility Considerations

- High contrast ratios (WCAG AA compliant)
- Keyboard navigation support
- Screen reader friendly labels
- Focus indicators on interactive elements
- Alt text for icons and images
- Semantic HTML structure

---

## Notes for Implementation

1. All wireframes are high-fidelity representations
2. Actual implementation includes animations and transitions
3. Real-time updates not shown in static wireframes
4. Mobile wireframes available upon request
5. Dark mode designs in future iteration