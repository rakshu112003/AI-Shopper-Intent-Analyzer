
# 🛍️ AI Shopper Intent Analyzer

An AI-powered ecommerce personalization mini-tool that analyzes customer shopping behavior events and classifies shoppers into different intent states with confidence scores, evidence, and recommended actions.

## 📌 Overview

AI Shopper Intent Analyzer helps ecommerce businesses understand customer behavior by analyzing user event streams such as product views, product comparisons, cart activity, and discount interactions.

The system classifies shoppers into different segments and suggests personalized actions to improve customer engagement and conversion.

## 🚀 Features

- 🧠 Shopper intent classification
- 📊 Confidence score generation
- 🔍 Evidence-based explanations
- 🎯 Personalized ecommerce recommendations
- ⚡ Interactive event simulator
- 🔄 Real-time analysis based on user events

## 👥 Shopper States

The engine identifies users as:

- 🟢 Browser
- 🔵 Comparer
- 🟡 Discount Seeker
- 🔴 Cart Abandoner
- ⭐ Loyal Customer

## 🛠️ Tech Stack

### Frontend
- React.js
- JavaScript
- HTML
- CSS

### Backend
- Node.js
- Express.js

### Tools
- Git & GitHub
- Vercel
- REST API

## 🏗️ Project Architecture
React Frontend | | ↓ Express Backend API | | ↓ Shopper Intent Classification Engine

## 📂 Project Structure
AI-Shopper-Intent-Analyzer
├── frontend │   ├── src │   ├── components │   ├── pages │   └── services │ ├── backend │   ├── routes │   ├── services │   ├── server.js │   └── package.json │ └── README.md

## 🧪 Example Input
view_product compare_products add_to_cart

## ✅ Example Output
Shopper State: Cart Abandoner
Confidence: 90%
Evidence:
view_product
compare_products
add_to_cart
Recommended Action: Send cart reminder with personalized discount

## ⚙️ Installation & Setup

### Clone Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
Frontend Setup
Bash
cd frontend
npm install
npm run dev
Backend Setup
Bash
cd backend
npm install
npm start
Create .env file in backend:

PORT=5000
🎯 Use Case
This tool can help ecommerce platforms:
Understand customer purchase intent
Improve personalization
Reduce cart abandonment
Provide targeted marketing actions
🔮 Future Improvements
Real LLM integration for advanced reasoning
Customer journey visualization
A/B testing recommendations
Competitor behavior analysis
👩‍💻 Author
Rakshitha HN
Software Engineer Candidate
- Product explanation ✅
- Architecture ✅
- Features ✅
- Setup instructions ✅
- Future improvements ✅


