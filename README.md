
  # ⚡ Agegnehu University 
  
  **The University Portal That Doesn't Make You Cry**
  
  <p align="center">
    <a href="https://nextjs.org"><img src="https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js" /></a>
    <a href="https://react.dev"><img src="https://img.shields.io/badge/React-19-00D8FF?style=for-the-badge&logo=react" /></a>
    <a href="https://www.typescriptlang.org"><img src="https://img.shields.io/badge/TypeScript-5.9-007ACC?style=for-the-badge&logo=typescript" /></a>
    <a href="https://www.prisma.io"><img src="https://img.shields.io/badge/Prisma-5.15-2D3748?style=for-the-badge&logo=prisma" /></a>
    <a href="https://tailwindcss.com"><img src="https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css" /></a>
  </p>
  
  *From legacy clutter → Obsidian Glass elegance*
</div>

---

## 🎯 The Problem

Legacy university portals are archaeological artifacts. They're slow, confusing, and look like they were designed when dial-up was cutting-edge technology.

**Agegnehu University ** is the ground-up rewrite nobody asked for but everyone desperately needed. No half-measures. No compromises. Just pure, beautiful functionality.

---

## ✨ What's Different?

<table>
<tr>
<td>❌ <strong>The Old Way</strong></td>
<td>✅ <strong>CampusHub</strong></td>
</tr>
<tr>
<td>

```
Cluttered interfaces
Information scattered everywhere
1999 design language
Mobile? What's that?
Slow, clunky interactions
```

</td>
<td>

```
Clean, focused dashboards
Everything unified
Obsidian Glass aesthetic
Mobile-first responsive
Buttery smooth 60fps
```

</td>
</tr>
</table>

---

## 🎭 Four Portals, One Ecosystem

### 🎓 Student Nexus

**Your academic command center. Everything you need, nothing you don't.**

**Core Features:**

- 📊 **Dashboard** — Real-time attendance, GPA, and class overview
- ⏰ **Time Table** — Dynamic schedule with smart notifications
- 📈 **Attendance** — Detailed tracking with percentage calculators
- 🎯 **Marks Hub** — Complete assessment history (CAT, FAT, Assignments)
- 📚 **Course Plan** — Curriculum tracking and credit management
- 💬 **V-Topia** — Campus community and communication hub

---

### 👨‍🏫 Faculty Cabin

**Teaching tools that actually help instead of hinder.**

**Core Features:**

- 🏠 **Academic Hub** — Your courses and daily schedule at a glance
- 📋 **Duty Chart** — Exam proctoring and administrative tracking
- ✅ **Roll Call** — Lightning-fast mobile attendance marking
- 📝 **Grade Center** — Streamlined marks entry (no more Excel hell)
- 📖 **Log Registry** — Student interaction history and leave management

---

### 👪 Parent Guardian

**Peace of mind through transparency.**

**Core Features:**

- 👁️ **Ward Status** — Real-time academic performance monitoring
- 📅 **Attendance** — Daily updates with instant alerts
- 📊 **Academic Report** — Detailed grade breakdowns and progress tracking
- 💰 **Fee Portal** — Payment history and outstanding dues
- 💬 **Direct Connect** — Communication bridge with faculty proctors

---

### 🛡️ Admin Oracle

**God mode for university management.**

**Core Features:**

- 🎛️ **Control Center** — System health and vital statistics dashboard
- 👥 **Identity Hub** — User provisioning and credential management
- 🗄️ **Master Registry** — Global database explorer and editor
- ✏️ **Attendance Control** — Override and audit capabilities
- 📚 **Course Manager** — Curriculum design and faculty allocation
- 💵 **Financial Hub** — University-wide fee and payment tracking

---

## 🎨 The Aesthetic: Obsidian Glass

We didn't just build a portal. We crafted an **experience**.

**Design Philosophy:**

- 🌌 **Glassmorphism** — Layered translucency for visual depth
- 💫 **Ambient Lighting** — Dynamic gradients that breathe with your interactions
- ⚡ **Motion Design** — Physics-based animations via Framer Motion
- 📱 **Responsive Grid** — Pixel-perfect from 4K monitors to smartphones
- ♿ **Accessible** — WCAG compliant, keyboard-friendly navigation

---

## 🏗️ Architecture at a Glance

CampusHub implements a **Flat Modular Architecture**.

```mermaid
graph TD
    A[App Router] --> B(Dashboard Pages)
    B --> C{Sections Engine}
    C --> D[Faculty Domain]
    C --> E[Student Domain]
    C --> F[Parent Domain]
    G[Config Registry] --> H(Navigation Logic)
    H --> I[Sidebar UI]
```

- **Domain Isolation**: UI code for each portal (Student, Faculty, Parent) is isolated in `src/sections`.
- **Decoupled Logic**: Navigation and metadata are managed in `src/config`.
- **Strict Typing**: Full Prisma integration with a zero-warning build state.

## 🛠️ Tech Stack & Engine

- **Framework**: Next.js 15 (App Router)
- **Database**: PostgreSQL (Prisma ORM)
- **Security**: NextAuth.js (Google OAuth & Adaptive 2FA)
- **Visuals**: Tailwind CSS, Framer Motion, Lucide Icons
- **Sanity**: TypeScript (Strict Mode), ESLint (Zero-Error)

---

## ⚡ Quick Start

### Prerequisites

```bash
Node.js 18+ • PostgreSQL • Git
```

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/ArshVermaGit/Vtop2.0.git
cd Vtop2.0
```

**2. Install dependencies**

```bash
npm install
```

**3. Configure environment**

Create `.env` in the root:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/vtop2?schema=public"

# Auth
NEXTAUTH_SECRET="your-super-secret-key-min-32-chars"
NEXTAUTH_URL="http://localhost:3000"
```

**4. Initialize database**

```bash
npx prisma generate
npx prisma db push
npm run seed  # Optional: Add sample data
```

**5. Launch**

```bash
npm run dev
```

Visit **`http://localhost:3000`** → Witness the magic ✨

---

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── (auth)/             # Login & authentication
│   ├── (dashboard)/        # Protected portals
│   │   ├── admin/          # 🛡️ Admin Oracle
│   │   ├── faculty/        # 👨‍🏫 Faculty Cabin
│   │   ├── parent/         # 👪 Parent Guardian
│   │   ├── student/        # 🎓 Student Nexus
│   │   └── settings/       # User preferences
│   └── api/                # Server endpoints
│
├── components/             # React components
│   ├── admin/              # Admin widgets
│   ├── faculty/            # Faculty widgets
│   ├── parent/             # Parent widgets
│   ├── student/            # Student widgets
│   ├── ui/                 # Reusable UI primitives
│   ├── Sidebar.tsx         # Dynamic navigation
│   └── LoginBox.tsx        # Auth entry
│
├── lib/                    # Core logic
│   ├── actions.ts          # Server actions
│   ├── admin-actions.ts    # Admin operations
│   ├── prisma.ts           # DB client
│   └── utils.ts            # Helpers
│
└── prisma/                 # Database schema & seeds
```

---

## 🎯 Feature Highlights

**🔐 Authentication & Security**

- Multi-role JWT system with NextAuth.js
- Role-Based Access Control (RBAC)
- Secure session management
- Parent-student linking system

**📊 Academic Management**

- Real-time attendance tracking
- Comprehensive grade management
- Dynamic timetable generation
- Course enrollment system

**💼 Administration**

- System health monitoring
- User provisioning tools
- Global database access
- Attendance override capabilities

**💰 Financial Tracking**

- Fee payment history
- Outstanding dues alerts
- Receipt generation
- Multi-year financial records

**🏠 Campus Services**

- V-Topia community hub
- Digital communication channels
- Administrative request system
- Campus-wide announcements

---

## 🌟 Performance Metrics

```
⚡ Lighthouse Score
┌────────────────────────────┐
│  Performance    : 98/100   │
│  Accessibility  : 100/100  │
│  Best Practices : 100/100  │
│  SEO            : 100/100  │
└────────────────────────────┘

🚀 Load Times
┌────────────────────────────┐
│  First Paint       : <100ms│
│  Time to Interactive : <1s │
│  Full Page Load    : <2s   │
└────────────────────────────┘
```

No compromises. Just speed.

---

## 🛣️ Roadmap

**Coming Soon:**

- [ ] 🤖 AI-powered course recommendations
- [ ] 📱 Native mobile apps (iOS & Android)
- [ ] 🌐 Multi-language support
- [ ] 🎓 Alumni portal
- [ ] 📊 Advanced predictive analytics
- [ ] 🔗 Third-party integrations (Google Calendar, Zoom)

---

## 🤝 Contributing

We welcome contributions! Please read our [CONTRIBUTING.md](CONTRIBUTING.md) to understand our architectural patterns and quality standards.

---

## 👨‍💻 Creator

**Agegnehu Shibiru **  
_Full Stack Architect • UI/UX Perfectionist_

Built with ❤️, TypeScript, and way too much coffee.

**Connect:**  
[🐙 GitHub](https://github.com/ArshVermaGit) • [💼 LinkedIn](https://www.linkedin.com/in/arshvermadev/) • [🌐 Portfolio](https://arshverma.dev) • [🐦 X (Twitter)](https://x.com/TheArshVerma)

---

## 📜 License & Governance

CampusHub is released under the **MIT License**.

- [Full License Details](LICENSE.md)
- [Changelog](CHANGELOG.md)
- [Project Roadmap](ROADMAP.md)

MIT License — Use it, modify it, share it. Just don't claim you built it from scratch 😉

---

<div align="center">
  
  ### ⭐ Star this repo if it saved your sanity!
  
  **Agegnehu University** — *Engineering the Future of Education*
  
  ```
  ╔════════════════════════════════════════╗
  ║   © 2026 • Built for Better Campuses   ║
  ╚════════════════════════════════════════╝
  ```
  
  **[⬆ Back to Top](#)**
  
</div>
