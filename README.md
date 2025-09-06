# QuickAid — Emergency Info at Your Fingertips

QuickAid is a web app that generates a QR code containing essential medical information.  
In emergencies, first responders can scan the QR to instantly access allergies, blood type, medications, and emergency contacts — no apps, no logins, no server required.

---

## What is QuickAid?

- Instant access: QR updates live as you type  
- Privacy-first: data is encoded directly in the QR (never uploaded)  
- Practical: download, print, or set as lock screen wallpaper  
- Simple architecture: no backend, no database  

---

## Features

- Landing page with clear call-to-action
- Form for entering:
  - Name
  - Blood Group
  - Allergies
  - Medications
  - Emergency Contact
- Live QR code generation (canvas rendering)
- One-click PNG download
- Responsive design with Tailwind styling

---

## Tech Stack

- Next.js / React (App Router)
- Tailwind CSS
- lucide-react (icons)
- qrcode (QR rendering)

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm, pnpm, or yarn

### Installation

```bash
# clone the repo, then:
npm install
