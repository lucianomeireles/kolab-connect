# KolabConnect

This project is a frontend challenge for Kolab, built with Next.js, Chakra UI,
and i18n. The application allows users to register, login, create posts, and
comment on posts.

## Table of Contents

- Getting Started
- Prerequisites
- Installation
- Running the Project
- Project Structure
- Technologies Used
- Contributing
- License

## Getting Started

Follow these instructions to get a copy of the project up and running on your
local machine for development and testing purposes.

## Prerequisites

Node.js (>= 14.x) pnpm (>= 6.x)

## Installation

Clone the repository:

```
git clone https://github.com/lucianomeireles/kolab-connect.git
cd kolab-connect
```

Install dependencies:

```
pnpm install
```

## Running the Project

Start the development server:

```
pnpm dev
```

The application will be available at http://localhost:3000.

Build the project for production:

```
pnpm build
```

Run the production build:

```
pnpm start
```

## Project Structure

```
components
├── posts
│   ├── NewPost.tsx
│   ├── PostCard.tsx
│   ├── PostCardActions.tsx
│   ├── PostCardComments.tsx
│   ├── PostCardCommentForm.tsx
│   ├── PostCardCommentsItem.tsx
│   └── PostCardDescription.tsx
├── user
│   ├── UserAvatar.tsx
│   ├── UserDetailsCard.tsx
│   └── UserFilterForm.tsx
├── Header.tsx
context
├── AppContext.tsx
├── PostCardContext.tsx
models
├── Post.ts
├── PostComment.ts
├── User.ts
pages
├── index.tsx
├── login.tsx
├── user
│   ├── [userId].tsx
│   ├── search.tsx
services
├── apiClient.ts
├── posts
│   ├── post.service.ts
├── users
│   ├── user.service.ts
styles
└── globals.css
public
└── logo.svg
README.md
```

## Technologies Used
- [Next.js](https://nextjs.org/)
- [Chakra UI](https://chakra-ui.com/)
- [i18next](https://www.i18next.com/)
- [React Query](https://react-query.tanstack.com/)
- [TypeScript](https://www.typescriptlang.org/)


## Contributing

Fork the project Create your feature branch (git checkout -b
feature/AmazingFeature) Commit your changes (git commit -m 'Add some
AmazingFeature') Push to the branch (git push origin feature/AmazingFeature)
Open a Pull Request

## License

Distributed under the MIT License. See LICENSE for more information.
